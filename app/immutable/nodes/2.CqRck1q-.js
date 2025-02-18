var rw=Object.defineProperty;var ow=(t,e,n)=>e in t?rw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>ow(t,typeof e!="symbol"?e+"":e,n);import{b as cu,e as iw,a as T,n as de,t as oe,c as Ne,d as aw}from"../chunks/disclose-version.c9nfQR10.js";import{i as ge}from"../chunks/legacy.BeICcgj8.js";import{A as vh,b as Su,h as wt,G as li,F as ci,O as ph,Y as mh,ad as sw,ae as Ag,U as ia,c as dr,au as Ms,af as Nu,a as Xs,ag as Ch,C as uu,av as Sg,aw as lw,H as cw,ax as uw,d as xu,B as Tu,V as dw,L as _w,I as du,ay as Du,az as Ru,a1 as fw,a7 as Ng,aA as Eh,aB as gw,aC as hw,R as Ih,W as vw,S as pw,E as mw,aD as ku,aE as Cw,ac as Ew,aF as Iw,aG as bw,ai as Mu,M as bh,aH as ww,j as Ow,a9 as yw,v as V,w as Y,p as ae,x as $,t as ee,e as se,l as p,as as Ze,aI as k,$ as S,aJ as Ee,aK as D,m as Z,f as ue,aL as Lw,aM as xo,aN as jc,o as xg}from"../chunks/runtime.3UijFPFW.js";import{d as Aw,p as U,s as it,i as he,e as Ea,f as Ce,b as To,c as wh,m as Oh}from"../chunks/props.CJazo4uA.js";import{i as Sw,a as Nw,b as xw,c as Tw,d as Dw,e as Rw,n as kw,f as Mw,l as Gu,g as Ue,s as rt,r as Gw}from"../chunks/render.7_-GRy3G.js";import{d as Go,w as Ht,g as st}from"../chunks/index.HRmy8yV3.js";import{a as Uw,o as yh}from"../chunks/index-client.CTQVjhPh.js";function Lt(t,e){return e}function Fw(t,e,n,r){for(var o=[],a=e.length,s=0;s<a;s++)lw(e[s].e,o,!0);var c=a>0&&o.length===0&&n!==null;if(c){var u=n.parentNode;cw(u),u.append(n),r.clear(),to(t,e[0].prev,e[a-1].next)}uw(o,()=>{for(var _=0;_<a;_++){var v=e[_];c||(r.delete(v.k),to(t,v.prev,v.next)),xu(v.e,!c)}})}function lt(t,e,n,r,o,a=null){var s=t,c={flags:e,items:new Map,first:null},u=(e&Eh)!==0;if(u){var _=t;s=wt?li(Tu(_)):_.appendChild(vh())}wt&&ci();var v=null,f=!1;Su(()=>{var g=n(),m=ph(g)?g:g==null?[]:mh(g),C=m.length;if(f&&C===0)return;f=C===0;let I=!1;if(wt){var b=s.data===sw;b!==(C===0)&&(s=Ag(),li(s),ia(!1),I=!0)}if(wt){for(var w=null,L,R=0;R<C;R++){if(dr.nodeType===8&&dr.data===dw){s=dr,I=!0,ia(!1);break}var M=m[R],F=r(M,R);L=Lh(dr,c,w,null,M,F,R,o,e),c.items.set(F,L),w=L}C>0&&li(Ag())}if(!wt){var P=_w;$w(m,c,s,o,e,(P.f&Ms)!==0,r)}a!==null&&(C===0?v?Nu(v):v=Xs(()=>a(s)):v!==null&&Ch(v,()=>{v=null})),I&&ia(!0),n()}),wt&&(s=dr)}function $w(t,e,n,r,o,a,s,c){var _e,Ae,Ve,ye;var u=(o&gw)!==0,_=(o&(Du|Ru))!==0,v=t.length,f=e.items,g=e.first,m=g,C,I=null,b,w=[],L=[],R,M,F,P;if(u)for(P=0;P<v;P+=1)R=t[P],M=s(R,P),F=f.get(M),F!==void 0&&((_e=F.a)==null||_e.measure(),(b??(b=new Set)).add(F));for(P=0;P<v;P+=1){if(R=t[P],M=s(R,P),F=f.get(M),F===void 0){var B=m?m.e.nodes_start:n;I=Lh(B,e,I,I===null?e.first:I.next,R,M,P,r,o),f.set(M,I),w=[],L=[],m=I.next;continue}if(_&&Hw(F,R,P,o),F.e.f&Ms&&(Nu(F.e),u&&((Ae=F.a)==null||Ae.unfix(),(b??(b=new Set)).delete(F))),F!==m){if(C!==void 0&&C.has(F)){if(w.length<L.length){var K=L[0],J;I=K.prev;var ce=w[0],Q=w[w.length-1];for(J=0;J<w.length;J+=1)Tg(w[J],K,n);for(J=0;J<L.length;J+=1)C.delete(L[J]);to(e,ce.prev,Q.next),to(e,I,ce),to(e,Q,K),m=K,I=Q,P-=1,w=[],L=[]}else C.delete(F),Tg(F,m,n),to(e,F.prev,F.next),to(e,F,I===null?e.first:I.next),to(e,I,F),I=F;continue}for(w=[],L=[];m!==null&&m.k!==M;)(a||!(m.e.f&Ms))&&(C??(C=new Set)).add(m),L.push(m),m=m.next;if(m===null)continue;F=m}w.push(F),I=F,m=F.next}if(m!==null||C!==void 0){for(var re=C===void 0?[]:mh(C);m!==null;)(a||!(m.e.f&Ms))&&re.push(m),m=m.next;var pe=re.length;if(pe>0){var me=o&Eh&&v===0?n:null;if(u){for(P=0;P<pe;P+=1)(Ve=re[P].a)==null||Ve.measure();for(P=0;P<pe;P+=1)(ye=re[P].a)==null||ye.fix()}Fw(e,re,me,f)}}u&&du(()=>{var we;if(b!==void 0)for(F of b)(we=F.a)==null||we.apply()}),uu.first=e.first&&e.first.e,uu.last=I&&I.e}function Hw(t,e,n,r){r&Du&&Sg(t.v,e),r&Ru?Sg(t.i,n):t.i=n}function Lh(t,e,n,r,o,a,s,c,u,_){var v=(u&Du)!==0,f=(u&hw)===0,g=v?f?fw(o):Ng(o):o,m=u&Ru?Ng(s):s,C={i:m,v:g,k:a,a:null,e:null,prev:n,next:r};try{return C.e=Xs(()=>c(t,g,m),wt),C.e.prev=n&&n.e,C.e.next=r&&r.e,n===null?e.first=C:(n.next=C,n.e.next=C.e),r!==null&&(r.prev=C,r.e.prev=C.e),C}finally{}}function Tg(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,o=e?e.e.nodes_start:n,a=t.e.nodes_start;a!==r;){var s=Ih(a);o.before(a),a=s}}function to(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Pw(t,e,n,r,o){var a=t,s="",c;Su(()=>{if(s===(s=e()??"")){wt&&ci();return}c!==void 0&&(xu(c),c=void 0),s!==""&&(c=Xs(()=>{if(wt){dr.data;for(var u=ci(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=Ih(u);if(u===null)throw vw(),pw;cu(dr,_),a=li(u);return}var v=s+"",f=iw(v);cu(Tu(f),f.lastChild),a.before(f)}))})}function dt(t,e,n,r,o){var c;wt&&ci();var a=(c=e.$$slots)==null?void 0:c[n],s=!1;a===!0&&(a=e[n==="default"?"children":n],s=!0),a===void 0||a(t,s?()=>r:r)}function Ah(t,e,n,r,o,a){let s=wt;wt&&ci();var c,u,_=null;wt&&dr.nodeType===1&&(_=dr,ci());var v=wt?dr:t,f;Su(()=>{const g=e()||null;var m=g==="svg"?ku:null;g!==c&&(f&&(g===null?Ch(f,()=>{f=null,u=null}):g===u?Nu(f):xu(f)),g&&g!==u&&(f=Xs(()=>{if(_=wt?_:m?document.createElementNS(m,g):document.createElement(g),cu(_,_),r){wt&&Sw(g)&&_.append(document.createComment(""));var C=wt?Tu(_):_.appendChild(vh());wt&&(C===null?ia(!1):li(C)),r(_,C)}uu.nodes_end=_,v.before(_)})),c=g,c&&(u=c))},mw),s&&(ia(!0),li(v))}function Sh(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(n=Sh(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Bw(){for(var t,e,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=Sh(t))&&(r&&(r+=" "),r+=e);return r}function Nh(t){return typeof t=="object"?Bw(t):t??""}function qt(t){if(wt){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;A(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var o=t.checked;A(t,"checked",null),t.checked=o}}};t.__on_r=n,bw(n),Nw()}}function Ww(t,e){var n=t.__attributes??(t.__attributes={});n.value===(n.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e)}function xh(t,e){var n=t.__attributes??(t.__attributes={});n.checked!==(n.checked=e??void 0)&&(t.checked=e)}function zw(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function A(t,e,n,r){var o=t.__attributes??(t.__attributes={});wt&&(o[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||o[e]!==(o[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Cw]=n),n==null?t.removeAttribute(e):typeof n!="string"&&Dh(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function Th(t,e,n,r,o=!1,a=!1,s=!1){var c=e||{},u=t.tagName==="OPTION";for(var _ in e)_ in n||(n[_]=null);n.class&&(n.class=Nh(n.class));var v=Dh(t),f=t.__attributes??(t.__attributes={});for(const w in n){let L=n[w];if(u&&w==="value"&&L==null){t.value=t.__value="",c[w]=L;continue}var g=c[w];if(L!==g){c[w]=L;var m=w[0]+w[1];if(m!=="$$"){if(m==="on"){const R={},M="$$"+w;let F=w.slice(2);var C=Mw(F);if(xw(F)&&(F=F.slice(0,-7),R.capture=!0),!C&&g){if(L!=null)continue;t.removeEventListener(F,c[M],R),c[M]=null}if(L!=null)if(C)t[`__${F}`]=L,Dw([F]);else{let P=function(B){c[w].call(this,B)};c[M]=Tw(F,t,P,R)}else C&&(t[`__${F}`]=void 0)}else if(w==="style"&&L!=null)t.style.cssText=L+"";else if(w==="autofocus")Rw(t,!!L);else if(w==="__value"||w==="value"&&L!=null)t.value=t[w]=t.__value=L;else if(w==="selected"&&u)zw(t,L);else{var I=w;o||(I=kw(I));var b=I==="defaultValue"||I==="defaultChecked";if(L==null&&!a&&!b)if(f[w]=null,I==="value"||I==="checked"){let R=t;if(I==="value"){let M=R.defaultValue;R.removeAttribute(I),R.defaultValue=M}else{let M=R.defaultChecked;R.removeAttribute(I),R.defaultChecked=M}}else t.removeAttribute(w);else b||v.includes(I)&&(a||typeof L!="string")?t[I]=L:typeof L!="function"&&(wt&&(I==="src"||I==="href"||I==="srcset")||A(t,I,L))}w==="style"&&"__styles"in t&&(t.__styles={})}}}return c}var Dg=new Map;function Dh(t){var e=Dg.get(t.nodeName);if(e)return e;Dg.set(t.nodeName,e=[]);for(var n,r=t,o=Element.prototype;o!==r;){n=Iw(r);for(var a in n)n[a].set&&e.push(a);r=Ew(r)}return e}function oo(t,e,n){var r=t.__className,o=Rh(e);wt&&t.getAttribute("class")===o?t.__className=o:(r!==o||wt&&t.getAttribute("class")!==o)&&(o===""?t.removeAttribute("class"):t.setAttribute("class",o),t.__className=o)}function Yw(t,e,n){var r=t.__className,o=Rh(e);wt&&t.className===o?t.__className=o:(r!==o||wt&&t.className!==o)&&(e==null?t.removeAttribute("class"):t.className=o,t.__className=o)}function Rh(t,e){return(t??"")+""}function yt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function qn(t,e,n=e){var r=ww();Gu(t,"input",o=>{var a=o?t.defaultValue:t.value;if(a=qc(t)?Kc(a):a,n(a),r&&a!==(a=e())){var s=t.selectionStart,c=t.selectionEnd;t.value=a??"",c!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(c,t.value.length))}}),(wt&&t.defaultValue!==t.value||Ow(e)==null&&t.value)&&n(qc(t)?Kc(t.value):t.value),Mu(()=>{var o=e();qc(t)&&o===Kc(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}const Vc=new Set;function Zs(t,e,n,r,o=r){var a=n.getAttribute("type")==="checkbox",s=t;let c=!1;if(e!==null)for(var u of e)s=s[u]??(s[u]=[]);s.push(n),Gu(n,"change",()=>{var _=n.__value;a&&(_=Rg(s,_,n.checked)),o(_)},()=>o(a?[]:null)),Mu(()=>{var _=r();if(wt&&n.defaultChecked!==n.checked){c=!0;return}a?(_=_||[],n.checked=_.includes(n.__value)):n.checked=Aw(n.__value,_)}),bh(()=>{var _=s.indexOf(n);_!==-1&&s.splice(_,1)}),Vc.has(s)||(Vc.add(s),du(()=>{s.sort((_,v)=>_.compareDocumentPosition(v)===4?-1:1),Vc.delete(s)})),du(()=>{if(c){var _;if(a)_=Rg(s,_,n.checked);else{var v=s.find(f=>f.checked);_=v==null?void 0:v.__value}o(_)}})}function Rg(t,e,n){for(var r=new Set,o=0;o<t.length;o+=1)t[o].checked&&r.add(t[o].__value);return n||r.delete(e),Array.from(r)}function qc(t){var e=t.type;return e==="number"||e==="range"}function Kc(t){return t===""?null:+t}function jw(t,e,n=e){Gu(t,"change",()=>{n(t.files)}),Mu(()=>{t.files=e()})}function Qe(t,e,n){var r=yw(t,e);r&&r.set&&(t[e]=n,bh(()=>{t[e]=null}))}function Vw(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Xn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function Xc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function qw(t,e){var a;var n=(a=t.$$events)==null?void 0:a[e.type],r=ph(n)?n.slice():n==null?[]:[n];for(var o of r)o.call(this,e)}const Kw=!0,NP=Object.freeze(Object.defineProperty({__proto__:null,prerender:Kw},Symbol.toStringTag,{value:"Module"}));function Xw(){return{darkMode:!0,penToolActive:!0,letterToolActive:!1,highlightCellsSeenBySelection:!0,checkConflicts:!0,highlightPencilmarkConflicts:!0,hideFog:!1,showSolution:!1}}const zt=Ht(Xw()),Zw=Go(zt,t=>t.darkMode);function Qw(t){zt.update(e=>({...e,darkMode:t}))}function Jw(){zt.update(t=>({...t,darkMode:!t.darkMode}))}function eO(t){zt.update(e=>({...e,penToolActive:t}))}function tO(t){zt.update(e=>({...e,letterToolActive:t}))}function nO(t){zt.update(e=>({...e,highlightCellsSeenBySelection:t}))}function rO(t){zt.update(e=>({...e,checkConflicts:t}))}function oO(t){zt.update(e=>({...e,highlightPencilmarkConflicts:t}))}function iO(t){zt.update(e=>({...e,hideFog:t}))}function aO(t){zt.update(e=>({...e,showSolution:t}))}const kg=encodeURIComponent("4.3.5");let ur={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const So=[];let Zc;function na(){if(!Zc){const e=`importScripts(${JSON.stringify(ur.workerURL)});`;Zc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Zc);t.postMessage({wasmURL:ur.wasmURL?ur.wasmURL.toString():new URL(`./minizinc.wasm?version=${kg}`,ur.workerURL).toString(),dataURL:ur.dataURL?ur.dataURL.toString():new URL(`./minizinc.data?version=${kg}`,ur.workerURL).toString()}),So.push({worker:t,runCount:0})}function kh(){for(;So.length<ur.numWorkers;)na()}async function sO(t){if(ur={...ur,...t},So.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");kh(),await Promise.race(So.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Uu{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Uu;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){kh();const o=[];let a=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;a={...this.vfs,[u]:JSON.stringify(n)},o.push(u)}let{worker:s,runCount:c}=So.pop();return s.postMessage({jsonStream:!0,files:a,args:[...o,...e,...this._toRun],outputFiles:r}),{worker:s,runCount:c+1}}check(e){return new Promise((n,r)=>{const o={...e},{worker:a,runCount:s}=this._run(["--model-check-only"],o.options),c=[];a.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":s<10?So.push({worker:a,runCount:s}):(a.terminate(),na()),n(c)}}})}interface(e){return new Promise((n,r)=>{const o={...e},{worker:a,runCount:s}=this._run(["-c","--model-interface-only"],o.options),c=[];let u=null;a.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":s<10?So.push({worker:a,runCount:s}):(a.terminate(),na()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,o=`_fzn_${r++}.fzn`;for(;o in this.vfs;)o=`_fzn_${r++}.fzn`;const a=["-c","--fzn",o],{worker:s}=this._run(a,n.options,[o]);na();let c={},u=!1,_=null;return s.onmessage=v=>{if(c[v.data.type])for(const f of c[v.data.type])f(v.data);switch(v.data.type){case"exit":s.terminate(),u=!0,c={};break;case"error":_||(_=v.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,s.terminate(),c.exit)for(const v of c.exit)v({type:"exit",code:null});c={}}},on(v,f){c[v]?c[v].add(f):c[v]=new Set([f])},off(v,f){c[v]&&c[v].delete(f)},then(v,f){const g=m=>{if(m.code===0)v(m.outputFiles[o]);else{const C=_?{message:_.message,...m}:m;if(!f)throw C;f(C)}};c.exit?c.exit.add(g):c.exit=new Set([g])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:o}=this._run(r,n.options);na();let a=null,s={},c=!1,u=null,_={},v="UNKNOWN";return o.onmessage=f=>{if(s[f.data.type])for(const g of s[f.data.type])g(f.data);switch(f.data.type){case"exit":o.terminate(),c=!0,s={};break;case"error":a||(a=f.data);break;case"statistics":_={..._,...f.data.statistics};break;case"solution":u=f.data,v="SATISFIED";break;case"status":v=f.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,o.terminate(),s.exit)for(const f of s.exit)f({type:"exit",code:null});s={}}},on(f,g){s[f]?s[f].add(g):s[f]=new Set([g])},off(f,g){s[f]&&s[f].delete(g)},then(f,g){const m=C=>{if(C.code===0)f({status:v,solution:u,statistics:_});else{const I=a?{message:a.message,...C}:C;if(!g)throw I;g(I)}};s.exit?s.exit.add(m):s.exit=new Set([m])}}}}var hi=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(hi||{}),Fu=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(Fu||{}),Mh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(Mh||{}),Gh=(t=>(t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(Gh||{}),Uh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t))(Uh||{}),Fh=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(Fh||{}),Qs=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(Qs||{}),$u=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))($u||{}),Hu=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t))(Hu||{}),Pu=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t))(Pu||{}),Bu=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Bu||{}),Wu=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Wu||{}),zu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t))(zu||{}),Yu=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Yu||{}),ju=(t=>(t.CLONE_REGION="Clone Region",t))(ju||{}),Vu=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t))(Vu||{}),qu=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(qu||{}),Ku=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Ku||{}),Xu=(t=>(t.MAZE_WALL="Maze Wall",t))(Xu||{}),Zu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(Zu||{}),Qu=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Qu||{}),$h=(t=>(t.PEN_TOOL="Pen Tool",t))($h||{});const Ju={...Mh,...Gh,...Uh,...Fh},Hh={...Qs,...$u,...Hu,...Pu,...Bu,...Wu,...zu,...Yu,...ju,...Vu,...qu,...Ku,...Xu,...Zu},d={...Fu,...Ju,...Hh,...Qu,...$h};var x=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(x||{});function lO(t){return Object.values(Ju).includes(t)}function cO(t){return Object.values(Hh).includes(t)}function ed(t){return Object.values($u).includes(t)||t===d.COSMETIC_CELL_ARROW}function td(t){return Object.values(Hu).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function uO(t){return Object.values(Qs).includes(t)||ed(t)||td(t)||t===d.COSMETIC_CELL_SHAPE||t===d.COSMETIC_CELL_ARROW||t===d.COSMETIC_CELL_MULTI_ARROW}function nd(t){return Object.values(Pu).includes(t)||t===d.COSMETIC_EDGE}function Ph(t){return Object.values(Bu).includes(t)||t===d.COSMETIC_CORNER}function rd(t){return Object.values(Wu).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function od(t){return Object.values(zu).includes(t)||t===d.COSMETIC_ARROW}function id(t){return Object.values(Yu).includes(t)||t===d.COSMETIC_CAGE}function Bh(t){return Object.values(Ku).includes(t)}function Wh(t){return Object.values(Xu).includes(t)}function zh(t){return Object.values(ju).includes(t)}function ga(t){const e=Object.values(Vu),n=Object.values(qu);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function dO(t){return Object.values(Zu).includes(t)}function _O(t){return Object.values(Qu).includes(t)}function ad(t){return Object.values(Fu).includes(t)}const fO=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],gO=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint"];function Yh(t){for(const e of Object.values(d))if(e===t)return e}function jh(t,e){return Object.values(e).includes(t)}class ui extends Map{constructor(){super()}setConstraint(e,n){return lO(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new ui;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new ui;if(!e)return n;for(const[r,o]of Object.entries(e)){const a=Yh(r);a!==void 0&&jh(a,Ju)&&typeof o=="boolean"&&o&&n.setConstraint(a,o)}return n}}var We=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(We||{});function Vh(t){if(!(t in We))throw Error(" not a key in DIRECTION");return We[t]}function ze(t,e){return t.r===e.r&&t.c===e.c}function qh(t,e){return{r:t.r+e.r,c:t.c+e.c}}function hO(t,e){return{r:t.r*e,c:t.c*e}}function Kh(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function vi(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!ze(t,e)}function vO(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Fs(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Kt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Js(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function pO(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function sd(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function mO(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const CO=new Map([[6,We.N],[2,We.S],[0,We.E],[4,We.W],[7,We.NE],[5,We.NW],[1,We.SE],[3,We.SW]]);function ld(t){t=t%8;const e=CO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const EO=new Map([[We.N,{r:-1,c:0}],[We.S,{r:1,c:0}],[We.E,{r:0,c:1}],[We.W,{r:0,c:-1}],[We.NE,{r:-1,c:1}],[We.NW,{r:-1,c:-1}],[We.SE,{r:1,c:1}],[We.SW,{r:1,c:-1}]]);function el(t){const e=EO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Xh(t,e){const n=el(e);return qh(t,n)}function cd(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Zh(t,e,n=!1){const r=t.some(a=>ze(a,e)),o=n?t.some(a=>vi(a,e)):t.some(a=>vO(a,e));if(!r&&o){const a=[...t,e];return Fs(a),a}return t}function Ns(t){return`R${t.r+1}C${t.c+1}`}function ud(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ra={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var IO=ra.exports,Mg;function bO(){return Mg||(Mg=1,function(t,e){(function(){var n,r="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,v="__lodash_placeholder__",f=1,g=2,m=4,C=1,I=2,b=1,w=2,L=4,R=8,M=16,F=32,P=64,B=128,K=256,J=512,ce=30,Q="...",re=800,pe=16,me=1,_e=2,Ae=3,Ve=1/0,ye=9007199254740991,we=17976931348623157e292,ct=NaN,qe=4294967295,Ln=qe-1,Fn=qe>>>1,Pr=[["ary",B],["bind",b],["bindKey",w],["curry",R],["curryRight",M],["flip",J],["partial",F],["partialRight",P],["rearg",K]],Jt="[object Arguments]",Cr="[object Array]",ho="[object AsyncFunction]",ar="[object Boolean]",$n="[object Date]",Bo="[object DOMException]",Br="[object Error]",kt="[object Function]",Te="[object GeneratorFunction]",Ie="[object Map]",ke="[object Number]",xe="[object Null]",At="[object Object]",$a="[object Promise]",Ol="[object Proxy]",vo="[object RegExp]",er="[object Set]",Ri="[object String]",Ha="[object Symbol]",bp="[object Undefined]",ki="[object WeakMap]",wp="[object WeakSet]",Mi="[object ArrayBuffer]",Wo="[object DataView]",yl="[object Float32Array]",Ll="[object Float64Array]",Al="[object Int8Array]",Sl="[object Int16Array]",Nl="[object Int32Array]",xl="[object Uint8Array]",Tl="[object Uint8ClampedArray]",Dl="[object Uint16Array]",Rl="[object Uint32Array]",Op=/\b__p \+= '';/g,yp=/\b(__p \+=) '' \+/g,Lp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Zd=/&(?:amp|lt|gt|quot|#39);/g,Qd=/[&<>"']/g,Ap=RegExp(Zd.source),Sp=RegExp(Qd.source),Np=/<%-([\s\S]+?)%>/g,xp=/<%([\s\S]+?)%>/g,Jd=/<%=([\s\S]+?)%>/g,Tp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dp=/^\w*$/,Rp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kl=/[\\^$.*+?()[\]{}|]/g,kp=RegExp(kl.source),Ml=/^\s+/,Mp=/\s/,Gp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Up=/\{\n\/\* \[wrapped with (.+)\] \*/,Fp=/,? & /,$p=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Hp=/[()=,{}\[\]\/\s]/,Pp=/\\(\\)?/g,Bp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,e_=/\w*$/,Wp=/^[-+]0x[0-9a-f]+$/i,zp=/^0b[01]+$/i,Yp=/^\[object .+?Constructor\]$/,jp=/^0o[0-7]+$/i,Vp=/^(?:0|[1-9]\d*)$/,qp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Pa=/($^)/,Kp=/['\n\r\u2028\u2029\\]/g,Ba="\\ud800-\\udfff",Xp="\\u0300-\\u036f",Zp="\\ufe20-\\ufe2f",Qp="\\u20d0-\\u20ff",t_=Xp+Zp+Qp,n_="\\u2700-\\u27bf",r_="a-z\\xdf-\\xf6\\xf8-\\xff",Jp="\\xac\\xb1\\xd7\\xf7",em="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",tm="\\u2000-\\u206f",nm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o_="A-Z\\xc0-\\xd6\\xd8-\\xde",i_="\\ufe0e\\ufe0f",a_=Jp+em+tm+nm,Gl="['’]",rm="["+Ba+"]",s_="["+a_+"]",Wa="["+t_+"]",l_="\\d+",om="["+n_+"]",c_="["+r_+"]",u_="[^"+Ba+a_+l_+n_+r_+o_+"]",Ul="\\ud83c[\\udffb-\\udfff]",im="(?:"+Wa+"|"+Ul+")",d_="[^"+Ba+"]",Fl="(?:\\ud83c[\\udde6-\\uddff]){2}",$l="[\\ud800-\\udbff][\\udc00-\\udfff]",zo="["+o_+"]",__="\\u200d",f_="(?:"+c_+"|"+u_+")",am="(?:"+zo+"|"+u_+")",g_="(?:"+Gl+"(?:d|ll|m|re|s|t|ve))?",h_="(?:"+Gl+"(?:D|LL|M|RE|S|T|VE))?",v_=im+"?",p_="["+i_+"]?",sm="(?:"+__+"(?:"+[d_,Fl,$l].join("|")+")"+p_+v_+")*",lm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",cm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",m_=p_+v_+sm,um="(?:"+[om,Fl,$l].join("|")+")"+m_,dm="(?:"+[d_+Wa+"?",Wa,Fl,$l,rm].join("|")+")",_m=RegExp(Gl,"g"),fm=RegExp(Wa,"g"),Hl=RegExp(Ul+"(?="+Ul+")|"+dm+m_,"g"),gm=RegExp([zo+"?"+c_+"+"+g_+"(?="+[s_,zo,"$"].join("|")+")",am+"+"+h_+"(?="+[s_,zo+f_,"$"].join("|")+")",zo+"?"+f_+"+"+g_,zo+"+"+h_,cm,lm,l_,um].join("|"),"g"),hm=RegExp("["+__+Ba+t_+i_+"]"),vm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,pm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],mm=-1,St={};St[yl]=St[Ll]=St[Al]=St[Sl]=St[Nl]=St[xl]=St[Tl]=St[Dl]=St[Rl]=!0,St[Jt]=St[Cr]=St[Mi]=St[ar]=St[Wo]=St[$n]=St[Br]=St[kt]=St[Ie]=St[ke]=St[At]=St[vo]=St[er]=St[Ri]=St[ki]=!1;var Ot={};Ot[Jt]=Ot[Cr]=Ot[Mi]=Ot[Wo]=Ot[ar]=Ot[$n]=Ot[yl]=Ot[Ll]=Ot[Al]=Ot[Sl]=Ot[Nl]=Ot[Ie]=Ot[ke]=Ot[At]=Ot[vo]=Ot[er]=Ot[Ri]=Ot[Ha]=Ot[xl]=Ot[Tl]=Ot[Dl]=Ot[Rl]=!0,Ot[Br]=Ot[kt]=Ot[ki]=!1;var Cm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Em={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Im={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},bm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},wm=parseFloat,Om=parseInt,C_=typeof xs=="object"&&xs&&xs.Object===Object&&xs,ym=typeof self=="object"&&self&&self.Object===Object&&self,jt=C_||ym||Function("return this")(),Pl=e&&!e.nodeType&&e,po=Pl&&!0&&t&&!t.nodeType&&t,E_=po&&po.exports===Pl,Bl=E_&&C_.process,Hn=function(){try{var j=po&&po.require&&po.require("util").types;return j||Bl&&Bl.binding&&Bl.binding("util")}catch{}}(),I_=Hn&&Hn.isArrayBuffer,b_=Hn&&Hn.isDate,w_=Hn&&Hn.isMap,O_=Hn&&Hn.isRegExp,y_=Hn&&Hn.isSet,L_=Hn&&Hn.isTypedArray;function An(j,ne,X){switch(X.length){case 0:return j.call(ne);case 1:return j.call(ne,X[0]);case 2:return j.call(ne,X[0],X[1]);case 3:return j.call(ne,X[0],X[1],X[2])}return j.apply(ne,X)}function Lm(j,ne,X,Se){for(var Ke=-1,gt=j==null?0:j.length;++Ke<gt;){var Pt=j[Ke];ne(Se,Pt,X(Pt),j)}return Se}function Pn(j,ne){for(var X=-1,Se=j==null?0:j.length;++X<Se&&ne(j[X],X,j)!==!1;);return j}function Am(j,ne){for(var X=j==null?0:j.length;X--&&ne(j[X],X,j)!==!1;);return j}function A_(j,ne){for(var X=-1,Se=j==null?0:j.length;++X<Se;)if(!ne(j[X],X,j))return!1;return!0}function Wr(j,ne){for(var X=-1,Se=j==null?0:j.length,Ke=0,gt=[];++X<Se;){var Pt=j[X];ne(Pt,X,j)&&(gt[Ke++]=Pt)}return gt}function za(j,ne){var X=j==null?0:j.length;return!!X&&Yo(j,ne,0)>-1}function Wl(j,ne,X){for(var Se=-1,Ke=j==null?0:j.length;++Se<Ke;)if(X(ne,j[Se]))return!0;return!1}function xt(j,ne){for(var X=-1,Se=j==null?0:j.length,Ke=Array(Se);++X<Se;)Ke[X]=ne(j[X],X,j);return Ke}function zr(j,ne){for(var X=-1,Se=ne.length,Ke=j.length;++X<Se;)j[Ke+X]=ne[X];return j}function zl(j,ne,X,Se){var Ke=-1,gt=j==null?0:j.length;for(Se&&gt&&(X=j[++Ke]);++Ke<gt;)X=ne(X,j[Ke],Ke,j);return X}function Sm(j,ne,X,Se){var Ke=j==null?0:j.length;for(Se&&Ke&&(X=j[--Ke]);Ke--;)X=ne(X,j[Ke],Ke,j);return X}function Yl(j,ne){for(var X=-1,Se=j==null?0:j.length;++X<Se;)if(ne(j[X],X,j))return!0;return!1}var Nm=jl("length");function xm(j){return j.split("")}function Tm(j){return j.match($p)||[]}function S_(j,ne,X){var Se;return X(j,function(Ke,gt,Pt){if(ne(Ke,gt,Pt))return Se=gt,!1}),Se}function Ya(j,ne,X,Se){for(var Ke=j.length,gt=X+(Se?1:-1);Se?gt--:++gt<Ke;)if(ne(j[gt],gt,j))return gt;return-1}function Yo(j,ne,X){return ne===ne?Wm(j,ne,X):Ya(j,N_,X)}function Dm(j,ne,X,Se){for(var Ke=X-1,gt=j.length;++Ke<gt;)if(Se(j[Ke],ne))return Ke;return-1}function N_(j){return j!==j}function x_(j,ne){var X=j==null?0:j.length;return X?ql(j,ne)/X:ct}function jl(j){return function(ne){return ne==null?n:ne[j]}}function Vl(j){return function(ne){return j==null?n:j[ne]}}function T_(j,ne,X,Se,Ke){return Ke(j,function(gt,Pt,bt){X=Se?(Se=!1,gt):ne(X,gt,Pt,bt)}),X}function Rm(j,ne){var X=j.length;for(j.sort(ne);X--;)j[X]=j[X].value;return j}function ql(j,ne){for(var X,Se=-1,Ke=j.length;++Se<Ke;){var gt=ne(j[Se]);gt!==n&&(X=X===n?gt:X+gt)}return X}function Kl(j,ne){for(var X=-1,Se=Array(j);++X<j;)Se[X]=ne(X);return Se}function km(j,ne){return xt(ne,function(X){return[X,j[X]]})}function D_(j){return j&&j.slice(0,G_(j)+1).replace(Ml,"")}function Sn(j){return function(ne){return j(ne)}}function Xl(j,ne){return xt(ne,function(X){return j[X]})}function Gi(j,ne){return j.has(ne)}function R_(j,ne){for(var X=-1,Se=j.length;++X<Se&&Yo(ne,j[X],0)>-1;);return X}function k_(j,ne){for(var X=j.length;X--&&Yo(ne,j[X],0)>-1;);return X}function Mm(j,ne){for(var X=j.length,Se=0;X--;)j[X]===ne&&++Se;return Se}var Gm=Vl(Cm),Um=Vl(Em);function Fm(j){return"\\"+bm[j]}function $m(j,ne){return j==null?n:j[ne]}function jo(j){return hm.test(j)}function Hm(j){return vm.test(j)}function Pm(j){for(var ne,X=[];!(ne=j.next()).done;)X.push(ne.value);return X}function Zl(j){var ne=-1,X=Array(j.size);return j.forEach(function(Se,Ke){X[++ne]=[Ke,Se]}),X}function M_(j,ne){return function(X){return j(ne(X))}}function Yr(j,ne){for(var X=-1,Se=j.length,Ke=0,gt=[];++X<Se;){var Pt=j[X];(Pt===ne||Pt===v)&&(j[X]=v,gt[Ke++]=X)}return gt}function ja(j){var ne=-1,X=Array(j.size);return j.forEach(function(Se){X[++ne]=Se}),X}function Bm(j){var ne=-1,X=Array(j.size);return j.forEach(function(Se){X[++ne]=[Se,Se]}),X}function Wm(j,ne,X){for(var Se=X-1,Ke=j.length;++Se<Ke;)if(j[Se]===ne)return Se;return-1}function zm(j,ne,X){for(var Se=X+1;Se--;)if(j[Se]===ne)return Se;return Se}function Vo(j){return jo(j)?jm(j):Nm(j)}function tr(j){return jo(j)?Vm(j):xm(j)}function G_(j){for(var ne=j.length;ne--&&Mp.test(j.charAt(ne)););return ne}var Ym=Vl(Im);function jm(j){for(var ne=Hl.lastIndex=0;Hl.test(j);)++ne;return ne}function Vm(j){return j.match(Hl)||[]}function qm(j){return j.match(gm)||[]}var Km=function j(ne){ne=ne==null?jt:qo.defaults(jt.Object(),ne,qo.pick(jt,pm));var X=ne.Array,Se=ne.Date,Ke=ne.Error,gt=ne.Function,Pt=ne.Math,bt=ne.Object,Ql=ne.RegExp,Xm=ne.String,Bn=ne.TypeError,Va=X.prototype,Zm=gt.prototype,Ko=bt.prototype,qa=ne["__core-js_shared__"],Ka=Zm.toString,mt=Ko.hasOwnProperty,Qm=0,U_=function(){var i=/[^.]+$/.exec(qa&&qa.keys&&qa.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Xa=Ko.toString,Jm=Ka.call(bt),e1=jt._,t1=Ql("^"+Ka.call(mt).replace(kl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Za=E_?ne.Buffer:n,jr=ne.Symbol,Qa=ne.Uint8Array,F_=Za?Za.allocUnsafe:n,Ja=M_(bt.getPrototypeOf,bt),$_=bt.create,H_=Ko.propertyIsEnumerable,es=Va.splice,P_=jr?jr.isConcatSpreadable:n,Ui=jr?jr.iterator:n,mo=jr?jr.toStringTag:n,ts=function(){try{var i=wo(bt,"defineProperty");return i({},"",{}),i}catch{}}(),n1=ne.clearTimeout!==jt.clearTimeout&&ne.clearTimeout,r1=Se&&Se.now!==jt.Date.now&&Se.now,o1=ne.setTimeout!==jt.setTimeout&&ne.setTimeout,ns=Pt.ceil,rs=Pt.floor,Jl=bt.getOwnPropertySymbols,i1=Za?Za.isBuffer:n,B_=ne.isFinite,a1=Va.join,s1=M_(bt.keys,bt),Bt=Pt.max,en=Pt.min,l1=Se.now,c1=ne.parseInt,W_=Pt.random,u1=Va.reverse,ec=wo(ne,"DataView"),Fi=wo(ne,"Map"),tc=wo(ne,"Promise"),Xo=wo(ne,"Set"),$i=wo(ne,"WeakMap"),Hi=wo(bt,"create"),os=$i&&new $i,Zo={},d1=Oo(ec),_1=Oo(Fi),f1=Oo(tc),g1=Oo(Xo),h1=Oo($i),is=jr?jr.prototype:n,Pi=is?is.valueOf:n,z_=is?is.toString:n;function y(i){if(Mt(i)&&!Xe(i)&&!(i instanceof at)){if(i instanceof Wn)return i;if(mt.call(i,"__wrapped__"))return jf(i)}return new Wn(i)}var Qo=function(){function i(){}return function(l){if(!Dt(l))return{};if($_)return $_(l);i.prototype=l;var h=new i;return i.prototype=n,h}}();function as(){}function Wn(i,l){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}y.templateSettings={escape:Np,evaluate:xp,interpolate:Jd,variable:"",imports:{_:y}},y.prototype=as.prototype,y.prototype.constructor=y,Wn.prototype=Qo(as.prototype),Wn.prototype.constructor=Wn;function at(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=qe,this.__views__=[]}function v1(){var i=new at(this.__wrapped__);return i.__actions__=Cn(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=Cn(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=Cn(this.__views__),i}function p1(){if(this.__filtered__){var i=new at(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function m1(){var i=this.__wrapped__.value(),l=this.__dir__,h=Xe(i),E=l<0,O=h?i.length:0,N=x0(0,O,this.__views__),G=N.start,W=N.end,q=W-G,ie=E?W:G-1,le=this.__iteratees__,fe=le.length,be=0,Me=en(q,this.__takeCount__);if(!h||!E&&O==q&&Me==q)return hf(i,this.__actions__);var He=[];e:for(;q--&&be<Me;){ie+=l;for(var et=-1,Pe=i[ie];++et<fe;){var ot=le[et],ut=ot.iteratee,Tn=ot.type,dn=ut(Pe);if(Tn==_e)Pe=dn;else if(!dn){if(Tn==me)continue e;break e}}He[be++]=Pe}return He}at.prototype=Qo(as.prototype),at.prototype.constructor=at;function Co(i){var l=-1,h=i==null?0:i.length;for(this.clear();++l<h;){var E=i[l];this.set(E[0],E[1])}}function C1(){this.__data__=Hi?Hi(null):{},this.size=0}function E1(i){var l=this.has(i)&&delete this.__data__[i];return this.size-=l?1:0,l}function I1(i){var l=this.__data__;if(Hi){var h=l[i];return h===u?n:h}return mt.call(l,i)?l[i]:n}function b1(i){var l=this.__data__;return Hi?l[i]!==n:mt.call(l,i)}function w1(i,l){var h=this.__data__;return this.size+=this.has(i)?0:1,h[i]=Hi&&l===n?u:l,this}Co.prototype.clear=C1,Co.prototype.delete=E1,Co.prototype.get=I1,Co.prototype.has=b1,Co.prototype.set=w1;function Er(i){var l=-1,h=i==null?0:i.length;for(this.clear();++l<h;){var E=i[l];this.set(E[0],E[1])}}function O1(){this.__data__=[],this.size=0}function y1(i){var l=this.__data__,h=ss(l,i);if(h<0)return!1;var E=l.length-1;return h==E?l.pop():es.call(l,h,1),--this.size,!0}function L1(i){var l=this.__data__,h=ss(l,i);return h<0?n:l[h][1]}function A1(i){return ss(this.__data__,i)>-1}function S1(i,l){var h=this.__data__,E=ss(h,i);return E<0?(++this.size,h.push([i,l])):h[E][1]=l,this}Er.prototype.clear=O1,Er.prototype.delete=y1,Er.prototype.get=L1,Er.prototype.has=A1,Er.prototype.set=S1;function Ir(i){var l=-1,h=i==null?0:i.length;for(this.clear();++l<h;){var E=i[l];this.set(E[0],E[1])}}function N1(){this.size=0,this.__data__={hash:new Co,map:new(Fi||Er),string:new Co}}function x1(i){var l=Cs(this,i).delete(i);return this.size-=l?1:0,l}function T1(i){return Cs(this,i).get(i)}function D1(i){return Cs(this,i).has(i)}function R1(i,l){var h=Cs(this,i),E=h.size;return h.set(i,l),this.size+=h.size==E?0:1,this}Ir.prototype.clear=N1,Ir.prototype.delete=x1,Ir.prototype.get=T1,Ir.prototype.has=D1,Ir.prototype.set=R1;function Eo(i){var l=-1,h=i==null?0:i.length;for(this.__data__=new Ir;++l<h;)this.add(i[l])}function k1(i){return this.__data__.set(i,u),this}function M1(i){return this.__data__.has(i)}Eo.prototype.add=Eo.prototype.push=k1,Eo.prototype.has=M1;function nr(i){var l=this.__data__=new Er(i);this.size=l.size}function G1(){this.__data__=new Er,this.size=0}function U1(i){var l=this.__data__,h=l.delete(i);return this.size=l.size,h}function F1(i){return this.__data__.get(i)}function $1(i){return this.__data__.has(i)}function H1(i,l){var h=this.__data__;if(h instanceof Er){var E=h.__data__;if(!Fi||E.length<o-1)return E.push([i,l]),this.size=++h.size,this;h=this.__data__=new Ir(E)}return h.set(i,l),this.size=h.size,this}nr.prototype.clear=G1,nr.prototype.delete=U1,nr.prototype.get=F1,nr.prototype.has=$1,nr.prototype.set=H1;function Y_(i,l){var h=Xe(i),E=!h&&yo(i),O=!h&&!E&&Zr(i),N=!h&&!E&&!O&&ni(i),G=h||E||O||N,W=G?Kl(i.length,Xm):[],q=W.length;for(var ie in i)(l||mt.call(i,ie))&&!(G&&(ie=="length"||O&&(ie=="offset"||ie=="parent")||N&&(ie=="buffer"||ie=="byteLength"||ie=="byteOffset")||yr(ie,q)))&&W.push(ie);return W}function j_(i){var l=i.length;return l?i[_c(0,l-1)]:n}function P1(i,l){return Es(Cn(i),Io(l,0,i.length))}function B1(i){return Es(Cn(i))}function nc(i,l,h){(h!==n&&!rr(i[l],h)||h===n&&!(l in i))&&br(i,l,h)}function Bi(i,l,h){var E=i[l];(!(mt.call(i,l)&&rr(E,h))||h===n&&!(l in i))&&br(i,l,h)}function ss(i,l){for(var h=i.length;h--;)if(rr(i[h][0],l))return h;return-1}function W1(i,l,h,E){return Vr(i,function(O,N,G){l(E,O,h(O),G)}),E}function V_(i,l){return i&&lr(l,Wt(l),i)}function z1(i,l){return i&&lr(l,In(l),i)}function br(i,l,h){l=="__proto__"&&ts?ts(i,l,{configurable:!0,enumerable:!0,value:h,writable:!0}):i[l]=h}function rc(i,l){for(var h=-1,E=l.length,O=X(E),N=i==null;++h<E;)O[h]=N?n:Uc(i,l[h]);return O}function Io(i,l,h){return i===i&&(h!==n&&(i=i<=h?i:h),l!==n&&(i=i>=l?i:l)),i}function zn(i,l,h,E,O,N){var G,W=l&f,q=l&g,ie=l&m;if(h&&(G=O?h(i,E,O,N):h(i)),G!==n)return G;if(!Dt(i))return i;var le=Xe(i);if(le){if(G=D0(i),!W)return Cn(i,G)}else{var fe=tn(i),be=fe==kt||fe==Te;if(Zr(i))return mf(i,W);if(fe==At||fe==Jt||be&&!O){if(G=q||be?{}:Uf(i),!W)return q?I0(i,z1(G,i)):E0(i,V_(G,i))}else{if(!Ot[fe])return O?i:{};G=R0(i,fe,W)}}N||(N=new nr);var Me=N.get(i);if(Me)return Me;N.set(i,G),_g(i)?i.forEach(function(Pe){G.add(zn(Pe,l,h,Pe,i,N))}):ug(i)&&i.forEach(function(Pe,ot){G.set(ot,zn(Pe,l,h,ot,i,N))});var He=ie?q?wc:bc:q?In:Wt,et=le?n:He(i);return Pn(et||i,function(Pe,ot){et&&(ot=Pe,Pe=i[ot]),Bi(G,ot,zn(Pe,l,h,ot,i,N))}),G}function Y1(i){var l=Wt(i);return function(h){return q_(h,i,l)}}function q_(i,l,h){var E=h.length;if(i==null)return!E;for(i=bt(i);E--;){var O=h[E],N=l[O],G=i[O];if(G===n&&!(O in i)||!N(G))return!1}return!0}function K_(i,l,h){if(typeof i!="function")throw new Bn(s);return Ki(function(){i.apply(n,h)},l)}function Wi(i,l,h,E){var O=-1,N=za,G=!0,W=i.length,q=[],ie=l.length;if(!W)return q;h&&(l=xt(l,Sn(h))),E?(N=Wl,G=!1):l.length>=o&&(N=Gi,G=!1,l=new Eo(l));e:for(;++O<W;){var le=i[O],fe=h==null?le:h(le);if(le=E||le!==0?le:0,G&&fe===fe){for(var be=ie;be--;)if(l[be]===fe)continue e;q.push(le)}else N(l,fe,E)||q.push(le)}return q}var Vr=wf(sr),X_=wf(ic,!0);function j1(i,l){var h=!0;return Vr(i,function(E,O,N){return h=!!l(E,O,N),h}),h}function ls(i,l,h){for(var E=-1,O=i.length;++E<O;){var N=i[E],G=l(N);if(G!=null&&(W===n?G===G&&!xn(G):h(G,W)))var W=G,q=N}return q}function V1(i,l,h,E){var O=i.length;for(h=Je(h),h<0&&(h=-h>O?0:O+h),E=E===n||E>O?O:Je(E),E<0&&(E+=O),E=h>E?0:gg(E);h<E;)i[h++]=l;return i}function Z_(i,l){var h=[];return Vr(i,function(E,O,N){l(E,O,N)&&h.push(E)}),h}function Vt(i,l,h,E,O){var N=-1,G=i.length;for(h||(h=M0),O||(O=[]);++N<G;){var W=i[N];l>0&&h(W)?l>1?Vt(W,l-1,h,E,O):zr(O,W):E||(O[O.length]=W)}return O}var oc=Of(),Q_=Of(!0);function sr(i,l){return i&&oc(i,l,Wt)}function ic(i,l){return i&&Q_(i,l,Wt)}function cs(i,l){return Wr(l,function(h){return Lr(i[h])})}function bo(i,l){l=Kr(l,i);for(var h=0,E=l.length;i!=null&&h<E;)i=i[cr(l[h++])];return h&&h==E?i:n}function J_(i,l,h){var E=l(i);return Xe(i)?E:zr(E,h(i))}function cn(i){return i==null?i===n?bp:xe:mo&&mo in bt(i)?N0(i):B0(i)}function ac(i,l){return i>l}function q1(i,l){return i!=null&&mt.call(i,l)}function K1(i,l){return i!=null&&l in bt(i)}function X1(i,l,h){return i>=en(l,h)&&i<Bt(l,h)}function sc(i,l,h){for(var E=h?Wl:za,O=i[0].length,N=i.length,G=N,W=X(N),q=1/0,ie=[];G--;){var le=i[G];G&&l&&(le=xt(le,Sn(l))),q=en(le.length,q),W[G]=!h&&(l||O>=120&&le.length>=120)?new Eo(G&&le):n}le=i[0];var fe=-1,be=W[0];e:for(;++fe<O&&ie.length<q;){var Me=le[fe],He=l?l(Me):Me;if(Me=h||Me!==0?Me:0,!(be?Gi(be,He):E(ie,He,h))){for(G=N;--G;){var et=W[G];if(!(et?Gi(et,He):E(i[G],He,h)))continue e}be&&be.push(He),ie.push(Me)}}return ie}function Z1(i,l,h,E){return sr(i,function(O,N,G){l(E,h(O),N,G)}),E}function zi(i,l,h){l=Kr(l,i),i=Pf(i,l);var E=i==null?i:i[cr(jn(l))];return E==null?n:An(E,i,h)}function ef(i){return Mt(i)&&cn(i)==Jt}function Q1(i){return Mt(i)&&cn(i)==Mi}function J1(i){return Mt(i)&&cn(i)==$n}function Yi(i,l,h,E,O){return i===l?!0:i==null||l==null||!Mt(i)&&!Mt(l)?i!==i&&l!==l:e0(i,l,h,E,Yi,O)}function e0(i,l,h,E,O,N){var G=Xe(i),W=Xe(l),q=G?Cr:tn(i),ie=W?Cr:tn(l);q=q==Jt?At:q,ie=ie==Jt?At:ie;var le=q==At,fe=ie==At,be=q==ie;if(be&&Zr(i)){if(!Zr(l))return!1;G=!0,le=!1}if(be&&!le)return N||(N=new nr),G||ni(i)?kf(i,l,h,E,O,N):A0(i,l,q,h,E,O,N);if(!(h&C)){var Me=le&&mt.call(i,"__wrapped__"),He=fe&&mt.call(l,"__wrapped__");if(Me||He){var et=Me?i.value():i,Pe=He?l.value():l;return N||(N=new nr),O(et,Pe,h,E,N)}}return be?(N||(N=new nr),S0(i,l,h,E,O,N)):!1}function t0(i){return Mt(i)&&tn(i)==Ie}function lc(i,l,h,E){var O=h.length,N=O,G=!E;if(i==null)return!N;for(i=bt(i);O--;){var W=h[O];if(G&&W[2]?W[1]!==i[W[0]]:!(W[0]in i))return!1}for(;++O<N;){W=h[O];var q=W[0],ie=i[q],le=W[1];if(G&&W[2]){if(ie===n&&!(q in i))return!1}else{var fe=new nr;if(E)var be=E(ie,le,q,i,l,fe);if(!(be===n?Yi(le,ie,C|I,E,fe):be))return!1}}return!0}function tf(i){if(!Dt(i)||U0(i))return!1;var l=Lr(i)?t1:Yp;return l.test(Oo(i))}function n0(i){return Mt(i)&&cn(i)==vo}function r0(i){return Mt(i)&&tn(i)==er}function o0(i){return Mt(i)&&Ls(i.length)&&!!St[cn(i)]}function nf(i){return typeof i=="function"?i:i==null?bn:typeof i=="object"?Xe(i)?af(i[0],i[1]):of(i):yg(i)}function cc(i){if(!qi(i))return s1(i);var l=[];for(var h in bt(i))mt.call(i,h)&&h!="constructor"&&l.push(h);return l}function i0(i){if(!Dt(i))return P0(i);var l=qi(i),h=[];for(var E in i)E=="constructor"&&(l||!mt.call(i,E))||h.push(E);return h}function uc(i,l){return i<l}function rf(i,l){var h=-1,E=En(i)?X(i.length):[];return Vr(i,function(O,N,G){E[++h]=l(O,N,G)}),E}function of(i){var l=yc(i);return l.length==1&&l[0][2]?$f(l[0][0],l[0][1]):function(h){return h===i||lc(h,i,l)}}function af(i,l){return Ac(i)&&Ff(l)?$f(cr(i),l):function(h){var E=Uc(h,i);return E===n&&E===l?Fc(h,i):Yi(l,E,C|I)}}function us(i,l,h,E,O){i!==l&&oc(l,function(N,G){if(O||(O=new nr),Dt(N))a0(i,l,G,h,us,E,O);else{var W=E?E(Nc(i,G),N,G+"",i,l,O):n;W===n&&(W=N),nc(i,G,W)}},In)}function a0(i,l,h,E,O,N,G){var W=Nc(i,h),q=Nc(l,h),ie=G.get(q);if(ie){nc(i,h,ie);return}var le=N?N(W,q,h+"",i,l,G):n,fe=le===n;if(fe){var be=Xe(q),Me=!be&&Zr(q),He=!be&&!Me&&ni(q);le=q,be||Me||He?Xe(W)?le=W:Gt(W)?le=Cn(W):Me?(fe=!1,le=mf(q,!0)):He?(fe=!1,le=Cf(q,!0)):le=[]:Xi(q)||yo(q)?(le=W,yo(W)?le=hg(W):(!Dt(W)||Lr(W))&&(le=Uf(q))):fe=!1}fe&&(G.set(q,le),O(le,q,E,N,G),G.delete(q)),nc(i,h,le)}function sf(i,l){var h=i.length;if(h)return l+=l<0?h:0,yr(l,h)?i[l]:n}function lf(i,l,h){l.length?l=xt(l,function(N){return Xe(N)?function(G){return bo(G,N.length===1?N[0]:N)}:N}):l=[bn];var E=-1;l=xt(l,Sn($e()));var O=rf(i,function(N,G,W){var q=xt(l,function(ie){return ie(N)});return{criteria:q,index:++E,value:N}});return Rm(O,function(N,G){return C0(N,G,h)})}function s0(i,l){return cf(i,l,function(h,E){return Fc(i,E)})}function cf(i,l,h){for(var E=-1,O=l.length,N={};++E<O;){var G=l[E],W=bo(i,G);h(W,G)&&ji(N,Kr(G,i),W)}return N}function l0(i){return function(l){return bo(l,i)}}function dc(i,l,h,E){var O=E?Dm:Yo,N=-1,G=l.length,W=i;for(i===l&&(l=Cn(l)),h&&(W=xt(i,Sn(h)));++N<G;)for(var q=0,ie=l[N],le=h?h(ie):ie;(q=O(W,le,q,E))>-1;)W!==i&&es.call(W,q,1),es.call(i,q,1);return i}function uf(i,l){for(var h=i?l.length:0,E=h-1;h--;){var O=l[h];if(h==E||O!==N){var N=O;yr(O)?es.call(i,O,1):hc(i,O)}}return i}function _c(i,l){return i+rs(W_()*(l-i+1))}function c0(i,l,h,E){for(var O=-1,N=Bt(ns((l-i)/(h||1)),0),G=X(N);N--;)G[E?N:++O]=i,i+=h;return G}function fc(i,l){var h="";if(!i||l<1||l>ye)return h;do l%2&&(h+=i),l=rs(l/2),l&&(i+=i);while(l);return h}function nt(i,l){return xc(Hf(i,l,bn),i+"")}function u0(i){return j_(ri(i))}function d0(i,l){var h=ri(i);return Es(h,Io(l,0,h.length))}function ji(i,l,h,E){if(!Dt(i))return i;l=Kr(l,i);for(var O=-1,N=l.length,G=N-1,W=i;W!=null&&++O<N;){var q=cr(l[O]),ie=h;if(q==="__proto__"||q==="constructor"||q==="prototype")return i;if(O!=G){var le=W[q];ie=E?E(le,q,W):n,ie===n&&(ie=Dt(le)?le:yr(l[O+1])?[]:{})}Bi(W,q,ie),W=W[q]}return i}var df=os?function(i,l){return os.set(i,l),i}:bn,_0=ts?function(i,l){return ts(i,"toString",{configurable:!0,enumerable:!1,value:Hc(l),writable:!0})}:bn;function f0(i){return Es(ri(i))}function Yn(i,l,h){var E=-1,O=i.length;l<0&&(l=-l>O?0:O+l),h=h>O?O:h,h<0&&(h+=O),O=l>h?0:h-l>>>0,l>>>=0;for(var N=X(O);++E<O;)N[E]=i[E+l];return N}function g0(i,l){var h;return Vr(i,function(E,O,N){return h=l(E,O,N),!h}),!!h}function ds(i,l,h){var E=0,O=i==null?E:i.length;if(typeof l=="number"&&l===l&&O<=Fn){for(;E<O;){var N=E+O>>>1,G=i[N];G!==null&&!xn(G)&&(h?G<=l:G<l)?E=N+1:O=N}return O}return gc(i,l,bn,h)}function gc(i,l,h,E){var O=0,N=i==null?0:i.length;if(N===0)return 0;l=h(l);for(var G=l!==l,W=l===null,q=xn(l),ie=l===n;O<N;){var le=rs((O+N)/2),fe=h(i[le]),be=fe!==n,Me=fe===null,He=fe===fe,et=xn(fe);if(G)var Pe=E||He;else ie?Pe=He&&(E||be):W?Pe=He&&be&&(E||!Me):q?Pe=He&&be&&!Me&&(E||!et):Me||et?Pe=!1:Pe=E?fe<=l:fe<l;Pe?O=le+1:N=le}return en(N,Ln)}function _f(i,l){for(var h=-1,E=i.length,O=0,N=[];++h<E;){var G=i[h],W=l?l(G):G;if(!h||!rr(W,q)){var q=W;N[O++]=G===0?0:G}}return N}function ff(i){return typeof i=="number"?i:xn(i)?ct:+i}function Nn(i){if(typeof i=="string")return i;if(Xe(i))return xt(i,Nn)+"";if(xn(i))return z_?z_.call(i):"";var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function qr(i,l,h){var E=-1,O=za,N=i.length,G=!0,W=[],q=W;if(h)G=!1,O=Wl;else if(N>=o){var ie=l?null:y0(i);if(ie)return ja(ie);G=!1,O=Gi,q=new Eo}else q=l?[]:W;e:for(;++E<N;){var le=i[E],fe=l?l(le):le;if(le=h||le!==0?le:0,G&&fe===fe){for(var be=q.length;be--;)if(q[be]===fe)continue e;l&&q.push(fe),W.push(le)}else O(q,fe,h)||(q!==W&&q.push(fe),W.push(le))}return W}function hc(i,l){return l=Kr(l,i),i=Pf(i,l),i==null||delete i[cr(jn(l))]}function gf(i,l,h,E){return ji(i,l,h(bo(i,l)),E)}function _s(i,l,h,E){for(var O=i.length,N=E?O:-1;(E?N--:++N<O)&&l(i[N],N,i););return h?Yn(i,E?0:N,E?N+1:O):Yn(i,E?N+1:0,E?O:N)}function hf(i,l){var h=i;return h instanceof at&&(h=h.value()),zl(l,function(E,O){return O.func.apply(O.thisArg,zr([E],O.args))},h)}function vc(i,l,h){var E=i.length;if(E<2)return E?qr(i[0]):[];for(var O=-1,N=X(E);++O<E;)for(var G=i[O],W=-1;++W<E;)W!=O&&(N[O]=Wi(N[O]||G,i[W],l,h));return qr(Vt(N,1),l,h)}function vf(i,l,h){for(var E=-1,O=i.length,N=l.length,G={};++E<O;){var W=E<N?l[E]:n;h(G,i[E],W)}return G}function pc(i){return Gt(i)?i:[]}function mc(i){return typeof i=="function"?i:bn}function Kr(i,l){return Xe(i)?i:Ac(i,l)?[i]:Yf(pt(i))}var h0=nt;function Xr(i,l,h){var E=i.length;return h=h===n?E:h,!l&&h>=E?i:Yn(i,l,h)}var pf=n1||function(i){return jt.clearTimeout(i)};function mf(i,l){if(l)return i.slice();var h=i.length,E=F_?F_(h):new i.constructor(h);return i.copy(E),E}function Cc(i){var l=new i.constructor(i.byteLength);return new Qa(l).set(new Qa(i)),l}function v0(i,l){var h=l?Cc(i.buffer):i.buffer;return new i.constructor(h,i.byteOffset,i.byteLength)}function p0(i){var l=new i.constructor(i.source,e_.exec(i));return l.lastIndex=i.lastIndex,l}function m0(i){return Pi?bt(Pi.call(i)):{}}function Cf(i,l){var h=l?Cc(i.buffer):i.buffer;return new i.constructor(h,i.byteOffset,i.length)}function Ef(i,l){if(i!==l){var h=i!==n,E=i===null,O=i===i,N=xn(i),G=l!==n,W=l===null,q=l===l,ie=xn(l);if(!W&&!ie&&!N&&i>l||N&&G&&q&&!W&&!ie||E&&G&&q||!h&&q||!O)return 1;if(!E&&!N&&!ie&&i<l||ie&&h&&O&&!E&&!N||W&&h&&O||!G&&O||!q)return-1}return 0}function C0(i,l,h){for(var E=-1,O=i.criteria,N=l.criteria,G=O.length,W=h.length;++E<G;){var q=Ef(O[E],N[E]);if(q){if(E>=W)return q;var ie=h[E];return q*(ie=="desc"?-1:1)}}return i.index-l.index}function If(i,l,h,E){for(var O=-1,N=i.length,G=h.length,W=-1,q=l.length,ie=Bt(N-G,0),le=X(q+ie),fe=!E;++W<q;)le[W]=l[W];for(;++O<G;)(fe||O<N)&&(le[h[O]]=i[O]);for(;ie--;)le[W++]=i[O++];return le}function bf(i,l,h,E){for(var O=-1,N=i.length,G=-1,W=h.length,q=-1,ie=l.length,le=Bt(N-W,0),fe=X(le+ie),be=!E;++O<le;)fe[O]=i[O];for(var Me=O;++q<ie;)fe[Me+q]=l[q];for(;++G<W;)(be||O<N)&&(fe[Me+h[G]]=i[O++]);return fe}function Cn(i,l){var h=-1,E=i.length;for(l||(l=X(E));++h<E;)l[h]=i[h];return l}function lr(i,l,h,E){var O=!h;h||(h={});for(var N=-1,G=l.length;++N<G;){var W=l[N],q=E?E(h[W],i[W],W,h,i):n;q===n&&(q=i[W]),O?br(h,W,q):Bi(h,W,q)}return h}function E0(i,l){return lr(i,Lc(i),l)}function I0(i,l){return lr(i,Mf(i),l)}function fs(i,l){return function(h,E){var O=Xe(h)?Lm:W1,N=l?l():{};return O(h,i,$e(E,2),N)}}function Jo(i){return nt(function(l,h){var E=-1,O=h.length,N=O>1?h[O-1]:n,G=O>2?h[2]:n;for(N=i.length>3&&typeof N=="function"?(O--,N):n,G&&un(h[0],h[1],G)&&(N=O<3?n:N,O=1),l=bt(l);++E<O;){var W=h[E];W&&i(l,W,E,N)}return l})}function wf(i,l){return function(h,E){if(h==null)return h;if(!En(h))return i(h,E);for(var O=h.length,N=l?O:-1,G=bt(h);(l?N--:++N<O)&&E(G[N],N,G)!==!1;);return h}}function Of(i){return function(l,h,E){for(var O=-1,N=bt(l),G=E(l),W=G.length;W--;){var q=G[i?W:++O];if(h(N[q],q,N)===!1)break}return l}}function b0(i,l,h){var E=l&b,O=Vi(i);function N(){var G=this&&this!==jt&&this instanceof N?O:i;return G.apply(E?h:this,arguments)}return N}function yf(i){return function(l){l=pt(l);var h=jo(l)?tr(l):n,E=h?h[0]:l.charAt(0),O=h?Xr(h,1).join(""):l.slice(1);return E[i]()+O}}function ei(i){return function(l){return zl(wg(bg(l).replace(_m,"")),i,"")}}function Vi(i){return function(){var l=arguments;switch(l.length){case 0:return new i;case 1:return new i(l[0]);case 2:return new i(l[0],l[1]);case 3:return new i(l[0],l[1],l[2]);case 4:return new i(l[0],l[1],l[2],l[3]);case 5:return new i(l[0],l[1],l[2],l[3],l[4]);case 6:return new i(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new i(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var h=Qo(i.prototype),E=i.apply(h,l);return Dt(E)?E:h}}function w0(i,l,h){var E=Vi(i);function O(){for(var N=arguments.length,G=X(N),W=N,q=ti(O);W--;)G[W]=arguments[W];var ie=N<3&&G[0]!==q&&G[N-1]!==q?[]:Yr(G,q);if(N-=ie.length,N<h)return xf(i,l,gs,O.placeholder,n,G,ie,n,n,h-N);var le=this&&this!==jt&&this instanceof O?E:i;return An(le,this,G)}return O}function Lf(i){return function(l,h,E){var O=bt(l);if(!En(l)){var N=$e(h,3);l=Wt(l),h=function(W){return N(O[W],W,O)}}var G=i(l,h,E);return G>-1?O[N?l[G]:G]:n}}function Af(i){return Or(function(l){var h=l.length,E=h,O=Wn.prototype.thru;for(i&&l.reverse();E--;){var N=l[E];if(typeof N!="function")throw new Bn(s);if(O&&!G&&ms(N)=="wrapper")var G=new Wn([],!0)}for(E=G?E:h;++E<h;){N=l[E];var W=ms(N),q=W=="wrapper"?Oc(N):n;q&&Sc(q[0])&&q[1]==(B|R|F|K)&&!q[4].length&&q[9]==1?G=G[ms(q[0])].apply(G,q[3]):G=N.length==1&&Sc(N)?G[W]():G.thru(N)}return function(){var ie=arguments,le=ie[0];if(G&&ie.length==1&&Xe(le))return G.plant(le).value();for(var fe=0,be=h?l[fe].apply(this,ie):le;++fe<h;)be=l[fe].call(this,be);return be}})}function gs(i,l,h,E,O,N,G,W,q,ie){var le=l&B,fe=l&b,be=l&w,Me=l&(R|M),He=l&J,et=be?n:Vi(i);function Pe(){for(var ot=arguments.length,ut=X(ot),Tn=ot;Tn--;)ut[Tn]=arguments[Tn];if(Me)var dn=ti(Pe),Dn=Mm(ut,dn);if(E&&(ut=If(ut,E,O,Me)),N&&(ut=bf(ut,N,G,Me)),ot-=Dn,Me&&ot<ie){var Ut=Yr(ut,dn);return xf(i,l,gs,Pe.placeholder,h,ut,Ut,W,q,ie-ot)}var or=fe?h:this,Sr=be?or[i]:i;return ot=ut.length,W?ut=W0(ut,W):He&&ot>1&&ut.reverse(),le&&q<ot&&(ut.length=q),this&&this!==jt&&this instanceof Pe&&(Sr=et||Vi(Sr)),Sr.apply(or,ut)}return Pe}function Sf(i,l){return function(h,E){return Z1(h,i,l(E),{})}}function hs(i,l){return function(h,E){var O;if(h===n&&E===n)return l;if(h!==n&&(O=h),E!==n){if(O===n)return E;typeof h=="string"||typeof E=="string"?(h=Nn(h),E=Nn(E)):(h=ff(h),E=ff(E)),O=i(h,E)}return O}}function Ec(i){return Or(function(l){return l=xt(l,Sn($e())),nt(function(h){var E=this;return i(l,function(O){return An(O,E,h)})})})}function vs(i,l){l=l===n?" ":Nn(l);var h=l.length;if(h<2)return h?fc(l,i):l;var E=fc(l,ns(i/Vo(l)));return jo(l)?Xr(tr(E),0,i).join(""):E.slice(0,i)}function O0(i,l,h,E){var O=l&b,N=Vi(i);function G(){for(var W=-1,q=arguments.length,ie=-1,le=E.length,fe=X(le+q),be=this&&this!==jt&&this instanceof G?N:i;++ie<le;)fe[ie]=E[ie];for(;q--;)fe[ie++]=arguments[++W];return An(be,O?h:this,fe)}return G}function Nf(i){return function(l,h,E){return E&&typeof E!="number"&&un(l,h,E)&&(h=E=n),l=Ar(l),h===n?(h=l,l=0):h=Ar(h),E=E===n?l<h?1:-1:Ar(E),c0(l,h,E,i)}}function ps(i){return function(l,h){return typeof l=="string"&&typeof h=="string"||(l=Vn(l),h=Vn(h)),i(l,h)}}function xf(i,l,h,E,O,N,G,W,q,ie){var le=l&R,fe=le?G:n,be=le?n:G,Me=le?N:n,He=le?n:N;l|=le?F:P,l&=~(le?P:F),l&L||(l&=-4);var et=[i,l,O,Me,fe,He,be,W,q,ie],Pe=h.apply(n,et);return Sc(i)&&Bf(Pe,et),Pe.placeholder=E,Wf(Pe,i,l)}function Ic(i){var l=Pt[i];return function(h,E){if(h=Vn(h),E=E==null?0:en(Je(E),292),E&&B_(h)){var O=(pt(h)+"e").split("e"),N=l(O[0]+"e"+(+O[1]+E));return O=(pt(N)+"e").split("e"),+(O[0]+"e"+(+O[1]-E))}return l(h)}}var y0=Xo&&1/ja(new Xo([,-0]))[1]==Ve?function(i){return new Xo(i)}:Wc;function Tf(i){return function(l){var h=tn(l);return h==Ie?Zl(l):h==er?Bm(l):km(l,i(l))}}function wr(i,l,h,E,O,N,G,W){var q=l&w;if(!q&&typeof i!="function")throw new Bn(s);var ie=E?E.length:0;if(ie||(l&=-97,E=O=n),G=G===n?G:Bt(Je(G),0),W=W===n?W:Je(W),ie-=O?O.length:0,l&P){var le=E,fe=O;E=O=n}var be=q?n:Oc(i),Me=[i,l,h,E,O,le,fe,N,G,W];if(be&&H0(Me,be),i=Me[0],l=Me[1],h=Me[2],E=Me[3],O=Me[4],W=Me[9]=Me[9]===n?q?0:i.length:Bt(Me[9]-ie,0),!W&&l&(R|M)&&(l&=-25),!l||l==b)var He=b0(i,l,h);else l==R||l==M?He=w0(i,l,W):(l==F||l==(b|F))&&!O.length?He=O0(i,l,h,E):He=gs.apply(n,Me);var et=be?df:Bf;return Wf(et(He,Me),i,l)}function Df(i,l,h,E){return i===n||rr(i,Ko[h])&&!mt.call(E,h)?l:i}function Rf(i,l,h,E,O,N){return Dt(i)&&Dt(l)&&(N.set(l,i),us(i,l,n,Rf,N),N.delete(l)),i}function L0(i){return Xi(i)?n:i}function kf(i,l,h,E,O,N){var G=h&C,W=i.length,q=l.length;if(W!=q&&!(G&&q>W))return!1;var ie=N.get(i),le=N.get(l);if(ie&&le)return ie==l&&le==i;var fe=-1,be=!0,Me=h&I?new Eo:n;for(N.set(i,l),N.set(l,i);++fe<W;){var He=i[fe],et=l[fe];if(E)var Pe=G?E(et,He,fe,l,i,N):E(He,et,fe,i,l,N);if(Pe!==n){if(Pe)continue;be=!1;break}if(Me){if(!Yl(l,function(ot,ut){if(!Gi(Me,ut)&&(He===ot||O(He,ot,h,E,N)))return Me.push(ut)})){be=!1;break}}else if(!(He===et||O(He,et,h,E,N))){be=!1;break}}return N.delete(i),N.delete(l),be}function A0(i,l,h,E,O,N,G){switch(h){case Wo:if(i.byteLength!=l.byteLength||i.byteOffset!=l.byteOffset)return!1;i=i.buffer,l=l.buffer;case Mi:return!(i.byteLength!=l.byteLength||!N(new Qa(i),new Qa(l)));case ar:case $n:case ke:return rr(+i,+l);case Br:return i.name==l.name&&i.message==l.message;case vo:case Ri:return i==l+"";case Ie:var W=Zl;case er:var q=E&C;if(W||(W=ja),i.size!=l.size&&!q)return!1;var ie=G.get(i);if(ie)return ie==l;E|=I,G.set(i,l);var le=kf(W(i),W(l),E,O,N,G);return G.delete(i),le;case Ha:if(Pi)return Pi.call(i)==Pi.call(l)}return!1}function S0(i,l,h,E,O,N){var G=h&C,W=bc(i),q=W.length,ie=bc(l),le=ie.length;if(q!=le&&!G)return!1;for(var fe=q;fe--;){var be=W[fe];if(!(G?be in l:mt.call(l,be)))return!1}var Me=N.get(i),He=N.get(l);if(Me&&He)return Me==l&&He==i;var et=!0;N.set(i,l),N.set(l,i);for(var Pe=G;++fe<q;){be=W[fe];var ot=i[be],ut=l[be];if(E)var Tn=G?E(ut,ot,be,l,i,N):E(ot,ut,be,i,l,N);if(!(Tn===n?ot===ut||O(ot,ut,h,E,N):Tn)){et=!1;break}Pe||(Pe=be=="constructor")}if(et&&!Pe){var dn=i.constructor,Dn=l.constructor;dn!=Dn&&"constructor"in i&&"constructor"in l&&!(typeof dn=="function"&&dn instanceof dn&&typeof Dn=="function"&&Dn instanceof Dn)&&(et=!1)}return N.delete(i),N.delete(l),et}function Or(i){return xc(Hf(i,n,Kf),i+"")}function bc(i){return J_(i,Wt,Lc)}function wc(i){return J_(i,In,Mf)}var Oc=os?function(i){return os.get(i)}:Wc;function ms(i){for(var l=i.name+"",h=Zo[l],E=mt.call(Zo,l)?h.length:0;E--;){var O=h[E],N=O.func;if(N==null||N==i)return O.name}return l}function ti(i){var l=mt.call(y,"placeholder")?y:i;return l.placeholder}function $e(){var i=y.iteratee||Pc;return i=i===Pc?nf:i,arguments.length?i(arguments[0],arguments[1]):i}function Cs(i,l){var h=i.__data__;return G0(l)?h[typeof l=="string"?"string":"hash"]:h.map}function yc(i){for(var l=Wt(i),h=l.length;h--;){var E=l[h],O=i[E];l[h]=[E,O,Ff(O)]}return l}function wo(i,l){var h=$m(i,l);return tf(h)?h:n}function N0(i){var l=mt.call(i,mo),h=i[mo];try{i[mo]=n;var E=!0}catch{}var O=Xa.call(i);return E&&(l?i[mo]=h:delete i[mo]),O}var Lc=Jl?function(i){return i==null?[]:(i=bt(i),Wr(Jl(i),function(l){return H_.call(i,l)}))}:zc,Mf=Jl?function(i){for(var l=[];i;)zr(l,Lc(i)),i=Ja(i);return l}:zc,tn=cn;(ec&&tn(new ec(new ArrayBuffer(1)))!=Wo||Fi&&tn(new Fi)!=Ie||tc&&tn(tc.resolve())!=$a||Xo&&tn(new Xo)!=er||$i&&tn(new $i)!=ki)&&(tn=function(i){var l=cn(i),h=l==At?i.constructor:n,E=h?Oo(h):"";if(E)switch(E){case d1:return Wo;case _1:return Ie;case f1:return $a;case g1:return er;case h1:return ki}return l});function x0(i,l,h){for(var E=-1,O=h.length;++E<O;){var N=h[E],G=N.size;switch(N.type){case"drop":i+=G;break;case"dropRight":l-=G;break;case"take":l=en(l,i+G);break;case"takeRight":i=Bt(i,l-G);break}}return{start:i,end:l}}function T0(i){var l=i.match(Up);return l?l[1].split(Fp):[]}function Gf(i,l,h){l=Kr(l,i);for(var E=-1,O=l.length,N=!1;++E<O;){var G=cr(l[E]);if(!(N=i!=null&&h(i,G)))break;i=i[G]}return N||++E!=O?N:(O=i==null?0:i.length,!!O&&Ls(O)&&yr(G,O)&&(Xe(i)||yo(i)))}function D0(i){var l=i.length,h=new i.constructor(l);return l&&typeof i[0]=="string"&&mt.call(i,"index")&&(h.index=i.index,h.input=i.input),h}function Uf(i){return typeof i.constructor=="function"&&!qi(i)?Qo(Ja(i)):{}}function R0(i,l,h){var E=i.constructor;switch(l){case Mi:return Cc(i);case ar:case $n:return new E(+i);case Wo:return v0(i,h);case yl:case Ll:case Al:case Sl:case Nl:case xl:case Tl:case Dl:case Rl:return Cf(i,h);case Ie:return new E;case ke:case Ri:return new E(i);case vo:return p0(i);case er:return new E;case Ha:return m0(i)}}function k0(i,l){var h=l.length;if(!h)return i;var E=h-1;return l[E]=(h>1?"& ":"")+l[E],l=l.join(h>2?", ":" "),i.replace(Gp,`{
/* [wrapped with `+l+`] */
`)}function M0(i){return Xe(i)||yo(i)||!!(P_&&i&&i[P_])}function yr(i,l){var h=typeof i;return l=l??ye,!!l&&(h=="number"||h!="symbol"&&Vp.test(i))&&i>-1&&i%1==0&&i<l}function un(i,l,h){if(!Dt(h))return!1;var E=typeof l;return(E=="number"?En(h)&&yr(l,h.length):E=="string"&&l in h)?rr(h[l],i):!1}function Ac(i,l){if(Xe(i))return!1;var h=typeof i;return h=="number"||h=="symbol"||h=="boolean"||i==null||xn(i)?!0:Dp.test(i)||!Tp.test(i)||l!=null&&i in bt(l)}function G0(i){var l=typeof i;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?i!=="__proto__":i===null}function Sc(i){var l=ms(i),h=y[l];if(typeof h!="function"||!(l in at.prototype))return!1;if(i===h)return!0;var E=Oc(h);return!!E&&i===E[0]}function U0(i){return!!U_&&U_ in i}var F0=qa?Lr:Yc;function qi(i){var l=i&&i.constructor,h=typeof l=="function"&&l.prototype||Ko;return i===h}function Ff(i){return i===i&&!Dt(i)}function $f(i,l){return function(h){return h==null?!1:h[i]===l&&(l!==n||i in bt(h))}}function $0(i){var l=Os(i,function(E){return h.size===_&&h.clear(),E}),h=l.cache;return l}function H0(i,l){var h=i[1],E=l[1],O=h|E,N=O<(b|w|B),G=E==B&&h==R||E==B&&h==K&&i[7].length<=l[8]||E==(B|K)&&l[7].length<=l[8]&&h==R;if(!(N||G))return i;E&b&&(i[2]=l[2],O|=h&b?0:L);var W=l[3];if(W){var q=i[3];i[3]=q?If(q,W,l[4]):W,i[4]=q?Yr(i[3],v):l[4]}return W=l[5],W&&(q=i[5],i[5]=q?bf(q,W,l[6]):W,i[6]=q?Yr(i[5],v):l[6]),W=l[7],W&&(i[7]=W),E&B&&(i[8]=i[8]==null?l[8]:en(i[8],l[8])),i[9]==null&&(i[9]=l[9]),i[0]=l[0],i[1]=O,i}function P0(i){var l=[];if(i!=null)for(var h in bt(i))l.push(h);return l}function B0(i){return Xa.call(i)}function Hf(i,l,h){return l=Bt(l===n?i.length-1:l,0),function(){for(var E=arguments,O=-1,N=Bt(E.length-l,0),G=X(N);++O<N;)G[O]=E[l+O];O=-1;for(var W=X(l+1);++O<l;)W[O]=E[O];return W[l]=h(G),An(i,this,W)}}function Pf(i,l){return l.length<2?i:bo(i,Yn(l,0,-1))}function W0(i,l){for(var h=i.length,E=en(l.length,h),O=Cn(i);E--;){var N=l[E];i[E]=yr(N,h)?O[N]:n}return i}function Nc(i,l){if(!(l==="constructor"&&typeof i[l]=="function")&&l!="__proto__")return i[l]}var Bf=zf(df),Ki=o1||function(i,l){return jt.setTimeout(i,l)},xc=zf(_0);function Wf(i,l,h){var E=l+"";return xc(i,k0(E,z0(T0(E),h)))}function zf(i){var l=0,h=0;return function(){var E=l1(),O=pe-(E-h);if(h=E,O>0){if(++l>=re)return arguments[0]}else l=0;return i.apply(n,arguments)}}function Es(i,l){var h=-1,E=i.length,O=E-1;for(l=l===n?E:l;++h<l;){var N=_c(h,O),G=i[N];i[N]=i[h],i[h]=G}return i.length=l,i}var Yf=$0(function(i){var l=[];return i.charCodeAt(0)===46&&l.push(""),i.replace(Rp,function(h,E,O,N){l.push(O?N.replace(Pp,"$1"):E||h)}),l});function cr(i){if(typeof i=="string"||xn(i))return i;var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function Oo(i){if(i!=null){try{return Ka.call(i)}catch{}try{return i+""}catch{}}return""}function z0(i,l){return Pn(Pr,function(h){var E="_."+h[0];l&h[1]&&!za(i,E)&&i.push(E)}),i.sort()}function jf(i){if(i instanceof at)return i.clone();var l=new Wn(i.__wrapped__,i.__chain__);return l.__actions__=Cn(i.__actions__),l.__index__=i.__index__,l.__values__=i.__values__,l}function Y0(i,l,h){(h?un(i,l,h):l===n)?l=1:l=Bt(Je(l),0);var E=i==null?0:i.length;if(!E||l<1)return[];for(var O=0,N=0,G=X(ns(E/l));O<E;)G[N++]=Yn(i,O,O+=l);return G}function j0(i){for(var l=-1,h=i==null?0:i.length,E=0,O=[];++l<h;){var N=i[l];N&&(O[E++]=N)}return O}function V0(){var i=arguments.length;if(!i)return[];for(var l=X(i-1),h=arguments[0],E=i;E--;)l[E-1]=arguments[E];return zr(Xe(h)?Cn(h):[h],Vt(l,1))}var q0=nt(function(i,l){return Gt(i)?Wi(i,Vt(l,1,Gt,!0)):[]}),K0=nt(function(i,l){var h=jn(l);return Gt(h)&&(h=n),Gt(i)?Wi(i,Vt(l,1,Gt,!0),$e(h,2)):[]}),X0=nt(function(i,l){var h=jn(l);return Gt(h)&&(h=n),Gt(i)?Wi(i,Vt(l,1,Gt,!0),n,h):[]});function Z0(i,l,h){var E=i==null?0:i.length;return E?(l=h||l===n?1:Je(l),Yn(i,l<0?0:l,E)):[]}function Q0(i,l,h){var E=i==null?0:i.length;return E?(l=h||l===n?1:Je(l),l=E-l,Yn(i,0,l<0?0:l)):[]}function J0(i,l){return i&&i.length?_s(i,$e(l,3),!0,!0):[]}function eC(i,l){return i&&i.length?_s(i,$e(l,3),!0):[]}function tC(i,l,h,E){var O=i==null?0:i.length;return O?(h&&typeof h!="number"&&un(i,l,h)&&(h=0,E=O),V1(i,l,h,E)):[]}function Vf(i,l,h){var E=i==null?0:i.length;if(!E)return-1;var O=h==null?0:Je(h);return O<0&&(O=Bt(E+O,0)),Ya(i,$e(l,3),O)}function qf(i,l,h){var E=i==null?0:i.length;if(!E)return-1;var O=E-1;return h!==n&&(O=Je(h),O=h<0?Bt(E+O,0):en(O,E-1)),Ya(i,$e(l,3),O,!0)}function Kf(i){var l=i==null?0:i.length;return l?Vt(i,1):[]}function nC(i){var l=i==null?0:i.length;return l?Vt(i,Ve):[]}function rC(i,l){var h=i==null?0:i.length;return h?(l=l===n?1:Je(l),Vt(i,l)):[]}function oC(i){for(var l=-1,h=i==null?0:i.length,E={};++l<h;){var O=i[l];E[O[0]]=O[1]}return E}function Xf(i){return i&&i.length?i[0]:n}function iC(i,l,h){var E=i==null?0:i.length;if(!E)return-1;var O=h==null?0:Je(h);return O<0&&(O=Bt(E+O,0)),Yo(i,l,O)}function aC(i){var l=i==null?0:i.length;return l?Yn(i,0,-1):[]}var sC=nt(function(i){var l=xt(i,pc);return l.length&&l[0]===i[0]?sc(l):[]}),lC=nt(function(i){var l=jn(i),h=xt(i,pc);return l===jn(h)?l=n:h.pop(),h.length&&h[0]===i[0]?sc(h,$e(l,2)):[]}),cC=nt(function(i){var l=jn(i),h=xt(i,pc);return l=typeof l=="function"?l:n,l&&h.pop(),h.length&&h[0]===i[0]?sc(h,n,l):[]});function uC(i,l){return i==null?"":a1.call(i,l)}function jn(i){var l=i==null?0:i.length;return l?i[l-1]:n}function dC(i,l,h){var E=i==null?0:i.length;if(!E)return-1;var O=E;return h!==n&&(O=Je(h),O=O<0?Bt(E+O,0):en(O,E-1)),l===l?zm(i,l,O):Ya(i,N_,O,!0)}function _C(i,l){return i&&i.length?sf(i,Je(l)):n}var fC=nt(Zf);function Zf(i,l){return i&&i.length&&l&&l.length?dc(i,l):i}function gC(i,l,h){return i&&i.length&&l&&l.length?dc(i,l,$e(h,2)):i}function hC(i,l,h){return i&&i.length&&l&&l.length?dc(i,l,n,h):i}var vC=Or(function(i,l){var h=i==null?0:i.length,E=rc(i,l);return uf(i,xt(l,function(O){return yr(O,h)?+O:O}).sort(Ef)),E});function pC(i,l){var h=[];if(!(i&&i.length))return h;var E=-1,O=[],N=i.length;for(l=$e(l,3);++E<N;){var G=i[E];l(G,E,i)&&(h.push(G),O.push(E))}return uf(i,O),h}function Tc(i){return i==null?i:u1.call(i)}function mC(i,l,h){var E=i==null?0:i.length;return E?(h&&typeof h!="number"&&un(i,l,h)?(l=0,h=E):(l=l==null?0:Je(l),h=h===n?E:Je(h)),Yn(i,l,h)):[]}function CC(i,l){return ds(i,l)}function EC(i,l,h){return gc(i,l,$e(h,2))}function IC(i,l){var h=i==null?0:i.length;if(h){var E=ds(i,l);if(E<h&&rr(i[E],l))return E}return-1}function bC(i,l){return ds(i,l,!0)}function wC(i,l,h){return gc(i,l,$e(h,2),!0)}function OC(i,l){var h=i==null?0:i.length;if(h){var E=ds(i,l,!0)-1;if(rr(i[E],l))return E}return-1}function yC(i){return i&&i.length?_f(i):[]}function LC(i,l){return i&&i.length?_f(i,$e(l,2)):[]}function AC(i){var l=i==null?0:i.length;return l?Yn(i,1,l):[]}function SC(i,l,h){return i&&i.length?(l=h||l===n?1:Je(l),Yn(i,0,l<0?0:l)):[]}function NC(i,l,h){var E=i==null?0:i.length;return E?(l=h||l===n?1:Je(l),l=E-l,Yn(i,l<0?0:l,E)):[]}function xC(i,l){return i&&i.length?_s(i,$e(l,3),!1,!0):[]}function TC(i,l){return i&&i.length?_s(i,$e(l,3)):[]}var DC=nt(function(i){return qr(Vt(i,1,Gt,!0))}),RC=nt(function(i){var l=jn(i);return Gt(l)&&(l=n),qr(Vt(i,1,Gt,!0),$e(l,2))}),kC=nt(function(i){var l=jn(i);return l=typeof l=="function"?l:n,qr(Vt(i,1,Gt,!0),n,l)});function MC(i){return i&&i.length?qr(i):[]}function GC(i,l){return i&&i.length?qr(i,$e(l,2)):[]}function UC(i,l){return l=typeof l=="function"?l:n,i&&i.length?qr(i,n,l):[]}function Dc(i){if(!(i&&i.length))return[];var l=0;return i=Wr(i,function(h){if(Gt(h))return l=Bt(h.length,l),!0}),Kl(l,function(h){return xt(i,jl(h))})}function Qf(i,l){if(!(i&&i.length))return[];var h=Dc(i);return l==null?h:xt(h,function(E){return An(l,n,E)})}var FC=nt(function(i,l){return Gt(i)?Wi(i,l):[]}),$C=nt(function(i){return vc(Wr(i,Gt))}),HC=nt(function(i){var l=jn(i);return Gt(l)&&(l=n),vc(Wr(i,Gt),$e(l,2))}),PC=nt(function(i){var l=jn(i);return l=typeof l=="function"?l:n,vc(Wr(i,Gt),n,l)}),BC=nt(Dc);function WC(i,l){return vf(i||[],l||[],Bi)}function zC(i,l){return vf(i||[],l||[],ji)}var YC=nt(function(i){var l=i.length,h=l>1?i[l-1]:n;return h=typeof h=="function"?(i.pop(),h):n,Qf(i,h)});function Jf(i){var l=y(i);return l.__chain__=!0,l}function jC(i,l){return l(i),i}function Is(i,l){return l(i)}var VC=Or(function(i){var l=i.length,h=l?i[0]:0,E=this.__wrapped__,O=function(N){return rc(N,i)};return l>1||this.__actions__.length||!(E instanceof at)||!yr(h)?this.thru(O):(E=E.slice(h,+h+(l?1:0)),E.__actions__.push({func:Is,args:[O],thisArg:n}),new Wn(E,this.__chain__).thru(function(N){return l&&!N.length&&N.push(n),N}))});function qC(){return Jf(this)}function KC(){return new Wn(this.value(),this.__chain__)}function XC(){this.__values__===n&&(this.__values__=fg(this.value()));var i=this.__index__>=this.__values__.length,l=i?n:this.__values__[this.__index__++];return{done:i,value:l}}function ZC(){return this}function QC(i){for(var l,h=this;h instanceof as;){var E=jf(h);E.__index__=0,E.__values__=n,l?O.__wrapped__=E:l=E;var O=E;h=h.__wrapped__}return O.__wrapped__=i,l}function JC(){var i=this.__wrapped__;if(i instanceof at){var l=i;return this.__actions__.length&&(l=new at(this)),l=l.reverse(),l.__actions__.push({func:Is,args:[Tc],thisArg:n}),new Wn(l,this.__chain__)}return this.thru(Tc)}function eE(){return hf(this.__wrapped__,this.__actions__)}var tE=fs(function(i,l,h){mt.call(i,h)?++i[h]:br(i,h,1)});function nE(i,l,h){var E=Xe(i)?A_:j1;return h&&un(i,l,h)&&(l=n),E(i,$e(l,3))}function rE(i,l){var h=Xe(i)?Wr:Z_;return h(i,$e(l,3))}var oE=Lf(Vf),iE=Lf(qf);function aE(i,l){return Vt(bs(i,l),1)}function sE(i,l){return Vt(bs(i,l),Ve)}function lE(i,l,h){return h=h===n?1:Je(h),Vt(bs(i,l),h)}function eg(i,l){var h=Xe(i)?Pn:Vr;return h(i,$e(l,3))}function tg(i,l){var h=Xe(i)?Am:X_;return h(i,$e(l,3))}var cE=fs(function(i,l,h){mt.call(i,h)?i[h].push(l):br(i,h,[l])});function uE(i,l,h,E){i=En(i)?i:ri(i),h=h&&!E?Je(h):0;var O=i.length;return h<0&&(h=Bt(O+h,0)),As(i)?h<=O&&i.indexOf(l,h)>-1:!!O&&Yo(i,l,h)>-1}var dE=nt(function(i,l,h){var E=-1,O=typeof l=="function",N=En(i)?X(i.length):[];return Vr(i,function(G){N[++E]=O?An(l,G,h):zi(G,l,h)}),N}),_E=fs(function(i,l,h){br(i,h,l)});function bs(i,l){var h=Xe(i)?xt:rf;return h(i,$e(l,3))}function fE(i,l,h,E){return i==null?[]:(Xe(l)||(l=l==null?[]:[l]),h=E?n:h,Xe(h)||(h=h==null?[]:[h]),lf(i,l,h))}var gE=fs(function(i,l,h){i[h?0:1].push(l)},function(){return[[],[]]});function hE(i,l,h){var E=Xe(i)?zl:T_,O=arguments.length<3;return E(i,$e(l,4),h,O,Vr)}function vE(i,l,h){var E=Xe(i)?Sm:T_,O=arguments.length<3;return E(i,$e(l,4),h,O,X_)}function pE(i,l){var h=Xe(i)?Wr:Z_;return h(i,ys($e(l,3)))}function mE(i){var l=Xe(i)?j_:u0;return l(i)}function CE(i,l,h){(h?un(i,l,h):l===n)?l=1:l=Je(l);var E=Xe(i)?P1:d0;return E(i,l)}function EE(i){var l=Xe(i)?B1:f0;return l(i)}function IE(i){if(i==null)return 0;if(En(i))return As(i)?Vo(i):i.length;var l=tn(i);return l==Ie||l==er?i.size:cc(i).length}function bE(i,l,h){var E=Xe(i)?Yl:g0;return h&&un(i,l,h)&&(l=n),E(i,$e(l,3))}var wE=nt(function(i,l){if(i==null)return[];var h=l.length;return h>1&&un(i,l[0],l[1])?l=[]:h>2&&un(l[0],l[1],l[2])&&(l=[l[0]]),lf(i,Vt(l,1),[])}),ws=r1||function(){return jt.Date.now()};function OE(i,l){if(typeof l!="function")throw new Bn(s);return i=Je(i),function(){if(--i<1)return l.apply(this,arguments)}}function ng(i,l,h){return l=h?n:l,l=i&&l==null?i.length:l,wr(i,B,n,n,n,n,l)}function rg(i,l){var h;if(typeof l!="function")throw new Bn(s);return i=Je(i),function(){return--i>0&&(h=l.apply(this,arguments)),i<=1&&(l=n),h}}var Rc=nt(function(i,l,h){var E=b;if(h.length){var O=Yr(h,ti(Rc));E|=F}return wr(i,E,l,h,O)}),og=nt(function(i,l,h){var E=b|w;if(h.length){var O=Yr(h,ti(og));E|=F}return wr(l,E,i,h,O)});function ig(i,l,h){l=h?n:l;var E=wr(i,R,n,n,n,n,n,l);return E.placeholder=ig.placeholder,E}function ag(i,l,h){l=h?n:l;var E=wr(i,M,n,n,n,n,n,l);return E.placeholder=ag.placeholder,E}function sg(i,l,h){var E,O,N,G,W,q,ie=0,le=!1,fe=!1,be=!0;if(typeof i!="function")throw new Bn(s);l=Vn(l)||0,Dt(h)&&(le=!!h.leading,fe="maxWait"in h,N=fe?Bt(Vn(h.maxWait)||0,l):N,be="trailing"in h?!!h.trailing:be);function Me(Ut){var or=E,Sr=O;return E=O=n,ie=Ut,G=i.apply(Sr,or),G}function He(Ut){return ie=Ut,W=Ki(ot,l),le?Me(Ut):G}function et(Ut){var or=Ut-q,Sr=Ut-ie,Lg=l-or;return fe?en(Lg,N-Sr):Lg}function Pe(Ut){var or=Ut-q,Sr=Ut-ie;return q===n||or>=l||or<0||fe&&Sr>=N}function ot(){var Ut=ws();if(Pe(Ut))return ut(Ut);W=Ki(ot,et(Ut))}function ut(Ut){return W=n,be&&E?Me(Ut):(E=O=n,G)}function Tn(){W!==n&&pf(W),ie=0,E=q=O=W=n}function dn(){return W===n?G:ut(ws())}function Dn(){var Ut=ws(),or=Pe(Ut);if(E=arguments,O=this,q=Ut,or){if(W===n)return He(q);if(fe)return pf(W),W=Ki(ot,l),Me(q)}return W===n&&(W=Ki(ot,l)),G}return Dn.cancel=Tn,Dn.flush=dn,Dn}var yE=nt(function(i,l){return K_(i,1,l)}),LE=nt(function(i,l,h){return K_(i,Vn(l)||0,h)});function AE(i){return wr(i,J)}function Os(i,l){if(typeof i!="function"||l!=null&&typeof l!="function")throw new Bn(s);var h=function(){var E=arguments,O=l?l.apply(this,E):E[0],N=h.cache;if(N.has(O))return N.get(O);var G=i.apply(this,E);return h.cache=N.set(O,G)||N,G};return h.cache=new(Os.Cache||Ir),h}Os.Cache=Ir;function ys(i){if(typeof i!="function")throw new Bn(s);return function(){var l=arguments;switch(l.length){case 0:return!i.call(this);case 1:return!i.call(this,l[0]);case 2:return!i.call(this,l[0],l[1]);case 3:return!i.call(this,l[0],l[1],l[2])}return!i.apply(this,l)}}function SE(i){return rg(2,i)}var NE=h0(function(i,l){l=l.length==1&&Xe(l[0])?xt(l[0],Sn($e())):xt(Vt(l,1),Sn($e()));var h=l.length;return nt(function(E){for(var O=-1,N=en(E.length,h);++O<N;)E[O]=l[O].call(this,E[O]);return An(i,this,E)})}),kc=nt(function(i,l){var h=Yr(l,ti(kc));return wr(i,F,n,l,h)}),lg=nt(function(i,l){var h=Yr(l,ti(lg));return wr(i,P,n,l,h)}),xE=Or(function(i,l){return wr(i,K,n,n,n,l)});function TE(i,l){if(typeof i!="function")throw new Bn(s);return l=l===n?l:Je(l),nt(i,l)}function DE(i,l){if(typeof i!="function")throw new Bn(s);return l=l==null?0:Bt(Je(l),0),nt(function(h){var E=h[l],O=Xr(h,0,l);return E&&zr(O,E),An(i,this,O)})}function RE(i,l,h){var E=!0,O=!0;if(typeof i!="function")throw new Bn(s);return Dt(h)&&(E="leading"in h?!!h.leading:E,O="trailing"in h?!!h.trailing:O),sg(i,l,{leading:E,maxWait:l,trailing:O})}function kE(i){return ng(i,1)}function ME(i,l){return kc(mc(l),i)}function GE(){if(!arguments.length)return[];var i=arguments[0];return Xe(i)?i:[i]}function UE(i){return zn(i,m)}function FE(i,l){return l=typeof l=="function"?l:n,zn(i,m,l)}function $E(i){return zn(i,f|m)}function HE(i,l){return l=typeof l=="function"?l:n,zn(i,f|m,l)}function PE(i,l){return l==null||q_(i,l,Wt(l))}function rr(i,l){return i===l||i!==i&&l!==l}var BE=ps(ac),WE=ps(function(i,l){return i>=l}),yo=ef(function(){return arguments}())?ef:function(i){return Mt(i)&&mt.call(i,"callee")&&!H_.call(i,"callee")},Xe=X.isArray,zE=I_?Sn(I_):Q1;function En(i){return i!=null&&Ls(i.length)&&!Lr(i)}function Gt(i){return Mt(i)&&En(i)}function YE(i){return i===!0||i===!1||Mt(i)&&cn(i)==ar}var Zr=i1||Yc,jE=b_?Sn(b_):J1;function VE(i){return Mt(i)&&i.nodeType===1&&!Xi(i)}function qE(i){if(i==null)return!0;if(En(i)&&(Xe(i)||typeof i=="string"||typeof i.splice=="function"||Zr(i)||ni(i)||yo(i)))return!i.length;var l=tn(i);if(l==Ie||l==er)return!i.size;if(qi(i))return!cc(i).length;for(var h in i)if(mt.call(i,h))return!1;return!0}function KE(i,l){return Yi(i,l)}function XE(i,l,h){h=typeof h=="function"?h:n;var E=h?h(i,l):n;return E===n?Yi(i,l,n,h):!!E}function Mc(i){if(!Mt(i))return!1;var l=cn(i);return l==Br||l==Bo||typeof i.message=="string"&&typeof i.name=="string"&&!Xi(i)}function ZE(i){return typeof i=="number"&&B_(i)}function Lr(i){if(!Dt(i))return!1;var l=cn(i);return l==kt||l==Te||l==ho||l==Ol}function cg(i){return typeof i=="number"&&i==Je(i)}function Ls(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=ye}function Dt(i){var l=typeof i;return i!=null&&(l=="object"||l=="function")}function Mt(i){return i!=null&&typeof i=="object"}var ug=w_?Sn(w_):t0;function QE(i,l){return i===l||lc(i,l,yc(l))}function JE(i,l,h){return h=typeof h=="function"?h:n,lc(i,l,yc(l),h)}function eI(i){return dg(i)&&i!=+i}function tI(i){if(F0(i))throw new Ke(a);return tf(i)}function nI(i){return i===null}function rI(i){return i==null}function dg(i){return typeof i=="number"||Mt(i)&&cn(i)==ke}function Xi(i){if(!Mt(i)||cn(i)!=At)return!1;var l=Ja(i);if(l===null)return!0;var h=mt.call(l,"constructor")&&l.constructor;return typeof h=="function"&&h instanceof h&&Ka.call(h)==Jm}var Gc=O_?Sn(O_):n0;function oI(i){return cg(i)&&i>=-9007199254740991&&i<=ye}var _g=y_?Sn(y_):r0;function As(i){return typeof i=="string"||!Xe(i)&&Mt(i)&&cn(i)==Ri}function xn(i){return typeof i=="symbol"||Mt(i)&&cn(i)==Ha}var ni=L_?Sn(L_):o0;function iI(i){return i===n}function aI(i){return Mt(i)&&tn(i)==ki}function sI(i){return Mt(i)&&cn(i)==wp}var lI=ps(uc),cI=ps(function(i,l){return i<=l});function fg(i){if(!i)return[];if(En(i))return As(i)?tr(i):Cn(i);if(Ui&&i[Ui])return Pm(i[Ui]());var l=tn(i),h=l==Ie?Zl:l==er?ja:ri;return h(i)}function Ar(i){if(!i)return i===0?i:0;if(i=Vn(i),i===Ve||i===-1/0){var l=i<0?-1:1;return l*we}return i===i?i:0}function Je(i){var l=Ar(i),h=l%1;return l===l?h?l-h:l:0}function gg(i){return i?Io(Je(i),0,qe):0}function Vn(i){if(typeof i=="number")return i;if(xn(i))return ct;if(Dt(i)){var l=typeof i.valueOf=="function"?i.valueOf():i;i=Dt(l)?l+"":l}if(typeof i!="string")return i===0?i:+i;i=D_(i);var h=zp.test(i);return h||jp.test(i)?Om(i.slice(2),h?2:8):Wp.test(i)?ct:+i}function hg(i){return lr(i,In(i))}function uI(i){return i?Io(Je(i),-9007199254740991,ye):i===0?i:0}function pt(i){return i==null?"":Nn(i)}var dI=Jo(function(i,l){if(qi(l)||En(l)){lr(l,Wt(l),i);return}for(var h in l)mt.call(l,h)&&Bi(i,h,l[h])}),vg=Jo(function(i,l){lr(l,In(l),i)}),Ss=Jo(function(i,l,h,E){lr(l,In(l),i,E)}),_I=Jo(function(i,l,h,E){lr(l,Wt(l),i,E)}),fI=Or(rc);function gI(i,l){var h=Qo(i);return l==null?h:V_(h,l)}var hI=nt(function(i,l){i=bt(i);var h=-1,E=l.length,O=E>2?l[2]:n;for(O&&un(l[0],l[1],O)&&(E=1);++h<E;)for(var N=l[h],G=In(N),W=-1,q=G.length;++W<q;){var ie=G[W],le=i[ie];(le===n||rr(le,Ko[ie])&&!mt.call(i,ie))&&(i[ie]=N[ie])}return i}),vI=nt(function(i){return i.push(n,Rf),An(pg,n,i)});function pI(i,l){return S_(i,$e(l,3),sr)}function mI(i,l){return S_(i,$e(l,3),ic)}function CI(i,l){return i==null?i:oc(i,$e(l,3),In)}function EI(i,l){return i==null?i:Q_(i,$e(l,3),In)}function II(i,l){return i&&sr(i,$e(l,3))}function bI(i,l){return i&&ic(i,$e(l,3))}function wI(i){return i==null?[]:cs(i,Wt(i))}function OI(i){return i==null?[]:cs(i,In(i))}function Uc(i,l,h){var E=i==null?n:bo(i,l);return E===n?h:E}function yI(i,l){return i!=null&&Gf(i,l,q1)}function Fc(i,l){return i!=null&&Gf(i,l,K1)}var LI=Sf(function(i,l,h){l!=null&&typeof l.toString!="function"&&(l=Xa.call(l)),i[l]=h},Hc(bn)),AI=Sf(function(i,l,h){l!=null&&typeof l.toString!="function"&&(l=Xa.call(l)),mt.call(i,l)?i[l].push(h):i[l]=[h]},$e),SI=nt(zi);function Wt(i){return En(i)?Y_(i):cc(i)}function In(i){return En(i)?Y_(i,!0):i0(i)}function NI(i,l){var h={};return l=$e(l,3),sr(i,function(E,O,N){br(h,l(E,O,N),E)}),h}function xI(i,l){var h={};return l=$e(l,3),sr(i,function(E,O,N){br(h,O,l(E,O,N))}),h}var TI=Jo(function(i,l,h){us(i,l,h)}),pg=Jo(function(i,l,h,E){us(i,l,h,E)}),DI=Or(function(i,l){var h={};if(i==null)return h;var E=!1;l=xt(l,function(N){return N=Kr(N,i),E||(E=N.length>1),N}),lr(i,wc(i),h),E&&(h=zn(h,f|g|m,L0));for(var O=l.length;O--;)hc(h,l[O]);return h});function RI(i,l){return mg(i,ys($e(l)))}var kI=Or(function(i,l){return i==null?{}:s0(i,l)});function mg(i,l){if(i==null)return{};var h=xt(wc(i),function(E){return[E]});return l=$e(l),cf(i,h,function(E,O){return l(E,O[0])})}function MI(i,l,h){l=Kr(l,i);var E=-1,O=l.length;for(O||(O=1,i=n);++E<O;){var N=i==null?n:i[cr(l[E])];N===n&&(E=O,N=h),i=Lr(N)?N.call(i):N}return i}function GI(i,l,h){return i==null?i:ji(i,l,h)}function UI(i,l,h,E){return E=typeof E=="function"?E:n,i==null?i:ji(i,l,h,E)}var Cg=Tf(Wt),Eg=Tf(In);function FI(i,l,h){var E=Xe(i),O=E||Zr(i)||ni(i);if(l=$e(l,4),h==null){var N=i&&i.constructor;O?h=E?new N:[]:Dt(i)?h=Lr(N)?Qo(Ja(i)):{}:h={}}return(O?Pn:sr)(i,function(G,W,q){return l(h,G,W,q)}),h}function $I(i,l){return i==null?!0:hc(i,l)}function HI(i,l,h){return i==null?i:gf(i,l,mc(h))}function PI(i,l,h,E){return E=typeof E=="function"?E:n,i==null?i:gf(i,l,mc(h),E)}function ri(i){return i==null?[]:Xl(i,Wt(i))}function BI(i){return i==null?[]:Xl(i,In(i))}function WI(i,l,h){return h===n&&(h=l,l=n),h!==n&&(h=Vn(h),h=h===h?h:0),l!==n&&(l=Vn(l),l=l===l?l:0),Io(Vn(i),l,h)}function zI(i,l,h){return l=Ar(l),h===n?(h=l,l=0):h=Ar(h),i=Vn(i),X1(i,l,h)}function YI(i,l,h){if(h&&typeof h!="boolean"&&un(i,l,h)&&(l=h=n),h===n&&(typeof l=="boolean"?(h=l,l=n):typeof i=="boolean"&&(h=i,i=n)),i===n&&l===n?(i=0,l=1):(i=Ar(i),l===n?(l=i,i=0):l=Ar(l)),i>l){var E=i;i=l,l=E}if(h||i%1||l%1){var O=W_();return en(i+O*(l-i+wm("1e-"+((O+"").length-1))),l)}return _c(i,l)}var jI=ei(function(i,l,h){return l=l.toLowerCase(),i+(h?Ig(l):l)});function Ig(i){return $c(pt(i).toLowerCase())}function bg(i){return i=pt(i),i&&i.replace(qp,Gm).replace(fm,"")}function VI(i,l,h){i=pt(i),l=Nn(l);var E=i.length;h=h===n?E:Io(Je(h),0,E);var O=h;return h-=l.length,h>=0&&i.slice(h,O)==l}function qI(i){return i=pt(i),i&&Sp.test(i)?i.replace(Qd,Um):i}function KI(i){return i=pt(i),i&&kp.test(i)?i.replace(kl,"\\$&"):i}var XI=ei(function(i,l,h){return i+(h?"-":"")+l.toLowerCase()}),ZI=ei(function(i,l,h){return i+(h?" ":"")+l.toLowerCase()}),QI=yf("toLowerCase");function JI(i,l,h){i=pt(i),l=Je(l);var E=l?Vo(i):0;if(!l||E>=l)return i;var O=(l-E)/2;return vs(rs(O),h)+i+vs(ns(O),h)}function eb(i,l,h){i=pt(i),l=Je(l);var E=l?Vo(i):0;return l&&E<l?i+vs(l-E,h):i}function tb(i,l,h){i=pt(i),l=Je(l);var E=l?Vo(i):0;return l&&E<l?vs(l-E,h)+i:i}function nb(i,l,h){return h||l==null?l=0:l&&(l=+l),c1(pt(i).replace(Ml,""),l||0)}function rb(i,l,h){return(h?un(i,l,h):l===n)?l=1:l=Je(l),fc(pt(i),l)}function ob(){var i=arguments,l=pt(i[0]);return i.length<3?l:l.replace(i[1],i[2])}var ib=ei(function(i,l,h){return i+(h?"_":"")+l.toLowerCase()});function ab(i,l,h){return h&&typeof h!="number"&&un(i,l,h)&&(l=h=n),h=h===n?qe:h>>>0,h?(i=pt(i),i&&(typeof l=="string"||l!=null&&!Gc(l))&&(l=Nn(l),!l&&jo(i))?Xr(tr(i),0,h):i.split(l,h)):[]}var sb=ei(function(i,l,h){return i+(h?" ":"")+$c(l)});function lb(i,l,h){return i=pt(i),h=h==null?0:Io(Je(h),0,i.length),l=Nn(l),i.slice(h,h+l.length)==l}function cb(i,l,h){var E=y.templateSettings;h&&un(i,l,h)&&(l=n),i=pt(i),l=Ss({},l,E,Df);var O=Ss({},l.imports,E.imports,Df),N=Wt(O),G=Xl(O,N),W,q,ie=0,le=l.interpolate||Pa,fe="__p += '",be=Ql((l.escape||Pa).source+"|"+le.source+"|"+(le===Jd?Bp:Pa).source+"|"+(l.evaluate||Pa).source+"|$","g"),Me="//# sourceURL="+(mt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++mm+"]")+`
`;i.replace(be,function(Pe,ot,ut,Tn,dn,Dn){return ut||(ut=Tn),fe+=i.slice(ie,Dn).replace(Kp,Fm),ot&&(W=!0,fe+=`' +
__e(`+ot+`) +
'`),dn&&(q=!0,fe+=`';
`+dn+`;
__p += '`),ut&&(fe+=`' +
((__t = (`+ut+`)) == null ? '' : __t) +
'`),ie=Dn+Pe.length,Pe}),fe+=`';
`;var He=mt.call(l,"variable")&&l.variable;if(!He)fe=`with (obj) {
`+fe+`
}
`;else if(Hp.test(He))throw new Ke(c);fe=(q?fe.replace(Op,""):fe).replace(yp,"$1").replace(Lp,"$1;"),fe="function("+(He||"obj")+`) {
`+(He?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(W?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var et=Og(function(){return gt(N,Me+"return "+fe).apply(n,G)});if(et.source=fe,Mc(et))throw et;return et}function ub(i){return pt(i).toLowerCase()}function db(i){return pt(i).toUpperCase()}function _b(i,l,h){if(i=pt(i),i&&(h||l===n))return D_(i);if(!i||!(l=Nn(l)))return i;var E=tr(i),O=tr(l),N=R_(E,O),G=k_(E,O)+1;return Xr(E,N,G).join("")}function fb(i,l,h){if(i=pt(i),i&&(h||l===n))return i.slice(0,G_(i)+1);if(!i||!(l=Nn(l)))return i;var E=tr(i),O=k_(E,tr(l))+1;return Xr(E,0,O).join("")}function gb(i,l,h){if(i=pt(i),i&&(h||l===n))return i.replace(Ml,"");if(!i||!(l=Nn(l)))return i;var E=tr(i),O=R_(E,tr(l));return Xr(E,O).join("")}function hb(i,l){var h=ce,E=Q;if(Dt(l)){var O="separator"in l?l.separator:O;h="length"in l?Je(l.length):h,E="omission"in l?Nn(l.omission):E}i=pt(i);var N=i.length;if(jo(i)){var G=tr(i);N=G.length}if(h>=N)return i;var W=h-Vo(E);if(W<1)return E;var q=G?Xr(G,0,W).join(""):i.slice(0,W);if(O===n)return q+E;if(G&&(W+=q.length-W),Gc(O)){if(i.slice(W).search(O)){var ie,le=q;for(O.global||(O=Ql(O.source,pt(e_.exec(O))+"g")),O.lastIndex=0;ie=O.exec(le);)var fe=ie.index;q=q.slice(0,fe===n?W:fe)}}else if(i.indexOf(Nn(O),W)!=W){var be=q.lastIndexOf(O);be>-1&&(q=q.slice(0,be))}return q+E}function vb(i){return i=pt(i),i&&Ap.test(i)?i.replace(Zd,Ym):i}var pb=ei(function(i,l,h){return i+(h?" ":"")+l.toUpperCase()}),$c=yf("toUpperCase");function wg(i,l,h){return i=pt(i),l=h?n:l,l===n?Hm(i)?qm(i):Tm(i):i.match(l)||[]}var Og=nt(function(i,l){try{return An(i,n,l)}catch(h){return Mc(h)?h:new Ke(h)}}),mb=Or(function(i,l){return Pn(l,function(h){h=cr(h),br(i,h,Rc(i[h],i))}),i});function Cb(i){var l=i==null?0:i.length,h=$e();return i=l?xt(i,function(E){if(typeof E[1]!="function")throw new Bn(s);return[h(E[0]),E[1]]}):[],nt(function(E){for(var O=-1;++O<l;){var N=i[O];if(An(N[0],this,E))return An(N[1],this,E)}})}function Eb(i){return Y1(zn(i,f))}function Hc(i){return function(){return i}}function Ib(i,l){return i==null||i!==i?l:i}var bb=Af(),wb=Af(!0);function bn(i){return i}function Pc(i){return nf(typeof i=="function"?i:zn(i,f))}function Ob(i){return of(zn(i,f))}function yb(i,l){return af(i,zn(l,f))}var Lb=nt(function(i,l){return function(h){return zi(h,i,l)}}),Ab=nt(function(i,l){return function(h){return zi(i,h,l)}});function Bc(i,l,h){var E=Wt(l),O=cs(l,E);h==null&&!(Dt(l)&&(O.length||!E.length))&&(h=l,l=i,i=this,O=cs(l,Wt(l)));var N=!(Dt(h)&&"chain"in h)||!!h.chain,G=Lr(i);return Pn(O,function(W){var q=l[W];i[W]=q,G&&(i.prototype[W]=function(){var ie=this.__chain__;if(N||ie){var le=i(this.__wrapped__),fe=le.__actions__=Cn(this.__actions__);return fe.push({func:q,args:arguments,thisArg:i}),le.__chain__=ie,le}return q.apply(i,zr([this.value()],arguments))})}),i}function Sb(){return jt._===this&&(jt._=e1),this}function Wc(){}function Nb(i){return i=Je(i),nt(function(l){return sf(l,i)})}var xb=Ec(xt),Tb=Ec(A_),Db=Ec(Yl);function yg(i){return Ac(i)?jl(cr(i)):l0(i)}function Rb(i){return function(l){return i==null?n:bo(i,l)}}var kb=Nf(),Mb=Nf(!0);function zc(){return[]}function Yc(){return!1}function Gb(){return{}}function Ub(){return""}function Fb(){return!0}function $b(i,l){if(i=Je(i),i<1||i>ye)return[];var h=qe,E=en(i,qe);l=$e(l),i-=qe;for(var O=Kl(E,l);++h<i;)l(h);return O}function Hb(i){return Xe(i)?xt(i,cr):xn(i)?[i]:Cn(Yf(pt(i)))}function Pb(i){var l=++Qm;return pt(i)+l}var Bb=hs(function(i,l){return i+l},0),Wb=Ic("ceil"),zb=hs(function(i,l){return i/l},1),Yb=Ic("floor");function jb(i){return i&&i.length?ls(i,bn,ac):n}function Vb(i,l){return i&&i.length?ls(i,$e(l,2),ac):n}function qb(i){return x_(i,bn)}function Kb(i,l){return x_(i,$e(l,2))}function Xb(i){return i&&i.length?ls(i,bn,uc):n}function Zb(i,l){return i&&i.length?ls(i,$e(l,2),uc):n}var Qb=hs(function(i,l){return i*l},1),Jb=Ic("round"),ew=hs(function(i,l){return i-l},0);function tw(i){return i&&i.length?ql(i,bn):0}function nw(i,l){return i&&i.length?ql(i,$e(l,2)):0}return y.after=OE,y.ary=ng,y.assign=dI,y.assignIn=vg,y.assignInWith=Ss,y.assignWith=_I,y.at=fI,y.before=rg,y.bind=Rc,y.bindAll=mb,y.bindKey=og,y.castArray=GE,y.chain=Jf,y.chunk=Y0,y.compact=j0,y.concat=V0,y.cond=Cb,y.conforms=Eb,y.constant=Hc,y.countBy=tE,y.create=gI,y.curry=ig,y.curryRight=ag,y.debounce=sg,y.defaults=hI,y.defaultsDeep=vI,y.defer=yE,y.delay=LE,y.difference=q0,y.differenceBy=K0,y.differenceWith=X0,y.drop=Z0,y.dropRight=Q0,y.dropRightWhile=J0,y.dropWhile=eC,y.fill=tC,y.filter=rE,y.flatMap=aE,y.flatMapDeep=sE,y.flatMapDepth=lE,y.flatten=Kf,y.flattenDeep=nC,y.flattenDepth=rC,y.flip=AE,y.flow=bb,y.flowRight=wb,y.fromPairs=oC,y.functions=wI,y.functionsIn=OI,y.groupBy=cE,y.initial=aC,y.intersection=sC,y.intersectionBy=lC,y.intersectionWith=cC,y.invert=LI,y.invertBy=AI,y.invokeMap=dE,y.iteratee=Pc,y.keyBy=_E,y.keys=Wt,y.keysIn=In,y.map=bs,y.mapKeys=NI,y.mapValues=xI,y.matches=Ob,y.matchesProperty=yb,y.memoize=Os,y.merge=TI,y.mergeWith=pg,y.method=Lb,y.methodOf=Ab,y.mixin=Bc,y.negate=ys,y.nthArg=Nb,y.omit=DI,y.omitBy=RI,y.once=SE,y.orderBy=fE,y.over=xb,y.overArgs=NE,y.overEvery=Tb,y.overSome=Db,y.partial=kc,y.partialRight=lg,y.partition=gE,y.pick=kI,y.pickBy=mg,y.property=yg,y.propertyOf=Rb,y.pull=fC,y.pullAll=Zf,y.pullAllBy=gC,y.pullAllWith=hC,y.pullAt=vC,y.range=kb,y.rangeRight=Mb,y.rearg=xE,y.reject=pE,y.remove=pC,y.rest=TE,y.reverse=Tc,y.sampleSize=CE,y.set=GI,y.setWith=UI,y.shuffle=EE,y.slice=mC,y.sortBy=wE,y.sortedUniq=yC,y.sortedUniqBy=LC,y.split=ab,y.spread=DE,y.tail=AC,y.take=SC,y.takeRight=NC,y.takeRightWhile=xC,y.takeWhile=TC,y.tap=jC,y.throttle=RE,y.thru=Is,y.toArray=fg,y.toPairs=Cg,y.toPairsIn=Eg,y.toPath=Hb,y.toPlainObject=hg,y.transform=FI,y.unary=kE,y.union=DC,y.unionBy=RC,y.unionWith=kC,y.uniq=MC,y.uniqBy=GC,y.uniqWith=UC,y.unset=$I,y.unzip=Dc,y.unzipWith=Qf,y.update=HI,y.updateWith=PI,y.values=ri,y.valuesIn=BI,y.without=FC,y.words=wg,y.wrap=ME,y.xor=$C,y.xorBy=HC,y.xorWith=PC,y.zip=BC,y.zipObject=WC,y.zipObjectDeep=zC,y.zipWith=YC,y.entries=Cg,y.entriesIn=Eg,y.extend=vg,y.extendWith=Ss,Bc(y,y),y.add=Bb,y.attempt=Og,y.camelCase=jI,y.capitalize=Ig,y.ceil=Wb,y.clamp=WI,y.clone=UE,y.cloneDeep=$E,y.cloneDeepWith=HE,y.cloneWith=FE,y.conformsTo=PE,y.deburr=bg,y.defaultTo=Ib,y.divide=zb,y.endsWith=VI,y.eq=rr,y.escape=qI,y.escapeRegExp=KI,y.every=nE,y.find=oE,y.findIndex=Vf,y.findKey=pI,y.findLast=iE,y.findLastIndex=qf,y.findLastKey=mI,y.floor=Yb,y.forEach=eg,y.forEachRight=tg,y.forIn=CI,y.forInRight=EI,y.forOwn=II,y.forOwnRight=bI,y.get=Uc,y.gt=BE,y.gte=WE,y.has=yI,y.hasIn=Fc,y.head=Xf,y.identity=bn,y.includes=uE,y.indexOf=iC,y.inRange=zI,y.invoke=SI,y.isArguments=yo,y.isArray=Xe,y.isArrayBuffer=zE,y.isArrayLike=En,y.isArrayLikeObject=Gt,y.isBoolean=YE,y.isBuffer=Zr,y.isDate=jE,y.isElement=VE,y.isEmpty=qE,y.isEqual=KE,y.isEqualWith=XE,y.isError=Mc,y.isFinite=ZE,y.isFunction=Lr,y.isInteger=cg,y.isLength=Ls,y.isMap=ug,y.isMatch=QE,y.isMatchWith=JE,y.isNaN=eI,y.isNative=tI,y.isNil=rI,y.isNull=nI,y.isNumber=dg,y.isObject=Dt,y.isObjectLike=Mt,y.isPlainObject=Xi,y.isRegExp=Gc,y.isSafeInteger=oI,y.isSet=_g,y.isString=As,y.isSymbol=xn,y.isTypedArray=ni,y.isUndefined=iI,y.isWeakMap=aI,y.isWeakSet=sI,y.join=uC,y.kebabCase=XI,y.last=jn,y.lastIndexOf=dC,y.lowerCase=ZI,y.lowerFirst=QI,y.lt=lI,y.lte=cI,y.max=jb,y.maxBy=Vb,y.mean=qb,y.meanBy=Kb,y.min=Xb,y.minBy=Zb,y.stubArray=zc,y.stubFalse=Yc,y.stubObject=Gb,y.stubString=Ub,y.stubTrue=Fb,y.multiply=Qb,y.nth=_C,y.noConflict=Sb,y.noop=Wc,y.now=ws,y.pad=JI,y.padEnd=eb,y.padStart=tb,y.parseInt=nb,y.random=YI,y.reduce=hE,y.reduceRight=vE,y.repeat=rb,y.replace=ob,y.result=MI,y.round=Jb,y.runInContext=j,y.sample=mE,y.size=IE,y.snakeCase=ib,y.some=bE,y.sortedIndex=CC,y.sortedIndexBy=EC,y.sortedIndexOf=IC,y.sortedLastIndex=bC,y.sortedLastIndexBy=wC,y.sortedLastIndexOf=OC,y.startCase=sb,y.startsWith=lb,y.subtract=ew,y.sum=tw,y.sumBy=nw,y.template=cb,y.times=$b,y.toFinite=Ar,y.toInteger=Je,y.toLength=gg,y.toLower=ub,y.toNumber=Vn,y.toSafeInteger=uI,y.toString=pt,y.toUpper=db,y.trim=_b,y.trimEnd=fb,y.trimStart=gb,y.truncate=hb,y.unescape=vb,y.uniqueId=Pb,y.upperCase=pb,y.upperFirst=$c,y.each=eg,y.eachRight=tg,y.first=Xf,Bc(y,function(){var i={};return sr(y,function(l,h){mt.call(y.prototype,h)||(i[h]=l)}),i}(),{chain:!1}),y.VERSION=r,Pn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){y[i].placeholder=y}),Pn(["drop","take"],function(i,l){at.prototype[i]=function(h){h=h===n?1:Bt(Je(h),0);var E=this.__filtered__&&!l?new at(this):this.clone();return E.__filtered__?E.__takeCount__=en(h,E.__takeCount__):E.__views__.push({size:en(h,qe),type:i+(E.__dir__<0?"Right":"")}),E},at.prototype[i+"Right"]=function(h){return this.reverse()[i](h).reverse()}}),Pn(["filter","map","takeWhile"],function(i,l){var h=l+1,E=h==me||h==Ae;at.prototype[i]=function(O){var N=this.clone();return N.__iteratees__.push({iteratee:$e(O,3),type:h}),N.__filtered__=N.__filtered__||E,N}}),Pn(["head","last"],function(i,l){var h="take"+(l?"Right":"");at.prototype[i]=function(){return this[h](1).value()[0]}}),Pn(["initial","tail"],function(i,l){var h="drop"+(l?"":"Right");at.prototype[i]=function(){return this.__filtered__?new at(this):this[h](1)}}),at.prototype.compact=function(){return this.filter(bn)},at.prototype.find=function(i){return this.filter(i).head()},at.prototype.findLast=function(i){return this.reverse().find(i)},at.prototype.invokeMap=nt(function(i,l){return typeof i=="function"?new at(this):this.map(function(h){return zi(h,i,l)})}),at.prototype.reject=function(i){return this.filter(ys($e(i)))},at.prototype.slice=function(i,l){i=Je(i);var h=this;return h.__filtered__&&(i>0||l<0)?new at(h):(i<0?h=h.takeRight(-i):i&&(h=h.drop(i)),l!==n&&(l=Je(l),h=l<0?h.dropRight(-l):h.take(l-i)),h)},at.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},at.prototype.toArray=function(){return this.take(qe)},sr(at.prototype,function(i,l){var h=/^(?:filter|find|map|reject)|While$/.test(l),E=/^(?:head|last)$/.test(l),O=y[E?"take"+(l=="last"?"Right":""):l],N=E||/^find/.test(l);O&&(y.prototype[l]=function(){var G=this.__wrapped__,W=E?[1]:arguments,q=G instanceof at,ie=W[0],le=q||Xe(G),fe=function(ot){var ut=O.apply(y,zr([ot],W));return E&&be?ut[0]:ut};le&&h&&typeof ie=="function"&&ie.length!=1&&(q=le=!1);var be=this.__chain__,Me=!!this.__actions__.length,He=N&&!be,et=q&&!Me;if(!N&&le){G=et?G:new at(this);var Pe=i.apply(G,W);return Pe.__actions__.push({func:Is,args:[fe],thisArg:n}),new Wn(Pe,be)}return He&&et?i.apply(this,W):(Pe=this.thru(fe),He?E?Pe.value()[0]:Pe.value():Pe)})}),Pn(["pop","push","shift","sort","splice","unshift"],function(i){var l=Va[i],h=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",E=/^(?:pop|shift)$/.test(i);y.prototype[i]=function(){var O=arguments;if(E&&!this.__chain__){var N=this.value();return l.apply(Xe(N)?N:[],O)}return this[h](function(G){return l.apply(Xe(G)?G:[],O)})}}),sr(at.prototype,function(i,l){var h=y[l];if(h){var E=h.name+"";mt.call(Zo,E)||(Zo[E]=[]),Zo[E].push({name:l,func:h})}}),Zo[gs(n,w).name]=[{name:"wrapper",func:n}],at.prototype.clone=v1,at.prototype.reverse=p1,at.prototype.value=m1,y.prototype.at=VC,y.prototype.chain=qC,y.prototype.commit=KC,y.prototype.next=XC,y.prototype.plant=QC,y.prototype.reverse=JC,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=eE,y.prototype.first=y.prototype.head,Ui&&(y.prototype[Ui]=ZC),y},qo=Km();po?((po.exports=qo)._=qo,Pl._=qo):jt._=qo}).call(IO)}(ra,ra.exports)),ra.exports}var Nt=bO(),H=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(H||{});function wn(t,e,n){n!==void 0&&(t[e]=n)}function wO(t){var e,n,r,o,a,s,c,u,_,v,f,g,m,C;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(o=t.width)!=null&&o.editable||(a=t.inset)!=null&&a.editable||(s=t.angle)!=null&&s.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(v=t.strokeDasharray)!=null&&v.editable||(f=t.strokeDashoffset)!=null&&f.editable||(g=t.fontSize)!=null&&g.editable||(m=t.fontColor)!=null&&m.editable||(C=t.opacity)!=null&&C.editable)}function _u(t){var n,r,o,a,s,c,u,_,v,f,g,m,C,I,b,w,L,R,M,F,P,B;const e={type:t.type};return wn(e,"n",(n=t.n)==null?void 0:n.value),wn(e,"r",(r=t.r)==null?void 0:r.value),wn(e,"height",(o=t.height)==null?void 0:o.value),wn(e,"width",(a=t.width)==null?void 0:a.value),wn(e,"inset",(s=t.inset)==null?void 0:s.value),wn(e,"angle",(c=t.angle)==null?void 0:c.value),wn(e,"fill",(u=t.fill)==null?void 0:u.value),wn(e,"stroke",(_=t.stroke)==null?void 0:_.value),wn(e,"strokeWidth",(v=t.strokeWidth)==null?void 0:v.value),wn(e,"strokeDasharray",(f=t.strokeDasharray)==null?void 0:f.value),wn(e,"strokeDashoffset",(g=t.strokeDashoffset)==null?void 0:g.value),wn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),wn(e,"fontColor",(C=t.fontColor)==null?void 0:C.value),wn(e,"opacity",(I=t.opacity)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(w=(b=t.linePathOptions)==null?void 0:b.shortenHead)==null?void 0:w.value,shortenTail:(R=(L=t.linePathOptions)==null?void 0:L.shortenTail)==null?void 0:R.value,bezierRounding:(F=(M=t.linePathOptions)==null?void 0:M.bezierRounding)==null?void 0:F.value,closeLoops:(B=(P=t.linePathOptions)==null?void 0:P.closeLoops)==null?void 0:B.value}),e}function OO(t,e){const n={};if(e===void 0)return t;for(const o in t)o!=="linePathOptions"&&t[o]!==e[o]&&(n[o]=t[o]);return Object.keys(n).length>0?n:void 0}const yO={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},LO={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},AO={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Qh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Jh={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Ia={type:"Line",strokeWidth:.125,stroke:"gray"},dd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},_d={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},SO={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},NO={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};function xr(t){return Array.isArray?Array.isArray(t):nv(t)==="[object Array]"}function xO(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function TO(t){return t==null?"":xO(t)}function fr(t){return typeof t=="string"}function ev(t){return typeof t=="number"}function DO(t){return t===!0||t===!1||RO(t)&&nv(t)=="[object Boolean]"}function tv(t){return typeof t=="object"}function RO(t){return tv(t)&&t!==null}function Mn(t){return t!=null}function Qc(t){return!t.trim().length}function nv(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const kO="Incorrect 'index' type",MO=t=>`Invalid value for key ${t}`,GO=t=>`Pattern length exceeds max of ${t}.`,UO=t=>`Missing ${t} property in key`,FO=t=>`Property 'weight' in key '${t}' must be a positive integer`,Gg=Object.prototype.hasOwnProperty;class $O{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let o=rv(r);this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function rv(t){let e=null,n=null,r=null,o=1,a=null;if(fr(t)||xr(t))r=t,e=Ug(t),n=fu(t);else{if(!Gg.call(t,"name"))throw new Error(UO("name"));const s=t.name;if(r=s,Gg.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(FO(s));e=Ug(s),n=fu(s),a=t.getFn}return{path:e,id:n,weight:o,src:r,getFn:a}}function Ug(t){return xr(t)?t:t.split(".")}function fu(t){return xr(t)?t.join("."):t}function HO(t,e){let n=[],r=!1;const o=(a,s,c)=>{if(Mn(a))if(!s[c])n.push(a);else{let u=s[c];const _=a[u];if(!Mn(_))return;if(c===s.length-1&&(fr(_)||ev(_)||DO(_)))n.push(TO(_));else if(xr(_)){r=!0;for(let v=0,f=_.length;v<f;v+=1)o(_[v],s,c+1)}else s.length&&o(_,s,c+1)}};return o(t,fr(e)?e.split("."):e,0),r?n:n[0]}const PO={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},BO={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},WO={location:0,threshold:.6,distance:100},zO={useExtendedSearch:!1,getFn:HO,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ye={...BO,...PO,...WO,...zO};const YO=/[^ ]+/g;function jO(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(o){const a=o.match(YO).length;if(n.has(a))return n.get(a);const s=1/Math.pow(a,.5*t),c=parseFloat(Math.round(s*r)/r);return n.set(a,c),c},clear(){n.clear()}}}class fd{constructor({getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){this.norm=jO(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,fr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();fr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Mn(e)||Qc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((o,a)=>{let s=o.getFn?o.getFn(e):this.getFn(e,o.path);if(Mn(s)){if(xr(s)){let c=[];const u=[{nestedArrIndex:-1,value:s}];for(;u.length;){const{nestedArrIndex:_,value:v}=u.pop();if(Mn(v))if(fr(v)&&!Qc(v)){let f={v,i:_,n:this.norm.get(v)};c.push(f)}else xr(v)&&v.forEach((f,g)=>{u.push({nestedArrIndex:g,value:f})})}r.$[a]=c}else if(fr(s)&&!Qc(s)){let c={v:s,n:this.norm.get(s)};r.$[a]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function ov(t,e,{getFn:n=Ye.getFn,fieldNormWeight:r=Ye.fieldNormWeight}={}){const o=new fd({getFn:n,fieldNormWeight:r});return o.setKeys(t.map(rv)),o.setSources(e),o.create(),o}function VO(t,{getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){const{keys:r,records:o}=t,a=new fd({getFn:e,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(o),a}function Ts(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:o=Ye.distance,ignoreLocation:a=Ye.ignoreLocation}={}){const s=e/t.length;if(a)return s;const c=Math.abs(r-n);return o?s+c/o:c?1:s}function qO(t=[],e=Ye.minMatchCharLength){let n=[],r=-1,o=-1,a=0;for(let s=t.length;a<s;a+=1){let c=t[a];c&&r===-1?r=a:!c&&r!==-1&&(o=a-1,o-r+1>=e&&n.push([r,o]),r=-1)}return t[a-1]&&a-r>=e&&n.push([r,a-1]),n}const Ao=32;function KO(t,e,n,{location:r=Ye.location,distance:o=Ye.distance,threshold:a=Ye.threshold,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,includeMatches:u=Ye.includeMatches,ignoreLocation:_=Ye.ignoreLocation}={}){if(e.length>Ao)throw new Error(GO(Ao));const v=e.length,f=t.length,g=Math.max(0,Math.min(r,f));let m=a,C=g;const I=c>1||u,b=I?Array(f):[];let w;for(;(w=t.indexOf(e,C))>-1;){let B=Ts(e,{currentLocation:w,expectedLocation:g,distance:o,ignoreLocation:_});if(m=Math.min(B,m),C=w+v,I){let K=0;for(;K<v;)b[w+K]=1,K+=1}}C=-1;let L=[],R=1,M=v+f;const F=1<<v-1;for(let B=0;B<v;B+=1){let K=0,J=M;for(;K<J;)Ts(e,{errors:B,currentLocation:g+J,expectedLocation:g,distance:o,ignoreLocation:_})<=m?K=J:M=J,J=Math.floor((M-K)/2+K);M=J;let ce=Math.max(1,g-J+1),Q=s?f:Math.min(g+J,f)+v,re=Array(Q+2);re[Q+1]=(1<<B)-1;for(let me=Q;me>=ce;me-=1){let _e=me-1,Ae=n[t.charAt(_e)];if(I&&(b[_e]=+!!Ae),re[me]=(re[me+1]<<1|1)&Ae,B&&(re[me]|=(L[me+1]|L[me])<<1|1|L[me+1]),re[me]&F&&(R=Ts(e,{errors:B,currentLocation:_e,expectedLocation:g,distance:o,ignoreLocation:_}),R<=m)){if(m=R,C=_e,C<=g)break;ce=Math.max(1,2*g-C)}}if(Ts(e,{errors:B+1,currentLocation:g,expectedLocation:g,distance:o,ignoreLocation:_})>m)break;L=re}const P={isMatch:C>=0,score:Math.max(.001,R)};if(I){const B=qO(b,c);B.length?u&&(P.indices=B):P.isMatch=!1}return P}function XO(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const o=t.charAt(n);e[o]=(e[o]||0)|1<<r-n-1}return e}class iv{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:o=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:o,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const v=(g,m)=>{this.chunks.push({pattern:g,alphabet:XO(g),startIndex:m})},f=this.pattern.length;if(f>Ao){let g=0;const m=f%Ao,C=f-m;for(;g<C;)v(this.pattern.substr(g,Ao),g),g+=Ao;if(m){const I=f-Ao;v(this.pattern.substr(I),I)}}else v(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let C={isMatch:!0,score:0};return r&&(C.indices=[[0,e.length-1]]),C}const{location:o,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let v=[],f=0,g=!1;this.chunks.forEach(({pattern:C,alphabet:I,startIndex:b})=>{const{isMatch:w,score:L,indices:R}=KO(e,C,I,{location:o+b,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});w&&(g=!0),f+=L,w&&R&&(v=[...v,...R])});let m={isMatch:g,score:g?f/this.chunks.length:1};return g&&r&&(m.indices=v),m}}class ao{constructor(e){this.pattern=e}static isMultiMatch(e){return Fg(e,this.multiRegex)}static isSingleMatch(e){return Fg(e,this.singleRegex)}search(){}}function Fg(t,e){const n=t.match(e);return n?n[1]:null}class ZO extends ao{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class QO extends ao{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class JO extends ao{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ey extends ao{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ty extends ao{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ny extends ao{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class av extends ao{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:o=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){super(e),this._bitapSearch=new iv(e,{location:n,threshold:r,distance:o,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class sv extends ao{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const o=[],a=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+a,o.push([r,n-1]);const s=!!o.length;return{isMatch:s,score:s?0:1,indices:o}}}const gu=[ZO,sv,JO,ey,ny,ty,QO,av],$g=gu.length,ry=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,oy="|";function iy(t,e={}){return t.split(oy).map(n=>{let r=n.trim().split(ry).filter(a=>a&&!!a.trim()),o=[];for(let a=0,s=r.length;a<s;a+=1){const c=r[a];let u=!1,_=-1;for(;!u&&++_<$g;){const v=gu[_];let f=v.isMultiMatch(c);f&&(o.push(new v(f,e)),u=!0)}if(!u)for(_=-1;++_<$g;){const v=gu[_];let f=v.isSingleMatch(c);if(f){o.push(new v(f,e));break}}}return o})}const ay=new Set([av.type,sv.type]);class sy{constructor(e,{isCaseSensitive:n=Ye.isCaseSensitive,includeMatches:r=Ye.includeMatches,minMatchCharLength:o=Ye.minMatchCharLength,ignoreLocation:a=Ye.ignoreLocation,findAllMatches:s=Ye.findAllMatches,location:c=Ye.location,threshold:u=Ye.threshold,distance:_=Ye.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:o,findAllMatches:s,ignoreLocation:a,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=iy(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let a=0,s=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const v=n[u];s.length=0,a=0;for(let f=0,g=v.length;f<g;f+=1){const m=v[f],{isMatch:C,indices:I,score:b}=m.search(e);if(C){if(a+=1,c+=b,r){const w=m.constructor.type;ay.has(w)?s=[...s,...I]:s.push(I)}}else{c=0,a=0,s.length=0;break}}if(a){let f={isMatch:!0,score:c/a};return r&&(f.indices=s),f}}return{isMatch:!1,score:1}}}const hu=[];function ly(...t){hu.push(...t)}function vu(t,e){for(let n=0,r=hu.length;n<r;n+=1){let o=hu[n];if(o.condition(t,e))return new o(t,e)}return new iv(t,e)}const $s={AND:"$and",OR:"$or"},pu={PATH:"$path",PATTERN:"$val"},mu=t=>!!(t[$s.AND]||t[$s.OR]),cy=t=>!!t[pu.PATH],uy=t=>!xr(t)&&tv(t)&&!mu(t),Hg=t=>({[$s.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function lv(t,e,{auto:n=!0}={}){const r=o=>{let a=Object.keys(o);const s=cy(o);if(!s&&a.length>1&&!mu(o))return r(Hg(o));if(uy(o)){const u=s?o[pu.PATH]:a[0],_=s?o[pu.PATTERN]:o[u];if(!fr(_))throw new Error(MO(u));const v={keyId:fu(u),pattern:_};return n&&(v.searcher=vu(_,e)),v}let c={children:[],operator:a[0]};return a.forEach(u=>{const _=o[u];xr(_)&&_.forEach(v=>{c.children.push(r(v))})}),c};return mu(t)||(t=Hg(t)),r(t)}function dy(t,{ignoreFieldNorm:e=Ye.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:o,norm:a,score:s})=>{const c=o?o.weight:null;r*=Math.pow(s===0&&c?Number.EPSILON:s,(c||1)*(e?1:a))}),n.score=r})}function _y(t,e){const n=t.matches;e.matches=[],Mn(n)&&n.forEach(r=>{if(!Mn(r.indices)||!r.indices.length)return;const{indices:o,value:a}=r;let s={indices:o,value:a};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function fy(t,e){e.score=t.score}function gy(t,e,{includeMatches:n=Ye.includeMatches,includeScore:r=Ye.includeScore}={}){const o=[];return n&&o.push(_y),r&&o.push(fy),t.map(a=>{const{idx:s}=a,c={item:e[s],refIndex:s};return o.length&&o.forEach(u=>{u(a,c)}),c})}class pi{constructor(e,n={},r){this.options={...Ye,...n},this.options.useExtendedSearch,this._keyStore=new $O(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof fd))throw new Error(kO);this._myIndex=n||ov(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Mn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,o=this._docs.length;r<o;r+=1){const a=this._docs[r];e(a,r)&&(this.removeAt(r),r-=1,o-=1,n.push(a))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:o,shouldSort:a,sortFn:s,ignoreFieldNorm:c}=this.options;let u=fr(e)?fr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return dy(u,{ignoreFieldNorm:c}),a&&u.sort(s),ev(n)&&n>-1&&(u=u.slice(0,n)),gy(u,this._docs,{includeMatches:r,includeScore:o})}_searchStringList(e){const n=vu(e,this.options),{records:r}=this._myIndex,o=[];return r.forEach(({v:a,i:s,n:c})=>{if(!Mn(a))return;const{isMatch:u,score:_,indices:v}=n.searchIn(a);u&&o.push({item:a,idx:s,matches:[{score:_,value:a,norm:c,indices:v}]})}),o}_searchLogical(e){const n=lv(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:f,searcher:g}=c,m=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(u,f),searcher:g});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const v=[];for(let f=0,g=c.children.length;f<g;f+=1){const m=c.children[f],C=r(m,u,_);if(C.length)v.push(...C);else if(c.operator===$s.AND)return[]}return v},o=this._myIndex.records,a={},s=[];return o.forEach(({$:c,i:u})=>{if(Mn(c)){let _=r(n,c,u);_.length&&(a[u]||(a[u]={idx:u,item:c,matches:[]},s.push(a[u])),_.forEach(({matches:v})=>{a[u].matches.push(...v)}))}}),s}_searchObjectList(e){const n=vu(e,this.options),{keys:r,records:o}=this._myIndex,a=[];return o.forEach(({$:s,i:c})=>{if(!Mn(s))return;let u=[];r.forEach((_,v)=>{u.push(...this._findMatches({key:_,value:s[v],searcher:n}))}),u.length&&a.push({idx:c,item:s,matches:u})}),a}_findMatches({key:e,value:n,searcher:r}){if(!Mn(n))return[];let o=[];if(xr(n))n.forEach(({v:a,i:s,n:c})=>{if(!Mn(a))return;const{isMatch:u,score:_,indices:v}=r.searchIn(a);u&&o.push({score:_,key:e,value:a,idx:s,norm:c,indices:v})});else{const{v:a,n:s}=n,{isMatch:c,score:u,indices:_}=r.searchIn(a);c&&o.push({score:u,key:e,value:a,norm:s,indices:_})}return o}}pi.version="7.0.0";pi.createIndex=ov;pi.parseIndex=VO;pi.config=Ye;pi.parseQuery=lv;ly(sy);function ro(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function hy(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function vy(t){return new pi(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function py(t,e,n){const r=hy(e,n);return t.length===0?r:vy(r).search(t).map(o=>o.item)}function my(t,e){return ro(t,e).shape}function Zt(t,e){const n=my(t,e);return n?_u(n):void 0}function ba(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return ud(e)}function Cy(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function wa(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return ud(o)})}function Ey(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(a=>{if(typeof a!="string")throw Error("cell must be string.");return ud(a)})})}function Dr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function cv(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Vh(e)}function Iy(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Vh(r)})}function by(t,e){const n=t.shape;return n===void 0?void 0:{...Zt(e,Tt),...n}}function uv(t,e,n){return{toolId:t,cells:e,value:n}}function wy(t,e){const n=wa(e,"cells"),r=Dr(e);return uv(t,n,r)}function dv(t,e,n){const r=n?t.length-2:0;return t.findIndex((a,s)=>ze(a,e)&&s>=r)}function Oy(t,e,n){const r=[...t.cells],o=r.length;if(!(o===0?!0:vi(r[o-1],e)))return t;const s=dv(t.cells,e,n);return s>=0?r.length=s+1:r.push(e),{...t,cells:r}}function _v(t,e){return{toolId:t,cells:e,lines:[]}}function yy(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Fs(n),{...t,cells:n};const r=n.some(a=>ze(a,e)),o=n.some(a=>vi(a,e));return n.length>0&&!r&&o?(n.push(e),Fs(n),{...t,cells:n}):t}function Ly(t,e,n){const r=t.cells.some(_=>ze(_,e)),o=t.lines.length;if(o===0&&!r)return t;if(o===0&&r)return Cu(t,e);const a=t.lines[o-1],s=a.length;if(s===0&&!r)return t;if(s===0&&r)return Cu(t,e);const c=dv(a,e,!1);return(a.length===0?!0:vi(a[s-1],e))?c>=0?(a.length=c+1,{...t,lines:[...t.lines.slice(0,o-1),a]}):!r||n?(a.push(e),{...t,lines:[...t.lines.slice(0,o-1),a]}):t:t}function Cu(t,e){return t.cells.some(r=>ze(r,e))?{...t,lines:[...t.lines,[e]]}:t}function Ay(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function Sy(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function Ny(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function xy(t,e){const n=wa(e,"cells"),r=Ey(e),o=_v(t,n);return o.lines=r,o}function fv(t,e,n=""){return{toolId:t,cells:e,value:n}}function Ty(t,e,n=!1){const r=Zh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function Dy(t,e){return{...t,value:e}}function Ry(t,e){const n=wa(e,"cells"),r=Dr(e);return fv(t,n,r)}function gv(t,e,n){return{toolId:t,cells:e,value:n}}function ky(t,e){const n=wa(e,"cells"),r=Dr(e);return gv(t,n,r)}function hv(t,e,n){return{toolId:t,cells:e,value:n}}function My(t,e){const n=wa(e,"cells"),r=Dr(e);return hv(t,n,r)}function vv(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function Gy(t,e){const n=ba(e),r=cv(e),o=Dr(e);return vv(t,n,r,o)}function pv(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function Uy(t,e){const n=ba(e),r=Dr(e);return pv(t,n,r)}function mv(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function Fy(t,e){const n=ba(e),r=cv(e);return mv(t,n,r)}function Cv(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function $y(t,e){const n=ba(e),r=Iy(e),o=Cv(t,n,We.N);return o.directions=r,o}function Ev(t,e,n=""){return{toolId:t,cell:e,value:n}}function Hy(t,e){const n=ba(e),r=Dr(e);return Ev(t,n,r)}function Py(t,e=""){return{toolId:t,value:e}}function By(t,e){const n=Dr(e);return Py(t,n)}function Iv(t,e,n=""){return{toolId:t,coords:e,value:n}}function Wy(t,e){const n=Cy(e,"coords"),r=Dr(e);return Iv(t,n,r)}function zy(t,e){const n=[...t.coords],r=n.length;return(r===0?!0:vi(n[r-1],e))?(n.push(e),{...t,coords:n}):t}function Oa(t,e){return{...t,value:e}}class ya extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const o=r[n];return o||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const o=this.get(e);o&&(o[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const o=this.get(e);o&&o[n]&&(o[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const o=[];for(const a of Object.values(r))o.push(eL(a));o.length&&(e[n]=o)}return e}static fromJson(e){const n=new ya;if(!e)return n;for(const[r,o]of Object.entries(e)){const a=Yh(r);if(a===void 0||!Object.keys(Tt).includes(a))continue;const s=o;for(const c of s){let u=null;if(jh(a,Qs)?u=Uy(a,c):ed(a)?u=Fy(a,c):td(a)?u=$y(a,c):nd(a)?u=My(a,c):Ph(a)?u=ky(a,c):rd(a)?u=wy(a,c):Wh(a)?u=Wy(a,c):od(a)?u=xy(a,c):id(a)?u=Ry(a,c):ga(a)?u=Gy(a,c):dO(a)?u=By(a,c):Bh(a)&&(u=Hy(a,c)),u!==null){n.addToDict(a);const _=Nt.uniqueId(),v=by(c,a);u.shape=v,n.addConstraint(a,_,u)}}}return n}}function gd(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=o[0];if(ze(a.cell,n))return[s,a]}return null}function Yy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(n.every(c=>a.cells.some(u=>ze(c,u))))return o}return null}function jy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=a.cells[a.cells.length-1];if(ze(n,s))return o}return null}function Pg(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>ze(c,n)))return[o[0],a]}return null}function Vy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r))if(o[1].cells.some(c=>ze(c,n)))return o;return null}function qy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r))if(o[1].coords.some(c=>ze(c,n)))return o;return null}function Bg(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>ze(c,n)))return[o[0],a]}return null}function Ky(t,e,n){const r=t.get(e);if(!r)return null;for(const[o,a]of Object.entries(r)){const s=a,c=s.lines.findIndex(u=>u.some((_,v)=>ze(_,n)&&v>0));if(c>=0)return{id:o,arrow:s,matchLineIdx:c}}return null}function Xy(t,e,n,r){const o=t.get(e);if(!o)return null;for(const a of Object.entries(o)){const s=a[1],c=a[0];if(ze(n,s.cell)&&r===s.direction)return c}return null}function Zy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=o[0];if(ze(n,a.cell))return s}return null}function Qy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>ze(c,n))||a.cells2.some(c=>ze(c,n)))return[o[0],a]}return null}function Jy(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const o of Object.entries(n)){const a=o[1];r.add(a.value)}return r}function eL(t){const e={};if("cells"in t){const n=t.cells.map(r=>Ns(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Ns(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(o=>Ns(o)));e.lines=n}if("cell"in t){const n=Ns(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=Zt(t.toolId,Tt),r=OO(t.shape,n);r&&(e.shape=r)}return e}function Wg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function bv(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function Eu(t){const e=new Option().style;return e.color=t,e.color!==""}function Jc(t){return bv(t)||Eu(t)?t:Eu(`#${t}`)?`#${t}`:void 0}function Hs(t,e,n=", "){if(!t.length)return"";const r=t.map(o=>String(o));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function wv(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Iu(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let o=`${e}_by_${r}`;return o=o.replaceAll(/[\W]/g,""),o}function tL(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const zg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function nL(t){return t in zg?zg[t]:null}function Ov(t,e,n){if(n===null)return null;const r=nL(n);if(r===null)return null;const[o,a]=[r.h,r.w];return Math.floor(t/o)*o+Math.floor(e/a)}function eu(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(o=>o===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class rL{constructor(e,n){ve(this,"r");ve(this,"c");ve(this,"outside",!1);ve(this,"value",null);ve(this,"given",!1);ve(this,"region",null);ve(this,"centerMarks",[]);ve(this,"cornerMarks",[]);ve(this,"highlights",[]);ve(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=eu(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=eu(this.cornerMarks,e))}enterHighlight(e){this.highlights=eu(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==Ov(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class La{constructor(e,n){ve(this,"nCols");ve(this,"nRows");ve(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let o=0;o<e;o++){const a=[];for(let s=0;s<n;s++){const c=new rL(o,s);if(r){const u=Ov(o,s,e);c.region=u}a.push(c)}this.grid.push(a)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const o=r[e];o.outside||n.push(o)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const o of r){const[a,s]=[e.r+o[0],e.c+o[1]],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const o of r){const a=e.r+o[0],s=e.c+o[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const o of r){const a=e.r+o[0],s=e.c+o[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return wv(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),o=[...r.keys()].sort(),a=o.length;if(e<0||e>=a||![...r.values()].every(c=>c===a))return n;for(const c of o){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const o=[],{r:a,c:s}=el(r);let[c,u]=[e+a,n+s];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];o.push(_),[c,u]=[c+a,u+s]}return o}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const o=[];for(let a=0;a<this.nCols;a++){const s=this.getCell(r,a);if(!s)continue;const c=s==null?void 0:s.toJson(n);o.push(c)}e.push(o)}return e}static fromJSON(e,n,r){const o=new La(e,n);for(let a=0;a<e;a++)for(let s=0;s<n;s++){const c=r[a][s],u=o.getCell(a,s);u&&Object.assign(u,c)}return o}}function oL(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,o={};o.puzzleInfo=t.puzzleMeta,o.nRows=e.nRows,o.nCols=e.nCols;const a=Math.min(e.nRows,e.nCols),s=Nt.range(1,a+1);t.valid_digits&&!tL(s,t.valid_digits)&&(o.valid_digits=t.valid_digits),o.grid=e.toJSON(),t.solution&&(o.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(o.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(o.local_constraints=u),o}function iL(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,o=t.valid_digits,a=t.grid,s=La.fromJSON(e,n,a),c=Math.min(s.nRows,s.nRows);let u=Nt.range(1,c+1);o!==void 0&&(u=o);const _=t.solution,v=t.local_constraints,f=ya.fromJson(v),g=t.bool_constraints,m=ui.fromJson(g);return{puzzleMeta:r,solution:_,grid:s,valid_digits:u,localConstraints:f,globalConstraints:m}}var oa=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(oa||{});const aL=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),sL=()=>({type:"CLEAR"}),lL=t=>({type:"DRAG",payload:t}),bu=t=>({type:"SET",payload:t}),cL=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),hd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),_r=(t,e,n)=>{const r=[...t];return Fs(r),{cells:r,lastCell:e,mode:n}};function uL(t,e,n){if(e===null)return hd();if(n==="RESETTING")return _r([e],e,"SELECTING");const r=t.cells.findIndex(o=>ze(e,o));if(n==="SELECTING")return r!==-1?t:_r([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const o=[...t.cells];return o.splice(r,1),_r(o,null,n)}else if(n==="DYNAMIC"){if(r===-1)return _r([...t.cells,e],e,"SELECTING");const o=[...t.cells];return o.splice(r,1),_r(o,null,"DESELECTING")}return t}function dL(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>ze(e,r));if(t.mode==="SELECTING")return n!==-1?t:_r([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),_r(r,null,t.mode)}return t}function _L(t,e){return{...t,cells:e}}function fL(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(o=>ze(e,o))!==-1?_r([...t.cells],e,"SELECTING"):_r([...t.cells,e],e,"SELECTING"):_r([e],e,t.mode)}function yv(t,e){switch(e==null?void 0:e.type){case"CLEAR":return hd();case"SET":return _L(t,e.payload);case"CLICK":return uL(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return dL(t,e.payload);case"ARROW_KEY":return fL(t,e.payload.cell,e.payload.selectionMode);default:return t}}function si(t,e){return ze(t.p1,e.p1)&&ze(t.p2,e.p2)||ze(t.p1,e.p2)&&ze(t.p2,e.p1)}function gL(t,e){return ze(t.p1,e.p2)&&ze(t.p2,e.p1)}function Lv(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!ze(t,e)}class tl{constructor(){ve(this,"edgeMarkers",[]);ve(this,"cellMarkers",[]);ve(this,"lineMarkers",[]);ve(this,"draftLine",[]);ve(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>ze(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>ze(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>ze(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>ze(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>ze(o,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>ze(o,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(o=>ze(o,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(o=>ze(o,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>ze(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(o=>ze(o,e));if(r===-1){const o={...e,colorId:n,marker:"X"};this.edgeMarkers.push(o)}else if(this.cellMarkers[r].marker==="X"){const a={...e,colorId:n,marker:"O"};this.cellMarkers[r]=a}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>si(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(o=>si(e,o)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&gL(r,e)&&this.draftLine.splice(n,1)}onDrag(e){Lv(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(a=>si(a,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const o=this.lineMarkers.findIndex(a=>si(a,r));if(o!==-1){const a=this.lineMarkers.splice(o,1);n.push(a[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new tl;return Object.assign(e,this),e}}const Yg=t=>({type:"ADD_EDGE_MARKER",payload:t}),jg=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Ds=t=>({type:"ADD_CELL_MARKER",payload:t}),hL=t=>({type:"SET_CELL_MARKERS",payload:t}),Vg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),vL=t=>({type:"DRAG",payload:t}),ha=t=>({type:"ADD_LINE_MARKERS",payload:t}),qg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),vd=()=>({type:"RESET"});function pL(t,e){switch(e.type){case"RESET":return new tl;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function Av(){return{_undoStack:[],_redoStack:[]}}const mi=Ht(Av());function mL(){mi.update(()=>Av())}function fn(t,e=!0){mi.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function CL(t,e=!0){mi.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function Sv(){mi.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Nv(){mi.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Ps=Ht(new tl);function gr(t){Ps.update(e=>pL(e,t))}const Bs=Ht(1);function Lo(t,e){return{execute:()=>{gr(t)},unExecute:()=>{gr(e)}}}const Do=Ht(hd());function ii(t){t&&Do.update(e=>yv(e,t))}function Kg(t){t&&Do.update(e=>yv(e,t))}function EL(t,e){return{execute:()=>{Kg(t)},unExecute:()=>{Kg(e)}}}const di=Ht(),nl=Ht(hi.SETTING),wu=Ht(!1),Xt=Ht(d.DIGIT),xv=Ht(d.DIGIT),pd=Ht(Nt.range(1,10)),hn=Ht(new La(9,9)),gn=Ht(st(hn).getAllCells()),Rr=Ht({}),kr=Ht(new ui),ht=Ht(new ya),hr=Ht(null),Tv=Ht(void 0),rl=Ht(void 0);function IL(t){Rr.update(()=>t)}function Ci(t){hr.update(()=>t)}function md(t){Tv.update(()=>t)}function Nr(t){st(Xt)!==t&&(Xt.update(()=>t),Ci(null))}function bL(){const t=st(xv);t&&Nr(t)}function Ou(t){xv.update(()=>t)}function wL(t){st(Xt)===t&&Nr(d.DIGIT)}function OL(t){ht.update(e=>(e.removeFromDict(t),e)),md(void 0)}function $t(t,e,n){ht.update(r=>(r.updateConstraint(t,e,n),r)),Ci({id:e,constraint:n})}function tu(t){const e=st(hr);if(t=t?{...t}:void 0,md(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;$t(r,e.id,n)}function yL(t,e){const r=st(ht).get(e);if(!r)return;const o=r[t];o&&Ci({id:t,constraint:o})}function LL(t,e,n){const r=new La(t,e);hn.update(()=>r),pd.update(()=>n),ht.update(()=>new ya),kr.update(()=>new ui),Rr.update(()=>({})),Cd(void 0),gn.update(()=>r.getAllCells())}function AL(t){hn.update(()=>t.grid),Rr.update(()=>t.puzzleMeta),Cd(t.solution),pd.update(()=>t.valid_digits),ht.update(()=>t.localConstraints),kr.update(()=>t.globalConstraints),gn.update(()=>t.grid.getAllCells())}function Dv(){const t=st(hn);t.resetValues(),hn.update(()=>t),gn.update(()=>t.getAllCells()),gr(vd())}function Ws(){mL(),gr(vd()),Nr(d.DIGIT);const t=sL();ii(t),md(void 0),Ci(null)}const Rv=Go([zt,Xt,nl],([t,e,n])=>{const r=t.hideFog,o=e;return![d.FOG,d.REGIONS].includes(o)&&!r&&n===hi.SETTING}),Aa=Go([hn,Rr,kr,ht,rl,pd],([t,e,n,r,o,a])=>({grid:t,solution:o,puzzleMeta:e,valid_digits:a,globalConstraints:n,localConstraints:r}));function Cd(t){rl.update(()=>t)}var ai=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(ai||{});const Ed=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Id=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),SL=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),NL=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),Xg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function kv(t){ht.update(e=>(e.addToDict(t),e))}function Mr(t,e){const n=st(Tv);n&&(e.shape={...n}),ht.update(r=>(r.addConstraint(e.toolId,t,e),r)),Ci({id:t,constraint:e})}function Ro(t,e){e&&ht.update(n=>(n.removeConstraint(t,e),n))}function xL(t,e){ht.update(n=>(n.setConstraints(t,e),n))}function Zg(t){t.type===ai.ADD_LOCAL_CONSTRAINT?Mr(t.payload.id,t.payload.constraint):t.type===ai.REMOVE_LOCAL_CONSTRAINT?Ro(t.payload.tool,t.payload.id):t.type===ai.REMOVE_LOCAL_CONSTRAINT_GROUP?OL(t.payload.tool):t.type===ai.RESTORE_LOCAL_CONSTRAINT_GROUP?xL(t.payload.tool,t.payload.constraints):t.type===ai.UPDATE_LOCAL_CONSTRAINT&&$t(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Sa(t,e){return{execute:()=>{Zg(t)},unExecute:()=>{Zg(e)}}}class Ge{constructor(e,n){ve(this,"x");ve(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Ge(this.x+e.x,this.y+e.y)}subtract(e){return new Ge(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Ge(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Ge(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function TL(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Un=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const o=n.matrixTransform(r.inverse());return new Ge(o.x,o.y)};function Gs(t,e=!0,n=.5){const r=Js(t),o=new Ge(r.c+.5,r.r+.5),a=t.distance(o);return!e||a<n?{cell:r,dist:a}:null}function Mv(t,e=!0,n=.5){const r=Js(t),o=new Ge(r.c+.5,r.r+.5),a=t.distance(o),s={r:o.y,c:o.x};return!e||a<n?{cellCenter:s,dist:a}:null}function aa(t,e=!0,n=.5){const r=Js(t),o=pO(r),s=o.map(v=>new Ge(v.c,v.r)).map(v=>v.distance(t)),c=s.indexOf(Math.min(...s)),u=o[c],_=s[c];return!e||_<n?{corner:u,dist:_,idx:c}:null}function sa(t,e=!0,n=.5){const r=Js(t),o=mO(r),s=o.map(v=>new Ge(v.c,v.r)).map(v=>v.distance(t)),c=s.indexOf(Math.min(...s)),u=o[c],_=s[c];return!e||_<n?{edge:u,dist:_,idx:c}:null}function nu(t,e=!0,n=.5){const r=sa(t,!1);if(!r)return null;const o=aa(t,!1);if(!o)return null;const a=Mv(t,!1);if(!a)return null;const s=[a.cellCenter,r.edge,o.corner],u=s.map(I=>new Ge(I.c,I.r)).map(I=>I.distance(t)),_=Math.min(...u),v=u.findIndex(I=>I===_),f=s[v],m=["cell center","edge","corner"][v],C={cellCenter:a.cellCenter,edge:r.edge,corner:o.corner,dist:_,target:f,type:m};return!e||_<n?C:null}class Ei{constructor(e=.4){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"_prevPoint",null);ve(this,"_prevCell",null);ve(this,"_lastPointerDownTime",0);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_tapCount",0);ve(this,"_lastTapPosition",null);ve(this,"_lastTapTime",0);ve(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,o=Un(e,n);if(!o)return;this._prevPoint=o;const a=Gs(o,!r,this._margin);if(!a)return;const s=a.cell;this._prevCell=s,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:s,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Un(e,n);if(!r)return;const o=Gs(r,!0,this._margin);if(!o)return;const a=o.cell;if(this._prevCell&&ze(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const s={event:e,cell:a,tapCount:this._tapCount};this.onDrag&&this.onDrag(s)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=Un(e,n);if(!r)return;const o=Gs(r,!1);if(!o)return;const a=o.cell;let s=0;this._lastTapPosition&&(s=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&s<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Qg(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(a=>{const s=new Set(a.highlights);return n.difference(s).size===0}).map(a=>a.toCoords())}function DL(t,e){const n=t.value;return e.getAllCells().filter(a=>a.value===n).map(a=>a.toCoords())}function Jg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.cornerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function eh(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.centerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function RL(t,e,n){const r=[t],o=e.getCell(t.r,t.c);return o?n===d.HIGHLIGHTS&&o.highlights.length?Qg(o,e):o.value!==null?DL(o,e):n===d.CORNER_PM&&o.cornerMarks.length?Jg(o,e):n===d.CENTER_PM&&o.centerMarks.length?eh(o,e):o.cornerMarks.length?Jg(o,e):o.centerMarks.length?eh(o,e):o.highlights.length?Qg(o,e):r:r}function Gr(t,e,n,r=!1){if(!(t&&e))return;const o=Ed(t,e),a=Id(t,n),s=Sa(o,a);fn(s,r)}function so(t,e,n,r=!0){if(!(t&&e))return;const o=Id(t,n),a=Ed(t,e),s=Sa(o,a);fn(s,r)}function yu(t,e,n,r,o=!1){if(!(t&&n&&e))return;const a=Xg(r,t,n),s=Xg(r,t,e),c=Sa(a,s);fn(c,o)}function Na(t,e,n,r){const o=new Ei,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u=null,_=!1,v=!1,f;(I=>{I.DYNAMIC="DYNAMIC",I.BULB="BULB",I.BODY="BODY"})(f||(f={}));let g="DYNAMIC";function m(I){_=!1;const b=I.cell;if(Kt(I.cell,a)){if(g==="DYNAMIC"){const L=st(ht),R=Ky(L,n,b);if(R){const F=Ny(R.arrow,R.matchLineIdx);yu(R.id,R.arrow,F,n,!0),v=!0;return}const M=Bg(L,n,b);if(!M)_=!0,g="BULB",u=null,s=null;else{g="BODY",u=M[0],s=M[1],s=Cu(s,b),$t(n,u,s);return}}if(g==="BULB"&&!u){u=Nt.uniqueId(),s=_v(n,[b]),Mr(u,s);return}else g==="BULB"&&u&&s?(s=yy(s,b),$t(n,u,s)):g==="BODY"&&u&&s&&(s=Ly(s,b,r==null?void 0:r.allowSelfIntersection),$t(n,u,s))}}return o.onDragStart=I=>{g="DYNAMIC",m(I)},o.onDrag=I=>{m(I)},o.onDragEnd=()=>{if(v){v=!1;return}g==="BODY"&&u&&s?Ay(s)?(s=Sy(s),$t(n,u,s)):(yu(u,c,s,n),c=s):g==="BULB"&&(Gr(u,s,n),c=s),g="DYNAMIC"},o.onTap=I=>{if(_)return;const b=I.cell,w=st(ht);if(Bg(w,n,b)){so(u,s,n);return}},{pointerDown:I=>{I.button===0&&o.pointerDown(I,t)},pointerMove:I=>{o.pointerMove(I,t)},pointerUp:I=>{o.pointerUp(I,t)},keyDown:()=>{},keyUp:()=>{}}}var z=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(z||{});const ol=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,On=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,xa=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,kL=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,rn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Ii=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,bd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,De=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,ML=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,GL=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,UL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,bi=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,FL=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,$L=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,HL=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function PL(t){return ed(t)?ML():td(t)?GL():t===d.XV?$L():nd(t)?UL():id(t)?ol():od(t)?xa():ga(t)?kL():rd(t)?De():zh(t)?HL():""}const BL={getInputHandler(t,e,n){return Na(t,e,n)},toolId:d.ARROW,order:z.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:xa(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}},WL={getInputHandler(t,e,n){return Na(t,e,n)},toolId:d.AVERAGE_ARROW,order:z.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:xa(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}},zL={getInputHandler(t,e,n){return Na(t,e,n,{allowSelfIntersection:!0})},toolId:d.BULBOUS_ARROW,order:z.ARROW_TOOLS,shape:{type:H.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:xa(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}};d.SQUARE_ROOT_ARROW,z.ARROW_TOOLS,H.LINE,xa(),x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL;function YL(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function jL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function VL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function qL(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function KL(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const XL={Delete:null,Backspace:null};function ZL(t,e=10){if(t in XL)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function QL(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function JL(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function eA(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function tA(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function Gv(t){return t==="Backspace"}function wi(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Gv(t.key))}function nA(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function rA(t){return nA(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function oA(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Uo(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,o=(e==null?void 0:e.allowNegatives)??!0,a=(e==null?void 0:e.maxLength)??3;if(t.length>a)return!1;const s=n?/(?:<|>|>=|<=)?/:RegExp(""),c=o?/-?/:RegExp(""),u=/[a-zA-Z]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${s.source}${u.source}$`,"i").test(t)||RegExp(`^${s.source}${c.source}${_.source}$`,"i").test(t))}function Ur(t,e,n){if(t===void 0)return t;let r=t;return Gv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}function Yt(t,e,n,r){const o=new Ei,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(m){const C=st(ht),I=m.cell;if(Kt(m.cell,a)){if(m.event.shiftKey){const w=Pg(C,n,I);w&&(c=w[0],s=w[1],Ci({id:c,constraint:s}),_=1)}if(_===0){const w=Pg(C,n,I);if(_=w?2:1,w){so(w[0],w[1],n);return}}if(!s&&_===1){s=fv(n,[I]),c=Nt.uniqueId(),Mr(c,s);return}else if(s&&c&&_===1){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;s=Ty(s,I,w),$t(n,c,s);return}}}function f(m){const C=st(hr);if(!C)return;let I=C.constraint;const b=C.id;if(I.value===void 0||!wi(m)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(I==null?void 0:I.value,m.key);w!==void 0&&w!==I.value&&(I=Dy(I,w),$t(n,b,I))}return o.onDragStart=m=>{c=null,s=null,_=0,v(m)},o.onDrag=m=>{v(m)},o.onDragEnd=()=>{c&&s&&Gr(c,s,n,!1),c=null},{pointerDown:m=>{m.button===0&&o.pointerDown(m,t)},pointerMove:m=>{o.pointerMove(m,t)},pointerUp:m=>{o.pointerUp(m,t)},keyDown:m=>{f(m)},keyUp:()=>{}}}const wd=[x.CAGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CAGE_TOOL],yn=[x.CAGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CAGE_TOOL];function vn(t,e=5){return Uo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function pn(t,e,n){return Ur(t,e,n)}const mn={type:H.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},iA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:On(),tags:[],categories:yn}},aA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.UNIQUE_DIGITS_CAGE,order:z.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:On(),tags:[],categories:yn}},sA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.INVERTED_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:On(),tags:[],categories:yn}},lA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SUM_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:On(),tags:[],categories:yn}},cA={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SUM_CAGE_LOOK_AND_SAY,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:ol(),tags:[],categories:wd}},uA={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.PARITY_BALANCE_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:ol(),tags:[],categories:wd}},dA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.DIVISIBLE_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:On(),tags:[],categories:yn}},_A={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SPOTLIGHT_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:On(),tags:[],categories:yn}},fA={getInputHandler(t,e,n){return Yt(t,e,n,{allowDiagonallyAdjacent:!0})},toolId:d.PUTTERIA_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:ol(),tags:[],categories:wd}};d.KILLER_CAGE_LOOK_AND_SAY,z.CAGE_TOOLS,On();const gA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.MULTISET_CAGE,order:z.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:On(),tags:[],categories:yn}},hA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.VAULTED_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:On(),tags:[],categories:yn}};d.AQUARIUM_CAGE,z.CAGE_TOOLS,On();const vA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:On(),tags:[],categories:yn}},pA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:On(),tags:[],categories:yn}},mA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.DOUBLERS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:On(),tags:[],categories:yn}},CA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.NEGATORS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:On(),tags:[],categories:yn}};var Rn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Rn||{});const EA=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Uv=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),IA=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),bA=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),wA=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),OA=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),yA=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),LA=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),ru=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),AA=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),ou=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),il=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function SA(t,e,n){if(e===d.DIGIT){const r=t.map(s=>s.value),o=EA(t,n),a=Uv(t,r);return[o,a]}if(e===d.GIVEN){const r=t.map(c=>c.value),o=t.map(c=>c.given),a=IA(t,n),s=bA(t,r,o);return[a,s]}if(e===d.REGIONS){const r=t.map(s=>s.region),o=wA(t,n),a=OA(t,r);return[o,a]}if(e===d.FOG){const r=t.map(c=>c.fog),a=yA(t,n===1),s=LA(t,r);return[a,s]}if(e===d.HIGHLIGHTS&&n!==null){const r=ou(t,n),o=ou(t,n);return[r,o]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(s=>s.highlights),o=ou(t,n),a=il(t,r);return[o,a]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=ru(t,n,e),o=ru(t,n,e);return[r,o]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(s=>s.cornerMarks):r=t.map(s=>s.centerMarks);const o=ru(t,n,e),a=AA(t,r,e);return[o,a]}}function Zi(t,e,n,r){t.forEach(o=>{o.enterCell(n,e,r)}),gn.update(o=>o)}function _i(t){switch(t.type){case Rn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;Zi(e,d.DIGIT,n,!0);break}case Rn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;Zi(e,d.GIVEN,n,!0);break}case Rn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;Zi(e,d.REGIONS,n,!0);break}case Rn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;Zi(e,d.HIGHLIGHTS,n,!0);break}case Rn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;Zi(e,r,n,!0);break}case Rn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];gn.update(r=>r);break}case Rn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let o=0;o<e.length;o++)e[o].value=n[o],e[o].given=r[o];gn.update(o=>o);break}case Rn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];gn.update(r=>r);break}case Rn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];gn.update(r=>r);break}case Rn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let o=0;o<e.length;o++)n===d.CENTER_PM?e[o].centerMarks=r[o]:n===d.CORNER_PM&&(e[o].cornerMarks=r[o]);gn.update(o=>o);break}case Rn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),gn.update(r=>r);break}case Rn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];gn.update(r=>r);break}}}function NA(t,e){return{execute:()=>{_i(t)},unExecute:()=>{_i(e)}}}const oi=new Ei;function th(t,e){return t.shiftKey?oa.SELECTING:t.ctrlKey||t.metaKey||e?oa.DYNAMIC:t.altKey?oa.DESELECTING:oa.RESETTING}function va(t,e,n,r,o=!1){switch(e){case d.GIVEN:return t.filter(s=>n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&(s.value!==r||!s.given));case d.DIGIT:return t.filter(s=>!(o&&s.given)&&(n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&s.value!==r));case d.CORNER_PM:return t.filter(s=>!(o&&s.given)&&s.value===null&&(n==="any"&&s.cornerMarks.length||n==="empty"&&!s.cornerMarks.length||n==="equal"&&s.cornerMarks.includes(r)||n==="different"&&!s.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(s=>!(o&&s.given)&&s.value===null&&(n==="any"&&s.centerMarks.length||n==="empty"&&!s.centerMarks.length||n==="equal"&&s.centerMarks.includes(r)||n==="different"&&!s.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(s=>n==="any"&&s.highlights.length||n==="empty"&&!s.highlights.length||n==="equal"&&s.highlights.includes(r)||n==="different"&&!s.highlights.includes(r));case d.FOG:{const a=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===a||n==="different"&&c.fog!==a)}}return t}function xA(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=o=>o===d.CORNER_PM||o===d.CENTER_PM||o===d.DIGIT;for(const o of n){const a=va(t,o,"any",-1,r(o));if(a.length)return{tool:o,cells:a}}return{tool:e,cells:[]}}function la(t,e,n,r){const o=SA(e,n,r);if(o){const a=o[0],s=o[1],c=NA(a,s),u=bu(t),v=[EL(u,u),c];CL(v)}}function TA(t,e,n){const r=d.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const o=va(e,r,"any",-1,!1);if(o.length)return la(n,o,r,t),!0}else{const o=va(e,r,"different",t,!0);if(o.length)return la(n,o,r,t),!0}return!1}function lo(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],o={nRows:e.nRows,nCols:e.nCols};oi.onTap=m=>{if(m.tapCount!==2)return;const I=Kt(m.cell,o)?m.cell:null;if(!I)return;const b=RL(I,e,n),w=bu(b);ii(w)},oi.onDragStart=m=>{const C=Kt(m.cell,o),I=st(wu),b=th(m.event,I),w=C?m.cell:null,L=aL(w,b);ii(L)},oi.onDrag=m=>{const I=Kt(m.cell,o)?m.cell:null,b=lL(I);ii(b)};function a(m){if(!qL(m))return!1;const C=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=bu(C);return ii(I),!0}function s(m){if(!JL(m)||!r.includes(n))return!1;if(m.type==="keydown"){const C=tA(m);return Nr(C),!0}return m.type==="keyup"?(bL(),!0):!1}function c(m){if(!QL(m))return!1;if(m.code==="Space"){const C=r.indexOf(n),I=r[(C+1)%r.length];return Nr(I),Ou(I),!0}else{const C=eA(m.code);return Nr(C),Ou(C),!0}}function u(m){if(!rA(m))return!1;const C=st(Do).lastCell;let I=null;if(C!==null){const[L,R]=oA(m),[M,F]=[Wg(C.r+R,0,o.nRows-1),Wg(C.c+L,0,o.nCols-1)];I={r:M,c:F}}else I={r:0,c:0};const b=th(m,!1),w=cL(I,b);return ii(w),!0}function _(m){const C=ZL(m);if(C===void 0)return!1;const I=st(Do).cells,b=[];if(I.forEach(w=>{const L=e.getCell(w.r,w.c);L&&b.push(L)}),n===d.FOG)return TA(C,b,I);if(C===null){const{tool:w,cells:L}=xA(b,n);if(L.length)return la(I,L,w,C),!0}else{let w=va(b,n,"different",C,!0);if(w.length)return la(I,w,n,C),!0;if(w=va(b,n,"equal",C,!0),w.length)return la(I,w,n,C),!0}return!1}function v(m){return m.repeat?!1:_(m.key)}const f=Nt.throttle(m=>{oi.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&oi.pointerDown(m,t)},pointerMove(m){f(m)},pointerUp(m){oi.pointerUp(m,t)},keyUp(m){s(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(a(m)||u(m)||v(m)||s(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}class DA{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevType",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Un(e,n);if(!r)return;const o=nu(r,!1);if(!o)return;const a={coords:o.target,type:o.type};this._prevType=o.type,this._prevCoords=o.target,this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Un(e,n);if(!r)return;const o=nu(r,!1);if(!o||this._prevCoords&&ze(this._prevCoords,o.target))return;this._isTap=!1;const a={coords:o.target,prevCoords:this._prevCoords,type:o.type};if(this._prevCoords&&Lv(this._prevCoords,o.target)&&(o.type==="cell center"||o.type==="corner"))this.onDrag&&this.onDrag(a);else return;this._prevType=o.type,this._prevCoords=o.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Un(e,n);if(!r)return;const o=nu(r,!1);if(!o)return;const a={coords:o.target,type:o.type};this._isTap&&this._prevCoords&&ze(this._prevCoords,o.target)&&(this.onTap&&this.onTap(a),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function RA(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new DA;return r.onTap=a=>{const s=a.coords,c=st(Bs),u=st(Ps);if(a.type==="cell center"){if(!Kh(s,n))return;const v=u.getCellMarker(s);if(v)if(v.marker==="X"){const f={...s,colorId:c,marker:"O"},g=Ds(f),m=Ds(v),C=Lo(g,m);fn(C)}else{const f=Vg(s),g=Ds(v),m=Lo(f,g);fn(m)}else{const f={...s,colorId:c,marker:"X"},g=Ds(f),m=Vg(s),C=Lo(g,m);fn(C)}}else if(a.type==="edge"){const _=u.getEdgeMarker(s);if(_){const v=jg(s),f=Yg(_),g=Lo(v,f);fn(g)}else{const v={...s,colorId:c},f=Yg(v),g=jg(s),m=Lo(f,g);fn(m)}}},r.onDrag=a=>{const s=a.coords,c=st(Bs);if(a.type==="cell center"||a.type==="corner"){const u={p1:a.prevCoords,p2:s,colorId:c},_=vL(u);gr(_)}},r.onDragEnd=()=>{const a=st(Ps);if(a.mode==="add"){const s=a.draftLine.filter(c=>!a.lineMarkers.some(u=>si(c,u)));if(s.length){const c=ha(s),u=qg(s),_=Lo(c,u);fn(_)}}else{const s=a.lineMarkers.filter(c=>a.draftLine.some(u=>si(c,u)));if(s.length){const c=qg(s),u=ha(s),_=Lo(c,u);fn(_)}}},{blur(){},pointerDown(a){r.pointerDown(a,t)},pointerMove(a){r.pointerMove(a,t)},pointerUp(a){r.pointerUp(a,t)},keyDown(){},keyUp(){}}}const kA={getInputHandler:lo,toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[x.CELL_INPUT_TOOL]}},MA={getInputHandler:lo,toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[x.CELL_INPUT_TOOL]}},GA={getInputHandler:lo,toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[x.CELL_INPUT_TOOL]}},UA={getInputHandler:lo,toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[x.CELL_INPUT_TOOL]}},FA={getInputHandler:lo,toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[x.CELL_INPUT_TOOL]}},$A={getInputHandler:lo,toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[x.CELL_INPUT_TOOL]}},HA={getInputHandler:lo,toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[x.CELL_INPUT_TOOL]}},PA={getInputHandler:lo,toolId:d.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[x.CELL_INPUT_TOOL]}},BA={getInputHandler:RA,toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}};var vt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t[t.BOTH=7]="BOTH",t))(vt||{});class al{constructor(e){ve(this,"onDragStart",null);ve(this,"target");this.target=e}pointerDown(e,n){const r=Un(e,n);if(!r)return;const o=sa(r,!1);if(!o)return;const a=aa(r,!1);if(!a)return;const s=Gs(r,!1);if(!s)return;const c=Mv(r,!1);if(!c)return;let u;this.target===1?u=a.corner:this.target===0?u=o.edge:this.target===2?u=c.cellCenter:this.target===3?a.dist<o.dist?u=a.corner:u=o.edge:this.target===4?a.dist<c.dist?u=a.corner:u=c.cellCenter:this.target===5?o.dist<c.dist?u=o.edge:u=c.cellCenter:o.dist<a.dist&&o.dist<c.dist?u=o.edge:a.dist<o.dist&&a.dist<c.dist?u=a.corner:u=c.cellCenter;let _=this.target===1||this.target===4?"corner":"edge";(this.target===3||this.target===6)&&a.dist<o.dist&&(_="corner");const v=_==="edge"?2*o.idx:2*a.idx+1,f={event:e,cell:s.cell,edge:o.edge,corner:a.corner,closest:u,edgeIdx:o.idx,cornerIdx:a.idx,direction:v};this.onDragStart&&this.onDragStart(f)}}function Od(t,e,n,r){const o=(r==null?void 0:r.targets)??vt.CLOSEST,a=new al(o),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(g){const m=st(ht),C=g.cell,I=g.closest;if(!Kt(C,s))return;const w=Zy(m,n,I);if(w){Ro(n,w);return}c=Ev(n,I,""),u=Nt.uniqueId(),Mr(u,c)}function v(g){const m=st(hr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!wi(g)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(C==null?void 0:C.value,g.key);b!==void 0&&b!==C.value&&(C=Oa(C,b),$t(n,I,C))}return a.onDragStart=g=>{_(g)},{pointerDown:g=>{g.button===0&&a.pointerDown(g,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:g=>{v(g)},keyUp:()=>{}}}d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,z.OUTSIDE_TOOLS,H.CIRCLE,bd(),x.LOCAL_CONSTRAINT,x.CENTER_CORNER_EDGE_CONSTRAINT;const WA={getInputHandler(t,e,n){return Od(t,e,n,{targets:vt.CLOSEST,valueUpdater:(r,o)=>Ur(r,o,()=>!0),defaultValue:""})},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:z.OUTSIDE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:bd(),tags:[],categories:[x.LOCAL_CONSTRAINT,x.CENTER_CORNER_EDGE_CONSTRAINT]}},zA={getInputHandler(t,e,n){return Od(t,e,n,{targets:vt.CORNER_OR_EDGE,valueUpdater:(r,o)=>Ur(r,o,()=>!0),defaultValue:""})},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:z.OUTSIDE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:bd(),tags:[],categories:[x.LOCAL_CONSTRAINT,x.CENTER_CORNER_EDGE_CONSTRAINT]}};function YA(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function jA(t,e){const n=Zh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function VA(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function qA(t){for(let e=0;;e++){const n=VA(e);if(!t.has(n))return n}}function KA(t,e,n){const r=new Ei,o={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=null,_="cells2",v;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.SELECTING=1]="SELECTING",C[C.MOVING=2]="MOVING"})(v||(v={}));let f=0;function g(C){const I=st(ht),b=C.cell;if(!Kt(C.cell,o))return;const L=Qy(I,n,b);if(f===0&&(L?(c=L[0],a=L[1],f=2,u=b,_=a.cells2.some(M=>ze(M,b))?"cells2":"cells"):f=1),f===1&&c===null){c=Nt.uniqueId();const R=Jy(I,n),M=qA(R);a=YA(n,[b],M),Mr(c,a);return}else if(f===1&&c&&a){a=jA(a,b),$t(n,c,a);return}else if(f===2&&c&&a&&u){const R={r:b.r-u.r,c:b.c-u.c},F=(_==="cells2"?a.cells2:a.cells).map(B=>({r:B.r+R.r,c:B.c+R.c}));if(!F.every(B=>Kt(B,o)))return;_==="cells"?a={...a,cells:F}:a={...a,cells2:F},u=b,$t(n,c,a)}}return r.onDragStart=C=>{c=null,a=null,f=0,u=null,g(C)},r.onDrag=C=>{g(C)},r.onDragEnd=()=>{c&&a&&(f===1?Gr(c,a,n):f===2&&yu(c,s,a,n),s=a)},r.onTap=()=>{c&&f!==1&&(Ro(n,c),c=null,a=null)},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}const XA={getInputHandler(t,e,n){return KA(t,e,n)},toolId:d.CLONE_REGION,order:z.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[x.CLONE_CONSTRAINT,x.LOCAL_CONSTRAINT]}};class Fv{constructor(){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin")}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCoord===null,o=Un(e,n);if(!o)return;const a=aa(o,!r);if(!a)return;this._prevCoord=a.corner;const s={event:e,cellCorner:a.corner};this.onDragStart&&this.onDragStart(s)}pointerMove(e,n){if(!this._isDown)return;const r=Un(e,n);if(!r)return;const o=aa(r);if(!o||this._prevCoord&&ze(o.corner,this._prevCoord))return;const a={event:e,cellCorner:o.corner};this._prevCoord=o.corner,this._isTap=!1,this.onDrag&&this.onDrag(a)}pointerUp(e,n){const r=Un(e,n);if(!r)return;const o=aa(r);if(!o)return;const a={event:e,cellCorner:o.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(a)),this._isTap&&this.onTap&&this.onTap(a)}}function co(t,e,n,r){const o=new Fv,a={nRows:e.nRows,nCols:e.nCols};let s;(f=>{f[f.DYNAMIC=0]="DYNAMIC",f[f.ADDING=1]="ADDING",f[f.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(f){const g=st(ht),m=f.cellCorner,C=sd(m);if(!C.every(w=>Kt(w,a)))return;let b=null;if(c===0&&(b=jy(g,n,m),c=b?2:1),b&&c===2){const w=b[0];so(w,b[1],n);return}else if(c===1){const w=gv(n,C,r==null?void 0:r.defaultValue),L=Nt.uniqueId();Gr(L,w,n,!0)}}function _(f){const g=st(hr);if(!g)return;let m=g.constraint;const C=g.id;if(m.value===void 0||!wi(f)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,f.key);I!==void 0&&I!==m.value&&(m=Oa(m,I),$t(n,C,m))}return o.onDragStart=f=>{c=0,u(f)},{pointerDown:f=>{f.button===0&&o.pointerDown(f,t)},pointerMove:f=>{o.pointerMove(f,t)},pointerUp:f=>{o.pointerUp(f,t)},keyDown:f=>{_(f)},keyUp:()=>{}}}function sl(t,e=3){return Uo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function ll(t,e,n){return Ur(t,e,n)}function ZA(t,e){function n(r){return!0}return Ur(t,e,n)}const QA={getInputHandler(t,e,n){return co(t,e,n,{valueUpdater:(r,o)=>ZA(r,o),defaultValue:""})},toolId:d.QUADRUPLE,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:FL(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CORNER_TOOL]}},JA={getInputHandler(t,e,n){return co(t,e,n,{valueUpdater:(r,o)=>ll(r,o,sl),defaultValue:""})},toolId:d.CORNER_SUM,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:bi(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CORNER_TOOL]}},eS={getInputHandler(t,e,n){return co(t,e,n)},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:bi(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}},tS={getInputHandler(t,e,n){return co(t,e,n,{valueUpdater:(r,o)=>ll(r,o,sl),defaultValue:""})},toolId:d.CORNER_EVEN_COUNT,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:bi(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,z.CORNER_TOOLS,H.CIRCLE,bi(),x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CORNER_TOOL;const nS={getInputHandler(t,e,n){return co(t,e,n,{defaultValue:"X"})},toolId:d.PRODUCT_SQUARE,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:bi(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}},rS={getInputHandler(t,e,n){return co(t,e,n,{defaultValue:""})},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:bi(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}};function Le(t,e,n,r){const o=new Ei,a={nRows:e.nRows,nCols:e.nCols},s=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(f){if(!u||!c)throw"UNREACHABLE";const g=f.cell;Kt(f.cell,a)&&(c=Oy(c,g,s),$t(n,u,c))}return o.onDragStart=f=>{u=Nt.uniqueId(),c=uv(n,[],r==null?void 0:r.defaultValue),Mr(u,c),_(f)},o.onDrag=f=>{_(f)},o.onDragEnd=()=>{u&&c&&c.cells.length<=1?Ro(n,u):u&&c&&Gr(u,c,n,!1),u=null},o.onTap=f=>{const g=f.cell,m=st(ht),C=Vy(m,n,g);if(C){const[I,b]=C;so(I,b,n)}},{pointerDown:f=>{f.button===0&&o.pointerDown(f,t)},pointerMove:f=>{o.pointerMove(f,t)},pointerUp:f=>{o.pointerUp(f,t)},keyDown:()=>{},keyUp:()=>{}}}function Be(t,e,n,r,o){const a=new Ei,s={nRows:e.nRows,nCols:e.nCols};let c;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(c||(c={}));let u=0;function _(g){const m=st(ht),C=g.cell;if(!Kt(g.cell,s))return;const b=gd(m,n,C);if(u===0&&(u=b?2:1),b&&u===2){const[w,L]=b;so(w,L,n)}else if(u===1){const w=pv(n,C,o==null?void 0:o.defaultValue),L=Nt.uniqueId();Gr(L,w,n,!0)}}a.onDragStart=g=>{u=0,_(g)},a.onDrag=g=>{_(g)};function v(g){const m=st(hr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!wi(g)||!(o!=null&&o.valueUpdater))return;const b=o.valueUpdater(C==null?void 0:C.value,g.key);b!==void 0&&b!==C.value&&(C=Oa(C,b),$t(n,I,C))}return{pointerDown:g=>{g.button===0&&a.pointerDown(g,t)},pointerMove:g=>{a.pointerMove(g,t)},pointerUp:g=>{a.pointerUp(g,t)},keyDown:g=>{v(g)},keyUp:()=>{}}}class oS{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"_prevCellEdge",null);ve(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=Un(e,n);if(!r)return;const o=sa(r,!0,.35);if(!o)return;this._prevCellEdge=o.edge;const a={event:e,edge:o.edge};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Un(e,n);if(!r)return;const o=sa(r,!0,.35);if(!o||this._prevCellEdge&&ze(o.edge,this._prevCellEdge))return;const a={event:e,edge:o.edge};this._prevCellEdge=o.edge,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellEdge=null,this._isDown=!1);const r=Un(e,n);!r||sa(r,!0,.35)}}function on(t,e,n,r){const o=new oS,a={nRows:e.nRows,nCols:e.nCols};let s;(f=>{f[f.DYNAMIC=0]="DYNAMIC",f[f.ADDING=1]="ADDING",f[f.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(f){const g=st(ht),m=f.edge,C=cd(m);if(!C.every(w=>Kt(w,a)))return;let b=null;if(c===0&&(b=Yy(g,n,C),c=b?2:1),b&&c===2){const w=b[0];so(w,b[1],n)}else if(c===1){const w=(r==null?void 0:r.defaultValue)??"",L=hv(n,C,w),R=Nt.uniqueId();Gr(R,L,n,!0)}}function _(f){const g=st(hr);if(!g)return;let m=g.constraint;const C=g.id;if(m.value===void 0||!wi(f)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,f.key);I!==void 0&&I!==m.value&&(m=Oa(m,I),$t(n,C,m))}return o.onDragStart=f=>{c=0,u(f)},{pointerDown:f=>{f.button===0&&o.pointerDown(f,t)},pointerMove:f=>{o.pointerMove(f,t)},pointerUp:f=>{o.pointerUp(f,t)},keyDown:f=>{_(f)},keyUp:()=>{}}}function yd(t,e,n,r=vt.CORNER_OR_EDGE){const o=[We.N,We.NE,We.E,We.SE,We.S,We.SW,We.W,We.NW],a=new al(r),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.ADDING=1]="ADDING",C[C.REMOVING=2]="REMOVING"})(_||(_={}));let v=0;function f(C){const I=st(ht),b=C.cell;if(!Kt(C.cell,s))return;C.event.altKey&&(v=2);const L=gd(I,n,b),R=ld(C.direction);if(L){[u,c]=L,c.direction===R||v===2?so(u,c,n):(c={...c,direction:R},$t(n,u,c));return}else v!==2&&(c=mv(n,b,R),u=Nt.uniqueId(),Gr(u,c,n,!0))}function g(C){if(!c||!u||!KL(C))return;const b=(o.indexOf(c.direction)+1)%o.length;c={...c,direction:o[b]},$t(n,u,c)}return a.onDragStart=C=>{v=0,f(C)},{pointerDown:C=>{C.button===0&&a.pointerDown(C,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:C=>{g(C)},keyUp:()=>{}}}function iS(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function ir(t,e,n,r=vt.CORNER_OR_EDGE){const o=new al(r),a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(g){const m=st(ht),C=g.cell;if(!Kt(g.cell,a))return;g.event.altKey&&(_=2);const b=ld(g.direction),w=gd(m,n,C);if(w){if(c=w[0],s=w[1],_===2)Ro(n,w[0]);else{const L=iS(s.directions,b);L.length?(s={...s,directions:L},$t(n,c,s)):Ro(n,c)}return}else _!==2&&(s=Cv(n,C,b),c=Nt.uniqueId(),Mr(c,s))}return o.onDragStart=g=>{_=0,v(g)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}const Ld=[x.EDGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.EDGE_TOOL],Qn=[x.EDGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.EDGE_TOOL],Ta=.15,$v=.02,Fo={type:H.CIRCLE,r:{editable:!0,value:Ta,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:$v,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}};function aS(t,e=1){return Uo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Oi(t,e=3){return Uo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function sS(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function $o(t,e,n){return Ur(t,e,n)}function lS(t,e){return t===void 0?"V":sS(e)?e.toUpperCase():t}function cS(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function Hv(t,e){return t===void 0?"<":cS(e)?e:t}const uS={getInputHandler(t,e,n){return on(t,e,n,{valueUpdater:(r,o)=>$o(r,o,aS)})},toolId:d.RATIO,order:z.EDGE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:Ta},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:Qn}},dS={getInputHandler(t,e,n){return on(t,e,n,{valueUpdater:(r,o)=>$o(r,o,Oi)})},toolId:d.DIFFERENCE,order:z.EDGE_TOOLS,shape:Fo,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:Qn}},_S={getInputHandler(t,e,n){return on(t,e,n,{valueUpdater:(r,o)=>$o(r,o,Oi)})},toolId:d.EDGE_SUM,order:z.EDGE_TOOLS,shape:{...Fo,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:Qn}},fS={getInputHandler(t,e,n){return on(t,e,n,{valueUpdater:lS,defaultValue:"V"})},toolId:d.XV,order:z.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:Ta},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:Qn}},gS={getInputHandler(t,e,n){return on(t,e,n,{valueUpdater:Hv,defaultValue:"<"})},toolId:d.EDGE_INEQUALITY,order:z.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:Qn}},hS={getInputHandler(t,e,n){return on(t,e,n,{valueUpdater:(r,o)=>$o(r,o,Oi)})},toolId:d.EDGE_PRODUCT,order:z.EDGE_TOOLS,shape:{...Fo,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:Qn}},vS={getInputHandler(t,e,n){return on(t,e,n,{valueUpdater:(r,o)=>$o(r,o,Oi)})},toolId:d.EDGE_MODULO,order:z.EDGE_TOOLS,shape:{...Fo,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:Qn}},pS={getInputHandler(t,e,n){return on(t,e,n,{valueUpdater:(r,o)=>$o(r,o,Oi)})},toolId:d.EDGE_FACTOR,order:z.EDGE_TOOLS,shape:{...Fo,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:Qn}},mS={getInputHandler(t,e,n){return on(t,e,n)},toolId:d.XY_DIFFERENCES,order:z.EDGE_TOOLS,shape:{type:H.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Ta},strokeWidth:{editable:!1,value:$v,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:Qn}},CS={getInputHandler(t,e,n){return on(t,e,n)},toolId:d.YIN_YANG_WHITE_KROPKI,order:z.EDGE_TOOLS,shape:Fo,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:Qn}},ES={getInputHandler(t,e,n){return on(t,e,n)},toolId:d.YIN_YANG_KROPKI,order:z.EDGE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:Ta},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:Qn}},IS={getInputHandler(t,e,n){return on(t,e,n)},toolId:d.UNKNOWN_REGION_BORDER,order:z.EDGE_TOOLS,shape:{type:H.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Ld}},bS={getInputHandler(t,e,n){return on(t,e,n)},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:z.EDGE_TOOLS,shape:{type:H.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Ld}},wS={getInputHandler(t,e,n){return on(t,e,n)},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:z.EDGE_TOOLS,shape:Fo,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Ld}},OS={getInputHandler(t,e,n){return on(t,e,n,{valueUpdater:Hv,defaultValue:"<"})},toolId:d.ONE_WAY_DOOR,order:z.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:Qn}};function Rt(t,e,n,r){const o=(r==null?void 0:r.cornerOrEdge)??vt.CORNER_OR_EDGE,a=new al(o),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(g){const m=st(ht),C=g.cell,I=g.direction,b=ld(I);if(Kt(C,s))return;const L=Xh(C,b);if(!Kt(L,s))return;const M=Xy(m,n,C,b);if(M){Ro(n,M);return}c=vv(n,C,b,""),u=Nt.uniqueId(),Mr(u,c)}function v(g){const m=st(hr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!wi(g)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(C==null?void 0:C.value,g.key);b!==void 0&&b!==C.value&&(C=Oa(C,b),$t(n,I,C))}return a.onDragStart=g=>{_(g)},{pointerDown:g=>{g.button===0&&a.pointerDown(g,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:g=>{v(g)},keyUp:()=>{}}}const yi=[x.OUTSIDE_CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.OUTSIDE_CORNER_TOOL,x.OUTSIDE_DIRECTION_TOOL];function Li(t,e=5){return Uo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ho(t,e,n){return Ur(t,e,n)}const Ai={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},yS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>Ho(r,o,Li),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:d.LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:Ai,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:Ii(),tags:[],categories:yi}},LS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>Ho(r,o,Li),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:d.LITTLE_KILLER_PRODUCT,order:z.OUTSIDE_TOOLS,shape:Ai,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:Ii(),tags:[],categories:yi}},AS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>Ho(r,o,Li),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:z.OUTSIDE_TOOLS,shape:Ai,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:Ii(),tags:[],categories:yi}},SS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>Ho(r,o,Li),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:Ai,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:Ii(),tags:[],categories:yi}},NS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>Ho(r,o,Li),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:z.OUTSIDE_TOOLS,shape:Ai,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:Ii(),tags:[],categories:yi}},xS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>Ho(r,o,Li),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:Ai,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:Ii(),tags:[],categories:yi}},an=[x.OUTSIDE_EDGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.OUTSIDE_EDGE_TOOL,x.OUTSIDE_DIRECTION_TOOL];function Qt(t,e=5){return Uo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function sn(t,e,n){return Ur(t,e,n)}const ln={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},TS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.SANDWICH_SUM,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:rn(),tags:[],categories:an}},DS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.SANDWICH_SUM_XOR_X_SUM,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:rn(),tags:[],categories:an}},RS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.X_SUM,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:rn(),tags:[],categories:an}},kS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.SHORTSIGHTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:rn(),tags:[],categories:an}},MS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.SHIFTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:rn(),tags:[],categories:an}},GS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.BROKEN_X_SUM,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:rn(),tags:[],categories:an}},US={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.X_SUM_SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:rn(),tags:[],categories:an}},FS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.BATTLEFIELD,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:rn(),tags:[],categories:an}},$S={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:rn(),tags:[],categories:an}},HS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.X_INDEX,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:rn(),tags:[],categories:an}},PS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.RISING_STREAK,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:rn(),tags:[],categories:an}};d.ROW_OR_COLUMN_RANK,z.OUTSIDE_TOOLS,rn();const BS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:rn(),tags:[],categories:an}},WS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.BOTH})},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:rn(),tags:[],categories:an}},zS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.BOTH})},toolId:d.LOOPWICHES,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:rn(),tags:[],categories:an}},YS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Qt),defaultValue:"",cornerOrEdge:vt.BOTH})},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:z.OUTSIDE_TOOLS,shape:ln,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:rn(),tags:[],categories:an}},jS={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.COSMETIC_CELL_SHAPE,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},VS={getInputHandler(t,e,n){return yd(t,e,n)},toolId:d.COSMETIC_CELL_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},qS={getInputHandler(t,e,n){return ir(t,e,n)},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},KS={getInputHandler(t,e,n){return on(t,e,n,{valueUpdater:(r,o)=>$o(r,o,Oi)})},toolId:d.COSMETIC_EDGE,order:z.EDGE_TOOLS,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.TYPABLE_TOOL]}},XS={getInputHandler(t,e,n){return co(t,e,n,{valueUpdater:(r,o)=>ll(r,o,sl),defaultValue:""})},toolId:d.COSMETIC_CORNER,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.TYPABLE_TOOL]}},ZS={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},QS={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},JS={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},eN={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.COSMETIC_CAGE,order:z.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.TYPABLE_TOOL]}},tN={getInputHandler(t,e,n){return Na(t,e,n)},toolId:d.COSMETIC_ARROW,order:z.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.LOCAL_CONSTRAINT]}},nN={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>Ho(r,o,Qt),defaultValue:"",cornerOrEdge:vt.CORNER_OR_EDGE})},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:z.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.OUTSIDE_DIRECTION_TOOL]}},Si=[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT,x.DIAGONAL_CONSTRAINT],rN={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},oN={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},iN={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},aN={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},sN={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},lN={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},cN={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},uN={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},dN={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},_N={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},fN={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},gN={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},hN={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Si}},vN={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Si}},pN={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Si}},mN={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Si}},CN={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Si}},EN={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Si}},IN={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},bN={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},wN={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},ON={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},yN={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},LN={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},AN={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},SN={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},NN={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},xN={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},TN={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},DN={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},RN={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},kN={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},MN={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},GN={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},UN={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},FN={toolId:d.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},$N={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},HN={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},PN={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},BN={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},WN={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands. Digits may not repeat within an island.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},zN={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},YN={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},jN={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},VN={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},qN={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},KN={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},XN={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},ZN={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},QN={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},JN={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},ex={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},tx={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},nx={toolId:d.DIRECTED_PATH_IS_PARITY_LINE,order:0,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},rx={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},ox={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},ix={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},ax={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},sx={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},lx={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},cx={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},ux={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},dx={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},_x={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},fx={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},gx={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},hx={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},vx={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},px={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},mx={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},Cx={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},Ex={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},Ix={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},bx={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},wx={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},Ox={toolId:d.CONNECT_FOUR,order:0,meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},yx={toolId:d.CONNECT_FOUR_DRAW,order:0,meta:{description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},Lx={toolId:d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,order:0,meta:{description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},Ax={toolId:d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,order:0,meta:{description:"Two orthogonally adjacent yellow discs must have a difference of at least 3.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},Fe=[x.LINE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.LINE_TOOL],Fr=[x.LINE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.DOUBLE_ENDED_LINE_CONSTRAINT,x.LINE_TOOL],Da={description:"",usage:De(),tags:[],categories:Fe},Sx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Da,description:"Numbers along a thermometer must increase from the bulb end."}},Nx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1,defaultValue:"2"})},toolId:d.CUSTOM_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Da,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},xx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.FUZZY_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Da,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},Tx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.SLOW_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Da,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},Dx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.ROW_CYCLE_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Da,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},Rx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.PALINDROME,order:z.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:De(),tags:[],categories:Fe}},kx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:De(),tags:[],categories:Fe}},Mx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:De(),tags:[],categories:Fe}},Gx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.RENRENBANBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:De(),tags:[],categories:Fe}},Ux={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Fe}},Fx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.NABNER_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Fe}},$x={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:De(),tags:[],categories:Fe}},Hx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:d.DUTCH_WHISPERS,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:De(),tags:[],categories:Fe}},Px={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"2"})},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:De(),tags:[],categories:Fe}},Bx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.RENBAN_OR_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:De(),tags:[],categories:Fe}},Wx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.RENBAN_OR_NABNER_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Fe}},zx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:De(),tags:[],categories:Fe}},Yx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.INDEX_LINE,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:De(),tags:[],categories:Fe}},jx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.UNIQUE_VALUES_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:De(),tags:[],categories:Fe}},Vx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:De(),tags:[],categories:Fe}},qx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:d.SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:De(),tags:[],categories:Fe}},Kx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.ARITHMETIC_SEQUENCE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:De(),tags:[],categories:Fe}},Xx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.SAME_PARITY_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:De(),tags:[],categories:Fe}},Zx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Fe}},Qx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:De(),tags:[],categories:Fe}},Jx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1,defaultValue:"3"})},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:De(),tags:[],categories:Fe}},eT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:De(),tags:[],categories:Fe}},tT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:De(),tags:[],categories:Fe}},nT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:De(),tags:[],categories:Fe}},rT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.ENTROPIC_OR_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:De(),tags:[],categories:Fe}},oT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:De(),tags:[],categories:Fe}},iT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.INDEXING_ROW_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:De(),tags:[],categories:Fe}},aT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.REPEATED_DIGITS_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:De(),tags:[],categories:Fe}},sT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.SUPERFUZZY_ARROW,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:De(),tags:[],categories:Fe}},lT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.AMBIGUOUS_ARROW,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:De(),tags:[],categories:Fe}},cT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.HEADLESS_ARROW,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:De(),tags:[],categories:Fe}},uT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.XV_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:De(),tags:[],categories:Fe}},dT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.ROW_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:De(),tags:[],categories:Fe}},_T={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:d.AT_LEAST_X_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:De(),tags:[],categories:Fe}},fT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:De(),tags:[],categories:Fe}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,z.LINE_TOOLS,H.LINE,De();const gT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:d.PRODUCT_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:De(),tags:[],categories:Fe}},hT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.ADJACENT_MULTIPLES_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:De(),tags:[],categories:Fe}},vT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:De(),tags:[],categories:Fe}},pT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.LOOK_AND_SAY_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:De(),tags:[],categories:Fe}},mT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.ZIPPER_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:De(),tags:[],categories:Fe}},CT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:d.SEGMENTED_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:De(),tags:[],categories:Fe}},ET={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1,defaultValue:""})},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:De(),tags:[],categories:Fe}},IT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1,defaultValue:""})},toolId:d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:De(),tags:[],categories:Fe}};d.THERMO_OR_AVERAGE_ARROW,z.LINE_TOOLS,H.THERMO_WITH_CIRCLE,De();const bT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:De(),tags:[],categories:Fe}},wT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:De(),tags:[],categories:Fe}},OT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Fe}},yT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.YIN_YANG_REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:De(),tags:[],categories:Fe}},LT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:De(),tags:[],categories:Fe}},AT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:De(),tags:[],categories:Fe}},ST={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:De(),tags:[],categories:Fr}},NT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:d.LOCKOUT_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:De(),tags:[],categories:Fr}},xT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.TIGHTROPE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:De(),tags:[],categories:Fr}},TT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.PARITY_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:De(),tags:[],categories:Fr}},DT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:De(),categories:Fr}},RT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:De(),tags:[],categories:Fr}},kT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.SPLIT_PEAS,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:De(),tags:[],categories:Fr}},MT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.DOUBLERS_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:De(),tags:[],categories:Fe}},GT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLERS_BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:Fr}},UT={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:Fr}},tt=[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT,x.SINGLE_CELL_SHAPE_TOOL],Ni=[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT,x.SINGLE_CELL_COLOR_TOOL];function uo(t,e=3){return Uo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function FT(t){return t===""||t==="1"||t==="2"||t==="3"}function $r(t,e,n){return Ur(t,e,n)}const $T={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.ODD,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:tt}},HT={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.EVEN,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:tt}},PT={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.MINIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}},BT={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.MAXIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}};d.PRIME_CELL,z.CELL_COLOR_TOOL;const WT={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.ODD_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:tt}},zT={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.EVEN_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:tt}},YT={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:tt}},jT={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:tt}},VT={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.NOT_WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:tt}},qT={getInputHandler(t,e,n){return Be(t,e,n,void 0,{valueUpdater:(r,o)=>$r(r,o,uo),defaultValue:""})},toolId:d.FARSIGHT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:tt}},KT={getInputHandler(t,e,n){return Be(t,e,n,void 0,{valueUpdater:(r,o)=>$r(r,o,uo),defaultValue:"9"})},toolId:d.RADAR,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:tt}},XT={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.ORTHOGONAL_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:tt}},ZT={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.INDEXING_COLUMN,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:Ni}},QT={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.INDEXING_ROW,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column.",tags:[],categories:Ni}},JT={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.LOW_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:Ni}},e2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.HIGH_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:Ni}},t2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.FRIENDLY_CELL,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:Ni}},n2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.DIAGONALLY_ADJACENT_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:tt}},r2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:tt}},o2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.SANDWICH_ROW_COL_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:tt}},i2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:tt}},a2={getInputHandler(t,e,n){return Be(t,e,n,void 0,{valueUpdater:(r,o)=>$r(r,o,FT),defaultValue:""})},toolId:d.COLORED_COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35}},meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:tt}},s2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.UNIQUE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:tt}},l2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.YIN_YANG_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:tt}},c2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:tt}},u2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:tt}},d2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:tt}},_2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:tt}},f2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:tt}},g2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:tt}},h2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.SEEN_REGION_BORDERS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:tt}},v2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:tt}},p2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.SASHIGANE_BEND_REGION_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:tt}},m2={getInputHandler(t,e,n){return yd(t,e,n)},toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[x.SINGLE_CELL_ARROW_TOOL,x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}},C2={getInputHandler(t,e,n){return yd(t,e,n)},toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[x.SINGLE_CELL_ARROW_TOOL,x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}},E2={getInputHandler(t,e,n){return Be(t,e,n,void 0,{valueUpdater:(r,o)=>$r(r,o,uo),defaultValue:""})},toolId:d.SASHIGANE_REGION_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:tt}},I2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.CELL_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:tt}},b2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.CELL_NOT_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:tt}},w2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:tt}},O2={getInputHandler(t,e,n){return Be(t,e,n,void 0,{valueUpdater:(r,o)=>$r(r,o,uo),defaultValue:""})},toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:tt}},y2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.CAVE_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:tt}},L2={getInputHandler(t,e,n){return Be(t,e,n,void 0,{valueUpdater:(r,o)=>$r(r,o,uo),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:tt}},A2={getInputHandler(t,e,n){return Be(t,e,n,void 0,{valueUpdater:(r,o)=>$r(r,o,uo),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:tt}},S2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.DIRECTED_PATH_START,order:z.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:tt}},N2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.DIRECTED_PATH_END,order:z.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:tt}},x2={getInputHandler(t,e,n){return Be(t,e,n,void 0,{valueUpdater:(r,o)=>$r(r,o,uo),defaultValue:""})},toolId:d.TELEPORT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:tt}},T2={getInputHandler(t,e,n){return Be(t,e,n,void 0,{valueUpdater:(r,o)=>$r(r,o,uo),defaultValue:""})},toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:tt}},D2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.CONNECT_FOUR_YELLOW,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:tt}},R2={getInputHandler(t,e,n){return Be(t,e,n)},toolId:d.CONENCT_FOUR_RED,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:tt}},vr=[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT,x.SINGLE_CELL_MULTIARROW_TOOL],_o={type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},k2={getInputHandler(t,e,n){return ir(t,e,n)},toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:_o,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:vr}},M2={getInputHandler(t,e,n){return ir(t,e,n)},toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:z.CELL_SHAPE_TOOL,shape:_o,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:vr}},G2={getInputHandler(t,e,n){return ir(t,e,n)},toolId:d.LOOP_CELL_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:_o,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:vr}},U2={getInputHandler(t,e,n){return ir(t,e,n)},toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:z.CELL_SHAPE_TOOL,shape:_o,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:vr}},F2={getInputHandler(t,e,n){return ir(t,e,n)},toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:_o,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:vr}},$2={getInputHandler(t,e,n){return ir(t,e,n)},toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:z.CELL_SHAPE_TOOL,shape:_o,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:vr}},H2={getInputHandler(t,e,n){return ir(t,e,n)},toolId:d.COLD_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:vr}},P2={getInputHandler(t,e,n){return ir(t,e,n)},toolId:d.HOT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:vr}},B2={getInputHandler(t,e,n){return ir(t,e,n)},toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:z.CELL_SHAPE_TOOL,shape:_o,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:vr}},W2={getInputHandler(t,e,n){return ir(t,e,n)},toolId:d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,order:z.CELL_SHAPE_TOOL,shape:_o,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:vr}},z2={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}},Y2={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}},j2={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;const V2={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}},q2={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;const K2={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}};function X2(t,e,n,r){const o=new Fv,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(g){const m=st(ht),C=g.cellCorner;if(!Kh(C,a))return;let b=null;if(_===0&&(b=qy(m,n,C),_=b?2:1),b){const w=b[0];so(w,b[1],n);return}if(!s&&_===1){c=Nt.uniqueId(),s=Iv(n,[C],r==null?void 0:r.defaultValue),Mr(c,s);return}else if(s&&c&&_===1){s=zy(s,C),$t(n,c,s);return}}return o.onDragStart=g=>{c=null,s=null,_=0,g.event.shiftKey&&(_=1),v(g)},o.onDrag=g=>{v(g)},o.onDragEnd=()=>{c&&s&&Gr(c,s,n,!1),c=null},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:g=>{o.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}const Z2=[x.CORNER_LINE_CONSTRAINT,x.CORNER_LINE_TOOL,x.LOCAL_CONSTRAINT],Q2={getInputHandler(t,e,n){return X2(t,e,n)},toolId:d.MAZE_WALL,order:z.EDGE_TOOLS,shape:{type:H.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:Z2}},Tt={[d.GIVEN]:kA,[d.DIGIT]:MA,[d.REGIONS]:GA,[d.OUTSIDE]:HA,[d.CORNER_PM]:UA,[d.CENTER_PM]:FA,[d.HIGHLIGHTS]:$A,[d.FOG]:PA,[d.PEN_TOOL]:BA,[d.SUDOKU_RULES_DO_NOT_APPLY]:rN,[d.LEAVE_EMPTY_CELLS_EMPTY]:oN,[d.LITS]:sN,[d.HEXED_SUDOKU]:iN,[d.FILLOMINO]:aN,[d.ANTIKNIGHT]:lN,[d.ANTIKING]:uN,[d.ANTI_GIRAFFE]:cN,[d.DISJOINT_GROUPS]:dN,[d.TANGO]:_N,[d.NONCONSECUTIVE]:fN,[d.NONRATIO]:gN,[d.ANTI_ENTROPY]:IN,[d.GLOBAL_INDEXING_COLUMN]:bN,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:wN,[d.NEGATIVE_DIAGONAL]:hN,[d.POSITIVE_DIAGONAL]:vN,[d.NEGATIVE_ANTIDIAGONAL]:pN,[d.POSITIVE_ANTIDIAGONAL]:mN,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:CN,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:EN,[d.ALL_RATIOS_GIVEN]:ON,[d.ALL_DIFFERENCES_GIVEN]:yN,[d.ALL_X_GIVEN]:LN,[d.ALL_V_GIVEN]:AN,[d.ALL_XV_GIVEN]:SN,[d.ALL_RADARS_GIVEN]:NN,[d.ALL_XY_DIFFERENCES_GIVEN]:xN,[d.ALL_INDEXING_COLUMN_GIVEN]:TN,[d.ALL_INDEXING_ROW_GIVEN]:DN,[d.ALL_YIN_YANG_KROPKI_GIVEN]:RN,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:kN,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:GN,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:UN,[d.CAVE_CELLS_ARE_ODD]:_x,[d.CAVE_WALLS_ARE_EVEN]:dx,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:cx,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:ux,[d.DOUBLERS]:V2,[d.NEGATORS]:q2,[d.NEXUS]:K2,[d.UNKNOWN_REGIONS]:FN,[d.CHAOS_CONSTRUCTION_SUGURU]:$N,[d.YIN_YANG]:HN,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:PN,[d.NURIMISAKI]:BN,[d.NURIKABE]:WN,[d.TWO_CONTIGUOUS_REGIONS]:zN,[d.SASHIGANE]:YN,[d.GOLDILOCKS_ZONE]:jN,[d.CELL_CENTER_LOOP_NO_TOUCHING]:VN,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:qN,[d.NOT_LOOP_SIZED_REGIONS]:ZN,[d.MODULAR_LOOP]:QN,[d.CAVE]:sx,[d.CAVE_LITS]:fx,[d.RENBAN_CAVES]:gx,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:lx,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:MN,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:KN,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:XN,[d.GALAXIES]:vx,[d.TWO_SYMMETRIC_GALAXIES]:Cx,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:px,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:mx,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:Ex,[d.PENTOMINO_TILLING]:Ix,[d.TILLING_NO_EMPTY_CELLS]:bx,[d.LITS_BLACK_WHITE_STAR_BATTLE]:wx,[d.MAZE_DIRECTED_PATH]:JN,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:ex,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:ox,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:tx,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:rx,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:ix,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:ax,[d.DIRECTED_PATH_IS_PARITY_LINE]:nx,[d.CONNECT_FOUR]:Ox,[d.CONNECT_FOUR_DRAW]:yx,[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY]:Lx,[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3]:Ax,[d.ODD]:$T,[d.EVEN]:HT,[d.MINIMUM]:PT,[d.MAXIMUM]:BT,[d.ODD_MINESWEEPER]:WT,[d.EVEN_MINESWEEPER]:zT,[d.WATCHTOWER]:jT,[d.NOT_WATCHTOWER]:VT,[d.FARSIGHT]:qT,[d.RADAR]:KT,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:YT,[d.ORTHOGONAL_SUM]:XT,[d.DIAGONALLY_ADJACENT_SUM]:n2,[d.INDEXING_COLUMN]:ZT,[d.INDEXING_ROW]:QT,[d.LOW_DIGIT]:JT,[d.HIGH_DIGIT]:e2,[d.FRIENDLY_CELL]:t2,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:r2,[d.SANDWICH_ROW_COL_COUNT]:o2,[d.COUNTING_CIRCLES]:i2,[d.COLORED_COUNTING_CIRCLES]:a2,[d.UNIQUE_CELLS]:s2,[d.YIN_YANG_MINESWEEPER]:l2,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:c2,[d.YIN_YANG_SEEN_SHADED_CELLS]:u2,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:d2,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:_2,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:f2,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:g2,[d.SEEN_REGION_BORDERS_COUNT]:h2,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:v2,[d.SASHIGANE_BEND_REGION_COUNT]:p2,[d.SASHIGANE_REGION_SUM]:E2,[d.CELL_ON_THE_LOOP]:I2,[d.CELL_NOT_ON_THE_LOOP]:b2,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:w2,[d.CAVE_CLUE]:y2,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:O2,[d.YIN_YANG_FILLOMINO_PARITY]:hx,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:L2,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:A2,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:T2,[d.DIRECTED_PATH_START]:S2,[d.DIRECTED_PATH_END]:N2,[d.TELEPORT]:x2,[d.CONNECT_FOUR_YELLOW]:D2,[d.CONENCT_FOUR_RED]:R2,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:m2,[d.THERMO_SIGHTLINE_LOOP_ARROW]:C2,[d.HOT_ARROWS]:P2,[d.COLD_ARROWS]:H2,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:$2,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:U2,[d.YIN_YANG_COUNT_SHADED_CELLS]:F2,[d.LOOP_CELL_COUNT_ARROWS]:G2,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:M2,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:k2,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:B2,[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:W2,[d.DIFFERENCE]:dS,[d.RATIO]:uS,[d.XV]:fS,[d.EDGE_INEQUALITY]:gS,[d.EDGE_SUM]:_S,[d.EDGE_PRODUCT]:hS,[d.EDGE_MODULO]:vS,[d.EDGE_FACTOR]:pS,[d.XY_DIFFERENCES]:mS,[d.YIN_YANG_WHITE_KROPKI]:CS,[d.YIN_YANG_KROPKI]:ES,[d.UNKNOWN_REGION_BORDER]:IS,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:bS,[d.EDGE_CAVE_ONE_OF_EACH]:wS,[d.ONE_WAY_DOOR]:OS,[d.QUADRUPLE]:QA,[d.CORNER_SUM]:JA,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:eS,[d.CORNER_EVEN_COUNT]:tS,[d.PRODUCT_SQUARE]:nS,[d.EQUAL_DIAGONAL_DIFFERENCES]:rS,[d.THERMOMETER]:Sx,[d.FUZZY_THERMOMETER]:xx,[d.SLOW_THERMOMETER]:Tx,[d.CUSTOM_THERMOMETER]:Nx,[d.ROW_CYCLE_THERMOMETER]:Dx,[d.PALINDROME]:Rx,[d.RENBAN_LINE]:kx,[d.DOUBLE_RENBAN_LINE]:Mx,[d.RENRENBANBAN_LINE]:Gx,[d.N_CONSECUTIVE_RENBAN_LINE]:Ux,[d.NABNER_LINE]:Fx,[d.WHISPERS_LINE]:$x,[d.DUTCH_WHISPERS]:Hx,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:Px,[d.RENBAN_OR_WHISPERS_LINE]:Bx,[d.RENBAN_OR_NABNER_LINE]:Wx,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:zx,[d.INDEX_LINE]:Yx,[d.UNIQUE_VALUES_LINE]:jx,[d.REPEATED_DIGITS_LINE]:aT,[d.REGION_SUM_LINE]:Vx,[d.SUM_LINE]:qx,[d.XV_LINE]:uT,[d.ROW_SUM_LINE]:dT,[d.AT_LEAST_X_LINE]:_T,[d.SUPERFUZZY_ARROW]:sT,[d.AMBIGUOUS_ARROW]:lT,[d.HEADLESS_ARROW]:cT,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:fT,[d.PRODUCT_LINE]:gT,[d.ADJACENT_MULTIPLES_LINE]:hT,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:vT,[d.LOOK_AND_SAY_LINE]:pT,[d.ARITHMETIC_SEQUENCE_LINE]:Kx,[d.ZIPPER_LINE]:mT,[d.SEGMENTED_SUM_LINE]:CT,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:ET,[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:IT,[d.SAME_PARITY_LINE]:Xx,[d.MODULAR_LINE]:Zx,[d.UNIMODULAR_LINE]:Qx,[d.MODULAR_OR_UNIMODULAR_LINE]:Jx,[d.ODD_EVEN_OSCILLATOR_LINE]:eT,[d.HIGH_LOW_OSCILLATOR_LINE]:tT,[d.ENTROPIC_LINE]:nT,[d.ENTROPIC_OR_MODULAR_LINE]:rT,[d.INDEXING_COLUMN_IS_X_LINE]:oT,[d.INDEXING_ROW_IS_X_LINE]:iT,[d.YIN_YANG_INDEXING_LINE_COLORING]:LT,[d.YIN_YANG_SHADED_WHISPERS_LINE]:bT,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:wT,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:OT,[d.YIN_YANG_REGION_SUM_LINE]:yT,[d.GOLDILOCKS_ZONE_REGION_SUM]:AT,[d.BETWEEN_LINE]:ST,[d.LOCKOUT_LINE]:NT,[d.PARITY_COUNT_LINE]:TT,[d.TIGHTROPE_LINE]:xT,[d.DOUBLE_ARROW_LINE]:DT,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:RT,[d.SPLIT_PEAS]:kT,[d.DOUBLERS_THERMOMETER]:MT,[d.DOUBLERS_BETWEEN_LINE]:GT,[d.DOUBLERS_DOUBLE_ARROW_LINE]:UT,[d.ARROW]:BL,[d.AVERAGE_ARROW]:WL,[d.BULBOUS_ARROW]:zL,[d.MAZE_WALL]:Q2,[d.KILLER_CAGE]:iA,[d.UNIQUE_DIGITS_CAGE]:aA,[d.INVERTED_KILLER_CAGE]:sA,[d.SUM_CAGE]:lA,[d.SUM_CAGE_LOOK_AND_SAY]:cA,[d.PARITY_BALANCE_CAGE]:uA,[d.DIVISIBLE_KILLER_CAGE]:dA,[d.SPOTLIGHT_CAGE]:_A,[d.PUTTERIA_CAGE]:fA,[d.MULTISET_CAGE]:gA,[d.VAULTED_CAGE]:hA,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:vA,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:pA,[d.DOUBLERS_KILLER_CAGE]:mA,[d.NEGATORS_KILLER_CAGE]:CA,[d.CLONE_REGION]:XA,[d.SANDWICH_SUM]:TS,[d.X_SUM]:RS,[d.SHORTSIGHTED_X_SUM]:kS,[d.SHIFTED_X_SUM]:MS,[d.BROKEN_X_SUM]:GS,[d.X_SUM_SKYSCRAPERS]:US,[d.BATTLEFIELD]:FS,[d.SKYSCRAPERS]:$S,[d.X_INDEX]:HS,[d.SANDWICH_SUM_XOR_X_SUM]:DS,[d.RISING_STREAK]:PS,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:BS,[d.OUTSIDE_CONSECUTIVE_SUM]:WS,[d.LOOPWICHES]:zS,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:YS,[d.LITTLE_KILLER_SUM]:yS,[d.LITTLE_KILLER_PRODUCT]:LS,[d.LITTLE_KILLER_LOOK_AND_SAY]:AS,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:NS,[d.X_OMIT_LITTLE_KILLER_SUM]:SS,[d.NEGATORS_LITTLE_KILLER_SUM]:xS,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:WA,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:zA,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:z2,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:Y2,[d.FORBIDDEN_KNIGHT_SUM]:j2,[d.COSMETIC_CELL_SHAPE]:jS,[d.COSMETIC_CELL_ARROW]:VS,[d.COSMETIC_CELL_MULTI_ARROW]:qS,[d.COSMETIC_EDGE]:KS,[d.COSMETIC_CORNER]:XS,[d.COSMETIC_LINE]:ZS,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:QS,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:JS,[d.COSMETIC_ARROW]:tN,[d.COSMETIC_CAGE]:eN,[d.COSMETIC_OUTSIDE_DIRECTION]:nN};var J2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function Pv(t){var e=J2();T(t,e)}var eD=oe('<button class="remove-button svelte-17rdl63"><!></button>');function tD(t,e){let n=U(e,"onTrash",8,()=>{});var r=eD(),o=V(r);Pv(o),Y(r),Ue("click",r,Xn(function(...a){var s;(s=n())==null||s.apply(this,a)})),T(t,r)}var nD=oe('<input type="radio" class="radio-select-button svelte-3561wl">'),rD=oe('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function ca(t,e){var J,ce;ae(e,!1);const n=it(),r=()=>Ce(Xt,"$toolStore",n),o=[];let a=U(e,"elementInfo",8),s=U(e,"onClick",12,void 0),c=U(e,"onTrash",8,void 0);const u=a().toolId,_=a().permanent??!1,v=((J=a().menu)==null?void 0:J.name)??a().toolId,f=!((ce=a().meta)!=null&&ce.categories.includes(x.GLOBAL_CONSTRAINT)),g=`label-${v}`;f&&s(()=>{Nr(u)});function m(){var me,_e;const Q=(me=a().meta)==null?void 0:me.description,re=((_e=a().meta)==null?void 0:_e.usage)??PL(u);let pe;return Q&&Q.length&&(pe=Q),re.length&&(pe?pe=pe+`

`+re:pe=re),pe}ge();var C=rD(),I=V(C);{var b=Q=>{var re=nD();qt(re),A(re,"id",g),re.value=(re.__value=u)==null?"":u,Zs(o,[],re,()=>r(),pe=>Ea(Xt,pe)),T(Q,re)};he(I,Q=>{f&&Q(b)})}var w=$(I,2);ee(()=>A(w,"title",m())),A(w,"aria-labelledby",g);var L=V(w),R=V(L),M=V(R);{var F=Q=>{tD(Q,{get onTrash(){return c()}})};he(M,Q=>{_||Q(F)})}Y(R);var P=$(R,2);A(P,"for",g),P.textContent=v,Y(L);var B=$(L,2),K=V(B);dt(K,e,"default",{}),Y(B),Y(w),Y(C),ee(()=>yt(C,"checked",u===r())),Ue("click",w,Xn(function(...Q){var re;(re=s())==null||re.apply(this,Q)})),T(t,C),se()}function Bv(t,e){ae(e,!1);const n=it(),r=()=>Ce(ht,"$localConstraintsStore",n);let o=U(e,"toolId",8),a=U(e,"elementHandlers",8);const s=()=>{wL(o());const u=r().get(o());if(!u)return;const _=SL(o()),v=NL(o(),u),f=Sa(_,v);fn(f)};ge();var c=Ze(()=>ro(o(),a()));ca(t,{get elementInfo(){return p(c)},onTrash:s}),se()}var oD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function iD(t){var e=oD();T(t,e)}var aD=oe('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function cl(t,e){let n=U(e,"isOpen",8,!0);var r=aD(),o=V(r);dt(o,e,"default",{}),Y(r),ee(()=>{A(r,"aria-expanded",n()),yt(r,"closed",!n())}),T(t,r)}var sD=oe('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function lD(t,e){ae(e,!1);const n=it(),r=()=>Ce(di,"$svgRefStore",n),o=()=>Ce(ht,"$localConstraintsStore",n),a=()=>Ce(hr,"$currentConstraintStore",n),s=D();let c=U(e,"constraintId",8),u=U(e,"toolId",8);function _(){yL(c(),u()),r().focus()}function v(){const w=o().getConstraint(u(),c());if(!w)return;const L=Id(c(),u()),R=Ed(c(),w),M=Sa(L,R);fn(M)}k(()=>a(),()=>{var w;S(s,(w=a())==null?void 0:w.id)}),Ee(),ge();var f=sD(),g=V(f),m=V(g);Y(g);var C=$(g,2),I=V(C),b=V(I);Pv(b),Y(I),Y(C),Y(f),ee(()=>{yt(f,"active",c()===p(s)),rt(m,`ID: ${c()??""}`)}),Ue("click",I,Xn(v)),Ue("click",f,_),T(t,f),se()}var cD=oe('<div class="constraint-list svelte-w5npcu"></div>');function Wv(t,e){ae(e,!1);const n=it(),r=()=>Ce(ht,"$localConstraintsStore",n),o=()=>Ce(Xt,"$toolStore",n),a=D();let s=U(e,"toolId",8);k(()=>(r(),Z(s())),()=>{S(a,r().get(s()))}),Ee(),ge();var c=Ne(),u=ue(c);{var _=v=>{var f=Ze(()=>s()===o());cl(v,{get isOpen(){return p(f)},children:(g,m)=>{var C=cD();lt(C,5,()=>Object.entries(p(a)),I=>I[0],(I,b)=>{lD(I,{get constraintId(){return p(b)[0]},get toolId(){return s()}})}),Y(C),T(g,C)},$$slots:{default:!0}})};he(u,v=>{p(a)&&Object.entries(p(a)).length&&v(_)})}T(t,c),se()}var uD=oe('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function dD(t,e){let n=U(e,"title",8),r=U(e,"closeCb",8);var o=uD(),a=V(o),s=V(a,!0);Y(a);var c=$(a,2);Y(o),ee(()=>rt(s,n())),Ue("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),T(t,o)}var _D=oe('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Hr(t,e){ae(e,!1);let n=U(e,"showModal",12),r=U(e,"title",8),o=D();function a(){n(!1),p(o).close()}k(()=>(p(o),Z(n())),()=>{p(o)&&n()&&p(o).showModal()}),k(()=>(p(o),Z(n())),()=>{p(o)&&!n()&&p(o).close()}),Ee();var s=_D(),c=V(s),u=V(c);dD(u,{get title(){return r()},closeCb:a});var _=$(u,2),v=V(_),f=V(v);dt(f,e,"default",{}),Y(v),Y(_),Y(c),Y(s),To(s,g=>S(o,g),()=>p(o)),Ue("click",c,Xn(function(g){qw.call(this,e,g)})),Ue("close",s,()=>{n(!1)}),Ue("click",s,Vw(Xn(()=>p(o).close()))),T(t,s),se()}var fD=oe('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function gD(t,e){ae(e,!1);let n=U(e,"searchPattern",12,""),r=U(e,"showModal",8),o=D(null);k(()=>(Z(r()),p(o)),()=>{r()&&p(o)&&p(o).focus()}),Ee();var a=fD(),s=$(V(a),2);qt(s),A(s,"spellcheck",!1),To(s,c=>S(o,c),()=>p(o)),Y(a),qn(s,n),T(t,a),se()}var hD=oe('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function vD(t,e){let n=U(e,"showModal",12),r=U(e,"searchPattern",12,""),o=U(e,"title",8);Hr(t,{get title(){return o()},get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=hD(),u=V(c);gD(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(g){r(g)},$$legacy:!0});var _=$(u,2),v=V(_),f=V(v);dt(f,e,"default",{}),Y(v),Y(_),Y(c),T(a,c)},$$slots:{default:!0},$$legacy:!0})}var pD=oe('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),mD=oe('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function no(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0),o=U(e,"isCollapsible",8,!1);var a=Ne(),s=ue(a);{var c=_=>{var v=pD(),f=V(v),g=V(f),m=V(g,!0);Y(g),Y(f);var C=$(f,2),I=V(C);dt(I,e,"default",{}),Y(C),Y(v),ee(()=>rt(m,n())),T(_,v)},u=_=>{var v=mD(),f=V(v),g=V(f),m=V(g,!0);Y(g),Y(f);var C=$(f,2),I=V(C);dt(I,e,"default",{});var b=$(I,2);Y(C),Y(v),ee(()=>{rt(m,n()),yt(b,"open",r())}),Ue("click",v,()=>r(!r())),T(_,v)};he(s,_=>{o()?_(u,!1):_(c)})}T(t,a)}var CD=oe('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),ED=oe('<ol class="svelte-cd45on"></ol>'),ID=oe("<!> <!>",1);function bD(t,e){ae(e,!1);const n=D();let r=U(e,"category",8),o=U(e,"addTool",8),a=U(e,"searchResults",8),s=D(!0);k(()=>(Z(a()),Z(r())),()=>{S(n,a().filter(v=>{var f,g;return(g=(f=v.info.meta)==null?void 0:f.categories)==null?void 0:g.includes(r())}))}),Ee(),ge();var c=Ne(),u=ue(c);{var _=v=>{var f=ID(),g=ue(f);no(g,{get title(){return r()},isCollapsible:!0,get isOpen(){return p(s)},set isOpen(C){S(s,C)},$$legacy:!0});var m=$(g,2);cl(m,{get isOpen(){return p(s)},children:(C,I)=>{var b=ED();lt(b,5,()=>p(n),Lt,(w,L)=>{let R=()=>p(L).key,M=()=>p(L).info;var F=CD(),P=V(F),B=V(P,!0);Y(P),Y(F),ee(()=>{var K;A(P,"title",(K=M().meta)==null?void 0:K.description),rt(B,R())}),Ue("click",P,()=>{o()(R())}),T(w,F)}),Y(b),T(C,b)},$$slots:{default:!0}}),T(v,f)};he(u,v=>{p(n).length&&v(_)})}T(t,c),se()}function wD(t,e){ae(e,!1);const n=D();let r=U(e,"searchPattern",8,""),o=U(e,"addTool",8),a=U(e,"categories",8),s=U(e,"filterFunc",8),c=U(e,"elementHandlers",8);k(()=>(Z(r()),Z(s()),Z(c())),()=>{S(n,py(r(),s(),c()))}),Ee(),ge();var u=Ne(),_=ue(u);lt(_,1,a,Lt,(v,f)=>{bD(v,{get category(){return p(f)},get searchResults(){return p(n)},get addTool(){return o()}})}),T(t,u),se()}var OD=oe('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function ul(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8);var o=OD();A(o,"tabindex",0);var a=V(o),s=V(a);dt(s,e,"add-button",{}),Y(a);var c=$(a,2),u=V(c),_=V(u);dt(_,e,"title-icon",{}),Y(u);var v=$(u);Y(c);var f=$(c,2),g=V(f);Y(f),Y(o),ee(()=>{rt(v,` ${r()??""}`),yt(g,"open",n())}),Ue("click",o,()=>n(!n())),Ue("keydown",o,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),T(t,o)}var yD=oe('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function LD(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8),o=U(e,"showModal",12);function a(){o(!o())}ul(t,{get title(){return r()},get isOpen(){return n()},set isOpen(s){n(s)},$$slots:{"add-button":(s,c)=>{var u=yD();Ue("click",u,Xn(()=>a())),T(s,u)},"title-icon":(s,c)=>{var u=Ne(),_=ue(u);dt(_,e,"title-icon",{}),T(s,u)}},$$legacy:!0})}var AD=oe('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),SD=oe('<div class="panel-container svelte-hixu4"><!> <!></div>');function dl(t,e){let n=U(e,"isOpen",8,!0);var r=SD(),o=V(r);dt(o,e,"panel-header",{});var a=$(o,2);cl(a,{get isOpen(){return n()},children:(s,c)=>{var u=AD(),_=V(u);dt(_,e,"panel-content",{}),Y(u),T(s,u)},$$slots:{default:!0}}),Y(r),T(t,r)}var ND=oe("<!> <!>",1);function Ad(t,e){ae(e,!1);let n=U(e,"categories",8),r=U(e,"title",8),o=U(e,"onAddTool",8),a=U(e,"elementHandlerFilterFunc",8),s=U(e,"elementHandlers",8),c=D(!0),u=D(!1),_=D("");const v=f=>{S(u,!1),S(c,!0),o()(f)};ge(),dl(t,{get isOpen(){return p(c)},set isOpen(f){S(c,f)},$$slots:{"panel-header":(f,g)=>{var m=ND(),C=ue(m);LD(C,{get title(){return r()},get isOpen(){return p(c)},set isOpen(b){S(c,b)},get showModal(){return p(u)},set showModal(b){S(u,b)},$$slots:{"title-icon":(b,w)=>{var L=Ne(),R=ue(L);dt(R,e,"title-icon",{}),T(b,L)}},$$legacy:!0});var I=$(C,2);vD(I,{get title(){return r()},get showModal(){return p(u)},set showModal(b){S(u,b)},get searchPattern(){return p(_)},set searchPattern(b){S(_,b)},children:(b,w)=>{wD(b,{get searchPattern(){return p(_)},get categories(){return n()},get filterFunc(){return a()},addTool:v,get elementHandlers(){return s()}})},$$slots:{default:!0},$$legacy:!0}),T(f,m)},"panel-content":(f,g)=>{var m=Ne(),C=ue(m);dt(C,e,"panel-content",{}),T(f,m)}},$$legacy:!0}),se()}var xD=oe("<!> <!>",1);function TD(t,e){ae(e,!1);const n=it(),r=()=>Ce(ht,"$localConstraintsStore",n),o=D();let a=U(e,"elementHandlers",8);const s=[x.COSMETIC_TOOL],c=u=>{kv(u),Nr(u)};k(()=>(r(),x),()=>{S(o,(u,_)=>{var g;const v=r().has(u);return!!((g=_.meta)!=null&&g.categories.includes(x.COSMETIC_TOOL))&&!v})}),Ee(),ge(),Ad(t,{title:"Cosmetic Tools",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{iD(u)},"panel-content":(u,_)=>{var v=Ne(),f=ue(v);lt(f,1,()=>r().entries(),([g,m])=>g,(g,m)=>{let C=()=>p(m)[0];var I=Ne(),b=ue(I);{var w=L=>{var R=xD(),M=ue(R);Bv(M,{get toolId(){return C()},get elementHandlers(){return a()}});var F=$(M,2);Wv(F,{get toolId(){return C()}}),T(L,R)};he(b,L=>{_O(C())&&L(w)})}T(g,I)}),T(u,v)}}}),se()}var zv=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(zv||{});const Us=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Yv=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function DD(t,e){kr.update(n=>n.setConstraint(t,e))}function RD(t){kr.update(e=>e.removeConstraint(t))}function nh(t){t.type===zv.REMOVE_GLOBAL_CONSTRAINT?RD(t.payload):DD(t.payload.tool,t.payload.value)}function Lu(t,e){return{execute:()=>{nh(t)},unExecute:()=>{nh(e)}}}var kD=oe('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function MD(t,e){let n=U(e,"value",8,!1);var r=kD(),o=V(r);qt(o),Y(r),ee(()=>xh(o,n())),T(t,r)}function GD(t,e){ae(e,!1);let n=U(e,"toolId",8),r=U(e,"value",8,!1),o=U(e,"elementHandlers",8);const a=()=>{const u=Us(n(),!r()),_=Us(n(),r()),v=Lu(u,_);fn(v)},s=()=>{const u=Yv(n()),_=Us(n(),r()),v=Lu(u,_);fn(v)};ge();var c=Ze(()=>ro(n(),o()));ca(t,{get elementInfo(){return p(c)},onClick:a,onTrash:s,children:(u,_)=>{MD(u,{get value(){return r()}})},$$slots:{default:!0}}),se()}var UD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function FD(t){var e=UD();T(t,e)}function $D(t,e){ae(e,!1);const n=it(),r=()=>Ce(kr,"$globalConstraintsStore",n),o=D();let a=U(e,"elementHandlers",8);const s=gO,c=u=>{const _=Us(u,!0),v=Yv(u),f=Lu(_,v);fn(f)};k(()=>r(),()=>{S(o,(u,_)=>{var g;const v=!!((g=_.meta)!=null&&g.categories.includes(x.GLOBAL_CONSTRAINT)),f=r().has(u);return v&&!f})}),Ee(),ge(),Ad(t,{title:"Global Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{FD(u)},"panel-content":(u,_)=>{var v=Ne(),f=ue(v);lt(f,1,()=>r().entries(),([g,m])=>g,(g,m)=>{let C=()=>p(m)[0],I=()=>p(m)[1];GD(g,{get toolId(){return C()},get value(){return I()},get elementHandlers(){return a()}})}),T(u,v)}}}),se()}var HD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function PD(t){var e=HD();T(t,e)}var BD=oe("<!> <!>",1),WD=oe("<!> <!> <!> <!>",1);function zD(t,e){ae(e,!1);const n=it(),r=()=>Ce(ht,"$localConstraintsStore",n),o=D();let a=U(e,"elementHandlers",8);const s=fO,c=u=>{kv(u),Nr(u)};k(()=>(r(),x),()=>{S(o,(u,_)=>{var g;const v=r().has(u);return!!((g=_.meta)!=null&&g.categories.includes(x.LOCAL_CONSTRAINT))&&!v})}),Ee(),ge(),Ad(t,{title:"Local Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{PD(u)},"panel-content":(u,_)=>{var v=WD(),f=ue(v),g=Ze(()=>ro(d.GIVEN,a()));ca(f,{get elementInfo(){return p(g)}});var m=$(f,2),C=Ze(()=>ro(d.REGIONS,a()));ca(m,{get elementInfo(){return p(C)}});var I=$(m,2),b=Ze(()=>ro(d.FOG,a()));ca(I,{get elementInfo(){return p(b)}});var w=$(I,2);lt(w,1,()=>r().entries(),([L,R])=>L,(L,R)=>{let M=()=>p(R)[0];var F=Ne(),P=ue(F);{var B=K=>{var J=BD(),ce=ue(J);Bv(ce,{get toolId(){return M()},get elementHandlers(){return a()}});var Q=$(ce,2);Wv(Q,{get toolId(){return M()}}),T(K,J)};he(P,K=>{cO(M())&&K(B)})}T(L,F)}),T(u,v)}}}),se()}var YD=oe('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function iu(t,e){ae(e,!1);const n=D();let r=U(e,"value",8),o=U(e,"onChangeCb",8,void 0),a=D(void 0);function s(m){const C=Jc(m);C&&o()&&o()(C)}k(()=>Z(r()),()=>{S(n,r())}),k(()=>(p(n),Jc),()=>{Eu(p(n))&&S(a,Jc(p(n)))}),Ee(),ge();var c=YD(),u=V(c);const _=Ze(()=>bv(p(n)));var v=V(u);qt(v),Y(u);var f=$(u,2),g=$(V(f),2);qt(g),A(g,"spellcheck",!1),A(g,"maxlength",30),Y(f),Y(c),ee(()=>{A(u,"style",`--choosen-color: ${p(a)??""}`),yt(u,"transparent",p(_))}),qn(v,()=>p(n),m=>S(n,m)),Ue("change",v,()=>s(p(n))),qn(g,()=>p(n),m=>S(n,m)),Ue("input",g,()=>s(p(n))),T(t,c),se()}var jD=oe('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function ua(t,e){let n=U(e,"name",8);var r=jD(),o=V(r),a=V(o,!0);Y(o);var s=$(o,2);dt(s,e,"default",{}),Y(r),ee(()=>rt(a,n())),T(t,r)}var VD=oe('<input class="control-slider svelte-1rsuho6" type="range">');function qD(t,e){ae(e,!1);let n=U(e,"min",8),r=U(e,"max",8),o=U(e,"value",12),a=U(e,"step",24,()=>(r()-n())/10),s=U(e,"onChangeCb",8,void 0),c=U(e,"onInputCb",8,void 0);ge();var u=VD();qt(u),ee(()=>{A(u,"min",n()),A(u,"max",r()),A(u,"step",a())}),qn(u,o),Ue("change",u,()=>{s()&&s()(o())}),Ue("input",u,()=>{c()&&c()(o())}),T(t,u),se()}function Qr(t,e){let n=U(e,"name",8),r=U(e,"value",12),o=U(e,"min",8),a=U(e,"max",8),s=U(e,"step",24,()=>(a()-o())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);ua(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,v)=>{qD(_,{get min(){return o()},get max(){return a()},get step(){return s()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(f){r(f)},$$legacy:!0})},$$slots:{default:!0}})}var KD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function XD(t){var e=KD();T(t,e)}var ZD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function QD(t){var e=ZD();T(t,e)}var JD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function eR(t){var e=JD();T(t,e)}var tR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function nR(t){var e=tR();T(t,e)}var rR=oe('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function oR(t,e){ae(e,!1);const n=[];let r=U(e,"value",8),o=U(e,"selectedShape",12),a=U(e,"title",8),s=U(e,"updateShapeCb",8,void 0);ge();var c=rR(),u=V(c);qt(u);var _,v=$(u,2);dt(v,e,"default",{}),Y(c),ee(()=>{A(c,"title",a()),yt(c,"active",r()===o()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),Zs(n,[],u,()=>(r(),o()),o),Ue("change",u,()=>s()&&s()(r())),T(t,c),se()}var iR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function aR(t){var e=iR(),n=V(e);A(n,"cx",480),A(n,"cy",-480),A(n,"rx",480),A(n,"ry",300),Y(e),T(t,e)}var sR=oe('<div class="icon-wrapper svelte-18euf14"><!></div>'),lR=oe('<div class="radio-container svelte-18euf14"></div>');function cR(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"selectedShape",8),o=U(e,"possibleShapes",8),a=U(e,"updateShapeCb",8,void 0);const s=new Map([[H.CIRCLE,eR],[H.ELLIPSE,aR],[H.SQUARE,QD],[H.RECTANGLE,XD],[H.POLYGON,nR]]);ge(),ua(t,{get name(){return n()},children:(c,u)=>{var _=lR();lt(_,5,o,Lt,(v,f)=>{oR(v,{get title(){return p(f)},get value(){return p(f)},get selectedShape(){return r()},get updateShapeCb(){return a()},children:(g,m)=>{var C=Ne(),I=ue(C);{var b=w=>{var L=sR(),R=V(L);wh(R,()=>s.get(p(f)),(M,F)=>{F(M,{})}),Y(L),T(w,L)};he(I,w=>{s.has(p(f))&&w(b)})}T(g,C)},$$slots:{default:!0}})}),Y(_),T(c,_)},$$slots:{default:!0}}),se()}var uR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function dR(t){var e=uR();T(t,e)}var _R=oe('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),fR=oe("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function gR(t,e){ae(e,!1);const n=it(),r=()=>Ce(Xt,"$toolStore",n),o=()=>Ce(hr,"$currentConstraintStore",n),a=D(),s=D(),c=D();let u=D(!0),_=U(e,"elementHandlers",8);function v(b,w){const L=(b==null?void 0:b.shape)??(w?_u(w):void 0);return tu(L),L}function f(b,w){p(c)&&(Lw(c,p(c)[b]=w),tu(p(c)))}function g(){p(s)&&(S(c,_u(p(s))),tu(p(c)))}function m(b){return b&&[H.CIRCLE,H.SQUARE,H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(b)}function C(b){return b&&[H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[H.ELLIPSE,H.RECTANGLE].includes(b)}k(()=>(r(),Z(_())),()=>{S(a,ro(r(),_()))}),k(()=>p(a),()=>{S(s,p(a).shape)}),k(()=>(o(),p(s)),()=>{var b;S(c,v(((b=o())==null?void 0:b.constraint)??null,p(s)))}),Ee(),ge(),dl(t,{get isOpen(){return p(u)},set isOpen(b){S(u,b)},$$slots:{"panel-header":(b,w)=>{ul(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return p(u)},set isOpen(L){S(u,L)},$$slots:{"title-icon":(L,R)=>{dR(L)}},$$legacy:!0})},"panel-content":(b,w)=>{var L=Ne(),R=ue(L);{var M=F=>{var P=fR(),B=ue(P);{var K=Te=>{var Ie=_R();Ue("click",Ie,g),T(Te,Ie)};he(B,Te=>{wO(p(s))&&Te(K)})}var J=$(B,2);{var ce=Te=>{cR(Te,{get possibleShapes(){return p(s).allowedTypes},name:"Shape",get selectedShape(){return p(c).type},updateShapeCb:Ie=>f("type",Ie)})};he(J,Te=>{var Ie;p(s).allowedTypes&&p(s).allowedTypes.length&&((Ie=p(c))!=null&&Ie.type)&&Te(ce)})}var Q=$(J,2);{var re=Te=>{var Ie=Ze(()=>p(s).n.lb??3),ke=Ze(()=>p(s).n.ub??10);Qr(Te,{name:"Number of Sides",get value(){return p(c).n},get min(){return p(Ie)},get max(){return p(ke)},step:1,onChangeCb:xe=>f("n",xe)})};he(Q,Te=>{var Ie,ke,xe;((Ie=p(c))==null?void 0:Ie.n)!==void 0&&((xe=(ke=p(s))==null?void 0:ke.n)!=null&&xe.editable)&&C(p(c).type)&&Te(re)})}var pe=$(Q,2);{var me=Te=>{var Ie=Ze(()=>p(s).r.lb??0),ke=Ze(()=>p(s).r.ub??1),xe=Ze(()=>p(s).r.step??.05);Qr(Te,{name:"Radius",get value(){return p(c).r},get min(){return p(Ie)},get max(){return p(ke)},get step(){return p(xe)},onChangeCb:At=>f("r",At)})};he(pe,Te=>{var Ie,ke,xe;((Ie=p(c))==null?void 0:Ie.r)!==void 0&&((xe=(ke=p(s))==null?void 0:ke.r)!=null&&xe.editable)&&m(p(c).type)&&Te(me)})}var _e=$(pe,2);{var Ae=Te=>{var Ie=Ze(()=>p(s).width.lb??0),ke=Ze(()=>p(s).width.ub??1),xe=Ze(()=>p(s).width.step??.05);Qr(Te,{name:"Width",get value(){return p(c).width},get min(){return p(Ie)},get max(){return p(ke)},get step(){return p(xe)},onChangeCb:At=>f("width",At)})};he(_e,Te=>{var Ie,ke,xe;((Ie=p(c))==null?void 0:Ie.width)!==void 0&&((xe=(ke=p(s))==null?void 0:ke.width)!=null&&xe.editable)&&I(p(c).type)&&Te(Ae)})}var Ve=$(_e,2);{var ye=Te=>{var Ie=Ze(()=>p(s).height.lb??0),ke=Ze(()=>p(s).height.ub??1),xe=Ze(()=>p(s).height.step??.05);Qr(Te,{name:"Height",get value(){return p(c).height},get min(){return p(Ie)},get max(){return p(ke)},get step(){return p(xe)},onChangeCb:At=>f("height",At)})};he(Ve,Te=>{var Ie,ke,xe;((Ie=p(c))==null?void 0:Ie.height)!==void 0&&((xe=(ke=p(s))==null?void 0:ke.height)!=null&&xe.editable)&&I(p(c).type)&&Te(ye)})}var we=$(Ve,2);{var ct=Te=>{var Ie=Ze(()=>p(s).angle.lb??0),ke=Ze(()=>p(s).angle.ub??360),xe=Ze(()=>p(s).angle.step??15);Qr(Te,{name:"Angle",get value(){return p(c).angle},get min(){return p(Ie)},get max(){return p(ke)},get step(){return p(xe)},onChangeCb:At=>f("angle",At)})};he(we,Te=>{var Ie,ke,xe;((Ie=p(c))==null?void 0:Ie.angle)!==void 0&&((xe=(ke=p(s))==null?void 0:ke.angle)!=null&&xe.editable)&&Te(ct)})}var qe=$(we,2);{var Ln=Te=>{var Ie=Ze(()=>p(s).inset.lb??0),ke=Ze(()=>p(s).inset.ub??.5),xe=Ze(()=>p(s).inset.step??.01);Qr(Te,{name:"Inset",get value(){return p(c).inset},get min(){return p(Ie)},get max(){return p(ke)},get step(){return p(xe)},onChangeCb:At=>f("inset",At)})};he(qe,Te=>{var Ie,ke,xe;((Ie=p(c))==null?void 0:Ie.inset)!==void 0&&((xe=(ke=p(s))==null?void 0:ke.inset)!=null&&xe.editable)&&Te(Ln)})}var Fn=$(qe,2);{var Pr=Te=>{ua(Te,{name:"Stroke",children:(Ie,ke)=>{iu(Ie,{get value(){return p(c).stroke},onChangeCb:xe=>f("stroke",xe)})},$$slots:{default:!0}})};he(Fn,Te=>{var Ie,ke,xe;((Ie=p(c))==null?void 0:Ie.stroke)!==void 0&&((xe=(ke=p(s))==null?void 0:ke.stroke)!=null&&xe.editable)&&Te(Pr)})}var Jt=$(Fn,2);{var Cr=Te=>{var Ie=Ze(()=>p(s).strokeWidth.lb??0),ke=Ze(()=>p(s).strokeWidth.ub??.8),xe=Ze(()=>p(s).strokeWidth.step??.01);Qr(Te,{name:"Stroke Width",get value(){return p(c).strokeWidth},get min(){return p(Ie)},get max(){return p(ke)},get step(){return p(xe)},onChangeCb:At=>f("strokeWidth",At)})};he(Jt,Te=>{var Ie,ke,xe;((Ie=p(c))==null?void 0:Ie.strokeWidth)!==void 0&&((xe=(ke=p(s))==null?void 0:ke.strokeWidth)!=null&&xe.editable)&&Te(Cr)})}var ho=$(Jt,2);{var ar=Te=>{var Ie=Ze(()=>p(s).strokeDasharray.lb??0),ke=Ze(()=>p(s).strokeDasharray.ub??1),xe=Ze(()=>p(s).strokeDasharray.step??.01);Qr(Te,{name:"Stroke Dasharray",get value(){return p(c).strokeDasharray},get min(){return p(Ie)},get max(){return p(ke)},get step(){return p(xe)},onChangeCb:At=>f("strokeDasharray",At)})};he(ho,Te=>{var Ie,ke,xe;((Ie=p(c))==null?void 0:Ie.strokeDasharray)!==void 0&&((xe=(ke=p(s))==null?void 0:ke.strokeDasharray)!=null&&xe.editable)&&Te(ar)})}var $n=$(ho,2);{var Bo=Te=>{ua(Te,{name:"Fill",children:(Ie,ke)=>{iu(Ie,{get value(){return p(c).fill},onChangeCb:xe=>f("fill",xe)})},$$slots:{default:!0}})};he($n,Te=>{var Ie,ke,xe;((Ie=p(c))==null?void 0:Ie.fill)!==void 0&&((xe=(ke=p(s))==null?void 0:ke.fill)!=null&&xe.editable)&&Te(Bo)})}var Br=$($n,2);{var kt=Te=>{ua(Te,{name:"Font Color",children:(Ie,ke)=>{iu(Ie,{get value(){return p(c).fontColor},onChangeCb:xe=>f("fontColor",xe)})},$$slots:{default:!0}})};he(Br,Te=>{var Ie,ke,xe;((Ie=p(c))==null?void 0:Ie.fontColor)!==void 0&&((xe=(ke=p(s))==null?void 0:ke.fontColor)!=null&&xe.editable)&&Te(kt)})}T(F,P)};he(R,F=>{p(s)&&F(M)})}T(b,L)}},$$legacy:!0}),se()}var hR=oe('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Ra(t,e){let n=U(e,"clickCb",8),r=U(e,"title",8);var o=hR(),a=V(o),s=V(a);dt(s,e,"default",{}),Y(a),Y(o),ee(()=>A(o,"title",r())),Ue("click",o,Xn(function(...c){var u;(u=n())==null||u.apply(this,c)})),T(t,o)}var vR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function pR(t){var e=vR();T(t,e)}var mR=oe('<div class="buttons-container svelte-kc00rw"><!></div>');function _l(t,e){var n=mR(),r=V(n);dt(r,e,"default",{}),Y(n),T(t,n)}var CR=oe('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),ER=oe('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),IR=oe('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function bR(t,e){ae(e,!1);const n=it(),r=()=>Ce(Rr,"$puzzleMetaStore",n),o=()=>Ce(kr,"$globalConstraintsStore",n),a=()=>Ce(ht,"$localConstraintsStore",n);let s=U(e,"showModal",12,!1),c=D(""),u=D(""),_=D(""),v=D(""),f=D("");function g(){s(!1)}function m(){const w=p(u)?C(p(u)):["Anonymous"],R={title:p(c)?p(c):"Sudoku",authors:w,ruleset:p(_),ctcYoutubeUrl:p(v),ctcUrl:p(f)};IL(R),s(!1)}function C(w){return w.split(/\s*[;]\s*/)}function I(){var P,B,K,J;let w="";const L=Tt,R=o();!!R.get(d.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[ce,Q]of R.entries())if(ce!==d.SUDOKU_RULES_DO_NOT_APPLY&&Q){const re=L[ce],pe=((P=re.menu)==null?void 0:P.name)??re.toolId,me=(B=re.meta)==null?void 0:B.description;w+=`**${pe}**: ${me}

`}const F=a();for(const[ce,Q]of F.entries())if(Object.keys(Q).length>0){const pe=L[ce],me=((K=pe.menu)==null?void 0:K.name)??pe.toolId,_e=(J=pe.meta)==null?void 0:J.description;w+=`**${me}**: ${_e}

`}return w.trim()}function b(){const w=I();S(_,w)}k(()=>(Z(s()),r(),Hs),()=>{if(!s()){const w=r().authors;S(c,r().title??""),S(u,w?Hs(w,"; ","; "):""),S(_,r().ruleset??""),S(v,r().ctcYoutubeUrl??""),S(f,r().ctcUrl??"")}}),Ee(),ge(),Hr(t,{title:"Edit Puzzle Meta",get showModal(){return s()},set showModal(w){s(w)},children:(w,L)=>{var R=IR(),M=V(R);no(M,{title:"Title"});var F=$(M,2);qt(F);var P=$(F,2);no(P,{title:"Authors"});var B=$(P,2);qt(B);var K=$(B,2);no(K,{title:"Ruleset",children:(_e,Ae)=>{var Ve=CR();Ue("click",Ve,b),T(_e,Ve)},$$slots:{default:!0}});var J=$(K,2);Gw(J),A(J,"rows",8);var ce=$(J,2);no(ce,{title:"CTC Link"});var Q=$(ce,2);qt(Q);var re=$(Q,2);no(re,{title:"CTC Youtube Link"});var pe=$(re,2);qt(pe);var me=$(pe,2);_l(me,{children:(_e,Ae)=>{var Ve=ER(),ye=ue(Ve),we=$(ye,2);Ue("click",ye,m),Ue("click",we,g),T(_e,Ve)},$$slots:{default:!0}}),Y(R),qn(F,()=>p(c),_e=>S(c,_e)),qn(B,()=>p(u),_e=>S(u,_e)),qn(J,()=>p(_),_e=>S(_,_e)),qn(Q,()=>p(f),_e=>S(f,_e)),qn(pe,()=>p(v),_e=>S(v,_e)),T(w,R)},$$slots:{default:!0},$$legacy:!0}),se()}var wR=oe("<!> <!>",1);function OR(t){let e=D(!1);function n(){S(e,!0)}var r=wR(),o=ue(r);Ra(o,{title:"Edit Puzzle Meta",clickCb:n,children:(s,c)=>{pR(s)},$$slots:{default:!0}});var a=$(o,2);bR(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),T(t,r)}var yR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function LR(t){var e=yR();T(t,e)}var AR=oe('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function SR(t,e){ae(e,!1);let n=D(null),r=D(null);function o(){var a;(a=p(n))==null||a.click()}k(()=>(p(r),Ws),()=>{if(p(r)&&p(r).length){const a=p(r)[0],s=new FileReader;s.readAsText(a),s.onload=function(c){if(c.target||alert(s.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),v=iL(_);console.log(v),AL(v),Ws()}},s.onerror=function(){alert(s.error)}}}),Ee(),ge(),Ra(t,{title:"Open Puzzle",clickCb:o,children:(a,s)=>{var c=AR(),u=ue(c);LR(u);var _=$(u,2);To(_,v=>S(n,v),()=>p(n)),jw(_,()=>p(r),v=>S(r,v)),T(a,c)},$$slots:{default:!0}}),se()}var NR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function xR(t){var e=NR();T(t,e)}var TR=oe('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function rh(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"min",8),o=U(e,"max",8),a=U(e,"value",12),s=U(e,"step",24,()=>(o()-r())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);ge();var _=TR(),v=V(_),f=V(v);Y(v);var g=$(v,2);qt(g),Y(_),ee(()=>{rt(f,`${n()??""}: ${a()??""}`),A(g,"min",r()),A(g,"max",o()),A(g,"step",s())}),qn(g,a),Ue("change",g,()=>{c()&&c()(a())}),Ue("input",g,()=>{u()&&u()(a())}),T(t,_),se()}var DR=oe('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),RR=oe('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function kR(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);const r=4,o=20;let a=D(9),s=D(9),c=D(""),u=D(Nt.range(1,10));function _(){n(!1)}function v(){Ws(),LL(p(s),p(a),p(u).sort()),n(!1)}function f(C){return C.map(b=>String(b)).join(",")}function g(){const C=Math.min(Math.max(p(s),p(a)),9);S(u,Nt.range(1,C+1))}function m(C){/^-?\d+(?:,-?\d+)*$/.test(C)&&S(u,C.replaceAll(" ","").split(",").map(Number))}ge(),Hr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(C){n(C)},children:(C,I)=>{var b=RR(),w=V(b);rh(w,{name:"Width",min:r,max:o,step:1,onInputCb:g,get value(){return p(a)},set value(B){S(a,B)},$$legacy:!0});var L=$(w,2);rh(L,{name:"Height",min:r,max:o,step:1,onInputCb:g,get value(){return p(s)},set value(B){S(s,B)},$$legacy:!0});var R=$(L,2),M=Ze(()=>`Allowed Digits (for the solver): ${f(p(u))}`);no(R,{get title(){return p(M)}});var F=$(R,2);qt(F),ee(()=>A(F,"placeholder",f(p(u))));var P=$(F,2);_l(P,{children:(B,K)=>{var J=DR(),ce=ue(J),Q=$(ce,2);Ue("click",ce,v),Ue("click",Q,_),T(B,J)},$$slots:{default:!0}}),Y(b),qn(F,()=>p(c),B=>S(c,B)),Ue("input",F,()=>m(p(c))),T(C,b)},$$slots:{default:!0},$$legacy:!0}),se()}var MR=oe("<!> <!>",1);function GR(t){let e=D(!1);function n(){S(e,!0)}var r=MR(),o=ue(r);Ra(o,{title:"New Puzzle",clickCb:n,children:(s,c)=>{xR(s)},$$slots:{default:!0}});var a=$(o,2);kR(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),T(t,r)}var UR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function FR(t){var e=UR();T(t,e)}var $R=oe('<button class="modal-button">Cancel</button>'),HR=oe('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function PR(t,e){ae(e,!1);const n=it(),r=()=>Ce(di,"$svgRefStore",n),o=()=>Ce(Aa,"$puzzleStore",n),a=()=>Ce(Rr,"$puzzleMetaStore",n),s=D();let c=U(e,"showModal",12,!1);function u(b){const w=getComputedStyle(b);let L="";for(let R of w){const M=w.getPropertyValue(R);M&&(L+=`${R}:${M};`)}return L}function _(b){const w=b.cloneNode(!0);(w instanceof SVGElement||w instanceof HTMLElement)&&(w.style.cssText=u(b));const L=b.childNodes;for(let R=0;R<L.length;R++){const M=L[R];if(M instanceof Element){const F=_(M);w.replaceChild(F,w.childNodes[R])}}return w}function v(b,w="download.png"){const L=_(b),M=new XMLSerializer().serializeToString(L),F=new Image,P=new Blob([M],{type:"image/svg+xml;charset=utf-8"}),B=URL.createObjectURL(P);F.onload=()=>{const K=b.getBoundingClientRect(),J=K.width,ce=K.height,Q=document.createElement("canvas"),re=window.devicePixelRatio||1;Q.width=J*re,Q.height=ce*re;const pe=Q.getContext("2d");pe&&(pe.scale(re,re),pe.drawImage(F,0,0,J,ce),Q.toBlob(me=>{if(!me)return;const _e=URL.createObjectURL(me),Ae=document.createElement("a");Ae.href=_e,Ae.download=w,Ae.click(),URL.revokeObjectURL(_e)}))},F.src=B}function f(b,w="download.svg"){const L=_(b);let M=new XMLSerializer().serializeToString(L);M.includes("<?xml")||(M=`<?xml version="1.0" standalone="no"?>\r
`+M);const F=new Blob([M],{type:"image/svg+xml"}),P=URL.createObjectURL(F),B=document.createElement("a");B.href=P,B.download=w,B.click(),URL.revokeObjectURL(P)}const g=()=>{const b=oL(o());return JSON.stringify(b,null,2)},m=()=>{function b(R,M,F){var P=document.createElement("a"),B=new Blob([R],{type:F});P.href=URL.createObjectURL(B),P.download=M,P.click(),URL.revokeObjectURL(P.href)}const w=g(),L=Iu(a());b(w,`${L}.json`,"text/plain")};function C(){c(!1)}const I=1;k(()=>r(),()=>{S(s,r())}),Ee(),ge(),Hr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(b){c(b)},children:(b,w)=>{var L=HR(),R=V(L),M=V(R),F=V(M),P=$(F,2),B=$(P,2);Y(M);var K=$(M,2),J=$(V(K),2),ce=V(J);A(ce,"width",400*I),A(ce,"height",300*I),Y(J),Y(K),Y(R);var Q=$(R,2);_l(Q,{children:(re,pe)=>{var me=$R();Ue("click",me,C),T(re,me)},$$slots:{default:!0}}),Y(L),Ue("click",F,m),Ue("click",P,()=>v(p(s))),Ue("click",B,()=>f(p(s))),T(b,L)},$$slots:{default:!0},$$legacy:!0}),se()}var BR=oe("<!> <!>",1);function WR(t){let e=D(!1);function n(){S(e,!0)}var r=BR(),o=ue(r);Ra(o,{title:"Save Puzzle",clickCb:n,children:(s,c)=>{FR(s)},$$slots:{default:!0}});var a=$(o,2);PR(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),T(t,r)}var zR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function jv(t){var e=zR();T(t,e)}var YR=oe('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),jR=oe('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Rs(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0);var o=jR(),a=V(o);no(a,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var s=$(a,2);cl(s,{get isOpen(){return r()},children:(c,u)=>{var _=YR(),v=V(_);dt(v,e,"default",{}),Y(_),T(c,_)},$$slots:{default:!0}}),Y(o),T(t,o)}var VR=oe('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function qR(t,e){let n=U(e,"value",8),r=U(e,"onClickCb",8),o=U(e,"disabled",8,!1);var a=VR(),s=V(a);qt(s),xo(2),Y(a),ee(()=>{yt(a,"disabled",o()),xh(s,n()),s.disabled=o()}),Ue("change",s,function(...c){var u;(u=r())==null||u.apply(this,c)}),T(t,a)}var KR=oe('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Jr(t,e){ae(e,!1);let n=U(e,"value",8),r=U(e,"name",8),o=U(e,"updateCb",8,void 0),a=U(e,"disabled",8,!1);function s(){a()||o()&&o()(!n())}ge();var c=KR(),u=V(c);qR(u,{get value(){return n()},onClickCb:s,get disabled(){return a()}});var _=$(u,2),v=V(_,!0);Y(_),Y(c),ee(()=>{yt(c,"disabled",a()),rt(v,r())}),Ue("click",_,Xn(s)),T(t,c),se()}var XR=oe("<!> <!>",1),ZR=oe("<!> <!> <!>",1),QR=oe("<!> <!>",1),JR=oe('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function Vv(t,e){ae(e,!1);const n=it(),r=()=>Ce(zt,"$settingsStore",n),o=()=>Ce(nl,"$gameModeStore",n),a=D();let s=U(e,"showModal",12,!1);k(()=>r(),()=>{S(a,r())}),Ee(),ge(),Hr(t,{title:"Settings",get showModal(){return s()},set showModal(c){s(c)},children:(c,u)=>{var _=JR(),v=V(_);Rs(v,{title:"General",children:(I,b)=>{Jr(I,{get value(){return p(a).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:Qw})},$$slots:{default:!0}});var f=$(v,2);Rs(f,{title:"Tools",children:(I,b)=>{var w=XR(),L=ue(w);Jr(L,{get value(){return p(a).penToolActive},name:"Pen Tool",updateCb:eO});var R=$(L,2);Jr(R,{disabled:!0,get value(){return p(a).letterToolActive},name:"Letter Tool",updateCb:tO}),T(I,w)},$$slots:{default:!0}});var g=$(f,2);Rs(g,{title:"Gameplay",children:(I,b)=>{var w=ZR(),L=ue(w);Jr(L,{name:"Check Conflicts",get value(){return p(a).checkConflicts},updateCb:rO});var R=$(L,2);Jr(R,{name:"Highlight Pencilmark Conflicts",get value(){return p(a).highlightPencilmarkConflicts},updateCb:oO});var M=$(R,2);Jr(M,{name:"Highlight Cells Seen By Selection",get value(){return p(a).highlightCellsSeenBySelection},updateCb:nO}),T(I,w)},$$slots:{default:!0}});var m=$(g,2);{var C=I=>{Rs(I,{title:"Setting Mode Display",children:(b,w)=>{var L=QR(),R=ue(L);Jr(R,{name:"Hide Fog",get value(){return p(a).hideFog},updateCb:iO});var M=$(R,2);Jr(M,{name:"Show Solution",get value(){return p(a).showSolution},updateCb:aO}),T(b,L)},$$slots:{default:!0}})};he(m,I=>{o()===hi.SETTING&&I(C)})}Y(_),T(c,_)},$$slots:{default:!0},$$legacy:!0}),se()}var ek=oe("<!> <!>",1);function tk(t){let e=D(!1);function n(){S(e,!0)}var r=ek(),o=ue(r);Ra(o,{title:"Settings",clickCb:n,children:(s,c)=>{jv(s)},$$slots:{default:!0}});var a=$(o,2);Vv(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),T(t,r)}var nk=oe('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function rk(t){var e=nk(),n=V(e);GR(n);var r=$(n,2);WR(r);var o=$(r,2);SR(o,{});var a=$(o,2);OR(a);var s=$(a,2);tk(s),Y(e),T(t,e)}var ok=oe('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function ik(t,e){ae(e,!1);let n=D(!1);function r(){const o=st(hn),a=[];for(let s=0;s<o.nRows;s++){const c=[];for(let u=0;u<o.nCols;u++){const _=o.getCell(s,u);if(!_)continue;const v=_.value;c.push(v)}a.push(c)}Cd(a)}ge(),dl(t,{get isOpen(){return p(n)},set isOpen(o){S(n,o)},$$slots:{"panel-header":(o,a)=>{ul(o,{slot:"panel-header",title:"Other Tools",get isOpen(){return p(n)},set isOpen(s){S(n,s)},$$legacy:!0})},"panel-content":(o,a)=>{var s=ok();Ue("click",s,r),T(o,s)}},$$legacy:!0}),se()}const ak={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function sk(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const o=r[1],a=parseInt(r[2],10);if(o===">"||o===">=")return{lower_bound:[a,o]};if(o==="<"||o==="<=")return{upper_bound:[a,o]}}if(r=n.exec(t),r){const o=r[1],a=parseInt(r[2],10),s=parseInt(r[3],10),c=r[4];return{lower_bound:[a,o==="["?">=":">"],upper_bound:[s,c==="]"?"<=":"<"]}}return null}function lk(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function ck(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function qv(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function uk(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=lk(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const o=ck(t);if(e.allow_int_list&&o)return{type:"number_list",parsed:o};const a=sk(t);if(e.allow_interval&&a)return{type:"interval",parsed:a};const s=qv(t);return e.allow_var_list&&s?{type:"var_list",parsed:s}:null}var te=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.UNKNOWN_REGIONS="unknown_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(te||{});function Et(t,e){return`${e}[${t.r},${t.c}]`}function fo(t,e){return t.map(r=>Et(r,e))}function Re(t,e){return"["+fo(t,e).join(",")+"]"}function Oe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function je(t){return t.map(n=>Oe(n))}function dk(t){return`values_grid[${t.r},${t.c}]`}function fl(t){return t.map(e=>dk(e))}function No(t){return`constraint alldifferent([${t.join(",")}]);
`}function _t(t,e){return t&&(t=`
% ${e}
`+t),t}function Sd(t,e){const n=[We.N,We.S,We.W,We.E],r=[];for(const o of n){const a=t.getCellsInDirection(e.r,e.c,o);r.push(a)}return r}function Nd(t,e,n=void 0){n||(n=[We.N,We.S,We.W,We.E]);const r=[];for(const o of n){const a=t.getCellsInDirection(e.r,e.c,o),s="["+je(a).join(",")+"]";r.push(s)}return r}function gl(t,e,n,r){let o="";const a=r.get(e);if(a)for(const s of Object.values(n)){const c=a(t,s);o+=c}return o}class _k{constructor(e){ve(this,"model_str","");ve(this,"used_vars");ve(this,"puzzle");ve(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=ak){const o=uk(e,r);if(!o)return null;if(o.type==="number"){const c=o.parsed;return["",String(c)]}let a="";if(o.type==="variable"){const c=o.parsed;return this.hasVariable(c)||(a+=`var int: ${c};
`,this.addVariable(c)),[a,c]}if(!n)return null;if(this.hasVariable(n)||(a+=`var int: ${n};
`,this.addVariable(n)),o.type==="interval"){const c=o.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];a+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];a+=`constraint ${n} ${_} ${u};
`}}if(o.type==="number_list"){const u="{"+o.parsed.join(",")+"}";a+=`constraint member(${u}, ${n});
`}return o.type==="var_list"?null:[a,n]}}function fk(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,o=/^predicate\s+(\w+)\s*\(/,a=/^test\s+(\w+)\s*\(/;let s=null,c=0,u=0;for(let I=0;I<e.length;I++){const b=e[I].trim(),w=b.match(r),L=b.match(o),R=b.match(a);if(w||L||R){s={name:(w||L||R)[1],startLine:I,content:[e[I]]},c=(b.match(/\(/g)||[]).length-(b.match(/\)/g)||[]).length,u=(b.match(/\{/g)||[]).length-(b.match(/\}/g)||[]).length;continue}if(s&&(s.content.push(e[I]),c+=(b.match(/\(/g)||[]).length-(b.match(/\)/g)||[]).length,u+=(b.match(/\{/g)||[]).length-(b.match(/\}/g)||[]).length,c===0&&u===0&&b.endsWith(";"))){n[s.name]={startLine:s.startLine,endLine:I,name:s.name,content:s.content};let M=s.startLine;for(;M>0&&e[M-1].trim().startsWith("%");)M-=1;n[s.name].startLine=M,s=null}}const _=new Set;function v(I){const b=[];for(const w of Object.keys(n))!I.includes("function")&&!I.includes("predicate")&&!I.includes("test")&&new RegExp(`\\b${w}\\s*\\(`,"g").test(I)&&b.push(w);return b}for(const I of e)v(I).forEach(w=>_.add(w));const f=Object.values(n).filter(I=>!_.has(I.name)).map(I=>({start:I.startLine,end:I.endLine}));f.sort((I,b)=>b.start-I.start);const g=[...e];for(const I of f)g.splice(I.start,I.end-I.start+1);const m=[];let C=!1;for(const I of g)I.trim()===""?C||(m.push(I),C=!0):(m.push(I),C=!1);return m.join(`
`)}function oh(t){let e=t,n=e.length;for(;e=fk(e),e.length!=n;)n=e.length;return e}const ih=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function xd(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(o=>o.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function gk(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),o=Math.max(...n),a=[];for(let c=0;c<e.nRows;c++){const u=[];for(let _=0;_<e.nCols;_++){const v=e.getCell(c,_);!v||v.region===null?u.push(r-1):u.push(v.region)}a.push(u)}const s=xd(a);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${o}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${s});
`)}}function Td(t){const e=new Map;for(const n of t){const r=n.value??"",o=e.get(r);if(!o){e.set(r,[n]);continue}o.push(n)}return e}function hk(t,e){const r=t.grid.getPositiveDiagonal(),o=je(r);let a=No(o);return a=`
% Positive Diagonal Constraint
`+a,a}function vk(t,e){const r=t.grid.getNegativeDiagonal(),o=je(r);let a=No(o);return a=`
% Negative Diagonal Constraint
`+a,a}function pk(t,e){const r=t.grid.getPositiveDiagonal(),a="["+je(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function mk(t,e){const r=t.grid.getNegativeDiagonal(),a="["+je(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function Ck(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let a="";const s=n.getPositiveDiagonal();for(const c of s){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const f=n.getCell(v,_),g=n.getCell(u,_+(u-v));if(!f||!g)continue;const m=Oe(f),C=Oe(g),b=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=b}}return a}function Ek(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let a="";const s=n.getNegativeDiagonal();for(const c of s){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const f=n.getCell(v,_),g=n.getCell(u,_-(u-v));if(!f||!g)continue;const m=Oe(f),C=Oe(g),b=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=b}}return a}function Ik(t,e){const n=t.grid;let r=`
% ${e}
`;const o=[...n.getUsedRegions()].length;for(let a=0;a<o;a++){const s=n.getDisjointGroup(a),_=`constraint alldifferent(${`[${je(s).join(",")}]`});
`;r+=_}return r}function bk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const s=n.getNeighboorCells(o).filter(f=>f.r+f.c>=o.r+o.c),c=Oe(o),_=`[${je(s).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function wk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const s=n.getCellsByKnightMove(o).filter(f=>f.r>=o.r||f.c>=o.c),c=Oe(o),_=`[${je(s).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function Ok(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=_t(n,`${e}`),n}function yk(t,e){let n="";return n+=`constraint tango_p(board);
`,n=_t(n,`${e}`),n}function Lk(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=_t(n,`${e}`),n}function*go(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function Ak(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of go(n)){const s=Oe(o),c=Oe(a),u=`constraint not consecutive_p(${s}, ${c});
`;r+=u}return r}function Sk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of go(n)){const s=Oe(o),c=Oe(a),u=`constraint not ratio_p(${s}, ${c}, 2);
`;r+=u}return r}function Nk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const a=n.getRow(o.r),c=`[${je(a).join(",")}]`,u=o.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function xk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function Tk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function Dk(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=_t(n,`${e}`),n}function au(t,e){const n=t.grid,o=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const a=[];if(o)for(const c of Object.values(o)){const u=c.cells,_=new Set(u.map(f=>n.getCell(f.r,f.c)).filter(f=>!!f)),v=c.value;(e===d.ALL_V_GIVEN&&(v==="v"||v==="V")||e===d.ALL_X_GIVEN&&(v==="x"||v==="X")||e===d.ALL_XV_GIVEN)&&a.push(_)}let s="";for(const[c,u]of go(n)){if(a.find(g=>g.has(c)&&g.has(u)))continue;const v=Oe(c),f=Oe(u);if(e===d.ALL_V_GIVEN){const g=`constraint ${v} + ${f} != 5;
`;s+=g}else if(e===d.ALL_X_GIVEN){const g=`constraint ${v} + ${f} != 10;
`;s+=g}else{const g=`constraint ${v} + ${f} != 5 /\\ (${v} + ${f} != 10);
`;s+=g}}return s=_t(s,`${e}`),s}function fi(t,e){const n=[];if(e)for(const r of Object.values(e)){const o=r.cells,a=new Set(o.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));n.push(a)}return n}function Rk(t,e){const n=t.grid,o=t.localConstraints.get(d.XY_DIFFERENCES),a=fi(n,o);let s="";for(const[c,u]of go(n)){if(a.find(C=>C.has(c)&&C.has(u)))continue;const v=Oe(c),f=Oe(u);let g="";if(c.r==u.r){const I=n.getRow(c.r)[0];g=Oe(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];g=Oe(I)}if(!g)continue;const m=`constraint abs(${v} - ${f}) != ${g};
`;s+=m}return s=_t(s,`${e}`),s}function kk(t,e){const n=t.grid,r=t.localConstraints,o=r.get(d.DIFFERENCE),a=r.get(d.RATIO);let s=fi(n,o);s=[...s,...fi(n,a)];let c=[];o&&(c=Object.values(o).map(v=>v.value).map(v=>v||"1"));const u=[...new Set(c)];let _="";for(const[v,f]of go(n)){if(s.find(I=>I.has(v)&&I.has(f)))continue;const m=Oe(v),C=Oe(f);for(const I of u){const b=parseInt(I),w=`constraint abs(${m} - ${C}) != ${b};
`;_+=w}}return _=_t(_,`${e}`),_}function Mk(t,e){const n=t.grid,r=t.localConstraints,o=r.get(d.RATIO),a=r.get(d.DIFFERENCE);let s=fi(n,o);s=[...s,...fi(n,a)];let c=[];o&&(c=Object.values(o).map(v=>v.value).map(v=>v||"2"));const u=[...new Set(c)];let _="";for(const[v,f]of go(n)){if(s.find(I=>I.has(v)&&I.has(f)))continue;const m=Oe(v),C=Oe(f);for(const I of u){const b=parseInt(I),w=`constraint not ratio_p(${m}, ${C}, ${b});
`;_+=w}}return _=_t(_,`${e}`),_}function Gk(t,e){const n=t.grid,o=t.localConstraints.get(d.YIN_YANG_KROPKI),a=fi(n,o);let s="";for(const[c,u]of go(n)){if(a.find(I=>I.has(c)&&I.has(u)))continue;const v=Oe(c),f=Oe(u),g=Et(c,te.YIN_YANG),m=Et(u,te.YIN_YANG),C=`constraint not yin_yang_kropki_p(${v}, ${f}, ${g}, ${m});
`;s+=C}return s=_t(s,`${e}`),s}function Uk(t,e){const n=t.grid,o=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),a=o?Object.values(o):[];function s(u,_){return u.find(v=>v.cell.r===_.r&&v.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=s(a,u),v=_?_.directions:[],f=Oe(u),g=[We.E,We.N,We.S,We.W];for(const m of g){if(v.includes(m))continue;const C=n.getCellsInDirection(u.r,u.c,m),I=Re(C,te.YIN_YANG);c+=`constraint count(${I}, 1) != ${f};
`}}return c=_t(c,`${e}`),c}function Dd(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const o=r.cell,a=t.getCell(o.r,o.c);a&&n.add(a)}return n}function Fk(t,e){const n=t.grid,o=t.localConstraints.get(d.INDEXING_COLUMN),a=Dd(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=n.getRow(c.r),f=`[${je(_).join(",")}]`,g=c.c+1,m=`constraint not indexing_column_p(${f}, ${g});
`;s+=m}return s=_t(s,`${e}`),s}function $k(t,e){const n=t.grid,o=t.localConstraints.get(d.RADAR),a=Dd(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=Oe(c),[v,f,g,m]=Nd(n,c),C=`constraint not radar_p(${_}, ${v}, ${f}, ${g}, ${m}, 9);
`;s+=C}return s=_t(s,`${e}`),s}function Hk(t,e){const n=t.grid,o=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),a=Dd(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,g=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;s+=g}return s=_t(s,`${e}`),s}function Pk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of go(n)){const s=Oe(o),c=Oe(a),u=`nurimisaki[${o.r},${o.c}]`,_=`nurimisaki[${a.r},${a.c}]`,v=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${s} - ${c}) >= 5;
`;r+=v}return r}function Bk(t,e){const n=t.grid,o=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!o)return"";let a=`
% ${e}
`;for(const s of Object.values(o)){const u=s.cells.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v),_=Re(u,te.YIN_YANG);a+=`constraint count_unique_values(${_}) >= 2;
`}return a}function Wk(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=_t(n,`${e}`),n}function zk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=_t(n,`${e}`),n}function Yk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=_t(n,`${e}`),n}function jk(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=_t(n,`${e}`),n}function Vk(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=_t(n,`${e}`),n}function qk(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=_t(n,`${e}`),n}function Kk(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function Xk(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function Zk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function Qk(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=_t(n,`${e}`),n}function Jk(t,e){let n="";const r=t.grid;for(const o of r.getAllCells()){const a=r.getNeighboorCells(o).filter(_=>o.region!==null&&_.region===o.region),s=Et(o,te.BOARD),c=Et(o,te.YIN_YANG),u=Re(a,te.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${s}, ${c}, ${u});
`}return n=_t(n,`${e}`),n}function e3(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function t3(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function n3(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=_t(n,`${e}`),n}function r3(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=_t(n,`${e}`),n}function o3(t,e){let n="";const r=t.grid,a=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),s=a.length?Math.max(...a):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${s});
`,n=_t(n,`${e}`),n}function i3(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function a3(t,e){let n="";const a="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${a});
`,n=_t(n,`${e}`),n}function s3(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const o=n.nRows;for(let c=0;c<o;c++){const u=n.getRow(c),_=je(u),v=No(_);r+=v}r+=`
% col constraints (digits do not repeat on cols)
`;const a=n.nCols;for(let c=0;c<a;c++){const u=n.getCol(c),_=je(u),v=No(_);r+=v}if(!e.get(d.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),v=je(_),f=No(v);r+=f}}return r}function l3(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let o=`
% ${e}
`;return o+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,o}const c3=new Map([[d.POSITIVE_DIAGONAL,hk],[d.NEGATIVE_DIAGONAL,vk],[d.POSITIVE_ANTIDIAGONAL,pk],[d.NEGATIVE_ANTIDIAGONAL,mk],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,Ck],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,Ek],[d.ANTIKING,bk],[d.ANTIKNIGHT,wk],[d.ANTI_GIRAFFE,Ok],[d.DISJOINT_GROUPS,Ik],[d.TANGO,yk],[d.NONCONSECUTIVE,Ak],[d.NONRATIO,Sk],[d.ANTI_ENTROPY,Lk],[d.GLOBAL_INDEXING_COLUMN,Nk],[d.ALL_V_GIVEN,au],[d.ALL_X_GIVEN,au],[d.ALL_XV_GIVEN,au],[d.ALL_DIFFERENCES_GIVEN,kk],[d.ALL_RATIOS_GIVEN,Mk],[d.ALL_XY_DIFFERENCES_GIVEN,Rk],[d.ALL_YIN_YANG_KROPKI_GIVEN,Gk],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,Uk],[d.ALL_INDEXING_COLUMN_GIVEN,Fk],[d.ALL_RADARS_GIVEN,$k],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,Hk],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,Pk],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,Bk],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,Dk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,xk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,Tk],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,Wk],[d.CAVE_CELLS_ARE_ODD,Yk],[d.CAVE_WALLS_ARE_EVEN,jk],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,Vk],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,qk],[d.YIN_YANG_FILLOMINO_PARITY,zk],[d.TWO_SYMMETRIC_GALAXIES,Zk],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,Kk],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,Xk],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,Qk],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,Jk],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,e3],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,a3],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,t3],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,n3],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,r3],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,o3],[d.DIRECTED_PATH_IS_PARITY_LINE,i3]]);function u3(t){let e="";const n=t.globalConstraints;for(const[r,o]of n.entries()){if(!o)continue;const a=c3.get(r);if(!a)continue;const s=a(t,r);e+=s}return e}function Rd(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return je(r)}function kd(t,e){const n=e.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return`[${je(n.slice(1)).join(",")}]`}function d3(t,e,n,r){let o="";const a=Rd(e,r),s=`arrow_${n}`;if(o+=`var int: ${s};
`,o+=`% arrow pill
`,a.length===1){const u=a[0];o+=`constraint ${s} == ${u};
`}else if(a.length>1){const u=a.toReversed().map((_,v)=>`${Math.pow(10,v)}*${_}`).join(" + ");o+=`constraint ${s} == ${u};
`}else return"";const c=r.lines;o+=`% arrow lines
`;for(const u of c){const v=`constraint sum(${kd(e,u)}) == ${s};
`;o+=v}return o}function _3(t,e,n,r){let o="";const a=Rd(e,r);if(a.length===1){const s=a[0],c=r.lines;for(const u of c){const v=`constraint average_arrow_p(${kd(e,u)}, ${s});
`;o+=v}}return o}function f3(t,e,n,r){let o="";const s="["+Rd(e,r).join(",")+"]",c=r.lines;for(const u of c){const _=kd(e,u),v=`constraint bulbous_arrow_p(${s}, ${_});
`;o+=v}return o}const g3=new Map([[d.ARROW,d3],[d.AVERAGE_ARROW,_3],[d.BULBOUS_ARROW,f3]]);function h3(t,e,n,r){let o="";const a=g3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function io(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return je(r)}function Kv(t,e,n){const o=`[${io(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function hl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},o=`cage_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function Md(t,e,n,r,o){const s=`[${io(e,r).join(",")}]`,c=r.value,u=hl(t,c,n);if(!u)return"";const _=u[1];let v=u[0];return v+=`constraint ${o}(${s}, ${_});
`,v}function v3(t,e,n,r){const o=io(e,r),a=`[${o.join(",")}]`,s=r.value;if(!s)return No(o);const c=hl(t,s,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${a}, ${u});
`,_}function p3(t,e,n,r){const o=io(e,r),a=`[${o.join(",")}]`,s=r.value;if(!s)return No(o);const c=hl(t,s,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${a}, ${u});
`,_}function m3(t,e,n,r){return Md(t,e,n,r,"sum_cage_p")}function C3(t,e,n,r){return Kv(e,r,"parity_balance_cage_p")}function E3(t,e,n,r){return Kv(e,r,"sum_cage_look_and_say_p")}function I3(t,e,n,r){return Md(t,e,n,r,"divisible_killer_cage_p")}function b3(t,e,n,r){return Md(t,e,n,r,"spotlight_cage_p")}function w3(t,e,n,r){const a=`[${io(e,r).join(",")}]`,s=r.value;if(s){const c=parseInt(s);return`constraint unique_values_cage_p(${a}, ${c}, ALLOWED_DIGITS);
`}return""}function O3(t,e,n,r){const a=`[${io(e,r).join(",")}]`,s=r.value;let c="";const u=hl(t,s,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${a}) == ${m};
`}const v=r.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),f=[];for(const m of v)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!v.includes(I)&&!f.includes(I)&&f.push(I)});const g=Re(f,te.BOARD);return c+=`constraint vaulted_cage_p(${a}, ${g});
`,c}function Xv(t,e,n,r,o){const s=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),u=`[${je(s).join(",")}]`,_=Re(s,te.YIN_YANG),v=r.value;if(v){const f=parseInt(v);return`constraint ${o}(${u}, ${_}, ${f});
`}return""}function y3(t,e,n,r){return Xv(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function L3(t,e,n,r){return Xv(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function A3(t,e,n,r){const a=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),c=`[${je(a).join(",")}]`,_=`[${fl(a).join(", ")}]`,v=r.value;if(v){const f=parseInt(v);return`constraint doublers_killer_cage_p(${c}, ${_}, ${f});
`}return""}function S3(t,e,n,r){const a=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),c=`[${je(a).join(",")}]`,_=`[${fl(a).join(", ")}]`,v=r.value;if(v){const f=parseInt(v);return`constraint negators_killer_cage_p(${c}, ${_}, ${f});
`}return""}function N3(t,e){let n="";const r=Td(e);for(const o of r.values())if(!(o.length<=1))for(const[a,s]of o.flatMap((c,u)=>o.slice(u+1).map(_=>[c,_]))){const u=`[${io(t,a).join(",")}]`,v=`[${io(t,s).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${v});
`}return n}const x3=new Map([[d.KILLER_CAGE,v3],[d.INVERTED_KILLER_CAGE,p3],[d.SUM_CAGE,m3],[d.PARITY_BALANCE_CAGE,C3],[d.SUM_CAGE_LOOK_AND_SAY,E3],[d.DIVISIBLE_KILLER_CAGE,I3],[d.SPOTLIGHT_CAGE,b3],[d.UNIQUE_DIGITS_CAGE,w3],[d.VAULTED_CAGE,O3],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,y3],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,L3],[d.DOUBLERS_KILLER_CAGE,A3],[d.NEGATORS_KILLER_CAGE,S3]]);function T3(t,e,n,r){let o="";const a=x3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}else if(n===d.MULTISET_CAGE){const s=Object.values(r),c=N3(e,s);o+=c}return o}function D3(t,e,n,r){const o=e.r+.5,a=e.c+.5,s=n-o,c=r-a,u=Math.floor(n+s),_=Math.floor(r+c);return t.getCell(u,_)}function R3(t,e){const n=[],r=[],o=[];for(const a of t.getAllCells()){const s=D3(t,a,e.r,e.c);s&&!n.includes(s)?(n.push(a),r.push(s)):r.includes(a)||o.push(a)}return[n,r,o]}function k3(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,v=c+1,[f,g,m]=R3(e,_),C=Re(f,te.GALAXY_REGIONS),I=Re(g,te.GALAXY_REGIONS),b=Re(m,te.GALAXY_REGIONS);r+=`% galaxy ${v}
`,r+=`constraint galaxy_center_p(${C}, ${I}, ${b}, ${v});
`,r+=`constraint connected_region(${te.GALAXY_REGIONS}, ${v});
`;const w=u.value;if(!w)continue;const L=parseInt(w);r+=`constraint galaxy_sum_p(${te.BOARD}, ${te.GALAXY_REGIONS}, ${L}, ${v});
`}if(!n.length)return r;const o=e.nCols*e.nRows,s=`${n.length+1}..${o}`;return r+=`
constraint order_remaining_galaxies_p(${te.GALAXY_REGIONS}, ${s});
`,r}function M3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function G3(t,e,n,r){const o=r.cell,[a,s]=[o.r,o.c],c=r.value,u=M3(t,c,n);if(!u)return"";const _=u[1];let v=u[0],f=[];if(a%1===0&&s%1===0?f=sd(o).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(a%1===.5&&s%1===0||a%1===0&&s%1===.5)&&(f=cd(o).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!f.length)return"";const g=Re(f,te.BOARD),m=Re(f,te.YIN_YANG);return v+=`constraint conditional_sum_f(${g}, ${m}, 1) == ${_};
`,v}const U3=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,G3]]),F3=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,k3]]);function $3(t,e,n,r){let o="";const a=F3.get(n),s=U3.get(n);if(s)for(const[c,u]of Object.entries(r)){const _=s(t,e,c,u);o+=_}else if(a){const c=Object.values(r),u=a(t,e,c);o+=u}return o}function ah(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return je(n)}function H3(t,e){const r="["+ah(t,e.cells).join(",")+"]",a="["+ah(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${a});
`}const P3=new Map([[d.CLONE_REGION,H3]]);function B3(t,e,n,r){return gl(e,n,r,P3)}function Gd(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return je(r)}function Ud(t,e,n){const o=`[${Gd(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function Zv(t,e,n,r=""){const a=`[${Gd(t,e).join(",")}]`;let s=e.value;if(s||(s=r),s){const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}return""}function W3(t,e,n,r){const a=`[${Gd(e,r).join(",")}]`,s=r.value;if(!s)return"";const c=qv(s);if(!c)return"";let u="";for(const v of c){const f=parseInt(v);Number.isNaN(f)&&!t.hasVariable(v)&&(u+=`var int: ${v};
`,t.addVariable(v))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${a}, ${_});
`,u}function z3(t,e,n,r){return Zv(e,r,"corner_sum_p")}function Y3(t,e,n,r){return Zv(e,r,"corner_even_count_p")}function j3(t,e,n,r){return Ud(e,r,"corner_sum_of_three_equals_the_other_p")}function V3(t,e,n,r){return Ud(e,r,"equal_diagonal_differences_p")}function q3(t,e,n,r){return Ud(e,r,"product_square_p")}const K3=new Map([[d.QUADRUPLE,W3],[d.CORNER_SUM,z3],[d.CORNER_EVEN_COUNT,Y3],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,j3],[d.PRODUCT_SQUARE,q3],[d.EQUAL_DIAGONAL_DIFFERENCES,V3]]);function X3(t,e,n,r){let o="";const a=K3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function vl(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return je(r)}function Z3(t,e,n){const r=vl(t,e),[o,a]=r;return`constraint ${n}(${o}, ${a});
`}function Q3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function pl(t,e,n,r,o,a=""){var m;const s=vl(e,r),[c,u]=s,_=(m=r.value)!=null&&m.length?r.value:a,v=Q3(t,_,n);if(!v)return"";const f=v[1];let g=v[0];return g+=`constraint ${o}(${c}, ${u}, ${f});
`,g}function J3(t,e,n,r){const o=vl(e,r),[a,s]=o;return r.value==="V"||r.value==="v"?`constraint ${a} + ${s} = 5;
`:`constraint ${a} + ${s} = 10;
`}function e5(t,e,n,r){return pl(t,e,n,r,"ratio_p","2")}function t5(t,e,n,r){return pl(t,e,n,r,"abs_difference","1")}function sh(t,e,n,r){const o=vl(e,r),[a,s]=o,c=r.value;return c==="<"?`constraint ${a} < ${s};
`:c===">"?`constraint ${a} > ${s};
`:""}function n5(t,e,n,r){return pl(t,e,n,r,"edge_sum_p")}function r5(t,e,n,r){return pl(t,e,n,r,"edge_modulo_p")}function o5(t,e,n,r){return Z3(e,r,"edge_factor_p")}function i5(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),[s,c]=je(a),[u,_]=a;let v="";if(u.r==_.r){const m=e.getRow(u.r)[0];v=Oe(m)}else if(u.c==_.c){const m=e.getCol(u.c)[0];v=Oe(m)}return v?`constraint abs(${s} - ${c}) == ${v};
`:""}function a5(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),[s,c]=je(a),u=fo(a,te.YIN_YANG),[_,v]=u;return`constraint yin_yang_kropki_p(${s}, ${c}, ${_}, ${v});
`}function s5(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),[s,c]=je(a),u=fo(a,te.YIN_YANG),[_,v]=u;return`constraint yin_yang_white_kropki_p(${s}, ${c}, ${_}, ${v});
`}function l5(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),s=fo(a,te.UNKNOWN_REGIONS),[c,u]=s;return`constraint ${c} != ${u};
`}function c5(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),s=fo(a,te.SUGURU_REGIONS),[c,u]=s;return`constraint ${c} != ${u};
`}function u5(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),s=fo(a,te.CAVE_SHADING),[c,u]=s;return`constraint ${c} != ${u};
`}const d5=new Map([[d.XV,J3],[d.DIFFERENCE,t5],[d.RATIO,e5],[d.EDGE_INEQUALITY,sh],[d.ONE_WAY_DOOR,sh],[d.EDGE_SUM,n5],[d.EDGE_MODULO,r5],[d.EDGE_FACTOR,o5],[d.XY_DIFFERENCES,i5],[d.YIN_YANG_KROPKI,a5],[d.YIN_YANG_WHITE_KROPKI,s5],[d.UNKNOWN_REGION_BORDER,l5],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,c5],[d.EDGE_CAVE_ONE_OF_EACH,u5]]);function _5(t,e,n,r){let o="";const a=d5.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function xi(t,e,n=!1){let o=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return n&&(o=[...new Set(o)]),je(o)}function ft(t,e,n,r=!1){const a=`[${xi(t,e,r).join(",")}]`;return`constraint ${n}(${a});
`}function pr(t,e,n,r=""){const a=`[${xi(t,e).join(",")}]`;let s=e.value;if(s||(s=r),!s)return"";const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}function Fd(t,e,n){let o=e.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f),a=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),a=!0);const c=`[${je(o).join(",")}]`,u=e.value;if(!u)return"";const _=parseInt(u);return`constraint ${n}(${c}, ${_}, ${a});
`}function f5(t,e,n,r){return ft(e,r,"renban",!0)}function g5(t,e,n,r){return ft(e,r,"double_renban_p",!0)}function h5(t,e,n,r){return ft(e,r,"renrenbanban_p",!0)}function v5(t,e,n,r){return ft(e,r,"knabner_p",!0)}function p5(t,e,n,r){return ft(e,r,"renban_or_nabner_line_p",!0)}function m5(t,e,n,r){return ft(e,r,"out_of_order_consecutive_line_p")}function C5(t,e,n,r){const a=`[${xi(e,r).join(",")}]`,s=r.value,c=s?parseInt(s):5;return`constraint whispers(${a}, ${c});
`}function E5(t,e,n,r){return`constraint whispers(${`[${xi(e,r).join(",")}]`}, 4);
`}function I5(t,e,n,r){return ft(e,r,"strictly_increasing")}function b5(t,e,n,r){return ft(e,r,"fuzzy_thermo_p")}function w5(t,e,n,r){return ft(e,r,"increasing")}function O5(t,e,n,r){return pr(e,r,"custom_thermo_p")}function y5(t,e,n,r){return ft(e,r,"palindrome")}function L5(t,e,n,r){return pr(e,r,"sum_line_p")}function A5(t,e,n,r){return ft(e,r,"xv_line_p")}function S5(t,e,n,r){return pr(e,r,"at_least_x_line_p","10")}function N5(t,e,n,r){return pr(e,r,"product_line_p")}function x5(t,e,n,r){return pr(e,r,"maximum_adjacent_difference_line_p","2")}function T5(t,e,n,r){return ft(e,r,"adjacent_multiples_line_p")}function D5(t,e,n,r){return ft(e,r,"index_line_p")}function R5(t,e,n,r){return ft(e,r,"zipper_line_p")}function k5(t,e,n,r){return Fd(e,r,"segmented_sum_line_p")}function M5(t,e,n,r){return ft(e,r,"segmented_sum_and_renban_line_p")}function G5(t,e,n,r){return Fd(e,r,"n_consecutive_renban_line_p")}function U5(t,e,n,r){return Fd(e,r,"n_consecutive_fuzzy_sum_line_p")}function F5(t,e,n,r){const a=r.cells.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_);let s="";const c=[];for(let _=0;_<a.length;_++){const v=a[_],f=e.getRow(v.r),g=Re(f,te.BOARD),m=`cycle_${n}_${_}`;c.push(m);const C=v.c+1;s+=`var int: ${m} = cycle_order_f(${g}, ${C});
`}const u="["+c.join(",")+"]";return s+=`constraint strictly_increasing(${u});
`,s}function $5(t,e,n,r){return ft(e,r,"adjacent_differences_count_line_p")}function H5(t,e,n,r){return ft(e,r,"same_parity_line_p")}function P5(t,e,n,r){return pr(e,r,"renban_or_whispers_p","5")}function B5(t,e,n,r){return ft(e,r,"alldifferent",!0)}function W5(t,e,n,r){return ft(e,r,"repeated_digits_line_p")}function z5(t,e,n,r){return ft(e,r,"superfuzzy_arrow_p")}function Y5(t,e,n,r){return ft(e,r,"ambiguous_arrow_p",!0)}function j5(t,e,n,r){return ft(e,r,"headless_arrow_p")}function V5(t,e,n,r){return pr(e,r,"unimodular_line_p","3")}function q5(t,e,n,r){return pr(e,r,"modular_line_p","3")}function K5(t,e,n,r){return pr(e,r,"modular_or_unimodular_line_p","3")}function X5(t,e,n,r){return ft(e,r,"arithmetic_sequence_line_p")}function Z5(t,e,n,r){return ft(e,r,"odd_even_oscillator_line_p")}function Q5(t,e,n,r){return pr(e,r,"high_low_oscillator_line_p","5")}function J5(t,e,n,r){return ft(e,r,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function eM(t,e,n,r){return ft(e,r,"look_and_say_line_p",!0)}function tM(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g);function s(g){const m=[];let C=null;for(const I of g)I.r!=C?(m.push([I]),C=I.r):m[m.length-1].push(I);return m}const c=s(a);if(c.length<2)return"";const u=c[0],v=`[${je(u).join(",")}]`;let f="";for(let g=1;g<c.length;g++){const m=c[g],I=`[${je(m).join(",")}]`;f+=`constraint sum(${I}) == sum(${v});
`}return f}function nM(t,e,n,r){return ft(e,r,"between_line_p")}function rM(t,e,n,r){return ft(e,r,"tightrope_line_p")}function oM(t,e,n,r){return ft(e,r,"double_arrow_p")}function iM(t,e,n,r){return ft(e,r,"split_peas_p")}function aM(t,e,n,r){return ft(e,r,"parity_count_line_p")}function sM(t,e,n,r){return ft(e,r,"product_of_ends_equals_sum_of_line_p")}function lM(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const o of t){const a=o.region;n!==a&&(r.length&&e.push(r),r=[]),r.push(o),n=a}return r.length&&e.push(r),e}function cM(t,e,n,r){let o="";const s=r.cells.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_),c=lM(s);if(!c.length)return"";const u=`sum_line_${n}`;o+=`var int: ${u};
`;for(const _ of c){const g=`constraint sum(${`[${je(_).join(",")}]`}) == ${u};
`;o+=g}return o}function uM(t,e,n,r){return`constraint entropic_line_p(${`[${xi(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function dM(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${xi(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function _M(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),c=`[${je(a).join(",")}]`,u=Re(a,te.YIN_YANG);let _=r.value;_||(_="5");const v=parseInt(_);return`constraint yin_yang_shaded_whispers_line_p(${c}, ${u}, ${v});
`}function fM(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),c=`[${je(a).join(",")}]`,u=Re(a,te.YIN_YANG);let _=r.value;_||(_="3");const v=parseInt(_);return`constraint yin_yang_unshaded_modular_line_p(${c}, ${u}, ${v});
`}function $d(t,e,n){const o=e.cells.map(_=>t.getCell(_.r,_.c)).filter(_=>!!_),s=`[${je(o).join(",")}]`,c=Re(o,te.YIN_YANG);return`constraint ${n}(${s}, ${c});
`}function gM(t,e,n,r){return $d(e,r,"yin_yang_unshaded_entropic_line_p")}function hM(t,e,n,r){return $d(e,r,"yin_yang_indexing_line_coloring_p")}function vM(t,e,n,r){return $d(e,r,"yin_yang_region_sum_line_p")}function pM(t,e,n,r){const a=r.cells.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_),s=Re(a,te.VALUES_GRID),c=Re(a,te.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${s}, ${c});
`}function Hd(t,e,n){const o=e.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),s=`[${fl(o).join(", ")}]`;return`constraint ${n}(${s});
`}function mM(t,e,n,r){return Hd(e,r,"between_line_p")}function CM(t,e,n,r){return Hd(e,r,"double_arrow_p")}function EM(t,e,n,r){return Hd(e,r,"strictly_increasing")}const IM=new Map([[d.THERMOMETER,I5],[d.FUZZY_THERMOMETER,b5],[d.SLOW_THERMOMETER,w5],[d.CUSTOM_THERMOMETER,O5],[d.RENBAN_LINE,f5],[d.DOUBLE_RENBAN_LINE,g5],[d.RENRENBANBAN_LINE,h5],[d.NABNER_LINE,v5],[d.WHISPERS_LINE,C5],[d.DUTCH_WHISPERS,E5],[d.RENBAN_OR_WHISPERS_LINE,P5],[d.RENBAN_OR_NABNER_LINE,p5],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,m5],[d.N_CONSECUTIVE_RENBAN_LINE,G5],[d.PALINDROME,y5],[d.SUM_LINE,L5],[d.PRODUCT_LINE,N5],[d.XV_LINE,A5],[d.AT_LEAST_X_LINE,S5],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,x5],[d.SAME_PARITY_LINE,H5],[d.ADJACENT_MULTIPLES_LINE,T5],[d.ADJACENT_DIFFERENCES_COUNT_LINE,$5],[d.LOOK_AND_SAY_LINE,eM],[d.ROW_SUM_LINE,tM],[d.INDEX_LINE,D5],[d.ZIPPER_LINE,R5],[d.SEGMENTED_SUM_LINE,k5],[d.SEGMENTED_SUM_AND_RENBAN_LINE,M5],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,U5],[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,J5],[d.SUPERFUZZY_ARROW,z5],[d.AMBIGUOUS_ARROW,Y5],[d.HEADLESS_ARROW,j5],[d.ARITHMETIC_SEQUENCE_LINE,X5],[d.ODD_EVEN_OSCILLATOR_LINE,Z5],[d.HIGH_LOW_OSCILLATOR_LINE,Q5],[d.UNIQUE_VALUES_LINE,B5],[d.REPEATED_DIGITS_LINE,W5],[d.UNIMODULAR_LINE,V5],[d.MODULAR_LINE,q5],[d.MODULAR_OR_UNIMODULAR_LINE,K5],[d.REGION_SUM_LINE,cM],[d.ENTROPIC_LINE,uM],[d.ENTROPIC_OR_MODULAR_LINE,dM],[d.ROW_CYCLE_THERMOMETER,F5],[d.BETWEEN_LINE,nM],[d.TIGHTROPE_LINE,rM],[d.DOUBLE_ARROW_LINE,oM],[d.SPLIT_PEAS,iM],[d.PARITY_COUNT_LINE,aM],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,sM],[d.DOUBLERS_THERMOMETER,EM],[d.DOUBLERS_BETWEEN_LINE,mM],[d.DOUBLERS_DOUBLE_ARROW_LINE,CM],[d.YIN_YANG_SHADED_WHISPERS_LINE,_M],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,gM],[d.YIN_YANG_UNSHADED_MODULAR_LINE,fM],[d.YIN_YANG_REGION_SUM_LINE,vM],[d.YIN_YANG_INDEXING_LINE_COLORING,hM],[d.GOLDILOCKS_ZONE_REGION_SUM,pM]]);function bM(t,e,n,r){let o="";const a=IM.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function ml(t,e){const n=e.cell,r=e.direction,o=t.getCellsInDirection(n.r,n.c,r);return je(o)}function ka(t,e,n,r){const o={allow_var:!0,allow_interval:!0,allow_int_list:!1};let a="";return(!r||r.outside)&&(a=`R${n.r}C${n.c}`,a=a.replace("-","m")),e||(e=a),t.getOrSetSharedVar(e,a,o)}function Jn(t,e,n,r){const o=n.cell,a=e.getCell(o.r,o.c),c=`[${ml(e,n).join(",")}]`,u=n.value,_=ka(t,u,o,a);if(!_)return"";const v=_[1];let f=_[0];return f+=`constraint ${r}(${c}, ${v});
`,f}function wM(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),c=`[${ml(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),f=Math.max(..._),g=ka(t,u,o,a);if(!g)return"";const m=g[1];let C=g[0];return C+=`constraint sandwich_sum_p(${c}, ${m}, ${v}, ${f});
`,C}function OM(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),c=`[${ml(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),f=Math.max(..._),g=ka(t,u,o,a);if(!g)return"";const m=g[1];let C=g[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return C+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${v}, ${f});
`,C+=`var bool: ${b} = x_sum_p(${c}, ${m});
`,C+=`constraint 'xor'(${I}, ${b});
`,C}function yM(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),s=ml(e,r),c=`[${s.join(",")}]`,u=s[0],_=r.value,v=ka(t,_,o,a);if(!v)return"";const f=v[1];let g=v[0];return g+=`constraint x_index_p(${c}, ${u}, ${f});
`,g}function LM(t,e,n,r){return Jn(t,e,r,"x_sum_p")}function AM(t,e,n,r){return Jn(t,e,r,"shortsighted_x_sum_p")}function SM(t,e,n,r){return Jn(t,e,r,"broken_x_sum_p")}function NM(t,e,n,r){return Jn(t,e,r,"shifted_x_sum_p")}function xM(t,e,n,r){return Jn(t,e,r,"skyscrapers_p")}function TM(t,e,n,r){return Jn(t,e,r,"x_sum_skyscrapers_p")}function DM(t,e,n,r){return Jn(t,e,r,"battlefield_p")}function RM(t,e,n,r){return Jn(t,e,r,"rising_streak_p")}function kM(t,e,n,r){return Jn(t,e,r,"outside_consecutive_sum_p")}function MM(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${je(s).join(",")}]`,_=Re(s,te.CELL_CENTER_LOOP),v=r.value;if(v){const f=parseInt(v);return`constraint loopwhiches_p(${u}, ${_}, ${f});
`}return""}function GM(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),s=r.direction,c=e.getCellsInDirection(o.r,o.c,s),u=Re(c,te.BOARD),_=Re(c,te.UNKNOWN_REGIONS),v=r.value,f=ka(t,v,o,a);if(!f)return"";const g=f[1];let m=f[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${g});
`,m}function UM(t,e,n,r){return Jn(t,e,r,"little_killer_sum_p")}function FM(t,e,n,r){return Jn(t,e,r,"little_killer_product_p")}function $M(t,e,n,r){return Jn(t,e,r,"x_omit_little_killer_sum_p")}function HM(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${je(s).join(",")}]`,_=Re(s,te.YIN_YANG),v=r.value;if(v){const f=parseInt(v);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${u}, ${_}, ${f});
`}return""}function PM(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${fl(s).join(", ")}]`,_=r.value;if(_){const v=parseInt(_);return`constraint little_killer_sum_p(${u}, ${v});
`}return""}const BM=new Map([[d.SANDWICH_SUM,wM],[d.X_SUM,LM],[d.SHORTSIGHTED_X_SUM,AM],[d.BROKEN_X_SUM,SM],[d.SHIFTED_X_SUM,NM],[d.SKYSCRAPERS,xM],[d.X_SUM_SKYSCRAPERS,TM],[d.X_INDEX,yM],[d.BATTLEFIELD,DM],[d.SANDWICH_SUM_XOR_X_SUM,OM],[d.RISING_STREAK,RM],[d.OUTSIDE_CONSECUTIVE_SUM,kM],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,HM],[d.LOOPWICHES,MM],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,GM],[d.LITTLE_KILLER_SUM,UM],[d.LITTLE_KILLER_PRODUCT,FM],[d.X_OMIT_LITTLE_KILLER_SUM,$M],[d.NEGATORS_LITTLE_KILLER_SUM,PM]]);function WM(t,e,n,r){let o="";const a=BM.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function zM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction;let a=t.getCellsInDirection(r.r,r.c,o);a=[r,...a];const s=Re(a,te.SASHIGANE),c=Re(a,te.SASHIGANE_BENDS),u=Oe(r),_=Et(r,te.SASHIGANE);let v=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${s}, ${c});
`;return v+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,v}function YM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction,a=t.getCellsInDirection(r.r,r.c,o),c="["+je(a).join(",")+"]",u=Re(a,te.CELL_CENTER_LOOP),_=Oe(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const jM=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,zM],[d.THERMO_SIGHTLINE_LOOP_ARROW,YM]]);function VM(t,e,n,r){return gl(e,n,r,jM)}function Qv(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o);return`constraint ${n}(${a});
`}function qM(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`cell_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function Jv(t,e,n,r=""){const o=e.cell,a=t.getCell(o.r,o.c);if(!a)return"";const s=Oe(a);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${s}, ${u});
`}function KM(t,e,n,r){return Qv(e,r,"odd_p")}function XM(t,e,n,r){return Qv(e,r,"even_p")}function ZM(t,e,n,r){return Jv(e,r,"low_digit_p","5")}function QM(t,e,n,r){return Jv(e,r,"high_digit_p","5")}function ep(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o),s=t.getNeighboorCells(o),c=Re(s,te.BOARD);return`constraint ${n}(${c}) == ${a};
`}function JM(t,e,n,r){return ep(e,r,"odd_count")}function eG(t,e,n,r){return ep(e,r,"even_count")}function tG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a);c.push(a);const u=Re(c,te.BOARD);return`constraint count_same_parity_p(${s}, ${u});
`}function nG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getOrthogonallyAdjacentCells(a);return`constraint sum_p(${Re(c,te.BOARD)}, ${s});
`}function rG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getDiagonallyAdjacentCells(a);return`constraint sum_p(${Re(c,te.BOARD)}, ${s});
`}function oG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=e.getRow(a.r),c=Re(s,te.BOARD),u=a.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function iG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=e.getCol(a.c),c=Re(s,te.BOARD),u=a.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function aG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=a.r+1,u=a.c+1;if(a.region!==null){const v=a.region+1;return`constraint ${s} == ${c} \\/ ${s} == ${u} \\/ ${s} == ${v};
`}return`constraint ${s} == ${c} \\/ ${s} == ${u};
`}function sG(t,e,n,r){const o=r.cell;if(!e.getCell(o.r,o.c))return"";const s=e.getCell(o.r-1,o.c),c=e.getCell(o.r+1,o.c),u=e.getCell(o.r,o.c-1),_=e.getCell(o.r,o.c+1);if(!s||!c||!u||!_)return"";const v=Oe(s),f=Oe(c),g=Oe(u),m=Oe(_);return`constraint groups_opposite_parity_p([${v},${f}], [${g},${m}]);
`}function Pd(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o),[s,c,u,_]=Nd(t,o);return`constraint ${n}(${a}, ${s}, ${c}, ${u}, ${_});
`}function lG(t,e,n,r){return Pd(e,r,"is_watchtower_p")}function cG(t,e,n,r){return Pd(e,r,"is_not_watchtower_p")}function uG(t,e,n,r){return Pd(e,r,"farsight_p")}function dG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),[c,u,_,v]=Nd(e,a);return`constraint radar_p(${s}, ${c}, ${u}, ${_}, ${v}, 9);
`}function _G(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u="["+je(c).join(",")+"]",_=e.getCol(a.c),v="["+je(_).join(",")+"]",[f,g]=[a.r+1,a.c+1];return`constraint sandwich_row_col_count_p(${u}, ${v}, ${f}, ${g}, ${s});
`}function tp(t,e,n){const r=Object.values(e);let o="";const a=r.map(c=>c.cell),s=new Set(a.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const v=Oe(_),f=t.getOrthogonallyAdjacentCells(_).filter(C=>!s.has(C)),g=Re(f,te.BOARD),m=`constraint ${n}(${g}, ${v});
`;o+=m}return o}function fG(t,e,n){return tp(e,n,"maximum_p")}function gG(t,e,n){return tp(e,n,"minimum_p")}function hG(t,e,n){const r=Object.values(n);let o="";const a=r.map(_=>_.cell),s=new Set(a.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${je([...s]).join(`,
	`)}`;return o+=`array[int] of var int: counting_circles = [
	${u}
];
`,o+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,o}function vG(t,e,n){const r=Object.values(n);let o="";const a=r.map(f=>f.cell),s=new Set(a.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f)),u=`${je([...s]).join(`,
	`)}`,v=`${fo([...s],te.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;o+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${te.COUNTING_CIRCLES_COLORS};
`,o+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,o+=`array[int] of var int: counting_circles_colors = [
	${v}
];
`,o+=`constraint colored_counting_circles_adjacent_p(${te.COUNTING_CIRCLES_COLORS});
`,o+=`
% cells without circles
`;for(const f of e.getAllCells()){if(s.has(f))continue;const g=Et(f,te.COUNTING_CIRCLES_COLORS);o+=`constraint ${g} == 0;
`}for(const f of r){const g=f.cell,m=e.getCell(g.r,g.c);if(!m)continue;const C=Oe(m),I=Et(m,te.COUNTING_CIRCLES_COLORS),b=f.value;b?o+=`constraint ${I} == ${b};
`:o+=`constraint ${I} != 0;
`,o+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${C}, ${I}) == ${C};
`}return o+=`
`,o}function pG(t,e,n){const r=Object.values(n);let o="";const a=r.map(_=>_.cell),s=new Set(a.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${je([...s]).join(`,
	`)}`;return o+=`array[int] of var int: unique_cells = [
	${u}
];
`,o+=`constraint alldifferent(unique_cells);
`,o}function mG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint yin_yang_minesweeper_p(${Re(u,te.YIN_YANG)}, ${s});
`}function Bd(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o),s=Sd(t,o),c=[];for(const v of s){const f=Re(v,te.YIN_YANG);c.push(f)}const u=Et(o,te.YIN_YANG);return`constraint ${n}(${a}, ${u}, ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]});
`}function CG(t,e,n,r){return Bd(e,r,"yin_yang_seen_unshaded_p")}function EG(t,e,n,r){return Bd(e,r,"yin_yang_seen_shaded_p")}function IG(t,e,n,r){return Bd(e,r,"yin_yang_seen_same_shade_p")}function bG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=Et(a,te.YIN_YANG),u=e.getOrthogonallyAdjacentCells(a),_=Re(u,te.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${s}, ${c}, ${_});
`}function wG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a);return`constraint count(${Re(c,te.YIN_YANG)}, 1) == ${s};
`}function OG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=`two_contiguous_regions[${a.r},${a.c}]`,u=e.getRow(a.r),_=e.getCol(a.c),v="["+u.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]",f="["+_.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]";return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${v}, ${f}, ${s}, ${c});
`}function yG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u=e.getCol(a.c),_="["+c.map(g=>`unknown_regions[${g.r},${g.c}]`).join(", ")+"]",v="["+u.map(g=>`unknown_regions[${g.r},${g.c}]`).join(", ")+"]";return`constraint unknown_regions_seen_region_border_count_p(${_}, ${v}, ${s});
`}function LG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=`nurimisaki[${a.r},${a.c}]`;let v=`constraint nurimisaki_unshaded_endpoint_p(${"["+e.getOrthogonallyAdjacentCells(a).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${c});
`;const f=Sd(e,a),g=[];for(const m of f){const C="["+m.map(I=>`nurimisaki[${I.r}, ${I.c}]`).join(", ")+"]";g.push(C)}return v+=`constraint nurimisaki_count_uninterrupted_unshaded_p(${s}, ${c}, ${g[0]}, ${g[1]}, ${g[2]}, ${g[3]});
`,v}function AG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=Et(a,te.SASHIGANE),u=Et(a,te.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${s}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function SG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Et(a,te.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${s}) == ${u};
`}function NG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint ${Et(a,te.CELL_CENTER_LOOP)} == 1;
`:""}function xG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint ${Et(a,te.CELL_CENTER_LOOP)} == 0;
`:""}function TG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint sum(${Re(u,te.CELL_CENTER_LOOP)}) == ${s};
`}function DG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=Et(a,te.CAVE_SHADING),u=Sd(e,a),_=[];for(const f of u){const g=Re(f,te.CAVE_SHADING);_.push(g)}return`constraint cave_clue_p(${s}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function RG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const _=Oe(a),v=Et(a,te.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const f=e.getNeighboorCells(a),g=Re(f,te.BOARD),m=Re(f,te.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${g}, ${m}, ${v});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const C=e.getCellsByKnightMove(a),I=Re(C,te.BOARD),b=Re(C,te.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${v});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const w=[We.NE,We.NW,We.SE,We.SW],L=[];for(const F of w)e.getCellsInDirection(a.r,a.c,F).forEach(B=>L.push(B));const R=Re(L,te.BOARD),M=Re(L,te.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${R}, ${M}, ${v});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function kG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const _=Oe(a),v=Et(a,te.UNKNOWN_REGIONS),f=e.getOrthogonallyAdjacentCells(a),g=Re(f,te.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${g}, ${v}) >= ${c};
`;const m=[We.N,We.S,We.E,We.W],C=[];for(const I of m){const b=e.getCellsInDirection(a.r,a.c,I);if(!b.length)continue;const w=Re(b,te.BOARD),L=Re(b,te.UNKNOWN_REGIONS),R=`in_arrow_${n}_${I}`,M=`in_arrow_${n}_${I}[1]`;C.push(M),u+=`array[index_set(${w})] of var bool: ${R};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${L}, ${R}, ${_}, ${v});
`}return u+=`constraint sum([${C.join(",")}]) == ${c};
`,u}function MG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint dpath_source == ${a.r*e.nCols+a.c+1};
`:""}function GG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint dpath_target == ${a.r*e.nCols+a.c+1};
`:""}function UG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint connect_four_red_p(${Et(a,te.CONNECT_FOUR)});
`:""}function FG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint connect_four_yellow_p(${Et(a,te.CONNECT_FOUR)});
`:""}function $G(t,e,n){let r="",o=0;for(const[a,s]of Object.entries(n)){const c=s.cell,u=e.getCell(c.r,c.c);if(!u)continue;const _=s.value;if(!_)continue;const v=qM(t,_,a);if(!v)continue;const f=v[1];r+=v[0];const g=Et(u,te.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${te.BOARD}, ${te.NURIKABE_REGIONS}, ${g}, ${f});
`,o+=1}return r+=`constraint count_unique_values(array1d(${te.NURIKABE_REGIONS})) == ${o+1};
`,r}function HG(t,e,n){let r="";const o=Td(Object.values(n));for(const u of o.values())if(!(u.length<=1))for(const[_,v]of u.flatMap((f,g)=>u.slice(g+1).map(m=>[f,m]))){const f=_.cell,g=v.cell,m=e.getCell(f.r,f.c),C=e.getCell(g.r,g.c);if(!m||!C)continue;const I=Et(m,te.BOARD),b=Et(C,te.BOARD);r+=`constraint ${I} == ${b};
`}const s=[...o.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=Re(s,te.BOARD);return r+=`constraint alldifferent(${c});
`,r}const PG=new Map([[d.ODD,KM],[d.EVEN,XM],[d.LOW_DIGIT,ZM],[d.HIGH_DIGIT,QM],[d.ODD_MINESWEEPER,JM],[d.EVEN_MINESWEEPER,eG],[d.DIAGONALLY_ADJACENT_SUM,rG],[d.ORTHOGONAL_SUM,nG],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,tG],[d.FRIENDLY_CELL,aG],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,sG],[d.WATCHTOWER,lG],[d.NOT_WATCHTOWER,cG],[d.FARSIGHT,uG],[d.RADAR,dG],[d.INDEXING_COLUMN,oG],[d.INDEXING_ROW,iG],[d.SANDWICH_ROW_COL_COUNT,_G],[d.YIN_YANG_MINESWEEPER,mG],[d.YIN_YANG_SEEN_UNSHADED_CELLS,CG],[d.YIN_YANG_SEEN_SHADED_CELLS,EG],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,IG],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,bG],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,wG],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,OG],[d.SEEN_REGION_BORDERS_COUNT,yG],[d.NURIMISAKI_UNSHADED_ENDPOINTS,LG],[d.SASHIGANE_BEND_REGION_COUNT,AG],[d.SASHIGANE_REGION_SUM,SG],[d.CELL_ON_THE_LOOP,NG],[d.CELL_NOT_ON_THE_LOOP,xG],[d.COUNT_LOOP_NEIGHBOUR_CELLS,TG],[d.CAVE_CLUE,DG],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,RG],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,kG],[d.DIRECTED_PATH_START,MG],[d.DIRECTED_PATH_END,GG],[d.CONENCT_FOUR_RED,UG],[d.CONNECT_FOUR_YELLOW,FG]]),BG=new Map([[d.MAXIMUM,fG],[d.MINIMUM,gG],[d.COUNTING_CIRCLES,hG],[d.COLORED_COUNTING_CIRCLES,vG],[d.UNIQUE_CELLS,pG],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,$G],[d.TELEPORT,HG]]);function WG(t,e,n,r){let o="";const a=PG.get(n),s=BG.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);o+=_}else if(s){const c=s(t,e,r);o+=c}return o}function zG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Et(r,te.UNKNOWN_REGIONS),s=e.directions,c=[];for(const v of s){const f=t.getCellsInDirection(r.r,r.c,v),g=Re(f,te.UNKNOWN_REGIONS);c.push(g)}return`constraint ${c.map(v=>`count_different(${v}, ${a})`).join(" + ")} == ${o};
`}function YG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Et(r,te.YIN_YANG),s=e.directions;let c="";for(const u of s){const _=t.getCellsInDirection(r.r,r.c,u),f="["+je(_).join(",")+"]",g=Re(_,te.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${a}, ${f}, ${g}) == ${o};
`}return c}function jG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),_=Re(u,te.YIN_YANG);s+=`constraint count(${_}, 1) == ${o};
`}return s}function VG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Et(r,te.YIN_YANG),s=e.directions,c=[];for(const _ of s){const v=t.getCellsInDirection(r.r,r.c,_),f=Re(v,te.YIN_YANG),g=Re(v,te.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${a}, ${f}, ${g})`)}return c.length?`constraint ${c.join(" + ")} == ${o};
`:""}function qG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions,s=[];for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),f=`count(${Re(_,te.NURIKABE_SHADING)}, 1)`;s.push(f)}return`constraint ${s.join(" + ")} = ${o};
`}function KG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions,s=[];for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),f=`count_loop_vars_f(${Re(_,te.CELL_CENTER_LOOP)})`;s.push(f)}return s.length?`constraint ${s.join(" + ")} = ${o};
`:""}function XG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Et(r,te.GALAXY_REGIONS),s=e.directions,c=[];for(const _ of s){const v=t.getCellsInDirection(r.r,r.c,_),m=`count(${"["+fo(v,te.GALAXY_REGIONS).join(",")+"]"}, ${a})`;c.push(m)}return c.length?`constraint ${c.join(" + ")} = ${o};
`:""}function ZG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),v="["+je(u).join(",")+"]";s+=`constraint hot_arrows_p(${v}, ${o});
`}return s}function QG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),v="["+je(u).join(",")+"]";s+=`constraint cold_arrows_p(${v}, ${o});
`}return s}function JG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Et(r,te.CONNECT_FOUR),s=e.directions,c=[];for(const v of s){const f=t.getCellsInDirection(r.r,r.c,v);c.push(...f)}return c.length===0?"":`constraint count(${Re(c,te.CONNECT_FOUR)}, ${a}) == ${o};
`}const e8=new Map([[d.HOT_ARROWS,ZG],[d.COLD_ARROWS,QG],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,zG],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,YG],[d.LOOP_CELL_COUNT_ARROWS,KG],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,VG],[d.YIN_YANG_COUNT_SHADED_CELLS,jG],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,XG],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,qG],[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,JG]]);function t8(t,e,n,r){return gl(e,n,r,e8)}function n8(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function r8(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function o8(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}const i8=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,n8],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,r8],[d.FORBIDDEN_KNIGHT_SUM,o8]]);function a8(t,e,n,r){return gl(e,n,r,i8)}const s8=[$3,WG,VM,t8,_5,X3,bM,h3,T3,WM,B3,a8];function l8(t,e){let n="";const r=t.localConstraints,o=t.grid;for(const[a,s]of r.entries())for(const c of s8){let u=c(e,o,a,s);u=_t(u,`${a}`),n+=u}return n}function c8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,a+=`constraint yin_yang_p(yin_yang);
`,a}function u8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,a+=`constraint nurimisaki_p(nurimisaki);
`,a}function d8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,a+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,a+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,a}function _8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`
% Two Contiguous Regions
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,a+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,a}function f8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const a=Math.max(r.nCols,r.nRows);let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..${a-1}: unknown_regions;
`,s+=`constraint unknown_sudoku_regions_p(unknown_regions, ${a});
`,s+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${a});
`,s}function g8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,a+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,a+=`constraint sashigane_adjacency_p(sashigane);
`,a+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,a+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,a+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,a}function h8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,a+=`constraint cell_center_loop_p(cell_center_loop, true);
`,a}function v8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,a+=`constraint cell_center_loop_p(cell_center_loop, false);
`,a}function p8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,a+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,a+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,a}function m8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,a+=`constraint cell_center_loop_p(cell_center_loop, false);
`,a+=`constraint modular_loop_p(board, cell_center_loop);
`,a}function da(t,e,n,r){const o=t.grid;let a="";a+=`% Exactly ${e} per row 
`;const s=o.nRows;for(let v=0;v<s;v++){const f=o.getRow(v),g=r(f);a+=`constraint count_eq(${g}, ${n}, ${e});
`}a+=`
% Exactly ${e} per column 
`;const c=o.nCols;for(let v=0;v<c;v++){const f=o.getCol(v),g=r(f);a+=`constraint count_eq(${g}, ${n}, ${e});
`}if(!t.globalConstraints.get(d.UNKNOWN_REGIONS)){a+=`
% Exactly ${e} per region 
`;const v=o.getUsedRegions();for(const f of v){const g=o.getRegion(f),m=r(g);a+=`constraint count_eq(${m}, ${n}, ${e});
`}}return a}function C8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,a+=da(n,1,!0,s=>Re(s,te.DOUBLERS)),a+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,a}function E8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a="negators_grid";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,s+=da(n,1,!0,c=>Re(c,te.NEGATORS)),s+=`
constraint one_of_each_digit_p(board, ${a}, ALLOWED_DIGITS);
`,s+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${a});
`,s}function I8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a="fillomino_area";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,s+=`constraint fillomino_p(board, ${a});
`,s}function b8(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=te.CAVE_SHADING,s=te.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,c+=`constraint cave_p(${a}, ${s});
`,c}function w8(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=te.CAVE_SHADING,s=te.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${a}, ${s}, ${c});
`,u+=`constraint renban_caves_p(${te.BOARD}, ${c});
`,u}function O8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=te.GALAXY_REGIONS,s=te.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${a};
`,u+=`constraint galaxy_restrict_numbering_p(${a});
`,u+=`array[0..${c}] of var 0..${c}: ${s};
`,u+=`constraint galaxy_sizes_p(${a}, ${s});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${a}, ${s});
`,u+=`constraint gallaxy_connected_regions_p(${a});
`,u}function y8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,a+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,a}function L8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint goldilocks_zone_p(goldilocks_regions);
`,a+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,a}function A8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=ih.size;let s="";s+=`array[ROW_IDXS, COL_IDXS] of var 0..${a}: tilling_regions;
`,s+=`array[ROW_IDXS, COL_IDXS] of var 0..${a}: tilling_placing_grid;
`,s+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[c,u]of ih.entries()){const _=u.length,v=u[0].length,f=`pentomino_${c}`;s+=`array[1..${_}, 1..${v}] of 0..1: ${f} = ${xd(u)};
`,s+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${f}, ${c});
`}return s}function S8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=te.LITS_SHADING,s=te.LITS_REGIONS;let c="";c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${s};
`,c+=`constraint lits_shading_p(${a});
`,c+=`constraint lits_shading_ids_p(${a}, ${s});
`,c+=`constraint lits_region_and_ids_p(${te.BOARD_REGIONS}, ${s});
`,c+=`constraint lits_tetromino_shapes_p(${s});
`;const u=r.getUsedRegions();u.size&&(c+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const _ of u){const v=r.getRegion(_),g=`constraint count_eq(${Re(v,te.LITS_SHADING)}, 1, 4);
`;c+=g}return c}function N8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(v=>v.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=te.LITS_SHADING,s=te.LITS_REGIONS,c=te.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${s};
`,u+=`constraint lits_shading_p(${a});
`,u+=`constraint lits_shading_ids_p(${a}, ${s});
`,u+=`constraint lits_region_and_ids_p(${c}, ${s});
`,u+=`constraint lits_4_per_region_p(${c}, ${a});
`,u+=`constraint lits_tetromino_shapes_p(${s});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const v of _){const f=r.getRegion(v),m=`constraint count_eq(${Re(f,te.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function x8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=te.LITS_SHADING,s=te.STAR_BATTLE,c=te.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,u+=da(n,2,1,_=>Re(_,te.STAR_BATTLE)),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${s});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=da(n,1,1,_=>Re(_,te.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`
% 1 black star per row, column, region
`,u+=da(n,1,2,_=>Re(_,te.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`constraint black_and_white_star_battle_p(${s}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${a}, ${c});
`,u}function Ft(t,e,n){return t*n+e+1}function T8(t){const e=t.grid;function n(c,u){const _=[],v=Ft(c.r,c.c,e.nCols);for(let f=-1;f<=1;f++){const g=Ft(u.r+f,u.c,e.nCols);_.push([v,g]),_.push([g,v])}return _}function r(c,u){const _=[],v=Ft(c.r,c.c,e.nCols);for(let f=-1;f<=1;f++){const g=Ft(u.r,u.c+f,e.nCols);_.push([v,g]),_.push([g,v])}return _}const o=[],s=t.localConstraints.get(d.MAZE_WALL);if(s)for(const c of Object.values(s)){const u=c.coords;if(u.length===1){const _=u[0],f=sd(_).map(C=>e.getCell(C.r,C.c)).filter(C=>C!==void 0);let g=Ft(f[0].r,f[0].c,e.nCols),m=Ft(f[3].r,f[3].c,e.nCols);o.push([g,m]),o.push([m,g]),g=Ft(f[1].r,f[1].c,e.nCols),m=Ft(f[2].r,f[2].c,e.nCols),o.push([g,m]),o.push([m,g])}for(let _=0;_<u.length-1;_++){const v=hO(qh(u[_],u[_+1]),.5),g=cd(v).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(g.length!==2)continue;const[m,C]=g;if(m.r===C.r){let I=n(m,C);o.push(...I),I=n(C,m),o.push(...I)}else if(m.c===C.c){let I=r(m,C);o.push(...I),I=r(C,m),o.push(...I)}}}return o}function D8(t){const e=t.grid,n=[],o=t.localConstraints.get(d.ONE_WAY_DOOR);if(o)for(const a of Object.values(o)){const c=a.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,_]=c,v=a.value,f=Ft(u.r,u.c,e.nCols),g=Ft(_.r,_.c,e.nCols);v==="<"?n.push([f,g]):v===">"&&n.push([g,f])}return n}function R8(t){const e=[];for(const n of t.getAllCells()){const r=Ft(n.r,n.c,t.nCols),o=t.getNeighboorCells(n);for(const a of o){const s=Ft(a.r,a.c,t.nCols);e.push([r,s])}}return e}function k8(t){const e=t.grid,n=[],r=[],a=t.localConstraints.get(d.TELEPORT),s=a?Object.values(a):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(a){const _=Td(s);let v=1;for(const f of _.values())if(!(f.length<=1)){for(const[g,m]of f.flatMap((C,I)=>f.slice(I+1).map(b=>[C,b]))){const C=Ft(g.cell.r,g.cell.c,e.nCols),I=Ft(m.cell.r,m.cell.c,e.nCols);n.push([C,I]),n.push([I,C]),u[g.cell.r][g.cell.c]=v,u[m.cell.r][m.cell.c]=v}for(const g of f){const m=Ft(g.cell.r,g.cell.c,e.nCols);r.push(m)}v++}c=_.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function M8(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(w=>w.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="",s=R8(r);const c=T8(n),u=D8(n);c.push(...u);const _=n.localConstraints;s=s.filter(w=>!c.some(L=>w[0]===L[0]&&w[1]===L[1]));const v=k8(n);if(v.tp_edges.length){s.push(...v.tp_edges);const w=xd(v.tp_arr),L=v.tp_count;a+=`
% teleports grid
`,a+=`array[ROW_IDXS, COL_IDXS] of 0..${L}: teleports = array2d(ROW_IDXS, COL_IDXS, ${w});
`}t.edge_list=s,console.log(s);const f=r.nRows*r.nCols,g=s.length,m="["+s.map(w=>w[0]).join(",")+"]",C="["+s.map(w=>w[1]).join(",")+"]";a+=`array[int] of int: dpath_from = ${m};
`,a+=`array[int] of int: dpath_to = ${C};
`,a+=`var 1..${f}: dpath_source;
`,a+=`var 1..${f}: dpath_target;
`,a+=`array[1..${f}] of var bool: dpath_ns;
`,a+=`array[1..${g}] of var bool: dpath_es;
`,a+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,a+=`
% Direct Path no crossings
`;for(let w=0;w<r.nRows-1;w++)for(let L=0;L<r.nCols-1;L++){const R=r.getCell(w,L),M=r.getCell(w,L+1),F=r.getCell(w+1,L),P=r.getCell(w+1,L+1);if(!R||!M||!F||!P)continue;const B=Ft(R.r,R.c,r.nCols),K=Ft(M.r,M.c,r.nCols),J=Ft(F.r,F.c,r.nCols),ce=Ft(P.r,P.c,r.nCols),re=[[B,ce],[ce,B],[K,J],[J,K]].map(pe=>s.findIndex(me=>pe[0]===me[0]&&pe[1]===me[1])).filter(pe=>pe!==-1);if(re.length){const pe=re.map(me=>`dpath_es[${me+1}]`).join(",");a+=`constraint sum([${pe}]) <= 1;
`}}const I=_.get(d.TELEPORT),b=I?Object.values(I):[];if(v.tp_count>0){a+=`
% At most 1 edge per teleporter
`;for(const w of b){const L=w.cell,R=r.getCell(L.r,L.c);if(!R)continue;const M=r.getNeighboorCells(R),F=Ft(R.r,R.c,r.nCols),P=[];for(const K of M){if(b.some(Q=>Q.cell.r===K.r&&Q.cell.c==K.c&&Q.value===w.value))continue;const ce=Ft(K.r,K.c,r.nCols);P.push([F,ce]),P.push([ce,F])}const B=P.map(K=>s.findIndex(J=>K[0]===J[0]&&K[1]===J[1])).filter(K=>K!==-1);if(B.length){const K=B.map(J=>`dpath_es[${J+1}]`).join(",");a+=`constraint sum([${K}]) <= 1;
`}}}return a}function G8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a="suguru_regions";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,s+=`constraint chaos_construction_suguru_p(board, ${a});
`,s}function U8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a="connect_four";let s=`% 1 - Red, 2 - Yellow
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${a};
`,s}function F8(t,e){let n="";return n+=`constraint connect_four_draw_p(${te.CONNECT_FOUR});
`,n}function $8(t,e){let n="";return n+=`constraint connect_four_adjacent_reds_different_parity_p(${te.BOARD}, ${te.CONNECT_FOUR});
`,n}function H8(t,e){let n="";return n+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${te.BOARD}, ${te.CONNECT_FOUR}, 3);
`,n}const P8=new Map([[d.FILLOMINO,I8],[d.CAVE,b8],[d.GALAXIES,O8],[d.YIN_YANG,c8],[d.NURIMISAKI,u8],[d.NURIKABE,d8],[d.TWO_CONTIGUOUS_REGIONS,_8],[d.UNKNOWN_REGIONS,f8],[d.SASHIGANE,g8],[d.CELL_CENTER_LOOP_NO_TOUCHING,h8],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,v8],[d.NOT_LOOP_SIZED_REGIONS,p8],[d.MODULAR_LOOP,m8],[d.DOUBLERS,C8],[d.NEGATORS,E8],[d.GOLDILOCKS_ZONE,L8],[d.NEXUS,y8],[d.PENTOMINO_TILLING,A8],[d.LITS,S8],[d.CAVE_LITS,N8],[d.LITS_BLACK_WHITE_STAR_BATTLE,x8],[d.RENBAN_CAVES,w8],[d.MAZE_DIRECTED_PATH,M8],[d.CHAOS_CONSTRUCTION_SUGURU,G8],[d.CONNECT_FOUR,U8],[d.CONNECT_FOUR_DRAW,F8],[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,$8],[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,H8]]);function B8(t){let e="";const r=t.puzzle.globalConstraints;for(const[o,a]of r.entries()){if(!a)continue;const s=P8.get(o);if(!s)continue;let c=s(t,o);c=_t(c,`${o}`),e+=c}return e}function W8(){return`
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

`}function z8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const a=`constraint ${Oe(r)} = ${r.value};
`;n+=a}return n.length&&(n=`
% Given Digits
`+n),n}function np(t){const e=t.grid;let n=t.valid_digits;const r=new _k(t),[o,a]=[e.nRows,e.nCols],s=o*a;r.add(`include "globals.mzn";
`),r.add(`include "alldifferent.mzn";

`),r.add(W8());let u=`1..${Math.max(o,a)}`;return!!t.globalConstraints.get(d.FILLOMINO)?u=`1..${s}`:t.globalConstraints.get(d.HEXED_SUDOKU)?n=[...Nt.range(1,16)]:n&&(u="{"+n.join(",")+"}"),r.add(`set of int: ROW_IDXS = 0..${o-1};
`),r.add(`set of int: COL_IDXS = 0..${a-1};
`),r.add(`set of int: ALLOWED_DIGITS = ${u};
`),r.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),gk(r,e),r.add(z8(t)),r.add(s3(t)),r.add(l3(t)),r.add(B8(r)),r.add(l8(t,r)),r.add(u3(t)),r.add(`
solve satisfy;`),r}var Y8=oe('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button></div>');function j8(t,e){ae(e,!1);const n=it(),r=()=>Ce(Rr,"$puzzleMetaStore",n);let o=U(e,"showModal",12,!1);function a(f,g,m){var C=document.createElement("a"),I=new Blob([f],{type:m});C.href=URL.createObjectURL(I),C.download=g,C.click(),URL.revokeObjectURL(C.href)}function s(){const f=st(Aa);return np(f).model_str}function c(){const f=s();navigator.clipboard.writeText(f)}function u(){const f=s(),g=oh(f);navigator.clipboard.writeText(g)}function _(){const f=Iu(r()),g=s();a(g,`${f}.mzn`,"text/plain")}function v(){const f=Iu(r()),g=s(),m=oh(g);a(m,`${f}.mzn`,"text/plain")}ge(),Hr(t,{title:"Minizinc File",get showModal(){return o()},set showModal(f){o(f)},children:(f,g)=>{var m=Y8(),C=V(m),I=$(C,2),b=$(I,2),w=$(b,2);Y(m),Ue("click",C,c),Ue("click",I,u),Ue("click",b,_),Ue("click",w,v),T(f,m)},$$slots:{default:!0},$$legacy:!0}),se()}function Ti(t,e,n){const r=[],o=[];for(let s=0;s<t.length;s++){const c=t[s];for(let u=0;u<c.length;u++){const _=e.getCell(s,u);if(!_)continue;const v=Number(c[u]),f=n.get(v);f!==void 0&&(r.push(_),o.push([f]))}}const a=il(r,o);_i(a)}function V8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),o=[],a=Array(e).fill(0).map(()=>Array(n).fill(0));for(let g=0;g<e;g++)for(let m=0;m<n;m++)if(!r[g][m]){const C=[];o.push(C),s(g,m,t[g][m])}function s(g,m,C){g<0||g>=e||m<0||m>=n||r[g][m]||t[g][m]!==C||(r[g][m]=!0,o[o.length-1].push([g,m]),s(g+1,m,C),s(g-1,m,C),s(g,m+1,C),s(g,m-1,C))}const c=Array(o.length).fill(0).map(()=>new Set);function u(g,m){for(const[C,I]of g)for(const[b,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const L=C+b,R=I+w;if(m.some(([M,F])=>M===L&&F===R))return!0}return!1}for(let g=0;g<o.length;g++)for(let m=g+1;m<o.length;m++)u(o[g],o[m])&&(c[g].add(m),c[m].add(g));const _=[1,4,7,9],v=new Array(o.length).fill(0);function f(g,m){for(const C of c[g])if(v[C]===m)return!1;return!0}for(let g=0;g<o.length;g++)for(const m of _)if(f(g,m)){v[g]=m;break}for(let g=0;g<o.length;g++)for(const[m,C]of o[g])a[m][C]=v[g];return a}function q8(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const o=t.board;if(o===void 0)return;const a=[],s=[];for(let u=0;u<o.length;u++){const _=o[u];for(let v=0;v<_.length;v++){const f=n.getCell(u,v);if(!f||f.given||r&&!f.given&&f.value===null)continue;const g=_[v];a.push(f),s.push(g)}}const c=Uv(a,s);_i(c)}function K8(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const o of n){const a=t[o];if(a!==void 0){Ti(a,e,r);return}}}function X8(t,e){if(t===void 0)return;const n=["doublers_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const o of n){const a=t[o];if(a!==void 0){Ti(a,e,r);return}}}function Z8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],o=[];for(let s=0;s<n.length;s++){const c=n[s];for(let u=0;u<c.length;u++){const _=e.getCell(s,u);if(!_)continue;r.push(_);const v=c[u];o.push([v+1])}}const a=il(r,o);_i(a)}function Q8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Ti(n,e,new Map([[0,4],[1,7],[2,9]]))}function J8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Ti(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function eU(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Ti(n,e,new Map([[1,7],[2,4],[3,9]]))}function tU(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;Ti(n,e,new Map([[1,7],[2,8]]))}function nU(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions","suguru_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const[a,s]=[e.nRows,e.nCols],c=3,u=[];for(let v=0;v<o.length;v++){const f=o[v];for(let g=0;g<f.length-1;g++){const m=e.getCell(v,g),C=e.getCell(v,g+1);if(!m||!C)continue;const I=f[g],b=f[g+1];if(I===b)continue;const w={colorId:c,p1:{r:v,c:g+1},p2:{r:v+1,c:g+1}};u.push(w)}}for(let v=0;v<s;v++)for(let f=0;f<a-1;f++){const g=e.getCell(f,v),m=e.getCell(f+1,v);if(!g||!m)continue;const C=o[f][v],I=o[f+1][v];if(C===I)continue;const b={colorId:c,p1:{r:f+1,c:v},p2:{r:f+1,c:v+1}};u.push(b)}const _=ha(u);gr(_);return}}function rU(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=[];for(let c=0;c<o.length;c++){const u=o[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(v)for(const f of e.getOrthogonallyAdjacentCells(v)){if(!f||!(f.r>v.r||f.c>v.c))continue;const g=o[v.r][v.c],m=o[f.r][f.c];if(!(g===1&&m===1))continue;const C={colorId:4,p1:{r:v.r+.5,c:v.c+.5},p2:{r:f.r+.5,c:f.c+.5}};a.push(C)}}}const s=ha(a);gr(s);return}}function oU(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=V8(o);if(!a)return;const s=[],c=[];for(let _=0;_<a.length;_++){const v=a[_];for(let f=0;f<v.length;f++){const g=e.getCell(_,f);if(!g)continue;s.push(g);const m=v[f];c.push([m])}}const u=il(s,c);_i(u);return}}function iU(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=[];for(let c=0;c<o.length;c++){const u=o[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(!v)continue;const f=o[v.r][v.c];if(f===0)continue;const m={colorId:f===1?1:3,marker:"X",r:v.r+.5,c:v.c+.5};a.push(m)}}const s=hL(a);gr(s);return}}function aU(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,o=e.puzzle.grid,a=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[v,f]=_,[g,m]=[Math.floor((v-1)/o.nCols),(v-1)%o.nCols],[C,I]=[Math.floor((f-1)/o.nCols),(f-1)%o.nCols];if(!vi({r:g,c:m},{r:C,c:I}))continue;const L={colorId:4,p1:{r:g+.5,c:m+.5},p2:{r:C+.5,c:I+.5}};a.push(L)}const s=ha(a);gr(s)}function sU(t,e){const n=e.puzzle,r=n.grid;gr(vd()),q8(t,n),Z8(t,r),nU(t,r),Q8(t,r),J8(t,r),rU(t,r),X8(t,r),oU(t,r),K8(t,r),iU(t,r),eU(t,r),aU(t,e),tU(t,r)}function lU(){const{subscribe:t,set:e}=Ht(0),n=100;let r=Date.now(),o,a=0,s=!1;return{subscribe:t,start:()=>{s||(s=!0,r=Date.now()-a,o=setInterval(()=>{a=Date.now()-r,e(a)},n))},stop:()=>{s&&(s=!1,clearInterval(o),a=Date.now()-r)},reset:()=>{s=!1,clearInterval(o),a=0,e(0)},getStatus:()=>({isRunning:s,elapsedTime:a})}}var cU=oe('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function uU(t,e){ae(e,!1);const n=it(),r=()=>Ce(Aa,"$puzzleStore",n),o=()=>Ce(hn,"$gridStore",n),a=()=>Ce(w,"$timer",n),s=D(),c=D(),u=D(),_=D();let v=D(!1),f=D(!1),g=D(null),m=D(100),C=D("100"),I=D(null),b=D("IDLE");const w=lU();function L(K){return K===null?"":String(K)}function R(K){const J=Math.floor(K/6e4),ce=Math.floor(K%6e4/1e3),Q=Math.floor(K%1e3/100),re=ce.toString().padStart(2,"0");return`${J}:${re}.${Q}`}function M(){S(f,!0)}function F(K){const J=parseInt(K);typeof J=="number"&&J>=1&&S(m,J)}async function P(){S(I,0),S(b,"SOLVING...");const K=new Uu;Dv(),console.log(p(s));const J=np(p(s));K.addFile("test.mzn",J.model_str),w.reset(),w.start(),S(g,K.solve({options:{solver:"chuffed","num-solutions":p(m)}})),p(g).on("solution",ce=>{const Q=ce.output.json;ce.type==="solution"&&p(I)!==null&&S(I,p(I)+1),console.log(Q),sU(Q,J)}),p(g).on("error",ce=>{S(u,"Solve"),S(b,"ERROR"),w.stop(),p(g)&&p(g).cancel()}),p(g).on("warning",ce=>{S(b,"WARNING"),console.log(ce.message)}),p(g).then(ce=>{S(b,ce.status),S(u,"Solve"),w.stop()})}function B(){p(g)===null||!p(g).isRunning()?P():p(g)!==null&&p(g).isRunning()&&(S(b,"IDLE"),S(u,"Solve"),w.stop(),p(g).cancel())}k(()=>r(),()=>{S(s,r())}),k(()=>o(),()=>{S(c,o())}),k(()=>{},()=>{S(u,"Solve")}),k(()=>a(),()=>{S(_,a())}),k(()=>p(g),()=>{p(g)&&(p(g)!==null&&p(g).isRunning()?S(u,"Stop"):S(u,"Solve"))}),Ee(),ge(),dl(t,{get isOpen(){return p(v)},set isOpen(K){S(v,K)},$$slots:{"panel-header":(K,J)=>{ul(K,{slot:"panel-header",title:"Solver",get isOpen(){return p(v)},set isOpen(ce){S(v,ce)},$$legacy:!0})},"panel-content":(K,J)=>{var ce=cU(),Q=ue(ce),re=$(Q,2);j8(re,{get showModal(){return p(f)},set showModal(Jt){S(f,Jt)},$$legacy:!0});var pe=$(re,2),me=V(pe,!0);Y(pe);var _e=$(pe,2),Ae=V(_e,!0);Y(_e);var Ve=$(_e,2),ye=V(Ve);qt(ye),A(ye,"min",1),A(ye,"max",200),A(ye,"step",1),Y(Ve);var we=$(Ve,2),ct=V(we,!0);ee(()=>rt(ct,`Solution Count: ${L(p(I))}`)),Y(we);var qe=$(we,2),Ln=V(qe,!0);ee(()=>rt(Ln,`Elapsed Time: ${R(p(_))}`)),Y(qe);var Fn=$(qe,2),Pr=V(Fn,!0);Y(Fn),ee(()=>{rt(me,p(u)),rt(Ae,`Max. Solutions: ${p(m)}`),rt(Pr,`Status: ${p(b)}`)}),Ue("click",Q,M),Ue("click",pe,B),qn(ye,()=>p(C),Jt=>S(C,Jt)),Ue("input",ye,()=>F(p(C))),T(K,ce)}},$$legacy:!0}),se()}var dU=oe('<div class="setting-panel-wrapper svelte-si50bm"><div class="setting-panel svelte-si50bm"><!> <!> <!> <!> <!> <!> <!></div></div>');function _U(t){var e=dU(),n=V(e),r=V(n);rk(r);var o=$(r,2);uU(o,{});var a=$(o,2);$D(a,{elementHandlers:Tt});var s=$(a,2);zD(s,{elementHandlers:Tt});var c=$(s,2);TD(c,{elementHandlers:Tt});var u=$(c,2);gR(u,{elementHandlers:Tt});var _=$(u,2);ik(_,{}),Y(n),Y(e),T(t,e)}const rp=Go([di,hn,Xt],([t,e,n])=>{const r=ro(n,Tt);if(r===void 0){console.warn(`Element hadler for ${n} is not defined`);return}return r.getInputHandler?r.getInputHandler(t,e,n):void 0});var fU=de('<path class="cursor svelte-zsq70u"></path>');function gU(t,e){ae(e,!1);const n=it(),r=()=>Ce(Xt,"$toolStore",n),o=()=>Ce(Do,"$selectionStore",n),a=D(),s=D(),c=.25;function u(v){if(!v)return"";const[f,g]=[v.c,v.r];return`M${f},${g}L${f+c},${g}L${f},${g+c}Z`}k(()=>r(),()=>{S(a,ad(r()))}),k(()=>o(),()=>{S(s,u(o().lastCell))}),Ee(),ge();var _=fU();ee(()=>{A(_,"d",p(s)),A(_,"visibility",p(a)?"visible":"hidden")}),T(t,_),se()}var hU=de('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function vU(t,e){ae(e,!1);let n=U(e,"gridShape",8);ge();var r=hU(),o=V(r);A(o,"x",0),A(o,"y",0),Y(r),ee(()=>{A(o,"width",n().nCols),A(o,"height",n().nRows)}),T(t,r),se()}var pU=de('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),mU=de('<g class="grid-lines"></g>');function CU(t,e){ae(e,!1);const n=it(),r=()=>Ce(hn,"$gridStore",n),o=D();k(()=>r(),()=>{S(o,r().getAllCells())}),Ee(),ge();var a=mU();lt(a,5,()=>p(o),Lt,(s,c)=>{var u=pU();A(u,"width",1),A(u,"height",1),ee(()=>{A(u,"x",p(c).c),A(u,"y",p(c).r)}),T(s,u)}),Y(a),T(t,a),se()}function EU(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function IU(t){const e=new Map;function n(r,o){const a=e.get(o);if(a!=null&&a.has(r)){a.delete(r),a.size<=0&&e.delete(o);return}let s=e.get(r);s===void 0&&(s=new Set,e.set(r,s)),s.add(o)}for(const r of t){const o=EU(r),a=o.length;for(let s=0;s<a;s++){const c=o[s%a],u=o[(s+1)%a],_=JSON.stringify(c),v=JSON.stringify(u);n(_,v)}}return e}function bU(t,e=0,n=!1){const r=[],o=IU(t);if(o.size<=0)return r;const a=new Set;for(;o.size>0;){const s=Array.from(o.entries()).find(C=>C[1].size===1);if(s===void 0)throw new Error("No corner with single adjacency found");const[c,u]=s;let _=JSON.parse(c);const v=Array.from(u)[0];let f=JSON.parse(v),g=v;const m=[];do{const C=o.get(g);if(C===void 0)throw new Error(`Corner with no adjacencies found ${g}`);const I=new Ge(_.c,_.r),b=new Ge(f.c,f.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,L=null,R=null;for(const re of C){const pe=JSON.parse(re),me=new Ge(pe.c,pe.r),_e=b.subtract(I),Ae=me.subtract(b),Ve=_e.perpDotProduct(Ae);w<Ve!=n&&(w=Ve,R=pe,L=re)}if(n&&C.size>1&&a.add(g),R===null||L===null)throw new Error("Corner with no adjacencies found");C.delete(L),C.size<=0&&o.delete(g);const M=e*(f.c-_.c),F=e*(R.c-f.c),P=e*(_.r-f.r),B=e*(f.r-R.r),K=B+w*F,J=M+w*P,ce=new Ge(f.c+K,f.r+J),Q=4;a.has(g)?(m.push(new Ge(ce.x-Q*M,ce.y-Q*F)),m.push(new Ge(ce.x-Q*P,ce.y-Q*B))):m.push(ce),_=f,f=R,g=L}while(g!==v);r.push(m)}return r}function gi(t,e=0,n=!1){return bU(t,e,n).map(a=>Di(a,!0)).join("")}const wU=[new Ge(-.5,-.5),new Ge(.5,-.5),new Ge(.5,.5),new Ge(-.5,.5)];function OU(t,e,n=wU){if(e===1)return n;const r=[],o=n.length,a=0,s=360/e,c=t*s+a,u=(t+1)*s+a,_=c/(360/o),v=u/(360/o),f=Math.floor(_)%o,g=Math.ceil(_)%o,m=n[f].lerp(n[g],_%1),C=Math.floor(v)%o,I=Math.ceil(v)%o,b=n[C].lerp(n[I],v%1);r.push(m);for(let L=Math.ceil(_);L<=Math.floor(v);L++)r.push(n[L%o]);r.push(b);const w=new Ge(0,0);return r.push(w),r}function op(t,e,n=new Ge(0,0),r=!0,o=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const a=Math.cos(Math.PI/e),s=r?t:t/a,c=[];for(let u=0;u<e;u++){const _=s*Math.cos(u/e*2*Math.PI+o*2*Math.PI),v=s*Math.sin(u/e*2*Math.PI+o*2*Math.PI),f=n.add(new Ge(_,v));c.push(f)}return c}function Di(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:o,y:a})=>`${o},${a}`).join("L")+n}function Cl(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:o}={}){if(r&&t.length>1){const _=t[t.length-1];for(let f=0;f<t.length-1;f++)if(_.equals(t[f])){t.push(t[f+1]);break}const v=t[0];for(let f=1;f<t.length;f++)if(v.equals(t[f])){t.unshift(t[f-1]);break}}if(t.length===1)t.push(t[0]);else{if(e){let _=t[1].subtract(t[0]);_=_.normalise(),_=_.scale(e),t[0]=t[0].add(_)}if(n){const _=t.length;let v=t[_-2].subtract(t[_-1]);v=v.normalise(),v=v.scale(n),t[_-1]=t[_-1].add(v)}}if(!o)return Di(t);const a=t[0],s=["M",`${a.x},${a.y}`],c=t.length;for(let _=2;_<c;_++){const v=t[_-2],f=t[_-1],g=t[_];let m=v.subtract(f).normalise();m=m.scale(o),m=m.add(f);let C=g.subtract(f).normalise();C=C.scale(o),C=C.add(f),s.push(`L${m.x},${m.y} Q ${f.x},${f.y} ${C.x},${C.y}`)}const u=t[c-1];return s.push(`L${u.x},${u.y}`),s.join(" ")}function pa(t,e={}){const n=zs(t);return Cl(n,e)}function Zn(t){return new Ge(t.c+.5,t.r+.5)}function zs(t){return t.map(n=>Zn(n))}const yU=[new Ge(-.5,-.5),new Ge(.5,-.5),new Ge(.5,.5),new Ge(-.5,.5),new Ge(0,-.5),new Ge(0,.5),new Ge(-.5,0),new Ge(.5,0)];function LU(t,e){const n=yU[t];return n.subtract(n.scale(e))}function ip(t,e){const n=[new Ge(t.c-e,t.r-e),new Ge(t.c+e,t.r+e)],r=[new Ge(t.c-e,t.r+e),new Ge(t.c+e,t.r-e)];return[n,r].map(a=>Di(a,!1)).join("")}const AU=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function El(t,e="none"){return AU.get(t)||e}function SU(t,e,n){let r=[];function a(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let s=[];return t==="max"?s=[new Ge(-.12,-.32),new Ge(0,-.4),new Ge(.12,-.32)]:s=[new Ge(-.12,-.4),new Ge(0,-.32),new Ge(.12,-.4)],r=[s,a(s,90),a(s,180),a(s,270)],r=r.map(c=>c.map(u=>{const _=new Ge(n+.5,e+.5);return u.add(_)})),r}var NU=de('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),xU=de('<g class="regions-border"></g>');function TU(t,e){ae(e,!1);const n=it(),r=()=>Ce(gn,"$cellsStore",n),o=()=>Ce(hn,"$gridStore",n),a=D(),s=D();function c(_,v){return _.filter(m=>m.region===v).map(m=>({r:m.r,c:m.c}))}k(()=>r(),()=>{S(a,r())}),k(()=>o(),()=>{S(s,o().getUsedRegions())}),Ee(),ge();var u=xU();lt(u,5,()=>p(s),Lt,(_,v)=>{var f=NU();ee(()=>A(f,"d",gi(c(p(a),p(v)),0,!1))),ee(()=>A(f,"id",`region-${p(v)??""}`)),T(_,f)}),Y(u),T(t,u),se()}var DU=de('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function RU(t,e){ae(e,!1);const n=it(),r=()=>Ce(Do,"$selectionStore",n),o=()=>Ce(Xt,"$toolStore",n),a=D(),s=D(),c=D(),u=D(),_=D(),v=D();let f=U(e,"boundingBox",8);const g=.06,m=.05,C="#080808",I="#b2b2b2";k(()=>Z(f()),()=>{S(a,f().x)}),k(()=>Z(f()),()=>{S(s,f().y)}),k(()=>r(),()=>{S(c,r().cells)}),k(()=>p(c),()=>{S(u,gi(p(c),0))}),k(()=>p(c),()=>{S(_,gi(p(c),g))}),k(()=>o(),()=>{S(v,ad(o()))}),Ee(),ge();var b=DU(),w=V(b),L=V(w);A(L,"stdDeviation",m),xo(),Y(w);var R=$(w),M=V(R);A(M,"fill",I);var F=$(M);A(F,"fill",C),Y(R);var P=$(R);Y(b),ee(()=>{A(b,"visibility",p(v)?"visible":"hidden"),A(R,"x",p(a)),A(R,"y",p(s)),A(M,"x",p(a)),A(M,"y",p(s)),A(F,"d",p(_)),A(P,"d",p(u))}),T(t,b),se()}var kU=de('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function MU(t,e){ae(e,!1);const n=D(),r=D();let o=U(e,"grid",8);k(()=>Z(o()),()=>{S(n,o().getAllCells().map(c=>({r:c.r,c:c.c})))}),k(()=>p(n),()=>{S(r,gi(p(n),0))}),Ee(),ge();var a=kU(),s=V(a);Y(a),ee(()=>A(s,"d",p(r))),T(t,a),se()}function mr(t){return Go(ht,n=>{const r=[];for(const[o,a]of n.entries())t(o)&&r.push({toolId:o,element:a});return r})}const Wd=mr(uO),GU=Go(Wd,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),UU=Go(Wd,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),FU=mr(nd),$U=mr(Bh),HU=mr(Ph),PU=mr(rd),BU=mr(Wh),WU=mr(od),zU=mr(id),YU=mr(zh),jU=mr(ga);var VU=de('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function Ma(t,e){let n=U(e,"l",8,.2),r=U(e,"id",8),o=U(e,"strokeWidth",8),a=U(e,"stroke",8,"black");const s=.5,c=`M${s-n()},${s-n()} L${s},${s} L${s-n()},${s+n()}`;var u=VU();A(u,"viewBox","0 0 1 1"),A(u,"refX",s),A(u,"refY",s),A(u,"markerWidth",1),A(u,"markerHeight",1);var _=V(u);A(_,"d",c),Y(u),ee(()=>{A(u,"id",r()),A(_,"stroke-width",o()),A(_,"stroke",a())}),T(t,u)}var qU=de("<path></path>");function ma(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D();let v=U(e,"cells",8),f=U(e,"shape",8,dd);const g="square";k(()=>Z(f()),()=>{S(n,f().inset??.06)}),k(()=>Z(f()),()=>{S(r,f().stroke??"black")}),k(()=>Z(f()),()=>{S(o,f().strokeWidth??.03)}),k(()=>Z(f()),()=>{S(a,f().strokeDasharray??.08)}),k(()=>Z(f()),()=>{S(s,f().fill??"none")}),k(()=>Z(f()),()=>{S(c,f().connectDiag??!0)}),k(()=>(Z(v()),p(n),p(c)),()=>{S(u,gi(v(),p(n),p(c)))}),k(()=>Z(f()),()=>{S(_,f().strokeLinejoin??"miter")}),Ee(),ge();var m=qU();A(m,"stroke-linecap",g),ee(()=>{A(m,"d",p(u)),A(m,"stroke",p(r)),A(m,"stroke-width",p(o)),A(m,"fill",p(s)),A(m,"stroke-dasharray",p(a)),A(m,"stroke-linejoin",p(_))}),T(t,m),se()}var KU=de('<path class="arrow-line" fill="none"></path>'),XU=de('<mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function ZU(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D(),v=D(),f=D(),g=D(),m=D(),C=D();let I=U(e,"tool",8),b=U(e,"arrowId",8),w=U(e,"boundingBox",8);const L=Zt(I().toolId,Tt)??_d,R="round",M="round",F=crypto.randomUUID(),P=`arrow-mask-${b()}-${F}`,B=`arrow-marker-${b()}-${F}`;k(()=>Z(I()),()=>{S(n,I().shape??L)}),k(()=>Z(w()),()=>{S(r,w().x)}),k(()=>Z(w()),()=>{S(o,w().y)}),k(()=>p(n),()=>{var _e;S(a,((_e=p(n))==null?void 0:_e.r)??.4)}),k(()=>p(n),()=>{var _e;S(s,((_e=p(n))==null?void 0:_e.stroke)??"gray")}),k(()=>p(n),()=>{var _e;S(c,((_e=p(n))==null?void 0:_e.strokeWidth)??.1)}),k(()=>p(n),()=>{var _e;S(u,((_e=p(n))==null?void 0:_e.strokeDasharray)??0)}),k(()=>p(n),()=>{var _e;S(_,((_e=p(n))==null?void 0:_e.opacity)??.8)}),k(()=>(p(a),p(n)),()=>{var _e,Ae,Ve,ye;S(v,{shortenHead:p(a),shortenTail:((Ae=(_e=p(n))==null?void 0:_e.linePathOptions)==null?void 0:Ae.shortenTail)??.2,bezierRounding:((ye=(Ve=p(n))==null?void 0:Ve.linePathOptions)==null?void 0:ye.bezierRounding)??.4})}),k(()=>p(n),()=>{var _e;S(f,((_e=p(n))==null?void 0:_e.fill)??"none")}),k(()=>p(n),()=>{var _e;S(g,((_e=p(n))==null?void 0:_e.inset)??.2)}),k(()=>p(g),()=>{S(m,{...L,strokeDasharray:0,strokeLinejoin:"round",inset:p(g)})}),k(()=>Z(I()),()=>{S(C,pa(I().cells))}),Ee(),ge();var K=XU(),J=ue(K);A(J,"id",P);var ce=V(J),Q=$(ce);Y(J);var re=$(J);Ma(re,{id:B,l:.2,get strokeWidth(){return p(c)},get stroke(){return p(s)}});var pe=$(re);ma(pe,{get cells(){return I().cells},get shape(){return p(m)}});var me=$(pe);lt(me,1,()=>I().lines,Lt,(_e,Ae)=>{var Ve=Ne(),ye=ue(Ve);{var we=ct=>{var qe=KU();ee(()=>A(qe,"d",pa(p(Ae),p(v)))),A(qe,"stroke-linejoin",R),A(qe,"stroke-linecap",M),A(qe,"marker-end",`url(#${B??""})`),ee(()=>{A(qe,"stroke",p(s)),A(qe,"stroke-width",p(c)),A(qe,"opacity",p(_)),A(qe,"stroke-dasharray",p(u))}),T(ct,qe)};he(ye,ct=>{p(Ae).length>1&&ct(we)})}T(_e,Ve)}),ee(()=>{A(J,"x",p(r)),A(J,"y",p(o)),A(ce,"x",p(r)),A(ce,"y",p(o)),A(Q,"stroke-width",2*p(a)-p(c)),A(Q,"d",p(C))}),T(t,K),se()}var QU=de('<path class="arrow-line" fill="none"></path>'),JU=de('<mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function eF(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D(),v=D(),f=D();let g=U(e,"tool",8),m=U(e,"arrowId",8),C=U(e,"boundingBox",8);const I=Zt(g().toolId,Tt)??_d,b="round",w="round",L=crypto.randomUUID(),R=`arrow-mask-${m()}-${L}`,M=`arrow-marker-${m()}-${L}`;k(()=>Z(g()),()=>{S(n,g().shape??I)}),k(()=>Z(C()),()=>{S(r,C().x)}),k(()=>Z(C()),()=>{S(o,C().y)}),k(()=>p(n),()=>{var re;S(a,((re=p(n))==null?void 0:re.r)??.4)}),k(()=>p(n),()=>{var re;S(s,((re=p(n))==null?void 0:re.stroke)??"gray")}),k(()=>p(n),()=>{var re;S(c,((re=p(n))==null?void 0:re.strokeWidth)??.1)}),k(()=>p(n),()=>{var re;S(u,((re=p(n))==null?void 0:re.strokeDasharray)??0)}),k(()=>p(n),()=>{var re;S(_,((re=p(n))==null?void 0:re.opacity)??.8)}),k(()=>(p(a),p(n)),()=>{var re,pe,me,_e;S(v,{shortenHead:p(a),shortenTail:((pe=(re=p(n))==null?void 0:re.linePathOptions)==null?void 0:pe.shortenTail)??.2,bezierRounding:((_e=(me=p(n))==null?void 0:me.linePathOptions)==null?void 0:_e.bezierRounding)??.4})}),k(()=>Z(g()),()=>{S(f,pa(g().cells))}),Ee(),ge();var F=JU(),P=ue(F);A(P,"id",R);var B=V(P),K=$(B);Y(P);var J=$(P);Ma(J,{id:M,l:.2,get strokeWidth(){return p(c)},get stroke(){return p(s)}});var ce=$(J);A(ce,"mask",`url(#${R??""})`);var Q=$(ce);lt(Q,1,()=>g().lines,Lt,(re,pe)=>{var me=Ne(),_e=ue(me);{var Ae=Ve=>{var ye=QU();ee(()=>A(ye,"d",pa(p(pe),p(v)))),A(ye,"stroke-linejoin",b),A(ye,"stroke-linecap",w),A(ye,"marker-end",`url(#${M??""})`),ee(()=>{A(ye,"stroke",p(s)),A(ye,"stroke-width",p(c)),A(ye,"opacity",p(_)),A(ye,"stroke-dasharray",p(u))}),T(Ve,ye)};he(_e,Ve=>{p(pe).length>1&&Ve(Ae)})}T(re,me)}),ee(()=>{A(P,"x",p(r)),A(P,"y",p(o)),A(B,"x",p(r)),A(B,"y",p(o)),A(K,"stroke-width",2*p(a)-p(c)),A(K,"d",p(f)),A(ce,"d",p(f)),A(ce,"stroke-width",2*p(a)+p(c)),A(ce,"stroke",p(s))}),T(t,F),se()}var tF=de('<g class="arrow-tool"><!></g>');function nF(t,e){ae(e,!1);const n=D();let r=U(e,"tool",8),o=U(e,"arrowId",8),a=U(e,"boundingBox",8);const s=Zt(r().toolId,Tt)??_d;k(()=>Z(r()),()=>{S(n,r().shape??s)}),Ee(),ge();var c=tF(),u=V(c);{var _=f=>{ZU(f,{get tool(){return r()},get arrowId(){return o()},get boundingBox(){return a()}})},v=f=>{eF(f,{get tool(){return r()},get arrowId(){return o()},get boundingBox(){return a()}})};he(u,f=>{p(n).type===H.BULBOUS_ARROW?f(_):f(v,!1)})}Y(c),T(t,c),se()}var rF=de("<g></g>"),oF=de('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function iF(t,e){ae(e,!1);const n=it(),r=()=>Ce(WU,"$arrowToolsStore",n),o=D();let a=U(e,"boundingBox",8);k(()=>r(),()=>{S(o,r())}),Ee();var s=oF();lt(s,5,()=>p(o),Lt,(c,u)=>{let _=()=>p(u).toolId,v=()=>p(u).element;var f=rF();lt(f,5,()=>Object.entries(v()),g=>g[0],(g,m)=>{nF(g,{get arrowId(){return p(m)[0]},get tool(){return p(m)[1]},get boundingBox(){return a()}})}),Y(f),ee(()=>oo(f,`element-group ${_()}`)),T(c,f)}),Y(s),T(t,s),se()}var aF=de('<!><path fill="none"></path>',1);function sF(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=U(e,"tool",8),u=U(e,"id",8);const _=c().cell,v=Zt(c().toolId,Tt)??LO,f=.3;function g(L,R){const M=el(R),F=new Ge(M.c,M.r).normalise().scale(f),P=Zn(L),B=P.subtract(F),K=P.add(F);return[B,K]}const m=crypto.randomUUID(),C=`single-cell-arrow-marker-${u()}-${m}`;k(()=>Z(c()),()=>{S(n,c().direction)}),k(()=>Z(c()),()=>{S(r,c().shape??v)}),k(()=>p(r),()=>{S(o,p(r).strokeWidth??.1)}),k(()=>p(r),()=>{S(a,p(r).stroke??"black")}),k(()=>p(n),()=>{S(s,Cl(g(_,p(n))))}),Ee(),ge();var I=aF(),b=ue(I);Ma(b,{id:C,l:.15,get stroke(){return p(a)},get strokeWidth(){return p(o)}});var w=$(b);A(w,"marker-end",`url(#${C??""})`),ee(()=>{A(w,"d",p(s)),A(w,"stroke",p(a)),A(w,"stroke-width",p(o))}),T(t,I),se()}var lF=de('<path fill="none"></path>'),cF=de("<!><!>",1);function uF(t,e){ae(e,!1);const n=D(),r=D(),o=D();let a=U(e,"tool",8),s=U(e,"id",8);const c=a().cell,u=Zt(a().toolId,Tt)??AO,_=.2;function v(w,L){const R=el(L),M=new Ge(R.c,R.r),P=Zn(w).add(M.scale(.4));return[P.subtract(M.normalise().scale(_)),P]}function f(w){return Cl(v(c,w))}const g=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${s()}-${g}`;k(()=>Z(a()),()=>{S(n,a().shape??u)}),k(()=>p(n),()=>{S(r,p(n).strokeWidth??.08)}),k(()=>p(n),()=>{S(o,p(n).stroke??"black")}),Ee(),ge();var C=cF(),I=ue(C);Ma(I,{id:m,l:.1,get stroke(){return p(o)},get strokeWidth(){return p(r)}});var b=$(I);lt(b,1,()=>a().directions,Lt,(w,L)=>{var R=lF();ee(()=>A(R,"d",f(p(L)))),A(R,"marker-end",`url(#${m??""})`),ee(()=>{A(R,"stroke",p(o)),A(R,"stroke-width",p(r))}),T(w,R)}),T(t,C),se()}var dF=de('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function Ca(t,e){ae(e,!1);const n=D();let r=U(e,"value",8,""),o=U(e,"fontSize",8,.2),a=U(e,"x",8),s=U(e,"y",8),c=U(e,"position",8,"TL"),u=U(e,"fontColor",8,"var(--text-primary-color)"),_=U(e,"fontWeight",8,400),v=D(null),f=D(null);function g(L,R,M){const F=["TL","TR"].includes(M),B=["TL","BL"].includes(M)?L+.05:L,K=R;return new Ge(B,K)}function m(L){return["TL","BL"].includes(L)?"start":"end"}function C(L){return["TL","TR"].includes(L)?"text-before-edge":""}Uw(()=>{if(!p(v)||!p(f))return;const L=p(v).getBBox();p(f).setAttribute("x",String(L.x)),p(f).setAttribute("y",String(L.y+L.height*.1)),p(f).setAttribute("width",String(L.width)),p(f).setAttribute("height",String(L.height*.8))}),k(()=>(Z(a()),Z(s()),Z(c())),()=>{S(n,g(a(),s(),c()))}),Ee(),ge();var I=Ne(),b=ue(I);{var w=L=>{var R=dF(),M=ue(R);To(M,B=>S(f,B),()=>p(f));var F=$(M);ee(()=>A(F,"text-anchor",m(c()))),ee(()=>A(F,"dominant-baseline",C(c())));var P=V(F,!0);Y(F),To(F,B=>S(v,B),()=>p(v)),ee(()=>{var B,K;A(F,"x",(B=p(n))==null?void 0:B.x),A(F,"y",(K=p(n))==null?void 0:K.y),A(F,"font-size",o()),A(F,"fill",u()),A(F,"font-weight",_()),rt(P,r())}),T(L,R)};he(b,L=>{r().length&&L(w)})}T(t,I),se()}var _F=oe("<!> <!>",1);function ap(t,e){ae(e,!1);const n=D(),r=D();let o=U(e,"cells",8),a=U(e,"shape",8,dd),s=U(e,"value",8,void 0);k(()=>Z(o()),()=>{S(n,o()[0])}),k(()=>p(n),()=>{S(r,new Ge(p(n).c,p(n).r))}),Ee(),ge();var c=_F(),u=ue(c);ma(u,{get cells(){return o()},get shape(){return a()}});var _=$(u,2);{var v=f=>{Ca(f,{get value(){return s()},get x(){return p(r).x},get y(){return p(r).y},position:"TL"})};he(_,f=>{s()&&s().length&&f(v)})}T(t,c),se()}var fF=de("<rect></rect>");function gF(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D(),v=D();let f=U(e,"cx",8),g=U(e,"cy",8),m=U(e,"shape",8);k(()=>Z(m()),()=>{S(n,m().r??.5)}),k(()=>(Z(f()),p(n)),()=>{S(r,f()-p(n))}),k(()=>(Z(g()),p(n)),()=>{S(o,g()-p(n))}),k(()=>p(n),()=>{S(a,2*p(n))}),k(()=>p(n),()=>{S(s,2*p(n))}),k(()=>Z(m()),()=>{S(c,m().stroke??"black")}),k(()=>Z(m()),()=>{S(u,m().strokeWidth??.02)}),k(()=>Z(m()),()=>{S(_,m().fill??"none")}),k(()=>Z(m()),()=>{S(v,m().angle??0)}),Ee(),ge();var C=fF();ee(()=>{A(C,"x",p(r)),A(C,"y",p(o)),A(C,"width",p(a)),A(C,"height",p(s)),A(C,"stroke",p(c)),A(C,"stroke-width",p(u)),A(C,"fill",p(_)),A(C,"transform",`rotate(${p(v)}, ${f()}, ${g()})`)}),T(t,C),se()}var hF=de('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function lh(t,e){ae(e,!1);const n=it(),r=()=>Ce(GU,"$minimumConstraintsStore",n),o=()=>Ce(UU,"$maximumConstraintsStore",n),a=D(),s=D(),c=D();let u=U(e,"coord",8),_=U(e,"minOrMax",8);function v(b,w){const L=[!0,!0,!0,!0];let R=[[0,-1],[1,0],[0,1],[-1,0]];for(let M=0;M<R.length;M++){let F=R[M];const P={r:b.r+F[1],c:b.c+F[0]};L[M]=!Object.values(w).some(B=>ze(P,B.cell))}return L}function f(b,w){let L=SU(_(),b.r,b.c);const R=v(b,w);return L=L.filter((F,P)=>R[P]),L.map(F=>Di(F,!1)).join("")}function g(b,w){return _()==="max"?w:b}k(()=>Z(u()),()=>{S(a,u().c)}),k(()=>Z(u()),()=>{S(s,u().r)}),k(()=>(r(),o()),()=>{S(c,g(r(),o()))}),Ee(),ge();var m=hF(),C=V(m);A(C,"width",1),A(C,"height",1);var I=$(C);ee(()=>A(I,"d",f(u(),p(c)))),Y(m),ee(()=>{A(C,"x",p(a)),A(C,"y",p(s))}),T(t,m),se()}var vF=de("<circle></circle>");function Tr(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=U(e,"x",8),_=U(e,"y",8),v=U(e,"shape",8);k(()=>Z(v()),()=>{S(n,v().r??.35)}),k(()=>Z(v()),()=>{S(r,v().stroke??"black")}),k(()=>Z(v()),()=>{var g;S(o,(g=v())==null?void 0:g.opacity)}),k(()=>Z(v()),()=>{S(a,v().strokeWidth??.02)}),k(()=>Z(v()),()=>{S(s,v().fill??"none")}),k(()=>Z(v()),()=>{S(c,v().strokeDasharray??0)}),Ee(),ge();var f=vF();ee(()=>{A(f,"cx",u()),A(f,"cy",_()),A(f,"r",p(n)),A(f,"stroke",p(r)),A(f,"stroke-width",p(a)),A(f,"fill",p(s)),A(f,"opacity",p(o)),A(f,"stroke-dasharray",p(c))}),T(t,f),se()}var pF=de("<ellipse></ellipse>");function mF(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D();let _=U(e,"cx",8),v=U(e,"cy",8),f=U(e,"shape",8);k(()=>Z(f()),()=>{S(n,f().width??.5)}),k(()=>Z(f()),()=>{S(r,f().height??.5)}),k(()=>Z(f()),()=>{S(o,f().stroke??"black")}),k(()=>Z(f()),()=>{var m;S(a,(m=f())==null?void 0:m.opacity)}),k(()=>Z(f()),()=>{S(s,f().strokeWidth??.02)}),k(()=>Z(f()),()=>{S(c,f().fill??"none")}),k(()=>Z(f()),()=>{S(u,f().angle??0)}),Ee(),ge();var g=pF();ee(()=>{A(g,"cx",_()),A(g,"cy",v()),A(g,"rx",p(n)/2),A(g,"ry",p(r)/2),A(g,"stroke",p(o)),A(g,"stroke-width",p(s)),A(g,"fill",p(c)),A(g,"opacity",p(a)),A(g,"transform",`rotate(${p(u)}, ${_()}, ${v()} )`)}),T(t,g),se()}var CF=de("<polygon></polygon>");function Ys(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D();let v=U(e,"cx",8),f=U(e,"cy",8),g=U(e,"shape",8);k(()=>Z(g()),()=>{S(n,g().n??3)}),k(()=>Z(g()),()=>{S(r,g().r??.5)}),k(()=>(p(r),p(n),Z(v()),Z(f())),()=>{S(o,op(p(r),p(n),new Ge(v(),f())))}),k(()=>p(o),()=>{S(a,p(o).map(C=>`${C.x},${C.y}`).join(" "))}),k(()=>Z(g()),()=>{S(s,g().stroke??"black")}),k(()=>Z(g()),()=>{S(c,g().strokeWidth??.02)}),k(()=>Z(g()),()=>{S(u,g().fill??"none")}),k(()=>Z(g()),()=>{S(_,g().angle??0)}),Ee(),ge();var m=CF();ee(()=>{A(m,"points",p(a)),A(m,"stroke",p(s)),A(m,"stroke-width",p(c)),A(m,"fill",p(u)),A(m,"transform",`rotate(${p(_)}, ${v()}, ${f()} )`)}),T(t,m),se()}var EF=de("<rect></rect>");function IF(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D();let _=U(e,"cx",8),v=U(e,"cy",8),f=U(e,"shape",8);k(()=>Z(f()),()=>{S(n,f().width??.5)}),k(()=>Z(f()),()=>{S(r,f().height??.5)}),k(()=>(Z(_()),p(n)),()=>{S(o,_()-p(n)/2)}),k(()=>(Z(v()),p(r)),()=>{S(a,v()-p(r)/2)}),k(()=>Z(f()),()=>{S(s,f().stroke||"black")}),k(()=>Z(f()),()=>{S(c,f().strokeWidth||.023)}),k(()=>Z(f()),()=>{S(u,f().fill||"none")}),Ee(),ge();var g=EF();ee(()=>{A(g,"x",p(o)),A(g,"y",p(a)),A(g,"width",p(n)),A(g,"height",p(r)),A(g,"stroke",p(s)),A(g,"stroke-width",p(c)),A(g,"fill",p(u))}),T(t,g),se()}function Il(t,e){ae(e,!1);const n=D();let r=U(e,"cx",8),o=U(e,"cy",8),a=U(e,"shape",8);k(()=>(Z(a()),H),()=>{var v;S(n,((v=a())==null?void 0:v.type)??H.CIRCLE)}),Ee(),ge();var s=Ne(),c=ue(s);{var u=v=>{Tr(v,{get x(){return r()},get y(){return o()},get shape(){return a()}})},_=v=>{var f=Ne(),g=ue(f);{var m=I=>{mF(I,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},C=I=>{var b=Ne(),w=ue(b);{var L=M=>{gF(M,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},R=M=>{var F=Ne(),P=ue(F);{var B=J=>{IF(J,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},K=J=>{var ce=Ne(),Q=ue(ce);{var re=me=>{Ys(me,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},pe=me=>{Tr(me,{get x(){return r()},get y(){return o()},get shape(){return a()}})};he(Q,me=>{p(n)===H.POLYGON?me(re):me(pe,!1)},!0)}T(J,ce)};he(P,J=>{p(n)===H.RECTANGLE?J(B):J(K,!1)},!0)}T(M,F)};he(w,M=>{p(n)===H.SQUARE?M(L):M(R,!1)},!0)}T(I,b)};he(g,I=>{p(n)===H.ELLIPSE?I(m):I(C,!1)},!0)}T(v,f)};he(c,v=>{p(n)===H.CIRCLE?v(u):v(_,!1)})}T(t,s),se()}var bF=de("<circle></circle>");function wF(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=U(e,"x",8),_=U(e,"y",8),v=U(e,"value",8),f=U(e,"shape",8);k(()=>Z(f()),()=>{S(n,f().r??.35)}),k(()=>Z(f()),()=>{S(r,f().stroke??"black")}),k(()=>Z(f()),()=>{var m;S(o,(m=f())==null?void 0:m.opacity)}),k(()=>Z(f()),()=>{S(a,f().strokeWidth??.02)}),k(()=>Z(v()),()=>{S(s,v()==="1"?"var(--constraint-color-red)":v()==="2"?"var(--constraint-color-green)":v()==="3"?"var(--constraint-color-blue)":"none")}),k(()=>Z(f()),()=>{S(c,f().strokeDasharray??0)}),Ee(),ge();var g=bF();ee(()=>{A(g,"cx",u()),A(g,"cy",_()),A(g,"r",p(n)),A(g,"stroke",p(r)),A(g,"stroke-width",p(a)),A(g,"fill",p(s)),A(g,"opacity",p(o)),A(g,"stroke-dasharray",p(c))}),T(t,g),se()}var OF=de('<g class="single-cell-tool"><!><!></g>');function yF(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=U(e,"tool",8),u=U(e,"id",8);const _=c().cell,v=Zt(c().toolId,Tt)??yO;k(()=>Z(c()),()=>{S(n,c().shape??v)}),k(()=>(p(n),H),()=>{var w;S(r,((w=p(n))==null?void 0:w.type)||H.CIRCLE)}),k(()=>{},()=>{S(o,{x:_.c+.5,y:_.r+.5})}),k(()=>Ge,()=>{S(a,new Ge(_.c,_.r))}),k(()=>Z(c()),()=>{S(s,c().value)}),Ee(),ge();var f=OF(),g=V(f);{var m=w=>{lh(w,{coord:_,minOrMax:"min"})},C=w=>{var L=Ne(),R=ue(L);{var M=P=>{lh(P,{coord:_,minOrMax:"max"})},F=P=>{var B=Ne(),K=ue(B);{var J=Q=>{wF(Q,{get x(){return p(o).x},get y(){return p(o).y},get value(){return p(s)},get shape(){return p(n)}})},ce=Q=>{var re=Ne(),pe=ue(re);{var me=Ae=>{ap(Ae,{cells:[_],get shape(){return p(n)},get value(){return c().value}})},_e=Ae=>{Il(Ae,{get cx(){return p(o).x},get cy(){return p(o).y},get shape(){return p(n)}})};he(pe,Ae=>{p(r)===H.CAGE?Ae(me):Ae(_e,!1)},!0)}T(Q,re)};he(K,Q=>{c().toolId===d.COLORED_COUNTING_CIRCLES?Q(J):Q(ce,!1)},!0)}T(P,B)};he(R,P=>{c().toolId===d.MAXIMUM?P(M):P(F,!1)},!0)}T(w,L)};he(g,w=>{c().toolId===d.MINIMUM?w(m):w(C,!1)})}var I=$(g);{var b=w=>{Ca(w,{get value(){return p(s)},get x(){return p(a).x},get y(){return p(a).y},position:"TL"})};he(I,w=>{p(r)!==H.CAGE&&c().toolId!==d.COLORED_COUNTING_CIRCLES&&p(s)&&w(b)})}Y(f),ee(()=>A(f,"id",`constraint-${u()}`)),T(t,f),se()}var LF=de("<g></g>"),AF=de('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function SF(t,e){ae(e,!1);const n=it(),r=()=>Ce(Wd,"$singleCellToolsStore",n),o=D();k(()=>r(),()=>{S(o,r())}),Ee();var a=AF();lt(a,5,()=>p(o),Lt,(s,c)=>{let u=()=>p(c).toolId,_=()=>p(c).element;var v=LF();lt(v,5,()=>Object.entries(_()),f=>f[0],(f,g)=>{var m=Ne(),C=ue(m);{var I=w=>{sF(w,{get tool(){return p(g)[1]},get id(){return p(g)[0]}})},b=w=>{var L=Ne(),R=ue(L);{var M=P=>{uF(P,{get tool(){return p(g)[1]},get id(){return p(g)[0]}})},F=P=>{var B=Ne(),K=ue(B);{var J=ce=>{yF(ce,{get tool(){return p(g)[1]},get id(){return p(g)[0]}})};he(K,ce=>{p(g)[1].type==="SIMPLE"&&ce(J)},!0)}T(P,B)};he(R,P=>{p(g)[1].type==="MULTIARROW"?P(M):P(F,!1)},!0)}T(w,L)};he(C,w=>{p(g)[1].type==="ARROW"?w(I):w(b,!1)})}T(f,m)}),Y(v),ee(()=>oo(v,`element-group ${u()}`)),T(s,v)}),Y(a),T(t,a),se()}function NF(t,e){const n=t.getRow(e.r);return new Set(n)}function xF(t,e){const n=t.getCol(e.c);return new Set(n)}function TF(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,o=t.getRegion(r);return new Set(o)}function DF(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function RF(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function kF(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),o=new Set(r);return o.delete(e),o}function MF(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(o=>o===e)?new Set(r):n}function GF(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(o=>o===e)?new Set(r):n}function UF(t,e,n){let r=new Set;const a=n.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>f!==void 0),s=a.length,c=[a[0],a[s-1]],u=a.slice(1,s-1),_=c.findIndex(f=>f===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const f=c.filter((g,m)=>m!==_);r=new Set([...r,...f])}return r}return u.findIndex(f=>f===e)!==-1&&(r=new Set([...r,...c])),r}function FF(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function $F(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function HF(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);return o&&(e.get(d.ANTIKNIGHT)&&(r=r.union(DF(t,o))),e.get(d.ANTIKING)&&(r=r.union(RF(t,o))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(kF(t,o))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(GF(t,o))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(MF(t,o)))),r}function su(t,e,n,r,o){const a=e.get(r);if(a)for(const s of Object.entries(a)){const c=s[1],u=$F(t,n,c);o=new Set([...o,...u])}return o}function PF(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);if(!o)return r;const a=e.get(d.BETWEEN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=UF(t,o,u);r=new Set([...r,..._])}const s=e.get(d.RENBAN_LINE);if(s)for(const c of Object.entries(s)){const u=c[1],_=FF(t,o,u);r=new Set([...r,..._])}return r=su(t,e,o,d.KILLER_CAGE,r),r=su(t,e,o,d.PARITY_BALANCE_CAGE,r),r=su(t,e,o,d.SPOTLIGHT_CAGE,r),r}function sp(t,e){let n=new Set;const r=t.globalConstraints,o=t.grid,a=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...NF(o,e),...xF(o,e),...TF(o,e)])),n=new Set([...n,...HF(o,r,e)]),n=new Set([...n,...PF(o,a,e)]);const s=o.getCell(e.r,e.c);return s&&n.delete(s),n}function BF(t,e){const n=[];if(e.length==0)return[];for(const a of e)n.push(sp(t,a));const r=n.reduce((a,s)=>a.intersection(s)),o=[];for(const a of r)o.push(a.toCoords());return o}var WF=de('<tspan class="svelte-xct9ah"> </tspan>'),zF=de('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function YF(t,e){ae(e,!1);const n=D();let r=U(e,"cell",8),o=U(e,"seen_values",8);const a=.25;function s(v){return o().find(g=>g===v)!==void 0}k(()=>Z(r()),()=>{S(n,Zn({r:r().r,c:r().c}))}),Ee(),ge();var c=Ne(),u=ue(c);{var _=v=>{var f=zF(),g=V(f);A(g,"font-size",a),lt(g,5,()=>r().centerMarks,Lt,(m,C)=>{var I=WF();const b=Ze(()=>s(p(C)));ee(()=>yt(I,"conflict",p(b)));var w=V(I,!0);Y(I),ee(()=>rt(w,p(C))),T(m,I)}),Y(g),Y(f),ee(()=>{A(g,"x",p(n).x),A(g,"y",p(n).y),A(g,"textLength",r().centerMarks.length>5?"0.9":void 0)}),T(v,f)};he(u,v=>{r().centerMarks.length&&v(_)})}T(t,c),se()}var jF=de('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),VF=de('<g class="corner-marks-group"></g>');function qF(t,e){ae(e,!1);let n=U(e,"cell",8),r=U(e,"seen_values",8);const o=.25,a=.28;function s(f){const g=f.cornerMarks.slice(0,8),m=Zn({r:f.r,c:f.c});return g.map((C,I)=>{const b=LU(I,a);return{pos:m.add(b),value:C,idx:I}})}function c(f){return r().find(m=>m===f)!==void 0}ge();var u=Ne(),_=ue(u);{var v=f=>{var g=VF();lt(g,5,()=>s(n()),Lt,(m,C)=>{let I=()=>p(C).pos,b=()=>p(C).value;var w=jF();A(w,"font-size",o);const L=Ze(()=>c(b()));var R=V(w,!0);Y(w),ee(()=>{A(w,"x",I().x),A(w,"y",I().y),yt(w,"conflict",p(L)),rt(R,b())}),T(m,w)}),Y(g),T(f,g)};he(_,f=>{n().cornerMarks.length&&f(v)})}T(t,u),se()}var KF=de('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),XF=de('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),ZF=de('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),QF=de("<!><!>",1),JF=de('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function e$(t,e){ae(e,!1);const n=it(),r=()=>Ce(zt,"$settingsStore",n),o=()=>Ce(Aa,"$puzzleStore",n),a=()=>Ce(Xt,"$toolStore",n),s=D(),c=D(),u=D(),_=D(),v=D(),f=D(),g=D();let m=U(e,"cell",8);const C=.8,I=400;function b(F,P){if(!F)return[];let K=[...sp(p(v),P.toCoords())].map(J=>J.value).filter(J=>J!==null);return K=[...new Set(K)],K}function w(F){return F?"1":"0"}k(()=>Z(m()),()=>{S(s,m().value)}),k(()=>Z(m()),()=>{S(c,m().given)}),k(()=>Z(m()),()=>{S(u,Zn({r:m().r,c:m().c}))}),k(()=>r(),()=>{S(_,r().highlightPencilmarkConflicts)}),k(()=>o(),()=>{S(v,o())}),k(()=>r(),()=>{S(f,r().showSolution)}),k(()=>(p(_),Z(m())),()=>{S(g,b(p(_),m()))}),Ee(),ge();var L=Ne(),R=ue(L);{var M=F=>{var P=JF(),B=V(P);{var K=ce=>{var Q=Ne(),re=ue(Q);{var pe=me=>{var _e=KF();A(_e,"font-size",C),A(_e,"font-weight",I);var Ae=V(_e,!0);Y(_e),ee(()=>{A(_e,"x",p(u).x),A(_e,"y",p(u).y),rt(Ae,m().region)}),T(me,_e)};he(re,me=>{m().region!==null&&me(pe)})}T(ce,Q)},J=ce=>{var Q=Ne(),re=ue(Q);{var pe=_e=>{var Ae=Ne(),Ve=ue(Ae);{var ye=we=>{var ct=XF();A(ct,"font-size",C),A(ct,"font-weight",I);var qe=V(ct,!0);ee(()=>rt(qe,w(m().fog))),Y(ct),ee(()=>{A(ct,"x",p(u).x),A(ct,"y",p(u).y)}),T(we,ct)};he(Ve,we=>{m().fog!==null&&we(ye)})}T(_e,Ae)},me=_e=>{var Ae=Ne(),Ve=ue(Ae);{var ye=ct=>{var qe=ZF();A(qe,"font-size",C),A(qe,"font-weight",I);var Ln=V(qe,!0);Y(qe),ee(()=>{A(qe,"x",p(u).x),A(qe,"y",p(u).y),yt(qe,"given",p(c)),rt(Ln,p(s))}),T(ct,qe)},we=ct=>{var qe=QF(),Ln=ue(qe);qF(Ln,{get cell(){return m()},get seen_values(){return p(g)}});var Fn=$(Ln);YF(Fn,{get cell(){return m()},get seen_values(){return p(g)}}),T(ct,qe)};he(Ve,ct=>{p(s)!==null?ct(ye):ct(we,!1)},!0)}T(_e,Ae)};he(re,_e=>{a()===d.FOG?_e(pe):_e(me,!1)},!0)}T(ce,Q)};he(B,ce=>{a()===d.REGIONS?ce(K):ce(J,!1)})}Y(P),ee(()=>yt(P,"hide-given",m().given)),T(F,P)};he(R,F=>{p(f)||F(M)})}T(t,L),se()}var t$=de("<path></path>"),n$=de('<g class="highlights-group"></g>');function r$(t,e){ae(e,!1);const n=it(),r=()=>Ce(Xt,"$toolStore",n);let o=U(e,"cell",8);function a(_){const v=Zn({r:o().r,c:o().c}),f=o().highlights.length;return o().highlights.map((m,C)=>{let I=OU(C,f);I=I.map(w=>w.add(v));const b=Di(I,!0);return{colorId:m,d:b}})}ge();var s=Ne(),c=ue(s);{var u=_=>{var v=Ne(),f=ue(v);{var g=m=>{var C=n$();lt(C,5,()=>a(o()),Lt,(I,b)=>{let w=()=>p(b).colorId,L=()=>p(b).d;var R=t$();ee(()=>{oo(R,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),A(R,"d",L())}),T(I,R)}),Y(C),T(m,C)};he(f,m=>{o().highlights.length&&m(g)})}T(_,v)};he(c,_=>{r()!==d.REGIONS&&_(u)})}T(t,s),se()}var o$=de('<path class="cell-marker" fill="none"></path>'),i$=de('<circle fill="none" opacity="0.9"></circle>');function a$(t,e){ae(e,!1);const n=D(),r=D();let o=U(e,"marker",8);const a=.3,s=.08;k(()=>Z(o()),()=>{S(n,ip(o(),a))}),k(()=>Z(o()),()=>{S(r,El(o().colorId,"black"))}),Ee(),ge();var c=Ne(),u=ue(c);{var _=f=>{var g=o$();A(g,"stroke-width",s),ee(()=>{A(g,"d",p(n)),A(g,"stroke",p(r))}),T(f,g)},v=f=>{var g=i$();A(g,"r",a),A(g,"stroke-width",s),ee(()=>{oo(g,`cell-marker color-${o().colorId??""}`),A(g,"cx",o().c),A(g,"cy",o().r),A(g,"stroke",p(r))}),T(f,g)};he(u,f=>{o().marker==="X"?f(_):f(v,!1)})}T(t,c),se()}var s$=de('<g class="cell-markers"></g>');function l$(t,e){let n=U(e,"markers",8);var r=s$();lt(r,5,n,o=>`${o.r}, ${o.c}, ${o.marker}`,(o,a)=>{a$(o,{get marker(){return p(a)}})}),Y(r),T(t,r)}var c$=de('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function u$(t,e){ae(e,!1);const n=D();let r=U(e,"draftLineMarker",8);const o=.2;function a(u){return u.map(v=>[new Ge(v.p1.c,v.p1.r),new Ge(v.p2.c,v.p2.r)]).flat()}function s(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?El(_,"black"):"darkred"}k(()=>Z(r()),()=>{S(n,Di(a(r().draftLine)))}),Ee(),ge();var c=c$();ee(()=>A(c,"stroke",s(r()))),A(c,"stroke-width",o),A(c,"opacity",.5),ee(()=>A(c,"d",p(n))),T(t,c),se()}var d$=de('<path fill="none" opacity="0.9"></path>');function _$(t,e){ae(e,!1);const n=D(),r=D();let o=U(e,"marker",8);const a=.08,s=.04;k(()=>Z(o()),()=>{S(n,ip(o(),a))}),k(()=>Z(o()),()=>{S(r,El(o().colorId,"black"))}),Ee(),ge();var c=d$();A(c,"stroke-width",s),ee(()=>{A(c,"d",p(n)),oo(c,`edge-marker color-${o().colorId??""}`),A(c,"stroke",p(r))}),T(t,c),se()}var f$=de('<g class="edge-markers"></g>');function g$(t,e){let n=U(e,"markers",8);var r=f$();lt(r,5,n,o=>`${o.r}, ${o.c}`,(o,a)=>{_$(o,{get marker(){return p(a)}})}),Y(r),T(t,r)}var h$=de('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),v$=de('<g class="line-markers svelte-yha19m"></g>');function p$(t,e){ae(e,!1);let n=U(e,"lineMarkers",8);const r=.09;function o(c){return JSON.stringify(c)}function a(c){return El(c,"black")}ge();var s=v$();lt(s,5,n,c=>o(c),(c,u)=>{var _=h$();A(_,"stroke-width",r),ee(()=>A(_,"stroke",a(p(u).colorId))),ee(()=>{A(_,"x1",p(u).p1.c),A(_,"y1",p(u).p1.r),A(_,"x2",p(u).p2.c),A(_,"y2",p(u).p2.r),oo(_,`line-marker color-${p(u).colorId??""} svelte-yha19m`)}),T(c,_)}),Y(s),T(t,s),se()}var m$=de('<g class="pen-tool"><!><!><!><!></g>');function C$(t,e){ae(e,!1);const n=it(),r=()=>Ce(Ps,"$penToolStore",n),o=D();k(()=>r(),()=>{S(o,{draftLine:r().draftLine,mode:r().mode})}),Ee(),ge();var a=m$(),s=V(a);p$(s,{get lineMarkers(){return r().lineMarkers}});var c=$(s);g$(c,{get markers(){return r().edgeMarkers}});var u=$(c);l$(u,{get markers(){return r().cellMarkers}});var _=$(u);u$(_,{get draftLineMarker(){return p(o)}}),Y(a),T(t,a),se()}var E$=de('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function I$(t,e){ae(e,!1);const n=it(),r=()=>Ce(Do,"$selectionStore",n),o=()=>Ce(zt,"$settingsStore",n),a=()=>Ce(Aa,"$puzzleStore",n),s=()=>Ce(Xt,"$toolStore",n),c=D(),u=D(),_=D(),v=D(),f={type:H.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function g(b,w){return b.length?BF(p(_),b):[]}k(()=>r(),()=>{S(c,r().cells)}),k(()=>o(),()=>{S(u,o().highlightCellsSeenBySelection)}),k(()=>a(),()=>{S(_,a())}),k(()=>s(),()=>{S(v,ad(s()))}),Ee(),ge();var m=Ne(),C=ue(m);{var I=b=>{var w=E$(),L=V(w),R=Ze(()=>g(p(c),p(_)));ma(L,{get cells(){return p(R)},shape:f}),Y(w),T(b,w)};he(C,b=>{p(u)&&p(v)&&b(I)})}T(t,m),se()}function bl(t){const e=[],n=t.map(a=>a.value).filter(a=>a!==null),o=[...wv(n).entries()].filter(([,a])=>a>1).map(([a])=>a);return e.push(...t.filter(a=>a.value!==null&&o.includes(a.value))),e}function b$(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...bl(r))}return new Set(e)}function w$(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...bl(r))}return new Set(e)}function O$(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...bl(r))}return new Set(e)}function y$(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getCellsByKnightMove(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function L$(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getNeighboorCells(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function A$(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getOrthogonallyAdjacentCells(r).filter(s=>s.value!==null).filter(s=>s.value!==null&&r.value!==null&&Math.abs(r.value-s.value)===1);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function S$(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const o=t.getDisjointGroup(r),a=bl(o);a.length&&e.push(...a)}return new Set(e)}function N$(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const o=new Set([...b$(t),...w$(t),...O$(t)]);n=n.union(o)}return e.get(d.ANTIKNIGHT)&&(n=n.union(y$(t))),e.get(d.ANTIKING)&&(n=n.union(L$(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(A$(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(S$(t))),n}function x$(t,e){return[...new Set([...N$(t,e)])]}var T$=de('<rect class="conflict svelte-4mp6ok"></rect>'),D$=de('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function R$(t,e){ae(e,!1);const n=it(),r=()=>Ce(zt,"$settingsStore",n),o=()=>Ce(hn,"$gridStore",n),a=()=>Ce(kr,"$globalConstraintsStore",n),s=()=>Ce(gn,"$cellsStore",n),c=D(),u=D(),_=D(),v=D();H.CAGE;function f(I){return x$(p(u),p(_)).map(L=>L.toCoords())}k(()=>r(),()=>{S(c,r().checkConflicts)}),k(()=>o(),()=>{S(u,o())}),k(()=>a(),()=>{S(_,a())}),k(()=>s(),()=>{S(v,s())}),Ee(),ge();var g=Ne(),m=ue(g);{var C=I=>{var b=D$();lt(b,5,()=>f(p(v)),Lt,(w,L)=>{var R=T$();A(R,"width",1),A(R,"height",1),ee(()=>{A(R,"x",p(L).c),A(R,"y",p(L).r)}),T(w,R)}),Y(b),T(I,b)};he(m,I=>{p(c)&&I(C)})}T(t,g),se()}var k$=de('<line class="diag svelte-ylotlw"></line>'),M$=de('<line class="antidiag svelte-ylotlw"></line>'),G$=de('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),U$=de('<line class="diag svelte-ylotlw"></line>'),F$=de('<line class="antidiag svelte-ylotlw"></line>'),$$=de('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),H$=de('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function P$(t,e){ae(e,!1);const n=it(),r=()=>Ce(kr,"$globalConstraintsStore",n),o=()=>Ce(hn,"$gridStore",n),a=D(),s=D(),c=D(),u=D(),_=D(),v=D(),f=D(),g=D(),m=D(),C=D(),I=D(),b=D(),w=0,L=0,R=0,M=0;k(()=>r(),()=>{S(a,r())}),k(()=>(p(a),d),()=>{S(s,!!p(a).get(d.POSITIVE_DIAGONAL))}),k(()=>(p(a),d),()=>{S(c,!!p(a).get(d.NEGATIVE_DIAGONAL))}),k(()=>(p(a),d),()=>{S(u,!!p(a).get(d.NEGATIVE_ANTIDIAGONAL))}),k(()=>(p(a),d),()=>{S(_,!!p(a).get(d.POSITIVE_ANTIDIAGONAL))}),k(()=>(p(a),d),()=>{S(v,!!p(a).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),k(()=>(p(a),d),()=>{S(f,!!p(a).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),k(()=>o(),()=>{S(g,o())}),k(()=>p(g),()=>{S(m,p(g).nCols)}),k(()=>p(g),()=>{S(C,p(g).nRows)}),k(()=>p(g),()=>{S(I,p(g).nCols)}),k(()=>p(g),()=>{S(b,p(g).nRows)}),Ee(),ge();var F=H$(),P=V(F);{var B=ye=>{var we=k$();A(we,"x1",w),A(we,"y1",L),ee(()=>{A(we,"x2",p(I)),A(we,"y2",p(b))}),T(ye,we)};he(P,ye=>{p(c)&&ye(B)})}var K=$(P);{var J=ye=>{var we=M$();A(we,"x1",w),A(we,"y1",L),ee(()=>{A(we,"x2",p(I)),A(we,"y2",p(b))}),T(ye,we)};he(K,ye=>{p(u)&&ye(J)})}var ce=$(K);{var Q=ye=>{var we=G$();A(we,"x1",w),A(we,"y1",L),ee(()=>{A(we,"x2",p(I)),A(we,"y2",p(b))}),T(ye,we)};he(ce,ye=>{p(v)&&ye(Q)})}var re=$(ce);{var pe=ye=>{var we=U$();A(we,"x2",M),A(we,"y1",R),ee(()=>{A(we,"x1",p(m)),A(we,"y2",p(C))}),T(ye,we)};he(re,ye=>{p(s)&&ye(pe)})}var me=$(re);{var _e=ye=>{var we=F$();A(we,"x2",M),A(we,"y1",R),ee(()=>{A(we,"x1",p(m)),A(we,"y2",p(C))}),T(ye,we)};he(me,ye=>{p(_)&&ye(_e)})}var Ae=$(me);{var Ve=ye=>{var we=$$();A(we,"x2",M),A(we,"y1",R),ee(()=>{A(we,"x1",p(m)),A(we,"y2",p(C))}),T(ye,we)};he(Ae,ye=>{p(f)&&ye(Ve)})}Y(F),T(t,F),se()}var B$=de('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function W$(t,e){ae(e,!1);const n=it(),r=()=>Ce(gn,"$cellsStore",n),o=()=>Ce(Rv,"$showFogStore",n),a=()=>Ce(rl,"$solutionStore",n),s=()=>Ce(hn,"$gridStore",n),c=D(),u=D(),_=D(),v=D(),f=D(),g=D();let m=U(e,"boundingBox",8),C=U(e,"gridShape",8);function I(pe){const me=pe.filter(we=>we.fog);if(!p(f))return me.map(ct=>ct.toCoords());const _e=pe.filter(we=>we.value===p(f)[we.r][we.c]);let Ae=new Set;for(const we of _e){const ct=p(g).getNeighboorCells(we);Ae=new Set([...ct,we])}return[...new Set(me).difference(Ae)].map(we=>we.toCoords())}k(()=>r(),()=>{S(c,r())}),k(()=>p(c),()=>{S(u,I(p(c)))}),k(()=>p(u),()=>{S(_,gi(p(u),0))}),k(()=>o(),()=>{S(v,o())}),k(()=>a(),()=>{S(f,a())}),k(()=>s(),()=>{S(g,s())}),Ee(),ge();var b=B$(),w=V(b),L=V(w);Y(w);var R=$(w),M=V(R);A(M,"stroke-width",.5);var F=$(M);A(F,"stroke-width",.375);var P=$(F);A(P,"stroke-width",.25);var B=$(P);A(B,"stroke-width",.125),xo(),Y(R);var K=$(R),J=V(K);xo(),Y(K);var ce=$(K),Q=V(ce),re=$(Q);A(re,"x",0),A(re,"y",0),Y(ce),Y(b),ee(()=>{A(L,"d",p(_)),yt(R,"disabled",!p(v)),yt(K,"disabled",!p(v)),A(J,"x",m().x),A(J,"y",m().y),A(J,"width",m().width),A(J,"height",m().height),A(Q,"x",m().x),A(Q,"y",m().y),A(Q,"width",m().width),A(Q,"height",m().height),A(re,"width",C().nCols),A(re,"height",C().nRows)}),T(t,b),se()}var z$=de('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function Y$(t,e){ae(e,!1);const n=it(),r=()=>Ce(Rv,"$showFogStore",n),o=D();let a=U(e,"gridShape",8);k(()=>r(),()=>{S(o,r())}),Ee(),ge();var s=z$(),c=V(s);A(c,"x",0),A(c,"y",0),Y(s),ee(()=>{A(s,"visibility",p(o)?"visible":"hidden"),A(c,"width",a().nCols),A(c,"height",a().nRows)}),T(t,s),se()}var j$=de('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function V$(t,e){ae(e,!1);const n=D();let r=U(e,"r",8),o=U(e,"c",8),a=U(e,"val",8);const s=.8,c=400;k(()=>(Z(r()),Z(o())),()=>{S(n,Zn({r:r(),c:o()}))}),Ee(),ge();var u=Ne(),_=ue(u);{var v=f=>{var g=j$();A(g,"font-size",s),A(g,"font-weight",c);var m=V(g,!0);Y(g),ee(()=>{A(g,"x",p(n).x),A(g,"y",p(n).y),rt(m,a())}),T(f,g)};he(_,f=>{a()!==null&&f(v)})}T(t,u),se()}var q$=de('<g class="solution-layer"></g>');function K$(t,e){ae(e,!1);const n=it(),r=()=>Ce(rl,"$solutionStore",n),o=()=>Ce(zt,"$settingsStore",n),a=()=>Ce(nl,"$gameModeStore",n),s=D(),c=D(),u=D();k(()=>r(),()=>{S(s,r())}),k(()=>o(),()=>{S(c,o().showSolution)}),k(()=>a(),()=>{S(u,a())}),Ee(),ge();var _=Ne(),v=ue(_);{var f=g=>{var m=q$();lt(m,5,()=>p(s),Lt,(C,I,b)=>{var w=Ne(),L=ue(w);lt(L,1,()=>p(I),Lt,(R,M,F)=>{V$(R,{r:b,c:F,get val(){return p(M)}})}),T(C,w)}),Y(m),T(g,m)};he(v,g=>{p(s)&&p(c)&&p(u)===hi.SETTING&&g(f)})}T(t,_),se()}var X$=de("<g></g>"),Z$=de('<g mask="url(#fog-mask-fog)"></g>');function eo(t,e){let n=U(e,"elements",8),r=U(e,"g_name",8),o=U(e,"Component",8);var a=Z$();lt(a,5,n,Lt,(s,c)=>{let u=()=>p(c).toolId,_=()=>p(c).element;var v=X$();lt(v,5,()=>Object.entries(_()),f=>f[0],(f,g)=>{o()(f,{get tool(){return p(g)[1]}})}),Y(v),ee(()=>oo(v,`element-group ${u()}`)),T(s,v)}),Y(a),ee(()=>oo(a,Nh(r()))),T(t,a)}var Q$=de('<line class="svelte-yr67cf"></line>');function J$(t,e){ae(e,!1);const n=D(),r=D(),o=D();let a=U(e,"shape",8),s=U(e,"coords",8);const[c,u]=s(),_=u.c,v=c.c===u.c?u.c+1:u.c,f=u.r,g=c.r===u.r?u.r+1:u.r;k(()=>Z(a()),()=>{S(n,a().stroke??"black")}),k(()=>Z(a()),()=>{var C;S(r,(C=a())==null?void 0:C.opacity)}),k(()=>Z(a()),()=>{S(o,a().strokeWidth??.02)}),Ee(),ge();var m=Q$();A(m,"x1",_),A(m,"x2",v),A(m,"y1",f),A(m,"y2",g),ee(()=>{A(m,"stroke",p(n)),A(m,"stroke-width",p(o)),A(m,"opacity",p(r))}),T(t,m),se()}var e4=de('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function t4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=U(e,"tool",8);const u=c().cells,_=Zt(c().toolId,Tt)??Qh;function v(I,b){return b===H.TEXT_ONLY?I.value?I.value:"-":I.value??""}function f(){if(c().toolId!==d.EDGE_INEQUALITY&&c().toolId!==d.ONE_WAY_DOOR)return 0;const I=Zn(u[0]);return Zn(u[1]).subtract(I).angle()/(2*Math.PI)*360}k(()=>Z(c()),()=>{S(n,c().shape??_)}),k(()=>zs,()=>{S(r,TL(zs(u)))}),k(()=>(p(n),H),()=>{var I;S(o,((I=p(n))==null?void 0:I.type)||H.CIRCLE)}),k(()=>p(n),()=>{var I;S(a,((I=p(n))==null?void 0:I.fontSize)??.2)}),k(()=>p(n),()=>{var I;S(s,((I=p(n))==null?void 0:I.fontColor)??"black")}),Ee(),ge();var g=Ne(),m=ue(g);{var C=I=>{var b=e4(),w=V(b);{var L=P=>{Tr(P,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},R=P=>{var B=Ne(),K=ue(B);{var J=Q=>{Tr(Q,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},ce=Q=>{var re=Ne(),pe=ue(re);{var me=Ae=>{J$(Ae,{coords:u,get shape(){return p(n)}})},_e=Ae=>{Il(Ae,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return p(n)}})};he(pe,Ae=>{p(o)===H.BORDER_LINE?Ae(me):Ae(_e,!1)},!0)}T(Q,re)};he(K,Q=>{p(o)===H.TEXT_ONLY?Q(J):Q(ce,!1)},!0)}T(P,B)};he(w,P=>{c().toolId===d.EDGE_INEQUALITY||c().toolId===d.ONE_WAY_DOOR?P(L):P(R,!1)})}var M=$(w);ee(()=>A(M,"transform",`rotate(${f()}, ${p(r).x}, ${p(r).y} )`));var F=V(M,!0);ee(()=>rt(F,v(c(),p(o)))),Y(M),Y(b),ee(()=>{A(M,"x",p(r).x),A(M,"y",p(r).y),A(M,"font-size",p(a)),A(M,"fill",p(s))}),T(I,b)};he(m,I=>{u.length===2&&I(C)})}T(t,g),se()}var n4=de('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),r4=de('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),o4=de('<g class="quadruple-text"><!></g>');function i4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=U(e,"cornerTool",8);const u=c().cells,_=new Ge(u[u.length-1].c,u[u.length-1].r),v=Zt(c().toolId,Tt)??Jh;k(()=>Z(c()),()=>{S(n,c().value)}),k(()=>Z(c()),()=>{S(r,c().shape??v)}),k(()=>p(r),()=>{var C;S(o,((C=p(r))==null?void 0:C.fontSize)??.2)}),k(()=>p(r),()=>{var C;S(a,((C=p(r))==null?void 0:C.fontColor)??"black")}),k(()=>p(n),()=>{var C;S(s,p(n)?(C=p(n))==null?void 0:C.split(","):[])}),Ee(),ge();var f=Ne(),g=ue(f);{var m=C=>{var I=o4(),b=V(I);{var w=R=>{var M=n4(),F=V(M,!0);ee(()=>rt(F,p(s).join(" "))),Y(M),ee(()=>{A(M,"x",_.x),A(M,"y",_.y),A(M,"font-size",p(o)),A(M,"fill",p(a))}),T(R,M)},L=R=>{var M=r4(),F=ue(M),P=V(F,!0);ee(()=>rt(P,p(s).slice(0,2).join(" "))),Y(F);var B=$(F),K=V(B,!0);ee(()=>rt(K,p(s).slice(2).join(" "))),Y(B),ee(()=>{A(F,"x",_.x),A(F,"y",_.y),A(F,"dy",-p(o)/2),A(F,"font-size",p(o)),A(F,"fill",p(a)),A(B,"x",_.x),A(B,"y",_.y),A(B,"dy",p(o)/2),A(B,"font-size",p(o)),A(B,"fill",p(a))}),T(R,M)};he(b,R=>{p(s).length<=2?R(w):R(L,!1)})}Y(I),ee(()=>A(I,"data-count",p(s).length)),T(C,I)};he(g,C=>{p(n)&&C(m)})}T(t,f),se()}var a4=de('<text text-anchor="middle" dominant-baseline="central"> </text>'),s4=de('<g class="corner-tool"><!><!></g>');function l4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D();let s=U(e,"tool",8);const c=s().cells,u=Zt(s().toolId,Tt)??Jh,_=new Ge(c[c.length-1].c,c[c.length-1].r);function v(C,I){return I===H.TEXT_ONLY?C.value?C.value:"-":C.value??""}k(()=>Z(s()),()=>{S(n,s().shape??u)}),k(()=>(p(n),H),()=>{var C;S(r,((C=p(n))==null?void 0:C.type)??H.CIRCLE)}),k(()=>p(n),()=>{var C;S(o,((C=p(n))==null?void 0:C.fontSize)??.2)}),k(()=>p(n),()=>{var C;S(a,((C=p(n))==null?void 0:C.fontColor)??"black")}),Ee(),ge();var f=Ne(),g=ue(f);{var m=C=>{var I=s4(),b=V(I);Il(b,{get cx(){return _.x},get cy(){return _.y},get shape(){return p(n)}});var w=$(b);{var L=M=>{i4(M,{get cornerTool(){return s()}})},R=M=>{var F=a4(),P=V(F,!0);ee(()=>rt(P,v(s(),p(r)))),Y(F),ee(()=>{A(F,"x",_.x),A(F,"y",_.y),A(F,"font-size",p(o)),A(F,"fill",p(a))}),T(M,F)};he(w,M=>{s().toolId===d.QUADRUPLE?M(L):M(R,!1)})}Y(I),T(C,I)};he(g,C=>{c.length===4&&C(m)})}T(t,f),se()}var c4=de('<text text-anchor="middle" dominant-baseline="central"> </text>'),u4=de('<g class="center-corner-or-edge-tool"><!><!></g>');function d4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=U(e,"tool",8);const _=u().cell,v=Zt(u().toolId,Tt)??Qh;function f(w,L){return L===H.TEXT_ONLY?w.value?w.value:"-":w.value??""}k(()=>Z(u()),()=>{S(n,u().shape??v)}),k(()=>{},()=>{S(r,_)}),k(()=>(p(n),H),()=>{var w;S(o,((w=p(n))==null?void 0:w.type)||H.CIRCLE)}),k(()=>p(n),()=>{var w;S(a,((w=p(n))==null?void 0:w.fontSize)??.2)}),k(()=>p(n),()=>{var w;S(s,((w=p(n))==null?void 0:w.fontColor)??"black")}),k(()=>p(r),()=>{S(c,p(r).r%1===.5&&p(r).c%1===.5)}),Ee(),ge();var g=u4(),m=V(g);Il(m,{get cx(){return p(r).c},get cy(){return p(r).r},get shape(){return p(n)}});var C=$(m);{var I=w=>{var L=Ze(()=>f(u(),p(o))),R=Ze(()=>Math.floor(p(r).c)),M=Ze(()=>Math.floor(p(r).r));Ca(w,{get value(){return p(L)},get x(){return p(R)},get y(){return p(M)},position:"TL",get fontColor(){return p(s)}})},b=w=>{var L=c4(),R=V(L,!0);ee(()=>rt(R,f(u(),p(o)))),Y(L),ee(()=>{A(L,"x",p(r).c),A(L,"y",p(r).r),A(L,"font-size",p(a)),A(L,"fill",p(s))}),T(w,L)};he(C,w=>{p(c)?w(I):w(b,!1)})}Y(g),T(t,g),se()}var _4=de('<path fill="none"></path>');function ko(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=U(e,"linePoints",8),_=U(e,"shape",8,void 0);const v="round",f="round";k(()=>Z(_()),()=>{var m;S(n,((m=_())==null?void 0:m.stroke)??"gray")}),k(()=>Z(_()),()=>{var m;S(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),k(()=>Z(_()),()=>{var m;S(o,((m=_())==null?void 0:m.strokeDasharray)??0)}),k(()=>Z(_()),()=>{var m;S(a,((m=_())==null?void 0:m.strokeDashoffset)??0)}),k(()=>Z(_()),()=>{var m,C,I,b,w,L,R,M;S(s,{shortenHead:((C=(m=_())==null?void 0:m.linePathOptions)==null?void 0:C.shortenHead)??.2,shortenTail:((b=(I=_())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((L=(w=_())==null?void 0:w.linePathOptions)==null?void 0:L.bezierRounding)??.2,closeLoops:((M=(R=_())==null?void 0:R.linePathOptions)==null?void 0:M.closeLoops)??!1})}),k(()=>(Z(u()),p(s)),()=>{S(c,Cl(u(),p(s)))}),Ee(),ge();var g=_4();A(g,"stroke-linejoin",v),A(g,"stroke-linecap",f),ee(()=>{A(g,"d",p(c)),A(g,"stroke",p(n)),A(g,"stroke-width",p(r)),A(g,"stroke-dasharray",p(o)),A(g,"stroke-dashoffset",p(a))}),T(t,g),se()}var f4=oe("<!> <!> <!>",1);function g4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D();let s=U(e,"linePoints",8),c=U(e,"shape",8,Ia);function u(b){var R;const w=Nt.cloneDeep(b);w.r=w.r||.2;const L=w.r;return w.strokeDasharray=b.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:L,shortenTail:L,bezierRounding:(R=w.linePathOptions)==null?void 0:R.bezierRounding},w}k(()=>Z(s()),()=>{S(n,s().length)}),k(()=>(p(n),Z(s())),()=>{S(r,p(n)>=0?s()[0]:void 0)}),k(()=>(p(n),Z(s())),()=>{S(o,p(n)>=0?s()[p(n)-1]:void 0)}),k(()=>Z(c()),()=>{S(a,u(c()))}),Ee(),ge();var _=f4(),v=ue(_);{var f=b=>{Tr(b,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(a)}})};he(v,b=>{p(r)&&b(f)})}var g=$(v,2);{var m=b=>{ko(b,{get linePoints(){return s()},get shape(){return p(a)}})};he(g,b=>{p(n)>1&&b(m)})}var C=$(g,2);{var I=b=>{Tr(b,{get x(){return p(o).x},get y(){return p(o).y},get shape(){return p(a)}})};he(C,b=>{p(o)&&b(I)})}T(t,_),se()}var h4=oe("<!> <!> <!>",1);function v4(t,e){ae(e,!1);const n=D(),r=D(),o=D();let a=U(e,"linePoints",8),s=U(e,"shape",12,Ia);const c=4,u=.5;function _(M,F){const P=F.r??u,B=F.n??c,K=F.angle??0,J=op(P,B,new Ge(0,0),!0,0),ce=(B+(M-K/360)*B%B)%B,Q=Math.floor(ce)%B,re=Math.ceil(ce)%B;return J[Q].lerp(J[re],ce%1).length()}function v(M){if(p(n)<=1)return 0;const F=a()[0],B=a()[1].subtract(F).angle()/(2*Math.PI);return _(B,M)}function f(M){if(p(n)<=1)return 0;const F=a()[p(n)-1],B=a()[p(n)-2].subtract(F).angle()/(2*Math.PI);return _(B,M)}function g(M){var P;const F=Nt.cloneDeep(M);return F.r=F.r||u,F.opacity=1,F.linePathOptions={shortenHead:v(F),shortenTail:f(F),bezierRounding:(P=F.linePathOptions)==null?void 0:P.bezierRounding},F}k(()=>Z(a()),()=>{S(n,a().length)}),k(()=>(p(n),Z(a())),()=>{S(r,p(n)>=0?a()[0]:void 0)}),k(()=>(p(n),Z(a())),()=>{S(o,p(n)>=0?a()[p(n)-1]:void 0)}),k(()=>Z(s()),()=>{s(g(s()))}),Ee(),ge();var m=h4(),C=ue(m);{var I=M=>{Ys(M,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return s()}})};he(C,M=>{p(r)&&M(I)})}var b=$(C,2);{var w=M=>{ko(M,{get linePoints(){return a()},get shape(){return s()}})};he(b,M=>{p(n)>1&&M(w)})}var L=$(b,2);{var R=M=>{Ys(M,{get cx(){return p(o).x},get cy(){return p(o).y},get shape(){return s()}})};he(L,M=>{p(o)&&M(R)})}T(t,m),se()}var p4=oe("<!> <!>",1);function ch(t,e){ae(e,!1);const n=D();let r=U(e,"linePoints",8),o=U(e,"shape",8,Ia);function a(m){var b,w,L;const C=Nt.cloneDeep(m);C.r=C.r||.3,C.opacity=1;const I=C.r;return C.linePathOptions={shortenHead:((b=C.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(L=C.linePathOptions)==null?void 0:L.bezierRounding},C}function s(m){var b,w,L;const C=Nt.cloneDeep(m);C.r=C.r||.3,C.opacity=1,C.strokeWidth=0;const I=C.r;return C.linePathOptions={shortenHead:((b=C.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(L=C.linePathOptions)==null?void 0:L.bezierRounding},C}k(()=>Z(r()),()=>{S(n,r().length>0?r()[0]:void 0)}),Ee(),ge();var c=p4(),u=ue(c);{var _=m=>{var C=Ze(()=>a(o()));ko(m,{get linePoints(){return r()},get shape(){return p(C)}})};he(u,m=>{r().length>1&&m(_)})}var v=$(u,2);{var f=m=>{var C=Ze(()=>a(o()));Tr(m,{get x(){return p(n).x},get y(){return p(n).y},get shape(){return p(C)}})},g=m=>{var C=Ne(),I=ue(C);{var b=w=>{var L=Ze(()=>s(o()));Ys(w,{get cx(){return p(n).x},get cy(){return p(n).y},get shape(){return p(L)}})};he(I,w=>{p(n)&&w(b)},!0)}T(m,C)};he(v,m=>{p(n)&&o().type===H.THERMO_WITH_CIRCLE?m(f):m(g,!1)})}T(t,c),se()}var m4=de('<g class="line-tool"><!></g>');function C4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D();let s=U(e,"tool",8);const c=Zt(s().toolId,Tt)??Ia;k(()=>Z(s()),()=>{S(n,zs(s().cells))}),k(()=>Z(s()),()=>{S(r,s().shape??c)}),k(()=>(p(r),H),()=>{var g;S(o,((g=p(r))==null?void 0:g.type)||H.LINE)}),k(()=>p(r),()=>{var g;S(a,((g=p(r))==null?void 0:g.opacity)??.8)}),Ee(),ge();var u=m4(),_=V(u);{var v=g=>{ko(g,{get linePoints(){return p(n)},get shape(){return p(r)}})},f=g=>{var m=Ne(),C=ue(m);{var I=w=>{g4(w,{get linePoints(){return p(n)},get shape(){return p(r)}})},b=w=>{var L=Ne(),R=ue(L);{var M=P=>{v4(P,{get linePoints(){return p(n)},get shape(){return p(r)}})},F=P=>{var B=Ne(),K=ue(B);{var J=Q=>{ch(Q,{get linePoints(){return p(n)},get shape(){return p(r)}})},ce=Q=>{var re=Ne(),pe=ue(re);{var me=Ae=>{ch(Ae,{get linePoints(){return p(n)},get shape(){return p(r)}})},_e=Ae=>{ko(Ae,{get linePoints(){return p(n)},get shape(){return p(r)}})};he(pe,Ae=>{p(o)===H.THERMO_WITH_POLYGON?Ae(me):Ae(_e,!1)},!0)}T(Q,re)};he(K,Q=>{p(o)===H.THERMO_WITH_CIRCLE?Q(J):Q(ce,!1)},!0)}T(P,B)};he(R,P=>{p(o)===H.LINE_WITH_POLYGON_ENDS?P(M):P(F,!1)},!0)}T(w,L)};he(C,w=>{p(o)===H.LINE_WITH_CIRCLE_ENDS?w(I):w(b,!1)},!0)}T(g,m)};he(_,g=>{p(o)===H.LINE?g(v):g(f,!1)})}Y(u),ee(()=>A(u,"opacity",p(a))),T(t,u),se()}var E4=de('<g class="cage-tool"><!></g>');function I4(t,e){ae(e,!1);const n=D();let r=U(e,"tool",8);const o=Zt(r().toolId,Tt)??dd;k(()=>Z(r()),()=>{S(n,r().shape??o)}),Ee(),ge();var a=E4(),s=V(a);ap(s,{get cells(){return r().cells},get shape(){return p(n)},get value(){return r().value}}),Y(a),T(t,a),se()}var b4=oe("<!> <!> <!> <!>",1);function w4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D();let v=U(e,"tool",8);const f=Zt(v().toolId,Tt)??SO,g=800,m=v().value;k(()=>Z(v()),()=>{S(n,v().shape??f)}),k(()=>p(n),()=>{S(r,p(n).inset??.15)}),k(()=>p(n),()=>{S(o,p(n).strokeWidth??.07)}),k(()=>p(n),()=>{S(a,p(n).fontColor??p(n).stroke??"black")}),k(()=>Z(v()),()=>{S(s,v().cells[v().cells.length-1])}),k(()=>Z(v()),()=>{S(c,v().cells2[v().cells2.length-1])}),k(()=>(p(s),p(r)),()=>{S(u,new Ge(p(s).c+1-p(r)-.05,p(s).r+1-p(r)-.05))}),k(()=>(p(c),p(r)),()=>{S(_,new Ge(p(c).c+1-p(r)-.05,p(c).r+1-p(r)-.05))}),Ee(),ge();var C=b4(),I=ue(C);ma(I,{get cells(){return v().cells},get shape(){return p(n)}});var b=$(I,2);Ca(b,{value:m,get x(){return p(_).x},get y(){return p(_).y},position:"BR",get fontColor(){return p(a)},fontWeight:g});var w=$(b,2);ma(w,{get cells(){return v().cells2},get shape(){return p(n)}});var L=$(w,2);Ca(L,{value:m,get x(){return p(_).x},get y(){return p(_).y},position:"BR",get fontColor(){return p(a)},fontWeight:g}),T(t,C),se()}var O4=de('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function y4(t,e){var P;ae(e,!1);const n=D(),r=D(),o=D();let a=U(e,"tool",8);const s=a().cell,c=a().direction,u=Xh(s,c),_=Zn(s),v=Zt(a().toolId,Tt)??NO,f=((P=p(n))==null?void 0:P.fontSize)??.5,g=.03;function m(B){return B.value&&B.value.length?B.value:"-"}function C(){const J=Zn(u).subtract(_).length(),ce={shortenHead:.3*J,shortenTail:.55*J};return pa([s,u],ce)}const b=`outside-tool-arrow-marker-${crypto.randomUUID()}`;k(()=>Z(a()),()=>{S(n,a().shape??v)}),k(()=>p(n),()=>{var B;S(r,((B=p(n))==null?void 0:B.fontColor)??"var(--text-primary-color)")}),k(()=>p(n),()=>{var B;S(o,((B=p(n))==null?void 0:B.stroke)??"var(--text-primary-color)")}),Ee(),ge();var w=O4(),L=V(w);Ma(L,{id:b,l:.07,strokeWidth:g,get stroke(){return p(o)}});var R=$(L);ee(()=>A(R,"d",C())),A(R,"stroke-width",g),A(R,"marker-end",`url(#${b??""})`);var M=$(R);A(M,"font-size",f);var F=V(M,!0);ee(()=>rt(F,m(a()))),Y(M),Y(w),ee(()=>{A(R,"stroke",p(o)),A(M,"x",_.x),A(M,"y",_.y),A(M,"fill",p(r))}),T(t,w),se()}var L4=oe("<!> <!> <!>",1);function A4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=U(e,"linePoints",8),u=U(e,"shape",8);function _(b){const w=Nt.cloneDeep(b);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}k(()=>Z(c()),()=>{S(n,c().length)}),k(()=>(p(n),Z(c())),()=>{S(r,p(n)>1&&c()[0].equals(c()[p(n)-1]))}),k(()=>(p(n),Z(c())),()=>{S(o,p(n)>=0?c()[0]:void 0)}),k(()=>(p(n),Z(c())),()=>{S(a,p(n)>=0?c()[p(n)-1]:void 0)}),k(()=>Z(u()),()=>{S(s,_(u()))}),Ee(),ge();var v=L4(),f=ue(v);ko(f,{get linePoints(){return c()},get shape(){return u()}});var g=$(f,2);{var m=b=>{Tr(b,{get x(){return p(o).x},get y(){return p(o).y},get shape(){return p(s)}})};he(g,b=>{!p(r)&&p(o)&&b(m)})}var C=$(g,2);{var I=b=>{Tr(b,{get x(){return p(a).x},get y(){return p(a).y},get shape(){return p(s)}})};he(C,b=>{!p(r)&&p(a)&&b(I)})}T(t,v),se()}var S4=de('<g class="corner-line-tool"><!></g>');function N4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),a=D();let s=U(e,"tool",8);const c=Zt(s().toolId,Tt)??Ia;k(()=>(Z(s()),Ge),()=>{S(n,s().coords.map(g=>new Ge(g.c,g.r)))}),k(()=>Z(s()),()=>{S(r,s().shape??c)}),k(()=>(p(r),H),()=>{var g;S(o,((g=p(r))==null?void 0:g.type)||H.LINE)}),k(()=>p(r),()=>{var g;S(a,((g=p(r))==null?void 0:g.opacity)??1)}),Ee(),ge();var u=S4(),_=V(u);{var v=g=>{A4(g,{get linePoints(){return p(n)},get shape(){return p(r)}})},f=g=>{ko(g,{get linePoints(){return p(n)},get shape(){return p(r)}})};he(_,g=>{p(o)===H.MAZE_WALL?g(v):g(f,!1)})}Y(u),ee(()=>A(u,"opacity",p(a))),T(t,u),se()}var x4=de('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function T4(t,e){ae(e,!1);const n=it(),r=()=>Ce(hn,"$gridStore",n),o=()=>Ce(ht,"$localConstraintsStore",n),a=()=>Ce(Xt,"$toolStore",n),s=()=>Ce(gn,"$cellsStore",n),c=()=>Ce(zU,"$cageToolsStore",n),u=()=>Ce(PU,"$lineToolsStore",n),_=()=>Ce(YU,"$cloneToolsStore",n),v=()=>Ce(BU,"$cornerLineToolsStore",n),f=()=>Ce(jU,"$outsideDirectionToolsStore",n),g=()=>Ce(FU,"$edgeToolsStore",n),m=()=>Ce(HU,"$cornerToolsStore",n),C=()=>Ce($U,"$centerCornerOrEdgeToolsStore",n),I=D(),b=D(),w=D();let L=U(e,"svgRef",12,null);function R(){for(const[kt,Te]of o().entries()){if(!ga(kt))continue;if(Object.entries(Te).some(([ke,xe])=>!Kt(xe.cell,p(b))))return!0}return!1}function M(kt,Te){const Ie=R(),ke=ga(Te),xe=Ie||ke?1:.2,At=-xe,$a=-xe,Ol=kt.nCols+2*xe,vo=kt.nRows+2*xe;return{x:At,y:$a,width:Ol,height:vo}}function F(kt){return`${kt.x} ${kt.y} ${kt.width} ${kt.height}`}k(()=>r(),()=>{S(I,r())}),k(()=>p(I),()=>{S(b,{nRows:p(I).nRows,nCols:p(I).nCols})}),k(()=>(p(b),a()),()=>{S(w,M(p(b),a()))}),Ee(),ge();var P=x4();ee(()=>A(P,"viewBox",F(p(w))));var B=V(P);W$(B,{get boundingBox(){return p(w)},get gridShape(){return p(b)}});var K=$(B);Y$(K,{get gridShape(){return p(b)}});var J=$(K);MU(J,{get grid(){return r()}});var ce=$(J);vU(ce,{get gridShape(){return p(b)}});var Q=$(ce);lt(Q,5,s,Lt,(kt,Te)=>{r$(kt,{get cell(){return p(Te)}})}),Y(Q);var re=$(Q);I$(re,{});var pe=$(re);SF(pe,{});var me=$(pe);eo(me,{get elements(){return c()},g_name:"cage-tools-layer",Component:I4});var _e=$(me);eo(_e,{get elements(){return u()},g_name:"line-tools-layer",Component:C4});var Ae=$(_e);eo(Ae,{get elements(){return _()},g_name:"clone-tools-layer",Component:w4});var Ve=$(Ae);CU(Ve,{});var ye=$(Ve);P$(ye,{});var we=$(ye);TU(we,{});var ct=$(we);eo(ct,{get elements(){return v()},g_name:"corner-line-tools-layer",Component:N4});var qe=$(ct);iF(qe,{get boundingBox(){return p(w)}});var Ln=$(qe);eo(Ln,{get elements(){return f()},g_name:"outside-direction-tools-layer",Component:y4});var Fn=$(Ln);RU(Fn,{get boundingBox(){return p(w)}});var Pr=$(Fn);gU(Pr,{});var Jt=$(Pr);eo(Jt,{get elements(){return g()},g_name:"edge-tools-layer",Component:t4});var Cr=$(Jt);eo(Cr,{get elements(){return m()},g_name:"corner-tools-layer",Component:l4});var ho=$(Cr);eo(ho,{get elements(){return C()},g_name:"center-corner-edge-tools-layer",Component:d4});var ar=$(ho);C$(ar,{});var $n=$(ar);lt($n,5,s,Lt,(kt,Te)=>{e$(kt,{get cell(){return p(Te)}})}),Y($n);var Bo=$($n);K$(Bo,{});var Br=$(Bo);R$(Br,{}),Y(P),To(P,kt=>L(kt),()=>L()),T(t,P),se()}function D4(t){return YL(t)?(Jw(),!0):!1}function R4(t){return jL(t)?(Sv(),!0):!1}function k4(t){return VL(t)?(Nv(),!0):!1}function lu(t){(D4(t)||R4(t)||k4(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var M4=oe('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function G4(t,e){ae(e,!1);const n=it(),r=()=>Ce(rp,"$InputHandlerStore",n),o=()=>Ce(di,"$svgRefStore",n),a=D();let s=D(null);function c(g){return m=>{g&&p(a)!==null&&(document.activeElement===o()||document.activeElement===document.body||document.activeElement===p(s))&&g(m)}}k(()=>r(),()=>{S(a,r())}),Ee();var u=M4();Ue("keydown",jc,function(...g){lu==null||lu.apply(this,g)});var _=xg(()=>{var g;return c((g=p(a))==null?void 0:g.keyDown)});Ue("keydown",jc,function(...g){var m;(m=p(_))==null||m.apply(this,g)});var v=xg(()=>{var g;return c((g=p(a))==null?void 0:g.keyUp)});Ue("keyup",jc,function(...g){var m;(m=p(v))==null||m.apply(this,g)});var f=V(u);T4(f,{get svgRef(){return Oh(),o()},set svgRef(g){Ea(di,g)},$$legacy:!0}),Y(u),To(u,g=>S(s,g),()=>p(s)),Ue("pointerdown",u,Xc(Xn(g=>{var m;g.currentTarget.focus(),(m=p(a))==null||m.pointerDown(g)})),!0),Ue("pointermove",u,Xc(Xn(g=>{var m;g.currentTarget.focus(),(m=p(a))==null||m.pointerMove(g)})),!0),Ue("pointerup",u,Xc(Xn(g=>{var m;g.currentTarget.focus(),(m=p(a))==null||m.pointerUp(g)})),!0),T(t,u),se()}var U4=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function F4(t){var e=U4();T(t,e)}var $4=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function H4(t){var e=$4();T(t,e)}var P4=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function B4(t){var e=P4();T(t,e)}var W4=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function z4(t){var e=W4();T(t,e)}var Y4=oe('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function j4(t,e){ae(e,!1);const n=it(),r=()=>Ce(mi,"$commandHistoryStore",n),o=()=>Ce(wu,"$selectOnStore",n),a=D(),s=D();function c(){Sv()}function u(){Nv()}function _(){console.log("check")}function v(){Ea(wu,!o())}k(()=>r(),()=>{S(a,r()._undoStack.length===0)}),k(()=>r(),()=>{S(s,r()._redoStack.length===0)}),Ee(),ge();var f=Y4(),g=V(f),m=V(g);z4(m),Y(g);var C=$(g,2),I=V(C);H4(I),Y(C);var b=$(C,2);b.disabled=!0;var w=V(b);F4(w),Y(b);var L=$(b,2),R=V(L);B4(R),Y(L),Y(f),ee(()=>{g.disabled=p(a),C.disabled=p(s),A(L,"aria-checked",o()),yt(L,"active",o())}),Ue("click",g,c),Ue("click",C,u),Ue("click",b,_),Ue("click",L,v),T(t,f),se()}var V4=oe('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),q4=oe('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),K4=oe('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),X4=oe('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function Z4(t,e){ae(e,!1);const n=it(),r=()=>Ce(zt,"$settingsStore",n),o=()=>Ce(Bs,"$penColorStore",n),a=()=>Ce(rp,"$InputHandlerStore",n),s=D(),c=D(),u=[];let _=U(e,"selectedTool",8);const v=[1,2,3,4,5,6,7,8,9,0],f=["A","B","C","D","E","F","G","H","I","O"];let g=D(!1);function m(B){return B?f:v}function C(B){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(B)}function I(B){const K=B.currentTarget;if(!K)return;const J=K.getAttribute("aria-checked");S(g,J!=="true")}k(()=>r(),()=>{S(s,r().penToolActive)}),k(()=>r(),()=>{S(c,r().letterToolActive)}),Ee(),ge();var b=X4(),w=V(b);{var L=B=>{var K=Ne(),J=ue(K);lt(J,1,()=>v,Lt,(ce,Q)=>{var re=V4(),pe=V(re);qt(pe);var me;xo(2),Y(re),ee(()=>{A(re,"data-value",p(Q)),yt(re,"active",o()===p(Q)),me!==(me=p(Q))&&(pe.value=(pe.__value=p(Q))==null?"":p(Q))}),Zs(u,[],pe,()=>(p(Q),o()),_e=>Ea(Bs,_e)),T(ce,re)}),T(B,K)},R=B=>{var K=Ne(),J=ue(K);lt(J,1,()=>m(p(g)),Lt,(ce,Q)=>{var re=q4(),pe=V(re),me=V(pe,!0);Y(pe),xo(2),Y(re),ee(()=>{Ww(re,p(Q)),rt(me,p(Q))}),Ue("click",re,function(..._e){var Ae;(Ae=a()&&a().padClick)==null||Ae.apply(this,_e)}),T(ce,re)}),T(B,K)};he(w,B=>{_()===d.PEN_TOOL&&p(s)?B(L):B(R,!1)})}var M=$(w,2);{var F=B=>{var K=K4();ee(()=>{A(K,"aria-checked",p(g)),yt(K,"letter-checked",p(g)),yt(K,"num-checked",!p(g))}),Ue("click",K,I),T(B,K)};he(M,B=>{p(c)&&C(_())&&B(F)})}var P=$(M,2);Y(b),ee(()=>{yt(b,"digit",_()===d.DIGIT),yt(b,"center",_()===d.CENTER_PM),yt(b,"corner",_()===d.CORNER_PM),yt(b,"color",_()===d.HIGHLIGHTS),yt(b,"pen",_()===d.PEN_TOOL),yt(P,"letter-tool",p(c))}),Ue("click",P,function(...B){var K;(K=a()&&a().padClick)==null||K.apply(this,B)}),T(t,b),se()}var Q4=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function J4(t){var e=Q4();T(t,e)}var e6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function t6(t){var e=e6();T(t,e)}var n6=oe('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Qi(t,e){ae(e,!1);const n=[];let r=U(e,"selectedTool",12),o=U(e,"value",8),a=U(e,"title",8,void 0);function s(){Ou(o())}ge();var c=n6(),u=V(c);qt(u);var _,v=$(u,2);dt(v,e,"default",{}),Y(c),ee(()=>{A(c,"title",a()),yt(c,"active",o()===r()),_!==(_=o())&&(u.value=(u.__value=o())==null?"":o())}),Zs(n,[],u,()=>(o(),r()),r),Ue("change",u,s),T(t,c),se()}var r6=oe('<span aria-hidden="true">1</span>'),o6=oe('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),i6=oe('<span aria-hidden="true" style="font-size: 50%">123</span>'),a6=oe('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),s6=oe('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),l6=oe('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function c6(t,e){ae(e,!1);const n=it(),r=()=>Ce(zt,"$settingsStore",n);let o=U(e,"selectedTool",12);ge();var a=l6(),s=V(a);Qi(s,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return o()},set selectedTool(g){o(g)},children:(g,m)=>{var C=r6();T(g,C)},$$slots:{default:!0},$$legacy:!0});var c=$(s,2);Qi(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return o()},set selectedTool(g){o(g)},children:(g,m)=>{var C=o6();T(g,C)},$$slots:{default:!0},$$legacy:!0});var u=$(c,2);Qi(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return o()},set selectedTool(g){o(g)},children:(g,m)=>{var C=i6();T(g,C)},$$slots:{default:!0},$$legacy:!0});var _=$(u,2);Qi(_,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return o()},set selectedTool(g){o(g)},children:(g,m)=>{var C=a6(),I=V(C);J4(I),Y(C),T(g,C)},$$slots:{default:!0},$$legacy:!0});var v=$(_,2);{var f=g=>{Qi(g,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return o()},set selectedTool(m){o(m)},children:(m,C)=>{var I=s6(),b=V(I);t6(b),Y(I),T(m,I)},$$slots:{default:!0},$$legacy:!0})};he(v,g=>{r().penToolActive&&g(f)})}Y(a),T(t,a),se()}var u6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function d6(t){var e=u6();T(t,e)}var _6=oe('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Ga(t,e){let n=U(e,"title",8,void 0),r=U(e,"clickCb",8,void 0);var o=_6(),a=V(o),s=V(a);dt(s,e,"default",{}),Y(a),Y(o),ee(()=>A(o,"title",n())),Ue("click",o,function(...c){var u;(u=r())==null||u.apply(this,c)}),T(t,o)}var f6=oe('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),g6=oe('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function h6(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);function r(){n(!1)}function o(){Dv(),Ws(),n(!1)}ge(),Hr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=g6(),u=$(V(c),2);_l(u,{children:(_,v)=>{var f=f6(),g=ue(f),m=$(g,2);Ue("click",g,o),Ue("click",m,r),T(_,f)},$$slots:{default:!0}}),Y(c),T(a,c)},$$slots:{default:!0},$$legacy:!0}),se()}var v6=oe("<!> <!>",1);function p6(t){let e=D(!1);function n(){S(e,!0)}var r=v6(),o=ue(r);Ga(o,{title:"Restart",clickCb:n,children:(s,c)=>{d6(s)},$$slots:{default:!0}});var a=$(o,2);h6(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),T(t,r)}var m6=oe('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function Ji(t,e){let n=U(e,"title",8);var r=m6(),o=V(r),a=V(o,!0);Y(o);var s=$(o,2);dt(s,e,"default",{}),Y(r),ee(()=>rt(a,n())),T(t,r)}var C6=oe('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function _n(t,e){let n=U(e,"description",8);var r=C6(),o=V(r),a=V(o,!0);Y(o);var s=$(o,2),c=V(s);dt(c,e,"default",{}),Y(s),Y(r),ee(()=>rt(a,n())),T(t,r)}var E6=oe('<div class="shortcut svelte-1cgt5u5"> </div>');function nn(t,e){let n=U(e,"shortcut",8);var r=E6(),o=V(r,!0);Y(r),ee(()=>rt(o,n())),T(t,r)}var I6=oe("<p></p>"),b6=oe("<!> <!> <!> <!>",1),w6=oe("<!> or <!>",1),O6=oe("<!> <!> <!> <!> <!> <!> <!> <!>",1),y6=oe("<!> <!>",1),L6=oe('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function A6(t,e){let n=U(e,"showModal",12,!1);Hr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,o)=>{var a=L6(),s=V(a);Ji(s,{title:"Setting Instructions",children:(f,g)=>{var m=I6();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",T(f,m)},$$slots:{default:!0}});var c=$(s,2);Ji(c,{title:"General",children:(f,g)=>{_n(f,{description:"Toggle Darkmode",children:(m,C)=>{nn(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=$(c,2);Ji(u,{title:"Selection",children:(f,g)=>{var m=b6(),C=ue(m);_n(C,{description:"Select cells",children:(L,R)=>{nn(L,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=$(C,2);_n(I,{description:"Add to current selection",children:(L,R)=>{nn(L,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=$(I,2);_n(b,{description:"Remove from current selection",children:(L,R)=>{nn(L,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=$(b,2);_n(w,{description:"Add or remove from current selection",children:(L,R)=>{nn(L,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),T(f,m)},$$slots:{default:!0}});var _=$(u,2);Ji(_,{title:"Change Tool",children:(f,g)=>{var m=O6(),C=ue(m);_n(C,{description:"Cycle Tool",children:(P,B)=>{nn(P,{shortcut:"Space"})},$$slots:{default:!0}});var I=$(C,2);_n(I,{description:"Change to Digit Tool",children:(P,B)=>{nn(P,{shortcut:"Z"})},$$slots:{default:!0}});var b=$(I,2);_n(b,{description:"Change to Corner Pencilmark Tool",children:(P,B)=>{nn(P,{shortcut:"X"})},$$slots:{default:!0}});var w=$(b,2);_n(w,{description:"Change to Center Pencilmark Tool",children:(P,B)=>{nn(P,{shortcut:"C"})},$$slots:{default:!0}});var L=$(w,2);_n(L,{description:"Change to Highlights Tool",children:(P,B)=>{nn(P,{shortcut:"V"})},$$slots:{default:!0}});var R=$(L,2);_n(R,{description:"Quickshift To Corner Pencilmark Tool",children:(P,B)=>{nn(P,{shortcut:"Shift"})},$$slots:{default:!0}});var M=$(R,2);_n(M,{description:"Quickshift To Center Pencilmark Tool",children:(P,B)=>{nn(P,{shortcut:"Ctrl"})},$$slots:{default:!0}});var F=$(M,2);_n(F,{description:"Quickshift To Highlights Tool",children:(P,B)=>{var K=w6(),J=ue(K);nn(J,{shortcut:"Shift + Ctrl"});var ce=$(J,2);nn(ce,{shortcut:"Alt"}),T(P,K)},$$slots:{default:!0}}),T(f,m)},$$slots:{default:!0}});var v=$(_,2);Ji(v,{title:"Undo/Redo",children:(f,g)=>{var m=y6(),C=ue(m);_n(C,{description:"Undo",children:(b,w)=>{nn(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=$(C,2);_n(I,{description:"Redo",children:(b,w)=>{nn(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),T(f,m)},$$slots:{default:!0}}),Y(a),T(r,a)},$$slots:{default:!0},$$legacy:!0})}var S6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function N6(t){var e=S6();T(t,e)}var x6=oe("<!> <!>",1);function T6(t){let e=D(!1);function n(){S(e,!0)}var r=x6(),o=ue(r);Ga(o,{title:"Info",clickCb:n,children:(s,c)=>{N6(s)},$$slots:{default:!0}});var a=$(o,2);A6(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),T(t,r)}var D6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function R6(t){var e=D6();T(t,e)}var k6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function M6(t){var e=k6();T(t,e)}function G6(t){let e=D(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function o(){document.exitFullscreen()}function a(){n()?o():r(),S(e,!p(e))}Ga(t,{title:"Fullscreen",clickCb:a,children:(s,c)=>{var u=Ne(),_=ue(u);{var v=g=>{M6(g)},f=g=>{R6(g)};he(_,g=>{p(e)?g(v):g(f,!1)})}T(s,u)},$$slots:{default:!0}})}function lp(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"renderers",8),o=U(e,"options",8);ge();var a=Ne(),s=ue(a);{var c=u=>{var _=Ne(),v=ue(_);wh(v,()=>r()[n().type],(f,g)=>{g(f,{get token(){return n()},get options(){return o()},get renderers(){return r()},children:(m,C)=>{var I=Ne(),b=ue(I);{var w=R=>{js(R,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return o()}})},L=R=>{var M=aw();ee(()=>rt(M,n().raw)),T(R,M)};he(b,R=>{"tokens"in n()&&n().tokens?R(w):R(L,!1)})}T(m,I)},$$slots:{default:!0}})}),T(u,_)};he(s,u=>{r()[n().type]&&u(c)})}T(t,a),se()}function js(t,e){let n=U(e,"tokens",8),r=U(e,"renderers",8),o=U(e,"options",8);var a=Ne(),s=ue(a);{var c=u=>{var _=Ne(),v=ue(_);lt(v,1,n,Lt,(f,g)=>{lp(f,{get token(){return p(g)},get renderers(){return r()},get options(){return o()}})}),T(u,_)};he(s,u=>{n()&&u(c)})}T(t,a)}function cp(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function up(t){return t.startsWith("/")||t.startsWith("#")}function U6(t,e){return e.slug(t).replace(/--+/g,"-")}function F6(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const o=void 0;let a=D();k(()=>(Z(n()),Z(r())),()=>{S(a,U6(n().text,r().slugger))}),Ee(),ge();var s=Ne(),c=ue(s);return Ah(c,()=>`h${n().depth}`,!1,(u,_)=>{let v;ee(()=>v=Th(u,v,{id:p(a)},void 0,u.namespaceURI===ku,u.nodeName.includes("-")));var f=Ne(),g=ue(f);dt(g,e,"default",{}),T(_,f)}),T(t,s),Qe(e,"renderers",o),se({renderers:o})}var $6=oe("<blockquote><!></blockquote>");function H6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var a=$6(),s=V(a);return dt(s,e,"default",{}),Y(a),T(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),se({token:n,options:r,renderers:o})}function P6(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),o=U(e,"renderers",8),a=D();k(()=>Z(n()),()=>{S(a,n().ordered?"ol":"ul")}),Ee(),ge();var s=Ne(),c=ue(s);Ah(c,()=>p(a),!1,(u,_)=>{let v;ee(()=>v=Th(u,v,{start:n().start||1},void 0,u.namespaceURI===ku,u.nodeName.includes("-")));var f=Ne(),g=ue(f);lt(g,1,()=>n().items,Lt,(m,C)=>{var I=Ze(()=>({...p(C)}));lp(m,{get token(){return p(I)},get options(){return r()},get renderers(){return o()}})}),T(_,f)}),T(t,s),se()}var B6=oe("<li><!></li>");function W6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var a=B6(),s=V(a);return dt(s,e,"default",{}),Y(a),T(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),se({token:n,options:r,renderers:o})}var z6=oe("<br>");function Y6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var a=z6();return T(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),se({token:n,options:r,renderers:o})}var j6=oe("<pre><code> </code></pre>");function V6(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,o=void 0;ge();var a=j6(),s=V(a),c=V(s,!0);return Y(s),Y(a),ee(()=>{Yw(s,`lang-${n().lang}`),rt(c,n().text)}),T(t,a),Qe(e,"options",r),Qe(e,"renderers",o),se({options:r,renderers:o})}var q6=oe("<code> </code>");function K6(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,o=void 0;ge();var a=q6(),s=V(a,!0);return ee(()=>rt(s,n().raw.slice(1,n().raw.length-1))),Y(a),T(t,a),Qe(e,"options",r),Qe(e,"renderers",o),se({options:r,renderers:o})}var X6=oe('<th scope="col"><!></th>'),Z6=oe("<td><!></td>"),Q6=oe("<tr></tr>"),J6=oe("<table><thead><tr></tr></thead><tbody></tbody></table>");function eH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),o=U(e,"renderers",8);ge();var a=J6(),s=V(a),c=V(s);lt(c,5,()=>n().header,Lt,(_,v)=>{var f=X6(),g=V(f);js(g,{get tokens(){return p(v).tokens},get options(){return r()},get renderers(){return o()}}),Y(f),T(_,f)}),Y(c),Y(s);var u=$(s);lt(u,5,()=>n().rows,Lt,(_,v)=>{var f=Q6();lt(f,5,()=>p(v),Lt,(g,m)=>{var C=Z6(),I=V(C);js(I,{get tokens(){return p(m).tokens},get options(){return r()},get renderers(){return o()}}),Y(C),T(g,C)}),Y(f),T(_,f)}),Y(u),Y(a),T(t,a),se()}function tH(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,o=void 0;ge();var a=Ne(),s=ue(a);return Pw(s,()=>n().text),T(t,a),Qe(e,"options",r),Qe(e,"renderers",o),se({options:r,renderers:o})}var nH=oe("<p><!></p>");function rH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var a=nH(),s=V(a);return dt(s,e,"default",{}),Y(a),T(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),se({token:n,options:r,renderers:o})}var oH=oe("<a><!></a>");function iH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const o=void 0;ge();var a=oH();ee(()=>A(a,"href",up(n().href)?cp(r().baseUrl,n().href):n().href));var s=V(a);return dt(s,e,"default",{}),Y(a),ee(()=>A(a,"title",n().title)),T(t,a),Qe(e,"renderers",o),se({renderers:o})}function aH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var a=Ne(),s=ue(a);return dt(s,e,"default",{}),T(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),se({token:n,options:r,renderers:o})}var sH=oe("<dfn><!></dfn>");function lH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var a=sH(),s=V(a);return dt(s,e,"default",{}),Y(a),T(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),se({token:n,options:r,renderers:o})}var cH=oe("<del><!></del>");function uH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var a=cH(),s=V(a);return dt(s,e,"default",{}),Y(a),T(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),se({token:n,options:r,renderers:o})}var dH=oe("<em><!></em>");function _H(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var a=dH(),s=V(a);return dt(s,e,"default",{}),Y(a),T(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),se({token:n,options:r,renderers:o})}var fH=oe("<hr>");function gH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var a=fH();return T(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),se({token:n,options:r,renderers:o})}var hH=oe("<strong><!></strong>");function vH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var a=hH(),s=V(a);return dt(s,e,"default",{}),Y(a),T(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),se({token:n,options:r,renderers:o})}var pH=oe('<img class="markdown-image svelte-z38cge">');function mH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const o=void 0;ge();var a=pH();return ee(()=>A(a,"src",up(n().href)?cp(r().baseUrl,n().href):n().href)),ee(()=>{A(a,"title",n().title),A(a,"alt",n().text)}),T(t,a),Qe(e,"renderers",o),se({renderers:o})}function uh(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var a=Ne(),s=ue(a);return dt(s,e,"default",{}),T(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),se({token:n,options:r,renderers:o})}const CH=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,EH=Object.hasOwnProperty;class IH{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let o=bH(e,n===!0);const a=o;for(;EH.call(r.occurrences,o);)r.occurrences[a]++,o=a+"-"+r.occurrences[a];return r.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function bH(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(CH,"").replace(/ /g,"-"))}function zd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Po=zd();function dp(t){Po=t}const _p=/[&<>"']/,wH=new RegExp(_p.source,"g"),fp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,OH=new RegExp(fp.source,"g"),yH={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},dh=t=>yH[t];function kn(t,e){if(e){if(_p.test(t))return t.replace(wH,dh)}else if(fp.test(t))return t.replace(OH,dh);return t}const LH=/(^|[^\[])\^/g;function It(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(o,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(LH,"$1"),n=n.replace(o,s),r},getRegex:()=>new RegExp(n,e)};return r}function _h(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const _a={exec:()=>null};function fh(t,e){const n=t.replace(/\|/g,(a,s,c)=>{let u=!1,_=s;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let o=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(/\\\|/g,"|");return r}function ea(t,e,n){const r=t.length;if(r===0)return"";let o=0;for(;o<r&&t.charAt(r-o-1)===e;)o++;return t.slice(0,r-o)}function AH(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function gh(t,e,n,r){const o=e.href,a=e.title?kn(e.title):null,s=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:o,title:a,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:o,title:a,text:kn(s)}}function SH(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(o=>{const a=o.match(/^\s+/);if(a===null)return o;const[s]=a;return s.length>=r.length?o.slice(r.length):o}).join(`
`)}class Vs{constructor(e){ve(this,"options");ve(this,"rules");ve(this,"lexer");this.options=e||Po}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:ea(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],o=SH(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:o}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const o=ea(r,"#");(this.options.pedantic||!o||/ $/.test(o))&&(r=o.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:ea(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=ea(n[0],`
`).split(`
`),o="",a="";const s=[];for(;r.length>0;){let c=!1;const u=[];let _;for(_=0;_<r.length;_++)if(/^ {0,3}>/.test(r[_]))u.push(r[_]),c=!0;else if(!c)u.push(r[_]);else break;r=r.slice(_);const v=u.join(`
`),f=v.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");o=o?`${o}
${v}`:v,a=a?`${a}
${f}`:f;const g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,s,!0),this.lexer.state.top=g,r.length===0)break;const m=s[s.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const C=m,I=C.raw+`
`+r.join(`
`),b=this.blockquote(I);s[s.length-1]=b,o=o.substring(0,o.length-C.raw.length)+b.raw,a=a.substring(0,a.length-C.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const C=m,I=C.raw+`
`+r.join(`
`),b=this.list(I);s[s.length-1]=b,o=o.substring(0,o.length-m.raw.length)+b.raw,a=a.substring(0,a.length-C.raw.length)+b.raw,r=I.substring(s[s.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:s,text:a}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const o=r.length>1,a={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");const s=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,_="",v="";if(!(n=s.exec(e))||this.rules.block.hr.test(e))break;_=n[0],e=e.substring(_.length);let f=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),g=e.split(`
`,1)[0],m=!f.trim(),C=0;if(this.options.pedantic?(C=2,v=f.trimStart()):m?C=n[1].length+1:(C=n[2].search(/[^ ]/),C=C>4?1:C,v=f.slice(C),C+=n[1].length),m&&/^[ \t]*$/.test(g)&&(_+=g+`
`,e=e.substring(g.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),L=new RegExp(`^ {0,${Math.min(3,C-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),R=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:\`\`\`|~~~)`),M=new RegExp(`^ {0,${Math.min(3,C-1)}}#`),F=new RegExp(`^ {0,${Math.min(3,C-1)}}<[a-z].*>`,"i");for(;e;){const P=e.split(`
`,1)[0];let B;if(g=P,this.options.pedantic?(g=g.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),B=g):B=g.replace(/\t/g,"    "),R.test(g)||M.test(g)||F.test(g)||w.test(g)||L.test(g))break;if(B.search(/[^ ]/)>=C||!g.trim())v+=`
`+B.slice(C);else{if(m||f.replace(/\t/g,"    ").search(/[^ ]/)>=4||R.test(f)||M.test(f)||L.test(f))break;v+=`
`+g}!m&&!g.trim()&&(m=!0),_+=P+`
`,e=e.substring(P.length+1),f=B.slice(C)}}a.loose||(c?a.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(v),I&&(b=I[0]!=="[ ] ",v=v.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:_,task:!!I,checked:b,loose:!1,text:v,tokens:[]}),a.raw+=_}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let u=0;u<a.items.length;u++)if(this.lexer.state.top=!1,a.items[u].tokens=this.lexer.blockTokens(a.items[u].text,[]),!a.loose){const _=a.items[u].tokens.filter(f=>f.type==="space"),v=_.length>0&&_.some(f=>/\n.*\n/.test(f.raw));a.loose=v}if(a.loose)for(let u=0;u<a.items.length;u++)a.items[u].loose=!0;return a}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),o=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:o,title:a}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=fh(n[1]),o=n[2].replace(/^\||\| *$/g,"").split("|"),a=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===o.length){for(const c of o)/^ *-+: *$/.test(c)?s.align.push("right"):/^ *:-+: *$/.test(c)?s.align.push("center"):/^ *:-+ *$/.test(c)?s.align.push("left"):s.align.push(null);for(let c=0;c<r.length;c++)s.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:s.align[c]});for(const c of a)s.rows.push(fh(c,s.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[_]})));return s}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:kn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=ea(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=AH(n[2],"()");if(s>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let o=n[2],a="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);s&&(o=s[1],a=s[3])}else a=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(r)?o=o.slice(1):o=o.slice(1,-1)),gh(n,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const o=(r[2]||r[1]).replace(/\s+/g," "),a=n[o.toLowerCase()];if(!a){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return gh(r,a,r[0],this.lexer)}}emStrong(e,n,r=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!o||o[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...o[0]].length-1;let c,u,_=s,v=0;const f=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,n=n.slice(-1*e.length+s);(o=f.exec(n))!=null;){if(c=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!c)continue;if(u=[...c].length,o[3]||o[4]){_+=u;continue}else if((o[5]||o[6])&&s%3&&!((s+u)%3)){v+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+v);const g=[...o[0]][0].length,m=e.slice(0,s+o.index+g+u);if(Math.min(s,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const C=m.slice(2,-2);return{type:"strong",raw:m,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const o=/[^ ]/.test(r),a=/^ /.test(r)&&/ $/.test(r);return o&&a&&(r=r.substring(1,r.length-1)),r=kn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,o;return n[2]==="@"?(r=kn(n[1]),o="mailto:"+r):(r=kn(n[1]),o=r),{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let o,a;if(n[2]==="@")o=kn(n[0]),a="mailto:"+o;else{let s;do s=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(s!==n[0]);o=kn(n[0]),n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=kn(n[0]),{type:"text",raw:n[0],text:r}}}}const NH=/^(?:[ \t]*(?:\n|$))+/,xH=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,TH=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ua=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,DH=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,gp=/(?:[*+-]|\d{1,9}[.)])/,hp=It(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,gp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Yd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,RH=/^[^\n]+/,jd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,kH=It(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",jd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),MH=It(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,gp).getRegex(),wl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Vd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,GH=It("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Vd).replace("tag",wl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),vp=It(Yd).replace("hr",Ua).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wl).getRegex(),UH=It(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",vp).getRegex(),qd={blockquote:UH,code:xH,def:kH,fences:TH,heading:DH,hr:Ua,html:GH,lheading:hp,list:MH,newline:NH,paragraph:vp,table:_a,text:RH},hh=It("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ua).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wl).getRegex(),FH={...qd,table:hh,paragraph:It(Yd).replace("hr",Ua).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",hh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wl).getRegex()},$H={...qd,html:It(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Vd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_a,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:It(Yd).replace("hr",Ua).replace("heading",` *#{1,6} *[^
]`).replace("lheading",hp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},pp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,HH=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,mp=/^( {2,}|\\)\n(?!\s*$)/,PH=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Fa="\\p{P}\\p{S}",BH=It(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Fa).getRegex(),WH=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,zH=It(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Fa).getRegex(),YH=It("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Fa).getRegex(),jH=It("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Fa).getRegex(),VH=It(/\\([punct])/,"gu").replace(/punct/g,Fa).getRegex(),qH=It(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),KH=It(Vd).replace("(?:-->|$)","-->").getRegex(),XH=It("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",KH).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),qs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ZH=It(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",qs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Cp=It(/^!?\[(label)\]\[(ref)\]/).replace("label",qs).replace("ref",jd).getRegex(),Ep=It(/^!?\[(ref)\](?:\[\])?/).replace("ref",jd).getRegex(),QH=It("reflink|nolink(?!\\()","g").replace("reflink",Cp).replace("nolink",Ep).getRegex(),Kd={_backpedal:_a,anyPunctuation:VH,autolink:qH,blockSkip:WH,br:mp,code:HH,del:_a,emStrongLDelim:zH,emStrongRDelimAst:YH,emStrongRDelimUnd:jH,escape:pp,link:ZH,nolink:Ep,punctuation:BH,reflink:Cp,reflinkSearch:QH,tag:XH,text:PH,url:_a},JH={...Kd,link:It(/^!?\[(label)\]\((.*?)\)/).replace("label",qs).getRegex(),reflink:It(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",qs).getRegex()},Au={...Kd,escape:It(pp).replace("])","~|])").getRegex(),url:It(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},eP={...Au,br:It(mp).replace("{2,}","*").getRegex(),text:It(Au.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ks={normal:qd,gfm:FH,pedantic:$H},ta={normal:Kd,gfm:Au,breaks:eP,pedantic:JH};class Gn{constructor(e){ve(this,"tokens");ve(this,"options");ve(this,"state");ve(this,"tokenizer");ve(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Po,this.options.tokenizer=this.options.tokenizer||new Vs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:ks.normal,inline:ta.normal};this.options.pedantic?(n.block=ks.pedantic,n.inline=ta.pedantic):this.options.gfm&&(n.block=ks.gfm,this.options.breaks?n.inline=ta.breaks:n.inline=ta.gfm),this.tokenizer.rules=n}static get rules(){return{block:ks,inline:ta}}static lex(e,n){return new Gn(n).lex(e)}static lexInline(e,n){return new Gn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let o,a,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(o=c.call({lexer:this},e,n))?(e=e.substring(o.raw.length),n.push(o),!0):!1))){if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length),o.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(v=>{_=v.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(this.state.top&&(o=this.tokenizer.paragraph(s))){a=n[n.length-1],r&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o),r=s.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&a.type==="text"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,o,a,s=e,c,u,_;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)v.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,c.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(r=v.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,s,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const f=e.slice(1);let g;this.options.extensions.startInline.forEach(m=>{g=m.call({lexer:this},f),typeof g=="number"&&g>=0&&(v=Math.min(v,g))}),v<1/0&&v>=0&&(a=e.substring(0,v+1))}if(r=this.tokenizer.inlineText(a)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return n}}class Ks{constructor(e){ve(this,"options");ve(this,"parser");this.options=e||Po}space(e){return""}code({text:e,lang:n,escaped:r}){var s;const o=(s=(n||"").match(/^\S*/))==null?void 0:s[0],a=e.replace(/\n$/,"")+`
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const o=this.parser.parseInline(r),a=_h(e);if(a===null)return o;e=a;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+o+"</a>",s}image({href:e,title:n,text:r}){const o=_h(e);if(o===null)return r;e=o;let a=`<img src="${e}" alt="${r}"`;return n&&(a+=` title="${n}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Xd{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Kn{constructor(e){ve(this,"options");ve(this,"renderer");ve(this,"textRenderer");this.options=e||Po,this.options.renderer=this.options.renderer||new Ks,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Xd}static parse(e,n){return new Kn(n).parse(e)}static parseInline(e,n){return new Kn(n).parseInline(e)}parse(e,n=!0){let r="";for(let o=0;o<e.length;o++){const a=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const s=a;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let c=s,u=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let o=0;o<e.length;o++){const a=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=c||"";continue}}const s=a;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class fa{constructor(e){ve(this,"options");ve(this,"block");this.options=e||Po}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Gn.lex:Gn.lexInline}provideParser(){return this.block?Kn.parse:Kn.parseInline}}ve(fa,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class tP{constructor(...e){ve(this,"defaults",zd());ve(this,"options",this.setOptions);ve(this,"parse",this.parseMarkdown(!0));ve(this,"parseInline",this.parseMarkdown(!1));ve(this,"Parser",Kn);ve(this,"Renderer",Ks);ve(this,"TextRenderer",Xd);ve(this,"Lexer",Gn);ve(this,"Tokenizer",Vs);ve(this,"Hooks",fa);this.use(...e)}walkTokens(e,n){var o,a;let r=[];for(const s of e)switch(r=r.concat(n.call(this,s)),s.type){case"table":{const c=s;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=s;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=s;(a=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&a[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const o={...r};if(o.async=this.defaults.async||o.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const s=n.renderers[a.name];s?n.renderers[a.name]=function(...c){let u=a.renderer.apply(this,c);return u===!1&&(u=s.apply(this,c)),u}:n.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=n[a.level];s?s.unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),o.extensions=n),r.renderer){const a=this.defaults.renderer||new Ks(this.defaults);for(const s in r.renderer){if(!(s in a))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const c=s,u=r.renderer[c],_=a[c];a[c]=(...v)=>{let f=u.apply(a,v);return f===!1&&(f=_.apply(a,v)),f||""}}o.renderer=a}if(r.tokenizer){const a=this.defaults.tokenizer||new Vs(this.defaults);for(const s in r.tokenizer){if(!(s in a))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const c=s,u=r.tokenizer[c],_=a[c];a[c]=(...v)=>{let f=u.apply(a,v);return f===!1&&(f=_.apply(a,v)),f}}o.tokenizer=a}if(r.hooks){const a=this.defaults.hooks||new fa;for(const s in r.hooks){if(!(s in a))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const c=s,u=r.hooks[c],_=a[c];fa.passThroughHooks.has(s)?a[c]=v=>{if(this.defaults.async)return Promise.resolve(u.call(a,v)).then(g=>_.call(a,g));const f=u.call(a,v);return _.call(a,f)}:a[c]=(...v)=>{let f=u.apply(a,v);return f===!1&&(f=_.apply(a,v)),f}}o.hooks=a}if(r.walkTokens){const a=this.defaults.walkTokens,s=r.walkTokens;o.walkTokens=function(c){let u=[];return u.push(s.call(this,c)),a&&(u=u.concat(a.call(this,c))),u}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Gn.lex(e,n??this.defaults)}parser(e,n){return Kn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,o)=>{const a={...o},s={...this.defaults,...a},c=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const u=s.hooks?s.hooks.provideLexer():e?Gn.lex:Gn.lexInline,_=s.hooks?s.hooks.provideParser():e?Kn.parse:Kn.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(v=>u(v,s)).then(v=>s.hooks?s.hooks.processAllTokens(v):v).then(v=>s.walkTokens?Promise.all(this.walkTokens(v,s.walkTokens)).then(()=>v):v).then(v=>_(v,s)).then(v=>s.hooks?s.hooks.postprocess(v):v).catch(c);try{s.hooks&&(r=s.hooks.preprocess(r));let v=u(r,s);s.hooks&&(v=s.hooks.processAllTokens(v)),s.walkTokens&&this.walkTokens(v,s.walkTokens);let f=_(v,s);return s.hooks&&(f=s.hooks.postprocess(f)),f}catch(v){return c(v)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const o="<p>An error occurred:</p><pre>"+kn(r.message+"",!0)+"</pre>";return n?Promise.resolve(o):o}if(n)return Promise.reject(r);throw r}}}const Mo=new tP;function Ct(t,e){return Mo.parse(t,e)}Ct.options=Ct.setOptions=function(t){return Mo.setOptions(t),Ct.defaults=Mo.defaults,dp(Ct.defaults),Ct};Ct.getDefaults=zd;Ct.defaults=Po;Ct.use=function(...t){return Mo.use(...t),Ct.defaults=Mo.defaults,dp(Ct.defaults),Ct};Ct.walkTokens=function(t,e){return Mo.walkTokens(t,e)};Ct.parseInline=Mo.parseInline;Ct.Parser=Kn;Ct.parser=Kn.parse;Ct.Renderer=Ks;Ct.TextRenderer=Xd;Ct.Lexer=Gn;Ct.lexer=Gn.lex;Ct.Tokenizer=Vs;Ct.Hooks=fa;Ct.parse=Ct;Ct.options;Ct.setOptions;Ct.use;Ct.walkTokens;Ct.parseInline;Kn.parse;Gn.lex;function nP(t){return new Gn().lex(t)}const rP=()=>({heading:F6,blockquote:H6,list:P6,list_item:W6,br:Y6,code:V6,codespan:K6,table:eH,html:tH,paragraph:rH,link:iH,text:aH,def:lH,del:uH,em:_H,hr:gH,strong:vH,image:mH,space:uh,escape:uh}),oP=()=>({baseUrl:"/",slugger:new IH});function iP(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},yh(()=>{console.warn=t})}function Ip(t,e){ae(e,!1),iP();let n=U(e,"source",8),r=U(e,"options",24,()=>({})),o=U(e,"renderers",24,()=>({})),a=D(),s=D(),c=D();k(()=>(Z(n()),Z(o()),Z(r())),()=>{S(a,nP(n())),S(s,{...rP(),...o()}),S(c,{...oP(),...r()})}),Ee(),ge(),js(t,{get tokens(){return p(a)},get renderers(){return p(s)},get options(){return p(c)}}),se()}var aP=oe('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),sP=oe('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),lP=oe('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function cP(t,e){ae(e,!1);const n=it(),r=()=>Ce(Rr,"$puzzleMetaStore",n),o=D();let a=U(e,"showModal",12,!1);function s(u){return u?Hs(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}k(()=>r(),()=>{S(o,r())}),Ee(),ge(),Hr(t,{title:"Rules",get showModal(){return a()},set showModal(u){a(u)},children:(u,_)=>{var v=lP(),f=V(v),g=V(f,!0);Y(f);var m=$(f,2),C=V(m);ee(()=>rt(C,`by ${s(p(o).authors)??""}`)),Y(m);var I=$(m,2),b=V(I),w=Ze(()=>c(p(o).ruleset));Ip(b,{get source(){return p(w)}}),Y(I);var L=$(I,2);{var R=P=>{var B=aP(),K=$(ue(B),2);ee(()=>A(K,"href",p(o).ctcUrl)),T(P,B)};he(L,P=>{var B,K;(K=(B=p(o))==null?void 0:B.ctcUrl)!=null&&K.length&&P(R)})}var M=$(L,2);{var F=P=>{var B=sP(),K=$(ue(B),2);ee(()=>A(K,"href",p(o).ctcYoutubeUrl)),T(P,B)};he(M,P=>{var B,K;(K=(B=p(o))==null?void 0:B.ctcYoutubeUrl)!=null&&K.length&&P(F)})}Y(v),ee(()=>{var P;return rt(g,((P=p(o))==null?void 0:P.title)||"Puzzle")}),T(u,v)},$$slots:{default:!0},$$legacy:!0}),se()}var uP=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function dP(t){var e=uP();T(t,e)}var _P=oe("<!> <!>",1);function fP(t){let e=D(!1);function n(){S(e,!0)}var r=_P(),o=ue(r);Ga(o,{title:"Rules",clickCb:n,children:(s,c)=>{dP(s)},$$slots:{default:!0}});var a=$(o,2);cP(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),T(t,r)}var gP=oe("<!> <!>",1);function hP(t){let e=D(!1);function n(){S(e,!0)}var r=gP(),o=ue(r);Ga(o,{title:"Settings",clickCb:n,children:(s,c)=>{jv(s)},$$slots:{default:!0}});var a=$(o,2);Vv(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),T(t,r)}var vP=oe('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function pP(t){var e=vP(),n=V(e);hP(n);var r=$(n,2);fP(r);var o=$(r,2);G6(o);var a=$(o,2);T6(a);var s=$(a,2);p6(s),Y(e),T(t,e)}var mP=oe('<div class="entry-panel-wrapper svelte-z8q7hf"><div class="puzzle-info svelte-z8q7hf"><div class="puzzle-header svelte-z8q7hf"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-z8q7hf"><!></div></div>  <div class="entry-panel svelte-z8q7hf"><!> <div class="entry-subpanel1 svelte-z8q7hf"><!> <!></div> <!></div></div>');function CP(t,e){ae(e,!1);const n=it(),r=()=>Ce(di,"$svgRefStore",n),o=()=>Ce(Rr,"$puzzleMetaStore",n),a=()=>Ce(Xt,"$toolStore",n),s=D(),c=D();function u(){r().focus()}function _(Q){return Q?Hs(Q," & ",", "):"Anonymous"}function v(Q){return Q&&Q.length?Q:"Normal sudoku rules apply."}k(()=>o(),()=>{S(s,o().title??"Sudoku")}),k(()=>o(),()=>{S(c,_(o().authors))}),Ee(),ge();var f=mP(),g=V(f),m=V(g),C=V(m),I=V(C,!0);Y(C);var b=$(C,2),w=V(b);Y(b),Y(m);var L=$(m,2),R=V(L),M=Ze(()=>v(o().ruleset));Ip(R,{get source(){return p(M)}}),Y(L),Y(g);var F=$(g,2),P=V(F);pP(P);var B=$(P,2),K=V(B);Z4(K,{get selectedTool(){return a()}});var J=$(K,2);c6(J,{get selectedTool(){return Oh(),a()},set selectedTool(Q){Ea(Xt,Q)},$$legacy:!0}),Y(B);var ce=$(B,2);j4(ce,{}),Y(F),Y(f),ee(()=>{rt(I,p(s)),rt(w,`by ${p(c)??""}`)}),Ue("click",F,Xn(()=>{u()})),T(t,f),se()}var EP=oe('<div class="App svelte-1uvdmnd"><header></header> <main class="svelte-1uvdmnd"><div class="game-wrapper svelte-1uvdmnd"><div class="game svelte-1uvdmnd"><!> <div class="central-panel svelte-1uvdmnd"><!></div> <div class="right-panel svelte-1uvdmnd"><!></div></div></div></main> <footer class="svelte-1uvdmnd"><div class="footer-text svelte-1uvdmnd"></div></footer></div>');function xP(t,e){ae(e,!1);const n=it(),r=()=>Ce(Zw,"$darkModeStore",n),o=()=>Ce(nl,"$gameModeStore",n),a=D(),s=D();yh(async()=>{const w=window.location.href;try{await sO({workerURL:`${w}minizinc-worker.js`,wasmURL:`${w}minizinc.wasm`,dataURL:`${w}minizinc.data`})}catch(L){const R="Failed to initialize MiniZinc: "+L.message;console.log(R)}}),k(()=>r(),()=>{S(a,r()?"dark":"light")}),k(()=>o(),()=>{S(s,o())}),Ee(),ge();var c=EP(),u=$(V(c),2),_=V(u),v=V(_),f=V(v);{var g=w=>{_U(w)};he(f,w=>{p(s)===hi.SETTING&&w(g)})}var m=$(f,2),C=V(m);G4(C,{}),Y(m);var I=$(m,2),b=V(I);CP(b,{}),Y(I),Y(v),Y(_),Y(u),xo(2),Y(c),ee(()=>A(c,"data-theme",p(a))),T(t,c),se()}export{xP as component,NP as universal};
