var gw=Object.defineProperty;var hw=(t,e,n)=>e in t?gw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>hw(t,typeof e!="symbol"?e+"":e,n);import{b as hu,e as vw,a as R,n as de,t as ie,c as xe,d as pw}from"../chunks/disclose-version.c9nfQR10.js";import{i as ge}from"../chunks/legacy.BeICcgj8.js";import{A as Eh,b as ku,h as wt,G as lo,F as uo,O as Ih,Y as bh,ad as mw,ae as Tg,U as la,c as fr,au as Fs,af as Gu,a as Js,ag as wh,C as vu,av as Rg,aw as Cw,H as Ew,ax as Iw,d as Mu,B as Uu,V as bw,L as ww,I as pu,ay as Fu,az as $u,a1 as Ow,a7 as Dg,aA as Oh,aB as Lw,aC as yw,R as Lh,W as Aw,S as Sw,E as Nw,aD as Hu,aE as xw,ac as Tw,aF as Rw,aG as Dw,ai as Pu,M as yh,aH as kw,j as Gw,a9 as Mw,v as V,w as Y,p as ae,x as $,t as te,e as se,l as p,as as Ze,aI as k,$ as S,aJ as Ie,aK as T,m as Z,f as ue,aL as Uw,aM as Ti,aN as Qc,o as kg}from"../chunks/runtime.3UijFPFW.js";import{d as Fw,p as U,s as it,i as he,e as ba,f as Ee,b as Ri,c as Ah,m as Sh}from"../chunks/props.CJazo4uA.js";import{i as $w,a as Hw,b as Pw,c as Bw,d as Ww,e as zw,n as Yw,f as jw,l as Bu,g as Ue,s as nt,r as Vw}from"../chunks/render.7_-GRy3G.js";import{d as Ui,w as Pt,g as at}from"../chunks/index.HRmy8yV3.js";import{a as Kw,o as Nh}from"../chunks/index-client.CTQVjhPh.js";function yt(t,e){return e}function Xw(t,e,n,r){for(var i=[],a=e.length,s=0;s<a;s++)Cw(e[s].e,i,!0);var c=a>0&&i.length===0&&n!==null;if(c){var u=n.parentNode;Ew(u),u.append(n),r.clear(),ii(t,e[0].prev,e[a-1].next)}Iw(i,()=>{for(var _=0;_<a;_++){var v=e[_];c||(r.delete(v.k),ii(t,v.prev,v.next)),Mu(v.e,!c)}})}function st(t,e,n,r,i,a=null){var s=t,c={flags:e,items:new Map,first:null},u=(e&Oh)!==0;if(u){var _=t;s=wt?lo(Uu(_)):_.appendChild(Eh())}wt&&uo();var v=null,g=!1;ku(()=>{var h=n(),m=Ih(h)?h:h==null?[]:bh(h),C=m.length;if(g&&C===0)return;g=C===0;let I=!1;if(wt){var b=s.data===mw;b!==(C===0)&&(s=Tg(),lo(s),la(!1),I=!0)}if(wt){for(var w=null,y,D=0;D<C;D++){if(fr.nodeType===8&&fr.data===bw){s=fr,I=!0,la(!1);break}var G=m[D],F=r(G,D);y=xh(fr,c,w,null,G,F,D,i,e),c.items.set(F,y),w=y}C>0&&lo(Tg())}if(!wt){var B=ww;qw(m,c,s,i,e,(B.f&Fs)!==0,r)}a!==null&&(C===0?v?Gu(v):v=Js(()=>a(s)):v!==null&&wh(v,()=>{v=null})),I&&la(!0),n()}),wt&&(s=fr)}function qw(t,e,n,r,i,a,s,c){var _e,Se,Ve,Ae;var u=(i&Lw)!==0,_=(i&(Fu|$u))!==0,v=t.length,g=e.items,h=e.first,m=h,C,I=null,b,w=[],y=[],D,G,F,B;if(u)for(B=0;B<v;B+=1)D=t[B],G=s(D,B),F=g.get(G),F!==void 0&&((_e=F.a)==null||_e.measure(),(b??(b=new Set)).add(F));for(B=0;B<v;B+=1){if(D=t[B],G=s(D,B),F=g.get(G),F===void 0){var W=m?m.e.nodes_start:n;I=xh(W,e,I,I===null?e.first:I.next,D,G,B,r,i),g.set(G,I),w=[],y=[],m=I.next;continue}if(_&&Zw(F,D,B,i),F.e.f&Fs&&(Gu(F.e),u&&((Se=F.a)==null||Se.unfix(),(b??(b=new Set)).delete(F))),F!==m){if(C!==void 0&&C.has(F)){if(w.length<y.length){var X=y[0],ee;I=X.prev;var ce=w[0],J=w[w.length-1];for(ee=0;ee<w.length;ee+=1)Gg(w[ee],X,n);for(ee=0;ee<y.length;ee+=1)C.delete(y[ee]);ii(e,ce.prev,J.next),ii(e,I,ce),ii(e,J,X),m=X,I=J,B-=1,w=[],y=[]}else C.delete(F),Gg(F,m,n),ii(e,F.prev,F.next),ii(e,F,I===null?e.first:I.next),ii(e,I,F),I=F;continue}for(w=[],y=[];m!==null&&m.k!==G;)(a||!(m.e.f&Fs))&&(C??(C=new Set)).add(m),y.push(m),m=m.next;if(m===null)continue;F=m}w.push(F),I=F,m=F.next}if(m!==null||C!==void 0){for(var re=C===void 0?[]:bh(C);m!==null;)(a||!(m.e.f&Fs))&&re.push(m),m=m.next;var me=re.length;if(me>0){var Ce=i&Oh&&v===0?n:null;if(u){for(B=0;B<me;B+=1)(Ve=re[B].a)==null||Ve.measure();for(B=0;B<me;B+=1)(Ae=re[B].a)==null||Ae.fix()}Xw(e,re,Ce,g)}}u&&pu(()=>{var Le;if(b!==void 0)for(F of b)(Le=F.a)==null||Le.apply()}),vu.first=e.first&&e.first.e,vu.last=I&&I.e}function Zw(t,e,n,r){r&Fu&&Rg(t.v,e),r&$u?Rg(t.i,n):t.i=n}function xh(t,e,n,r,i,a,s,c,u,_){var v=(u&Fu)!==0,g=(u&yw)===0,h=v?g?Ow(i):Dg(i):i,m=u&$u?Dg(s):s,C={i:m,v:h,k:a,a:null,e:null,prev:n,next:r};try{return C.e=Js(()=>c(t,h,m),wt),C.e.prev=n&&n.e,C.e.next=r&&r.e,n===null?e.first=C:(n.next=C,n.e.next=C.e),r!==null&&(r.prev=C,r.e.prev=C.e),C}finally{}}function Gg(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,i=e?e.e.nodes_start:n,a=t.e.nodes_start;a!==r;){var s=Lh(a);i.before(a),a=s}}function ii(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Qw(t,e,n,r,i){var a=t,s="",c;ku(()=>{if(s===(s=e()??"")){wt&&uo();return}c!==void 0&&(Mu(c),c=void 0),s!==""&&(c=Js(()=>{if(wt){fr.data;for(var u=uo(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=Lh(u);if(u===null)throw Aw(),Sw;hu(fr,_),a=lo(u);return}var v=s+"",g=vw(v);hu(Uu(g),g.lastChild),a.before(g)}))})}function dt(t,e,n,r,i){var c;wt&&uo();var a=(c=e.$$slots)==null?void 0:c[n],s=!1;a===!0&&(a=e[n==="default"?"children":n],s=!0),a===void 0||a(t,s?()=>r:r)}function Th(t,e,n,r,i,a){let s=wt;wt&&uo();var c,u,_=null;wt&&fr.nodeType===1&&(_=fr,uo());var v=wt?fr:t,g;ku(()=>{const h=e()||null;var m=h==="svg"?Hu:null;h!==c&&(g&&(h===null?wh(g,()=>{g=null,u=null}):h===u?Gu(g):Mu(g)),h&&h!==u&&(g=Js(()=>{if(_=wt?_:m?document.createElementNS(m,h):document.createElement(h),hu(_,_),r){wt&&$w(h)&&_.append(document.createComment(""));var C=wt?Uu(_):_.appendChild(Eh());wt&&(C===null?la(!1):lo(C)),r(_,C)}vu.nodes_end=_,v.before(_)})),c=h,c&&(u=c))},Nw),s&&(la(!0),lo(v))}function Rh(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=Rh(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Jw(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=Rh(t))&&(r&&(r+=" "),r+=e);return r}function Dh(t){return typeof t=="object"?Jw(t):t??""}function qt(t){if(wt){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;A(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var i=t.checked;A(t,"checked",null),t.checked=i}}};t.__on_r=n,Dw(n),Hw()}}function eO(t,e){var n=t.__attributes??(t.__attributes={});n.value===(n.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e)}function kh(t,e){var n=t.__attributes??(t.__attributes={});n.checked!==(n.checked=e??void 0)&&(t.checked=e)}function tO(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function A(t,e,n,r){var i=t.__attributes??(t.__attributes={});wt&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[xw]=n),n==null?t.removeAttribute(e):typeof n!="string"&&Mh(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function Gh(t,e,n,r,i=!1,a=!1,s=!1){var c=e||{},u=t.tagName==="OPTION";for(var _ in e)_ in n||(n[_]=null);n.class&&(n.class=Dh(n.class));var v=Mh(t),g=t.__attributes??(t.__attributes={});for(const w in n){let y=n[w];if(u&&w==="value"&&y==null){t.value=t.__value="",c[w]=y;continue}var h=c[w];if(y!==h){c[w]=y;var m=w[0]+w[1];if(m!=="$$"){if(m==="on"){const D={},G="$$"+w;let F=w.slice(2);var C=jw(F);if(Pw(F)&&(F=F.slice(0,-7),D.capture=!0),!C&&h){if(y!=null)continue;t.removeEventListener(F,c[G],D),c[G]=null}if(y!=null)if(C)t[`__${F}`]=y,Ww([F]);else{let B=function(W){c[w].call(this,W)};c[G]=Bw(F,t,B,D)}else C&&(t[`__${F}`]=void 0)}else if(w==="style"&&y!=null)t.style.cssText=y+"";else if(w==="autofocus")zw(t,!!y);else if(w==="__value"||w==="value"&&y!=null)t.value=t[w]=t.__value=y;else if(w==="selected"&&u)tO(t,y);else{var I=w;i||(I=Yw(I));var b=I==="defaultValue"||I==="defaultChecked";if(y==null&&!a&&!b)if(g[w]=null,I==="value"||I==="checked"){let D=t;if(I==="value"){let G=D.defaultValue;D.removeAttribute(I),D.defaultValue=G}else{let G=D.defaultChecked;D.removeAttribute(I),D.defaultChecked=G}}else t.removeAttribute(w);else b||v.includes(I)&&(a||typeof y!="string")?t[I]=y:typeof y!="function"&&(wt&&(I==="src"||I==="href"||I==="srcset")||A(t,I,y))}w==="style"&&"__styles"in t&&(t.__styles={})}}}return c}var Mg=new Map;function Mh(t){var e=Mg.get(t.nodeName);if(e)return e;Mg.set(t.nodeName,e=[]);for(var n,r=t,i=Element.prototype;i!==r;){n=Rw(r);for(var a in n)n[a].set&&e.push(a);r=Tw(r)}return e}function si(t,e,n){var r=t.__className,i=Uh(e);wt&&t.getAttribute("class")===i?t.__className=i:(r!==i||wt&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function nO(t,e,n){var r=t.__className,i=Uh(e);wt&&t.className===i?t.__className=i:(r!==i||wt&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function Uh(t,e){return(t??"")+""}function Lt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function qn(t,e,n=e){var r=kw();Bu(t,"input",i=>{var a=i?t.defaultValue:t.value;if(a=eu(t)?tu(a):a,n(a),r&&a!==(a=e())){var s=t.selectionStart,c=t.selectionEnd;t.value=a??"",c!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(c,t.value.length))}}),(wt&&t.defaultValue!==t.value||Gw(e)==null&&t.value)&&n(eu(t)?tu(t.value):t.value),Pu(()=>{var i=e();eu(t)&&i===tu(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const Jc=new Set;function el(t,e,n,r,i=r){var a=n.getAttribute("type")==="checkbox",s=t;let c=!1;if(e!==null)for(var u of e)s=s[u]??(s[u]=[]);s.push(n),Bu(n,"change",()=>{var _=n.__value;a&&(_=Ug(s,_,n.checked)),i(_)},()=>i(a?[]:null)),Pu(()=>{var _=r();if(wt&&n.defaultChecked!==n.checked){c=!0;return}a?(_=_||[],n.checked=_.includes(n.__value)):n.checked=Fw(n.__value,_)}),yh(()=>{var _=s.indexOf(n);_!==-1&&s.splice(_,1)}),Jc.has(s)||(Jc.add(s),pu(()=>{s.sort((_,v)=>_.compareDocumentPosition(v)===4?-1:1),Jc.delete(s)})),pu(()=>{if(c){var _;if(a)_=Ug(s,_,n.checked);else{var v=s.find(g=>g.checked);_=v==null?void 0:v.__value}i(_)}})}function Ug(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function eu(t){var e=t.type;return e==="number"||e==="range"}function tu(t){return t===""?null:+t}function rO(t,e,n=e){Bu(t,"change",()=>{n(t.files)}),Pu(()=>{t.files=e()})}function Qe(t,e,n){var r=Mw(t,e);r&&r.set&&(t[e]=n,yh(()=>{t[e]=null}))}function iO(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Qn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function nu(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function oO(t,e){var a;var n=(a=t.$$events)==null?void 0:a[e.type],r=Ih(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}const aO=!0,u9=Object.freeze(Object.defineProperty({__proto__:null,prerender:aO},Symbol.toStringTag,{value:"Module"}));function sO(){return{darkMode:!0,penToolActive:!0,letterToolActive:!1,highlightCellsSeenBySelection:!0,checkConflicts:!0,highlightPencilmarkConflicts:!0,hideFog:!1,showSolution:!1}}const Yt=Pt(sO()),lO=Ui(Yt,t=>t.darkMode);function cO(t){Yt.update(e=>({...e,darkMode:t}))}function uO(){Yt.update(t=>({...t,darkMode:!t.darkMode}))}function dO(t){Yt.update(e=>({...e,penToolActive:t}))}function _O(t){Yt.update(e=>({...e,letterToolActive:t}))}function fO(t){Yt.update(e=>({...e,highlightCellsSeenBySelection:t}))}function gO(t){Yt.update(e=>({...e,checkConflicts:t}))}function hO(t){Yt.update(e=>({...e,highlightPencilmarkConflicts:t}))}function vO(t){Yt.update(e=>({...e,hideFog:t}))}function pO(t){Yt.update(e=>({...e,showSolution:t}))}const Fg=encodeURIComponent("4.3.5");let _r={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Ni=[];let ru;function oa(){if(!ru){const e=`importScripts(${JSON.stringify(_r.workerURL)});`;ru=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(ru);t.postMessage({wasmURL:_r.wasmURL?_r.wasmURL.toString():new URL(`./minizinc.wasm?version=${Fg}`,_r.workerURL).toString(),dataURL:_r.dataURL?_r.dataURL.toString():new URL(`./minizinc.data?version=${Fg}`,_r.workerURL).toString()}),Ni.push({worker:t,runCount:0})}function Fh(){for(;Ni.length<_r.numWorkers;)oa()}async function mO(t){if(_r={..._r,...t},Ni.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Fh(),await Promise.race(Ni.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Wu{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Wu;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Fh();const i=[];let a=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;a={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:s,runCount:c}=Ni.pop();return s.postMessage({jsonStream:!0,files:a,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:s,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:a,runCount:s}=this._run(["--model-check-only"],i.options),c=[];a.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":s<10?Ni.push({worker:a,runCount:s}):(a.terminate(),oa()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:a,runCount:s}=this._run(["-c","--model-interface-only"],i.options),c=[];let u=null;a.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":s<10?Ni.push({worker:a,runCount:s}):(a.terminate(),oa()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const a=["-c","--fzn",i],{worker:s}=this._run(a,n.options,[i]);oa();let c={},u=!1,_=null;return s.onmessage=v=>{if(c[v.data.type])for(const g of c[v.data.type])g(v.data);switch(v.data.type){case"exit":s.terminate(),u=!0,c={};break;case"error":_||(_=v.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,s.terminate(),c.exit)for(const v of c.exit)v({type:"exit",code:null});c={}}},on(v,g){c[v]?c[v].add(g):c[v]=new Set([g])},off(v,g){c[v]&&c[v].delete(g)},then(v,g){const h=m=>{if(m.code===0)v(m.outputFiles[i]);else{const C=_?{message:_.message,...m}:m;if(!g)throw C;g(C)}};c.exit?c.exit.add(h):c.exit=new Set([h])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);oa();let a=null,s={},c=!1,u=null,_={},v="UNKNOWN";return i.onmessage=g=>{if(s[g.data.type])for(const h of s[g.data.type])h(g.data);switch(g.data.type){case"exit":i.terminate(),c=!0,s={};break;case"error":a||(a=g.data);break;case"statistics":_={..._,...g.data.statistics};break;case"solution":u=g.data,v="SATISFIED";break;case"status":v=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),s.exit)for(const g of s.exit)g({type:"exit",code:null});s={}}},on(g,h){s[g]?s[g].add(h):s[g]=new Set([h])},off(g,h){s[g]&&s[g].delete(h)},then(g,h){const m=C=>{if(C.code===0)g({status:v,solution:u,statistics:_});else{const I=a?{message:a.message,...C}:C;if(!h)throw I;h(I)}};s.exit?s.exit.add(m):s.exit=new Set([m])}}}}var po=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(po||{}),zu=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(zu||{}),$h=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))($h||{}),Hh=(t=>(t.ALL_GIVEN="All Given",t.ALL_CAGE_TOTALS_DIFFERENT="All Cage Totals Different",t.ADJACENT_CAGE_TOTALS_DIFFERENT="Adjacent Cage Totals Different",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(Hh||{}),Ph=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t.INDEXER_CELLS="Indexer Cells",t))(Ph||{}),Bh=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t))(Bh||{}),Wh=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(Wh||{}),zh=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(zh||{}),Yh=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(Yh||{}),jh=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(jh||{}),Vh=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t))(Vh||{}),tl=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(tl||{}),Yu=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Yu||{}),ju=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t))(ju||{}),Vu=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.CUSTOM_EDGE_CONSTRAINT="Custom Edge Constraint",t))(Vu||{}),Ku=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Ku||{}),Xu=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Xu||{}),qu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(qu||{}),Zu=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Zu||{}),Qu=(t=>(t.CLONE_REGION="Clone Region",t))(Qu||{}),Ju=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t))(Ju||{}),ed=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(ed||{}),td=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(td||{}),nd=(t=>(t.MAZE_WALL="Maze Wall",t))(nd||{}),rd=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(rd||{}),id=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(id||{}),Kh=(t=>(t.PEN_TOOL="Pen Tool",t))(Kh||{});const od={...$h,...Hh,...Ph,...zh,...Yh,...Wh,...jh,...Vh,...Bh},Xh={...tl,...Yu,...ju,...Vu,...Ku,...Xu,...qu,...Zu,...Qu,...Ju,...ed,...td,...nd,...rd},d={...zu,...od,...Xh,...id,...Kh};var x=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(x||{});function CO(t){return Object.values(od).includes(t)}function EO(t){return Object.values(Xh).includes(t)}function ad(t){return Object.values(Yu).includes(t)||t===d.COSMETIC_CELL_ARROW}function sd(t){return Object.values(ju).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function IO(t){return Object.values(tl).includes(t)||ad(t)||sd(t)||t===d.COSMETIC_CELL_SHAPE||t===d.COSMETIC_CELL_ARROW||t===d.COSMETIC_CELL_MULTI_ARROW}function ld(t){return Object.values(Vu).includes(t)||t===d.COSMETIC_EDGE}function qh(t){return Object.values(Ku).includes(t)||t===d.COSMETIC_CORNER}function cd(t){return Object.values(Xu).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function ud(t){return Object.values(qu).includes(t)||t===d.COSMETIC_ARROW}function dd(t){return Object.values(Zu).includes(t)||t===d.COSMETIC_CAGE}function Zh(t){return Object.values(td).includes(t)}function Qh(t){return Object.values(nd).includes(t)}function Jh(t){return Object.values(Qu).includes(t)}function va(t){const e=Object.values(Ju),n=Object.values(ed);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function bO(t){return Object.values(rd).includes(t)}function wO(t){return Object.values(id).includes(t)}function _d(t){return Object.values(zu).includes(t)}const OO=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],LO=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint","Global Galaxy Constraints","Global Cave Constraints","Global Directed Path Constraints","Global Connect Four Constraints","Global Loop Constraints"];function ev(t){for(const e of Object.values(d))if(e===t)return e}function tv(t,e){return Object.values(e).includes(t)}class _o extends Map{constructor(){super()}setConstraint(e,n){return CO(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new _o;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new _o;if(!e)return n;for(const[r,i]of Object.entries(e)){const a=ev(r);a!==void 0&&tv(a,od)&&typeof i=="boolean"&&i&&n.setConstraint(a,i)}return n}}var We=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(We||{});function nv(t){if(!(t in We))throw Error(" not a key in DIRECTION");return We[t]}function Ye(t,e){return t.r===e.r&&t.c===e.c}function rv(t,e){return{r:t.r+e.r,c:t.c+e.c}}function yO(t,e){return{r:t.r*e,c:t.c*e}}function iv(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function mo(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Ye(t,e)}function AO(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Ps(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Zt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function nl(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function SO(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function fd(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function NO(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const xO=new Map([[6,We.N],[2,We.S],[0,We.E],[4,We.W],[7,We.NE],[5,We.NW],[1,We.SE],[3,We.SW]]);function gd(t){t=t%8;const e=xO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const TO=new Map([[We.N,{r:-1,c:0}],[We.S,{r:1,c:0}],[We.E,{r:0,c:1}],[We.W,{r:0,c:-1}],[We.NE,{r:-1,c:1}],[We.NW,{r:-1,c:-1}],[We.SE,{r:1,c:1}],[We.SW,{r:1,c:-1}]]);function rl(t){const e=TO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function ov(t,e){const n=rl(e);return rv(t,n)}function hd(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function av(t,e,n=!1){const r=t.some(a=>Ye(a,e)),i=n?t.some(a=>mo(a,e)):t.some(a=>AO(a,e));if(!r&&i){const a=[...t,e];return Ps(a),a}return t}function Rs(t){return`R${t.r+1}C${t.c+1}`}function vd(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var Ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},aa={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var RO=aa.exports,$g;function DO(){return $g||($g=1,function(t,e){(function(){var n,r="4.17.21",i=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,v="__lodash_placeholder__",g=1,h=2,m=4,C=1,I=2,b=1,w=2,y=4,D=8,G=16,F=32,B=64,W=128,X=256,ee=512,ce=30,J="...",re=800,me=16,Ce=1,_e=2,Se=3,Ve=1/0,Ae=9007199254740991,Le=17976931348623157e292,ct=NaN,Ke=4294967295,An=Ke-1,Hn=Ke>>>1,zr=[["ary",W],["bind",b],["bindKey",w],["curry",D],["curryRight",G],["flip",ee],["partial",F],["partialRight",B],["rearg",X]],tn="[object Arguments]",Ir="[object Array]",vi="[object AsyncFunction]",lr="[object Boolean]",Pn="[object Date]",Bi="[object DOMException]",Yr="[object Error]",kt="[object Function]",De="[object GeneratorFunction]",be="[object Map]",ke="[object Number]",Re="[object Null]",At="[object Object]",Ba="[object Promise]",xl="[object Proxy]",pi="[object RegExp]",tr="[object Set]",Mo="[object String]",Wa="[object Symbol]",Dp="[object Undefined]",Uo="[object WeakMap]",kp="[object WeakSet]",Fo="[object ArrayBuffer]",Wi="[object DataView]",Tl="[object Float32Array]",Rl="[object Float64Array]",Dl="[object Int8Array]",kl="[object Int16Array]",Gl="[object Int32Array]",Ml="[object Uint8Array]",Ul="[object Uint8ClampedArray]",Fl="[object Uint16Array]",$l="[object Uint32Array]",Gp=/\b__p \+= '';/g,Mp=/\b(__p \+=) '' \+/g,Up=/(__e\(.*?\)|\b__t\)) \+\n'';/g,t_=/&(?:amp|lt|gt|quot|#39);/g,n_=/[&<>"']/g,Fp=RegExp(t_.source),$p=RegExp(n_.source),Hp=/<%-([\s\S]+?)%>/g,Pp=/<%([\s\S]+?)%>/g,r_=/<%=([\s\S]+?)%>/g,Bp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Wp=/^\w*$/,zp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hl=/[\\^$.*+?()[\]{}|]/g,Yp=RegExp(Hl.source),Pl=/^\s+/,jp=/\s/,Vp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Kp=/\{\n\/\* \[wrapped with (.+)\] \*/,Xp=/,? & /,qp=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Zp=/[()=,{}\[\]\/\s]/,Qp=/\\(\\)?/g,Jp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,i_=/\w*$/,em=/^[-+]0x[0-9a-f]+$/i,tm=/^0b[01]+$/i,nm=/^\[object .+?Constructor\]$/,rm=/^0o[0-7]+$/i,im=/^(?:0|[1-9]\d*)$/,om=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,za=/($^)/,am=/['\n\r\u2028\u2029\\]/g,Ya="\\ud800-\\udfff",sm="\\u0300-\\u036f",lm="\\ufe20-\\ufe2f",cm="\\u20d0-\\u20ff",o_=sm+lm+cm,a_="\\u2700-\\u27bf",s_="a-z\\xdf-\\xf6\\xf8-\\xff",um="\\xac\\xb1\\xd7\\xf7",dm="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_m="\\u2000-\\u206f",fm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",l_="A-Z\\xc0-\\xd6\\xd8-\\xde",c_="\\ufe0e\\ufe0f",u_=um+dm+_m+fm,Bl="['’]",gm="["+Ya+"]",d_="["+u_+"]",ja="["+o_+"]",__="\\d+",hm="["+a_+"]",f_="["+s_+"]",g_="[^"+Ya+u_+__+a_+s_+l_+"]",Wl="\\ud83c[\\udffb-\\udfff]",vm="(?:"+ja+"|"+Wl+")",h_="[^"+Ya+"]",zl="(?:\\ud83c[\\udde6-\\uddff]){2}",Yl="[\\ud800-\\udbff][\\udc00-\\udfff]",zi="["+l_+"]",v_="\\u200d",p_="(?:"+f_+"|"+g_+")",pm="(?:"+zi+"|"+g_+")",m_="(?:"+Bl+"(?:d|ll|m|re|s|t|ve))?",C_="(?:"+Bl+"(?:D|LL|M|RE|S|T|VE))?",E_=vm+"?",I_="["+c_+"]?",mm="(?:"+v_+"(?:"+[h_,zl,Yl].join("|")+")"+I_+E_+")*",Cm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Em="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",b_=I_+E_+mm,Im="(?:"+[hm,zl,Yl].join("|")+")"+b_,bm="(?:"+[h_+ja+"?",ja,zl,Yl,gm].join("|")+")",wm=RegExp(Bl,"g"),Om=RegExp(ja,"g"),jl=RegExp(Wl+"(?="+Wl+")|"+bm+b_,"g"),Lm=RegExp([zi+"?"+f_+"+"+m_+"(?="+[d_,zi,"$"].join("|")+")",pm+"+"+C_+"(?="+[d_,zi+p_,"$"].join("|")+")",zi+"?"+p_+"+"+m_,zi+"+"+C_,Em,Cm,__,Im].join("|"),"g"),ym=RegExp("["+v_+Ya+o_+c_+"]"),Am=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Sm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Nm=-1,St={};St[Tl]=St[Rl]=St[Dl]=St[kl]=St[Gl]=St[Ml]=St[Ul]=St[Fl]=St[$l]=!0,St[tn]=St[Ir]=St[Fo]=St[lr]=St[Wi]=St[Pn]=St[Yr]=St[kt]=St[be]=St[ke]=St[At]=St[pi]=St[tr]=St[Mo]=St[Uo]=!1;var Ot={};Ot[tn]=Ot[Ir]=Ot[Fo]=Ot[Wi]=Ot[lr]=Ot[Pn]=Ot[Tl]=Ot[Rl]=Ot[Dl]=Ot[kl]=Ot[Gl]=Ot[be]=Ot[ke]=Ot[At]=Ot[pi]=Ot[tr]=Ot[Mo]=Ot[Wa]=Ot[Ml]=Ot[Ul]=Ot[Fl]=Ot[$l]=!0,Ot[Yr]=Ot[kt]=Ot[Uo]=!1;var xm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Tm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Rm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Dm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},km=parseFloat,Gm=parseInt,w_=typeof Ds=="object"&&Ds&&Ds.Object===Object&&Ds,Mm=typeof self=="object"&&self&&self.Object===Object&&self,Kt=w_||Mm||Function("return this")(),Vl=e&&!e.nodeType&&e,mi=Vl&&!0&&t&&!t.nodeType&&t,O_=mi&&mi.exports===Vl,Kl=O_&&w_.process,Bn=function(){try{var j=mi&&mi.require&&mi.require("util").types;return j||Kl&&Kl.binding&&Kl.binding("util")}catch{}}(),L_=Bn&&Bn.isArrayBuffer,y_=Bn&&Bn.isDate,A_=Bn&&Bn.isMap,S_=Bn&&Bn.isRegExp,N_=Bn&&Bn.isSet,x_=Bn&&Bn.isTypedArray;function Sn(j,ne,Q){switch(Q.length){case 0:return j.call(ne);case 1:return j.call(ne,Q[0]);case 2:return j.call(ne,Q[0],Q[1]);case 3:return j.call(ne,Q[0],Q[1],Q[2])}return j.apply(ne,Q)}function Um(j,ne,Q,Ne){for(var Xe=-1,gt=j==null?0:j.length;++Xe<gt;){var Bt=j[Xe];ne(Ne,Bt,Q(Bt),j)}return Ne}function Wn(j,ne){for(var Q=-1,Ne=j==null?0:j.length;++Q<Ne&&ne(j[Q],Q,j)!==!1;);return j}function Fm(j,ne){for(var Q=j==null?0:j.length;Q--&&ne(j[Q],Q,j)!==!1;);return j}function T_(j,ne){for(var Q=-1,Ne=j==null?0:j.length;++Q<Ne;)if(!ne(j[Q],Q,j))return!1;return!0}function jr(j,ne){for(var Q=-1,Ne=j==null?0:j.length,Xe=0,gt=[];++Q<Ne;){var Bt=j[Q];ne(Bt,Q,j)&&(gt[Xe++]=Bt)}return gt}function Va(j,ne){var Q=j==null?0:j.length;return!!Q&&Yi(j,ne,0)>-1}function Xl(j,ne,Q){for(var Ne=-1,Xe=j==null?0:j.length;++Ne<Xe;)if(Q(ne,j[Ne]))return!0;return!1}function xt(j,ne){for(var Q=-1,Ne=j==null?0:j.length,Xe=Array(Ne);++Q<Ne;)Xe[Q]=ne(j[Q],Q,j);return Xe}function Vr(j,ne){for(var Q=-1,Ne=ne.length,Xe=j.length;++Q<Ne;)j[Xe+Q]=ne[Q];return j}function ql(j,ne,Q,Ne){var Xe=-1,gt=j==null?0:j.length;for(Ne&&gt&&(Q=j[++Xe]);++Xe<gt;)Q=ne(Q,j[Xe],Xe,j);return Q}function $m(j,ne,Q,Ne){var Xe=j==null?0:j.length;for(Ne&&Xe&&(Q=j[--Xe]);Xe--;)Q=ne(Q,j[Xe],Xe,j);return Q}function Zl(j,ne){for(var Q=-1,Ne=j==null?0:j.length;++Q<Ne;)if(ne(j[Q],Q,j))return!0;return!1}var Hm=Ql("length");function Pm(j){return j.split("")}function Bm(j){return j.match(qp)||[]}function R_(j,ne,Q){var Ne;return Q(j,function(Xe,gt,Bt){if(ne(Xe,gt,Bt))return Ne=gt,!1}),Ne}function Ka(j,ne,Q,Ne){for(var Xe=j.length,gt=Q+(Ne?1:-1);Ne?gt--:++gt<Xe;)if(ne(j[gt],gt,j))return gt;return-1}function Yi(j,ne,Q){return ne===ne?e1(j,ne,Q):Ka(j,D_,Q)}function Wm(j,ne,Q,Ne){for(var Xe=Q-1,gt=j.length;++Xe<gt;)if(Ne(j[Xe],ne))return Xe;return-1}function D_(j){return j!==j}function k_(j,ne){var Q=j==null?0:j.length;return Q?ec(j,ne)/Q:ct}function Ql(j){return function(ne){return ne==null?n:ne[j]}}function Jl(j){return function(ne){return j==null?n:j[ne]}}function G_(j,ne,Q,Ne,Xe){return Xe(j,function(gt,Bt,bt){Q=Ne?(Ne=!1,gt):ne(Q,gt,Bt,bt)}),Q}function zm(j,ne){var Q=j.length;for(j.sort(ne);Q--;)j[Q]=j[Q].value;return j}function ec(j,ne){for(var Q,Ne=-1,Xe=j.length;++Ne<Xe;){var gt=ne(j[Ne]);gt!==n&&(Q=Q===n?gt:Q+gt)}return Q}function tc(j,ne){for(var Q=-1,Ne=Array(j);++Q<j;)Ne[Q]=ne(Q);return Ne}function Ym(j,ne){return xt(ne,function(Q){return[Q,j[Q]]})}function M_(j){return j&&j.slice(0,H_(j)+1).replace(Pl,"")}function Nn(j){return function(ne){return j(ne)}}function nc(j,ne){return xt(ne,function(Q){return j[Q]})}function $o(j,ne){return j.has(ne)}function U_(j,ne){for(var Q=-1,Ne=j.length;++Q<Ne&&Yi(ne,j[Q],0)>-1;);return Q}function F_(j,ne){for(var Q=j.length;Q--&&Yi(ne,j[Q],0)>-1;);return Q}function jm(j,ne){for(var Q=j.length,Ne=0;Q--;)j[Q]===ne&&++Ne;return Ne}var Vm=Jl(xm),Km=Jl(Tm);function Xm(j){return"\\"+Dm[j]}function qm(j,ne){return j==null?n:j[ne]}function ji(j){return ym.test(j)}function Zm(j){return Am.test(j)}function Qm(j){for(var ne,Q=[];!(ne=j.next()).done;)Q.push(ne.value);return Q}function rc(j){var ne=-1,Q=Array(j.size);return j.forEach(function(Ne,Xe){Q[++ne]=[Xe,Ne]}),Q}function $_(j,ne){return function(Q){return j(ne(Q))}}function Kr(j,ne){for(var Q=-1,Ne=j.length,Xe=0,gt=[];++Q<Ne;){var Bt=j[Q];(Bt===ne||Bt===v)&&(j[Q]=v,gt[Xe++]=Q)}return gt}function Xa(j){var ne=-1,Q=Array(j.size);return j.forEach(function(Ne){Q[++ne]=Ne}),Q}function Jm(j){var ne=-1,Q=Array(j.size);return j.forEach(function(Ne){Q[++ne]=[Ne,Ne]}),Q}function e1(j,ne,Q){for(var Ne=Q-1,Xe=j.length;++Ne<Xe;)if(j[Ne]===ne)return Ne;return-1}function t1(j,ne,Q){for(var Ne=Q+1;Ne--;)if(j[Ne]===ne)return Ne;return Ne}function Vi(j){return ji(j)?r1(j):Hm(j)}function nr(j){return ji(j)?i1(j):Pm(j)}function H_(j){for(var ne=j.length;ne--&&jp.test(j.charAt(ne)););return ne}var n1=Jl(Rm);function r1(j){for(var ne=jl.lastIndex=0;jl.test(j);)++ne;return ne}function i1(j){return j.match(jl)||[]}function o1(j){return j.match(Lm)||[]}var a1=function j(ne){ne=ne==null?Kt:Ki.defaults(Kt.Object(),ne,Ki.pick(Kt,Sm));var Q=ne.Array,Ne=ne.Date,Xe=ne.Error,gt=ne.Function,Bt=ne.Math,bt=ne.Object,ic=ne.RegExp,s1=ne.String,zn=ne.TypeError,qa=Q.prototype,l1=gt.prototype,Xi=bt.prototype,Za=ne["__core-js_shared__"],Qa=l1.toString,mt=Xi.hasOwnProperty,c1=0,P_=function(){var o=/[^.]+$/.exec(Za&&Za.keys&&Za.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),Ja=Xi.toString,u1=Qa.call(bt),d1=Kt._,_1=ic("^"+Qa.call(mt).replace(Hl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),es=O_?ne.Buffer:n,Xr=ne.Symbol,ts=ne.Uint8Array,B_=es?es.allocUnsafe:n,ns=$_(bt.getPrototypeOf,bt),W_=bt.create,z_=Xi.propertyIsEnumerable,rs=qa.splice,Y_=Xr?Xr.isConcatSpreadable:n,Ho=Xr?Xr.iterator:n,Ci=Xr?Xr.toStringTag:n,is=function(){try{var o=Oi(bt,"defineProperty");return o({},"",{}),o}catch{}}(),f1=ne.clearTimeout!==Kt.clearTimeout&&ne.clearTimeout,g1=Ne&&Ne.now!==Kt.Date.now&&Ne.now,h1=ne.setTimeout!==Kt.setTimeout&&ne.setTimeout,os=Bt.ceil,as=Bt.floor,oc=bt.getOwnPropertySymbols,v1=es?es.isBuffer:n,j_=ne.isFinite,p1=qa.join,m1=$_(bt.keys,bt),Wt=Bt.max,nn=Bt.min,C1=Ne.now,E1=ne.parseInt,V_=Bt.random,I1=qa.reverse,ac=Oi(ne,"DataView"),Po=Oi(ne,"Map"),sc=Oi(ne,"Promise"),qi=Oi(ne,"Set"),Bo=Oi(ne,"WeakMap"),Wo=Oi(bt,"create"),ss=Bo&&new Bo,Zi={},b1=Li(ac),w1=Li(Po),O1=Li(sc),L1=Li(qi),y1=Li(Bo),ls=Xr?Xr.prototype:n,zo=ls?ls.valueOf:n,K_=ls?ls.toString:n;function L(o){if(Gt(o)&&!qe(o)&&!(o instanceof ot)){if(o instanceof Yn)return o;if(mt.call(o,"__wrapped__"))return qf(o)}return new Yn(o)}var Qi=function(){function o(){}return function(l){if(!Rt(l))return{};if(W_)return W_(l);o.prototype=l;var f=new o;return o.prototype=n,f}}();function cs(){}function Yn(o,l){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}L.templateSettings={escape:Hp,evaluate:Pp,interpolate:r_,variable:"",imports:{_:L}},L.prototype=cs.prototype,L.prototype.constructor=L,Yn.prototype=Qi(cs.prototype),Yn.prototype.constructor=Yn;function ot(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ke,this.__views__=[]}function A1(){var o=new ot(this.__wrapped__);return o.__actions__=En(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=En(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=En(this.__views__),o}function S1(){if(this.__filtered__){var o=new ot(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function N1(){var o=this.__wrapped__.value(),l=this.__dir__,f=qe(o),E=l<0,O=f?o.length:0,N=P0(0,O,this.__views__),M=N.start,z=N.end,K=z-M,oe=E?z:M-1,le=this.__iteratees__,fe=le.length,we=0,Ge=nn(K,this.__takeCount__);if(!f||!E&&O==K&&Ge==K)return Cf(o,this.__actions__);var Pe=[];e:for(;K--&&we<Ge;){oe+=l;for(var et=-1,Be=o[oe];++et<fe;){var rt=le[et],ut=rt.iteratee,Rn=rt.type,_n=ut(Be);if(Rn==_e)Be=_n;else if(!_n){if(Rn==Ce)continue e;break e}}Pe[we++]=Be}return Pe}ot.prototype=Qi(cs.prototype),ot.prototype.constructor=ot;function Ei(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var E=o[l];this.set(E[0],E[1])}}function x1(){this.__data__=Wo?Wo(null):{},this.size=0}function T1(o){var l=this.has(o)&&delete this.__data__[o];return this.size-=l?1:0,l}function R1(o){var l=this.__data__;if(Wo){var f=l[o];return f===u?n:f}return mt.call(l,o)?l[o]:n}function D1(o){var l=this.__data__;return Wo?l[o]!==n:mt.call(l,o)}function k1(o,l){var f=this.__data__;return this.size+=this.has(o)?0:1,f[o]=Wo&&l===n?u:l,this}Ei.prototype.clear=x1,Ei.prototype.delete=T1,Ei.prototype.get=R1,Ei.prototype.has=D1,Ei.prototype.set=k1;function br(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var E=o[l];this.set(E[0],E[1])}}function G1(){this.__data__=[],this.size=0}function M1(o){var l=this.__data__,f=us(l,o);if(f<0)return!1;var E=l.length-1;return f==E?l.pop():rs.call(l,f,1),--this.size,!0}function U1(o){var l=this.__data__,f=us(l,o);return f<0?n:l[f][1]}function F1(o){return us(this.__data__,o)>-1}function $1(o,l){var f=this.__data__,E=us(f,o);return E<0?(++this.size,f.push([o,l])):f[E][1]=l,this}br.prototype.clear=G1,br.prototype.delete=M1,br.prototype.get=U1,br.prototype.has=F1,br.prototype.set=$1;function wr(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var E=o[l];this.set(E[0],E[1])}}function H1(){this.size=0,this.__data__={hash:new Ei,map:new(Po||br),string:new Ei}}function P1(o){var l=bs(this,o).delete(o);return this.size-=l?1:0,l}function B1(o){return bs(this,o).get(o)}function W1(o){return bs(this,o).has(o)}function z1(o,l){var f=bs(this,o),E=f.size;return f.set(o,l),this.size+=f.size==E?0:1,this}wr.prototype.clear=H1,wr.prototype.delete=P1,wr.prototype.get=B1,wr.prototype.has=W1,wr.prototype.set=z1;function Ii(o){var l=-1,f=o==null?0:o.length;for(this.__data__=new wr;++l<f;)this.add(o[l])}function Y1(o){return this.__data__.set(o,u),this}function j1(o){return this.__data__.has(o)}Ii.prototype.add=Ii.prototype.push=Y1,Ii.prototype.has=j1;function rr(o){var l=this.__data__=new br(o);this.size=l.size}function V1(){this.__data__=new br,this.size=0}function K1(o){var l=this.__data__,f=l.delete(o);return this.size=l.size,f}function X1(o){return this.__data__.get(o)}function q1(o){return this.__data__.has(o)}function Z1(o,l){var f=this.__data__;if(f instanceof br){var E=f.__data__;if(!Po||E.length<i-1)return E.push([o,l]),this.size=++f.size,this;f=this.__data__=new wr(E)}return f.set(o,l),this.size=f.size,this}rr.prototype.clear=V1,rr.prototype.delete=K1,rr.prototype.get=X1,rr.prototype.has=q1,rr.prototype.set=Z1;function X_(o,l){var f=qe(o),E=!f&&yi(o),O=!f&&!E&&ei(o),N=!f&&!E&&!O&&no(o),M=f||E||O||N,z=M?tc(o.length,s1):[],K=z.length;for(var oe in o)(l||mt.call(o,oe))&&!(M&&(oe=="length"||O&&(oe=="offset"||oe=="parent")||N&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||Ar(oe,K)))&&z.push(oe);return z}function q_(o){var l=o.length;return l?o[mc(0,l-1)]:n}function Q1(o,l){return ws(En(o),bi(l,0,o.length))}function J1(o){return ws(En(o))}function lc(o,l,f){(f!==n&&!ir(o[l],f)||f===n&&!(l in o))&&Or(o,l,f)}function Yo(o,l,f){var E=o[l];(!(mt.call(o,l)&&ir(E,f))||f===n&&!(l in o))&&Or(o,l,f)}function us(o,l){for(var f=o.length;f--;)if(ir(o[f][0],l))return f;return-1}function e0(o,l,f,E){return qr(o,function(O,N,M){l(E,O,f(O),M)}),E}function Z_(o,l){return o&&ur(l,zt(l),o)}function t0(o,l){return o&&ur(l,bn(l),o)}function Or(o,l,f){l=="__proto__"&&is?is(o,l,{configurable:!0,enumerable:!0,value:f,writable:!0}):o[l]=f}function cc(o,l){for(var f=-1,E=l.length,O=Q(E),N=o==null;++f<E;)O[f]=N?n:Wc(o,l[f]);return O}function bi(o,l,f){return o===o&&(f!==n&&(o=o<=f?o:f),l!==n&&(o=o>=l?o:l)),o}function jn(o,l,f,E,O,N){var M,z=l&g,K=l&h,oe=l&m;if(f&&(M=O?f(o,E,O,N):f(o)),M!==n)return M;if(!Rt(o))return o;var le=qe(o);if(le){if(M=W0(o),!z)return En(o,M)}else{var fe=rn(o),we=fe==kt||fe==De;if(ei(o))return bf(o,z);if(fe==At||fe==tn||we&&!O){if(M=K||we?{}:Pf(o),!z)return K?R0(o,t0(M,o)):T0(o,Z_(M,o))}else{if(!Ot[fe])return O?o:{};M=z0(o,fe,z)}}N||(N=new rr);var Ge=N.get(o);if(Ge)return Ge;N.set(o,M),vg(o)?o.forEach(function(Be){M.add(jn(Be,l,f,Be,o,N))}):gg(o)&&o.forEach(function(Be,rt){M.set(rt,jn(Be,l,f,rt,o,N))});var Pe=oe?K?Nc:Sc:K?bn:zt,et=le?n:Pe(o);return Wn(et||o,function(Be,rt){et&&(rt=Be,Be=o[rt]),Yo(M,rt,jn(Be,l,f,rt,o,N))}),M}function n0(o){var l=zt(o);return function(f){return Q_(f,o,l)}}function Q_(o,l,f){var E=f.length;if(o==null)return!E;for(o=bt(o);E--;){var O=f[E],N=l[O],M=o[O];if(M===n&&!(O in o)||!N(M))return!1}return!0}function J_(o,l,f){if(typeof o!="function")throw new zn(s);return Qo(function(){o.apply(n,f)},l)}function jo(o,l,f,E){var O=-1,N=Va,M=!0,z=o.length,K=[],oe=l.length;if(!z)return K;f&&(l=xt(l,Nn(f))),E?(N=Xl,M=!1):l.length>=i&&(N=$o,M=!1,l=new Ii(l));e:for(;++O<z;){var le=o[O],fe=f==null?le:f(le);if(le=E||le!==0?le:0,M&&fe===fe){for(var we=oe;we--;)if(l[we]===fe)continue e;K.push(le)}else N(l,fe,E)||K.push(le)}return K}var qr=Af(cr),ef=Af(dc,!0);function r0(o,l){var f=!0;return qr(o,function(E,O,N){return f=!!l(E,O,N),f}),f}function ds(o,l,f){for(var E=-1,O=o.length;++E<O;){var N=o[E],M=l(N);if(M!=null&&(z===n?M===M&&!Tn(M):f(M,z)))var z=M,K=N}return K}function i0(o,l,f,E){var O=o.length;for(f=Je(f),f<0&&(f=-f>O?0:O+f),E=E===n||E>O?O:Je(E),E<0&&(E+=O),E=f>E?0:mg(E);f<E;)o[f++]=l;return o}function tf(o,l){var f=[];return qr(o,function(E,O,N){l(E,O,N)&&f.push(E)}),f}function Xt(o,l,f,E,O){var N=-1,M=o.length;for(f||(f=j0),O||(O=[]);++N<M;){var z=o[N];l>0&&f(z)?l>1?Xt(z,l-1,f,E,O):Vr(O,z):E||(O[O.length]=z)}return O}var uc=Sf(),nf=Sf(!0);function cr(o,l){return o&&uc(o,l,zt)}function dc(o,l){return o&&nf(o,l,zt)}function _s(o,l){return jr(l,function(f){return Sr(o[f])})}function wi(o,l){l=Qr(l,o);for(var f=0,E=l.length;o!=null&&f<E;)o=o[dr(l[f++])];return f&&f==E?o:n}function rf(o,l,f){var E=l(o);return qe(o)?E:Vr(E,f(o))}function un(o){return o==null?o===n?Dp:Re:Ci&&Ci in bt(o)?H0(o):J0(o)}function _c(o,l){return o>l}function o0(o,l){return o!=null&&mt.call(o,l)}function a0(o,l){return o!=null&&l in bt(o)}function s0(o,l,f){return o>=nn(l,f)&&o<Wt(l,f)}function fc(o,l,f){for(var E=f?Xl:Va,O=o[0].length,N=o.length,M=N,z=Q(N),K=1/0,oe=[];M--;){var le=o[M];M&&l&&(le=xt(le,Nn(l))),K=nn(le.length,K),z[M]=!f&&(l||O>=120&&le.length>=120)?new Ii(M&&le):n}le=o[0];var fe=-1,we=z[0];e:for(;++fe<O&&oe.length<K;){var Ge=le[fe],Pe=l?l(Ge):Ge;if(Ge=f||Ge!==0?Ge:0,!(we?$o(we,Pe):E(oe,Pe,f))){for(M=N;--M;){var et=z[M];if(!(et?$o(et,Pe):E(o[M],Pe,f)))continue e}we&&we.push(Pe),oe.push(Ge)}}return oe}function l0(o,l,f,E){return cr(o,function(O,N,M){l(E,f(O),N,M)}),E}function Vo(o,l,f){l=Qr(l,o),o=Yf(o,l);var E=o==null?o:o[dr(Kn(l))];return E==null?n:Sn(E,o,f)}function of(o){return Gt(o)&&un(o)==tn}function c0(o){return Gt(o)&&un(o)==Fo}function u0(o){return Gt(o)&&un(o)==Pn}function Ko(o,l,f,E,O){return o===l?!0:o==null||l==null||!Gt(o)&&!Gt(l)?o!==o&&l!==l:d0(o,l,f,E,Ko,O)}function d0(o,l,f,E,O,N){var M=qe(o),z=qe(l),K=M?Ir:rn(o),oe=z?Ir:rn(l);K=K==tn?At:K,oe=oe==tn?At:oe;var le=K==At,fe=oe==At,we=K==oe;if(we&&ei(o)){if(!ei(l))return!1;M=!0,le=!1}if(we&&!le)return N||(N=new rr),M||no(o)?Ff(o,l,f,E,O,N):F0(o,l,K,f,E,O,N);if(!(f&C)){var Ge=le&&mt.call(o,"__wrapped__"),Pe=fe&&mt.call(l,"__wrapped__");if(Ge||Pe){var et=Ge?o.value():o,Be=Pe?l.value():l;return N||(N=new rr),O(et,Be,f,E,N)}}return we?(N||(N=new rr),$0(o,l,f,E,O,N)):!1}function _0(o){return Gt(o)&&rn(o)==be}function gc(o,l,f,E){var O=f.length,N=O,M=!E;if(o==null)return!N;for(o=bt(o);O--;){var z=f[O];if(M&&z[2]?z[1]!==o[z[0]]:!(z[0]in o))return!1}for(;++O<N;){z=f[O];var K=z[0],oe=o[K],le=z[1];if(M&&z[2]){if(oe===n&&!(K in o))return!1}else{var fe=new rr;if(E)var we=E(oe,le,K,o,l,fe);if(!(we===n?Ko(le,oe,C|I,E,fe):we))return!1}}return!0}function af(o){if(!Rt(o)||K0(o))return!1;var l=Sr(o)?_1:nm;return l.test(Li(o))}function f0(o){return Gt(o)&&un(o)==pi}function g0(o){return Gt(o)&&rn(o)==tr}function h0(o){return Gt(o)&&Ns(o.length)&&!!St[un(o)]}function sf(o){return typeof o=="function"?o:o==null?wn:typeof o=="object"?qe(o)?uf(o[0],o[1]):cf(o):Ng(o)}function hc(o){if(!Zo(o))return m1(o);var l=[];for(var f in bt(o))mt.call(o,f)&&f!="constructor"&&l.push(f);return l}function v0(o){if(!Rt(o))return Q0(o);var l=Zo(o),f=[];for(var E in o)E=="constructor"&&(l||!mt.call(o,E))||f.push(E);return f}function vc(o,l){return o<l}function lf(o,l){var f=-1,E=In(o)?Q(o.length):[];return qr(o,function(O,N,M){E[++f]=l(O,N,M)}),E}function cf(o){var l=Tc(o);return l.length==1&&l[0][2]?Wf(l[0][0],l[0][1]):function(f){return f===o||gc(f,o,l)}}function uf(o,l){return Dc(o)&&Bf(l)?Wf(dr(o),l):function(f){var E=Wc(f,o);return E===n&&E===l?zc(f,o):Ko(l,E,C|I)}}function fs(o,l,f,E,O){o!==l&&uc(l,function(N,M){if(O||(O=new rr),Rt(N))p0(o,l,M,f,fs,E,O);else{var z=E?E(Gc(o,M),N,M+"",o,l,O):n;z===n&&(z=N),lc(o,M,z)}},bn)}function p0(o,l,f,E,O,N,M){var z=Gc(o,f),K=Gc(l,f),oe=M.get(K);if(oe){lc(o,f,oe);return}var le=N?N(z,K,f+"",o,l,M):n,fe=le===n;if(fe){var we=qe(K),Ge=!we&&ei(K),Pe=!we&&!Ge&&no(K);le=K,we||Ge||Pe?qe(z)?le=z:Mt(z)?le=En(z):Ge?(fe=!1,le=bf(K,!0)):Pe?(fe=!1,le=wf(K,!0)):le=[]:Jo(K)||yi(K)?(le=z,yi(z)?le=Cg(z):(!Rt(z)||Sr(z))&&(le=Pf(K))):fe=!1}fe&&(M.set(K,le),O(le,K,E,N,M),M.delete(K)),lc(o,f,le)}function df(o,l){var f=o.length;if(f)return l+=l<0?f:0,Ar(l,f)?o[l]:n}function _f(o,l,f){l.length?l=xt(l,function(N){return qe(N)?function(M){return wi(M,N.length===1?N[0]:N)}:N}):l=[wn];var E=-1;l=xt(l,Nn(He()));var O=lf(o,function(N,M,z){var K=xt(l,function(oe){return oe(N)});return{criteria:K,index:++E,value:N}});return zm(O,function(N,M){return x0(N,M,f)})}function m0(o,l){return ff(o,l,function(f,E){return zc(o,E)})}function ff(o,l,f){for(var E=-1,O=l.length,N={};++E<O;){var M=l[E],z=wi(o,M);f(z,M)&&Xo(N,Qr(M,o),z)}return N}function C0(o){return function(l){return wi(l,o)}}function pc(o,l,f,E){var O=E?Wm:Yi,N=-1,M=l.length,z=o;for(o===l&&(l=En(l)),f&&(z=xt(o,Nn(f)));++N<M;)for(var K=0,oe=l[N],le=f?f(oe):oe;(K=O(z,le,K,E))>-1;)z!==o&&rs.call(z,K,1),rs.call(o,K,1);return o}function gf(o,l){for(var f=o?l.length:0,E=f-1;f--;){var O=l[f];if(f==E||O!==N){var N=O;Ar(O)?rs.call(o,O,1):Ic(o,O)}}return o}function mc(o,l){return o+as(V_()*(l-o+1))}function E0(o,l,f,E){for(var O=-1,N=Wt(os((l-o)/(f||1)),0),M=Q(N);N--;)M[E?N:++O]=o,o+=f;return M}function Cc(o,l){var f="";if(!o||l<1||l>Ae)return f;do l%2&&(f+=o),l=as(l/2),l&&(o+=o);while(l);return f}function tt(o,l){return Mc(zf(o,l,wn),o+"")}function I0(o){return q_(ro(o))}function b0(o,l){var f=ro(o);return ws(f,bi(l,0,f.length))}function Xo(o,l,f,E){if(!Rt(o))return o;l=Qr(l,o);for(var O=-1,N=l.length,M=N-1,z=o;z!=null&&++O<N;){var K=dr(l[O]),oe=f;if(K==="__proto__"||K==="constructor"||K==="prototype")return o;if(O!=M){var le=z[K];oe=E?E(le,K,z):n,oe===n&&(oe=Rt(le)?le:Ar(l[O+1])?[]:{})}Yo(z,K,oe),z=z[K]}return o}var hf=ss?function(o,l){return ss.set(o,l),o}:wn,w0=is?function(o,l){return is(o,"toString",{configurable:!0,enumerable:!1,value:jc(l),writable:!0})}:wn;function O0(o){return ws(ro(o))}function Vn(o,l,f){var E=-1,O=o.length;l<0&&(l=-l>O?0:O+l),f=f>O?O:f,f<0&&(f+=O),O=l>f?0:f-l>>>0,l>>>=0;for(var N=Q(O);++E<O;)N[E]=o[E+l];return N}function L0(o,l){var f;return qr(o,function(E,O,N){return f=l(E,O,N),!f}),!!f}function gs(o,l,f){var E=0,O=o==null?E:o.length;if(typeof l=="number"&&l===l&&O<=Hn){for(;E<O;){var N=E+O>>>1,M=o[N];M!==null&&!Tn(M)&&(f?M<=l:M<l)?E=N+1:O=N}return O}return Ec(o,l,wn,f)}function Ec(o,l,f,E){var O=0,N=o==null?0:o.length;if(N===0)return 0;l=f(l);for(var M=l!==l,z=l===null,K=Tn(l),oe=l===n;O<N;){var le=as((O+N)/2),fe=f(o[le]),we=fe!==n,Ge=fe===null,Pe=fe===fe,et=Tn(fe);if(M)var Be=E||Pe;else oe?Be=Pe&&(E||we):z?Be=Pe&&we&&(E||!Ge):K?Be=Pe&&we&&!Ge&&(E||!et):Ge||et?Be=!1:Be=E?fe<=l:fe<l;Be?O=le+1:N=le}return nn(N,An)}function vf(o,l){for(var f=-1,E=o.length,O=0,N=[];++f<E;){var M=o[f],z=l?l(M):M;if(!f||!ir(z,K)){var K=z;N[O++]=M===0?0:M}}return N}function pf(o){return typeof o=="number"?o:Tn(o)?ct:+o}function xn(o){if(typeof o=="string")return o;if(qe(o))return xt(o,xn)+"";if(Tn(o))return K_?K_.call(o):"";var l=o+"";return l=="0"&&1/o==-1/0?"-0":l}function Zr(o,l,f){var E=-1,O=Va,N=o.length,M=!0,z=[],K=z;if(f)M=!1,O=Xl;else if(N>=i){var oe=l?null:M0(o);if(oe)return Xa(oe);M=!1,O=$o,K=new Ii}else K=l?[]:z;e:for(;++E<N;){var le=o[E],fe=l?l(le):le;if(le=f||le!==0?le:0,M&&fe===fe){for(var we=K.length;we--;)if(K[we]===fe)continue e;l&&K.push(fe),z.push(le)}else O(K,fe,f)||(K!==z&&K.push(fe),z.push(le))}return z}function Ic(o,l){return l=Qr(l,o),o=Yf(o,l),o==null||delete o[dr(Kn(l))]}function mf(o,l,f,E){return Xo(o,l,f(wi(o,l)),E)}function hs(o,l,f,E){for(var O=o.length,N=E?O:-1;(E?N--:++N<O)&&l(o[N],N,o););return f?Vn(o,E?0:N,E?N+1:O):Vn(o,E?N+1:0,E?O:N)}function Cf(o,l){var f=o;return f instanceof ot&&(f=f.value()),ql(l,function(E,O){return O.func.apply(O.thisArg,Vr([E],O.args))},f)}function bc(o,l,f){var E=o.length;if(E<2)return E?Zr(o[0]):[];for(var O=-1,N=Q(E);++O<E;)for(var M=o[O],z=-1;++z<E;)z!=O&&(N[O]=jo(N[O]||M,o[z],l,f));return Zr(Xt(N,1),l,f)}function Ef(o,l,f){for(var E=-1,O=o.length,N=l.length,M={};++E<O;){var z=E<N?l[E]:n;f(M,o[E],z)}return M}function wc(o){return Mt(o)?o:[]}function Oc(o){return typeof o=="function"?o:wn}function Qr(o,l){return qe(o)?o:Dc(o,l)?[o]:Xf(pt(o))}var y0=tt;function Jr(o,l,f){var E=o.length;return f=f===n?E:f,!l&&f>=E?o:Vn(o,l,f)}var If=f1||function(o){return Kt.clearTimeout(o)};function bf(o,l){if(l)return o.slice();var f=o.length,E=B_?B_(f):new o.constructor(f);return o.copy(E),E}function Lc(o){var l=new o.constructor(o.byteLength);return new ts(l).set(new ts(o)),l}function A0(o,l){var f=l?Lc(o.buffer):o.buffer;return new o.constructor(f,o.byteOffset,o.byteLength)}function S0(o){var l=new o.constructor(o.source,i_.exec(o));return l.lastIndex=o.lastIndex,l}function N0(o){return zo?bt(zo.call(o)):{}}function wf(o,l){var f=l?Lc(o.buffer):o.buffer;return new o.constructor(f,o.byteOffset,o.length)}function Of(o,l){if(o!==l){var f=o!==n,E=o===null,O=o===o,N=Tn(o),M=l!==n,z=l===null,K=l===l,oe=Tn(l);if(!z&&!oe&&!N&&o>l||N&&M&&K&&!z&&!oe||E&&M&&K||!f&&K||!O)return 1;if(!E&&!N&&!oe&&o<l||oe&&f&&O&&!E&&!N||z&&f&&O||!M&&O||!K)return-1}return 0}function x0(o,l,f){for(var E=-1,O=o.criteria,N=l.criteria,M=O.length,z=f.length;++E<M;){var K=Of(O[E],N[E]);if(K){if(E>=z)return K;var oe=f[E];return K*(oe=="desc"?-1:1)}}return o.index-l.index}function Lf(o,l,f,E){for(var O=-1,N=o.length,M=f.length,z=-1,K=l.length,oe=Wt(N-M,0),le=Q(K+oe),fe=!E;++z<K;)le[z]=l[z];for(;++O<M;)(fe||O<N)&&(le[f[O]]=o[O]);for(;oe--;)le[z++]=o[O++];return le}function yf(o,l,f,E){for(var O=-1,N=o.length,M=-1,z=f.length,K=-1,oe=l.length,le=Wt(N-z,0),fe=Q(le+oe),we=!E;++O<le;)fe[O]=o[O];for(var Ge=O;++K<oe;)fe[Ge+K]=l[K];for(;++M<z;)(we||O<N)&&(fe[Ge+f[M]]=o[O++]);return fe}function En(o,l){var f=-1,E=o.length;for(l||(l=Q(E));++f<E;)l[f]=o[f];return l}function ur(o,l,f,E){var O=!f;f||(f={});for(var N=-1,M=l.length;++N<M;){var z=l[N],K=E?E(f[z],o[z],z,f,o):n;K===n&&(K=o[z]),O?Or(f,z,K):Yo(f,z,K)}return f}function T0(o,l){return ur(o,Rc(o),l)}function R0(o,l){return ur(o,$f(o),l)}function vs(o,l){return function(f,E){var O=qe(f)?Um:e0,N=l?l():{};return O(f,o,He(E,2),N)}}function Ji(o){return tt(function(l,f){var E=-1,O=f.length,N=O>1?f[O-1]:n,M=O>2?f[2]:n;for(N=o.length>3&&typeof N=="function"?(O--,N):n,M&&dn(f[0],f[1],M)&&(N=O<3?n:N,O=1),l=bt(l);++E<O;){var z=f[E];z&&o(l,z,E,N)}return l})}function Af(o,l){return function(f,E){if(f==null)return f;if(!In(f))return o(f,E);for(var O=f.length,N=l?O:-1,M=bt(f);(l?N--:++N<O)&&E(M[N],N,M)!==!1;);return f}}function Sf(o){return function(l,f,E){for(var O=-1,N=bt(l),M=E(l),z=M.length;z--;){var K=M[o?z:++O];if(f(N[K],K,N)===!1)break}return l}}function D0(o,l,f){var E=l&b,O=qo(o);function N(){var M=this&&this!==Kt&&this instanceof N?O:o;return M.apply(E?f:this,arguments)}return N}function Nf(o){return function(l){l=pt(l);var f=ji(l)?nr(l):n,E=f?f[0]:l.charAt(0),O=f?Jr(f,1).join(""):l.slice(1);return E[o]()+O}}function eo(o){return function(l){return ql(Ag(yg(l).replace(wm,"")),o,"")}}function qo(o){return function(){var l=arguments;switch(l.length){case 0:return new o;case 1:return new o(l[0]);case 2:return new o(l[0],l[1]);case 3:return new o(l[0],l[1],l[2]);case 4:return new o(l[0],l[1],l[2],l[3]);case 5:return new o(l[0],l[1],l[2],l[3],l[4]);case 6:return new o(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new o(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var f=Qi(o.prototype),E=o.apply(f,l);return Rt(E)?E:f}}function k0(o,l,f){var E=qo(o);function O(){for(var N=arguments.length,M=Q(N),z=N,K=to(O);z--;)M[z]=arguments[z];var oe=N<3&&M[0]!==K&&M[N-1]!==K?[]:Kr(M,K);if(N-=oe.length,N<f)return kf(o,l,ps,O.placeholder,n,M,oe,n,n,f-N);var le=this&&this!==Kt&&this instanceof O?E:o;return Sn(le,this,M)}return O}function xf(o){return function(l,f,E){var O=bt(l);if(!In(l)){var N=He(f,3);l=zt(l),f=function(z){return N(O[z],z,O)}}var M=o(l,f,E);return M>-1?O[N?l[M]:M]:n}}function Tf(o){return yr(function(l){var f=l.length,E=f,O=Yn.prototype.thru;for(o&&l.reverse();E--;){var N=l[E];if(typeof N!="function")throw new zn(s);if(O&&!M&&Is(N)=="wrapper")var M=new Yn([],!0)}for(E=M?E:f;++E<f;){N=l[E];var z=Is(N),K=z=="wrapper"?xc(N):n;K&&kc(K[0])&&K[1]==(W|D|F|X)&&!K[4].length&&K[9]==1?M=M[Is(K[0])].apply(M,K[3]):M=N.length==1&&kc(N)?M[z]():M.thru(N)}return function(){var oe=arguments,le=oe[0];if(M&&oe.length==1&&qe(le))return M.plant(le).value();for(var fe=0,we=f?l[fe].apply(this,oe):le;++fe<f;)we=l[fe].call(this,we);return we}})}function ps(o,l,f,E,O,N,M,z,K,oe){var le=l&W,fe=l&b,we=l&w,Ge=l&(D|G),Pe=l&ee,et=we?n:qo(o);function Be(){for(var rt=arguments.length,ut=Q(rt),Rn=rt;Rn--;)ut[Rn]=arguments[Rn];if(Ge)var _n=to(Be),Dn=jm(ut,_n);if(E&&(ut=Lf(ut,E,O,Ge)),N&&(ut=yf(ut,N,M,Ge)),rt-=Dn,Ge&&rt<oe){var Ut=Kr(ut,_n);return kf(o,l,ps,Be.placeholder,f,ut,Ut,z,K,oe-rt)}var or=fe?f:this,xr=we?or[o]:o;return rt=ut.length,z?ut=eC(ut,z):Pe&&rt>1&&ut.reverse(),le&&K<rt&&(ut.length=K),this&&this!==Kt&&this instanceof Be&&(xr=et||qo(xr)),xr.apply(or,ut)}return Be}function Rf(o,l){return function(f,E){return l0(f,o,l(E),{})}}function ms(o,l){return function(f,E){var O;if(f===n&&E===n)return l;if(f!==n&&(O=f),E!==n){if(O===n)return E;typeof f=="string"||typeof E=="string"?(f=xn(f),E=xn(E)):(f=pf(f),E=pf(E)),O=o(f,E)}return O}}function yc(o){return yr(function(l){return l=xt(l,Nn(He())),tt(function(f){var E=this;return o(l,function(O){return Sn(O,E,f)})})})}function Cs(o,l){l=l===n?" ":xn(l);var f=l.length;if(f<2)return f?Cc(l,o):l;var E=Cc(l,os(o/Vi(l)));return ji(l)?Jr(nr(E),0,o).join(""):E.slice(0,o)}function G0(o,l,f,E){var O=l&b,N=qo(o);function M(){for(var z=-1,K=arguments.length,oe=-1,le=E.length,fe=Q(le+K),we=this&&this!==Kt&&this instanceof M?N:o;++oe<le;)fe[oe]=E[oe];for(;K--;)fe[oe++]=arguments[++z];return Sn(we,O?f:this,fe)}return M}function Df(o){return function(l,f,E){return E&&typeof E!="number"&&dn(l,f,E)&&(f=E=n),l=Nr(l),f===n?(f=l,l=0):f=Nr(f),E=E===n?l<f?1:-1:Nr(E),E0(l,f,E,o)}}function Es(o){return function(l,f){return typeof l=="string"&&typeof f=="string"||(l=Xn(l),f=Xn(f)),o(l,f)}}function kf(o,l,f,E,O,N,M,z,K,oe){var le=l&D,fe=le?M:n,we=le?n:M,Ge=le?N:n,Pe=le?n:N;l|=le?F:B,l&=~(le?B:F),l&y||(l&=-4);var et=[o,l,O,Ge,fe,Pe,we,z,K,oe],Be=f.apply(n,et);return kc(o)&&jf(Be,et),Be.placeholder=E,Vf(Be,o,l)}function Ac(o){var l=Bt[o];return function(f,E){if(f=Xn(f),E=E==null?0:nn(Je(E),292),E&&j_(f)){var O=(pt(f)+"e").split("e"),N=l(O[0]+"e"+(+O[1]+E));return O=(pt(N)+"e").split("e"),+(O[0]+"e"+(+O[1]-E))}return l(f)}}var M0=qi&&1/Xa(new qi([,-0]))[1]==Ve?function(o){return new qi(o)}:Xc;function Gf(o){return function(l){var f=rn(l);return f==be?rc(l):f==tr?Jm(l):Ym(l,o(l))}}function Lr(o,l,f,E,O,N,M,z){var K=l&w;if(!K&&typeof o!="function")throw new zn(s);var oe=E?E.length:0;if(oe||(l&=-97,E=O=n),M=M===n?M:Wt(Je(M),0),z=z===n?z:Je(z),oe-=O?O.length:0,l&B){var le=E,fe=O;E=O=n}var we=K?n:xc(o),Ge=[o,l,f,E,O,le,fe,N,M,z];if(we&&Z0(Ge,we),o=Ge[0],l=Ge[1],f=Ge[2],E=Ge[3],O=Ge[4],z=Ge[9]=Ge[9]===n?K?0:o.length:Wt(Ge[9]-oe,0),!z&&l&(D|G)&&(l&=-25),!l||l==b)var Pe=D0(o,l,f);else l==D||l==G?Pe=k0(o,l,z):(l==F||l==(b|F))&&!O.length?Pe=G0(o,l,f,E):Pe=ps.apply(n,Ge);var et=we?hf:jf;return Vf(et(Pe,Ge),o,l)}function Mf(o,l,f,E){return o===n||ir(o,Xi[f])&&!mt.call(E,f)?l:o}function Uf(o,l,f,E,O,N){return Rt(o)&&Rt(l)&&(N.set(l,o),fs(o,l,n,Uf,N),N.delete(l)),o}function U0(o){return Jo(o)?n:o}function Ff(o,l,f,E,O,N){var M=f&C,z=o.length,K=l.length;if(z!=K&&!(M&&K>z))return!1;var oe=N.get(o),le=N.get(l);if(oe&&le)return oe==l&&le==o;var fe=-1,we=!0,Ge=f&I?new Ii:n;for(N.set(o,l),N.set(l,o);++fe<z;){var Pe=o[fe],et=l[fe];if(E)var Be=M?E(et,Pe,fe,l,o,N):E(Pe,et,fe,o,l,N);if(Be!==n){if(Be)continue;we=!1;break}if(Ge){if(!Zl(l,function(rt,ut){if(!$o(Ge,ut)&&(Pe===rt||O(Pe,rt,f,E,N)))return Ge.push(ut)})){we=!1;break}}else if(!(Pe===et||O(Pe,et,f,E,N))){we=!1;break}}return N.delete(o),N.delete(l),we}function F0(o,l,f,E,O,N,M){switch(f){case Wi:if(o.byteLength!=l.byteLength||o.byteOffset!=l.byteOffset)return!1;o=o.buffer,l=l.buffer;case Fo:return!(o.byteLength!=l.byteLength||!N(new ts(o),new ts(l)));case lr:case Pn:case ke:return ir(+o,+l);case Yr:return o.name==l.name&&o.message==l.message;case pi:case Mo:return o==l+"";case be:var z=rc;case tr:var K=E&C;if(z||(z=Xa),o.size!=l.size&&!K)return!1;var oe=M.get(o);if(oe)return oe==l;E|=I,M.set(o,l);var le=Ff(z(o),z(l),E,O,N,M);return M.delete(o),le;case Wa:if(zo)return zo.call(o)==zo.call(l)}return!1}function $0(o,l,f,E,O,N){var M=f&C,z=Sc(o),K=z.length,oe=Sc(l),le=oe.length;if(K!=le&&!M)return!1;for(var fe=K;fe--;){var we=z[fe];if(!(M?we in l:mt.call(l,we)))return!1}var Ge=N.get(o),Pe=N.get(l);if(Ge&&Pe)return Ge==l&&Pe==o;var et=!0;N.set(o,l),N.set(l,o);for(var Be=M;++fe<K;){we=z[fe];var rt=o[we],ut=l[we];if(E)var Rn=M?E(ut,rt,we,l,o,N):E(rt,ut,we,o,l,N);if(!(Rn===n?rt===ut||O(rt,ut,f,E,N):Rn)){et=!1;break}Be||(Be=we=="constructor")}if(et&&!Be){var _n=o.constructor,Dn=l.constructor;_n!=Dn&&"constructor"in o&&"constructor"in l&&!(typeof _n=="function"&&_n instanceof _n&&typeof Dn=="function"&&Dn instanceof Dn)&&(et=!1)}return N.delete(o),N.delete(l),et}function yr(o){return Mc(zf(o,n,Jf),o+"")}function Sc(o){return rf(o,zt,Rc)}function Nc(o){return rf(o,bn,$f)}var xc=ss?function(o){return ss.get(o)}:Xc;function Is(o){for(var l=o.name+"",f=Zi[l],E=mt.call(Zi,l)?f.length:0;E--;){var O=f[E],N=O.func;if(N==null||N==o)return O.name}return l}function to(o){var l=mt.call(L,"placeholder")?L:o;return l.placeholder}function He(){var o=L.iteratee||Vc;return o=o===Vc?sf:o,arguments.length?o(arguments[0],arguments[1]):o}function bs(o,l){var f=o.__data__;return V0(l)?f[typeof l=="string"?"string":"hash"]:f.map}function Tc(o){for(var l=zt(o),f=l.length;f--;){var E=l[f],O=o[E];l[f]=[E,O,Bf(O)]}return l}function Oi(o,l){var f=qm(o,l);return af(f)?f:n}function H0(o){var l=mt.call(o,Ci),f=o[Ci];try{o[Ci]=n;var E=!0}catch{}var O=Ja.call(o);return E&&(l?o[Ci]=f:delete o[Ci]),O}var Rc=oc?function(o){return o==null?[]:(o=bt(o),jr(oc(o),function(l){return z_.call(o,l)}))}:qc,$f=oc?function(o){for(var l=[];o;)Vr(l,Rc(o)),o=ns(o);return l}:qc,rn=un;(ac&&rn(new ac(new ArrayBuffer(1)))!=Wi||Po&&rn(new Po)!=be||sc&&rn(sc.resolve())!=Ba||qi&&rn(new qi)!=tr||Bo&&rn(new Bo)!=Uo)&&(rn=function(o){var l=un(o),f=l==At?o.constructor:n,E=f?Li(f):"";if(E)switch(E){case b1:return Wi;case w1:return be;case O1:return Ba;case L1:return tr;case y1:return Uo}return l});function P0(o,l,f){for(var E=-1,O=f.length;++E<O;){var N=f[E],M=N.size;switch(N.type){case"drop":o+=M;break;case"dropRight":l-=M;break;case"take":l=nn(l,o+M);break;case"takeRight":o=Wt(o,l-M);break}}return{start:o,end:l}}function B0(o){var l=o.match(Kp);return l?l[1].split(Xp):[]}function Hf(o,l,f){l=Qr(l,o);for(var E=-1,O=l.length,N=!1;++E<O;){var M=dr(l[E]);if(!(N=o!=null&&f(o,M)))break;o=o[M]}return N||++E!=O?N:(O=o==null?0:o.length,!!O&&Ns(O)&&Ar(M,O)&&(qe(o)||yi(o)))}function W0(o){var l=o.length,f=new o.constructor(l);return l&&typeof o[0]=="string"&&mt.call(o,"index")&&(f.index=o.index,f.input=o.input),f}function Pf(o){return typeof o.constructor=="function"&&!Zo(o)?Qi(ns(o)):{}}function z0(o,l,f){var E=o.constructor;switch(l){case Fo:return Lc(o);case lr:case Pn:return new E(+o);case Wi:return A0(o,f);case Tl:case Rl:case Dl:case kl:case Gl:case Ml:case Ul:case Fl:case $l:return wf(o,f);case be:return new E;case ke:case Mo:return new E(o);case pi:return S0(o);case tr:return new E;case Wa:return N0(o)}}function Y0(o,l){var f=l.length;if(!f)return o;var E=f-1;return l[E]=(f>1?"& ":"")+l[E],l=l.join(f>2?", ":" "),o.replace(Vp,`{
/* [wrapped with `+l+`] */
`)}function j0(o){return qe(o)||yi(o)||!!(Y_&&o&&o[Y_])}function Ar(o,l){var f=typeof o;return l=l??Ae,!!l&&(f=="number"||f!="symbol"&&im.test(o))&&o>-1&&o%1==0&&o<l}function dn(o,l,f){if(!Rt(f))return!1;var E=typeof l;return(E=="number"?In(f)&&Ar(l,f.length):E=="string"&&l in f)?ir(f[l],o):!1}function Dc(o,l){if(qe(o))return!1;var f=typeof o;return f=="number"||f=="symbol"||f=="boolean"||o==null||Tn(o)?!0:Wp.test(o)||!Bp.test(o)||l!=null&&o in bt(l)}function V0(o){var l=typeof o;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?o!=="__proto__":o===null}function kc(o){var l=Is(o),f=L[l];if(typeof f!="function"||!(l in ot.prototype))return!1;if(o===f)return!0;var E=xc(f);return!!E&&o===E[0]}function K0(o){return!!P_&&P_ in o}var X0=Za?Sr:Zc;function Zo(o){var l=o&&o.constructor,f=typeof l=="function"&&l.prototype||Xi;return o===f}function Bf(o){return o===o&&!Rt(o)}function Wf(o,l){return function(f){return f==null?!1:f[o]===l&&(l!==n||o in bt(f))}}function q0(o){var l=As(o,function(E){return f.size===_&&f.clear(),E}),f=l.cache;return l}function Z0(o,l){var f=o[1],E=l[1],O=f|E,N=O<(b|w|W),M=E==W&&f==D||E==W&&f==X&&o[7].length<=l[8]||E==(W|X)&&l[7].length<=l[8]&&f==D;if(!(N||M))return o;E&b&&(o[2]=l[2],O|=f&b?0:y);var z=l[3];if(z){var K=o[3];o[3]=K?Lf(K,z,l[4]):z,o[4]=K?Kr(o[3],v):l[4]}return z=l[5],z&&(K=o[5],o[5]=K?yf(K,z,l[6]):z,o[6]=K?Kr(o[5],v):l[6]),z=l[7],z&&(o[7]=z),E&W&&(o[8]=o[8]==null?l[8]:nn(o[8],l[8])),o[9]==null&&(o[9]=l[9]),o[0]=l[0],o[1]=O,o}function Q0(o){var l=[];if(o!=null)for(var f in bt(o))l.push(f);return l}function J0(o){return Ja.call(o)}function zf(o,l,f){return l=Wt(l===n?o.length-1:l,0),function(){for(var E=arguments,O=-1,N=Wt(E.length-l,0),M=Q(N);++O<N;)M[O]=E[l+O];O=-1;for(var z=Q(l+1);++O<l;)z[O]=E[O];return z[l]=f(M),Sn(o,this,z)}}function Yf(o,l){return l.length<2?o:wi(o,Vn(l,0,-1))}function eC(o,l){for(var f=o.length,E=nn(l.length,f),O=En(o);E--;){var N=l[E];o[E]=Ar(N,f)?O[N]:n}return o}function Gc(o,l){if(!(l==="constructor"&&typeof o[l]=="function")&&l!="__proto__")return o[l]}var jf=Kf(hf),Qo=h1||function(o,l){return Kt.setTimeout(o,l)},Mc=Kf(w0);function Vf(o,l,f){var E=l+"";return Mc(o,Y0(E,tC(B0(E),f)))}function Kf(o){var l=0,f=0;return function(){var E=C1(),O=me-(E-f);if(f=E,O>0){if(++l>=re)return arguments[0]}else l=0;return o.apply(n,arguments)}}function ws(o,l){var f=-1,E=o.length,O=E-1;for(l=l===n?E:l;++f<l;){var N=mc(f,O),M=o[N];o[N]=o[f],o[f]=M}return o.length=l,o}var Xf=q0(function(o){var l=[];return o.charCodeAt(0)===46&&l.push(""),o.replace(zp,function(f,E,O,N){l.push(O?N.replace(Qp,"$1"):E||f)}),l});function dr(o){if(typeof o=="string"||Tn(o))return o;var l=o+"";return l=="0"&&1/o==-1/0?"-0":l}function Li(o){if(o!=null){try{return Qa.call(o)}catch{}try{return o+""}catch{}}return""}function tC(o,l){return Wn(zr,function(f){var E="_."+f[0];l&f[1]&&!Va(o,E)&&o.push(E)}),o.sort()}function qf(o){if(o instanceof ot)return o.clone();var l=new Yn(o.__wrapped__,o.__chain__);return l.__actions__=En(o.__actions__),l.__index__=o.__index__,l.__values__=o.__values__,l}function nC(o,l,f){(f?dn(o,l,f):l===n)?l=1:l=Wt(Je(l),0);var E=o==null?0:o.length;if(!E||l<1)return[];for(var O=0,N=0,M=Q(os(E/l));O<E;)M[N++]=Vn(o,O,O+=l);return M}function rC(o){for(var l=-1,f=o==null?0:o.length,E=0,O=[];++l<f;){var N=o[l];N&&(O[E++]=N)}return O}function iC(){var o=arguments.length;if(!o)return[];for(var l=Q(o-1),f=arguments[0],E=o;E--;)l[E-1]=arguments[E];return Vr(qe(f)?En(f):[f],Xt(l,1))}var oC=tt(function(o,l){return Mt(o)?jo(o,Xt(l,1,Mt,!0)):[]}),aC=tt(function(o,l){var f=Kn(l);return Mt(f)&&(f=n),Mt(o)?jo(o,Xt(l,1,Mt,!0),He(f,2)):[]}),sC=tt(function(o,l){var f=Kn(l);return Mt(f)&&(f=n),Mt(o)?jo(o,Xt(l,1,Mt,!0),n,f):[]});function lC(o,l,f){var E=o==null?0:o.length;return E?(l=f||l===n?1:Je(l),Vn(o,l<0?0:l,E)):[]}function cC(o,l,f){var E=o==null?0:o.length;return E?(l=f||l===n?1:Je(l),l=E-l,Vn(o,0,l<0?0:l)):[]}function uC(o,l){return o&&o.length?hs(o,He(l,3),!0,!0):[]}function dC(o,l){return o&&o.length?hs(o,He(l,3),!0):[]}function _C(o,l,f,E){var O=o==null?0:o.length;return O?(f&&typeof f!="number"&&dn(o,l,f)&&(f=0,E=O),i0(o,l,f,E)):[]}function Zf(o,l,f){var E=o==null?0:o.length;if(!E)return-1;var O=f==null?0:Je(f);return O<0&&(O=Wt(E+O,0)),Ka(o,He(l,3),O)}function Qf(o,l,f){var E=o==null?0:o.length;if(!E)return-1;var O=E-1;return f!==n&&(O=Je(f),O=f<0?Wt(E+O,0):nn(O,E-1)),Ka(o,He(l,3),O,!0)}function Jf(o){var l=o==null?0:o.length;return l?Xt(o,1):[]}function fC(o){var l=o==null?0:o.length;return l?Xt(o,Ve):[]}function gC(o,l){var f=o==null?0:o.length;return f?(l=l===n?1:Je(l),Xt(o,l)):[]}function hC(o){for(var l=-1,f=o==null?0:o.length,E={};++l<f;){var O=o[l];E[O[0]]=O[1]}return E}function eg(o){return o&&o.length?o[0]:n}function vC(o,l,f){var E=o==null?0:o.length;if(!E)return-1;var O=f==null?0:Je(f);return O<0&&(O=Wt(E+O,0)),Yi(o,l,O)}function pC(o){var l=o==null?0:o.length;return l?Vn(o,0,-1):[]}var mC=tt(function(o){var l=xt(o,wc);return l.length&&l[0]===o[0]?fc(l):[]}),CC=tt(function(o){var l=Kn(o),f=xt(o,wc);return l===Kn(f)?l=n:f.pop(),f.length&&f[0]===o[0]?fc(f,He(l,2)):[]}),EC=tt(function(o){var l=Kn(o),f=xt(o,wc);return l=typeof l=="function"?l:n,l&&f.pop(),f.length&&f[0]===o[0]?fc(f,n,l):[]});function IC(o,l){return o==null?"":p1.call(o,l)}function Kn(o){var l=o==null?0:o.length;return l?o[l-1]:n}function bC(o,l,f){var E=o==null?0:o.length;if(!E)return-1;var O=E;return f!==n&&(O=Je(f),O=O<0?Wt(E+O,0):nn(O,E-1)),l===l?t1(o,l,O):Ka(o,D_,O,!0)}function wC(o,l){return o&&o.length?df(o,Je(l)):n}var OC=tt(tg);function tg(o,l){return o&&o.length&&l&&l.length?pc(o,l):o}function LC(o,l,f){return o&&o.length&&l&&l.length?pc(o,l,He(f,2)):o}function yC(o,l,f){return o&&o.length&&l&&l.length?pc(o,l,n,f):o}var AC=yr(function(o,l){var f=o==null?0:o.length,E=cc(o,l);return gf(o,xt(l,function(O){return Ar(O,f)?+O:O}).sort(Of)),E});function SC(o,l){var f=[];if(!(o&&o.length))return f;var E=-1,O=[],N=o.length;for(l=He(l,3);++E<N;){var M=o[E];l(M,E,o)&&(f.push(M),O.push(E))}return gf(o,O),f}function Uc(o){return o==null?o:I1.call(o)}function NC(o,l,f){var E=o==null?0:o.length;return E?(f&&typeof f!="number"&&dn(o,l,f)?(l=0,f=E):(l=l==null?0:Je(l),f=f===n?E:Je(f)),Vn(o,l,f)):[]}function xC(o,l){return gs(o,l)}function TC(o,l,f){return Ec(o,l,He(f,2))}function RC(o,l){var f=o==null?0:o.length;if(f){var E=gs(o,l);if(E<f&&ir(o[E],l))return E}return-1}function DC(o,l){return gs(o,l,!0)}function kC(o,l,f){return Ec(o,l,He(f,2),!0)}function GC(o,l){var f=o==null?0:o.length;if(f){var E=gs(o,l,!0)-1;if(ir(o[E],l))return E}return-1}function MC(o){return o&&o.length?vf(o):[]}function UC(o,l){return o&&o.length?vf(o,He(l,2)):[]}function FC(o){var l=o==null?0:o.length;return l?Vn(o,1,l):[]}function $C(o,l,f){return o&&o.length?(l=f||l===n?1:Je(l),Vn(o,0,l<0?0:l)):[]}function HC(o,l,f){var E=o==null?0:o.length;return E?(l=f||l===n?1:Je(l),l=E-l,Vn(o,l<0?0:l,E)):[]}function PC(o,l){return o&&o.length?hs(o,He(l,3),!1,!0):[]}function BC(o,l){return o&&o.length?hs(o,He(l,3)):[]}var WC=tt(function(o){return Zr(Xt(o,1,Mt,!0))}),zC=tt(function(o){var l=Kn(o);return Mt(l)&&(l=n),Zr(Xt(o,1,Mt,!0),He(l,2))}),YC=tt(function(o){var l=Kn(o);return l=typeof l=="function"?l:n,Zr(Xt(o,1,Mt,!0),n,l)});function jC(o){return o&&o.length?Zr(o):[]}function VC(o,l){return o&&o.length?Zr(o,He(l,2)):[]}function KC(o,l){return l=typeof l=="function"?l:n,o&&o.length?Zr(o,n,l):[]}function Fc(o){if(!(o&&o.length))return[];var l=0;return o=jr(o,function(f){if(Mt(f))return l=Wt(f.length,l),!0}),tc(l,function(f){return xt(o,Ql(f))})}function ng(o,l){if(!(o&&o.length))return[];var f=Fc(o);return l==null?f:xt(f,function(E){return Sn(l,n,E)})}var XC=tt(function(o,l){return Mt(o)?jo(o,l):[]}),qC=tt(function(o){return bc(jr(o,Mt))}),ZC=tt(function(o){var l=Kn(o);return Mt(l)&&(l=n),bc(jr(o,Mt),He(l,2))}),QC=tt(function(o){var l=Kn(o);return l=typeof l=="function"?l:n,bc(jr(o,Mt),n,l)}),JC=tt(Fc);function eE(o,l){return Ef(o||[],l||[],Yo)}function tE(o,l){return Ef(o||[],l||[],Xo)}var nE=tt(function(o){var l=o.length,f=l>1?o[l-1]:n;return f=typeof f=="function"?(o.pop(),f):n,ng(o,f)});function rg(o){var l=L(o);return l.__chain__=!0,l}function rE(o,l){return l(o),o}function Os(o,l){return l(o)}var iE=yr(function(o){var l=o.length,f=l?o[0]:0,E=this.__wrapped__,O=function(N){return cc(N,o)};return l>1||this.__actions__.length||!(E instanceof ot)||!Ar(f)?this.thru(O):(E=E.slice(f,+f+(l?1:0)),E.__actions__.push({func:Os,args:[O],thisArg:n}),new Yn(E,this.__chain__).thru(function(N){return l&&!N.length&&N.push(n),N}))});function oE(){return rg(this)}function aE(){return new Yn(this.value(),this.__chain__)}function sE(){this.__values__===n&&(this.__values__=pg(this.value()));var o=this.__index__>=this.__values__.length,l=o?n:this.__values__[this.__index__++];return{done:o,value:l}}function lE(){return this}function cE(o){for(var l,f=this;f instanceof cs;){var E=qf(f);E.__index__=0,E.__values__=n,l?O.__wrapped__=E:l=E;var O=E;f=f.__wrapped__}return O.__wrapped__=o,l}function uE(){var o=this.__wrapped__;if(o instanceof ot){var l=o;return this.__actions__.length&&(l=new ot(this)),l=l.reverse(),l.__actions__.push({func:Os,args:[Uc],thisArg:n}),new Yn(l,this.__chain__)}return this.thru(Uc)}function dE(){return Cf(this.__wrapped__,this.__actions__)}var _E=vs(function(o,l,f){mt.call(o,f)?++o[f]:Or(o,f,1)});function fE(o,l,f){var E=qe(o)?T_:r0;return f&&dn(o,l,f)&&(l=n),E(o,He(l,3))}function gE(o,l){var f=qe(o)?jr:tf;return f(o,He(l,3))}var hE=xf(Zf),vE=xf(Qf);function pE(o,l){return Xt(Ls(o,l),1)}function mE(o,l){return Xt(Ls(o,l),Ve)}function CE(o,l,f){return f=f===n?1:Je(f),Xt(Ls(o,l),f)}function ig(o,l){var f=qe(o)?Wn:qr;return f(o,He(l,3))}function og(o,l){var f=qe(o)?Fm:ef;return f(o,He(l,3))}var EE=vs(function(o,l,f){mt.call(o,f)?o[f].push(l):Or(o,f,[l])});function IE(o,l,f,E){o=In(o)?o:ro(o),f=f&&!E?Je(f):0;var O=o.length;return f<0&&(f=Wt(O+f,0)),xs(o)?f<=O&&o.indexOf(l,f)>-1:!!O&&Yi(o,l,f)>-1}var bE=tt(function(o,l,f){var E=-1,O=typeof l=="function",N=In(o)?Q(o.length):[];return qr(o,function(M){N[++E]=O?Sn(l,M,f):Vo(M,l,f)}),N}),wE=vs(function(o,l,f){Or(o,f,l)});function Ls(o,l){var f=qe(o)?xt:lf;return f(o,He(l,3))}function OE(o,l,f,E){return o==null?[]:(qe(l)||(l=l==null?[]:[l]),f=E?n:f,qe(f)||(f=f==null?[]:[f]),_f(o,l,f))}var LE=vs(function(o,l,f){o[f?0:1].push(l)},function(){return[[],[]]});function yE(o,l,f){var E=qe(o)?ql:G_,O=arguments.length<3;return E(o,He(l,4),f,O,qr)}function AE(o,l,f){var E=qe(o)?$m:G_,O=arguments.length<3;return E(o,He(l,4),f,O,ef)}function SE(o,l){var f=qe(o)?jr:tf;return f(o,Ss(He(l,3)))}function NE(o){var l=qe(o)?q_:I0;return l(o)}function xE(o,l,f){(f?dn(o,l,f):l===n)?l=1:l=Je(l);var E=qe(o)?Q1:b0;return E(o,l)}function TE(o){var l=qe(o)?J1:O0;return l(o)}function RE(o){if(o==null)return 0;if(In(o))return xs(o)?Vi(o):o.length;var l=rn(o);return l==be||l==tr?o.size:hc(o).length}function DE(o,l,f){var E=qe(o)?Zl:L0;return f&&dn(o,l,f)&&(l=n),E(o,He(l,3))}var kE=tt(function(o,l){if(o==null)return[];var f=l.length;return f>1&&dn(o,l[0],l[1])?l=[]:f>2&&dn(l[0],l[1],l[2])&&(l=[l[0]]),_f(o,Xt(l,1),[])}),ys=g1||function(){return Kt.Date.now()};function GE(o,l){if(typeof l!="function")throw new zn(s);return o=Je(o),function(){if(--o<1)return l.apply(this,arguments)}}function ag(o,l,f){return l=f?n:l,l=o&&l==null?o.length:l,Lr(o,W,n,n,n,n,l)}function sg(o,l){var f;if(typeof l!="function")throw new zn(s);return o=Je(o),function(){return--o>0&&(f=l.apply(this,arguments)),o<=1&&(l=n),f}}var $c=tt(function(o,l,f){var E=b;if(f.length){var O=Kr(f,to($c));E|=F}return Lr(o,E,l,f,O)}),lg=tt(function(o,l,f){var E=b|w;if(f.length){var O=Kr(f,to(lg));E|=F}return Lr(l,E,o,f,O)});function cg(o,l,f){l=f?n:l;var E=Lr(o,D,n,n,n,n,n,l);return E.placeholder=cg.placeholder,E}function ug(o,l,f){l=f?n:l;var E=Lr(o,G,n,n,n,n,n,l);return E.placeholder=ug.placeholder,E}function dg(o,l,f){var E,O,N,M,z,K,oe=0,le=!1,fe=!1,we=!0;if(typeof o!="function")throw new zn(s);l=Xn(l)||0,Rt(f)&&(le=!!f.leading,fe="maxWait"in f,N=fe?Wt(Xn(f.maxWait)||0,l):N,we="trailing"in f?!!f.trailing:we);function Ge(Ut){var or=E,xr=O;return E=O=n,oe=Ut,M=o.apply(xr,or),M}function Pe(Ut){return oe=Ut,z=Qo(rt,l),le?Ge(Ut):M}function et(Ut){var or=Ut-K,xr=Ut-oe,xg=l-or;return fe?nn(xg,N-xr):xg}function Be(Ut){var or=Ut-K,xr=Ut-oe;return K===n||or>=l||or<0||fe&&xr>=N}function rt(){var Ut=ys();if(Be(Ut))return ut(Ut);z=Qo(rt,et(Ut))}function ut(Ut){return z=n,we&&E?Ge(Ut):(E=O=n,M)}function Rn(){z!==n&&If(z),oe=0,E=K=O=z=n}function _n(){return z===n?M:ut(ys())}function Dn(){var Ut=ys(),or=Be(Ut);if(E=arguments,O=this,K=Ut,or){if(z===n)return Pe(K);if(fe)return If(z),z=Qo(rt,l),Ge(K)}return z===n&&(z=Qo(rt,l)),M}return Dn.cancel=Rn,Dn.flush=_n,Dn}var ME=tt(function(o,l){return J_(o,1,l)}),UE=tt(function(o,l,f){return J_(o,Xn(l)||0,f)});function FE(o){return Lr(o,ee)}function As(o,l){if(typeof o!="function"||l!=null&&typeof l!="function")throw new zn(s);var f=function(){var E=arguments,O=l?l.apply(this,E):E[0],N=f.cache;if(N.has(O))return N.get(O);var M=o.apply(this,E);return f.cache=N.set(O,M)||N,M};return f.cache=new(As.Cache||wr),f}As.Cache=wr;function Ss(o){if(typeof o!="function")throw new zn(s);return function(){var l=arguments;switch(l.length){case 0:return!o.call(this);case 1:return!o.call(this,l[0]);case 2:return!o.call(this,l[0],l[1]);case 3:return!o.call(this,l[0],l[1],l[2])}return!o.apply(this,l)}}function $E(o){return sg(2,o)}var HE=y0(function(o,l){l=l.length==1&&qe(l[0])?xt(l[0],Nn(He())):xt(Xt(l,1),Nn(He()));var f=l.length;return tt(function(E){for(var O=-1,N=nn(E.length,f);++O<N;)E[O]=l[O].call(this,E[O]);return Sn(o,this,E)})}),Hc=tt(function(o,l){var f=Kr(l,to(Hc));return Lr(o,F,n,l,f)}),_g=tt(function(o,l){var f=Kr(l,to(_g));return Lr(o,B,n,l,f)}),PE=yr(function(o,l){return Lr(o,X,n,n,n,l)});function BE(o,l){if(typeof o!="function")throw new zn(s);return l=l===n?l:Je(l),tt(o,l)}function WE(o,l){if(typeof o!="function")throw new zn(s);return l=l==null?0:Wt(Je(l),0),tt(function(f){var E=f[l],O=Jr(f,0,l);return E&&Vr(O,E),Sn(o,this,O)})}function zE(o,l,f){var E=!0,O=!0;if(typeof o!="function")throw new zn(s);return Rt(f)&&(E="leading"in f?!!f.leading:E,O="trailing"in f?!!f.trailing:O),dg(o,l,{leading:E,maxWait:l,trailing:O})}function YE(o){return ag(o,1)}function jE(o,l){return Hc(Oc(l),o)}function VE(){if(!arguments.length)return[];var o=arguments[0];return qe(o)?o:[o]}function KE(o){return jn(o,m)}function XE(o,l){return l=typeof l=="function"?l:n,jn(o,m,l)}function qE(o){return jn(o,g|m)}function ZE(o,l){return l=typeof l=="function"?l:n,jn(o,g|m,l)}function QE(o,l){return l==null||Q_(o,l,zt(l))}function ir(o,l){return o===l||o!==o&&l!==l}var JE=Es(_c),eI=Es(function(o,l){return o>=l}),yi=of(function(){return arguments}())?of:function(o){return Gt(o)&&mt.call(o,"callee")&&!z_.call(o,"callee")},qe=Q.isArray,tI=L_?Nn(L_):c0;function In(o){return o!=null&&Ns(o.length)&&!Sr(o)}function Mt(o){return Gt(o)&&In(o)}function nI(o){return o===!0||o===!1||Gt(o)&&un(o)==lr}var ei=v1||Zc,rI=y_?Nn(y_):u0;function iI(o){return Gt(o)&&o.nodeType===1&&!Jo(o)}function oI(o){if(o==null)return!0;if(In(o)&&(qe(o)||typeof o=="string"||typeof o.splice=="function"||ei(o)||no(o)||yi(o)))return!o.length;var l=rn(o);if(l==be||l==tr)return!o.size;if(Zo(o))return!hc(o).length;for(var f in o)if(mt.call(o,f))return!1;return!0}function aI(o,l){return Ko(o,l)}function sI(o,l,f){f=typeof f=="function"?f:n;var E=f?f(o,l):n;return E===n?Ko(o,l,n,f):!!E}function Pc(o){if(!Gt(o))return!1;var l=un(o);return l==Yr||l==Bi||typeof o.message=="string"&&typeof o.name=="string"&&!Jo(o)}function lI(o){return typeof o=="number"&&j_(o)}function Sr(o){if(!Rt(o))return!1;var l=un(o);return l==kt||l==De||l==vi||l==xl}function fg(o){return typeof o=="number"&&o==Je(o)}function Ns(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=Ae}function Rt(o){var l=typeof o;return o!=null&&(l=="object"||l=="function")}function Gt(o){return o!=null&&typeof o=="object"}var gg=A_?Nn(A_):_0;function cI(o,l){return o===l||gc(o,l,Tc(l))}function uI(o,l,f){return f=typeof f=="function"?f:n,gc(o,l,Tc(l),f)}function dI(o){return hg(o)&&o!=+o}function _I(o){if(X0(o))throw new Xe(a);return af(o)}function fI(o){return o===null}function gI(o){return o==null}function hg(o){return typeof o=="number"||Gt(o)&&un(o)==ke}function Jo(o){if(!Gt(o)||un(o)!=At)return!1;var l=ns(o);if(l===null)return!0;var f=mt.call(l,"constructor")&&l.constructor;return typeof f=="function"&&f instanceof f&&Qa.call(f)==u1}var Bc=S_?Nn(S_):f0;function hI(o){return fg(o)&&o>=-9007199254740991&&o<=Ae}var vg=N_?Nn(N_):g0;function xs(o){return typeof o=="string"||!qe(o)&&Gt(o)&&un(o)==Mo}function Tn(o){return typeof o=="symbol"||Gt(o)&&un(o)==Wa}var no=x_?Nn(x_):h0;function vI(o){return o===n}function pI(o){return Gt(o)&&rn(o)==Uo}function mI(o){return Gt(o)&&un(o)==kp}var CI=Es(vc),EI=Es(function(o,l){return o<=l});function pg(o){if(!o)return[];if(In(o))return xs(o)?nr(o):En(o);if(Ho&&o[Ho])return Qm(o[Ho]());var l=rn(o),f=l==be?rc:l==tr?Xa:ro;return f(o)}function Nr(o){if(!o)return o===0?o:0;if(o=Xn(o),o===Ve||o===-1/0){var l=o<0?-1:1;return l*Le}return o===o?o:0}function Je(o){var l=Nr(o),f=l%1;return l===l?f?l-f:l:0}function mg(o){return o?bi(Je(o),0,Ke):0}function Xn(o){if(typeof o=="number")return o;if(Tn(o))return ct;if(Rt(o)){var l=typeof o.valueOf=="function"?o.valueOf():o;o=Rt(l)?l+"":l}if(typeof o!="string")return o===0?o:+o;o=M_(o);var f=tm.test(o);return f||rm.test(o)?Gm(o.slice(2),f?2:8):em.test(o)?ct:+o}function Cg(o){return ur(o,bn(o))}function II(o){return o?bi(Je(o),-9007199254740991,Ae):o===0?o:0}function pt(o){return o==null?"":xn(o)}var bI=Ji(function(o,l){if(Zo(l)||In(l)){ur(l,zt(l),o);return}for(var f in l)mt.call(l,f)&&Yo(o,f,l[f])}),Eg=Ji(function(o,l){ur(l,bn(l),o)}),Ts=Ji(function(o,l,f,E){ur(l,bn(l),o,E)}),wI=Ji(function(o,l,f,E){ur(l,zt(l),o,E)}),OI=yr(cc);function LI(o,l){var f=Qi(o);return l==null?f:Z_(f,l)}var yI=tt(function(o,l){o=bt(o);var f=-1,E=l.length,O=E>2?l[2]:n;for(O&&dn(l[0],l[1],O)&&(E=1);++f<E;)for(var N=l[f],M=bn(N),z=-1,K=M.length;++z<K;){var oe=M[z],le=o[oe];(le===n||ir(le,Xi[oe])&&!mt.call(o,oe))&&(o[oe]=N[oe])}return o}),AI=tt(function(o){return o.push(n,Uf),Sn(Ig,n,o)});function SI(o,l){return R_(o,He(l,3),cr)}function NI(o,l){return R_(o,He(l,3),dc)}function xI(o,l){return o==null?o:uc(o,He(l,3),bn)}function TI(o,l){return o==null?o:nf(o,He(l,3),bn)}function RI(o,l){return o&&cr(o,He(l,3))}function DI(o,l){return o&&dc(o,He(l,3))}function kI(o){return o==null?[]:_s(o,zt(o))}function GI(o){return o==null?[]:_s(o,bn(o))}function Wc(o,l,f){var E=o==null?n:wi(o,l);return E===n?f:E}function MI(o,l){return o!=null&&Hf(o,l,o0)}function zc(o,l){return o!=null&&Hf(o,l,a0)}var UI=Rf(function(o,l,f){l!=null&&typeof l.toString!="function"&&(l=Ja.call(l)),o[l]=f},jc(wn)),FI=Rf(function(o,l,f){l!=null&&typeof l.toString!="function"&&(l=Ja.call(l)),mt.call(o,l)?o[l].push(f):o[l]=[f]},He),$I=tt(Vo);function zt(o){return In(o)?X_(o):hc(o)}function bn(o){return In(o)?X_(o,!0):v0(o)}function HI(o,l){var f={};return l=He(l,3),cr(o,function(E,O,N){Or(f,l(E,O,N),E)}),f}function PI(o,l){var f={};return l=He(l,3),cr(o,function(E,O,N){Or(f,O,l(E,O,N))}),f}var BI=Ji(function(o,l,f){fs(o,l,f)}),Ig=Ji(function(o,l,f,E){fs(o,l,f,E)}),WI=yr(function(o,l){var f={};if(o==null)return f;var E=!1;l=xt(l,function(N){return N=Qr(N,o),E||(E=N.length>1),N}),ur(o,Nc(o),f),E&&(f=jn(f,g|h|m,U0));for(var O=l.length;O--;)Ic(f,l[O]);return f});function zI(o,l){return bg(o,Ss(He(l)))}var YI=yr(function(o,l){return o==null?{}:m0(o,l)});function bg(o,l){if(o==null)return{};var f=xt(Nc(o),function(E){return[E]});return l=He(l),ff(o,f,function(E,O){return l(E,O[0])})}function jI(o,l,f){l=Qr(l,o);var E=-1,O=l.length;for(O||(O=1,o=n);++E<O;){var N=o==null?n:o[dr(l[E])];N===n&&(E=O,N=f),o=Sr(N)?N.call(o):N}return o}function VI(o,l,f){return o==null?o:Xo(o,l,f)}function KI(o,l,f,E){return E=typeof E=="function"?E:n,o==null?o:Xo(o,l,f,E)}var wg=Gf(zt),Og=Gf(bn);function XI(o,l,f){var E=qe(o),O=E||ei(o)||no(o);if(l=He(l,4),f==null){var N=o&&o.constructor;O?f=E?new N:[]:Rt(o)?f=Sr(N)?Qi(ns(o)):{}:f={}}return(O?Wn:cr)(o,function(M,z,K){return l(f,M,z,K)}),f}function qI(o,l){return o==null?!0:Ic(o,l)}function ZI(o,l,f){return o==null?o:mf(o,l,Oc(f))}function QI(o,l,f,E){return E=typeof E=="function"?E:n,o==null?o:mf(o,l,Oc(f),E)}function ro(o){return o==null?[]:nc(o,zt(o))}function JI(o){return o==null?[]:nc(o,bn(o))}function eb(o,l,f){return f===n&&(f=l,l=n),f!==n&&(f=Xn(f),f=f===f?f:0),l!==n&&(l=Xn(l),l=l===l?l:0),bi(Xn(o),l,f)}function tb(o,l,f){return l=Nr(l),f===n?(f=l,l=0):f=Nr(f),o=Xn(o),s0(o,l,f)}function nb(o,l,f){if(f&&typeof f!="boolean"&&dn(o,l,f)&&(l=f=n),f===n&&(typeof l=="boolean"?(f=l,l=n):typeof o=="boolean"&&(f=o,o=n)),o===n&&l===n?(o=0,l=1):(o=Nr(o),l===n?(l=o,o=0):l=Nr(l)),o>l){var E=o;o=l,l=E}if(f||o%1||l%1){var O=V_();return nn(o+O*(l-o+km("1e-"+((O+"").length-1))),l)}return mc(o,l)}var rb=eo(function(o,l,f){return l=l.toLowerCase(),o+(f?Lg(l):l)});function Lg(o){return Yc(pt(o).toLowerCase())}function yg(o){return o=pt(o),o&&o.replace(om,Vm).replace(Om,"")}function ib(o,l,f){o=pt(o),l=xn(l);var E=o.length;f=f===n?E:bi(Je(f),0,E);var O=f;return f-=l.length,f>=0&&o.slice(f,O)==l}function ob(o){return o=pt(o),o&&$p.test(o)?o.replace(n_,Km):o}function ab(o){return o=pt(o),o&&Yp.test(o)?o.replace(Hl,"\\$&"):o}var sb=eo(function(o,l,f){return o+(f?"-":"")+l.toLowerCase()}),lb=eo(function(o,l,f){return o+(f?" ":"")+l.toLowerCase()}),cb=Nf("toLowerCase");function ub(o,l,f){o=pt(o),l=Je(l);var E=l?Vi(o):0;if(!l||E>=l)return o;var O=(l-E)/2;return Cs(as(O),f)+o+Cs(os(O),f)}function db(o,l,f){o=pt(o),l=Je(l);var E=l?Vi(o):0;return l&&E<l?o+Cs(l-E,f):o}function _b(o,l,f){o=pt(o),l=Je(l);var E=l?Vi(o):0;return l&&E<l?Cs(l-E,f)+o:o}function fb(o,l,f){return f||l==null?l=0:l&&(l=+l),E1(pt(o).replace(Pl,""),l||0)}function gb(o,l,f){return(f?dn(o,l,f):l===n)?l=1:l=Je(l),Cc(pt(o),l)}function hb(){var o=arguments,l=pt(o[0]);return o.length<3?l:l.replace(o[1],o[2])}var vb=eo(function(o,l,f){return o+(f?"_":"")+l.toLowerCase()});function pb(o,l,f){return f&&typeof f!="number"&&dn(o,l,f)&&(l=f=n),f=f===n?Ke:f>>>0,f?(o=pt(o),o&&(typeof l=="string"||l!=null&&!Bc(l))&&(l=xn(l),!l&&ji(o))?Jr(nr(o),0,f):o.split(l,f)):[]}var mb=eo(function(o,l,f){return o+(f?" ":"")+Yc(l)});function Cb(o,l,f){return o=pt(o),f=f==null?0:bi(Je(f),0,o.length),l=xn(l),o.slice(f,f+l.length)==l}function Eb(o,l,f){var E=L.templateSettings;f&&dn(o,l,f)&&(l=n),o=pt(o),l=Ts({},l,E,Mf);var O=Ts({},l.imports,E.imports,Mf),N=zt(O),M=nc(O,N),z,K,oe=0,le=l.interpolate||za,fe="__p += '",we=ic((l.escape||za).source+"|"+le.source+"|"+(le===r_?Jp:za).source+"|"+(l.evaluate||za).source+"|$","g"),Ge="//# sourceURL="+(mt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Nm+"]")+`
`;o.replace(we,function(Be,rt,ut,Rn,_n,Dn){return ut||(ut=Rn),fe+=o.slice(oe,Dn).replace(am,Xm),rt&&(z=!0,fe+=`' +
__e(`+rt+`) +
'`),_n&&(K=!0,fe+=`';
`+_n+`;
__p += '`),ut&&(fe+=`' +
((__t = (`+ut+`)) == null ? '' : __t) +
'`),oe=Dn+Be.length,Be}),fe+=`';
`;var Pe=mt.call(l,"variable")&&l.variable;if(!Pe)fe=`with (obj) {
`+fe+`
}
`;else if(Zp.test(Pe))throw new Xe(c);fe=(K?fe.replace(Gp,""):fe).replace(Mp,"$1").replace(Up,"$1;"),fe="function("+(Pe||"obj")+`) {
`+(Pe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(K?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var et=Sg(function(){return gt(N,Ge+"return "+fe).apply(n,M)});if(et.source=fe,Pc(et))throw et;return et}function Ib(o){return pt(o).toLowerCase()}function bb(o){return pt(o).toUpperCase()}function wb(o,l,f){if(o=pt(o),o&&(f||l===n))return M_(o);if(!o||!(l=xn(l)))return o;var E=nr(o),O=nr(l),N=U_(E,O),M=F_(E,O)+1;return Jr(E,N,M).join("")}function Ob(o,l,f){if(o=pt(o),o&&(f||l===n))return o.slice(0,H_(o)+1);if(!o||!(l=xn(l)))return o;var E=nr(o),O=F_(E,nr(l))+1;return Jr(E,0,O).join("")}function Lb(o,l,f){if(o=pt(o),o&&(f||l===n))return o.replace(Pl,"");if(!o||!(l=xn(l)))return o;var E=nr(o),O=U_(E,nr(l));return Jr(E,O).join("")}function yb(o,l){var f=ce,E=J;if(Rt(l)){var O="separator"in l?l.separator:O;f="length"in l?Je(l.length):f,E="omission"in l?xn(l.omission):E}o=pt(o);var N=o.length;if(ji(o)){var M=nr(o);N=M.length}if(f>=N)return o;var z=f-Vi(E);if(z<1)return E;var K=M?Jr(M,0,z).join(""):o.slice(0,z);if(O===n)return K+E;if(M&&(z+=K.length-z),Bc(O)){if(o.slice(z).search(O)){var oe,le=K;for(O.global||(O=ic(O.source,pt(i_.exec(O))+"g")),O.lastIndex=0;oe=O.exec(le);)var fe=oe.index;K=K.slice(0,fe===n?z:fe)}}else if(o.indexOf(xn(O),z)!=z){var we=K.lastIndexOf(O);we>-1&&(K=K.slice(0,we))}return K+E}function Ab(o){return o=pt(o),o&&Fp.test(o)?o.replace(t_,n1):o}var Sb=eo(function(o,l,f){return o+(f?" ":"")+l.toUpperCase()}),Yc=Nf("toUpperCase");function Ag(o,l,f){return o=pt(o),l=f?n:l,l===n?Zm(o)?o1(o):Bm(o):o.match(l)||[]}var Sg=tt(function(o,l){try{return Sn(o,n,l)}catch(f){return Pc(f)?f:new Xe(f)}}),Nb=yr(function(o,l){return Wn(l,function(f){f=dr(f),Or(o,f,$c(o[f],o))}),o});function xb(o){var l=o==null?0:o.length,f=He();return o=l?xt(o,function(E){if(typeof E[1]!="function")throw new zn(s);return[f(E[0]),E[1]]}):[],tt(function(E){for(var O=-1;++O<l;){var N=o[O];if(Sn(N[0],this,E))return Sn(N[1],this,E)}})}function Tb(o){return n0(jn(o,g))}function jc(o){return function(){return o}}function Rb(o,l){return o==null||o!==o?l:o}var Db=Tf(),kb=Tf(!0);function wn(o){return o}function Vc(o){return sf(typeof o=="function"?o:jn(o,g))}function Gb(o){return cf(jn(o,g))}function Mb(o,l){return uf(o,jn(l,g))}var Ub=tt(function(o,l){return function(f){return Vo(f,o,l)}}),Fb=tt(function(o,l){return function(f){return Vo(o,f,l)}});function Kc(o,l,f){var E=zt(l),O=_s(l,E);f==null&&!(Rt(l)&&(O.length||!E.length))&&(f=l,l=o,o=this,O=_s(l,zt(l)));var N=!(Rt(f)&&"chain"in f)||!!f.chain,M=Sr(o);return Wn(O,function(z){var K=l[z];o[z]=K,M&&(o.prototype[z]=function(){var oe=this.__chain__;if(N||oe){var le=o(this.__wrapped__),fe=le.__actions__=En(this.__actions__);return fe.push({func:K,args:arguments,thisArg:o}),le.__chain__=oe,le}return K.apply(o,Vr([this.value()],arguments))})}),o}function $b(){return Kt._===this&&(Kt._=d1),this}function Xc(){}function Hb(o){return o=Je(o),tt(function(l){return df(l,o)})}var Pb=yc(xt),Bb=yc(T_),Wb=yc(Zl);function Ng(o){return Dc(o)?Ql(dr(o)):C0(o)}function zb(o){return function(l){return o==null?n:wi(o,l)}}var Yb=Df(),jb=Df(!0);function qc(){return[]}function Zc(){return!1}function Vb(){return{}}function Kb(){return""}function Xb(){return!0}function qb(o,l){if(o=Je(o),o<1||o>Ae)return[];var f=Ke,E=nn(o,Ke);l=He(l),o-=Ke;for(var O=tc(E,l);++f<o;)l(f);return O}function Zb(o){return qe(o)?xt(o,dr):Tn(o)?[o]:En(Xf(pt(o)))}function Qb(o){var l=++c1;return pt(o)+l}var Jb=ms(function(o,l){return o+l},0),ew=Ac("ceil"),tw=ms(function(o,l){return o/l},1),nw=Ac("floor");function rw(o){return o&&o.length?ds(o,wn,_c):n}function iw(o,l){return o&&o.length?ds(o,He(l,2),_c):n}function ow(o){return k_(o,wn)}function aw(o,l){return k_(o,He(l,2))}function sw(o){return o&&o.length?ds(o,wn,vc):n}function lw(o,l){return o&&o.length?ds(o,He(l,2),vc):n}var cw=ms(function(o,l){return o*l},1),uw=Ac("round"),dw=ms(function(o,l){return o-l},0);function _w(o){return o&&o.length?ec(o,wn):0}function fw(o,l){return o&&o.length?ec(o,He(l,2)):0}return L.after=GE,L.ary=ag,L.assign=bI,L.assignIn=Eg,L.assignInWith=Ts,L.assignWith=wI,L.at=OI,L.before=sg,L.bind=$c,L.bindAll=Nb,L.bindKey=lg,L.castArray=VE,L.chain=rg,L.chunk=nC,L.compact=rC,L.concat=iC,L.cond=xb,L.conforms=Tb,L.constant=jc,L.countBy=_E,L.create=LI,L.curry=cg,L.curryRight=ug,L.debounce=dg,L.defaults=yI,L.defaultsDeep=AI,L.defer=ME,L.delay=UE,L.difference=oC,L.differenceBy=aC,L.differenceWith=sC,L.drop=lC,L.dropRight=cC,L.dropRightWhile=uC,L.dropWhile=dC,L.fill=_C,L.filter=gE,L.flatMap=pE,L.flatMapDeep=mE,L.flatMapDepth=CE,L.flatten=Jf,L.flattenDeep=fC,L.flattenDepth=gC,L.flip=FE,L.flow=Db,L.flowRight=kb,L.fromPairs=hC,L.functions=kI,L.functionsIn=GI,L.groupBy=EE,L.initial=pC,L.intersection=mC,L.intersectionBy=CC,L.intersectionWith=EC,L.invert=UI,L.invertBy=FI,L.invokeMap=bE,L.iteratee=Vc,L.keyBy=wE,L.keys=zt,L.keysIn=bn,L.map=Ls,L.mapKeys=HI,L.mapValues=PI,L.matches=Gb,L.matchesProperty=Mb,L.memoize=As,L.merge=BI,L.mergeWith=Ig,L.method=Ub,L.methodOf=Fb,L.mixin=Kc,L.negate=Ss,L.nthArg=Hb,L.omit=WI,L.omitBy=zI,L.once=$E,L.orderBy=OE,L.over=Pb,L.overArgs=HE,L.overEvery=Bb,L.overSome=Wb,L.partial=Hc,L.partialRight=_g,L.partition=LE,L.pick=YI,L.pickBy=bg,L.property=Ng,L.propertyOf=zb,L.pull=OC,L.pullAll=tg,L.pullAllBy=LC,L.pullAllWith=yC,L.pullAt=AC,L.range=Yb,L.rangeRight=jb,L.rearg=PE,L.reject=SE,L.remove=SC,L.rest=BE,L.reverse=Uc,L.sampleSize=xE,L.set=VI,L.setWith=KI,L.shuffle=TE,L.slice=NC,L.sortBy=kE,L.sortedUniq=MC,L.sortedUniqBy=UC,L.split=pb,L.spread=WE,L.tail=FC,L.take=$C,L.takeRight=HC,L.takeRightWhile=PC,L.takeWhile=BC,L.tap=rE,L.throttle=zE,L.thru=Os,L.toArray=pg,L.toPairs=wg,L.toPairsIn=Og,L.toPath=Zb,L.toPlainObject=Cg,L.transform=XI,L.unary=YE,L.union=WC,L.unionBy=zC,L.unionWith=YC,L.uniq=jC,L.uniqBy=VC,L.uniqWith=KC,L.unset=qI,L.unzip=Fc,L.unzipWith=ng,L.update=ZI,L.updateWith=QI,L.values=ro,L.valuesIn=JI,L.without=XC,L.words=Ag,L.wrap=jE,L.xor=qC,L.xorBy=ZC,L.xorWith=QC,L.zip=JC,L.zipObject=eE,L.zipObjectDeep=tE,L.zipWith=nE,L.entries=wg,L.entriesIn=Og,L.extend=Eg,L.extendWith=Ts,Kc(L,L),L.add=Jb,L.attempt=Sg,L.camelCase=rb,L.capitalize=Lg,L.ceil=ew,L.clamp=eb,L.clone=KE,L.cloneDeep=qE,L.cloneDeepWith=ZE,L.cloneWith=XE,L.conformsTo=QE,L.deburr=yg,L.defaultTo=Rb,L.divide=tw,L.endsWith=ib,L.eq=ir,L.escape=ob,L.escapeRegExp=ab,L.every=fE,L.find=hE,L.findIndex=Zf,L.findKey=SI,L.findLast=vE,L.findLastIndex=Qf,L.findLastKey=NI,L.floor=nw,L.forEach=ig,L.forEachRight=og,L.forIn=xI,L.forInRight=TI,L.forOwn=RI,L.forOwnRight=DI,L.get=Wc,L.gt=JE,L.gte=eI,L.has=MI,L.hasIn=zc,L.head=eg,L.identity=wn,L.includes=IE,L.indexOf=vC,L.inRange=tb,L.invoke=$I,L.isArguments=yi,L.isArray=qe,L.isArrayBuffer=tI,L.isArrayLike=In,L.isArrayLikeObject=Mt,L.isBoolean=nI,L.isBuffer=ei,L.isDate=rI,L.isElement=iI,L.isEmpty=oI,L.isEqual=aI,L.isEqualWith=sI,L.isError=Pc,L.isFinite=lI,L.isFunction=Sr,L.isInteger=fg,L.isLength=Ns,L.isMap=gg,L.isMatch=cI,L.isMatchWith=uI,L.isNaN=dI,L.isNative=_I,L.isNil=gI,L.isNull=fI,L.isNumber=hg,L.isObject=Rt,L.isObjectLike=Gt,L.isPlainObject=Jo,L.isRegExp=Bc,L.isSafeInteger=hI,L.isSet=vg,L.isString=xs,L.isSymbol=Tn,L.isTypedArray=no,L.isUndefined=vI,L.isWeakMap=pI,L.isWeakSet=mI,L.join=IC,L.kebabCase=sb,L.last=Kn,L.lastIndexOf=bC,L.lowerCase=lb,L.lowerFirst=cb,L.lt=CI,L.lte=EI,L.max=rw,L.maxBy=iw,L.mean=ow,L.meanBy=aw,L.min=sw,L.minBy=lw,L.stubArray=qc,L.stubFalse=Zc,L.stubObject=Vb,L.stubString=Kb,L.stubTrue=Xb,L.multiply=cw,L.nth=wC,L.noConflict=$b,L.noop=Xc,L.now=ys,L.pad=ub,L.padEnd=db,L.padStart=_b,L.parseInt=fb,L.random=nb,L.reduce=yE,L.reduceRight=AE,L.repeat=gb,L.replace=hb,L.result=jI,L.round=uw,L.runInContext=j,L.sample=NE,L.size=RE,L.snakeCase=vb,L.some=DE,L.sortedIndex=xC,L.sortedIndexBy=TC,L.sortedIndexOf=RC,L.sortedLastIndex=DC,L.sortedLastIndexBy=kC,L.sortedLastIndexOf=GC,L.startCase=mb,L.startsWith=Cb,L.subtract=dw,L.sum=_w,L.sumBy=fw,L.template=Eb,L.times=qb,L.toFinite=Nr,L.toInteger=Je,L.toLength=mg,L.toLower=Ib,L.toNumber=Xn,L.toSafeInteger=II,L.toString=pt,L.toUpper=bb,L.trim=wb,L.trimEnd=Ob,L.trimStart=Lb,L.truncate=yb,L.unescape=Ab,L.uniqueId=Qb,L.upperCase=Sb,L.upperFirst=Yc,L.each=ig,L.eachRight=og,L.first=eg,Kc(L,function(){var o={};return cr(L,function(l,f){mt.call(L.prototype,f)||(o[f]=l)}),o}(),{chain:!1}),L.VERSION=r,Wn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){L[o].placeholder=L}),Wn(["drop","take"],function(o,l){ot.prototype[o]=function(f){f=f===n?1:Wt(Je(f),0);var E=this.__filtered__&&!l?new ot(this):this.clone();return E.__filtered__?E.__takeCount__=nn(f,E.__takeCount__):E.__views__.push({size:nn(f,Ke),type:o+(E.__dir__<0?"Right":"")}),E},ot.prototype[o+"Right"]=function(f){return this.reverse()[o](f).reverse()}}),Wn(["filter","map","takeWhile"],function(o,l){var f=l+1,E=f==Ce||f==Se;ot.prototype[o]=function(O){var N=this.clone();return N.__iteratees__.push({iteratee:He(O,3),type:f}),N.__filtered__=N.__filtered__||E,N}}),Wn(["head","last"],function(o,l){var f="take"+(l?"Right":"");ot.prototype[o]=function(){return this[f](1).value()[0]}}),Wn(["initial","tail"],function(o,l){var f="drop"+(l?"":"Right");ot.prototype[o]=function(){return this.__filtered__?new ot(this):this[f](1)}}),ot.prototype.compact=function(){return this.filter(wn)},ot.prototype.find=function(o){return this.filter(o).head()},ot.prototype.findLast=function(o){return this.reverse().find(o)},ot.prototype.invokeMap=tt(function(o,l){return typeof o=="function"?new ot(this):this.map(function(f){return Vo(f,o,l)})}),ot.prototype.reject=function(o){return this.filter(Ss(He(o)))},ot.prototype.slice=function(o,l){o=Je(o);var f=this;return f.__filtered__&&(o>0||l<0)?new ot(f):(o<0?f=f.takeRight(-o):o&&(f=f.drop(o)),l!==n&&(l=Je(l),f=l<0?f.dropRight(-l):f.take(l-o)),f)},ot.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},ot.prototype.toArray=function(){return this.take(Ke)},cr(ot.prototype,function(o,l){var f=/^(?:filter|find|map|reject)|While$/.test(l),E=/^(?:head|last)$/.test(l),O=L[E?"take"+(l=="last"?"Right":""):l],N=E||/^find/.test(l);O&&(L.prototype[l]=function(){var M=this.__wrapped__,z=E?[1]:arguments,K=M instanceof ot,oe=z[0],le=K||qe(M),fe=function(rt){var ut=O.apply(L,Vr([rt],z));return E&&we?ut[0]:ut};le&&f&&typeof oe=="function"&&oe.length!=1&&(K=le=!1);var we=this.__chain__,Ge=!!this.__actions__.length,Pe=N&&!we,et=K&&!Ge;if(!N&&le){M=et?M:new ot(this);var Be=o.apply(M,z);return Be.__actions__.push({func:Os,args:[fe],thisArg:n}),new Yn(Be,we)}return Pe&&et?o.apply(this,z):(Be=this.thru(fe),Pe?E?Be.value()[0]:Be.value():Be)})}),Wn(["pop","push","shift","sort","splice","unshift"],function(o){var l=qa[o],f=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",E=/^(?:pop|shift)$/.test(o);L.prototype[o]=function(){var O=arguments;if(E&&!this.__chain__){var N=this.value();return l.apply(qe(N)?N:[],O)}return this[f](function(M){return l.apply(qe(M)?M:[],O)})}}),cr(ot.prototype,function(o,l){var f=L[l];if(f){var E=f.name+"";mt.call(Zi,E)||(Zi[E]=[]),Zi[E].push({name:l,func:f})}}),Zi[ps(n,w).name]=[{name:"wrapper",func:n}],ot.prototype.clone=A1,ot.prototype.reverse=S1,ot.prototype.value=N1,L.prototype.at=iE,L.prototype.chain=oE,L.prototype.commit=aE,L.prototype.next=sE,L.prototype.plant=cE,L.prototype.reverse=uE,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=dE,L.prototype.first=L.prototype.head,Ho&&(L.prototype[Ho]=lE),L},Ki=a1();mi?((mi.exports=Ki)._=Ki,Vl._=Ki):Kt._=Ki}).call(RO)}(aa,aa.exports)),aa.exports}var Nt=DO(),H=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(H||{});function On(t,e,n){n!==void 0&&(t[e]=n)}function kO(t){var e,n,r,i,a,s,c,u,_,v,g,h,m,C;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(a=t.inset)!=null&&a.editable||(s=t.angle)!=null&&s.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(v=t.strokeDasharray)!=null&&v.editable||(g=t.strokeDashoffset)!=null&&g.editable||(h=t.fontSize)!=null&&h.editable||(m=t.fontColor)!=null&&m.editable||(C=t.opacity)!=null&&C.editable)}function mu(t){var n,r,i,a,s,c,u,_,v,g,h,m,C,I,b,w,y,D,G,F,B,W;const e={type:t.type};return On(e,"n",(n=t.n)==null?void 0:n.value),On(e,"r",(r=t.r)==null?void 0:r.value),On(e,"height",(i=t.height)==null?void 0:i.value),On(e,"width",(a=t.width)==null?void 0:a.value),On(e,"inset",(s=t.inset)==null?void 0:s.value),On(e,"angle",(c=t.angle)==null?void 0:c.value),On(e,"fill",(u=t.fill)==null?void 0:u.value),On(e,"stroke",(_=t.stroke)==null?void 0:_.value),On(e,"strokeWidth",(v=t.strokeWidth)==null?void 0:v.value),On(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),On(e,"strokeDashoffset",(h=t.strokeDashoffset)==null?void 0:h.value),On(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),On(e,"fontColor",(C=t.fontColor)==null?void 0:C.value),On(e,"opacity",(I=t.opacity)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(w=(b=t.linePathOptions)==null?void 0:b.shortenHead)==null?void 0:w.value,shortenTail:(D=(y=t.linePathOptions)==null?void 0:y.shortenTail)==null?void 0:D.value,bezierRounding:(F=(G=t.linePathOptions)==null?void 0:G.bezierRounding)==null?void 0:F.value,closeLoops:(W=(B=t.linePathOptions)==null?void 0:B.closeLoops)==null?void 0:W.value}),e}function GO(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const MO={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},UO={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},FO={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},sv={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},lv={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},wa={type:"Line",strokeWidth:.125,stroke:"gray"},pd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},md={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},$O={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},HO={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};function Rr(t){return Array.isArray?Array.isArray(t):dv(t)==="[object Array]"}function PO(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function BO(t){return t==null?"":PO(t)}function hr(t){return typeof t=="string"}function cv(t){return typeof t=="number"}function WO(t){return t===!0||t===!1||zO(t)&&dv(t)=="[object Boolean]"}function uv(t){return typeof t=="object"}function zO(t){return uv(t)&&t!==null}function Mn(t){return t!=null}function iu(t){return!t.trim().length}function dv(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const YO="Incorrect 'index' type",jO=t=>`Invalid value for key ${t}`,VO=t=>`Pattern length exceeds max of ${t}.`,KO=t=>`Missing ${t} property in key`,XO=t=>`Property 'weight' in key '${t}' must be a positive integer`,Hg=Object.prototype.hasOwnProperty;class qO{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=_v(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function _v(t){let e=null,n=null,r=null,i=1,a=null;if(hr(t)||Rr(t))r=t,e=Pg(t),n=Cu(t);else{if(!Hg.call(t,"name"))throw new Error(KO("name"));const s=t.name;if(r=s,Hg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(XO(s));e=Pg(s),n=Cu(s),a=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:a}}function Pg(t){return Rr(t)?t:t.split(".")}function Cu(t){return Rr(t)?t.join("."):t}function ZO(t,e){let n=[],r=!1;const i=(a,s,c)=>{if(Mn(a))if(!s[c])n.push(a);else{let u=s[c];const _=a[u];if(!Mn(_))return;if(c===s.length-1&&(hr(_)||cv(_)||WO(_)))n.push(BO(_));else if(Rr(_)){r=!0;for(let v=0,g=_.length;v<g;v+=1)i(_[v],s,c+1)}else s.length&&i(_,s,c+1)}};return i(t,hr(e)?e.split("."):e,0),r?n:n[0]}const QO={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},JO={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},eL={location:0,threshold:.6,distance:100},tL={useExtendedSearch:!1,getFn:ZO,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var je={...JO,...QO,...eL,...tL};const nL=/[^ ]+/g;function rL(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const a=i.match(nL).length;if(n.has(a))return n.get(a);const s=1/Math.pow(a,.5*t),c=parseFloat(Math.round(s*r)/r);return n.set(a,c),c},clear(){n.clear()}}}class Cd{constructor({getFn:e=je.getFn,fieldNormWeight:n=je.fieldNormWeight}={}){this.norm=rL(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,hr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();hr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Mn(e)||iu(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,a)=>{let s=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Mn(s)){if(Rr(s)){let c=[];const u=[{nestedArrIndex:-1,value:s}];for(;u.length;){const{nestedArrIndex:_,value:v}=u.pop();if(Mn(v))if(hr(v)&&!iu(v)){let g={v,i:_,n:this.norm.get(v)};c.push(g)}else Rr(v)&&v.forEach((g,h)=>{u.push({nestedArrIndex:h,value:g})})}r.$[a]=c}else if(hr(s)&&!iu(s)){let c={v:s,n:this.norm.get(s)};r.$[a]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function fv(t,e,{getFn:n=je.getFn,fieldNormWeight:r=je.fieldNormWeight}={}){const i=new Cd({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(_v)),i.setSources(e),i.create(),i}function iL(t,{getFn:e=je.getFn,fieldNormWeight:n=je.fieldNormWeight}={}){const{keys:r,records:i}=t,a=new Cd({getFn:e,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(i),a}function ks(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=je.distance,ignoreLocation:a=je.ignoreLocation}={}){const s=e/t.length;if(a)return s;const c=Math.abs(r-n);return i?s+c/i:c?1:s}function oL(t=[],e=je.minMatchCharLength){let n=[],r=-1,i=-1,a=0;for(let s=t.length;a<s;a+=1){let c=t[a];c&&r===-1?r=a:!c&&r!==-1&&(i=a-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[a-1]&&a-r>=e&&n.push([r,a-1]),n}const Si=32;function aL(t,e,n,{location:r=je.location,distance:i=je.distance,threshold:a=je.threshold,findAllMatches:s=je.findAllMatches,minMatchCharLength:c=je.minMatchCharLength,includeMatches:u=je.includeMatches,ignoreLocation:_=je.ignoreLocation}={}){if(e.length>Si)throw new Error(VO(Si));const v=e.length,g=t.length,h=Math.max(0,Math.min(r,g));let m=a,C=h;const I=c>1||u,b=I?Array(g):[];let w;for(;(w=t.indexOf(e,C))>-1;){let W=ks(e,{currentLocation:w,expectedLocation:h,distance:i,ignoreLocation:_});if(m=Math.min(W,m),C=w+v,I){let X=0;for(;X<v;)b[w+X]=1,X+=1}}C=-1;let y=[],D=1,G=v+g;const F=1<<v-1;for(let W=0;W<v;W+=1){let X=0,ee=G;for(;X<ee;)ks(e,{errors:W,currentLocation:h+ee,expectedLocation:h,distance:i,ignoreLocation:_})<=m?X=ee:G=ee,ee=Math.floor((G-X)/2+X);G=ee;let ce=Math.max(1,h-ee+1),J=s?g:Math.min(h+ee,g)+v,re=Array(J+2);re[J+1]=(1<<W)-1;for(let Ce=J;Ce>=ce;Ce-=1){let _e=Ce-1,Se=n[t.charAt(_e)];if(I&&(b[_e]=+!!Se),re[Ce]=(re[Ce+1]<<1|1)&Se,W&&(re[Ce]|=(y[Ce+1]|y[Ce])<<1|1|y[Ce+1]),re[Ce]&F&&(D=ks(e,{errors:W,currentLocation:_e,expectedLocation:h,distance:i,ignoreLocation:_}),D<=m)){if(m=D,C=_e,C<=h)break;ce=Math.max(1,2*h-C)}}if(ks(e,{errors:W+1,currentLocation:h,expectedLocation:h,distance:i,ignoreLocation:_})>m)break;y=re}const B={isMatch:C>=0,score:Math.max(.001,D)};if(I){const W=oL(b,c);W.length?u&&(B.indices=W):B.isMatch=!1}return B}function sL(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class gv{constructor(e,{location:n=je.location,threshold:r=je.threshold,distance:i=je.distance,includeMatches:a=je.includeMatches,findAllMatches:s=je.findAllMatches,minMatchCharLength:c=je.minMatchCharLength,isCaseSensitive:u=je.isCaseSensitive,ignoreLocation:_=je.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const v=(h,m)=>{this.chunks.push({pattern:h,alphabet:sL(h),startIndex:m})},g=this.pattern.length;if(g>Si){let h=0;const m=g%Si,C=g-m;for(;h<C;)v(this.pattern.substr(h,Si),h),h+=Si;if(m){const I=g-Si;v(this.pattern.substr(I),I)}}else v(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let C={isMatch:!0,score:0};return r&&(C.indices=[[0,e.length-1]]),C}const{location:i,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let v=[],g=0,h=!1;this.chunks.forEach(({pattern:C,alphabet:I,startIndex:b})=>{const{isMatch:w,score:y,indices:D}=aL(e,C,I,{location:i+b,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});w&&(h=!0),g+=y,w&&D&&(v=[...v,...D])});let m={isMatch:h,score:h?g/this.chunks.length:1};return h&&r&&(m.indices=v),m}}class ci{constructor(e){this.pattern=e}static isMultiMatch(e){return Bg(e,this.multiRegex)}static isSingleMatch(e){return Bg(e,this.singleRegex)}search(){}}function Bg(t,e){const n=t.match(e);return n?n[1]:null}class lL extends ci{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class cL extends ci{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class uL extends ci{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class dL extends ci{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class _L extends ci{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class fL extends ci{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class hv extends ci{constructor(e,{location:n=je.location,threshold:r=je.threshold,distance:i=je.distance,includeMatches:a=je.includeMatches,findAllMatches:s=je.findAllMatches,minMatchCharLength:c=je.minMatchCharLength,isCaseSensitive:u=je.isCaseSensitive,ignoreLocation:_=je.ignoreLocation}={}){super(e),this._bitapSearch=new gv(e,{location:n,threshold:r,distance:i,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class vv extends ci{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],a=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+a,i.push([r,n-1]);const s=!!i.length;return{isMatch:s,score:s?0:1,indices:i}}}const Eu=[lL,vv,uL,dL,fL,_L,cL,hv],Wg=Eu.length,gL=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,hL="|";function vL(t,e={}){return t.split(hL).map(n=>{let r=n.trim().split(gL).filter(a=>a&&!!a.trim()),i=[];for(let a=0,s=r.length;a<s;a+=1){const c=r[a];let u=!1,_=-1;for(;!u&&++_<Wg;){const v=Eu[_];let g=v.isMultiMatch(c);g&&(i.push(new v(g,e)),u=!0)}if(!u)for(_=-1;++_<Wg;){const v=Eu[_];let g=v.isSingleMatch(c);if(g){i.push(new v(g,e));break}}}return i})}const pL=new Set([hv.type,vv.type]);class mL{constructor(e,{isCaseSensitive:n=je.isCaseSensitive,includeMatches:r=je.includeMatches,minMatchCharLength:i=je.minMatchCharLength,ignoreLocation:a=je.ignoreLocation,findAllMatches:s=je.findAllMatches,location:c=je.location,threshold:u=je.threshold,distance:_=je.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:s,ignoreLocation:a,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=vL(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let a=0,s=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const v=n[u];s.length=0,a=0;for(let g=0,h=v.length;g<h;g+=1){const m=v[g],{isMatch:C,indices:I,score:b}=m.search(e);if(C){if(a+=1,c+=b,r){const w=m.constructor.type;pL.has(w)?s=[...s,...I]:s.push(I)}}else{c=0,a=0,s.length=0;break}}if(a){let g={isMatch:!0,score:c/a};return r&&(g.indices=s),g}}return{isMatch:!1,score:1}}}const Iu=[];function CL(...t){Iu.push(...t)}function bu(t,e){for(let n=0,r=Iu.length;n<r;n+=1){let i=Iu[n];if(i.condition(t,e))return new i(t,e)}return new gv(t,e)}const Bs={AND:"$and",OR:"$or"},wu={PATH:"$path",PATTERN:"$val"},Ou=t=>!!(t[Bs.AND]||t[Bs.OR]),EL=t=>!!t[wu.PATH],IL=t=>!Rr(t)&&uv(t)&&!Ou(t),zg=t=>({[Bs.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function pv(t,e,{auto:n=!0}={}){const r=i=>{let a=Object.keys(i);const s=EL(i);if(!s&&a.length>1&&!Ou(i))return r(zg(i));if(IL(i)){const u=s?i[wu.PATH]:a[0],_=s?i[wu.PATTERN]:i[u];if(!hr(_))throw new Error(jO(u));const v={keyId:Cu(u),pattern:_};return n&&(v.searcher=bu(_,e)),v}let c={children:[],operator:a[0]};return a.forEach(u=>{const _=i[u];Rr(_)&&_.forEach(v=>{c.children.push(r(v))})}),c};return Ou(t)||(t=zg(t)),r(t)}function bL(t,{ignoreFieldNorm:e=je.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:a,score:s})=>{const c=i?i.weight:null;r*=Math.pow(s===0&&c?Number.EPSILON:s,(c||1)*(e?1:a))}),n.score=r})}function wL(t,e){const n=t.matches;e.matches=[],Mn(n)&&n.forEach(r=>{if(!Mn(r.indices)||!r.indices.length)return;const{indices:i,value:a}=r;let s={indices:i,value:a};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function OL(t,e){e.score=t.score}function LL(t,e,{includeMatches:n=je.includeMatches,includeScore:r=je.includeScore}={}){const i=[];return n&&i.push(wL),r&&i.push(OL),t.map(a=>{const{idx:s}=a,c={item:e[s],refIndex:s};return i.length&&i.forEach(u=>{u(a,c)}),c})}class Co{constructor(e,n={},r){this.options={...je,...n},this.options.useExtendedSearch,this._keyStore=new qO(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Cd))throw new Error(YO);this._myIndex=n||fv(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Mn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const a=this._docs[r];e(a,r)&&(this.removeAt(r),r-=1,i-=1,n.push(a))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:a,sortFn:s,ignoreFieldNorm:c}=this.options;let u=hr(e)?hr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return bL(u,{ignoreFieldNorm:c}),a&&u.sort(s),cv(n)&&n>-1&&(u=u.slice(0,n)),LL(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=bu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:a,i:s,n:c})=>{if(!Mn(a))return;const{isMatch:u,score:_,indices:v}=n.searchIn(a);u&&i.push({item:a,idx:s,matches:[{score:_,value:a,norm:c,indices:v}]})}),i}_searchLogical(e){const n=pv(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:g,searcher:h}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:h});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const v=[];for(let g=0,h=c.children.length;g<h;g+=1){const m=c.children[g],C=r(m,u,_);if(C.length)v.push(...C);else if(c.operator===Bs.AND)return[]}return v},i=this._myIndex.records,a={},s=[];return i.forEach(({$:c,i:u})=>{if(Mn(c)){let _=r(n,c,u);_.length&&(a[u]||(a[u]={idx:u,item:c,matches:[]},s.push(a[u])),_.forEach(({matches:v})=>{a[u].matches.push(...v)}))}}),s}_searchObjectList(e){const n=bu(e,this.options),{keys:r,records:i}=this._myIndex,a=[];return i.forEach(({$:s,i:c})=>{if(!Mn(s))return;let u=[];r.forEach((_,v)=>{u.push(...this._findMatches({key:_,value:s[v],searcher:n}))}),u.length&&a.push({idx:c,item:s,matches:u})}),a}_findMatches({key:e,value:n,searcher:r}){if(!Mn(n))return[];let i=[];if(Rr(n))n.forEach(({v:a,i:s,n:c})=>{if(!Mn(a))return;const{isMatch:u,score:_,indices:v}=r.searchIn(a);u&&i.push({score:_,key:e,value:a,idx:s,norm:c,indices:v})});else{const{v:a,n:s}=n,{isMatch:c,score:u,indices:_}=r.searchIn(a);c&&i.push({score:u,key:e,value:a,norm:s,indices:_})}return i}}Co.version="7.0.0";Co.createIndex=fv;Co.parseIndex=iL;Co.config=je;Co.parseQuery=pv;CL(mL);function ai(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function yL(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function AL(t){return new Co(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function SL(t,e,n){const r=yL(e,n);return t.length===0?r:AL(r).search(t).map(i=>i.item)}function NL(t,e){return ai(t,e).shape}function Jt(t,e){const n=NL(t,e);return n?mu(n):void 0}function Oa(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return vd(e)}function xL(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function La(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return vd(i)})}function TL(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(a=>{if(typeof a!="string")throw Error("cell must be string.");return vd(a)})})}function kr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function mv(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return nv(e)}function RL(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return nv(r)})}function DL(t,e){const n=t.shape;return n===void 0?void 0:{...Jt(e,Tt),...n}}function Cv(t,e,n){return{toolId:t,cells:e,value:n}}function kL(t,e){const n=La(e,"cells"),r=kr(e);return Cv(t,n,r)}function Ev(t,e,n){const r=n?t.length-2:0;return t.findIndex((a,s)=>Ye(a,e)&&s>=r)}function GL(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:mo(r[i-1],e)))return t;const s=Ev(t.cells,e,n);return s>=0?r.length=s+1:r.push(e),{...t,cells:r}}function Iv(t,e){return{toolId:t,cells:e,lines:[]}}function ML(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Ps(n),{...t,cells:n};const r=n.some(a=>Ye(a,e)),i=n.some(a=>mo(a,e));return n.length>0&&!r&&i?(n.push(e),Ps(n),{...t,cells:n}):t}function UL(t,e,n){const r=t.cells.some(_=>Ye(_,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return Lu(t,e);const a=t.lines[i-1],s=a.length;if(s===0&&!r)return t;if(s===0&&r)return Lu(t,e);const c=Ev(a,e,!1);return(a.length===0?!0:mo(a[s-1],e))?c>=0?(a.length=c+1,{...t,lines:[...t.lines.slice(0,i-1),a]}):!r||n?(a.push(e),{...t,lines:[...t.lines.slice(0,i-1),a]}):t:t}function Lu(t,e){return t.cells.some(r=>Ye(r,e))?{...t,lines:[...t.lines,[e]]}:t}function FL(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function $L(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function HL(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function PL(t,e){const n=La(e,"cells"),r=TL(e),i=Iv(t,n);return i.lines=r,i}function bv(t,e,n=""){return{toolId:t,cells:e,value:n}}function BL(t,e,n=!1){const r=av(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function WL(t,e){return{...t,value:e}}function zL(t,e){const n=La(e,"cells"),r=kr(e);return bv(t,n,r)}function wv(t,e,n){return{toolId:t,cells:e,value:n}}function YL(t,e){const n=La(e,"cells"),r=kr(e);return wv(t,n,r)}function Ov(t,e,n){return{toolId:t,cells:e,value:n}}function jL(t,e){const n=La(e,"cells"),r=kr(e);return Ov(t,n,r)}function Lv(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function VL(t,e){const n=Oa(e),r=mv(e),i=kr(e);return Lv(t,n,r,i)}function yv(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function KL(t,e){const n=Oa(e),r=kr(e);return yv(t,n,r)}function Av(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function XL(t,e){const n=Oa(e),r=mv(e);return Av(t,n,r)}function Sv(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function qL(t,e){const n=Oa(e),r=RL(e),i=Sv(t,n,We.N);return i.directions=r,i}function Nv(t,e,n=""){return{toolId:t,cell:e,value:n}}function ZL(t,e){const n=Oa(e),r=kr(e);return Nv(t,n,r)}function QL(t,e=""){return{toolId:t,value:e}}function JL(t,e){const n=kr(e);return QL(t,n)}function xv(t,e,n=""){return{toolId:t,coords:e,value:n}}function ey(t,e){const n=xL(e,"coords"),r=kr(e);return xv(t,n,r)}function ty(t,e){const n=[...t.coords],r=n.length;return(r===0?!0:mo(n[r-1],e))?(n.push(e),{...t,coords:n}):t}function ya(t,e){return{...t,value:e}}class Aa extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const a of Object.values(r))i.push(dy(a));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new Aa;if(!e)return n;for(const[r,i]of Object.entries(e)){const a=ev(r);if(a===void 0||!Object.keys(Tt).includes(a))continue;const s=i;for(const c of s){let u=null;if(tv(a,tl)?u=KL(a,c):ad(a)?u=XL(a,c):sd(a)?u=qL(a,c):ld(a)?u=jL(a,c):qh(a)?u=YL(a,c):cd(a)?u=kL(a,c):Qh(a)?u=ey(a,c):ud(a)?u=PL(a,c):dd(a)?u=zL(a,c):va(a)?u=VL(a,c):bO(a)?u=JL(a,c):Zh(a)&&(u=ZL(a,c)),u!==null){n.addToDict(a);const _=Nt.uniqueId(),v=DL(c,a);u.shape=v,n.addConstraint(a,_,u)}}}return n}}function Ed(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1],s=i[0];if(Ye(a.cell,n))return[s,a]}return null}function ny(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(n.every(c=>a.cells.some(u=>Ye(c,u))))return i}return null}function ry(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1],s=a.cells[a.cells.length-1];if(Ye(n,s))return i}return null}function Yg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(a.cells.some(c=>Ye(c,n)))return[i[0],a]}return null}function iy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>Ye(c,n)))return i;return null}function oy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].coords.some(c=>Ye(c,n)))return i;return null}function jg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(a.cells.some(c=>Ye(c,n)))return[i[0],a]}return null}function ay(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,a]of Object.entries(r)){const s=a,c=s.lines.findIndex(u=>u.some((_,v)=>Ye(_,n)&&v>0));if(c>=0)return{id:i,arrow:s,matchLineIdx:c}}return null}function sy(t,e,n,r){const i=t.get(e);if(!i)return null;for(const a of Object.entries(i)){const s=a[1],c=a[0];if(Ye(n,s.cell)&&r===s.direction)return c}return null}function ly(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1],s=i[0];if(Ye(n,a.cell))return s}return null}function cy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(a.cells.some(c=>Ye(c,n))||a.cells2.some(c=>Ye(c,n)))return[i[0],a]}return null}function uy(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const a=i[1];r.add(a.value)}return r}function dy(t){const e={};if("cells"in t){const n=t.cells.map(r=>Rs(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Rs(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>Rs(i)));e.lines=n}if("cell"in t){const n=Rs(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=Jt(t.toolId,Tt),r=GO(t.shape,n);r&&(e.shape=r)}return e}function Vg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function Tv(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function yu(t){const e=new Option().style;return e.color=t,e.color!==""}function ou(t){return Tv(t)||yu(t)?t:yu(`#${t}`)?`#${t}`:void 0}function Ws(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function Rv(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Au(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function _y(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const Kg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function fy(t){return t in Kg?Kg[t]:null}function Dv(t,e,n){if(n===null)return null;const r=fy(n);if(r===null)return null;const[i,a]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/a)}function au(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class gy{constructor(e,n){ve(this,"r");ve(this,"c");ve(this,"outside",!1);ve(this,"value",null);ve(this,"given",!1);ve(this,"region",null);ve(this,"centerMarks",[]);ve(this,"cornerMarks",[]);ve(this,"highlights",[]);ve(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=au(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=au(this.cornerMarks,e))}enterHighlight(e){this.highlights=au(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==Dv(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class Sa{constructor(e,n){ve(this,"nCols");ve(this,"nRows");ve(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const a=[];for(let s=0;s<n;s++){const c=new gy(i,s);if(r){const u=Dv(i,s,e);c.region=u}a.push(c)}this.grid.push(a)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[a,s]=[e.r+i[0],e.c+i[1]],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const a=e.r+i[0],s=e.c+i[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const a=e.r+i[0],s=e.c+i[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return Rv(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),a=i.length;if(e<0||e>=a||![...r.values()].every(c=>c===a))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:a,c:s}=rl(r);let[c,u]=[e+a,n+s];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];i.push(_),[c,u]=[c+a,u+s]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let a=0;a<this.nCols;a++){const s=this.getCell(r,a);if(!s)continue;const c=s==null?void 0:s.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new Sa(e,n);for(let a=0;a<e;a++)for(let s=0;s<n;s++){const c=r[a][s],u=i.getCell(a,s);u&&Object.assign(u,c)}return i}}function hy(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const a=Math.min(e.nRows,e.nCols),s=Nt.range(1,a+1);t.valid_digits&&!_y(s,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function vy(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,i=t.valid_digits,a=t.grid,s=Sa.fromJSON(e,n,a),c=Math.min(s.nRows,s.nRows);let u=Nt.range(1,c+1);i!==void 0&&(u=i);const _=t.solution,v=t.local_constraints,g=Aa.fromJson(v),h=t.bool_constraints,m=_o.fromJson(h);return{puzzleMeta:r,solution:_,grid:s,valid_digits:u,localConstraints:g,globalConstraints:m}}var sa=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(sa||{});const py=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),my=()=>({type:"CLEAR"}),Cy=t=>({type:"DRAG",payload:t}),Su=t=>({type:"SET",payload:t}),Ey=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),Id=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),gr=(t,e,n)=>{const r=[...t];return Ps(r),{cells:r,lastCell:e,mode:n}};function Iy(t,e,n){if(e===null)return Id();if(n==="RESETTING")return gr([e],e,"SELECTING");const r=t.cells.findIndex(i=>Ye(e,i));if(n==="SELECTING")return r!==-1?t:gr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),gr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return gr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),gr(i,null,"DESELECTING")}return t}function by(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Ye(e,r));if(t.mode==="SELECTING")return n!==-1?t:gr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),gr(r,null,t.mode)}return t}function wy(t,e){return{...t,cells:e}}function Oy(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Ye(e,i))!==-1?gr([...t.cells],e,"SELECTING"):gr([...t.cells,e],e,"SELECTING"):gr([e],e,t.mode)}function kv(t,e){switch(e==null?void 0:e.type){case"CLEAR":return Id();case"SET":return wy(t,e.payload);case"CLICK":return Iy(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return by(t,e.payload);case"ARROW_KEY":return Oy(t,e.payload.cell,e.payload.selectionMode);default:return t}}function so(t,e){return Ye(t.p1,e.p1)&&Ye(t.p2,e.p2)||Ye(t.p1,e.p2)&&Ye(t.p2,e.p1)}function Ly(t,e){return Ye(t.p1,e.p2)&&Ye(t.p2,e.p1)}function Gv(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Ye(t,e)}class il{constructor(){ve(this,"edgeMarkers",[]);ve(this,"cellMarkers",[]);ve(this,"lineMarkers",[]);ve(this,"draftLine",[]);ve(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Ye(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Ye(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Ye(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Ye(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ye(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ye(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ye(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ye(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Ye(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Ye(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const a={...e,colorId:n,marker:"O"};this.cellMarkers[r]=a}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>so(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>so(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&Ly(r,e)&&this.draftLine.splice(n,1)}onDrag(e){Gv(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(a=>so(a,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(a=>so(a,r));if(i!==-1){const a=this.lineMarkers.splice(i,1);n.push(a[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new il;return Object.assign(e,this),e}}const Xg=t=>({type:"ADD_EDGE_MARKER",payload:t}),qg=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Gs=t=>({type:"ADD_CELL_MARKER",payload:t}),yy=t=>({type:"SET_CELL_MARKERS",payload:t}),Zg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),Ay=t=>({type:"DRAG",payload:t}),pa=t=>({type:"ADD_LINE_MARKERS",payload:t}),Qg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),bd=()=>({type:"RESET"});function Sy(t,e){switch(e.type){case"RESET":return new il;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function Mv(){return{_undoStack:[],_redoStack:[]}}const Eo=Pt(Mv());function Ny(){Eo.update(()=>Mv())}function gn(t,e=!0){Eo.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function xy(t,e=!0){Eo.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function Uv(){Eo.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Fv(){Eo.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const zs=Pt(new il);function vr(t){zs.update(e=>Sy(e,t))}const Ys=Pt(1);function Ai(t,e){return{execute:()=>{vr(t)},unExecute:()=>{vr(e)}}}const Di=Pt(Id());function oo(t){t&&Di.update(e=>kv(e,t))}function Jg(t){t&&Di.update(e=>kv(e,t))}function Ty(t,e){return{execute:()=>{Jg(t)},unExecute:()=>{Jg(e)}}}const fo=Pt(),ol=Pt(po.SETTING),Nu=Pt(!1),Qt=Pt(d.DIGIT),$v=Pt(d.DIGIT),wd=Pt(Nt.range(1,10)),vn=Pt(new Sa(9,9)),hn=Pt(at(vn).getAllCells()),Gr=Pt({}),Mr=Pt(new _o),ht=Pt(new Aa),pr=Pt(null),Hv=Pt(void 0),al=Pt(void 0);function Ry(t){Gr.update(()=>t)}function Io(t){pr.update(()=>t)}function Od(t){Hv.update(()=>t)}function Tr(t){at(Qt)!==t&&(Qt.update(()=>t),Io(null))}function Dy(){const t=at($v);t&&Tr(t)}function xu(t){$v.update(()=>t)}function ky(t){at(Qt)===t&&Tr(d.DIGIT)}function Gy(t){ht.update(e=>(e.removeFromDict(t),e)),Od(void 0)}function Ht(t,e,n){ht.update(r=>(r.updateConstraint(t,e,n),r)),Io({id:e,constraint:n})}function su(t){const e=at(pr);if(t=t?{...t}:void 0,Od(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Ht(r,e.id,n)}function My(t,e){const r=at(ht).get(e);if(!r)return;const i=r[t];i&&Io({id:t,constraint:i})}function Uy(t,e,n){const r=new Sa(t,e);vn.update(()=>r),wd.update(()=>n),ht.update(()=>new Aa),Mr.update(()=>new _o),Gr.update(()=>({})),Ld(void 0),hn.update(()=>r.getAllCells())}function Fy(t){vn.update(()=>t.grid),Gr.update(()=>t.puzzleMeta),Ld(t.solution),wd.update(()=>t.valid_digits),ht.update(()=>t.localConstraints),Mr.update(()=>t.globalConstraints),hn.update(()=>t.grid.getAllCells())}function Pv(){const t=at(vn);t.resetValues(),vn.update(()=>t),hn.update(()=>t.getAllCells()),vr(bd())}function js(){Ny(),vr(bd()),Tr(d.DIGIT);const t=my();oo(t),Od(void 0),Io(null)}const Bv=Ui([Yt,Qt,ol],([t,e,n])=>{const r=t.hideFog,i=e;return![d.FOG,d.REGIONS].includes(i)&&!r&&n===po.SETTING}),Na=Ui([vn,Gr,Mr,ht,al,wd],([t,e,n,r,i,a])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:a,globalConstraints:n,localConstraints:r}));function Ld(t){al.update(()=>t)}var ao=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(ao||{});const yd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Ad=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),$y=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),Hy=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),eh=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function Wv(t){ht.update(e=>(e.addToDict(t),e))}function Ur(t,e){const n=at(Hv);n&&(e.shape={...n}),ht.update(r=>(r.addConstraint(e.toolId,t,e),r)),Io({id:t,constraint:e})}function ki(t,e){e&&ht.update(n=>(n.removeConstraint(t,e),n))}function Py(t,e){ht.update(n=>(n.setConstraints(t,e),n))}function th(t){t.type===ao.ADD_LOCAL_CONSTRAINT?Ur(t.payload.id,t.payload.constraint):t.type===ao.REMOVE_LOCAL_CONSTRAINT?ki(t.payload.tool,t.payload.id):t.type===ao.REMOVE_LOCAL_CONSTRAINT_GROUP?Gy(t.payload.tool):t.type===ao.RESTORE_LOCAL_CONSTRAINT_GROUP?Py(t.payload.tool,t.payload.constraints):t.type===ao.UPDATE_LOCAL_CONSTRAINT&&Ht(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function xa(t,e){return{execute:()=>{th(t)},unExecute:()=>{th(e)}}}class Me{constructor(e,n){ve(this,"x");ve(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Me(this.x+e.x,this.y+e.y)}subtract(e){return new Me(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Me(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Me(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function By(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Fn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Me(i.x,i.y)};function $s(t,e=!0,n=.5){const r=nl(t),i=new Me(r.c+.5,r.r+.5),a=t.distance(i);return!e||a<n?{cell:r,dist:a}:null}function zv(t,e=!0,n=.5){const r=nl(t),i=new Me(r.c+.5,r.r+.5),a=t.distance(i),s={r:i.y,c:i.x};return!e||a<n?{cellCenter:s,dist:a}:null}function ca(t,e=!0,n=.5){const r=nl(t),i=SO(r),s=i.map(v=>new Me(v.c,v.r)).map(v=>v.distance(t)),c=s.indexOf(Math.min(...s)),u=i[c],_=s[c];return!e||_<n?{corner:u,dist:_,idx:c}:null}function ua(t,e=!0,n=.5){const r=nl(t),i=NO(r),s=i.map(v=>new Me(v.c,v.r)).map(v=>v.distance(t)),c=s.indexOf(Math.min(...s)),u=i[c],_=s[c];return!e||_<n?{edge:u,dist:_,idx:c}:null}function lu(t,e=!0,n=.5){const r=ua(t,!1);if(!r)return null;const i=ca(t,!1);if(!i)return null;const a=zv(t,!1);if(!a)return null;const s=[a.cellCenter,r.edge,i.corner],u=s.map(I=>new Me(I.c,I.r)).map(I=>I.distance(t)),_=Math.min(...u),v=u.findIndex(I=>I===_),g=s[v],m=["cell center","edge","corner"][v],C={cellCenter:a.cellCenter,edge:r.edge,corner:i.corner,dist:_,target:g,type:m};return!e||_<n?C:null}class bo{constructor(e=.4){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"_prevPoint",null);ve(this,"_prevCell",null);ve(this,"_lastPointerDownTime",0);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_tapCount",0);ve(this,"_lastTapPosition",null);ve(this,"_lastTapTime",0);ve(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=Fn(e,n);if(!i)return;this._prevPoint=i;const a=$s(i,!r,this._margin);if(!a)return;const s=a.cell;this._prevCell=s,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:s,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Fn(e,n);if(!r)return;const i=$s(r,!0,this._margin);if(!i)return;const a=i.cell;if(this._prevCell&&Ye(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const s={event:e,cell:a,tapCount:this._tapCount};this.onDrag&&this.onDrag(s)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=Fn(e,n);if(!r)return;const i=$s(r,!1);if(!i)return;const a=i.cell;let s=0;this._lastTapPosition&&(s=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&s<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function nh(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(a=>{const s=new Set(a.highlights);return n.difference(s).size===0}).map(a=>a.toCoords())}function Wy(t,e){const n=t.value;return e.getAllCells().filter(a=>a.value===n).map(a=>a.toCoords())}function rh(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.cornerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function ih(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.centerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function zy(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===d.HIGHLIGHTS&&i.highlights.length?nh(i,e):i.value!==null?Wy(i,e):n===d.CORNER_PM&&i.cornerMarks.length?rh(i,e):n===d.CENTER_PM&&i.centerMarks.length?ih(i,e):i.cornerMarks.length?rh(i,e):i.centerMarks.length?ih(i,e):i.highlights.length?nh(i,e):r:r}function Fr(t,e,n,r=!1){if(!(t&&e))return;const i=yd(t,e),a=Ad(t,n),s=xa(i,a);gn(s,r)}function ui(t,e,n,r=!0){if(!(t&&e))return;const i=Ad(t,n),a=yd(t,e),s=xa(i,a);gn(s,r)}function Tu(t,e,n,r,i=!1){if(!(t&&n&&e))return;const a=eh(r,t,n),s=eh(r,t,e),c=xa(a,s);gn(c,i)}function wo(t,e,n,r){const i=new bo,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u=null,_=!1,v=!1,g;(I=>{I.DYNAMIC="DYNAMIC",I.BULB="BULB",I.BODY="BODY"})(g||(g={}));let h="DYNAMIC";function m(I){_=!1;const b=I.cell;if(Zt(I.cell,a)){if(h==="DYNAMIC"){const y=at(ht),D=ay(y,n,b);if(D){const F=HL(D.arrow,D.matchLineIdx);Tu(D.id,D.arrow,F,n,!0),v=!0;return}const G=jg(y,n,b);if(!G)_=!0,h="BULB",u=null,s=null;else{h="BODY",u=G[0],s=G[1],s=Lu(s,b),Ht(n,u,s);return}}if(h==="BULB"&&!u){u=Nt.uniqueId(),s=Iv(n,[b]),Ur(u,s);return}else h==="BULB"&&u&&s?(s=ML(s,b),Ht(n,u,s)):h==="BODY"&&u&&s&&(s=UL(s,b,r==null?void 0:r.allowSelfIntersection),Ht(n,u,s))}}return i.onDragStart=I=>{h="DYNAMIC",m(I)},i.onDrag=I=>{m(I)},i.onDragEnd=()=>{if(v){v=!1;return}h==="BODY"&&u&&s?FL(s)?(s=$L(s),Ht(n,u,s)):(Tu(u,c,s,n),c=s):h==="BULB"&&(Fr(u,s,n),c=s),h="DYNAMIC"},i.onTap=I=>{if(_)return;const b=I.cell,w=at(ht);if(jg(w,n,b)){ui(u,s,n);return}},{pointerDown:I=>{I.button===0&&i.pointerDown(I,t)},pointerMove:I=>{i.pointerMove(I,t)},pointerUp:I=>{i.pointerUp(I,t)},keyDown:()=>{},keyUp:()=>{}}}var P=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(P||{});const sl=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,Ln=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Oo=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,Yy=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,an=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Lo=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Sd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Te=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,jy=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,Vy=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,Ky=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,yo=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Xy=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,qy=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,Zy=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function Qy(t){return ad(t)?jy():sd(t)?Vy():t===d.XV?qy():ld(t)?Ky():dd(t)?sl():ud(t)?Oo():va(t)?Yy():cd(t)?Te():Jh(t)?Zy():""}const Jy={getInputHandler(t,e,n){return wo(t,e,n)},toolId:d.ARROW,order:P.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Oo(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}},eA={getInputHandler(t,e,n){return wo(t,e,n)},toolId:d.AVERAGE_ARROW,order:P.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Oo(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}},tA={getInputHandler(t,e,n){return wo(t,e,n,{allowSelfIntersection:!0})},toolId:d.BULBOUS_ARROW,order:P.ARROW_TOOLS,shape:{type:H.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:Oo(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}};d.SQUARE_ROOT_ARROW,P.ARROW_TOOLS,H.LINE,Oo(),x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL;const nA={getInputHandler(t,e,n){return wo(t,e,n)},toolId:d.CHAOS_CONSTRUCTION_ARROW,order:P.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:Oo(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}};function rA(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function iA(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function oA(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function aA(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function sA(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const lA={Delete:null,Backspace:null};function cA(t,e=10){if(t in lA)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function uA(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function dA(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function _A(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function fA(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function Yv(t){return t==="Backspace"}function Ao(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Yv(t.key))}function gA(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function hA(t){return gA(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function vA(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Fi(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,a=(e==null?void 0:e.maxLength)??3;if(t.length>a)return!1;const s=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${s.source}${u.source}$`,"i").test(t)||RegExp(`^${s.source}${c.source}${_.source}$`,"i").test(t))}function $r(t,e,n){if(t===void 0)return t;let r=t;return Yv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}function jt(t,e,n,r){const i=new bo,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(m){const C=at(ht),I=m.cell;if(Zt(m.cell,a)){if(m.event.shiftKey){const w=Yg(C,n,I);w&&(c=w[0],s=w[1],Io({id:c,constraint:s}),_=1)}if(_===0){const w=Yg(C,n,I);if(_=w?2:1,w){ui(w[0],w[1],n);return}}if(!s&&_===1){s=bv(n,[I]),c=Nt.uniqueId(),Ur(c,s);return}else if(s&&c&&_===1){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;s=BL(s,I,w),Ht(n,c,s);return}}}function g(m){const C=at(pr);if(!C)return;let I=C.constraint;const b=C.id;if(I.value===void 0||!Ao(m)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(I==null?void 0:I.value,m.key);w!==void 0&&w!==I.value&&(I=WL(I,w),Ht(n,b,I))}return i.onDragStart=m=>{c=null,s=null,_=0,v(m)},i.onDrag=m=>{v(m)},i.onDragEnd=()=>{c&&s&&Fr(c,s,n,!1),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const Nd=[x.CAGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CAGE_TOOL],yn=[x.CAGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CAGE_TOOL];function pn(t,e=5){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function mn(t,e,n){return $r(t,e,n)}const Cn={type:H.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},pA={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:Ln(),tags:[],categories:yn}},mA={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.UNIQUE_DIGITS_CAGE,order:P.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:Ln(),tags:[],categories:yn}},CA={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.INVERTED_KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:Ln(),tags:[],categories:yn}},EA={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SUM_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:Ln(),tags:[],categories:yn}},IA={getInputHandler(t,e,n){return jt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SUM_CAGE_LOOK_AND_SAY,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:sl(),tags:[],categories:Nd}},bA={getInputHandler(t,e,n){return jt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.PARITY_BALANCE_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:sl(),tags:[],categories:Nd}},wA={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.DIVISIBLE_KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:Ln(),tags:[],categories:yn}},OA={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SPOTLIGHT_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:Ln(),tags:[],categories:yn}},LA={getInputHandler(t,e,n){return jt(t,e,n,{allowDiagonallyAdjacent:!0})},toolId:d.PUTTERIA_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:sl(),tags:[],categories:Nd}};d.KILLER_CAGE_LOOK_AND_SAY,P.CAGE_TOOLS,Ln();const yA={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.MULTISET_CAGE,order:P.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:Ln(),tags:[],categories:yn}},AA={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.VAULTED_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:Ln(),tags:[],categories:yn}};d.AQUARIUM_CAGE,P.CAGE_TOOLS,Ln();const SA={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:Ln(),tags:[],categories:yn}},NA={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:Ln(),tags:[],categories:yn}},xA={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.DOUBLERS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:Ln(),tags:[],categories:yn}},TA={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.NEGATORS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:Ln(),tags:[],categories:yn}};var kn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(kn||{});const RA=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),jv=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),DA=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),kA=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),GA=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),MA=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),UA=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),FA=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),cu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),$A=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),uu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),ll=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function HA(t,e,n){if(e===d.DIGIT){const r=t.map(s=>s.value),i=RA(t,n),a=jv(t,r);return[i,a]}if(e===d.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),a=DA(t,n),s=kA(t,r,i);return[a,s]}if(e===d.REGIONS){const r=t.map(s=>s.region),i=GA(t,n),a=MA(t,r);return[i,a]}if(e===d.FOG){const r=t.map(c=>c.fog),a=UA(t,n===1),s=FA(t,r);return[a,s]}if(e===d.HIGHLIGHTS&&n!==null){const r=uu(t,n),i=uu(t,n);return[r,i]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(s=>s.highlights),i=uu(t,n),a=ll(t,r);return[i,a]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=cu(t,n,e),i=cu(t,n,e);return[r,i]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(s=>s.cornerMarks):r=t.map(s=>s.centerMarks);const i=cu(t,n,e),a=$A(t,r,e);return[i,a]}}function ea(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),hn.update(i=>i)}function go(t){switch(t.type){case kn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;ea(e,d.DIGIT,n,!0);break}case kn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;ea(e,d.GIVEN,n,!0);break}case kn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;ea(e,d.REGIONS,n,!0);break}case kn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;ea(e,d.HIGHLIGHTS,n,!0);break}case kn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;ea(e,r,n,!0);break}case kn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];hn.update(r=>r);break}case kn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];hn.update(i=>i);break}case kn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];hn.update(r=>r);break}case kn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];hn.update(r=>r);break}case kn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===d.CENTER_PM?e[i].centerMarks=r[i]:n===d.CORNER_PM&&(e[i].cornerMarks=r[i]);hn.update(i=>i);break}case kn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),hn.update(r=>r);break}case kn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];hn.update(r=>r);break}}}function PA(t,e){return{execute:()=>{go(t)},unExecute:()=>{go(e)}}}const io=new bo;function oh(t,e){return t.shiftKey?sa.SELECTING:t.ctrlKey||t.metaKey||e?sa.DYNAMIC:t.altKey?sa.DESELECTING:sa.RESETTING}function ma(t,e,n,r,i=!1){switch(e){case d.GIVEN:return t.filter(s=>n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&(s.value!==r||!s.given));case d.DIGIT:return t.filter(s=>!(i&&s.given)&&(n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&s.value!==r));case d.CORNER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.cornerMarks.length||n==="empty"&&!s.cornerMarks.length||n==="equal"&&s.cornerMarks.includes(r)||n==="different"&&!s.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.centerMarks.length||n==="empty"&&!s.centerMarks.length||n==="equal"&&s.centerMarks.includes(r)||n==="different"&&!s.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(s=>n==="any"&&s.highlights.length||n==="empty"&&!s.highlights.length||n==="equal"&&s.highlights.includes(r)||n==="different"&&!s.highlights.includes(r));case d.FOG:{const a=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===a||n==="different"&&c.fog!==a)}}return t}function BA(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=i=>i===d.CORNER_PM||i===d.CENTER_PM||i===d.DIGIT;for(const i of n){const a=ma(t,i,"any",-1,r(i));if(a.length)return{tool:i,cells:a}}return{tool:e,cells:[]}}function da(t,e,n,r){const i=HA(e,n,r);if(i){const a=i[0],s=i[1],c=PA(a,s),u=Su(t),v=[Ty(u,u),c];xy(v)}}function WA(t,e,n){const r=d.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const i=ma(e,r,"any",-1,!1);if(i.length)return da(n,i,r,t),!0}else{const i=ma(e,r,"different",t,!0);if(i.length)return da(n,i,r,t),!0}return!1}function di(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};io.onTap=m=>{if(m.tapCount!==2)return;const I=Zt(m.cell,i)?m.cell:null;if(!I)return;const b=zy(I,e,n),w=Su(b);oo(w)},io.onDragStart=m=>{const C=Zt(m.cell,i),I=at(Nu),b=oh(m.event,I),w=C?m.cell:null,y=py(w,b);oo(y)},io.onDrag=m=>{const I=Zt(m.cell,i)?m.cell:null,b=Cy(I);oo(b)};function a(m){if(!aA(m))return!1;const C=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=Su(C);return oo(I),!0}function s(m){if(!dA(m)||!r.includes(n))return!1;if(m.type==="keydown"){const C=fA(m);return Tr(C),!0}return m.type==="keyup"?(Dy(),!0):!1}function c(m){if(!uA(m))return!1;if(m.code==="Space"){const C=r.indexOf(n),I=r[(C+1)%r.length];return Tr(I),xu(I),!0}else{const C=_A(m.code);return Tr(C),xu(C),!0}}function u(m){if(!hA(m))return!1;const C=at(Di).lastCell;let I=null;if(C!==null){const[y,D]=vA(m),[G,F]=[Vg(C.r+D,0,i.nRows-1),Vg(C.c+y,0,i.nCols-1)];I={r:G,c:F}}else I={r:0,c:0};const b=oh(m,!1),w=Ey(I,b);return oo(w),!0}function _(m){const C=cA(m);if(C===void 0)return!1;const I=at(Di).cells,b=[];if(I.forEach(w=>{const y=e.getCell(w.r,w.c);y&&b.push(y)}),n===d.FOG)return WA(C,b,I);if(C===null){const{tool:w,cells:y}=BA(b,n);if(y.length)return da(I,y,w,C),!0}else{let w=ma(b,n,"different",C,!0);if(w.length)return da(I,w,n,C),!0;if(w=ma(b,n,"equal",C,!0),w.length)return da(I,w,n,C),!0}return!1}function v(m){return m.repeat?!1:_(m.key)}const g=Nt.throttle(m=>{io.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&io.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){io.pointerUp(m,t)},keyUp(m){s(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(a(m)||u(m)||v(m)||s(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}class zA{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevType",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Fn(e,n);if(!r)return;const i=lu(r,!1);if(!i)return;const a={coords:i.target,type:i.type};this._prevType=i.type,this._prevCoords=i.target,this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Fn(e,n);if(!r)return;const i=lu(r,!1);if(!i||this._prevCoords&&Ye(this._prevCoords,i.target))return;this._isTap=!1;const a={coords:i.target,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&Gv(this._prevCoords,i.target)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(a);else return;this._prevType=i.type,this._prevCoords=i.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Fn(e,n);if(!r)return;const i=lu(r,!1);if(!i)return;const a={coords:i.target,type:i.type};this._isTap&&this._prevCoords&&Ye(this._prevCoords,i.target)&&(this.onTap&&this.onTap(a),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function YA(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new zA;return r.onTap=a=>{const s=a.coords,c=at(Ys),u=at(zs);if(a.type==="cell center"){if(!iv(s,n))return;const v=u.getCellMarker(s);if(v)if(v.marker==="X"){const g={...s,colorId:c,marker:"O"},h=Gs(g),m=Gs(v),C=Ai(h,m);gn(C)}else{const g=Zg(s),h=Gs(v),m=Ai(g,h);gn(m)}else{const g={...s,colorId:c,marker:"X"},h=Gs(g),m=Zg(s),C=Ai(h,m);gn(C)}}else if(a.type==="edge"){const _=u.getEdgeMarker(s);if(_){const v=qg(s),g=Xg(_),h=Ai(v,g);gn(h)}else{const v={...s,colorId:c},g=Xg(v),h=qg(s),m=Ai(g,h);gn(m)}}},r.onDrag=a=>{const s=a.coords,c=at(Ys);if(a.type==="cell center"||a.type==="corner"){const u={p1:a.prevCoords,p2:s,colorId:c},_=Ay(u);vr(_)}},r.onDragEnd=()=>{const a=at(zs);if(a.mode==="add"){const s=a.draftLine.filter(c=>!a.lineMarkers.some(u=>so(c,u)));if(s.length){const c=pa(s),u=Qg(s),_=Ai(c,u);gn(_)}}else{const s=a.lineMarkers.filter(c=>a.draftLine.some(u=>so(c,u)));if(s.length){const c=Qg(s),u=pa(s),_=Ai(c,u);gn(_)}}},{blur(){},pointerDown(a){r.pointerDown(a,t)},pointerMove(a){r.pointerMove(a,t)},pointerUp(a){r.pointerUp(a,t)},keyDown(){},keyUp(){}}}const jA={getInputHandler:di,toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[x.CELL_INPUT_TOOL]}},VA={getInputHandler:di,toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[x.CELL_INPUT_TOOL]}},KA={getInputHandler:di,toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[x.CELL_INPUT_TOOL]}},XA={getInputHandler:di,toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[x.CELL_INPUT_TOOL]}},qA={getInputHandler:di,toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[x.CELL_INPUT_TOOL]}},ZA={getInputHandler:di,toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[x.CELL_INPUT_TOOL]}},QA={getInputHandler:di,toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[x.CELL_INPUT_TOOL]}},JA={getInputHandler:di,toolId:d.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[x.CELL_INPUT_TOOL]}},eS={getInputHandler:YA,toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}};var vt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t[t.BOTH=7]="BOTH",t))(vt||{});class cl{constructor(e){ve(this,"onDragStart",null);ve(this,"target");this.target=e}pointerDown(e,n){const r=Fn(e,n);if(!r)return;const i=ua(r,!1);if(!i)return;const a=ca(r,!1);if(!a)return;const s=$s(r,!1);if(!s)return;const c=zv(r,!1);if(!c)return;let u;this.target===1?u=a.corner:this.target===0?u=i.edge:this.target===2?u=c.cellCenter:this.target===3?a.dist<i.dist?u=a.corner:u=i.edge:this.target===4?a.dist<c.dist?u=a.corner:u=c.cellCenter:this.target===5?i.dist<c.dist?u=i.edge:u=c.cellCenter:i.dist<a.dist&&i.dist<c.dist?u=i.edge:a.dist<i.dist&&a.dist<c.dist?u=a.corner:u=c.cellCenter;let _=this.target===1||this.target===4?"corner":"edge";(this.target===3||this.target===6)&&a.dist<i.dist&&(_="corner");const v=_==="edge"?2*i.idx:2*a.idx+1,g={event:e,cell:s.cell,edge:i.edge,corner:a.corner,closest:u,edgeIdx:i.idx,cornerIdx:a.idx,direction:v};this.onDragStart&&this.onDragStart(g)}}function xd(t,e,n,r){const i=(r==null?void 0:r.targets)??vt.CLOSEST,a=new cl(i),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(h){const m=at(ht),C=h.cell,I=h.closest;if(!Zt(C,s))return;const w=ly(m,n,I);if(w){ki(n,w);return}c=Nv(n,I,""),u=Nt.uniqueId(),Ur(u,c)}function v(h){const m=at(pr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!Ao(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(C==null?void 0:C.value,h.key);b!==void 0&&b!==C.value&&(C=ya(C,b),Ht(n,I,C))}return a.onDragStart=h=>{_(h)},{pointerDown:h=>{h.button===0&&a.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:h=>{v(h)},keyUp:()=>{}}}d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,P.OUTSIDE_TOOLS,H.CIRCLE,Sd(),x.LOCAL_CONSTRAINT,x.CENTER_CORNER_EDGE_CONSTRAINT;const tS={getInputHandler(t,e,n){return xd(t,e,n,{targets:vt.CLOSEST,valueUpdater:(r,i)=>$r(r,i,()=>!0),defaultValue:""})},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:P.OUTSIDE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Sd(),tags:[],categories:[x.LOCAL_CONSTRAINT,x.CENTER_CORNER_EDGE_CONSTRAINT]}},nS={getInputHandler(t,e,n){return xd(t,e,n,{targets:vt.CORNER_OR_EDGE,valueUpdater:(r,i)=>$r(r,i,()=>!0),defaultValue:""})},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:P.OUTSIDE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Sd(),tags:[],categories:[x.LOCAL_CONSTRAINT,x.CENTER_CORNER_EDGE_CONSTRAINT]}};function rS(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function iS(t,e){const n=av(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function oS(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function aS(t){for(let e=0;;e++){const n=oS(e);if(!t.has(n))return n}}function sS(t,e,n){const r=new bo,i={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=null,_="cells2",v;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.SELECTING=1]="SELECTING",C[C.MOVING=2]="MOVING"})(v||(v={}));let g=0;function h(C){const I=at(ht),b=C.cell;if(!Zt(C.cell,i))return;const y=cy(I,n,b);if(g===0&&(y?(c=y[0],a=y[1],g=2,u=b,_=a.cells2.some(G=>Ye(G,b))?"cells2":"cells"):g=1),g===1&&c===null){c=Nt.uniqueId();const D=uy(I,n),G=aS(D);a=rS(n,[b],G),Ur(c,a);return}else if(g===1&&c&&a){a=iS(a,b),Ht(n,c,a);return}else if(g===2&&c&&a&&u){const D={r:b.r-u.r,c:b.c-u.c},F=(_==="cells2"?a.cells2:a.cells).map(W=>({r:W.r+D.r,c:W.c+D.c}));if(!F.every(W=>Zt(W,i)))return;_==="cells"?a={...a,cells:F}:a={...a,cells2:F},u=b,Ht(n,c,a)}}return r.onDragStart=C=>{c=null,a=null,g=0,u=null,h(C)},r.onDrag=C=>{h(C)},r.onDragEnd=()=>{c&&a&&(g===1?Fr(c,a,n):g===2&&Tu(c,s,a,n),s=a)},r.onTap=()=>{c&&g!==1&&(ki(n,c),c=null,a=null)},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}const lS={getInputHandler(t,e,n){return sS(t,e,n)},toolId:d.CLONE_REGION,order:P.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[x.CLONE_CONSTRAINT,x.LOCAL_CONSTRAINT]}};class Vv{constructor(){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin")}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCoord===null,i=Fn(e,n);if(!i)return;const a=ca(i,!r);if(!a)return;this._prevCoord=a.corner;const s={event:e,cellCorner:a.corner};this.onDragStart&&this.onDragStart(s)}pointerMove(e,n){if(!this._isDown)return;const r=Fn(e,n);if(!r)return;const i=ca(r);if(!i||this._prevCoord&&Ye(i.corner,this._prevCoord))return;const a={event:e,cellCorner:i.corner};this._prevCoord=i.corner,this._isTap=!1,this.onDrag&&this.onDrag(a)}pointerUp(e,n){const r=Fn(e,n);if(!r)return;const i=ca(r);if(!i)return;const a={event:e,cellCorner:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(a)),this._isTap&&this.onTap&&this.onTap(a)}}function _i(t,e,n,r){const i=new Vv,a={nRows:e.nRows,nCols:e.nCols};let s;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(g){const h=at(ht),m=g.cellCorner,C=fd(m);if(!C.every(w=>Zt(w,a)))return;let b=null;if(c===0&&(b=ry(h,n,m),c=b?2:1),b&&c===2){const w=b[0];ui(w,b[1],n);return}else if(c===1){const w=wv(n,C,r==null?void 0:r.defaultValue),y=Nt.uniqueId();Fr(y,w,n,!0)}}function _(g){const h=at(pr);if(!h)return;let m=h.constraint;const C=h.id;if(m.value===void 0||!Ao(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=ya(m,I),Ht(n,C,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}function ul(t,e=3){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function dl(t,e,n){return $r(t,e,n)}function cS(t,e){function n(r){return!0}return $r(t,e,n)}const uS={getInputHandler(t,e,n){return _i(t,e,n,{valueUpdater:(r,i)=>cS(r,i),defaultValue:""})},toolId:d.QUADRUPLE,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:Xy(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CORNER_TOOL]}},dS={getInputHandler(t,e,n){return _i(t,e,n,{valueUpdater:(r,i)=>dl(r,i,ul),defaultValue:""})},toolId:d.CORNER_SUM,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:yo(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CORNER_TOOL]}},_S={getInputHandler(t,e,n){return _i(t,e,n)},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:yo(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}},fS={getInputHandler(t,e,n){return _i(t,e,n,{valueUpdater:(r,i)=>dl(r,i,ul),defaultValue:""})},toolId:d.CORNER_EVEN_COUNT,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:yo(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,P.CORNER_TOOLS,H.CIRCLE,yo(),x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CORNER_TOOL;const gS={getInputHandler(t,e,n){return _i(t,e,n,{defaultValue:"X"})},toolId:d.PRODUCT_SQUARE,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:yo(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}},hS={getInputHandler(t,e,n){return _i(t,e,n,{defaultValue:""})},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:yo(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}};function ye(t,e,n,r){const i=new bo,a={nRows:e.nRows,nCols:e.nCols},s=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(g){if(!u||!c)throw"UNREACHABLE";const h=g.cell;Zt(g.cell,a)&&(c=GL(c,h,s),Ht(n,u,c))}return i.onDragStart=g=>{u=Nt.uniqueId(),c=Cv(n,[],r==null?void 0:r.defaultValue),Ur(u,c),_(g)},i.onDrag=g=>{_(g)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?ki(n,u):u&&c&&Fr(u,c,n,!1),u=null},i.onTap=g=>{const h=g.cell,m=at(ht),C=iy(m,n,h);if(C){const[I,b]=C;ui(I,b,n)}},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}function Fe(t,e,n,r,i){const a=new bo,s={nRows:e.nRows,nCols:e.nCols};let c;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(c||(c={}));let u=0;function _(h){const m=at(ht),C=h.cell;if(!Zt(h.cell,s))return;const b=Ed(m,n,C);if(u===0&&(u=b?2:1),b&&u===2){const[w,y]=b;ui(w,y,n)}else if(u===1){const w=yv(n,C,i==null?void 0:i.defaultValue),y=Nt.uniqueId();Fr(y,w,n,!0)}}a.onDragStart=h=>{u=0,_(h)},a.onDrag=h=>{_(h)};function v(h){const m=at(pr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!Ao(h)||!(i!=null&&i.valueUpdater))return;const b=i.valueUpdater(C==null?void 0:C.value,h.key);b!==void 0&&b!==C.value&&(C=ya(C,b),Ht(n,I,C))}return{pointerDown:h=>{h.button===0&&a.pointerDown(h,t)},pointerMove:h=>{a.pointerMove(h,t)},pointerUp:h=>{a.pointerUp(h,t)},keyDown:h=>{v(h)},keyUp:()=>{}}}class vS{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"_prevCellEdge",null);ve(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=Fn(e,n);if(!r)return;const i=ua(r,!0,.35);if(!i)return;this._prevCellEdge=i.edge;const a={event:e,edge:i.edge};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Fn(e,n);if(!r)return;const i=ua(r,!0,.35);if(!i||this._prevCellEdge&&Ye(i.edge,this._prevCellEdge))return;const a={event:e,edge:i.edge};this._prevCellEdge=i.edge,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellEdge=null,this._isDown=!1);const r=Fn(e,n);!r||ua(r,!0,.35)}}function Vt(t,e,n,r){const i=new vS,a={nRows:e.nRows,nCols:e.nCols};let s;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(g){const h=at(ht),m=g.edge,C=hd(m);if(!C.every(w=>Zt(w,a)))return;let b=null;if(c===0&&(b=ny(h,n,C),c=b?2:1),b&&c===2){const w=b[0];ui(w,b[1],n)}else if(c===1){const w=(r==null?void 0:r.defaultValue)??"",y=Ov(n,C,w),D=Nt.uniqueId();Fr(D,y,n,!0)}}function _(g){const h=at(pr);if(!h)return;let m=h.constraint;const C=h.id;if(m.value===void 0||!Ao(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=ya(m,I),Ht(n,C,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}function Td(t,e,n,r=vt.CORNER_OR_EDGE){const i=[We.N,We.NE,We.E,We.SE,We.S,We.SW,We.W,We.NW],a=new cl(r),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.ADDING=1]="ADDING",C[C.REMOVING=2]="REMOVING"})(_||(_={}));let v=0;function g(C){const I=at(ht),b=C.cell;if(!Zt(C.cell,s))return;C.event.altKey&&(v=2);const y=Ed(I,n,b),D=gd(C.direction);if(y){[u,c]=y,c.direction===D||v===2?ui(u,c,n):(c={...c,direction:D},Ht(n,u,c));return}else v!==2&&(c=Av(n,b,D),u=Nt.uniqueId(),Fr(u,c,n,!0))}function h(C){if(!c||!u||!sA(C))return;const b=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[b]},Ht(n,u,c)}return a.onDragStart=C=>{v=0,g(C)},{pointerDown:C=>{C.button===0&&a.pointerDown(C,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:C=>{h(C)},keyUp:()=>{}}}function pS(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function ar(t,e,n,r=vt.CORNER_OR_EDGE){const i=new cl(r),a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(h){const m=at(ht),C=h.cell;if(!Zt(h.cell,a))return;h.event.altKey&&(_=2);const b=gd(h.direction),w=Ed(m,n,C);if(w){if(c=w[0],s=w[1],_===2)ki(n,w[0]);else{const y=pS(s.directions,b);y.length?(s={...s,directions:y},Ht(n,c,s)):ki(n,c)}return}else _!==2&&(s=Sv(n,C,b),c=Nt.uniqueId(),Ur(c,s))}return i.onDragStart=h=>{_=0,v(h)},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}const _l=[x.EDGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.EDGE_TOOL],$n=[x.EDGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.EDGE_TOOL],Ta=.15,Kv=.02,fi={type:H.CIRCLE,r:{editable:!0,value:Ta,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Kv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},Rd={type:H.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function mS(t,e=1){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function $i(t,e=3){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function CS(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function gi(t,e,n){return $r(t,e,n)}function ES(t,e){return t===void 0?"V":CS(e)?e.toUpperCase():t}function IS(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function Xv(t,e){return t===void 0?"<":IS(e)?e:t}const bS={getInputHandler(t,e,n){return Vt(t,e,n,{valueUpdater:(r,i)=>gi(r,i,mS)})},toolId:d.RATIO,order:P.EDGE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:Ta},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:$n}},wS={getInputHandler(t,e,n){return Vt(t,e,n,{valueUpdater:(r,i)=>gi(r,i,$i)})},toolId:d.DIFFERENCE,order:P.EDGE_TOOLS,shape:fi,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:$n}},OS={getInputHandler(t,e,n){return Vt(t,e,n,{valueUpdater:(r,i)=>gi(r,i,$i)})},toolId:d.EDGE_SUM,order:P.EDGE_TOOLS,shape:{...fi,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:$n}},LS={getInputHandler(t,e,n){return Vt(t,e,n,{valueUpdater:ES,defaultValue:"V"})},toolId:d.XV,order:P.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:Ta},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:$n}},yS={getInputHandler(t,e,n){return Vt(t,e,n,{valueUpdater:Xv,defaultValue:"<"})},toolId:d.EDGE_INEQUALITY,order:P.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:$n}},AS={getInputHandler(t,e,n){return Vt(t,e,n,{valueUpdater:(r,i)=>gi(r,i,$i)})},toolId:d.EDGE_PRODUCT,order:P.EDGE_TOOLS,shape:{...fi,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:$n}},SS={getInputHandler(t,e,n){return Vt(t,e,n,{valueUpdater:(r,i)=>gi(r,i,$i)})},toolId:d.EDGE_MODULO,order:P.EDGE_TOOLS,shape:{...fi,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:$n}},NS={getInputHandler(t,e,n){return Vt(t,e,n,{valueUpdater:(r,i)=>gi(r,i,$i)})},toolId:d.EDGE_FACTOR,order:P.EDGE_TOOLS,shape:{...fi,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:$n}},xS={getInputHandler(t,e,n){return Vt(t,e,n)},toolId:d.XY_DIFFERENCES,order:P.EDGE_TOOLS,shape:{type:H.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Ta},strokeWidth:{editable:!1,value:Kv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:$n}},TS={getInputHandler(t,e,n){return Vt(t,e,n)},toolId:d.YIN_YANG_WHITE_KROPKI,order:P.EDGE_TOOLS,shape:fi,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:$n}},RS={getInputHandler(t,e,n){return Vt(t,e,n)},toolId:d.YIN_YANG_KROPKI,order:P.EDGE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:Ta},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:$n}},DS={getInputHandler(t,e,n){return Vt(t,e,n)},toolId:d.FILLOMINO_REGION_BORDER,order:P.EDGE_TOOLS,shape:Rd,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:_l}},kS={getInputHandler(t,e,n){return Vt(t,e,n)},toolId:d.UNKNOWN_REGION_BORDER,order:P.EDGE_TOOLS,shape:Rd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:_l}},GS={getInputHandler(t,e,n){return Vt(t,e,n)},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:P.EDGE_TOOLS,shape:Rd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:_l}},MS={getInputHandler(t,e,n){return Vt(t,e,n)},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:P.EDGE_TOOLS,shape:fi,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:_l}},US={getInputHandler(t,e,n){return Vt(t,e,n,{valueUpdater:Xv,defaultValue:"<"})},toolId:d.ONE_WAY_DOOR,order:P.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:$n}};d.CUSTOM_EDGE_CONSTRAINT,P.EDGE_TOOLS;function Dt(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??vt.CORNER_OR_EDGE,a=new cl(i),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(h){const m=at(ht),C=h.cell,I=h.direction,b=gd(I);if(Zt(C,s))return;const y=ov(C,b);if(!Zt(y,s))return;const G=sy(m,n,C,b);if(G){ki(n,G);return}c=Lv(n,C,b,""),u=Nt.uniqueId(),Ur(u,c)}function v(h){const m=at(pr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!Ao(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(C==null?void 0:C.value,h.key);b!==void 0&&b!==C.value&&(C=ya(C,b),Ht(n,I,C))}return a.onDragStart=h=>{_(h)},{pointerDown:h=>{h.button===0&&a.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:h=>{v(h)},keyUp:()=>{}}}const So=[x.OUTSIDE_CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.OUTSIDE_CORNER_TOOL,x.OUTSIDE_DIRECTION_TOOL];function No(t,e=5){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Hi(t,e,n){return $r(t,e,n)}const xo={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},FS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>Hi(r,i,No),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:d.LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:xo,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:Lo(),tags:[],categories:So}},$S={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>Hi(r,i,No),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:d.LITTLE_KILLER_PRODUCT,order:P.OUTSIDE_TOOLS,shape:xo,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:Lo(),tags:[],categories:So}},HS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>Hi(r,i,No),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:P.OUTSIDE_TOOLS,shape:xo,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:Lo(),tags:[],categories:So}},PS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>Hi(r,i,No),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:xo,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:Lo(),tags:[],categories:So}},BS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>Hi(r,i,No),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:P.OUTSIDE_TOOLS,shape:xo,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:Lo(),tags:[],categories:So}},WS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>Hi(r,i,No),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:xo,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:Lo(),tags:[],categories:So}},sn=[x.OUTSIDE_EDGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.OUTSIDE_EDGE_TOOL,x.OUTSIDE_DIRECTION_TOOL];function en(t,e=5){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function ln(t,e,n){return $r(t,e,n)}const cn={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},zS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.SANDWICH_SUM,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:an(),tags:[],categories:sn}},YS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.SANDWICH_SUM_XOR_X_SUM,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:an(),tags:[],categories:sn}},jS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.X_SUM,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:an(),tags:[],categories:sn}},VS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.SHORTSIGHTED_X_SUM,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:an(),tags:[],categories:sn}},KS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.SHIFTED_X_SUM,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:an(),tags:[],categories:sn}},XS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.BROKEN_X_SUM,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:an(),tags:[],categories:sn}},qS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.X_SUM_SKYSCRAPERS,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:an(),tags:[],categories:sn}},ZS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.BATTLEFIELD,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:an(),tags:[],categories:sn}},QS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.SKYSCRAPERS,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:an(),tags:[],categories:sn}},JS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.X_INDEX,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:an(),tags:[],categories:sn}},eN={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.RISING_STREAK,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:an(),tags:[],categories:sn}};d.ROW_OR_COLUMN_RANK,P.OUTSIDE_TOOLS,an();const tN={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:an(),tags:[],categories:sn}},nN={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.BOTH})},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:an(),tags:[],categories:sn}},rN={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.BOTH})},toolId:d.LOOPWICHES,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:an(),tags:[],categories:sn}},iN={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>ln(r,i,en),defaultValue:"",cornerOrEdge:vt.BOTH})},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:P.OUTSIDE_TOOLS,shape:cn,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:an(),tags:[],categories:sn}},oN={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.COSMETIC_CELL_SHAPE,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},aN={getInputHandler(t,e,n){return Td(t,e,n)},toolId:d.COSMETIC_CELL_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},sN={getInputHandler(t,e,n){return ar(t,e,n)},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},lN={getInputHandler(t,e,n){return Vt(t,e,n,{valueUpdater:(r,i)=>gi(r,i,$i)})},toolId:d.COSMETIC_EDGE,order:P.EDGE_TOOLS,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.TYPABLE_TOOL]}},cN={getInputHandler(t,e,n){return _i(t,e,n,{valueUpdater:(r,i)=>dl(r,i,ul),defaultValue:""})},toolId:d.COSMETIC_CORNER,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.TYPABLE_TOOL]}},uN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},dN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},_N={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},fN={getInputHandler(t,e,n){return jt(t,e,n,{valueUpdater:(r,i)=>mn(r,i,pn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.COSMETIC_CAGE,order:P.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.TYPABLE_TOOL]}},gN={getInputHandler(t,e,n){return wo(t,e,n)},toolId:d.COSMETIC_ARROW,order:P.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.LOCAL_CONSTRAINT]}},hN={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>Hi(r,i,en),defaultValue:"",cornerOrEdge:vt.CORNER_OR_EDGE})},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:P.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.OUTSIDE_DIRECTION_TOOL]}},To=[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT,x.DIAGONAL_CONSTRAINT],vN={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},pN={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},mN={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},CN={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},EN={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},IN={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},bN={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},wN={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},ON={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},LN={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},yN={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},AN={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},SN={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:To}},NN={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:To}},xN={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:To}},TN={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:To}},RN={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:To}},DN={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:To}},kN={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},GN={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},MN={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},UN={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},FN={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},$N={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},HN={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},PN={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},BN={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},WN={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},zN={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},YN={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},jN={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},VN={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},KN={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},XN={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},qN={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},ZN={toolId:d.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},QN={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},JN={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},ex={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},tx={toolId:d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,order:0,meta:{description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},nx={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},rx={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},ix={toolId:d.NURIKABE_NO_REPEATS_IN_ISLANDS,order:0,meta:{description:"Digits may not repeat within a nurikabe island.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},ox={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},ax={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},sx={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},lx={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},cx={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},ux={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},dx={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},_x={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},fx={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},gx={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},hx={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},vx={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},px={toolId:d.DIRECTED_PATH_IS_PARITY_LINE,order:0,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},mx={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Cx={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Ex={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Ix={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},bx={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},wx={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},Ox={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},Lx={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},yx={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},Ax={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},Sx={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},Nx={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},xx={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},Tx={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},Rx={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},Dx={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},kx={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},Gx={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},Mx={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},Ux={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},Fx={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},$x={toolId:d.CONNECT_FOUR,order:0,meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},Hx={toolId:d.CONNECT_FOUR_DRAW,order:0,meta:{description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},Px={toolId:d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,order:0,meta:{description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},Bx={toolId:d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,order:0,meta:{description:"Two orthogonally adjacent yellow discs must have a difference of at least 3.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},$e=[x.LINE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.LINE_TOOL],Hr=[x.LINE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.DOUBLE_ENDED_LINE_CONSTRAINT,x.LINE_TOOL],Ra={description:"",usage:Te(),tags:[],categories:$e},Wx={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.THERMOMETER,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ra,description:"Numbers along a thermometer must increase from the bulb end."}},zx={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:"2"})},toolId:d.CUSTOM_THERMOMETER,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ra,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},Yx={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.FUZZY_THERMOMETER,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Ra,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},jx={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.SLOW_THERMOMETER,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ra,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},Vx={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ROW_CYCLE_THERMOMETER,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ra,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},Kx={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.PALINDROME,order:P.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Te(),tags:[],categories:$e}},Xx={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Te(),tags:[],categories:$e}},qx={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLE_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Te(),tags:[],categories:$e}},Zx={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.RENRENBANBAN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Te(),tags:[],categories:$e}},Qx={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:$e}},Jx={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.NABNER_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Te(),tags:[],categories:$e}},eT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Te(),tags:[],categories:$e}},tT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:d.DUTCH_WHISPERS,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Te(),tags:[],categories:$e}},nT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"2"})},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Te(),tags:[],categories:$e}},rT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.RENBAN_OR_WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Te(),tags:[],categories:$e}},iT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.RENBAN_OR_NABNER_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Te(),tags:[],categories:$e}},oT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Te(),tags:[],categories:$e}},aT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.INDEX_LINE,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Te(),tags:[],categories:$e}},sT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.UNIQUE_VALUES_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Te(),tags:[],categories:$e}},lT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.REGION_SUM_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Te(),tags:[],categories:$e}},cT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:d.SUM_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Te(),tags:[],categories:$e}},uT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ARITHMETIC_SEQUENCE_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Te(),tags:[],categories:$e}},dT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.SAME_PARITY_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Te(),tags:[],categories:$e}},_T={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Te(),tags:[],categories:$e}},fT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.UNIMODULAR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Te(),tags:[],categories:$e}},gT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:"3"})},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Te(),tags:[],categories:$e}},hT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:Te(),tags:[],categories:$e}},vT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Te(),tags:[],categories:$e}},pT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ENTROPIC_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Te(),tags:[],categories:$e}},mT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ENTROPIC_OR_MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Te(),tags:[],categories:$e}},CT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Te(),tags:[],categories:$e}},ET={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.INDEXING_ROW_IS_X_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Te(),tags:[],categories:$e}},IT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.REPEATED_DIGITS_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Te(),tags:[],categories:$e}},bT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.SUPERFUZZY_ARROW,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Te(),tags:[],categories:$e}},wT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.AMBIGUOUS_ARROW,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Te(),tags:[],categories:$e}},OT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.HEADLESS_ARROW,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Te(),tags:[],categories:$e}},LT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.XV_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Te(),tags:[],categories:$e}},yT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ROW_SUM_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Te(),tags:[],categories:$e}},AT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:d.AT_LEAST_X_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Te(),tags:[],categories:$e}},ST={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Te(),tags:[],categories:$e}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,P.LINE_TOOLS,H.LINE,Te();const NT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:d.PRODUCT_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Te(),tags:[],categories:$e}},xT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ADJACENT_MULTIPLES_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Te(),tags:[],categories:$e}},TT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Te(),tags:[],categories:$e}},RT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.LOOK_AND_SAY_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Te(),tags:[],categories:$e}},DT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ZIPPER_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Te(),tags:[],categories:$e}},kT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:d.SEGMENTED_SUM_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Te(),tags:[],categories:$e}},GT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:""})},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Te(),tags:[],categories:$e}},MT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:""})},toolId:d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:Te(),tags:[],categories:$e}};d.THERMO_OR_AVERAGE_ARROW,P.LINE_TOOLS,H.THERMO_WITH_CIRCLE,Te();const UT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.INDEXER_CELLS_REGION_SUBSET_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:Te(),tags:[],categories:$e}},FT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.PEAPODS,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:Te(),tags:[],categories:$e}},$T={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Te(),tags:[],categories:$e}},HT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Te(),tags:[],categories:$e}},PT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Te(),tags:[],categories:$e}},BT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.YIN_YANG_REGION_SUM_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Te(),tags:[],categories:$e}},WT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Te(),tags:[],categories:$e}},zT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Te(),tags:[],categories:$e}},YT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.BETWEEN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Te(),tags:[],categories:Hr}},jT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:d.LOCKOUT_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Te(),tags:[],categories:Hr}},VT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.TIGHTROPE_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Te(),tags:[],categories:Hr}},KT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.PARITY_COUNT_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Te(),tags:[],categories:Hr}},XT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLE_ARROW_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Te(),categories:Hr}},qT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Te(),tags:[],categories:Hr}},ZT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.SPLIT_PEAS,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Te(),tags:[],categories:Hr}},QT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.DOUBLERS_THERMOMETER,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Te(),tags:[],categories:$e}},JT={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLERS_BETWEEN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Te(),tags:[],categories:Hr}},eR={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Te(),tags:[],categories:Hr}},ze=[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT,x.SINGLE_CELL_SHAPE_TOOL],Ro=[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT,x.SINGLE_CELL_COLOR_TOOL],fl={type:H.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Da={type:H.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function Pr(t,e=3){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function tR(t){return t===""||t==="1"||t==="2"||t==="3"}function mr(t,e,n){return $r(t,e,n)}const nR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.ODD,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:ze}},rR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.EVEN,order:P.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:ze}},iR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.MINIMUM,order:P.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}},oR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.MAXIMUM,order:P.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}};d.PRIME_CELL,P.CELL_COLOR_TOOL;const aR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.ODD_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ze}},sR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.EVEN_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ze}},lR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:ze}},cR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.WATCHTOWER,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ze}},uR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.NOT_WATCHTOWER,order:P.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ze}},dR={getInputHandler(t,e,n){return Fe(t,e,n,void 0,{valueUpdater:(r,i)=>mr(r,i,Pr),defaultValue:""})},toolId:d.FARSIGHT,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:ze}},_R={getInputHandler(t,e,n){return Fe(t,e,n,void 0,{valueUpdater:(r,i)=>mr(r,i,Pr),defaultValue:"9"})},toolId:d.RADAR,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:ze}},fR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.ORTHOGONAL_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:ze}},gR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.INDEXING_COLUMN,order:P.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Ro}},hR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.INDEXING_ROW,order:P.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Ro}},vR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.LOW_DIGIT,order:P.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:Ro}},pR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.HIGH_DIGIT,order:P.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:Ro}},mR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.FRIENDLY_CELL,order:P.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:Ro}},CR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.DIAGONALLY_ADJACENT_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:ze}},ER={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:ze}},IR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.SANDWICH_ROW_COL_COUNT,order:P.CELL_SHAPE_TOOL,shape:Da,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:ze}},bR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:ze}},wR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.REVERSE_COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:ze}},OR={getInputHandler(t,e,n){return Fe(t,e,n,void 0,{valueUpdater:(r,i)=>mr(r,i,tR),defaultValue:""})},toolId:d.COLORED_COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:Da,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:ze}},LR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.UNIQUE_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:ze}},yR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.SEEN_EVEN_COUNT,order:P.CELL_SHAPE_TOOL,shape:fl,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:ze}},AR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.SEEN_ODD_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:ze}},SR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.YIN_YANG_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:ze}},NR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ze}},xR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ze}},TR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:P.CELL_SHAPE_TOOL,shape:fl,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:ze}},RR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:ze}},DR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:ze}},kR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:ze}},GR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.SEEN_REGION_BORDERS_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:ze}},MR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:ze}},UR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.SASHIGANE_BEND_REGION_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:ze}},FR={getInputHandler(t,e,n){return Td(t,e,n)},toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:P.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[x.SINGLE_CELL_ARROW_TOOL,x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}},$R={getInputHandler(t,e,n){return Td(t,e,n)},toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[x.SINGLE_CELL_ARROW_TOOL,x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}},HR={getInputHandler(t,e,n){return Fe(t,e,n,void 0,{valueUpdater:(r,i)=>mr(r,i,Pr),defaultValue:""})},toolId:d.SASHIGANE_REGION_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:ze}},PR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.CELL_ON_THE_LOOP,order:P.CELL_SHAPE_TOOL,shape:fl,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:ze}},BR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.CELL_NOT_ON_THE_LOOP,order:P.CELL_SHAPE_TOOL,shape:Da,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:ze}},WR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:ze}},zR={getInputHandler(t,e,n){return Fe(t,e,n,void 0,{valueUpdater:(r,i)=>mr(r,i,Pr),defaultValue:""})},toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:ze}},YR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.CAVE_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:ze}},jR={getInputHandler(t,e,n){return Fe(t,e,n,void 0,{valueUpdater:(r,i)=>mr(r,i,Pr),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:ze}},VR={getInputHandler(t,e,n){return Fe(t,e,n,void 0,{valueUpdater:(r,i)=>mr(r,i,Pr),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:ze}},KR={getInputHandler(t,e,n){return Fe(t,e,n,void 0,{valueUpdater:(r,i)=>mr(r,i,Pr),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,order:P.CELL_SHAPE_TOOL,shape:Da,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:ze}},XR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.DIRECTED_PATH_START,order:P.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:ze}},qR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.DIRECTED_PATH_END,order:P.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:ze}},ZR={getInputHandler(t,e,n){return Fe(t,e,n,void 0,{valueUpdater:(r,i)=>mr(r,i,Pr),defaultValue:""})},toolId:d.TELEPORT,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:ze}},QR={getInputHandler(t,e,n){return Fe(t,e,n,void 0,{valueUpdater:(r,i)=>mr(r,i,Pr),defaultValue:""})},toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:ze}},JR={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.NURIKABE_SEEN_WATERWAY_CELLS,order:P.CELL_SHAPE_TOOL,shape:{...fl,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:ze}},eD={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.NURIKABE_ISLAND_SIZE_CELL,order:P.CELL_SHAPE_TOOL,shape:Da,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:ze}},tD={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.CONNECT_FOUR_YELLOW,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:ze}},nD={getInputHandler(t,e,n){return Fe(t,e,n)},toolId:d.CONENCT_FOUR_RED,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:ze}},Cr=[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT,x.SINGLE_CELL_MULTIARROW_TOOL],hi={type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},rD={getInputHandler(t,e,n){return ar(t,e,n)},toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:hi,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:Cr}},iD={getInputHandler(t,e,n){return ar(t,e,n)},toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:P.CELL_SHAPE_TOOL,shape:hi,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:Cr}},oD={getInputHandler(t,e,n){return ar(t,e,n)},toolId:d.LOOP_CELL_COUNT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:hi,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:Cr}},aD={getInputHandler(t,e,n){return ar(t,e,n)},toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:P.CELL_SHAPE_TOOL,shape:hi,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:Cr}},sD={getInputHandler(t,e,n){return ar(t,e,n)},toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:hi,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:Cr}},lD={getInputHandler(t,e,n){return ar(t,e,n)},toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:P.CELL_SHAPE_TOOL,shape:hi,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:Cr}},cD={getInputHandler(t,e,n){return ar(t,e,n)},toolId:d.COLD_ARROWS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:Cr}},uD={getInputHandler(t,e,n){return ar(t,e,n)},toolId:d.HOT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:Cr}},dD={getInputHandler(t,e,n){return ar(t,e,n)},toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:P.CELL_SHAPE_TOOL,shape:hi,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:Cr}},_D={getInputHandler(t,e,n){return ar(t,e,n)},toolId:d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,order:P.CELL_SHAPE_TOOL,shape:hi,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:Cr}},fD={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}},gD={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}},hD={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;const vD={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}},pD={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;const mD={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}},CD={toolId:d.INDEXER_CELLS,order:0,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}};function ED(t,e,n,r){const i=new Vv,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(h){const m=at(ht),C=h.cellCorner;if(!iv(C,a))return;let b=null;if(_===0&&(b=oy(m,n,C),_=b?2:1),b){const w=b[0];ui(w,b[1],n);return}if(!s&&_===1){c=Nt.uniqueId(),s=xv(n,[C],r==null?void 0:r.defaultValue),Ur(c,s);return}else if(s&&c&&_===1){s=ty(s,C),Ht(n,c,s);return}}return i.onDragStart=h=>{c=null,s=null,_=0,h.event.shiftKey&&(_=1),v(h)},i.onDrag=h=>{v(h)},i.onDragEnd=()=>{c&&s&&Fr(c,s,n,!1),c=null},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:()=>{},keyUp:()=>{}}}const ID=[x.CORNER_LINE_CONSTRAINT,x.CORNER_LINE_TOOL,x.LOCAL_CONSTRAINT],bD={getInputHandler(t,e,n){return ED(t,e,n)},toolId:d.MAZE_WALL,order:P.EDGE_TOOLS,shape:{type:H.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:ID}},Tt={[d.GIVEN]:jA,[d.DIGIT]:VA,[d.REGIONS]:KA,[d.OUTSIDE]:QA,[d.CORNER_PM]:XA,[d.CENTER_PM]:qA,[d.HIGHLIGHTS]:ZA,[d.FOG]:JA,[d.PEN_TOOL]:eS,[d.SUDOKU_RULES_DO_NOT_APPLY]:vN,[d.LEAVE_EMPTY_CELLS_EMPTY]:pN,[d.LITS]:EN,[d.HEXED_SUDOKU]:mN,[d.FILLOMINO]:CN,[d.ANTIKNIGHT]:IN,[d.ANTIKING]:wN,[d.ANTI_GIRAFFE]:bN,[d.DISJOINT_GROUPS]:ON,[d.TANGO]:LN,[d.NONCONSECUTIVE]:yN,[d.NONRATIO]:AN,[d.ANTI_ENTROPY]:kN,[d.GLOBAL_INDEXING_COLUMN]:GN,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:MN,[d.NEGATIVE_DIAGONAL]:SN,[d.POSITIVE_DIAGONAL]:NN,[d.NEGATIVE_ANTIDIAGONAL]:xN,[d.POSITIVE_ANTIDIAGONAL]:TN,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:RN,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:DN,[d.ALL_RATIOS_GIVEN]:UN,[d.ALL_DIFFERENCES_GIVEN]:FN,[d.ALL_X_GIVEN]:$N,[d.ALL_V_GIVEN]:HN,[d.ALL_XV_GIVEN]:PN,[d.ALL_RADARS_GIVEN]:BN,[d.ALL_XY_DIFFERENCES_GIVEN]:WN,[d.ALL_INDEXING_COLUMN_GIVEN]:zN,[d.ALL_INDEXING_ROW_GIVEN]:YN,[d.ALL_YIN_YANG_KROPKI_GIVEN]:jN,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:VN,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:XN,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:qN,[d.CAVE_CELLS_ARE_ODD]:Ax,[d.CAVE_WALLS_ARE_EVEN]:yx,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:Ox,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:Lx,[d.DOUBLERS]:vD,[d.NEGATORS]:pD,[d.NEXUS]:mD,[d.INDEXER_CELLS]:CD,[d.UNKNOWN_REGIONS]:ZN,[d.CHAOS_CONSTRUCTION_SUGURU]:QN,[d.YIN_YANG]:JN,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:ex,[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]:tx,[d.NURIMISAKI]:nx,[d.NURIKABE]:rx,[d.NURIKABE_NO_REPEATS_IN_ISLANDS]:ix,[d.TWO_CONTIGUOUS_REGIONS]:ox,[d.SASHIGANE]:ax,[d.GOLDILOCKS_ZONE]:sx,[d.CELL_CENTER_LOOP_NO_TOUCHING]:lx,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:cx,[d.NOT_LOOP_SIZED_REGIONS]:_x,[d.MODULAR_LOOP]:fx,[d.CAVE]:bx,[d.CAVE_LITS]:Sx,[d.RENBAN_CAVES]:Nx,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:wx,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:KN,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:ux,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:dx,[d.GALAXIES]:Tx,[d.TWO_SYMMETRIC_GALAXIES]:kx,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:Rx,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:Dx,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:Gx,[d.PENTOMINO_TILLING]:Mx,[d.TILLING_NO_EMPTY_CELLS]:Ux,[d.LITS_BLACK_WHITE_STAR_BATTLE]:Fx,[d.MAZE_DIRECTED_PATH]:gx,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:hx,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:Cx,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:vx,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:mx,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:Ex,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:Ix,[d.DIRECTED_PATH_IS_PARITY_LINE]:px,[d.CONNECT_FOUR]:$x,[d.CONNECT_FOUR_DRAW]:Hx,[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY]:Px,[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3]:Bx,[d.ODD]:nR,[d.EVEN]:rR,[d.MINIMUM]:iR,[d.MAXIMUM]:oR,[d.ODD_MINESWEEPER]:aR,[d.EVEN_MINESWEEPER]:sR,[d.WATCHTOWER]:cR,[d.NOT_WATCHTOWER]:uR,[d.FARSIGHT]:dR,[d.RADAR]:_R,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:lR,[d.ORTHOGONAL_SUM]:fR,[d.DIAGONALLY_ADJACENT_SUM]:CR,[d.INDEXING_COLUMN]:gR,[d.INDEXING_ROW]:hR,[d.LOW_DIGIT]:vR,[d.HIGH_DIGIT]:pR,[d.FRIENDLY_CELL]:mR,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:ER,[d.SANDWICH_ROW_COL_COUNT]:IR,[d.COUNTING_CIRCLES]:bR,[d.REVERSE_COUNTING_CIRCLES]:wR,[d.COLORED_COUNTING_CIRCLES]:OR,[d.UNIQUE_CELLS]:LR,[d.SEEN_EVEN_COUNT]:yR,[d.SEEN_ODD_COUNT]:AR,[d.YIN_YANG_MINESWEEPER]:SR,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:NR,[d.YIN_YANG_SEEN_SHADED_CELLS]:xR,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:TR,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:RR,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:DR,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:kR,[d.SEEN_REGION_BORDERS_COUNT]:GR,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:MR,[d.SASHIGANE_BEND_REGION_COUNT]:UR,[d.SASHIGANE_REGION_SUM]:HR,[d.CELL_ON_THE_LOOP]:PR,[d.CELL_NOT_ON_THE_LOOP]:BR,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:WR,[d.CAVE_CLUE]:YR,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:zR,[d.YIN_YANG_FILLOMINO_PARITY]:xx,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:jR,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:VR,[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:KR,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:QR,[d.DIRECTED_PATH_START]:XR,[d.DIRECTED_PATH_END]:qR,[d.TELEPORT]:ZR,[d.CONNECT_FOUR_YELLOW]:tD,[d.CONENCT_FOUR_RED]:nD,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:FR,[d.THERMO_SIGHTLINE_LOOP_ARROW]:$R,[d.HOT_ARROWS]:uD,[d.COLD_ARROWS]:cD,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:lD,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:aD,[d.YIN_YANG_COUNT_SHADED_CELLS]:sD,[d.LOOP_CELL_COUNT_ARROWS]:oD,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:iD,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:rD,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:dD,[d.NURIKABE_SEEN_WATERWAY_CELLS]:JR,[d.NURIKABE_ISLAND_SIZE_CELL]:eD,[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:_D,[d.DIFFERENCE]:wS,[d.RATIO]:bS,[d.XV]:LS,[d.EDGE_INEQUALITY]:yS,[d.EDGE_SUM]:OS,[d.EDGE_PRODUCT]:AS,[d.EDGE_MODULO]:SS,[d.EDGE_FACTOR]:NS,[d.XY_DIFFERENCES]:xS,[d.YIN_YANG_WHITE_KROPKI]:TS,[d.YIN_YANG_KROPKI]:RS,[d.FILLOMINO_REGION_BORDER]:DS,[d.UNKNOWN_REGION_BORDER]:kS,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:GS,[d.EDGE_CAVE_ONE_OF_EACH]:MS,[d.ONE_WAY_DOOR]:US,[d.QUADRUPLE]:uS,[d.CORNER_SUM]:dS,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:_S,[d.CORNER_EVEN_COUNT]:fS,[d.PRODUCT_SQUARE]:gS,[d.EQUAL_DIAGONAL_DIFFERENCES]:hS,[d.THERMOMETER]:Wx,[d.FUZZY_THERMOMETER]:Yx,[d.SLOW_THERMOMETER]:jx,[d.CUSTOM_THERMOMETER]:zx,[d.ROW_CYCLE_THERMOMETER]:Vx,[d.PALINDROME]:Kx,[d.RENBAN_LINE]:Xx,[d.DOUBLE_RENBAN_LINE]:qx,[d.RENRENBANBAN_LINE]:Zx,[d.N_CONSECUTIVE_RENBAN_LINE]:Qx,[d.NABNER_LINE]:Jx,[d.WHISPERS_LINE]:eT,[d.DUTCH_WHISPERS]:tT,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:nT,[d.RENBAN_OR_WHISPERS_LINE]:rT,[d.RENBAN_OR_NABNER_LINE]:iT,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:oT,[d.INDEX_LINE]:aT,[d.UNIQUE_VALUES_LINE]:sT,[d.REPEATED_DIGITS_LINE]:IT,[d.REGION_SUM_LINE]:lT,[d.SUM_LINE]:cT,[d.XV_LINE]:LT,[d.ROW_SUM_LINE]:yT,[d.AT_LEAST_X_LINE]:AT,[d.SUPERFUZZY_ARROW]:bT,[d.AMBIGUOUS_ARROW]:wT,[d.HEADLESS_ARROW]:OT,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:ST,[d.PRODUCT_LINE]:NT,[d.ADJACENT_MULTIPLES_LINE]:xT,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:TT,[d.LOOK_AND_SAY_LINE]:RT,[d.ARITHMETIC_SEQUENCE_LINE]:uT,[d.ZIPPER_LINE]:DT,[d.SEGMENTED_SUM_LINE]:kT,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:GT,[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:MT,[d.SAME_PARITY_LINE]:dT,[d.MODULAR_LINE]:_T,[d.UNIMODULAR_LINE]:fT,[d.MODULAR_OR_UNIMODULAR_LINE]:gT,[d.ODD_EVEN_OSCILLATOR_LINE]:hT,[d.HIGH_LOW_OSCILLATOR_LINE]:vT,[d.ENTROPIC_LINE]:pT,[d.ENTROPIC_OR_MODULAR_LINE]:mT,[d.INDEXING_COLUMN_IS_X_LINE]:CT,[d.INDEXING_ROW_IS_X_LINE]:ET,[d.INDEXER_CELLS_REGION_SUBSET_LINE]:UT,[d.PEAPODS]:FT,[d.YIN_YANG_INDEXING_LINE_COLORING]:WT,[d.YIN_YANG_SHADED_WHISPERS_LINE]:$T,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:HT,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:PT,[d.YIN_YANG_REGION_SUM_LINE]:BT,[d.GOLDILOCKS_ZONE_REGION_SUM]:zT,[d.BETWEEN_LINE]:YT,[d.LOCKOUT_LINE]:jT,[d.PARITY_COUNT_LINE]:KT,[d.TIGHTROPE_LINE]:VT,[d.DOUBLE_ARROW_LINE]:XT,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:qT,[d.SPLIT_PEAS]:ZT,[d.DOUBLERS_THERMOMETER]:QT,[d.DOUBLERS_BETWEEN_LINE]:JT,[d.DOUBLERS_DOUBLE_ARROW_LINE]:eR,[d.ARROW]:Jy,[d.CHAOS_CONSTRUCTION_ARROW]:nA,[d.AVERAGE_ARROW]:eA,[d.BULBOUS_ARROW]:tA,[d.MAZE_WALL]:bD,[d.KILLER_CAGE]:pA,[d.UNIQUE_DIGITS_CAGE]:mA,[d.INVERTED_KILLER_CAGE]:CA,[d.SUM_CAGE]:EA,[d.SUM_CAGE_LOOK_AND_SAY]:IA,[d.PARITY_BALANCE_CAGE]:bA,[d.DIVISIBLE_KILLER_CAGE]:wA,[d.SPOTLIGHT_CAGE]:OA,[d.PUTTERIA_CAGE]:LA,[d.MULTISET_CAGE]:yA,[d.VAULTED_CAGE]:AA,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:SA,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:NA,[d.DOUBLERS_KILLER_CAGE]:xA,[d.NEGATORS_KILLER_CAGE]:TA,[d.CLONE_REGION]:lS,[d.SANDWICH_SUM]:zS,[d.X_SUM]:jS,[d.SHORTSIGHTED_X_SUM]:VS,[d.SHIFTED_X_SUM]:KS,[d.BROKEN_X_SUM]:XS,[d.X_SUM_SKYSCRAPERS]:qS,[d.BATTLEFIELD]:ZS,[d.SKYSCRAPERS]:QS,[d.X_INDEX]:JS,[d.SANDWICH_SUM_XOR_X_SUM]:YS,[d.RISING_STREAK]:eN,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:tN,[d.OUTSIDE_CONSECUTIVE_SUM]:nN,[d.LOOPWICHES]:rN,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:iN,[d.LITTLE_KILLER_SUM]:FS,[d.LITTLE_KILLER_PRODUCT]:$S,[d.LITTLE_KILLER_LOOK_AND_SAY]:HS,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:BS,[d.X_OMIT_LITTLE_KILLER_SUM]:PS,[d.NEGATORS_LITTLE_KILLER_SUM]:WS,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:tS,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:nS,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:fD,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:gD,[d.FORBIDDEN_KNIGHT_SUM]:hD,[d.COSMETIC_CELL_SHAPE]:oN,[d.COSMETIC_CELL_ARROW]:aN,[d.COSMETIC_CELL_MULTI_ARROW]:sN,[d.COSMETIC_EDGE]:lN,[d.COSMETIC_CORNER]:cN,[d.COSMETIC_LINE]:uN,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:dN,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:_N,[d.COSMETIC_ARROW]:gN,[d.COSMETIC_CAGE]:fN,[d.COSMETIC_OUTSIDE_DIRECTION]:hN};var wD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function qv(t){var e=wD();R(t,e)}var OD=ie('<button class="remove-button svelte-17rdl63"><!></button>');function LD(t,e){let n=U(e,"onTrash",8,()=>{});var r=OD(),i=V(r);qv(i),Y(r),Ue("click",r,Qn(function(...a){var s;(s=n())==null||s.apply(this,a)})),R(t,r)}var yD=ie('<input type="radio" class="radio-select-button svelte-3561wl">'),AD=ie('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function _a(t,e){var ee,ce;ae(e,!1);const n=it(),r=()=>Ee(Qt,"$toolStore",n),i=[];let a=U(e,"elementInfo",8),s=U(e,"onClick",12,void 0),c=U(e,"onTrash",8,void 0);const u=a().toolId,_=a().permanent??!1,v=((ee=a().menu)==null?void 0:ee.name)??a().toolId,g=!((ce=a().meta)!=null&&ce.categories.includes(x.GLOBAL_CONSTRAINT)),h=`label-${v}`;g&&s(()=>{Tr(u)});function m(){var Ce,_e;const J=(Ce=a().meta)==null?void 0:Ce.description,re=((_e=a().meta)==null?void 0:_e.usage)??Qy(u);let me;return J&&J.length&&(me=J),re.length&&(me?me=me+`

`+re:me=re),me}ge();var C=AD(),I=V(C);{var b=J=>{var re=yD();qt(re),A(re,"id",h),re.value=(re.__value=u)==null?"":u,el(i,[],re,()=>r(),me=>ba(Qt,me)),R(J,re)};he(I,J=>{g&&J(b)})}var w=$(I,2);te(()=>A(w,"title",m())),A(w,"aria-labelledby",h);var y=V(w),D=V(y),G=V(D);{var F=J=>{LD(J,{get onTrash(){return c()}})};he(G,J=>{_||J(F)})}Y(D);var B=$(D,2);A(B,"for",h),B.textContent=v,Y(y);var W=$(y,2),X=V(W);dt(X,e,"default",{}),Y(W),Y(w),Y(C),te(()=>Lt(C,"checked",u===r())),Ue("click",w,Qn(function(...J){var re;(re=s())==null||re.apply(this,J)})),R(t,C),se()}function Zv(t,e){ae(e,!1);const n=it(),r=()=>Ee(ht,"$localConstraintsStore",n);let i=U(e,"toolId",8),a=U(e,"elementHandlers",8);const s=()=>{ky(i());const u=r().get(i());if(!u)return;const _=$y(i()),v=Hy(i(),u),g=xa(_,v);gn(g)};ge();var c=Ze(()=>ai(i(),a()));_a(t,{get elementInfo(){return p(c)},onTrash:s}),se()}var SD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function ND(t){var e=SD();R(t,e)}var xD=ie('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function gl(t,e){let n=U(e,"isOpen",8,!0);var r=xD(),i=V(r);dt(i,e,"default",{}),Y(r),te(()=>{A(r,"aria-expanded",n()),Lt(r,"closed",!n())}),R(t,r)}var TD=ie('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function RD(t,e){ae(e,!1);const n=it(),r=()=>Ee(fo,"$svgRefStore",n),i=()=>Ee(ht,"$localConstraintsStore",n),a=()=>Ee(pr,"$currentConstraintStore",n),s=T();let c=U(e,"constraintId",8),u=U(e,"toolId",8);function _(){My(c(),u()),r().focus()}function v(){const w=i().getConstraint(u(),c());if(!w)return;const y=Ad(c(),u()),D=yd(c(),w),G=xa(y,D);gn(G)}k(()=>a(),()=>{var w;S(s,(w=a())==null?void 0:w.id)}),Ie(),ge();var g=TD(),h=V(g),m=V(h);Y(h);var C=$(h,2),I=V(C),b=V(I);qv(b),Y(I),Y(C),Y(g),te(()=>{Lt(g,"active",c()===p(s)),nt(m,`ID: ${c()??""}`)}),Ue("click",I,Qn(v)),Ue("click",g,_),R(t,g),se()}var DD=ie('<div class="constraint-list svelte-w5npcu"></div>');function Qv(t,e){ae(e,!1);const n=it(),r=()=>Ee(ht,"$localConstraintsStore",n),i=()=>Ee(Qt,"$toolStore",n),a=T();let s=U(e,"toolId",8);k(()=>(r(),Z(s())),()=>{S(a,r().get(s()))}),Ie(),ge();var c=xe(),u=ue(c);{var _=v=>{var g=Ze(()=>s()===i());gl(v,{get isOpen(){return p(g)},children:(h,m)=>{var C=DD();st(C,5,()=>Object.entries(p(a)),I=>I[0],(I,b)=>{RD(I,{get constraintId(){return p(b)[0]},get toolId(){return s()}})}),Y(C),R(h,C)},$$slots:{default:!0}})};he(u,v=>{p(a)&&Object.entries(p(a)).length&&v(_)})}R(t,c),se()}var kD=ie('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function GD(t,e){let n=U(e,"title",8),r=U(e,"closeCb",8);var i=kD(),a=V(i),s=V(a,!0);Y(a);var c=$(a,2);Y(i),te(()=>nt(s,n())),Ue("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),R(t,i)}var MD=ie('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Br(t,e){ae(e,!1);let n=U(e,"showModal",12),r=U(e,"title",8),i=T();function a(){n(!1),p(i).close()}k(()=>(p(i),Z(n())),()=>{p(i)&&n()&&p(i).showModal()}),k(()=>(p(i),Z(n())),()=>{p(i)&&!n()&&p(i).close()}),Ie();var s=MD(),c=V(s),u=V(c);GD(u,{get title(){return r()},closeCb:a});var _=$(u,2),v=V(_),g=V(v);dt(g,e,"default",{}),Y(v),Y(_),Y(c),Y(s),Ri(s,h=>S(i,h),()=>p(i)),Ue("click",c,Qn(function(h){oO.call(this,e,h)})),Ue("close",s,()=>{n(!1)}),Ue("click",s,iO(Qn(()=>p(i).close()))),R(t,s),se()}var UD=ie('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function FD(t,e){ae(e,!1);let n=U(e,"searchPattern",12,""),r=U(e,"showModal",8),i=T(null);k(()=>(Z(r()),p(i)),()=>{r()&&p(i)&&p(i).focus()}),Ie();var a=UD(),s=$(V(a),2);qt(s),A(s,"spellcheck",!1),Ri(s,c=>S(i,c),()=>p(i)),Y(a),qn(s,n),R(t,a),se()}var $D=ie('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function HD(t,e){let n=U(e,"showModal",12),r=U(e,"searchPattern",12,""),i=U(e,"title",8);Br(t,{get title(){return i()},get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=$D(),u=V(c);FD(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(h){r(h)},$$legacy:!0});var _=$(u,2),v=V(_),g=V(v);dt(g,e,"default",{}),Y(v),Y(_),Y(c),R(a,c)},$$slots:{default:!0},$$legacy:!0})}var PD=ie('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),BD=ie('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function oi(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0),i=U(e,"isCollapsible",8,!1);var a=xe(),s=ue(a);{var c=_=>{var v=PD(),g=V(v),h=V(g),m=V(h,!0);Y(h),Y(g);var C=$(g,2),I=V(C);dt(I,e,"default",{}),Y(C),Y(v),te(()=>nt(m,n())),R(_,v)},u=_=>{var v=BD(),g=V(v),h=V(g),m=V(h,!0);Y(h),Y(g);var C=$(g,2),I=V(C);dt(I,e,"default",{});var b=$(I,2);Y(C),Y(v),te(()=>{nt(m,n()),Lt(b,"open",r())}),Ue("click",v,()=>r(!r())),R(_,v)};he(s,_=>{i()?_(u,!1):_(c)})}R(t,a)}var WD=ie('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),zD=ie('<ol class="svelte-cd45on"></ol>'),YD=ie("<!> <!>",1);function jD(t,e){ae(e,!1);const n=T();let r=U(e,"category",8),i=U(e,"addTool",8),a=U(e,"searchResults",8),s=T(!0);k(()=>(Z(a()),Z(r())),()=>{S(n,a().filter(v=>{var g,h;return(h=(g=v.info.meta)==null?void 0:g.categories)==null?void 0:h.includes(r())}))}),Ie(),ge();var c=xe(),u=ue(c);{var _=v=>{var g=YD(),h=ue(g);oi(h,{get title(){return r()},isCollapsible:!0,get isOpen(){return p(s)},set isOpen(C){S(s,C)},$$legacy:!0});var m=$(h,2);gl(m,{get isOpen(){return p(s)},children:(C,I)=>{var b=zD();st(b,5,()=>p(n),yt,(w,y)=>{let D=()=>p(y).key,G=()=>p(y).info;var F=WD(),B=V(F),W=V(B,!0);Y(B),Y(F),te(()=>{var X;A(B,"title",(X=G().meta)==null?void 0:X.description),nt(W,D())}),Ue("click",B,()=>{i()(D())}),R(w,F)}),Y(b),R(C,b)},$$slots:{default:!0}}),R(v,g)};he(u,v=>{p(n).length&&v(_)})}R(t,c),se()}function VD(t,e){ae(e,!1);const n=T();let r=U(e,"searchPattern",8,""),i=U(e,"addTool",8),a=U(e,"categories",8),s=U(e,"filterFunc",8),c=U(e,"elementHandlers",8);k(()=>(Z(r()),Z(s()),Z(c())),()=>{S(n,SL(r(),s(),c()))}),Ie(),ge();var u=xe(),_=ue(u);st(_,1,a,yt,(v,g)=>{jD(v,{get category(){return p(g)},get searchResults(){return p(n)},get addTool(){return i()}})}),R(t,u),se()}var KD=ie('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function hl(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8);var i=KD();A(i,"tabindex",0);var a=V(i),s=V(a);dt(s,e,"add-button",{}),Y(a);var c=$(a,2),u=V(c),_=V(u);dt(_,e,"title-icon",{}),Y(u);var v=$(u);Y(c);var g=$(c,2),h=V(g);Y(g),Y(i),te(()=>{nt(v,` ${r()??""}`),Lt(h,"open",n())}),Ue("click",i,()=>n(!n())),Ue("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),R(t,i)}var XD=ie('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function qD(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8),i=U(e,"showModal",12);function a(){i(!i())}hl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(s){n(s)},$$slots:{"add-button":(s,c)=>{var u=XD();Ue("click",u,Qn(()=>a())),R(s,u)},"title-icon":(s,c)=>{var u=xe(),_=ue(u);dt(_,e,"title-icon",{}),R(s,u)}},$$legacy:!0})}var ZD=ie('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),QD=ie('<div class="panel-container svelte-hixu4"><!> <!></div>');function vl(t,e){let n=U(e,"isOpen",8,!0);var r=QD(),i=V(r);dt(i,e,"panel-header",{});var a=$(i,2);gl(a,{get isOpen(){return n()},children:(s,c)=>{var u=ZD(),_=V(u);dt(_,e,"panel-content",{}),Y(u),R(s,u)},$$slots:{default:!0}}),Y(r),R(t,r)}var JD=ie("<!> <!>",1);function Dd(t,e){ae(e,!1);let n=U(e,"categories",8),r=U(e,"title",8),i=U(e,"onAddTool",8),a=U(e,"elementHandlerFilterFunc",8),s=U(e,"elementHandlers",8),c=T(!0),u=T(!1),_=T("");const v=g=>{S(u,!1),S(c,!0),i()(g)};ge(),vl(t,{get isOpen(){return p(c)},set isOpen(g){S(c,g)},$$slots:{"panel-header":(g,h)=>{var m=JD(),C=ue(m);qD(C,{get title(){return r()},get isOpen(){return p(c)},set isOpen(b){S(c,b)},get showModal(){return p(u)},set showModal(b){S(u,b)},$$slots:{"title-icon":(b,w)=>{var y=xe(),D=ue(y);dt(D,e,"title-icon",{}),R(b,y)}},$$legacy:!0});var I=$(C,2);HD(I,{get title(){return r()},get showModal(){return p(u)},set showModal(b){S(u,b)},get searchPattern(){return p(_)},set searchPattern(b){S(_,b)},children:(b,w)=>{VD(b,{get searchPattern(){return p(_)},get categories(){return n()},get filterFunc(){return a()},addTool:v,get elementHandlers(){return s()}})},$$slots:{default:!0},$$legacy:!0}),R(g,m)},"panel-content":(g,h)=>{var m=xe(),C=ue(m);dt(C,e,"panel-content",{}),R(g,m)}},$$legacy:!0}),se()}var e2=ie("<!> <!>",1);function t2(t,e){ae(e,!1);const n=it(),r=()=>Ee(ht,"$localConstraintsStore",n),i=T();let a=U(e,"elementHandlers",8);const s=[x.COSMETIC_TOOL],c=u=>{Wv(u),Tr(u)};k(()=>(r(),x),()=>{S(i,(u,_)=>{var h;const v=r().has(u);return!!((h=_.meta)!=null&&h.categories.includes(x.COSMETIC_TOOL))&&!v})}),Ie(),ge(),Dd(t,{title:"Cosmetic Tools",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{ND(u)},"panel-content":(u,_)=>{var v=xe(),g=ue(v);st(g,1,()=>r().entries(),([h,m])=>h,(h,m)=>{let C=()=>p(m)[0];var I=xe(),b=ue(I);{var w=y=>{var D=e2(),G=ue(D);Zv(G,{get toolId(){return C()},get elementHandlers(){return a()}});var F=$(G,2);Qv(F,{get toolId(){return C()}}),R(y,D)};he(b,y=>{wO(C())&&y(w)})}R(h,I)}),R(u,v)}}}),se()}var Jv=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Jv||{});const Hs=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),ep=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function n2(t,e){Mr.update(n=>n.setConstraint(t,e))}function r2(t){Mr.update(e=>e.removeConstraint(t))}function ah(t){t.type===Jv.REMOVE_GLOBAL_CONSTRAINT?r2(t.payload):n2(t.payload.tool,t.payload.value)}function Ru(t,e){return{execute:()=>{ah(t)},unExecute:()=>{ah(e)}}}var i2=ie('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function o2(t,e){let n=U(e,"value",8,!1);var r=i2(),i=V(r);qt(i),Y(r),te(()=>kh(i,n())),R(t,r)}function a2(t,e){ae(e,!1);let n=U(e,"toolId",8),r=U(e,"value",8,!1),i=U(e,"elementHandlers",8);const a=()=>{const u=Hs(n(),!r()),_=Hs(n(),r()),v=Ru(u,_);gn(v)},s=()=>{const u=ep(n()),_=Hs(n(),r()),v=Ru(u,_);gn(v)};ge();var c=Ze(()=>ai(n(),i()));_a(t,{get elementInfo(){return p(c)},onClick:a,onTrash:s,children:(u,_)=>{o2(u,{get value(){return r()}})},$$slots:{default:!0}}),se()}var s2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function l2(t){var e=s2();R(t,e)}function c2(t,e){ae(e,!1);const n=it(),r=()=>Ee(Mr,"$globalConstraintsStore",n),i=T();let a=U(e,"elementHandlers",8);const s=LO,c=u=>{const _=Hs(u,!0),v=ep(u),g=Ru(_,v);gn(g)};k(()=>r(),()=>{S(i,(u,_)=>{var h;const v=!!((h=_.meta)!=null&&h.categories.includes(x.GLOBAL_CONSTRAINT)),g=r().has(u);return v&&!g})}),Ie(),ge(),Dd(t,{title:"Global Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{l2(u)},"panel-content":(u,_)=>{var v=xe(),g=ue(v);st(g,1,()=>r().entries(),([h,m])=>h,(h,m)=>{let C=()=>p(m)[0],I=()=>p(m)[1];a2(h,{get toolId(){return C()},get value(){return I()},get elementHandlers(){return a()}})}),R(u,v)}}}),se()}var u2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function d2(t){var e=u2();R(t,e)}var _2=ie("<!> <!>",1),f2=ie("<!> <!> <!> <!>",1);function g2(t,e){ae(e,!1);const n=it(),r=()=>Ee(ht,"$localConstraintsStore",n),i=T();let a=U(e,"elementHandlers",8);const s=OO,c=u=>{Wv(u),Tr(u)};k(()=>(r(),x),()=>{S(i,(u,_)=>{var h;const v=r().has(u);return!!((h=_.meta)!=null&&h.categories.includes(x.LOCAL_CONSTRAINT))&&!v})}),Ie(),ge(),Dd(t,{title:"Local Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{d2(u)},"panel-content":(u,_)=>{var v=f2(),g=ue(v),h=Ze(()=>ai(d.GIVEN,a()));_a(g,{get elementInfo(){return p(h)}});var m=$(g,2),C=Ze(()=>ai(d.REGIONS,a()));_a(m,{get elementInfo(){return p(C)}});var I=$(m,2),b=Ze(()=>ai(d.FOG,a()));_a(I,{get elementInfo(){return p(b)}});var w=$(I,2);st(w,1,()=>r().entries(),([y,D])=>y,(y,D)=>{let G=()=>p(D)[0];var F=xe(),B=ue(F);{var W=X=>{var ee=_2(),ce=ue(ee);Zv(ce,{get toolId(){return G()},get elementHandlers(){return a()}});var J=$(ce,2);Qv(J,{get toolId(){return G()}}),R(X,ee)};he(B,X=>{EO(G())&&X(W)})}R(y,F)}),R(u,v)}}}),se()}var h2=ie('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function du(t,e){ae(e,!1);const n=T();let r=U(e,"value",8),i=U(e,"onChangeCb",8,void 0),a=T(void 0);function s(m){const C=ou(m);C&&i()&&i()(C)}k(()=>Z(r()),()=>{S(n,r())}),k(()=>(p(n),ou),()=>{yu(p(n))&&S(a,ou(p(n)))}),Ie(),ge();var c=h2(),u=V(c);const _=Ze(()=>Tv(p(n)));var v=V(u);qt(v),Y(u);var g=$(u,2),h=$(V(g),2);qt(h),A(h,"spellcheck",!1),A(h,"maxlength",30),Y(g),Y(c),te(()=>{A(u,"style",`--choosen-color: ${p(a)??""}`),Lt(u,"transparent",p(_))}),qn(v,()=>p(n),m=>S(n,m)),Ue("change",v,()=>s(p(n))),qn(h,()=>p(n),m=>S(n,m)),Ue("input",h,()=>s(p(n))),R(t,c),se()}var v2=ie('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function fa(t,e){let n=U(e,"name",8);var r=v2(),i=V(r),a=V(i,!0);Y(i);var s=$(i,2);dt(s,e,"default",{}),Y(r),te(()=>nt(a,n())),R(t,r)}var p2=ie('<input class="control-slider svelte-1rsuho6" type="range">');function m2(t,e){ae(e,!1);let n=U(e,"min",8),r=U(e,"max",8),i=U(e,"value",12),a=U(e,"step",24,()=>(r()-n())/10),s=U(e,"onChangeCb",8,void 0),c=U(e,"onInputCb",8,void 0);ge();var u=p2();qt(u),te(()=>{A(u,"min",n()),A(u,"max",r()),A(u,"step",a())}),qn(u,i),Ue("change",u,()=>{s()&&s()(i())}),Ue("input",u,()=>{c()&&c()(i())}),R(t,u),se()}function ti(t,e){let n=U(e,"name",8),r=U(e,"value",12),i=U(e,"min",8),a=U(e,"max",8),s=U(e,"step",24,()=>(a()-i())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);fa(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,v)=>{m2(_,{get min(){return i()},get max(){return a()},get step(){return s()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var C2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function E2(t){var e=C2();R(t,e)}var I2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function b2(t){var e=I2();R(t,e)}var w2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function O2(t){var e=w2();R(t,e)}var L2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function y2(t){var e=L2();R(t,e)}var A2=ie('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function S2(t,e){ae(e,!1);const n=[];let r=U(e,"value",8),i=U(e,"selectedShape",12),a=U(e,"title",8),s=U(e,"updateShapeCb",8,void 0);ge();var c=A2(),u=V(c);qt(u);var _,v=$(u,2);dt(v,e,"default",{}),Y(c),te(()=>{A(c,"title",a()),Lt(c,"active",r()===i()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),el(n,[],u,()=>(r(),i()),i),Ue("change",u,()=>s()&&s()(r())),R(t,c),se()}var N2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function x2(t){var e=N2(),n=V(e);A(n,"cx",480),A(n,"cy",-480),A(n,"rx",480),A(n,"ry",300),Y(e),R(t,e)}var T2=ie('<div class="icon-wrapper svelte-18euf14"><!></div>'),R2=ie('<div class="radio-container svelte-18euf14"></div>');function D2(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"selectedShape",8),i=U(e,"possibleShapes",8),a=U(e,"updateShapeCb",8,void 0);const s=new Map([[H.CIRCLE,O2],[H.ELLIPSE,x2],[H.SQUARE,b2],[H.RECTANGLE,E2],[H.POLYGON,y2]]);ge(),fa(t,{get name(){return n()},children:(c,u)=>{var _=R2();st(_,5,i,yt,(v,g)=>{S2(v,{get title(){return p(g)},get value(){return p(g)},get selectedShape(){return r()},get updateShapeCb(){return a()},children:(h,m)=>{var C=xe(),I=ue(C);{var b=w=>{var y=T2(),D=V(y);Ah(D,()=>s.get(p(g)),(G,F)=>{F(G,{})}),Y(y),R(w,y)};he(I,w=>{s.has(p(g))&&w(b)})}R(h,C)},$$slots:{default:!0}})}),Y(_),R(c,_)},$$slots:{default:!0}}),se()}var k2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function G2(t){var e=k2();R(t,e)}var M2=ie('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),U2=ie("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function F2(t,e){ae(e,!1);const n=it(),r=()=>Ee(Qt,"$toolStore",n),i=()=>Ee(pr,"$currentConstraintStore",n),a=T(),s=T(),c=T();let u=T(!0),_=U(e,"elementHandlers",8);function v(b,w){const y=(b==null?void 0:b.shape)??(w?mu(w):void 0);return su(y),y}function g(b,w){p(c)&&(Uw(c,p(c)[b]=w),su(p(c)))}function h(){p(s)&&(S(c,mu(p(s))),su(p(c)))}function m(b){return b&&[H.CIRCLE,H.SQUARE,H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(b)}function C(b){return b&&[H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[H.ELLIPSE,H.RECTANGLE].includes(b)}k(()=>(r(),Z(_())),()=>{S(a,ai(r(),_()))}),k(()=>p(a),()=>{S(s,p(a).shape)}),k(()=>(i(),p(s)),()=>{var b;S(c,v(((b=i())==null?void 0:b.constraint)??null,p(s)))}),Ie(),ge(),vl(t,{get isOpen(){return p(u)},set isOpen(b){S(u,b)},$$slots:{"panel-header":(b,w)=>{hl(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return p(u)},set isOpen(y){S(u,y)},$$slots:{"title-icon":(y,D)=>{G2(y)}},$$legacy:!0})},"panel-content":(b,w)=>{var y=xe(),D=ue(y);{var G=F=>{var B=U2(),W=ue(B);{var X=De=>{var be=M2();Ue("click",be,h),R(De,be)};he(W,De=>{kO(p(s))&&De(X)})}var ee=$(W,2);{var ce=De=>{D2(De,{get possibleShapes(){return p(s).allowedTypes},name:"Shape",get selectedShape(){return p(c).type},updateShapeCb:be=>g("type",be)})};he(ee,De=>{var be;p(s).allowedTypes&&p(s).allowedTypes.length&&((be=p(c))!=null&&be.type)&&De(ce)})}var J=$(ee,2);{var re=De=>{var be=Ze(()=>p(s).n.lb??3),ke=Ze(()=>p(s).n.ub??10);ti(De,{name:"Number of Sides",get value(){return p(c).n},get min(){return p(be)},get max(){return p(ke)},step:1,onChangeCb:Re=>g("n",Re)})};he(J,De=>{var be,ke,Re;((be=p(c))==null?void 0:be.n)!==void 0&&((Re=(ke=p(s))==null?void 0:ke.n)!=null&&Re.editable)&&C(p(c).type)&&De(re)})}var me=$(J,2);{var Ce=De=>{var be=Ze(()=>p(s).r.lb??0),ke=Ze(()=>p(s).r.ub??1),Re=Ze(()=>p(s).r.step??.05);ti(De,{name:"Radius",get value(){return p(c).r},get min(){return p(be)},get max(){return p(ke)},get step(){return p(Re)},onChangeCb:At=>g("r",At)})};he(me,De=>{var be,ke,Re;((be=p(c))==null?void 0:be.r)!==void 0&&((Re=(ke=p(s))==null?void 0:ke.r)!=null&&Re.editable)&&m(p(c).type)&&De(Ce)})}var _e=$(me,2);{var Se=De=>{var be=Ze(()=>p(s).width.lb??0),ke=Ze(()=>p(s).width.ub??1),Re=Ze(()=>p(s).width.step??.05);ti(De,{name:"Width",get value(){return p(c).width},get min(){return p(be)},get max(){return p(ke)},get step(){return p(Re)},onChangeCb:At=>g("width",At)})};he(_e,De=>{var be,ke,Re;((be=p(c))==null?void 0:be.width)!==void 0&&((Re=(ke=p(s))==null?void 0:ke.width)!=null&&Re.editable)&&I(p(c).type)&&De(Se)})}var Ve=$(_e,2);{var Ae=De=>{var be=Ze(()=>p(s).height.lb??0),ke=Ze(()=>p(s).height.ub??1),Re=Ze(()=>p(s).height.step??.05);ti(De,{name:"Height",get value(){return p(c).height},get min(){return p(be)},get max(){return p(ke)},get step(){return p(Re)},onChangeCb:At=>g("height",At)})};he(Ve,De=>{var be,ke,Re;((be=p(c))==null?void 0:be.height)!==void 0&&((Re=(ke=p(s))==null?void 0:ke.height)!=null&&Re.editable)&&I(p(c).type)&&De(Ae)})}var Le=$(Ve,2);{var ct=De=>{var be=Ze(()=>p(s).angle.lb??0),ke=Ze(()=>p(s).angle.ub??360),Re=Ze(()=>p(s).angle.step??15);ti(De,{name:"Angle",get value(){return p(c).angle},get min(){return p(be)},get max(){return p(ke)},get step(){return p(Re)},onChangeCb:At=>g("angle",At)})};he(Le,De=>{var be,ke,Re;((be=p(c))==null?void 0:be.angle)!==void 0&&((Re=(ke=p(s))==null?void 0:ke.angle)!=null&&Re.editable)&&De(ct)})}var Ke=$(Le,2);{var An=De=>{var be=Ze(()=>p(s).inset.lb??0),ke=Ze(()=>p(s).inset.ub??.5),Re=Ze(()=>p(s).inset.step??.01);ti(De,{name:"Inset",get value(){return p(c).inset},get min(){return p(be)},get max(){return p(ke)},get step(){return p(Re)},onChangeCb:At=>g("inset",At)})};he(Ke,De=>{var be,ke,Re;((be=p(c))==null?void 0:be.inset)!==void 0&&((Re=(ke=p(s))==null?void 0:ke.inset)!=null&&Re.editable)&&De(An)})}var Hn=$(Ke,2);{var zr=De=>{fa(De,{name:"Stroke",children:(be,ke)=>{du(be,{get value(){return p(c).stroke},onChangeCb:Re=>g("stroke",Re)})},$$slots:{default:!0}})};he(Hn,De=>{var be,ke,Re;((be=p(c))==null?void 0:be.stroke)!==void 0&&((Re=(ke=p(s))==null?void 0:ke.stroke)!=null&&Re.editable)&&De(zr)})}var tn=$(Hn,2);{var Ir=De=>{var be=Ze(()=>p(s).strokeWidth.lb??0),ke=Ze(()=>p(s).strokeWidth.ub??.8),Re=Ze(()=>p(s).strokeWidth.step??.01);ti(De,{name:"Stroke Width",get value(){return p(c).strokeWidth},get min(){return p(be)},get max(){return p(ke)},get step(){return p(Re)},onChangeCb:At=>g("strokeWidth",At)})};he(tn,De=>{var be,ke,Re;((be=p(c))==null?void 0:be.strokeWidth)!==void 0&&((Re=(ke=p(s))==null?void 0:ke.strokeWidth)!=null&&Re.editable)&&De(Ir)})}var vi=$(tn,2);{var lr=De=>{var be=Ze(()=>p(s).strokeDasharray.lb??0),ke=Ze(()=>p(s).strokeDasharray.ub??1),Re=Ze(()=>p(s).strokeDasharray.step??.01);ti(De,{name:"Stroke Dasharray",get value(){return p(c).strokeDasharray},get min(){return p(be)},get max(){return p(ke)},get step(){return p(Re)},onChangeCb:At=>g("strokeDasharray",At)})};he(vi,De=>{var be,ke,Re;((be=p(c))==null?void 0:be.strokeDasharray)!==void 0&&((Re=(ke=p(s))==null?void 0:ke.strokeDasharray)!=null&&Re.editable)&&De(lr)})}var Pn=$(vi,2);{var Bi=De=>{fa(De,{name:"Fill",children:(be,ke)=>{du(be,{get value(){return p(c).fill},onChangeCb:Re=>g("fill",Re)})},$$slots:{default:!0}})};he(Pn,De=>{var be,ke,Re;((be=p(c))==null?void 0:be.fill)!==void 0&&((Re=(ke=p(s))==null?void 0:ke.fill)!=null&&Re.editable)&&De(Bi)})}var Yr=$(Pn,2);{var kt=De=>{fa(De,{name:"Font Color",children:(be,ke)=>{du(be,{get value(){return p(c).fontColor},onChangeCb:Re=>g("fontColor",Re)})},$$slots:{default:!0}})};he(Yr,De=>{var be,ke,Re;((be=p(c))==null?void 0:be.fontColor)!==void 0&&((Re=(ke=p(s))==null?void 0:ke.fontColor)!=null&&Re.editable)&&De(kt)})}R(F,B)};he(D,F=>{p(s)&&F(G)})}R(b,y)}},$$legacy:!0}),se()}var $2=ie('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function ka(t,e){let n=U(e,"clickCb",8),r=U(e,"title",8);var i=$2(),a=V(i),s=V(a);dt(s,e,"default",{}),Y(a),Y(i),te(()=>A(i,"title",r())),Ue("click",i,Qn(function(...c){var u;(u=n())==null||u.apply(this,c)})),R(t,i)}var H2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function P2(t){var e=H2();R(t,e)}var B2=ie('<div class="buttons-container svelte-kc00rw"><!></div>');function pl(t,e){var n=B2(),r=V(n);dt(r,e,"default",{}),Y(n),R(t,n)}var W2=ie('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),z2=ie('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),Y2=ie('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function j2(t,e){ae(e,!1);const n=it(),r=()=>Ee(Gr,"$puzzleMetaStore",n),i=()=>Ee(Mr,"$globalConstraintsStore",n),a=()=>Ee(ht,"$localConstraintsStore",n);let s=U(e,"showModal",12,!1),c=T(""),u=T(""),_=T(""),v=T(""),g=T("");function h(){s(!1)}function m(){const w=p(u)?C(p(u)):["Anonymous"],D={title:p(c)?p(c):"Sudoku",authors:w,ruleset:p(_),ctcYoutubeUrl:p(v),ctcUrl:p(g)};Ry(D),s(!1)}function C(w){return w.split(/\s*[;]\s*/)}function I(){var B,W,X,ee;let w="";const y=Tt,D=i();!!D.get(d.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[ce,J]of D.entries())if(ce!==d.SUDOKU_RULES_DO_NOT_APPLY&&J){const re=y[ce],me=((B=re.menu)==null?void 0:B.name)??re.toolId,Ce=(W=re.meta)==null?void 0:W.description;w+=`**${me}**: ${Ce}

`}const F=a();for(const[ce,J]of F.entries())if(Object.keys(J).length>0){const me=y[ce],Ce=((X=me.menu)==null?void 0:X.name)??me.toolId,_e=(ee=me.meta)==null?void 0:ee.description;w+=`**${Ce}**: ${_e}

`}return w.trim()}function b(){const w=I();S(_,w)}k(()=>(Z(s()),r(),Ws),()=>{if(!s()){const w=r().authors;S(c,r().title??""),S(u,w?Ws(w,"; ","; "):""),S(_,r().ruleset??""),S(v,r().ctcYoutubeUrl??""),S(g,r().ctcUrl??"")}}),Ie(),ge(),Br(t,{title:"Edit Puzzle Meta",get showModal(){return s()},set showModal(w){s(w)},children:(w,y)=>{var D=Y2(),G=V(D);oi(G,{title:"Title"});var F=$(G,2);qt(F);var B=$(F,2);oi(B,{title:"Authors"});var W=$(B,2);qt(W);var X=$(W,2);oi(X,{title:"Ruleset",children:(_e,Se)=>{var Ve=W2();Ue("click",Ve,b),R(_e,Ve)},$$slots:{default:!0}});var ee=$(X,2);Vw(ee),A(ee,"rows",8);var ce=$(ee,2);oi(ce,{title:"CTC Link"});var J=$(ce,2);qt(J);var re=$(J,2);oi(re,{title:"CTC Youtube Link"});var me=$(re,2);qt(me);var Ce=$(me,2);pl(Ce,{children:(_e,Se)=>{var Ve=z2(),Ae=ue(Ve),Le=$(Ae,2);Ue("click",Ae,m),Ue("click",Le,h),R(_e,Ve)},$$slots:{default:!0}}),Y(D),qn(F,()=>p(c),_e=>S(c,_e)),qn(W,()=>p(u),_e=>S(u,_e)),qn(ee,()=>p(_),_e=>S(_,_e)),qn(J,()=>p(g),_e=>S(g,_e)),qn(me,()=>p(v),_e=>S(v,_e)),R(w,D)},$$slots:{default:!0},$$legacy:!0}),se()}var V2=ie("<!> <!>",1);function K2(t){let e=T(!1);function n(){S(e,!0)}var r=V2(),i=ue(r);ka(i,{title:"Edit Puzzle Meta",clickCb:n,children:(s,c)=>{P2(s)},$$slots:{default:!0}});var a=$(i,2);j2(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),R(t,r)}var X2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function q2(t){var e=X2();R(t,e)}var Z2=ie('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function Q2(t,e){ae(e,!1);let n=T(null),r=T(null);function i(){var a;(a=p(n))==null||a.click()}k(()=>(p(r),js),()=>{if(p(r)&&p(r).length){const a=p(r)[0],s=new FileReader;s.readAsText(a),s.onload=function(c){if(c.target||alert(s.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),v=vy(_);console.log(v),Fy(v),js()}},s.onerror=function(){alert(s.error)}}}),Ie(),ge(),ka(t,{title:"Open Puzzle",clickCb:i,children:(a,s)=>{var c=Z2(),u=ue(c);q2(u);var _=$(u,2);Ri(_,v=>S(n,v),()=>p(n)),rO(_,()=>p(r),v=>S(r,v)),R(a,c)},$$slots:{default:!0}}),se()}var J2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function ek(t){var e=J2();R(t,e)}var tk=ie('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function sh(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"min",8),i=U(e,"max",8),a=U(e,"value",12),s=U(e,"step",24,()=>(i()-r())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);ge();var _=tk(),v=V(_),g=V(v);Y(v);var h=$(v,2);qt(h),Y(_),te(()=>{nt(g,`${n()??""}: ${a()??""}`),A(h,"min",r()),A(h,"max",i()),A(h,"step",s())}),qn(h,a),Ue("change",h,()=>{c()&&c()(a())}),Ue("input",h,()=>{u()&&u()(a())}),R(t,_),se()}var nk=ie('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),rk=ie('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function ik(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);const r=4,i=20;let a=T(9),s=T(9),c=T(""),u=T(Nt.range(1,10));function _(){n(!1)}function v(){js(),Uy(p(s),p(a),p(u).sort()),n(!1)}function g(C){return C.map(b=>String(b)).join(",")}function h(){const C=Math.min(Math.max(p(s),p(a)),9);S(u,Nt.range(1,C+1))}function m(C){/^-?\d+(?:,-?\d+)*$/.test(C)&&S(u,C.replaceAll(" ","").split(",").map(Number))}ge(),Br(t,{title:"New Puzzle",get showModal(){return n()},set showModal(C){n(C)},children:(C,I)=>{var b=rk(),w=V(b);sh(w,{name:"Width",min:r,max:i,step:1,onInputCb:h,get value(){return p(a)},set value(W){S(a,W)},$$legacy:!0});var y=$(w,2);sh(y,{name:"Height",min:r,max:i,step:1,onInputCb:h,get value(){return p(s)},set value(W){S(s,W)},$$legacy:!0});var D=$(y,2),G=Ze(()=>`Allowed Digits (for the solver): ${g(p(u))}`);oi(D,{get title(){return p(G)}});var F=$(D,2);qt(F),te(()=>A(F,"placeholder",g(p(u))));var B=$(F,2);pl(B,{children:(W,X)=>{var ee=nk(),ce=ue(ee),J=$(ce,2);Ue("click",ce,v),Ue("click",J,_),R(W,ee)},$$slots:{default:!0}}),Y(b),qn(F,()=>p(c),W=>S(c,W)),Ue("input",F,()=>m(p(c))),R(C,b)},$$slots:{default:!0},$$legacy:!0}),se()}var ok=ie("<!> <!>",1);function ak(t){let e=T(!1);function n(){S(e,!0)}var r=ok(),i=ue(r);ka(i,{title:"New Puzzle",clickCb:n,children:(s,c)=>{ek(s)},$$slots:{default:!0}});var a=$(i,2);ik(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),R(t,r)}var sk=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function lk(t){var e=sk();R(t,e)}var ck=ie('<button class="modal-button">Cancel</button>'),uk=ie('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function dk(t,e){ae(e,!1);const n=it(),r=()=>Ee(fo,"$svgRefStore",n),i=()=>Ee(Na,"$puzzleStore",n),a=()=>Ee(Gr,"$puzzleMetaStore",n),s=T();let c=U(e,"showModal",12,!1);function u(b){const w=getComputedStyle(b);let y="";for(let D of w){const G=w.getPropertyValue(D);G&&(y+=`${D}:${G};`)}return y}function _(b){const w=b.cloneNode(!0);(w instanceof SVGElement||w instanceof HTMLElement)&&(w.style.cssText=u(b));const y=b.childNodes;for(let D=0;D<y.length;D++){const G=y[D];if(G instanceof Element){const F=_(G);w.replaceChild(F,w.childNodes[D])}}return w}function v(b,w="download.png"){const y=_(b),G=new XMLSerializer().serializeToString(y),F=new Image,B=new Blob([G],{type:"image/svg+xml;charset=utf-8"}),W=URL.createObjectURL(B);F.onload=()=>{const X=b.getBoundingClientRect(),ee=X.width,ce=X.height,J=document.createElement("canvas"),re=window.devicePixelRatio||1;J.width=ee*re,J.height=ce*re;const me=J.getContext("2d");me&&(me.scale(re,re),me.drawImage(F,0,0,ee,ce),J.toBlob(Ce=>{if(!Ce)return;const _e=URL.createObjectURL(Ce),Se=document.createElement("a");Se.href=_e,Se.download=w,Se.click(),URL.revokeObjectURL(_e)}))},F.src=W}function g(b,w="download.svg"){const y=_(b);let G=new XMLSerializer().serializeToString(y);G.includes("<?xml")||(G=`<?xml version="1.0" standalone="no"?>\r
`+G);const F=new Blob([G],{type:"image/svg+xml"}),B=URL.createObjectURL(F),W=document.createElement("a");W.href=B,W.download=w,W.click(),URL.revokeObjectURL(B)}const h=()=>{const b=hy(i());return JSON.stringify(b,null,2)},m=()=>{function b(D,G,F){var B=document.createElement("a"),W=new Blob([D],{type:F});B.href=URL.createObjectURL(W),B.download=G,B.click(),URL.revokeObjectURL(B.href)}const w=h(),y=Au(a());b(w,`${y}.json`,"text/plain")};function C(){c(!1)}const I=1;k(()=>r(),()=>{S(s,r())}),Ie(),ge(),Br(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(b){c(b)},children:(b,w)=>{var y=uk(),D=V(y),G=V(D),F=V(G),B=$(F,2),W=$(B,2);Y(G);var X=$(G,2),ee=$(V(X),2),ce=V(ee);A(ce,"width",400*I),A(ce,"height",300*I),Y(ee),Y(X),Y(D);var J=$(D,2);pl(J,{children:(re,me)=>{var Ce=ck();Ue("click",Ce,C),R(re,Ce)},$$slots:{default:!0}}),Y(y),Ue("click",F,m),Ue("click",B,()=>v(p(s))),Ue("click",W,()=>g(p(s))),R(b,y)},$$slots:{default:!0},$$legacy:!0}),se()}var _k=ie("<!> <!>",1);function fk(t){let e=T(!1);function n(){S(e,!0)}var r=_k(),i=ue(r);ka(i,{title:"Save Puzzle",clickCb:n,children:(s,c)=>{lk(s)},$$slots:{default:!0}});var a=$(i,2);dk(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),R(t,r)}var gk=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function tp(t){var e=gk();R(t,e)}var hk=ie('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),vk=ie('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Ms(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0);var i=vk(),a=V(i);oi(a,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var s=$(a,2);gl(s,{get isOpen(){return r()},children:(c,u)=>{var _=hk(),v=V(_);dt(v,e,"default",{}),Y(_),R(c,_)},$$slots:{default:!0}}),Y(i),R(t,i)}var pk=ie('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function mk(t,e){let n=U(e,"value",8),r=U(e,"onClickCb",8),i=U(e,"disabled",8,!1);var a=pk(),s=V(a);qt(s),Ti(2),Y(a),te(()=>{Lt(a,"disabled",i()),kh(s,n()),s.disabled=i()}),Ue("change",s,function(...c){var u;(u=r())==null||u.apply(this,c)}),R(t,a)}var Ck=ie('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function ni(t,e){ae(e,!1);let n=U(e,"value",8),r=U(e,"name",8),i=U(e,"updateCb",8,void 0),a=U(e,"disabled",8,!1);function s(){a()||i()&&i()(!n())}ge();var c=Ck(),u=V(c);mk(u,{get value(){return n()},onClickCb:s,get disabled(){return a()}});var _=$(u,2),v=V(_,!0);Y(_),Y(c),te(()=>{Lt(c,"disabled",a()),nt(v,r())}),Ue("click",_,Qn(s)),R(t,c),se()}var Ek=ie("<!> <!>",1),Ik=ie("<!> <!> <!>",1),bk=ie("<!> <!>",1),wk=ie('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function np(t,e){ae(e,!1);const n=it(),r=()=>Ee(Yt,"$settingsStore",n),i=()=>Ee(ol,"$gameModeStore",n),a=T();let s=U(e,"showModal",12,!1);k(()=>r(),()=>{S(a,r())}),Ie(),ge(),Br(t,{title:"Settings",get showModal(){return s()},set showModal(c){s(c)},children:(c,u)=>{var _=wk(),v=V(_);Ms(v,{title:"General",children:(I,b)=>{ni(I,{get value(){return p(a).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:cO})},$$slots:{default:!0}});var g=$(v,2);Ms(g,{title:"Tools",children:(I,b)=>{var w=Ek(),y=ue(w);ni(y,{get value(){return p(a).penToolActive},name:"Pen Tool",updateCb:dO});var D=$(y,2);ni(D,{disabled:!0,get value(){return p(a).letterToolActive},name:"Letter Tool",updateCb:_O}),R(I,w)},$$slots:{default:!0}});var h=$(g,2);Ms(h,{title:"Gameplay",children:(I,b)=>{var w=Ik(),y=ue(w);ni(y,{name:"Check Conflicts",get value(){return p(a).checkConflicts},updateCb:gO});var D=$(y,2);ni(D,{name:"Highlight Pencilmark Conflicts",get value(){return p(a).highlightPencilmarkConflicts},updateCb:hO});var G=$(D,2);ni(G,{name:"Highlight Cells Seen By Selection",get value(){return p(a).highlightCellsSeenBySelection},updateCb:fO}),R(I,w)},$$slots:{default:!0}});var m=$(h,2);{var C=I=>{Ms(I,{title:"Setting Mode Display",children:(b,w)=>{var y=bk(),D=ue(y);ni(D,{name:"Hide Fog",get value(){return p(a).hideFog},updateCb:vO});var G=$(D,2);ni(G,{name:"Show Solution",get value(){return p(a).showSolution},updateCb:pO}),R(b,y)},$$slots:{default:!0}})};he(m,I=>{i()===po.SETTING&&I(C)})}Y(_),R(c,_)},$$slots:{default:!0},$$legacy:!0}),se()}var Ok=ie("<!> <!>",1);function Lk(t){let e=T(!1);function n(){S(e,!0)}var r=Ok(),i=ue(r);ka(i,{title:"Settings",clickCb:n,children:(s,c)=>{tp(s)},$$slots:{default:!0}});var a=$(i,2);np(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),R(t,r)}var yk=ie('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function Ak(t){var e=yk(),n=V(e);ak(n);var r=$(n,2);fk(r);var i=$(r,2);Q2(i,{});var a=$(i,2);K2(a);var s=$(a,2);Lk(s),Y(e),R(t,e)}var Sk=ie('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function Nk(t,e){ae(e,!1);let n=T(!1);function r(){const i=at(vn),a=[];for(let s=0;s<i.nRows;s++){const c=[];for(let u=0;u<i.nCols;u++){const _=i.getCell(s,u);if(!_)continue;const v=_.value;c.push(v)}a.push(c)}Ld(a)}ge(),vl(t,{get isOpen(){return p(n)},set isOpen(i){S(n,i)},$$slots:{"panel-header":(i,a)=>{hl(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return p(n)},set isOpen(s){S(n,s)},$$legacy:!0})},"panel-content":(i,a)=>{var s=Sk();Ue("click",s,r),R(i,s)}},$$legacy:!0}),se()}const xk={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function Tk(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],a=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[a,i]};if(i==="<"||i==="<=")return{upper_bound:[a,i]}}if(r=n.exec(t),r){const i=r[1],a=parseInt(r[2],10),s=parseInt(r[3],10),c=r[4];return{lower_bound:[a,i==="["?">=":">"],upper_bound:[s,c==="]"?"<=":"<"]}}return null}function Rk(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function Dk(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function rp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function kk(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=Rk(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=Dk(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const a=Tk(t);if(e.allow_interval&&a)return{type:"interval",parsed:a};const s=rp(t);return e.allow_var_list&&s?{type:"var_list",parsed:s}:null}var q=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(q||{});function Ct(t,e){return`${e}[${t.r},${t.c}]`}function Ga(t,e){return t.map(r=>Ct(r,e))}function pe(t,e){return"["+Ga(t,e).join(",")+"]"}function Oe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function lt(t){return t.map(n=>Oe(n))}function xi(t){return`constraint alldifferent([${t.join(",")}]);
`}function _t(t,e){return t&&(t=`
% ${e}
`+t),t}function ml(t,e){const n=[We.N,We.S,We.W,We.E],r=[];for(const i of n){const a=t.getCellsInDirection(e.r,e.c,i);r.push(a)}return r}function kd(t,e,n=void 0){n||(n=[We.N,We.S,We.W,We.E]);const r=[];for(const i of n){const a=t.getCellsInDirection(e.r,e.c,i),s="["+lt(a).join(",")+"]";r.push(s)}return r}function Cl(t,e,n,r){let i="";const a=r.get(e);if(a)for(const s of Object.values(n)){const c=a(t,s);i+=c}return i}class Gk{constructor(e){ve(this,"model_str","");ve(this,"used_vars");ve(this,"puzzle");ve(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=xk){const i=kk(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let a="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(a+=`var int: ${c};
`,this.addVariable(c)),[a,c]}if(!n)return null;if(this.hasVariable(n)||(a+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];a+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];a+=`constraint ${n} ${_} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";a+=`constraint member(${u}, ${n});
`}return i.type==="var_list"?null:[a,n]}}function Mk(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,a=/^test\s+(\w+)\s*\(/;let s=null,c=0,u=0;for(let I=0;I<e.length;I++){const b=e[I].trim(),w=b.match(r),y=b.match(i),D=b.match(a);if(w||y||D){s={name:(w||y||D)[1],startLine:I,content:[e[I]]},c=(b.match(/\(/g)||[]).length-(b.match(/\)/g)||[]).length,u=(b.match(/\{/g)||[]).length-(b.match(/\}/g)||[]).length;continue}if(s&&(s.content.push(e[I]),c+=(b.match(/\(/g)||[]).length-(b.match(/\)/g)||[]).length,u+=(b.match(/\{/g)||[]).length-(b.match(/\}/g)||[]).length,c===0&&u===0&&b.endsWith(";"))){n[s.name]={startLine:s.startLine,endLine:I,name:s.name,content:s.content};let G=s.startLine;for(;G>0&&e[G-1].trim().startsWith("%");)G-=1;n[s.name].startLine=G,s=null}}const _=new Set;function v(I){const b=[];for(const w of Object.keys(n))!I.includes("function")&&!I.includes("predicate")&&!I.includes("test")&&new RegExp(`\\b${w}\\s*\\(`,"g").test(I)&&b.push(w);return b}for(const I of e)v(I).forEach(w=>_.add(w));const g=Object.values(n).filter(I=>!_.has(I.name)).map(I=>({start:I.startLine,end:I.endLine}));g.sort((I,b)=>b.start-I.start);const h=[...e];for(const I of g)h.splice(I.start,I.end-I.start+1);const m=[];let C=!1;for(const I of h)I.trim()===""?C||(m.push(I),C=!0):(m.push(I),C=!1);return m.join(`
`)}function lh(t){let e=t,n=e.length;for(;e=Mk(e),e.length!=n;)n=e.length;return e}const ch=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function Gd(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function Uk(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),a=[];for(let c=0;c<e.nRows;c++){const u=[];for(let _=0;_<e.nCols;_++){const v=e.getCell(c,_);!v||v.region===null?u.push(r-1):u.push(v.region)}a.push(u)}const s=Gd(a);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${s});
`)}}function Md(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function $t(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function Fk(t,e){const r=t.grid.getPositiveDiagonal(),i=lt(r);let a=xi(i);return a=`
% Positive Diagonal Constraint
`+a,a}function $k(t,e){const r=t.grid.getNegativeDiagonal(),i=lt(r);let a=xi(i);return a=`
% Negative Diagonal Constraint
`+a,a}function Hk(t,e){const r=t.grid.getPositiveDiagonal(),a="["+lt(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function Pk(t,e){const r=t.grid.getNegativeDiagonal(),a="["+lt(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function Bk(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let a="";const s=n.getPositiveDiagonal();for(const c of s){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,_),h=n.getCell(u,_+(u-v));if(!g||!h)continue;const m=Oe(g),C=Oe(h),b=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=b}}return a}function Wk(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let a="";const s=n.getNegativeDiagonal();for(const c of s){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,_),h=n.getCell(u,_-(u-v));if(!g||!h)continue;const m=Oe(g),C=Oe(h),b=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=b}}return a}function zk(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let a=0;a<i;a++){const s=n.getDisjointGroup(a),_=`constraint alldifferent(${`[${lt(s).join(",")}]`});
`;r+=_}return r}function Yk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const s=n.getNeighboorCells(i).filter(g=>g.r+g.c>=i.r+i.c),c=Oe(i),_=`[${lt(s).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function jk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const s=n.getCellsByKnightMove(i).filter(g=>g.r>=i.r||g.c>=i.c),c=Oe(i),_=`[${lt(s).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function Vk(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=_t(n,`${e}`),n}function Kk(t,e){let n="";return n+=`constraint tango_p(board);
`,n=_t(n,`${e}`),n}function Xk(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=_t(n,`${e}`),n}function*Wr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function qk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,a]of Wr(n)){const s=Oe(i),c=Oe(a),u=`constraint not consecutive_p(${s}, ${c});
`;r+=u}return r}function Zk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,a]of Wr(n)){const s=Oe(i),c=Oe(a),u=`constraint not ratio_p(${s}, ${c}, 2);
`;r+=u}return r}function Qk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getRow(i.r),c=`[${lt(a).join(",")}]`,u=i.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function Jk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function e3(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function t3(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=_t(n,`${e}`),n}function _u(t,e){const n=t.grid,i=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const a=[];if(i)for(const c of Object.values(i)){const u=c.cells,_=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),v=c.value;(e===d.ALL_V_GIVEN&&(v==="v"||v==="V")||e===d.ALL_X_GIVEN&&(v==="x"||v==="X")||e===d.ALL_XV_GIVEN)&&a.push(_)}let s="";for(const[c,u]of Wr(n)){if(a.find(h=>h.has(c)&&h.has(u)))continue;const v=Oe(c),g=Oe(u);if(e===d.ALL_V_GIVEN){const h=`constraint ${v} + ${g} != 5;
`;s+=h}else if(e===d.ALL_X_GIVEN){const h=`constraint ${v} + ${g} != 10;
`;s+=h}else{const h=`constraint ${v} + ${g} != 5 /\\ (${v} + ${g} != 10);
`;s+=h}}return s=_t(s,`${e}`),s}function ho(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,a=new Set(i.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));n.push(a)}return n}function n3(t,e){const n=t.grid,i=t.localConstraints.get(d.XY_DIFFERENCES),a=ho(n,i);let s="";for(const[c,u]of Wr(n)){if(a.find(C=>C.has(c)&&C.has(u)))continue;const v=Oe(c),g=Oe(u);let h="";if(c.r==u.r){const I=n.getRow(c.r)[0];h=Oe(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];h=Oe(I)}if(!h)continue;const m=`constraint abs(${v} - ${g}) != ${h};
`;s+=m}return s=_t(s,`${e}`),s}function r3(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.DIFFERENCE),a=r.get(d.RATIO);let s=ho(n,i);s=[...s,...ho(n,a)];let c=[];i&&(c=Object.values(i).map(v=>v.value).map(v=>v||"1"));const u=[...new Set(c)];let _="";for(const[v,g]of Wr(n)){if(s.find(I=>I.has(v)&&I.has(g)))continue;const m=Oe(v),C=Oe(g);for(const I of u){const b=parseInt(I),w=`constraint abs(${m} - ${C}) != ${b};
`;_+=w}}return _=_t(_,`${e}`),_}function i3(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.RATIO),a=r.get(d.DIFFERENCE);let s=ho(n,i);s=[...s,...ho(n,a)];let c=[];i&&(c=Object.values(i).map(v=>v.value).map(v=>v||"2"));const u=[...new Set(c)];let _="";for(const[v,g]of Wr(n)){if(s.find(I=>I.has(v)&&I.has(g)))continue;const m=Oe(v),C=Oe(g);for(const I of u){const b=parseInt(I),w=`constraint not ratio_p(${m}, ${C}, ${b});
`;_+=w}}return _=_t(_,`${e}`),_}function o3(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_KROPKI),a=ho(n,i);let s="";for(const[c,u]of Wr(n)){if(a.find(I=>I.has(c)&&I.has(u)))continue;const v=Oe(c),g=Oe(u),h=Ct(c,q.YIN_YANG),m=Ct(u,q.YIN_YANG),C=`constraint not yin_yang_kropki_p(${v}, ${g}, ${h}, ${m});
`;s+=C}return s=_t(s,`${e}`),s}function a3(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),a=i?Object.values(i):[];function s(u,_){return u.find(v=>v.cell.r===_.r&&v.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=s(a,u),v=_?_.directions:[],g=Oe(u),h=[We.E,We.N,We.S,We.W];for(const m of h){if(v.includes(m))continue;const C=n.getCellsInDirection(u.r,u.c,m),I=pe(C,q.YIN_YANG);c+=`constraint count(${I}, 1) != ${g};
`}}return c=_t(c,`${e}`),c}function Ud(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,a=t.getCell(i.r,i.c);a&&n.add(a)}return n}function s3(t,e){const n=t.grid,i=t.localConstraints.get(d.INDEXING_COLUMN),a=Ud(n,i);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=n.getRow(c.r),g=`[${lt(_).join(",")}]`,h=c.c+1,m=`constraint not indexing_column_p(${g}, ${h});
`;s+=m}return s=_t(s,`${e}`),s}function l3(t,e){const n=t.grid,i=t.localConstraints.get(d.RADAR),a=Ud(n,i);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=Oe(c),[v,g,h,m]=kd(n,c),C=`constraint not radar_p(${_}, ${v}, ${g}, ${h}, ${m}, 9);
`;s+=C}return s=_t(s,`${e}`),s}function c3(t,e){const n=t.grid,i=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),a=Ud(n,i);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,h=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;s+=h}return s=_t(s,`${e}`),s}function u3(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,a]of Wr(n)){const s=Oe(i),c=Oe(a),u=`nurimisaki[${i.r},${i.c}]`,_=`nurimisaki[${a.r},${a.c}]`,v=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${s} - ${c}) >= 5;
`;r+=v}return r}function d3(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let a=`
% ${e}
`;for(const s of Object.values(i)){const u=s.cells.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v),_=pe(u,q.YIN_YANG);a+=`constraint count_unique_values(${_}) >= 2;
`}return a}function _3(t,e){const n=t.grid;let r=`
% ${e}
`;const i=q.YIN_YANG;for(const[a,s]of Wr(n)){const c=Oe(a),u=Oe(s),_=`${i}[${a.r},${a.c}]`,v=`${i}[${s.r},${s.c}]`,g=`constraint (${_} == 1 /\\ ${v} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=g}return r}function f3(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=_t(n,`${e}`),n}function g3(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=_t(n,`${e}`),n}function h3(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=_t(n,`${e}`),n}function v3(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=_t(n,`${e}`),n}function p3(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=_t(n,`${e}`),n}function m3(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=_t(n,`${e}`),n}function C3(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function E3(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function I3(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function b3(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=_t(n,`${e}`),n}function w3(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const a=r.getNeighboorCells(i).filter(_=>i.region!==null&&_.region===i.region),s=Ct(i,q.BOARD),c=Ct(i,q.YIN_YANG),u=pe(a,q.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${s}, ${c}, ${u});
`}return n=_t(n,`${e}`),n}function O3(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function L3(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function y3(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=_t(n,`${e}`),n}function A3(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=_t(n,`${e}`),n}function S3(t,e){let n="";const r=t.grid,a=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),s=a.length?Math.max(...a):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${s});
`,n=_t(n,`${e}`),n}function N3(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function x3(t,e){let n="";const a="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${a});
`,n=_t(n,`${e}`),n}function T3(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),_=lt(u),v=xi(_);r+=v}r+=`
% col constraints (digits do not repeat on cols)
`;const a=n.nCols;for(let c=0;c<a;c++){const u=n.getCol(c),_=lt(u),v=xi(_);r+=v}if(!e.get(d.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),v=lt(_),g=xi(v);r+=g}}return r}function R3(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const D3=new Map([[d.POSITIVE_DIAGONAL,Fk],[d.NEGATIVE_DIAGONAL,$k],[d.POSITIVE_ANTIDIAGONAL,Hk],[d.NEGATIVE_ANTIDIAGONAL,Pk],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,Bk],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,Wk],[d.ANTIKING,Yk],[d.ANTIKNIGHT,jk],[d.ANTI_GIRAFFE,Vk],[d.DISJOINT_GROUPS,zk],[d.TANGO,Kk],[d.NONCONSECUTIVE,qk],[d.NONRATIO,Zk],[d.ANTI_ENTROPY,Xk],[d.GLOBAL_INDEXING_COLUMN,Qk],[d.ALL_V_GIVEN,_u],[d.ALL_X_GIVEN,_u],[d.ALL_XV_GIVEN,_u],[d.ALL_DIFFERENCES_GIVEN,r3],[d.ALL_RATIOS_GIVEN,i3],[d.ALL_XY_DIFFERENCES_GIVEN,n3],[d.ALL_YIN_YANG_KROPKI_GIVEN,o3],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,a3],[d.ALL_INDEXING_COLUMN_GIVEN,s3],[d.ALL_RADARS_GIVEN,l3],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,c3],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,u3],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,d3],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,t3],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,Jk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,e3],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,f3],[d.CAVE_CELLS_ARE_ODD,h3],[d.CAVE_WALLS_ARE_EVEN,v3],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,p3],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,m3],[d.YIN_YANG_FILLOMINO_PARITY,g3],[d.TWO_SYMMETRIC_GALAXIES,I3],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,C3],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,E3],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,b3],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,w3],[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,_3],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,O3],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,x3],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,L3],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,y3],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,A3],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,S3],[d.DIRECTED_PATH_IS_PARITY_LINE,N3]]);function k3(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const a=D3.get(r);if(!a)continue;const s=a(t,r);e+=s}return e}function Fd(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return lt(r)}function $d(t,e){const n=e.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return`[${lt(n.slice(1)).join(",")}]`}function ip(t,e,n,r){let i="";const s="["+Fd(e,r).join(",")+"]";for(const c of r.lines){const u=$d(e,c);i+=`constraint arrow_p(${s}, ${u});
`}return i}function G3(t,e,n,r){let i="";const a=Fd(e,r);if(a.length===1){const s=a[0],c=r.lines;for(const u of c){const v=`constraint average_arrow_p(${$d(e,u)}, ${s});
`;i+=v}}return i}function M3(t,e,n,r){let i="";const a=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),s=pe(a,q.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_));for(const u of c){if(u.length<=1)continue;const _=pe(u.slice(1),q.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${s}, ${_});
`}return i+=ip(t,e,n,r),i}function U3(t,e,n,r){let i="";const s="["+Fd(e,r).join(",")+"]",c=r.lines;for(const u of c){const _=$d(e,u),v=`constraint bulbous_arrow_p(${s}, ${_});
`;i+=v}return i}const F3=new Map([[d.ARROW,ip],[d.AVERAGE_ARROW,G3],[d.BULBOUS_ARROW,U3],[d.CHAOS_CONSTRUCTION_ARROW,M3]]);function $3(t,e,n,r){let i="";const a=F3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function li(t,e){const n=$t(t,e.cells);return lt(n)}function op(t,e,n){const i=`[${li(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function El(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Hd(t,e,n,r,i){const s=`[${li(e,r).join(",")}]`,c=r.value,u=El(t,c,n);if(!u)return"";const _=u[1];let v=u[0];return v+=`constraint ${i}(${s}, ${_});
`,v}function H3(t,e,n,r){const i=li(e,r),a=`[${i.join(",")}]`,s=r.value;if(!s)return xi(i);const c=El(t,s,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${a}, ${u});
`,_}function P3(t,e,n,r){const i=li(e,r),a=`[${i.join(",")}]`,s=r.value;if(!s)return xi(i);const c=El(t,s,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${a}, ${u});
`,_}function B3(t,e,n,r){return Hd(t,e,n,r,"sum_cage_p")}function W3(t,e,n,r){return op(e,r,"parity_balance_cage_p")}function z3(t,e,n,r){return op(e,r,"sum_cage_look_and_say_p")}function Y3(t,e,n,r){return Hd(t,e,n,r,"divisible_killer_cage_p")}function j3(t,e,n,r){return Hd(t,e,n,r,"spotlight_cage_p")}function V3(t,e,n,r){const a=`[${li(e,r).join(",")}]`,s=r.value;if(s){const c=parseInt(s);return`constraint unique_values_cage_p(${a}, ${c}, ALLOWED_DIGITS);
`}return""}function K3(t,e,n,r){const a=`[${li(e,r).join(",")}]`,s=r.value;let c="";const u=El(t,s,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${a}) == ${m};
`}const _=r.cells,v=$t(e,_),g=[];for(const m of v)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!v.includes(I)&&!g.includes(I)&&g.push(I)});const h=pe(g,q.BOARD);return c+=`constraint vaulted_cage_p(${a}, ${h});
`,c}function ap(t,e,n,r,i){const a=$t(e,r.cells),s=pe(a,q.BOARD),c=pe(a,q.YIN_YANG),u=r.value;if(u){const _=parseInt(u);return`constraint ${i}(${s}, ${c}, ${_});
`}return""}function X3(t,e,n,r){return ap(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function q3(t,e,n,r){return ap(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function Z3(t,e,n,r){const i=$t(e,r.cells),a=pe(i,q.BOARD),s=pe(i,q.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${a}, ${s}, ${u});
`}return""}function Q3(t,e,n,r){const i=$t(e,r.cells),a=pe(i,q.BOARD),s=pe(i,q.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${a}, ${s}, ${u});
`}return""}function J3(t,e){let n="";const r=Md(e);for(const i of r.values())if(!(i.length<=1))for(const[a,s]of i.flatMap((c,u)=>i.slice(u+1).map(_=>[c,_]))){const u=`[${li(t,a).join(",")}]`,v=`[${li(t,s).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${v});
`}return n}const e5=new Map([[d.KILLER_CAGE,H3],[d.INVERTED_KILLER_CAGE,P3],[d.SUM_CAGE,B3],[d.PARITY_BALANCE_CAGE,W3],[d.SUM_CAGE_LOOK_AND_SAY,z3],[d.DIVISIBLE_KILLER_CAGE,Y3],[d.SPOTLIGHT_CAGE,j3],[d.UNIQUE_DIGITS_CAGE,V3],[d.VAULTED_CAGE,K3],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,X3],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,q3],[d.DOUBLERS_KILLER_CAGE,Z3],[d.NEGATORS_KILLER_CAGE,Q3]]);function t5(t,e,n,r){let i="";const a=e5.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}else if(n===d.MULTISET_CAGE){const s=Object.values(r),c=J3(e,s);i+=c}return i}function n5(t,e,n,r){const i=e.r+.5,a=e.c+.5,s=n-i,c=r-a,u=Math.floor(n+s),_=Math.floor(r+c);return t.getCell(u,_)}function r5(t,e){const n=[],r=[],i=[];for(const a of t.getAllCells()){const s=n5(t,a,e.r,e.c);s&&!n.includes(s)?(n.push(a),r.push(s)):r.includes(a)||i.push(a)}return[n,r,i]}function i5(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,v=c+1,[g,h,m]=r5(e,_),C=pe(g,q.GALAXY_REGIONS),I=pe(h,q.GALAXY_REGIONS),b=pe(m,q.GALAXY_REGIONS);r+=`% galaxy ${v}
`,r+=`constraint galaxy_center_p(${C}, ${I}, ${b}, ${v});
`,r+=`constraint connected_region(${q.GALAXY_REGIONS}, ${v});
`;const w=u.value;if(!w)continue;const y=parseInt(w);r+=`constraint galaxy_sum_p(${q.BOARD}, ${q.GALAXY_REGIONS}, ${y}, ${v});
`}if(!n.length)return r;const i=e.nCols*e.nRows,s=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${q.GALAXY_REGIONS}, ${s});
`,r}function o5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function a5(t,e,n,r){const i=r.cell,[a,s]=[i.r,i.c],c=r.value,u=o5(t,c,n);if(!u)return"";const _=u[1];let v=u[0],g=[];if(a%1===0&&s%1===0?g=fd(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(a%1===.5&&s%1===0||a%1===0&&s%1===.5)&&(g=hd(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!g.length)return"";const h=pe(g,q.BOARD),m=pe(g,q.YIN_YANG);return v+=`constraint conditional_sum_f(${h}, ${m}, 1) == ${_};
`,v}const s5=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,a5]]),l5=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,i5]]);function c5(t,e,n,r){let i="";const a=l5.get(n),s=s5.get(n);if(s)for(const[c,u]of Object.entries(r)){const _=s(t,e,c,u);i+=_}else if(a){const c=Object.values(r),u=a(t,e,c);i+=u}return i}function uh(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return lt(n)}function u5(t,e){const r="["+uh(t,e.cells).join(",")+"]",a="["+uh(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${a});
`}const d5=new Map([[d.CLONE_REGION,u5]]);function _5(t,e,n,r){return Cl(e,n,r,d5)}function Pd(t,e){const n=$t(t,e.cells);return lt(n)}function Bd(t,e,n){const i=`[${Pd(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function sp(t,e,n,r=""){const a=`[${Pd(t,e).join(",")}]`;let s=e.value;if(s||(s=r),s){const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}return""}function f5(t,e,n,r){const a=`[${Pd(e,r).join(",")}]`,s=r.value;if(!s)return"";const c=rp(s);if(!c)return"";let u="";for(const v of c){const g=parseInt(v);Number.isNaN(g)&&!t.hasVariable(v)&&(u+=`var int: ${v};
`,t.addVariable(v))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${a}, ${_});
`,u}function g5(t,e,n,r){return sp(e,r,"corner_sum_p")}function h5(t,e,n,r){return sp(e,r,"corner_even_count_p")}function v5(t,e,n,r){return Bd(e,r,"corner_sum_of_three_equals_the_other_p")}function p5(t,e,n,r){return Bd(e,r,"equal_diagonal_differences_p")}function m5(t,e,n,r){return Bd(e,r,"product_square_p")}const C5=new Map([[d.QUADRUPLE,f5],[d.CORNER_SUM,g5],[d.CORNER_EVEN_COUNT,h5],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,v5],[d.PRODUCT_SQUARE,m5],[d.EQUAL_DIAGONAL_DIFFERENCES,p5]]);function E5(t,e,n,r){let i="";const a=C5.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function Il(t,e){const n=$t(t,e.cells);return lt(n)}function I5(t,e,n){const r=Il(t,e),[i,a]=r;return`constraint ${n}(${i}, ${a});
`}function b5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function bl(t,e,n,r,i,a=""){var m;const s=Il(e,r),[c,u]=s,_=(m=r.value)!=null&&m.length?r.value:a,v=b5(t,_,n);if(!v)return"";const g=v[1];let h=v[0];return h+=`constraint ${i}(${c}, ${u}, ${g});
`,h}function w5(t,e,n,r){const i=Il(e,r),[a,s]=i;return r.value==="V"||r.value==="v"?`constraint ${a} + ${s} = 5;
`:`constraint ${a} + ${s} = 10;
`}function O5(t,e,n,r){return bl(t,e,n,r,"ratio_p","2")}function L5(t,e,n,r){return bl(t,e,n,r,"abs_difference","1")}function dh(t,e,n,r){const i=Il(e,r),[a,s]=i,c=r.value;return c==="<"?`constraint ${a} < ${s};
`:c===">"?`constraint ${a} > ${s};
`:""}function y5(t,e,n,r){return bl(t,e,n,r,"edge_sum_p")}function A5(t,e,n,r){return bl(t,e,n,r,"edge_modulo_p")}function S5(t,e,n,r){return I5(e,r,"edge_factor_p")}function N5(t,e,n,r){const i=$t(e,r.cells),[a,s]=lt(i),[c,u]=i;let _="";if(c.r==u.r){const h=e.getRow(c.r)[0];_=Oe(h)}else if(c.c==u.c){const h=e.getCol(c.c)[0];_=Oe(h)}return _?`constraint abs(${a} - ${s}) == ${_};
`:""}function x5(t,e,n,r){const i=$t(e,r.cells),[a,s]=lt(i),c=Ga(i,q.YIN_YANG),[u,_]=c;return`constraint yin_yang_kropki_p(${a}, ${s}, ${u}, ${_});
`}function T5(t,e,n,r){const i=$t(e,r.cells),[a,s]=lt(i),c=Ga(i,q.YIN_YANG),[u,_]=c;return`constraint yin_yang_white_kropki_p(${a}, ${s}, ${u}, ${_});
`}function wl(t,e,n){const r=$t(t,e.cells),i=Ga(r,n),[a,s]=i;return`constraint ${a} != ${s};
`}function R5(t,e,n,r){return wl(e,r,q.UNKNOWN_REGIONS)}function D5(t,e,n,r){return wl(e,r,q.FILLOMINO_REGIONS)}function k5(t,e,n,r){return wl(e,r,q.SUGURU_REGIONS)}function G5(t,e,n,r){return wl(e,r,q.CAVE_SHADING)}const M5=new Map([[d.XV,w5],[d.DIFFERENCE,L5],[d.RATIO,O5],[d.EDGE_INEQUALITY,dh],[d.ONE_WAY_DOOR,dh],[d.EDGE_SUM,y5],[d.EDGE_MODULO,A5],[d.EDGE_FACTOR,S5],[d.XY_DIFFERENCES,N5],[d.YIN_YANG_KROPKI,x5],[d.YIN_YANG_WHITE_KROPKI,T5],[d.FILLOMINO_REGION_BORDER,D5],[d.UNKNOWN_REGION_BORDER,R5],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,k5],[d.EDGE_CAVE_ONE_OF_EACH,G5]]);function U5(t,e,n,r){let i="";const a=M5.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function F5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Ma(t,e,n=!1){let r=$t(t,e.cells);return n&&(r=[...new Set(r)]),lt(r)}function ft(t,e,n,r=!1){const a=`[${Ma(t,e,r).join(",")}]`;return`constraint ${n}(${a});
`}function sr(t,e,n,r,i,a=""){var h;const c=`[${Ma(e,r).join(",")}]`,u=(h=r.value)!=null&&h.length?r.value:a,_=F5(t,u,n);if(!_)return"";const v=_[1];let g=_[0];return g+=`constraint ${i}(${c}, ${v});
`,g}function Wd(t,e,n){let i=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),a=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),a=!0);const c=`[${lt(i).join(",")}]`,u=e.value;if(!u)return"";const _=parseInt(u);return`constraint ${n}(${c}, ${_}, ${a});
`}function $5(t,e,n,r){return ft(e,r,"renban",!0)}function H5(t,e,n,r){return ft(e,r,"double_renban_p",!0)}function P5(t,e,n,r){return ft(e,r,"renrenbanban_p",!0)}function B5(t,e,n,r){return ft(e,r,"knabner_p",!0)}function W5(t,e,n,r){return ft(e,r,"renban_or_nabner_line_p",!0)}function z5(t,e,n,r){return ft(e,r,"out_of_order_consecutive_line_p")}function Y5(t,e,n,r){return sr(t,e,n,r,"whispers","5")}function j5(t,e,n,r){return`constraint whispers(${`[${Ma(e,r).join(",")}]`}, 4);
`}function V5(t,e,n,r){return ft(e,r,"strictly_increasing")}function K5(t,e,n,r){return ft(e,r,"fuzzy_thermo_p")}function X5(t,e,n,r){return ft(e,r,"increasing")}function q5(t,e,n,r){return sr(t,e,n,r,"custom_thermo_p")}function Z5(t,e,n,r){return ft(e,r,"palindrome")}function Q5(t,e,n,r){return sr(t,e,n,r,"sum_line_p")}function J5(t,e,n,r){return ft(e,r,"xv_line_p")}function eG(t,e,n,r){return sr(t,e,n,r,"at_least_x_line_p","10")}function tG(t,e,n,r){return sr(t,e,n,r,"product_line_p")}function nG(t,e,n,r){return sr(t,e,n,r,"maximum_adjacent_difference_line_p","2")}function rG(t,e,n,r){return ft(e,r,"adjacent_multiples_line_p")}function iG(t,e,n,r){return ft(e,r,"index_line_p")}function oG(t,e,n,r){return ft(e,r,"zipper_line_p")}function aG(t,e,n,r){return Wd(e,r,"segmented_sum_line_p")}function sG(t,e,n,r){return ft(e,r,"segmented_sum_and_renban_line_p")}function lG(t,e,n,r){return Wd(e,r,"n_consecutive_renban_line_p")}function cG(t,e,n,r){return Wd(e,r,"n_consecutive_fuzzy_sum_line_p")}function uG(t,e,n,r){const i=$t(e,r.cells);let a="";const s=[];for(let u=0;u<i.length;u++){const _=i[u],v=e.getRow(_.r),g=pe(v,q.BOARD),h=`cycle_${n}_${u}`;s.push(h);const m=_.c+1;a+=`var int: ${h} = cycle_order_f(${g}, ${m});
`}const c="["+s.join(",")+"]";return a+=`constraint strictly_increasing(${c});
`,a}function dG(t,e,n,r){return ft(e,r,"adjacent_differences_count_line_p")}function _G(t,e,n,r){return ft(e,r,"same_parity_line_p")}function fG(t,e,n,r){return sr(t,e,n,r,"renban_or_whispers_p","5")}function gG(t,e,n,r){return ft(e,r,"alldifferent",!0)}function hG(t,e,n,r){return ft(e,r,"repeated_digits_line_p")}function vG(t,e,n,r){return ft(e,r,"superfuzzy_arrow_p")}function pG(t,e,n,r){return ft(e,r,"ambiguous_arrow_p",!0)}function mG(t,e,n,r){return ft(e,r,"headless_arrow_p")}function CG(t,e,n,r){return sr(t,e,n,r,"unimodular_line_p","3")}function EG(t,e,n,r){return sr(t,e,n,r,"modular_line_p","3")}function IG(t,e,n,r){return sr(t,e,n,r,"modular_or_unimodular_line_p","3")}function bG(t,e,n,r){return ft(e,r,"arithmetic_sequence_line_p")}function wG(t,e,n,r){return ft(e,r,"odd_even_oscillator_line_p")}function OG(t,e,n,r){return sr(t,e,n,r,"high_low_oscillator_line_p","5")}function LG(t,e,n,r){return ft(e,r,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function yG(t,e,n,r){return ft(e,r,"look_and_say_line_p",!0)}function AG(t,e,n,r){const i=$t(e,r.cells);function a(g){const h=[];let m=null;for(const C of g)C.r!=m?(h.push([C]),m=C.r):h[h.length-1].push(C);return h}const s=a(i);if(s.length<2)return"";const c=s[0],_=`[${lt(c).join(",")}]`;let v="";for(let g=1;g<s.length;g++){const h=s[g],C=`[${lt(h).join(",")}]`;v+=`constraint sum(${C}) == sum(${_});
`}return v}function SG(t,e,n,r){return ft(e,r,"between_line_p")}function NG(t,e,n,r){return ft(e,r,"tightrope_line_p")}function xG(t,e,n,r){return ft(e,r,"double_arrow_p")}function TG(t,e,n,r){return ft(e,r,"split_peas_p")}function RG(t,e,n,r){return ft(e,r,"parity_count_line_p")}function DG(t,e,n,r){return ft(e,r,"product_of_ends_equals_sum_of_line_p")}function lp(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const a=i.region;n!==a&&(r.length&&e.push(r),r=[]),r.push(i),n=a}return r.length&&e.push(r),e}function kG(t,e,n,r){let i="";const a=$t(e,r.cells),s=lp(a);if(!s.length)return"";const c=`sum_line_${n}`;i+=`var int: ${c};
`;for(const u of s){const v=`constraint sum(${pe(u,q.BOARD)}) == ${c};
`;i+=v}return i}function GG(t,e,n,r){return`constraint entropic_line_p(${`[${Ma(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function MG(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Ma(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function UG(t,e,n,r){return ft(e,r,"peapods_p")}function FG(t,e,n,r){const i=$t(e,r.cells),a=pe(i,q.BOARD),s=pe(i,q.YIN_YANG);let c=r.value;c||(c="5");const u=parseInt(c);return`constraint yin_yang_shaded_whispers_line_p(${a}, ${s}, ${u});
`}function $G(t,e,n,r){const i=$t(e,r.cells),a=pe(i,q.BOARD),s=pe(i,q.YIN_YANG);let c=r.value;c||(c="3");const u=parseInt(c);return`constraint yin_yang_unshaded_modular_line_p(${a}, ${s}, ${u});
`}function zd(t,e,n){const r=$t(t,e.cells),i=pe(r,q.BOARD),a=pe(r,q.YIN_YANG);return`constraint ${n}(${i}, ${a});
`}function HG(t,e,n,r){return zd(e,r,"yin_yang_unshaded_entropic_line_p")}function PG(t,e,n,r){return zd(e,r,"yin_yang_indexing_line_coloring_p")}function BG(t,e,n,r){return zd(e,r,"yin_yang_region_sum_line_p")}function WG(t,e,n,r){const i=$t(e,r.cells),a=pe(i,q.VALUES_GRID),s=pe(i,q.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${a}, ${s});
`}function Yd(t,e,n){const r=$t(t,e.cells),i=pe(r,q.VALUES_GRID);return`constraint ${n}(${i});
`}function zG(t,e,n,r){return Yd(e,r,"between_line_p")}function YG(t,e,n,r){return Yd(e,r,"double_arrow_p")}function jG(t,e,n,r){return Yd(e,r,"strictly_increasing")}function VG(t,e,n,r){const i=$t(e,r.cells),a=lp(i);if(a.sort((_,v)=>v.length-_.length),a.length<=1)return"";let s="";const c=a[0],u=pe(c,q.VALUES_GRID);for(const _ of a.slice(1)){const v=pe(_,q.VALUES_GRID),g=`constraint subset_p(${u}, ${v});
`;s+=g}return s}const KG=new Map([[d.THERMOMETER,V5],[d.FUZZY_THERMOMETER,K5],[d.SLOW_THERMOMETER,X5],[d.CUSTOM_THERMOMETER,q5],[d.RENBAN_LINE,$5],[d.DOUBLE_RENBAN_LINE,H5],[d.RENRENBANBAN_LINE,P5],[d.NABNER_LINE,B5],[d.WHISPERS_LINE,Y5],[d.DUTCH_WHISPERS,j5],[d.RENBAN_OR_WHISPERS_LINE,fG],[d.RENBAN_OR_NABNER_LINE,W5],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,z5],[d.N_CONSECUTIVE_RENBAN_LINE,lG],[d.PALINDROME,Z5],[d.SUM_LINE,Q5],[d.PRODUCT_LINE,tG],[d.XV_LINE,J5],[d.AT_LEAST_X_LINE,eG],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,nG],[d.SAME_PARITY_LINE,_G],[d.ADJACENT_MULTIPLES_LINE,rG],[d.ADJACENT_DIFFERENCES_COUNT_LINE,dG],[d.LOOK_AND_SAY_LINE,yG],[d.ROW_SUM_LINE,AG],[d.INDEX_LINE,iG],[d.ZIPPER_LINE,oG],[d.SEGMENTED_SUM_LINE,aG],[d.SEGMENTED_SUM_AND_RENBAN_LINE,sG],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,cG],[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,LG],[d.SUPERFUZZY_ARROW,vG],[d.AMBIGUOUS_ARROW,pG],[d.HEADLESS_ARROW,mG],[d.ARITHMETIC_SEQUENCE_LINE,bG],[d.ODD_EVEN_OSCILLATOR_LINE,wG],[d.HIGH_LOW_OSCILLATOR_LINE,OG],[d.UNIQUE_VALUES_LINE,gG],[d.REPEATED_DIGITS_LINE,hG],[d.UNIMODULAR_LINE,CG],[d.MODULAR_LINE,EG],[d.MODULAR_OR_UNIMODULAR_LINE,IG],[d.REGION_SUM_LINE,kG],[d.ENTROPIC_LINE,GG],[d.ENTROPIC_OR_MODULAR_LINE,MG],[d.ROW_CYCLE_THERMOMETER,uG],[d.PEAPODS,UG],[d.BETWEEN_LINE,SG],[d.TIGHTROPE_LINE,NG],[d.DOUBLE_ARROW_LINE,xG],[d.SPLIT_PEAS,TG],[d.PARITY_COUNT_LINE,RG],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,DG],[d.DOUBLERS_THERMOMETER,jG],[d.DOUBLERS_BETWEEN_LINE,zG],[d.DOUBLERS_DOUBLE_ARROW_LINE,YG],[d.INDEXER_CELLS_REGION_SUBSET_LINE,VG],[d.YIN_YANG_SHADED_WHISPERS_LINE,FG],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,HG],[d.YIN_YANG_UNSHADED_MODULAR_LINE,$G],[d.YIN_YANG_REGION_SUM_LINE,BG],[d.YIN_YANG_INDEXING_LINE_COLORING,PG],[d.GOLDILOCKS_ZONE_REGION_SUM,WG]]);function XG(t,e,n,r){let i="";const a=KG.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function Ol(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return lt(i)}function Ua(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let a="";return(!r||r.outside)&&(a=`R${n.r}C${n.c}`,a=a.replace("-","m")),e||(e=a),t.getOrSetSharedVar(e,a,i)}function er(t,e,n,r){const i=n.cell,a=e.getCell(i.r,i.c),c=`[${Ol(e,n).join(",")}]`,u=n.value,_=Ua(t,u,i,a);if(!_)return"";const v=_[1];let g=_[0];return g+=`constraint ${r}(${c}, ${v});
`,g}function qG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),c=`[${Ol(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),g=Math.max(..._),h=Ua(t,u,i,a);if(!h)return"";const m=h[1];let C=h[0];return C+=`constraint sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,C}function ZG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),c=`[${Ol(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),g=Math.max(..._),h=Ua(t,u,i,a);if(!h)return"";const m=h[1];let C=h[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return C+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,C+=`var bool: ${b} = x_sum_p(${c}, ${m});
`,C+=`constraint 'xor'(${I}, ${b});
`,C}function QG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),s=Ol(e,r),c=`[${s.join(",")}]`,u=s[0],_=r.value,v=Ua(t,_,i,a);if(!v)return"";const g=v[1];let h=v[0];return h+=`constraint x_index_p(${c}, ${u}, ${g});
`,h}function JG(t,e,n,r){return er(t,e,r,"x_sum_p")}function eM(t,e,n,r){return er(t,e,r,"shortsighted_x_sum_p")}function tM(t,e,n,r){return er(t,e,r,"broken_x_sum_p")}function nM(t,e,n,r){return er(t,e,r,"shifted_x_sum_p")}function rM(t,e,n,r){return er(t,e,r,"skyscrapers_p")}function iM(t,e,n,r){return er(t,e,r,"x_sum_skyscrapers_p")}function oM(t,e,n,r){return er(t,e,r,"battlefield_p")}function aM(t,e,n,r){return er(t,e,r,"rising_streak_p")}function sM(t,e,n,r){return er(t,e,r,"outside_consecutive_sum_p")}function lM(t,e,n,r){const i=r.cell,a=r.direction,s=e.getCellsInDirection(i.r,i.c,a),c=pe(s,q.BOARD),u=pe(s,q.CELL_CENTER_LOOP),_=r.value;if(_){const v=parseInt(_);return`constraint loopwhiches_p(${c}, ${u}, ${v});
`}return""}function cM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),s=r.direction,c=e.getCellsInDirection(i.r,i.c,s),u=pe(c,q.BOARD),_=pe(c,q.UNKNOWN_REGIONS),v=r.value,g=Ua(t,v,i,a);if(!g)return"";const h=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${h});
`,m}function uM(t,e,n,r){return er(t,e,r,"little_killer_sum_p")}function dM(t,e,n,r){return er(t,e,r,"little_killer_product_p")}function _M(t,e,n,r){return er(t,e,r,"x_omit_little_killer_sum_p")}function fM(t,e,n,r){const i=r.cell,a=r.direction,s=e.getCellsInDirection(i.r,i.c,a),c=pe(s,q.BOARD),u=pe(s,q.YIN_YANG),_=r.value;if(_){const v=parseInt(_);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${v});
`}return""}function gM(t,e,n,r){const i=r.cell,a=r.direction,s=e.getCellsInDirection(i.r,i.c,a),c=pe(s,q.VALUES_GRID),u=r.value;if(u){const _=parseInt(u);return`constraint little_killer_sum_p(${c}, ${_});
`}return""}const hM=new Map([[d.SANDWICH_SUM,qG],[d.X_SUM,JG],[d.SHORTSIGHTED_X_SUM,eM],[d.BROKEN_X_SUM,tM],[d.SHIFTED_X_SUM,nM],[d.SKYSCRAPERS,rM],[d.X_SUM_SKYSCRAPERS,iM],[d.X_INDEX,QG],[d.BATTLEFIELD,oM],[d.SANDWICH_SUM_XOR_X_SUM,ZG],[d.RISING_STREAK,aM],[d.OUTSIDE_CONSECUTIVE_SUM,sM],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,fM],[d.LOOPWICHES,lM],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,cM],[d.LITTLE_KILLER_SUM,uM],[d.LITTLE_KILLER_PRODUCT,dM],[d.X_OMIT_LITTLE_KILLER_SUM,_M],[d.NEGATORS_LITTLE_KILLER_SUM,gM]]);function vM(t,e,n,r){let i="";const a=hM.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function pM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let a=t.getCellsInDirection(r.r,r.c,i);a=[r,...a];const s=pe(a,q.SASHIGANE),c=pe(a,q.SASHIGANE_BENDS),u=Oe(r),_=Ct(r,q.SASHIGANE);let v=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${s}, ${c});
`;return v+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,v}function mM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,a=t.getCellsInDirection(r.r,r.c,i),c="["+lt(a).join(",")+"]",u=pe(a,q.CELL_CENTER_LOOP),_=Oe(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const CM=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,pM],[d.THERMO_SIGHTLINE_LOOP_ARROW,mM]]);function EM(t,e,n,r){return Cl(e,n,r,CM)}function cp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i);return`constraint ${n}(${a});
`}function IM(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function up(t,e,n,r=""){const i=e.cell,a=t.getCell(i.r,i.c);if(!a)return"";const s=Oe(a);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${s}, ${u});
`}function Do(t,e,n,r){const i=e.cell,a=t.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),u=ml(t,a).map(g=>pe(g,n)),_=Ct(a,n);return`constraint ${r}(${u.join(", ")}, ${_}, ${s});
`}function bM(t,e,n,r){return cp(e,r,"odd_p")}function wM(t,e,n,r){return cp(e,r,"even_p")}function OM(t,e,n,r){return up(e,r,"low_digit_p","5")}function LM(t,e,n,r){return up(e,r,"high_digit_p","5")}function dp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i),s=t.getNeighboorCells(i),c=pe(s,q.BOARD);return`constraint ${n}(${c}) == ${a};
`}function yM(t,e,n,r){return dp(e,r,"odd_count")}function AM(t,e,n,r){return dp(e,r,"even_count")}function SM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a);c.push(a);const u=pe(c,q.BOARD);return`constraint count_same_parity_p(${s}, ${u});
`}function NM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getOrthogonallyAdjacentCells(a);return`constraint sum_p(${pe(c,q.BOARD)}, ${s});
`}function xM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getDiagonallyAdjacentCells(a);return`constraint sum_p(${pe(c,q.BOARD)}, ${s});
`}function TM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=e.getRow(a.r),c=pe(s,q.BOARD),u=a.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function RM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=e.getCol(a.c),c=pe(s,q.BOARD),u=a.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function DM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=a.r+1,u=a.c+1;if(a.region!==null){const v=a.region+1;return`constraint ${s} == ${c} \\/ ${s} == ${u} \\/ ${s} == ${v};
`}return`constraint ${s} == ${c} \\/ ${s} == ${u};
`}function kM(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const s=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),_=e.getCell(i.r,i.c+1);if(!s||!c||!u||!_)return"";const v=Oe(s),g=Oe(c),h=Oe(u),m=Oe(_);return`constraint groups_opposite_parity_p([${v},${g}], [${h},${m}]);
`}function jd(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i),[s,c,u,_]=kd(t,i);return`constraint ${n}(${a}, ${s}, ${c}, ${u}, ${_});
`}function GM(t,e,n,r){return jd(e,r,"is_watchtower_p")}function MM(t,e,n,r){return jd(e,r,"is_not_watchtower_p")}function UM(t,e,n,r){return jd(e,r,"farsight_p")}function FM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),[c,u,_,v]=kd(e,a);return`constraint radar_p(${s}, ${c}, ${u}, ${_}, ${v}, 9);
`}function $M(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u="["+lt(c).join(",")+"]",_=e.getCol(a.c),v="["+lt(_).join(",")+"]",[g,h]=[a.r+1,a.c+1];return`constraint sandwich_row_col_count_p(${u}, ${v}, ${g}, ${h}, ${s});
`}function _p(t,e,n){const r=Object.values(e);let i="";const a=r.map(c=>c.cell),s=new Set(a.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const v=Oe(_),g=t.getOrthogonallyAdjacentCells(_).filter(C=>!s.has(C)),h=pe(g,q.BOARD),m=`constraint ${n}(${h}, ${v});
`;i+=m}return i}function HM(t,e,n){return _p(e,n,"maximum_p")}function PM(t,e,n){return _p(e,n,"minimum_p")}function BM(t,e,n){const r=Object.values(n);let i="";const a=r.map(_=>_.cell),s=new Set(a.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${lt([...s]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${u}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function WM(t,e,n){const r=Object.values(n);let i="";const a=r.map(h=>h.cell),s=new Set(a.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h)),c=e.getAllCells().filter(h=>!s.has(h)),_=`${lt([...s]).join(`,
	`)}`,g=`${lt([...c]).join(`,
	`)}`;return i+=`array[int] of var int: reverse_counting_circles = [
	${_}
];
`,i+=`array[int] of var int: not_reverse_counting_circles = [
	${g}
];
`,i+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,i}function zM(t,e,n){const r=Object.values(n);let i="";const a=r.map(g=>g.cell),s=new Set(a.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${lt([...s]).join(`,
	`)}`,v=`${Ga([...s],q.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${q.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${v}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${q.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const g of e.getAllCells()){if(s.has(g))continue;const h=Ct(g,q.COUNTING_CIRCLES_COLORS);i+=`constraint ${h} == 0;
`}for(const g of r){const h=g.cell,m=e.getCell(h.r,h.c);if(!m)continue;const C=Oe(m),I=Ct(m,q.COUNTING_CIRCLES_COLORS),b=g.value;b?i+=`constraint ${I} == ${b};
`:i+=`constraint ${I} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${C}, ${I}) == ${C};
`}return i+=`
`,i}function YM(t,e,n){const r=Object.values(n);let i="";const a=r.map(_=>_.cell),s=new Set(a.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${lt([...s]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${u}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function jM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a);return`constraint seen_even_count_p(${ml(e,a).map(v=>pe(v,q.BOARD)).join(", ")}, ${s});
`}function VM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a);return`constraint seen_odd_count_p(${ml(e,a).map(v=>pe(v,q.BOARD)).join(", ")}, ${s});
`}function KM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint yin_yang_minesweeper_p(${pe(u,q.YIN_YANG)}, ${s});
`}function XM(t,e,n,r){return Do(e,r,q.YIN_YANG,"yin_yang_seen_unshaded_p")}function qM(t,e,n,r){return Do(e,r,q.YIN_YANG,"yin_yang_seen_shaded_p")}function ZM(t,e,n,r){return Do(e,r,q.YIN_YANG,"yin_yang_seen_same_shade_p")}function QM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=Ct(a,q.YIN_YANG),u=e.getOrthogonallyAdjacentCells(a),_=pe(u,q.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${s}, ${c}, ${_});
`}function JM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a);return`constraint count(${pe(c,q.YIN_YANG)}, 1) == ${s};
`}function eU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=`two_contiguous_regions[${a.r},${a.c}]`,u=e.getRow(a.r),_=e.getCol(a.c),v=pe(u,q.TWO_CONTIGUOUS_REGIONS),g=pe(_,q.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${v}, ${g}, ${s}, ${c});
`}function tU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u=e.getCol(a.c),_=pe(c,q.UNKNOWN_REGIONS),v=pe(u,q.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${_}, ${v}, ${s});
`}function nU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=`nurimisaki[${a.r},${a.c}]`,c=e.getOrthogonallyAdjacentCells(a);let _=`constraint nurimisaki_unshaded_endpoint_p(${pe(c,q.NURIMISAKI)}, ${s});
`;return _+=Do(e,r,q.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),_}function rU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=Ct(a,q.SASHIGANE),u=Ct(a,q.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${s}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function iU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Ct(a,q.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${s}) == ${u};
`}function oU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint ${Ct(a,q.CELL_CENTER_LOOP)} == 1;
`:""}function aU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint ${Ct(a,q.CELL_CENTER_LOOP)} == 0;
`:""}function sU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint sum(${pe(u,q.CELL_CENTER_LOOP)}) == ${s};
`}function lU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=Ct(a,q.CAVE_SHADING),u=ml(e,a),_=[];for(const g of u){const h=pe(g,q.CAVE_SHADING);_.push(h)}return`constraint cave_clue_p(${s}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function cU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const _=Oe(a),v=Ct(a,q.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(a),h=pe(g,q.BOARD),m=pe(g,q.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${h}, ${m}, ${v});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const C=e.getCellsByKnightMove(a),I=pe(C,q.BOARD),b=pe(C,q.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${v});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const w=[We.NE,We.NW,We.SE,We.SW],y=[];for(const F of w)e.getCellsInDirection(a.r,a.c,F).forEach(W=>y.push(W));const D=pe(y,q.BOARD),G=pe(y,q.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${D}, ${G}, ${v});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function uU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const _=Oe(a),v=Ct(a,q.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(a),h=pe(g,q.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${h}, ${v}) >= ${c};
`;const m=[We.N,We.S,We.E,We.W],C=[];for(const I of m){const b=e.getCellsInDirection(a.r,a.c,I);if(!b.length)continue;const w=pe(b,q.BOARD),y=pe(b,q.UNKNOWN_REGIONS),D=`in_arrow_${n}_${I}`,G=`in_arrow_${n}_${I}[1]`;C.push(G),u+=`array[index_set(${w})] of var bool: ${D};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${y}, ${D}, ${_}, ${v});
`}return u+=`constraint sum([${C.join(",")}]) == ${c};
`,u}function dU(t,e,n,r){return Do(e,r,q.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function _U(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint dpath_source == ${a.r*e.nCols+a.c+1};
`:""}function fU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint dpath_target == ${a.r*e.nCols+a.c+1};
`:""}function gU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint connect_four_red_p(${Ct(a,q.CONNECT_FOUR)});
`:""}function hU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint connect_four_yellow_p(${Ct(a,q.CONNECT_FOUR)});
`:""}function vU(t,e,n){let r="",i=0;for(const[a,s]of Object.entries(n)){const c=s.cell,u=e.getCell(c.r,c.c);if(!u)continue;const _=s.value;if(!_)continue;const v=IM(t,_,a);if(!v)continue;const g=v[1];r+=v[0];const h=Ct(u,q.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${q.BOARD}, ${q.NURIKABE_REGIONS}, ${h}, ${g});
`,i+=1}return r+=`constraint count_unique_values(array1d(${q.NURIKABE_REGIONS})) == ${i+1};
`,r}function pU(t,e,n,r){return Do(e,r,q.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function mU(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=Ct(a,q.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${q.NURIKABE_REGIONS}, ${c}, ${s});
`}function CU(t,e,n){let r="";const i=Md(Object.values(n));for(const u of i.values())if(!(u.length<=1))for(const[_,v]of u.flatMap((g,h)=>u.slice(h+1).map(m=>[g,m]))){const g=_.cell,h=v.cell,m=e.getCell(g.r,g.c),C=e.getCell(h.r,h.c);if(!m||!C)continue;const I=Ct(m,q.BOARD),b=Ct(C,q.BOARD);r+=`constraint ${I} == ${b};
`}const s=[...i.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=pe(s,q.BOARD);return r+=`constraint alldifferent(${c});
`,r}const EU=new Map([[d.ODD,bM],[d.EVEN,wM],[d.LOW_DIGIT,OM],[d.HIGH_DIGIT,LM],[d.ODD_MINESWEEPER,yM],[d.EVEN_MINESWEEPER,AM],[d.DIAGONALLY_ADJACENT_SUM,xM],[d.ORTHOGONAL_SUM,NM],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,SM],[d.FRIENDLY_CELL,DM],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,kM],[d.WATCHTOWER,GM],[d.NOT_WATCHTOWER,MM],[d.FARSIGHT,UM],[d.RADAR,FM],[d.INDEXING_COLUMN,TM],[d.INDEXING_ROW,RM],[d.SANDWICH_ROW_COL_COUNT,$M],[d.SEEN_EVEN_COUNT,jM],[d.SEEN_ODD_COUNT,VM],[d.YIN_YANG_MINESWEEPER,KM],[d.YIN_YANG_SEEN_UNSHADED_CELLS,XM],[d.YIN_YANG_SEEN_SHADED_CELLS,qM],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,ZM],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,QM],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,JM],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,eU],[d.SEEN_REGION_BORDERS_COUNT,tU],[d.NURIMISAKI_UNSHADED_ENDPOINTS,nU],[d.NURIKABE_SEEN_WATERWAY_CELLS,pU],[d.NURIKABE_ISLAND_SIZE_CELL,mU],[d.SASHIGANE_BEND_REGION_COUNT,rU],[d.SASHIGANE_REGION_SUM,iU],[d.CELL_ON_THE_LOOP,oU],[d.CELL_NOT_ON_THE_LOOP,aU],[d.COUNT_LOOP_NEIGHBOUR_CELLS,sU],[d.CAVE_CLUE,lU],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,cU],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,uU],[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,dU],[d.DIRECTED_PATH_START,_U],[d.DIRECTED_PATH_END,fU],[d.CONENCT_FOUR_RED,gU],[d.CONNECT_FOUR_YELLOW,hU]]),IU=new Map([[d.MAXIMUM,HM],[d.MINIMUM,PM],[d.COUNTING_CIRCLES,BM],[d.REVERSE_COUNTING_CIRCLES,WM],[d.COLORED_COUNTING_CIRCLES,zM],[d.UNIQUE_CELLS,YM],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,vU],[d.TELEPORT,CU]]);function bU(t,e,n,r){let i="";const a=EU.get(n),s=IU.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);i+=_}else if(s){const c=s(t,e,r);i+=c}return i}function wU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Ct(r,q.UNKNOWN_REGIONS),s=e.directions,c=[];for(const v of s){const g=t.getCellsInDirection(r.r,r.c,v),h=pe(g,q.UNKNOWN_REGIONS);c.push(h)}return`constraint ${c.map(v=>`count_different(${v}, ${a})`).join(" + ")} == ${i};
`}function OU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Ct(r,q.YIN_YANG),s=e.directions;let c="";for(const u of s){const _=t.getCellsInDirection(r.r,r.c,u),v=pe(_,q.BOARD),g=pe(_,q.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${a}, ${v}, ${g}) == ${i};
`}return c}function LU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),_=pe(u,q.YIN_YANG);s+=`constraint count(${_}, 1) == ${i};
`}return s}function yU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Ct(r,q.YIN_YANG),s=e.directions,c=[];for(const _ of s){const v=t.getCellsInDirection(r.r,r.c,_),g=pe(v,q.YIN_YANG),h=pe(v,q.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${a}, ${g}, ${h})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function AU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions,s=[];for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),g=`count(${pe(_,q.NURIKABE_SHADING)}, 1)`;s.push(g)}return`constraint ${s.join(" + ")} = ${i};
`}function SU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions,s=[];for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${pe(_,q.CELL_CENTER_LOOP)})`;s.push(g)}return s.length?`constraint ${s.join(" + ")} = ${i};
`:""}function NU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Ct(r,q.GALAXY_REGIONS),s=e.directions,c=[];for(const _ of s){const v=t.getCellsInDirection(r.r,r.c,_),h=`count(${pe(v,q.GALAXY_REGIONS)}, ${a})`;c.push(h)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function xU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),v="["+lt(u).join(",")+"]";s+=`constraint hot_arrows_p(${v}, ${i});
`}return s}function TU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),_=pe(u,q.BOARD);s+=`constraint cold_arrows_p(${_}, ${i});
`}return s}function RU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Ct(r,q.CONNECT_FOUR),s=e.directions,c=[];for(const v of s){const g=t.getCellsInDirection(r.r,r.c,v);c.push(...g)}return c.length===0?"":`constraint count(${pe(c,q.CONNECT_FOUR)}, ${a}) == ${i};
`}const DU=new Map([[d.HOT_ARROWS,xU],[d.COLD_ARROWS,TU],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,wU],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,OU],[d.LOOP_CELL_COUNT_ARROWS,SU],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,yU],[d.YIN_YANG_COUNT_SHADED_CELLS,LU],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,NU],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,AU],[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,RU]]);function kU(t,e,n,r){return Cl(e,n,r,DU)}function GU(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function MU(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function UU(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}const FU=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,GU],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,MU],[d.FORBIDDEN_KNIGHT_SUM,UU]]);function $U(t,e,n,r){return Cl(e,n,r,FU)}const HU=[c5,bU,EM,kU,U5,E5,XG,$3,t5,vM,_5,$U];function PU(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[a,s]of r.entries())for(const c of HU){let u=c(e,i,a,s);u=_t(u,`${a}`),n+=u}return n}function BU(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,a+=`constraint yin_yang_p(yin_yang);
`,a}function WU(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,a+=`constraint nurimisaki_p(nurimisaki);
`,a}function zU(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,a+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,a}function YU(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,a}function jU(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`
% Two Contiguous Regions
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,a+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,a}function VU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const a=Math.max(r.nCols,r.nRows);let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..${a-1}: unknown_regions;
`,s+=`constraint unknown_sudoku_regions_p(unknown_regions, ${a});
`,s+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${a});
`,s}function KU(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,a+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,a+=`constraint sashigane_adjacency_p(sashigane);
`,a+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,a+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,a+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,a}function XU(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,a+=`constraint cell_center_loop_p(cell_center_loop, true);
`,a}function qU(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,a+=`constraint cell_center_loop_p(cell_center_loop, false);
`,a}function ZU(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,a+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,a+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,a}function QU(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,a+=`constraint cell_center_loop_p(cell_center_loop, false);
`,a+=`constraint modular_loop_p(board, cell_center_loop);
`,a}function co(t,e,n,r){const i=t.grid;let a="";a+=`% Exactly ${e} per row 
`;const s=i.nRows;for(let v=0;v<s;v++){const g=i.getRow(v),h=r(g);a+=`constraint count_eq(${h}, ${n}, ${e});
`}a+=`
% Exactly ${e} per column 
`;const c=i.nCols;for(let v=0;v<c;v++){const g=i.getCol(v),h=r(g);a+=`constraint count_eq(${h}, ${n}, ${e});
`}if(!t.globalConstraints.get(d.UNKNOWN_REGIONS)){a+=`
% Exactly ${e} per region 
`;const v=i.getUsedRegions();for(const g of v){const h=i.getRegion(g),m=r(h);a+=`constraint count_eq(${m}, ${n}, ${e});
`}}return a}function JU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,a+=co(n,1,!0,s=>pe(s,q.DOUBLERS)),a+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,a}function e8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a="negators_grid";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,s+=co(n,1,!0,c=>pe(c,q.NEGATORS)),s+=`
constraint one_of_each_digit_p(board, ${a}, ALLOWED_DIGITS);
`,s+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${a});
`,s}function t8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a="fillomino_area";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,s+=`constraint fillomino_p(board, ${a});
`,s}function n8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=q.INDEXER_CELLS_GRID;let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,s+=co(n,2,!0,c=>pe(c,a)),s+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,s+=`constraint indexer_cells_p(board, ${a}, values_grid);
`,s}function r8(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=q.CAVE_SHADING,s=q.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,c+=`constraint cave_p(${a}, ${s});
`,c}function i8(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=q.CAVE_SHADING,s=q.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${a}, ${s}, ${c});
`,u+=`constraint renban_caves_p(${q.BOARD}, ${c});
`,u}function o8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=q.GALAXY_REGIONS,s=q.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${a};
`,u+=`constraint galaxy_restrict_numbering_p(${a});
`,u+=`array[0..${c}] of var 0..${c}: ${s};
`,u+=`constraint galaxy_sizes_p(${a}, ${s});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${a}, ${s});
`,u+=`constraint gallaxy_connected_regions_p(${a});
`,u}function a8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,a+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,a}function s8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint goldilocks_zone_p(goldilocks_regions);
`,a+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,a}function l8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=ch.size;let s="";s+=`array[ROW_IDXS, COL_IDXS] of var 0..${a}: tilling_regions;
`,s+=`array[ROW_IDXS, COL_IDXS] of var 0..${a}: tilling_placing_grid;
`,s+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[c,u]of ch.entries()){const _=u.length,v=u[0].length,g=`pentomino_${c}`;s+=`array[1..${_}, 1..${v}] of 0..1: ${g} = ${Gd(u)};
`,s+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${g}, ${c});
`}return s}function c8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=q.LITS_SHADING,s=q.LITS_REGIONS;let c="";c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${s};
`,c+=`constraint lits_shading_p(${a});
`,c+=`constraint lits_shading_ids_p(${a}, ${s});
`,c+=`constraint lits_region_and_ids_p(${q.BOARD_REGIONS}, ${s});
`,c+=`constraint lits_tetromino_shapes_p(${s});
`;const u=r.getUsedRegions();u.size&&(c+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const _ of u){const v=r.getRegion(_),h=`constraint count_eq(${pe(v,q.LITS_SHADING)}, 1, 4);
`;c+=h}return c}function u8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(v=>v.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=q.LITS_SHADING,s=q.LITS_REGIONS,c=q.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${s};
`,u+=`constraint lits_shading_p(${a});
`,u+=`constraint lits_shading_ids_p(${a}, ${s});
`,u+=`constraint lits_region_and_ids_p(${c}, ${s});
`,u+=`constraint lits_4_per_region_p(${c}, ${a});
`,u+=`constraint lits_tetromino_shapes_p(${s});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const v of _){const g=r.getRegion(v),m=`constraint count_eq(${pe(g,q.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function d8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=q.LITS_SHADING,s=q.STAR_BATTLE,c=q.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,u+=co(n,2,1,_=>pe(_,q.STAR_BATTLE)),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${s});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=co(n,1,1,_=>pe(_,q.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`
% 1 black star per row, column, region
`,u+=co(n,1,2,_=>pe(_,q.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`constraint black_and_white_star_battle_p(${s}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${a}, ${c});
`,u}function Ft(t,e,n){return t*n+e+1}function _8(t){const e=t.grid;function n(c,u){const _=[],v=Ft(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const h=Ft(u.r+g,u.c,e.nCols);_.push([v,h]),_.push([h,v])}return _}function r(c,u){const _=[],v=Ft(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const h=Ft(u.r,u.c+g,e.nCols);_.push([v,h]),_.push([h,v])}return _}const i=[],s=t.localConstraints.get(d.MAZE_WALL);if(s)for(const c of Object.values(s)){const u=c.coords;if(u.length===1){const _=u[0],g=fd(_).map(C=>e.getCell(C.r,C.c)).filter(C=>C!==void 0);let h=Ft(g[0].r,g[0].c,e.nCols),m=Ft(g[3].r,g[3].c,e.nCols);i.push([h,m]),i.push([m,h]),h=Ft(g[1].r,g[1].c,e.nCols),m=Ft(g[2].r,g[2].c,e.nCols),i.push([h,m]),i.push([m,h])}for(let _=0;_<u.length-1;_++){const v=yO(rv(u[_],u[_+1]),.5),h=hd(v).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(h.length!==2)continue;const[m,C]=h;if(m.r===C.r){let I=n(m,C);i.push(...I),I=n(C,m),i.push(...I)}else if(m.c===C.c){let I=r(m,C);i.push(...I),I=r(C,m),i.push(...I)}}}return i}function f8(t){const e=t.grid,n=[],i=t.localConstraints.get(d.ONE_WAY_DOOR);if(i)for(const a of Object.values(i)){const c=a.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,_]=c,v=a.value,g=Ft(u.r,u.c,e.nCols),h=Ft(_.r,_.c,e.nCols);v==="<"?n.push([g,h]):v===">"&&n.push([h,g])}return n}function g8(t){const e=[];for(const n of t.getAllCells()){const r=Ft(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const a of i){const s=Ft(a.r,a.c,t.nCols);e.push([r,s])}}return e}function h8(t){const e=t.grid,n=[],r=[],a=t.localConstraints.get(d.TELEPORT),s=a?Object.values(a):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(a){const _=Md(s);let v=1;for(const g of _.values())if(!(g.length<=1)){for(const[h,m]of g.flatMap((C,I)=>g.slice(I+1).map(b=>[C,b]))){const C=Ft(h.cell.r,h.cell.c,e.nCols),I=Ft(m.cell.r,m.cell.c,e.nCols);n.push([C,I]),n.push([I,C]),u[h.cell.r][h.cell.c]=v,u[m.cell.r][m.cell.c]=v}for(const h of g){const m=Ft(h.cell.r,h.cell.c,e.nCols);r.push(m)}v++}c=_.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function v8(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(w=>w.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="",s=g8(r);const c=_8(n),u=f8(n);c.push(...u);const _=n.localConstraints;s=s.filter(w=>!c.some(y=>w[0]===y[0]&&w[1]===y[1]));const v=h8(n);if(v.tp_edges.length){s.push(...v.tp_edges);const w=Gd(v.tp_arr),y=v.tp_count;a+=`
% teleports grid
`,a+=`array[ROW_IDXS, COL_IDXS] of 0..${y}: teleports = array2d(ROW_IDXS, COL_IDXS, ${w});
`}t.edge_list=s,console.log(s);const g=r.nRows*r.nCols,h=s.length,m="["+s.map(w=>w[0]).join(",")+"]",C="["+s.map(w=>w[1]).join(",")+"]";a+=`array[int] of int: dpath_from = ${m};
`,a+=`array[int] of int: dpath_to = ${C};
`,a+=`var 1..${g}: dpath_source;
`,a+=`var 1..${g}: dpath_target;
`,a+=`array[1..${g}] of var bool: dpath_ns;
`,a+=`array[1..${h}] of var bool: dpath_es;
`,a+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,a+=`
% Direct Path no crossings
`;for(let w=0;w<r.nRows-1;w++)for(let y=0;y<r.nCols-1;y++){const D=r.getCell(w,y),G=r.getCell(w,y+1),F=r.getCell(w+1,y),B=r.getCell(w+1,y+1);if(!D||!G||!F||!B)continue;const W=Ft(D.r,D.c,r.nCols),X=Ft(G.r,G.c,r.nCols),ee=Ft(F.r,F.c,r.nCols),ce=Ft(B.r,B.c,r.nCols),re=[[W,ce],[ce,W],[X,ee],[ee,X]].map(me=>s.findIndex(Ce=>me[0]===Ce[0]&&me[1]===Ce[1])).filter(me=>me!==-1);if(re.length){const me=re.map(Ce=>`dpath_es[${Ce+1}]`).join(",");a+=`constraint sum([${me}]) <= 1;
`}}const I=_.get(d.TELEPORT),b=I?Object.values(I):[];if(v.tp_count>0){a+=`
% At most 1 edge per teleporter
`;for(const w of b){const y=w.cell,D=r.getCell(y.r,y.c);if(!D)continue;const G=r.getNeighboorCells(D),F=Ft(D.r,D.c,r.nCols),B=[];for(const X of G){if(b.some(J=>J.cell.r===X.r&&J.cell.c==X.c&&J.value===w.value))continue;const ce=Ft(X.r,X.c,r.nCols);B.push([F,ce]),B.push([ce,F])}const W=B.map(X=>s.findIndex(ee=>X[0]===ee[0]&&X[1]===ee[1])).filter(X=>X!==-1);if(W.length){const X=W.map(ee=>`dpath_es[${ee+1}]`).join(",");a+=`constraint sum([${X}]) <= 1;
`}}}return a}function p8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a="suguru_regions";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,s+=`constraint chaos_construction_suguru_p(board, ${a});
`,s}function m8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a="connect_four";let s=`% 1 - Red, 2 - Yellow
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${a};
`,s}function C8(t,e){let n="";return n+=`constraint connect_four_draw_p(${q.CONNECT_FOUR});
`,n}function E8(t,e){let n="";return n+=`constraint connect_four_adjacent_reds_different_parity_p(${q.BOARD}, ${q.CONNECT_FOUR});
`,n}function I8(t,e){let n="";return n+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${q.BOARD}, ${q.CONNECT_FOUR}, 3);
`,n}const b8=new Map([[d.FILLOMINO,t8],[d.CAVE,r8],[d.GALAXIES,o8],[d.YIN_YANG,BU],[d.NURIMISAKI,WU],[d.NURIKABE,zU],[d.NURIKABE_NO_REPEATS_IN_ISLANDS,YU],[d.TWO_CONTIGUOUS_REGIONS,jU],[d.UNKNOWN_REGIONS,VU],[d.SASHIGANE,KU],[d.CELL_CENTER_LOOP_NO_TOUCHING,XU],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,qU],[d.NOT_LOOP_SIZED_REGIONS,ZU],[d.MODULAR_LOOP,QU],[d.DOUBLERS,JU],[d.NEGATORS,e8],[d.GOLDILOCKS_ZONE,s8],[d.NEXUS,a8],[d.INDEXER_CELLS,n8],[d.PENTOMINO_TILLING,l8],[d.LITS,c8],[d.CAVE_LITS,u8],[d.LITS_BLACK_WHITE_STAR_BATTLE,d8],[d.RENBAN_CAVES,i8],[d.MAZE_DIRECTED_PATH,v8],[d.CHAOS_CONSTRUCTION_SUGURU,p8],[d.CONNECT_FOUR,m8],[d.CONNECT_FOUR_DRAW,C8],[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,E8],[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,I8]]);function w8(t){let e="";const r=t.puzzle.globalConstraints;for(const[i,a]of r.entries()){if(!a)continue;const s=b8.get(i);if(!s)continue;let c=s(t,i);c=_t(c,`${i}`),e+=c}return e}function O8(){return`
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

function var int: count_seen_orth_directions_f(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: val
) = 
  count_uninterrupted(arr1, val) + count_uninterrupted(arr2, val) + count_uninterrupted(arr3, val) + count_uninterrupted(arr4, val);
    
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
 
% Predicate to check if ms2 is a subset of ms1 (multiset subset)
predicate subset_p(
    array[int] of var int: ms1,
    array[int] of var int: ms2
) = forall(elem in ms2) (
    % Count occurrences of elem in ms2
    sum([1 | i in index_set(ms2) where ms2[i] == elem]) <=
    % Count occurrences of elem in ms1
    sum([1 | i in index_set(ms1) where ms1[i] == elem])
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
) = let {
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

predicate reverse_counting_circles_p(
    array[int] of var int: circles,
    array[int] of var int: not_circles
) = forall(circle in circles)(
    count(not_circles, circle) == circle
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

predicate seen_modular_count_p(
	array[int] of var int: arr1,
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: val,
    var int: n,
    var int: rem
) = let {
    % counts the number of seen uninterrupted values with remainder mod n = rem,
    % for each of the arrays plus val, and the total count must be equal to val
    array[int] of var bool: _arr1 = [x mod n == rem | x in arr1];
    array[int] of var bool: _arr2 = [x mod n == rem | x in arr2];
    array[int] of var bool: _arr3 = [x mod n == rem | x in arr3];
    array[int] of var bool: _arr4 = [x mod n == rem | x in arr4];
    var int: val_rem = bool2int(val mod n == rem);
} in (
    count_seen_orth_directions_f(_arr1, _arr2, _arr3, _arr4, true) + val_rem == val
);

predicate seen_even_count_p(
	array[int] of var int: arr1,
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: val
) = seen_modular_count_p(arr1, arr2, arr3, arr4, val, 2, 0);

predicate seen_odd_count_p(
	array[int] of var int: arr1,
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: val
) = seen_modular_count_p(arr1, arr2, arr3, arr4, val, 2, 1);

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

predicate peapods_p(
    array[int] of var int: arr
) = let {
    int: idx1 = min(index_set(arr)),
    var int: sum_var = sum(i in index_set(arr) where i != idx1)(arr[i])
} in 10 * arr[idx1] + arr[idx1] = sum_var;

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

`+`predicate arrow_p(
    array[int] of var int: pill,
    array[int] of var int: arrow
) = let {
    set of int: idxs = index_set(pill);
    int: n = max(idxs);
    array[int] of var int: pill_values = [pow(10, i-1)*pill[n-i+1] | i in idxs];
    var int: arrow_val = sum(pill_values);
} in (
    arrow_val == sum(arrow)
);
    
predicate average_arrow_p(array[int] of var int: arr, var int: val) =
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

predicate yin_yang_seen_unshaded_p(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: yin_yang_var,
	var int: cell_var,
) = let {
    var int: count_cell = if yin_yang_var == 0 then 1 else 0 endif;
} in (
    count_seen_orth_directions_f(arr1, arr2, arr3, arr4, 0) + count_cell == cell_var /\\
    yin_yang_var == 0
);

predicate yin_yang_seen_shaded_p(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: yin_yang_var,
	var int: cell_var,
) = let {
    var int: count_cell = if yin_yang_var == 1 then 1 else 0 endif;
} in (
    count_seen_orth_directions_f(arr1, arr2, arr3, arr4, 1) + count_cell == cell_var /\\
    yin_yang_var == 1
);

predicate yin_yang_seen_same_shade_p(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: yin_yang_var,
	var int: cell_var,
) = (
    count_seen_orth_directions_f(arr1, arr2, arr3, arr4, yin_yang_var) + 1 == cell_var
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
 
predicate yin_yang_shaded_cells_are_german_whispers_p(
    array[int, int] of var int: grid,
    array[int, int] of var 0..1: shading
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);    
} in (
    assert(index_sets_agree(grid, shading), "grid and shading must have the same indexes")
    % adjacent shaded cells must be german whispers (horiz adjacent)
    /\\ forall (r in rows, c in cols where c > 0) (
        (shading[r,c] = 1 /\\ shading[r, c - 1] = 1) -> abs(grid[r,c] - grid[r, c-1]) >= 5
    ) /\\
    % adjacent shaded cells must be german whispers (vertical adjacent)
    forall (r in rows, c in cols where r > 0) (
        (shading[r,c] = 1 /\\ shading[r-1, c] = 1) -> abs(grid[r,c] - grid[r-1, c]) >= 5
    )
);

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
    
predicate chaos_costruction_seen_same_region_count_p(
	array[int] of var int: arr1,
	array[int] of var int: arr2,
	array[int] of var int: arr3,
	array[int] of var int: arr4,
    var int: cell_region,
    var int: val,
) =
    count_seen_orth_directions_f(arr1, arr2, arr3, arr4, cell_region) + 1 == val;

predicate chaos_construction_arrow_p(
	array[int] of var int: circle_regions,
	array[int] of var int: arrow_regions
) = let {
    set of int: idxs1 = index_set(circle_regions);
    set of int: idxs2 = index_set(arrow_regions);
} in (
    all_equal(arrow_regions) /\\ 
    all_equal(circle_regions) /\\ 
    circle_regions[min(idxs1)] != arrow_regions[min(idxs2)]
);

`+`predicate nurimisaki_p(array[int, int] of var int: grid) =
	connected_region(grid, 0)
    /\\ shading_2x2_allowed_p(grid, 1..3);

predicate nurimisaki_unshaded_endpoint_p(array[int] of var int: adj_cells, var int: nurimisaki_cell) = 
    count(adj_cells, 0) == 1 /\\ nurimisaki_cell == 0;
    
predicate nurimisaki_count_uninterrupted_unshaded_p(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: nurimisaki_var,
	var int: cell_var,
) = let {
    var int: count_cell = if nurimisaki_var == 0 then 1 else 0 endif
} in (
    count_seen_orth_directions_f(arr1, arr2, arr3, arr4, 0) + count_cell == cell_var
);

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
    
function tuple(var int, var int): first_two_true_indexes(array[int] of var bool: arr) =
    let {
        % Find the first index where the element is true
        var int: first_index = min([i | i in index_set(arr) where arr[i] == true]);
        % Find the second index where the element is true
        var int: second_index = min([i | i in index_set(arr) where arr[i] == true /\\ i > first_index]);
    } in
    (first_index, second_index);

predicate indexer_cells_p(
    array[int, int] of var int: board,
    array[int, int] of var bool: indexer_grid,
    array[int, int] of var int: values_grid,
) = let {
    set of int: rows = index_set_1of2(indexer_grid);
    set of int: cols = index_set_2of2(indexer_grid);
} in (
    assert(index_sets_agree(board, indexer_grid), "board and indexer_grid must have the same indexes") /\\
    assert(index_sets_agree(board, values_grid), "board and values_grid must have the same indexes") /\\
    % if not a indexer cell, the cell value is equal to its digit
    forall(r in rows, c in cols)(
        not indexer_grid[r,c] -> values_grid[r,c] = board[r,c]
    ) /\\
    % there are two indexers per row, one indexes the row and the other the column
    forall(r in rows)(
        let {
            array[int] of var bool: row_bools = indexer_grid[r,..];
            % extract the indexes of the two cells
            tuple(var int, var int): t1 = first_two_true_indexes(row_bools);
            var int: c1 = t1.1;
            var int: c2 = t1.2;
            var int: val1 = board[r, c1];
            var int: val2 = board[r, c2];
            % this assumes board is 0-indexed and board values start at 1
            var int: idx1 = val1 - 1;
            var int: idx2 = val2 - 1;
        } in (
            (idx1 in cols /\\ indexer_grid[r, idx1] /\\ idx1 == c2 /\\ values_grid[r, c1] = board[r, idx1]
             /\\ idx2 in rows /\\ indexer_grid[idx2, c2] /\\ values_grid[r, c2] = board[idx2, c2])
            \\/
            (idx2 in cols /\\ indexer_grid[r, idx2] /\\ idx2 == c1 /\\ values_grid[r, c2] = board[r, idx2]
             /\\ idx1 in rows /\\ indexer_grid[idx1, c1] /\\ values_grid[r, c1] = board[idx1, c1])
        )
    )
    /\\
    % there are two indexers per row, one indexes the row and the other the column
    forall(c in cols)(
        let {
            array[int] of var bool: col_bools = indexer_grid[..,c];
            % extract the indexes of the two cells
            tuple(var int, var int): t1 = first_two_true_indexes(col_bools);
            var int: r1 = t1.1;
            var int: r2 = t1.2;
            var int: val1 = board[r1, c];
            var int: val2 = board[r2, c];
            % this assumes board is 0-indexed and board values start at 1
            var int: idx1 = val1 - 1;
            var int: idx2 = val2 - 1;
        } in (
            (idx1 in rows /\\ indexer_grid[idx1, c] /\\ idx1 == r2 /\\ values_grid[r1, c] = board[idx1, c]
             /\\ idx2 in cols /\\ indexer_grid[r2, idx2] /\\ values_grid[r2, c] = board[r2, idx2])
            \\/
            (idx2 in rows /\\ indexer_grid[idx2, c] /\\ idx2 == r1 /\\ values_grid[r2, c] = board[idx2, c]
             /\\ idx1 in cols /\\ indexer_grid[r1, idx1] /\\ values_grid[r1, c] = board[r1, idx1])
        )
    )
);

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

predicate nurikabe_seen_waterway_cells_p(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: nurikabe_var,
	var int: cell_var,
) = (
    % count seen water cells plus itself (also water)
    count_seen_orth_directions_f(arr1, arr2, arr3, arr4, 0) + 1 == cell_var /\\
    nurikabe_var == 0 % water cell
);

predicate nurikabe_island_size_cell_p(
    array[int, int] of var int: regions,
    var int: region,
    var int: cell_value
) = (
    region != 0    % is island and not water
    /\\ cell_value = count(array1d(regions), region)
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

`}function L8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const a=`constraint ${Oe(r)} = ${r.value};
`;n+=a}return n.length&&(n=`
% Given Digits
`+n),n}function fp(t){const e=t.grid;let n=t.valid_digits;const r=new Gk(t),[i,a]=[e.nRows,e.nCols],s=i*a;r.add(`include "globals.mzn";
`),r.add(`include "alldifferent.mzn";

`),r.add(O8());let u=`1..${Math.max(i,a)}`;return!!t.globalConstraints.get(d.FILLOMINO)?u=`1..${s}`:t.globalConstraints.get(d.HEXED_SUDOKU)?n=[...Nt.range(1,16)]:n&&(u="{"+n.join(",")+"}"),r.add(`set of int: ROW_IDXS = 0..${i-1};
`),r.add(`set of int: COL_IDXS = 0..${a-1};
`),r.add(`set of int: ALLOWED_DIGITS = ${u};
`),r.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),Uk(r,e),r.add(L8(t)),r.add(T3(t)),r.add(R3(t)),r.add(w8(r)),r.add(PU(t,r)),r.add(k3(t)),r.add(`
solve satisfy;`),r}var y8=ie('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button></div>');function A8(t,e){ae(e,!1);const n=it(),r=()=>Ee(Gr,"$puzzleMetaStore",n);let i=U(e,"showModal",12,!1);function a(g,h,m){var C=document.createElement("a"),I=new Blob([g],{type:m});C.href=URL.createObjectURL(I),C.download=h,C.click(),URL.revokeObjectURL(C.href)}function s(){const g=at(Na);return fp(g).model_str}function c(){const g=s();navigator.clipboard.writeText(g)}function u(){const g=s(),h=lh(g);navigator.clipboard.writeText(h)}function _(){const g=Au(r()),h=s();a(h,`${g}.mzn`,"text/plain")}function v(){const g=Au(r()),h=s(),m=lh(h);a(m,`${g}.mzn`,"text/plain")}ge(),Br(t,{title:"Minizinc File",get showModal(){return i()},set showModal(g){i(g)},children:(g,h)=>{var m=y8(),C=V(m),I=$(C,2),b=$(I,2),w=$(b,2);Y(m),Ue("click",C,c),Ue("click",I,u),Ue("click",b,_),Ue("click",w,v),R(g,m)},$$slots:{default:!0},$$legacy:!0}),se()}function ko(t,e,n){const r=[],i=[];for(let s=0;s<t.length;s++){const c=t[s];for(let u=0;u<c.length;u++){const _=e.getCell(s,u);if(!_)continue;const v=Number(c[u]),g=n.get(v);g!==void 0&&(r.push(_),i.push([g]))}}const a=ll(r,i);go(a)}function S8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],a=Array(e).fill(0).map(()=>Array(n).fill(0));for(let h=0;h<e;h++)for(let m=0;m<n;m++)if(!r[h][m]){const C=[];i.push(C),s(h,m,t[h][m])}function s(h,m,C){h<0||h>=e||m<0||m>=n||r[h][m]||t[h][m]!==C||(r[h][m]=!0,i[i.length-1].push([h,m]),s(h+1,m,C),s(h-1,m,C),s(h,m+1,C),s(h,m-1,C))}const c=Array(i.length).fill(0).map(()=>new Set);function u(h,m){for(const[C,I]of h)for(const[b,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const y=C+b,D=I+w;if(m.some(([G,F])=>G===y&&F===D))return!0}return!1}for(let h=0;h<i.length;h++)for(let m=h+1;m<i.length;m++)u(i[h],i[m])&&(c[h].add(m),c[m].add(h));const _=[1,4,7,9],v=new Array(i.length).fill(0);function g(h,m){for(const C of c[h])if(v[C]===m)return!1;return!0}for(let h=0;h<i.length;h++)for(const m of _)if(g(h,m)){v[h]=m;break}for(let h=0;h<i.length;h++)for(const[m,C]of i[h])a[m][C]=v[h];return a}function N8(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const a=[],s=[];for(let u=0;u<i.length;u++){const _=i[u];for(let v=0;v<_.length;v++){const g=n.getCell(u,v);if(!g||g.given||r&&!g.given&&g.value===null)continue;const h=_[v];a.push(g),s.push(h)}}const c=jv(a,s);go(c)}function x8(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const a=t[i];if(a!==void 0){ko(a,e,r);return}}}function T8(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const a=t[i];if(a!==void 0){ko(a,e,r);return}}}function R8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let s=0;s<n.length;s++){const c=n[s];for(let u=0;u<c.length;u++){const _=e.getCell(s,u);if(!_)continue;r.push(_);const v=c[u];i.push([v+1])}}const a=ll(r,i);go(a)}function D8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;ko(n,e,new Map([[0,4],[1,7],[2,9]]))}function k8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;ko(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function G8(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;ko(n,e,new Map([[1,7],[2,4],[3,9]]))}function M8(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;ko(n,e,new Map([[1,7],[2,8]]))}function U8(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions","suguru_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[a,s]=[e.nRows,e.nCols],c=3,u=[];for(let v=0;v<i.length;v++){const g=i[v];for(let h=0;h<g.length-1;h++){const m=e.getCell(v,h),C=e.getCell(v,h+1);if(!m||!C)continue;const I=g[h],b=g[h+1];if(I===b)continue;const w={colorId:c,p1:{r:v,c:h+1},p2:{r:v+1,c:h+1}};u.push(w)}}for(let v=0;v<s;v++)for(let g=0;g<a-1;g++){const h=e.getCell(g,v),m=e.getCell(g+1,v);if(!h||!m)continue;const C=i[g][v],I=i[g+1][v];if(C===I)continue;const b={colorId:c,p1:{r:g+1,c:v},p2:{r:g+1,c:v+1}};u.push(b)}const _=pa(u);vr(_);return}}function F8(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const a=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(v)for(const g of e.getOrthogonallyAdjacentCells(v)){if(!g||!(g.r>v.r||g.c>v.c))continue;const h=i[v.r][v.c],m=i[g.r][g.c];if(!(h===1&&m===1))continue;const C={colorId:4,p1:{r:v.r+.5,c:v.c+.5},p2:{r:g.r+.5,c:g.c+.5}};a.push(C)}}}const s=pa(a);vr(s);return}}function $8(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const a=S8(i);if(!a)return;const s=[],c=[];for(let _=0;_<a.length;_++){const v=a[_];for(let g=0;g<v.length;g++){const h=e.getCell(_,g);if(!h)continue;s.push(h);const m=v[g];c.push([m])}}const u=ll(s,c);go(u);return}}function H8(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const a=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(!v)continue;const g=i[v.r][v.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:v.r+.5,c:v.c+.5};a.push(m)}}const s=yy(a);vr(s);return}}function P8(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,a=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[v,g]=_,[h,m]=[Math.floor((v-1)/i.nCols),(v-1)%i.nCols],[C,I]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols];if(!mo({r:h,c:m},{r:C,c:I}))continue;const y={colorId:4,p1:{r:h+.5,c:m+.5},p2:{r:C+.5,c:I+.5}};a.push(y)}const s=pa(a);vr(s)}function B8(t,e){const n=e.puzzle,r=n.grid;vr(bd()),N8(t,n),R8(t,r),U8(t,r),D8(t,r),k8(t,r),F8(t,r),T8(t,r),$8(t,r),x8(t,r),H8(t,r),G8(t,r),P8(t,e),M8(t,r)}function W8(){const{subscribe:t,set:e}=Pt(0),n=100;let r=Date.now(),i,a=0,s=!1;return{subscribe:t,start:()=>{s||(s=!0,r=Date.now()-a,i=setInterval(()=>{a=Date.now()-r,e(a)},n))},stop:()=>{s&&(s=!1,clearInterval(i),a=Date.now()-r)},reset:()=>{s=!1,clearInterval(i),a=0,e(0)},getStatus:()=>({isRunning:s,elapsedTime:a})}}var z8=ie('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function Y8(t,e){ae(e,!1);const n=it(),r=()=>Ee(Na,"$puzzleStore",n),i=()=>Ee(vn,"$gridStore",n),a=()=>Ee(w,"$timer",n),s=T(),c=T(),u=T(),_=T();let v=T(!1),g=T(!1),h=T(null),m=T(100),C=T("100"),I=T(null),b=T("IDLE");const w=W8();function y(X){return X===null?"":String(X)}function D(X){const ee=Math.floor(X/6e4),ce=Math.floor(X%6e4/1e3),J=Math.floor(X%1e3/100),re=ce.toString().padStart(2,"0");return`${ee}:${re}.${J}`}function G(){S(g,!0)}function F(X){const ee=parseInt(X);typeof ee=="number"&&ee>=1&&S(m,ee)}async function B(){S(I,0),S(b,"SOLVING...");const X=new Wu;Pv(),console.log(p(s));const ee=fp(p(s));X.addFile("test.mzn",ee.model_str),w.reset(),w.start(),S(h,X.solve({options:{solver:"chuffed","num-solutions":p(m)}})),p(h).on("solution",ce=>{const J=ce.output.json;ce.type==="solution"&&p(I)!==null&&S(I,p(I)+1),console.log(J),B8(J,ee)}),p(h).on("error",ce=>{S(u,"Solve"),S(b,"ERROR"),w.stop(),p(h)&&p(h).cancel()}),p(h).on("warning",ce=>{S(b,"WARNING"),console.log(ce.message)}),p(h).then(ce=>{S(b,ce.status),S(u,"Solve"),w.stop()})}function W(){p(h)===null||!p(h).isRunning()?B():p(h)!==null&&p(h).isRunning()&&(S(b,"IDLE"),S(u,"Solve"),w.stop(),p(h).cancel())}k(()=>r(),()=>{S(s,r())}),k(()=>i(),()=>{S(c,i())}),k(()=>{},()=>{S(u,"Solve")}),k(()=>a(),()=>{S(_,a())}),k(()=>p(h),()=>{p(h)&&(p(h)!==null&&p(h).isRunning()?S(u,"Stop"):S(u,"Solve"))}),Ie(),ge(),vl(t,{get isOpen(){return p(v)},set isOpen(X){S(v,X)},$$slots:{"panel-header":(X,ee)=>{hl(X,{slot:"panel-header",title:"Solver",get isOpen(){return p(v)},set isOpen(ce){S(v,ce)},$$legacy:!0})},"panel-content":(X,ee)=>{var ce=z8(),J=ue(ce),re=$(J,2);A8(re,{get showModal(){return p(g)},set showModal(tn){S(g,tn)},$$legacy:!0});var me=$(re,2),Ce=V(me,!0);Y(me);var _e=$(me,2),Se=V(_e,!0);Y(_e);var Ve=$(_e,2),Ae=V(Ve);qt(Ae),A(Ae,"min",1),A(Ae,"max",200),A(Ae,"step",1),Y(Ve);var Le=$(Ve,2),ct=V(Le,!0);te(()=>nt(ct,`Solution Count: ${y(p(I))}`)),Y(Le);var Ke=$(Le,2),An=V(Ke,!0);te(()=>nt(An,`Elapsed Time: ${D(p(_))}`)),Y(Ke);var Hn=$(Ke,2),zr=V(Hn,!0);Y(Hn),te(()=>{nt(Ce,p(u)),nt(Se,`Max. Solutions: ${p(m)}`),nt(zr,`Status: ${p(b)}`)}),Ue("click",J,G),Ue("click",me,W),qn(Ae,()=>p(C),tn=>S(C,tn)),Ue("input",Ae,()=>F(p(C))),R(X,ce)}},$$legacy:!0}),se()}var j8=ie('<div class="setting-panel-wrapper svelte-si50bm"><div class="setting-panel svelte-si50bm"><!> <!> <!> <!> <!> <!> <!></div></div>');function V8(t){var e=j8(),n=V(e),r=V(n);Ak(r);var i=$(r,2);Y8(i,{});var a=$(i,2);c2(a,{elementHandlers:Tt});var s=$(a,2);g2(s,{elementHandlers:Tt});var c=$(s,2);t2(c,{elementHandlers:Tt});var u=$(c,2);F2(u,{elementHandlers:Tt});var _=$(u,2);Nk(_,{}),Y(n),Y(e),R(t,e)}const gp=Ui([fo,vn,Qt],([t,e,n])=>{const r=ai(n,Tt);if(r===void 0){console.warn(`Element hadler for ${n} is not defined`);return}return r.getInputHandler?r.getInputHandler(t,e,n):void 0});var K8=de('<path class="cursor svelte-zsq70u"></path>');function X8(t,e){ae(e,!1);const n=it(),r=()=>Ee(Qt,"$toolStore",n),i=()=>Ee(Di,"$selectionStore",n),a=T(),s=T(),c=.25;function u(v){if(!v)return"";const[g,h]=[v.c,v.r];return`M${g},${h}L${g+c},${h}L${g},${h+c}Z`}k(()=>r(),()=>{S(a,_d(r()))}),k(()=>i(),()=>{S(s,u(i().lastCell))}),Ie(),ge();var _=K8();te(()=>{A(_,"d",p(s)),A(_,"visibility",p(a)?"visible":"hidden")}),R(t,_),se()}var q8=de('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function Z8(t,e){ae(e,!1);let n=U(e,"gridShape",8);ge();var r=q8(),i=V(r);A(i,"x",0),A(i,"y",0),Y(r),te(()=>{A(i,"width",n().nCols),A(i,"height",n().nRows)}),R(t,r),se()}var Q8=de('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),J8=de('<g class="grid-lines"></g>');function eF(t,e){ae(e,!1);const n=it(),r=()=>Ee(vn,"$gridStore",n),i=T();k(()=>r(),()=>{S(i,r().getAllCells())}),Ie(),ge();var a=J8();st(a,5,()=>p(i),yt,(s,c)=>{var u=Q8();A(u,"width",1),A(u,"height",1),te(()=>{A(u,"x",p(c).c),A(u,"y",p(c).r)}),R(s,u)}),Y(a),R(t,a),se()}function tF(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function nF(t){const e=new Map;function n(r,i){const a=e.get(i);if(a!=null&&a.has(r)){a.delete(r),a.size<=0&&e.delete(i);return}let s=e.get(r);s===void 0&&(s=new Set,e.set(r,s)),s.add(i)}for(const r of t){const i=tF(r),a=i.length;for(let s=0;s<a;s++){const c=i[s%a],u=i[(s+1)%a],_=JSON.stringify(c),v=JSON.stringify(u);n(_,v)}}return e}function rF(t,e=0,n=!1){const r=[],i=nF(t);if(i.size<=0)return r;const a=new Set;for(;i.size>0;){const s=Array.from(i.entries()).find(C=>C[1].size===1);if(s===void 0)throw new Error("No corner with single adjacency found");const[c,u]=s;let _=JSON.parse(c);const v=Array.from(u)[0];let g=JSON.parse(v),h=v;const m=[];do{const C=i.get(h);if(C===void 0)throw new Error(`Corner with no adjacencies found ${h}`);const I=new Me(_.c,_.r),b=new Me(g.c,g.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,y=null,D=null;for(const re of C){const me=JSON.parse(re),Ce=new Me(me.c,me.r),_e=b.subtract(I),Se=Ce.subtract(b),Ve=_e.perpDotProduct(Se);w<Ve!=n&&(w=Ve,D=me,y=re)}if(n&&C.size>1&&a.add(h),D===null||y===null)throw new Error("Corner with no adjacencies found");C.delete(y),C.size<=0&&i.delete(h);const G=e*(g.c-_.c),F=e*(D.c-g.c),B=e*(_.r-g.r),W=e*(g.r-D.r),X=W+w*F,ee=G+w*B,ce=new Me(g.c+X,g.r+ee),J=4;a.has(h)?(m.push(new Me(ce.x-J*G,ce.y-J*F)),m.push(new Me(ce.x-J*B,ce.y-J*W))):m.push(ce),_=g,g=D,h=y}while(h!==v);r.push(m)}return r}function vo(t,e=0,n=!1){return rF(t,e,n).map(a=>Go(a,!0)).join("")}const iF=[new Me(-.5,-.5),new Me(.5,-.5),new Me(.5,.5),new Me(-.5,.5)];function oF(t,e,n=iF){if(e===1)return n;const r=[],i=n.length,a=0,s=360/e,c=t*s+a,u=(t+1)*s+a,_=c/(360/i),v=u/(360/i),g=Math.floor(_)%i,h=Math.ceil(_)%i,m=n[g].lerp(n[h],_%1),C=Math.floor(v)%i,I=Math.ceil(v)%i,b=n[C].lerp(n[I],v%1);r.push(m);for(let y=Math.ceil(_);y<=Math.floor(v);y++)r.push(n[y%i]);r.push(b);const w=new Me(0,0);return r.push(w),r}function hp(t,e,n=new Me(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const a=Math.cos(Math.PI/e),s=r?t:t/a,c=[];for(let u=0;u<e;u++){const _=s*Math.cos(u/e*2*Math.PI+i*2*Math.PI),v=s*Math.sin(u/e*2*Math.PI+i*2*Math.PI),g=n.add(new Me(_,v));c.push(g)}return c}function Go(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:a})=>`${i},${a}`).join("L")+n}function Ll(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){if(r&&t.length>1){const _=t[t.length-1];for(let g=0;g<t.length-1;g++)if(_.equals(t[g])){t.push(t[g+1]);break}const v=t[0];for(let g=1;g<t.length;g++)if(v.equals(t[g])){t.unshift(t[g-1]);break}}if(t.length===1)t.push(t[0]);else{if(e){let _=t[1].subtract(t[0]);_=_.normalise(),_=_.scale(e),t[0]=t[0].add(_)}if(n){const _=t.length;let v=t[_-2].subtract(t[_-1]);v=v.normalise(),v=v.scale(n),t[_-1]=t[_-1].add(v)}}if(!i)return Go(t);const a=t[0],s=["M",`${a.x},${a.y}`],c=t.length;for(let _=2;_<c;_++){const v=t[_-2],g=t[_-1],h=t[_];let m=v.subtract(g).normalise();m=m.scale(i),m=m.add(g);let C=h.subtract(g).normalise();C=C.scale(i),C=C.add(g),s.push(`L${m.x},${m.y} Q ${g.x},${g.y} ${C.x},${C.y}`)}const u=t[c-1];return s.push(`L${u.x},${u.y}`),s.join(" ")}function Ca(t,e={}){const n=Vs(t);return Ll(n,e)}function Jn(t){return new Me(t.c+.5,t.r+.5)}function Vs(t){return t.map(n=>Jn(n))}const aF=[new Me(-.5,-.5),new Me(.5,-.5),new Me(.5,.5),new Me(-.5,.5),new Me(0,-.5),new Me(0,.5),new Me(-.5,0),new Me(.5,0)];function sF(t,e){const n=aF[t];return n.subtract(n.scale(e))}function vp(t,e){const n=[new Me(t.c-e,t.r-e),new Me(t.c+e,t.r+e)],r=[new Me(t.c-e,t.r+e),new Me(t.c+e,t.r-e)];return[n,r].map(a=>Go(a,!1)).join("")}const lF=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function yl(t,e="none"){return lF.get(t)||e}function cF(t,e,n){let r=[];function a(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let s=[];return t==="max"?s=[new Me(-.12,-.32),new Me(0,-.4),new Me(.12,-.32)]:s=[new Me(-.12,-.4),new Me(0,-.32),new Me(.12,-.4)],r=[s,a(s,90),a(s,180),a(s,270)],r=r.map(c=>c.map(u=>{const _=new Me(n+.5,e+.5);return u.add(_)})),r}var uF=de('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),dF=de('<g class="regions-border"></g>');function _F(t,e){ae(e,!1);const n=it(),r=()=>Ee(hn,"$cellsStore",n),i=()=>Ee(vn,"$gridStore",n),a=T(),s=T();function c(_,v){return _.filter(m=>m.region===v).map(m=>({r:m.r,c:m.c}))}k(()=>r(),()=>{S(a,r())}),k(()=>i(),()=>{S(s,i().getUsedRegions())}),Ie(),ge();var u=dF();st(u,5,()=>p(s),yt,(_,v)=>{var g=uF();te(()=>A(g,"d",vo(c(p(a),p(v)),0,!1))),te(()=>A(g,"id",`region-${p(v)??""}`)),R(_,g)}),Y(u),R(t,u),se()}var fF=de('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function gF(t,e){ae(e,!1);const n=it(),r=()=>Ee(Di,"$selectionStore",n),i=()=>Ee(Qt,"$toolStore",n),a=T(),s=T(),c=T(),u=T(),_=T(),v=T();let g=U(e,"boundingBox",8);const h=.06,m=.05,C="#080808",I="#b2b2b2";k(()=>Z(g()),()=>{S(a,g().x)}),k(()=>Z(g()),()=>{S(s,g().y)}),k(()=>r(),()=>{S(c,r().cells)}),k(()=>p(c),()=>{S(u,vo(p(c),0))}),k(()=>p(c),()=>{S(_,vo(p(c),h))}),k(()=>i(),()=>{S(v,_d(i()))}),Ie(),ge();var b=fF(),w=V(b),y=V(w);A(y,"stdDeviation",m),Ti(),Y(w);var D=$(w),G=V(D);A(G,"fill",I);var F=$(G);A(F,"fill",C),Y(D);var B=$(D);Y(b),te(()=>{A(b,"visibility",p(v)?"visible":"hidden"),A(D,"x",p(a)),A(D,"y",p(s)),A(G,"x",p(a)),A(G,"y",p(s)),A(F,"d",p(_)),A(B,"d",p(u))}),R(t,b),se()}var hF=de('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function vF(t,e){ae(e,!1);const n=T(),r=T();let i=U(e,"grid",8);k(()=>Z(i()),()=>{S(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),k(()=>p(n),()=>{S(r,vo(p(n),0))}),Ie(),ge();var a=hF(),s=V(a);Y(a),te(()=>A(s,"d",p(r))),R(t,a),se()}function Er(t){return Ui(ht,n=>{const r=[];for(const[i,a]of n.entries())t(i)&&r.push({toolId:i,element:a});return r})}const Vd=Er(IO),pF=Ui(Vd,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),mF=Ui(Vd,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),CF=Er(ld),EF=Er(Zh),IF=Er(qh),bF=Er(cd),wF=Er(Qh),OF=Er(ud),LF=Er(dd),yF=Er(Jh),AF=Er(va);var SF=de('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function Fa(t,e){let n=U(e,"l",8,.2),r=U(e,"id",8),i=U(e,"strokeWidth",8),a=U(e,"stroke",8,"black");const s=.5,c=`M${s-n()},${s-n()} L${s},${s} L${s-n()},${s+n()}`;var u=SF();A(u,"viewBox","0 0 1 1"),A(u,"refX",s),A(u,"refY",s),A(u,"markerWidth",1),A(u,"markerHeight",1);var _=V(u);A(_,"d",c),Y(u),te(()=>{A(u,"id",r()),A(_,"stroke-width",i()),A(_,"stroke",a())}),R(t,u)}var NF=de("<path></path>");function Ea(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T(),_=T();let v=U(e,"cells",8),g=U(e,"shape",8,pd);const h="square";k(()=>Z(g()),()=>{S(n,g().inset??.06)}),k(()=>Z(g()),()=>{S(r,g().stroke??"black")}),k(()=>Z(g()),()=>{S(i,g().strokeWidth??.03)}),k(()=>Z(g()),()=>{S(a,g().strokeDasharray??.08)}),k(()=>Z(g()),()=>{S(s,g().fill??"none")}),k(()=>Z(g()),()=>{S(c,g().connectDiag??!0)}),k(()=>(Z(v()),p(n),p(c)),()=>{S(u,vo(v(),p(n),p(c)))}),k(()=>Z(g()),()=>{S(_,g().strokeLinejoin??"miter")}),Ie(),ge();var m=NF();A(m,"stroke-linecap",h),te(()=>{A(m,"d",p(u)),A(m,"stroke",p(r)),A(m,"stroke-width",p(i)),A(m,"fill",p(s)),A(m,"stroke-dasharray",p(a)),A(m,"stroke-linejoin",p(_))}),R(t,m),se()}var xF=de('<path class="arrow-line" fill="none"></path>'),TF=de('<mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function RF(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T(),_=T(),v=T(),g=T(),h=T(),m=T(),C=T();let I=U(e,"tool",8),b=U(e,"arrowId",8),w=U(e,"boundingBox",8);const y=Jt(I().toolId,Tt)??md,D="round",G="round",F=crypto.randomUUID(),B=`arrow-mask-${b()}-${F}`,W=`arrow-marker-${b()}-${F}`;k(()=>Z(I()),()=>{S(n,I().shape??y)}),k(()=>Z(w()),()=>{S(r,w().x)}),k(()=>Z(w()),()=>{S(i,w().y)}),k(()=>p(n),()=>{var _e;S(a,((_e=p(n))==null?void 0:_e.r)??.4)}),k(()=>p(n),()=>{var _e;S(s,((_e=p(n))==null?void 0:_e.stroke)??"gray")}),k(()=>p(n),()=>{var _e;S(c,((_e=p(n))==null?void 0:_e.strokeWidth)??.1)}),k(()=>p(n),()=>{var _e;S(u,((_e=p(n))==null?void 0:_e.strokeDasharray)??0)}),k(()=>p(n),()=>{var _e;S(_,((_e=p(n))==null?void 0:_e.opacity)??.8)}),k(()=>(p(a),p(n)),()=>{var _e,Se,Ve,Ae;S(v,{shortenHead:p(a),shortenTail:((Se=(_e=p(n))==null?void 0:_e.linePathOptions)==null?void 0:Se.shortenTail)??.2,bezierRounding:((Ae=(Ve=p(n))==null?void 0:Ve.linePathOptions)==null?void 0:Ae.bezierRounding)??.4})}),k(()=>p(n),()=>{var _e;S(g,((_e=p(n))==null?void 0:_e.fill)??"none")}),k(()=>p(n),()=>{var _e;S(h,((_e=p(n))==null?void 0:_e.inset)??.2)}),k(()=>p(h),()=>{S(m,{...y,strokeDasharray:0,strokeLinejoin:"round",inset:p(h)})}),k(()=>Z(I()),()=>{S(C,Ca(I().cells))}),Ie(),ge();var X=TF(),ee=ue(X);A(ee,"id",B);var ce=V(ee),J=$(ce);Y(ee);var re=$(ee);Fa(re,{id:W,l:.2,get strokeWidth(){return p(c)},get stroke(){return p(s)}});var me=$(re);Ea(me,{get cells(){return I().cells},get shape(){return p(m)}});var Ce=$(me);st(Ce,1,()=>I().lines,yt,(_e,Se)=>{var Ve=xe(),Ae=ue(Ve);{var Le=ct=>{var Ke=xF();te(()=>A(Ke,"d",Ca(p(Se),p(v)))),A(Ke,"stroke-linejoin",D),A(Ke,"stroke-linecap",G),A(Ke,"marker-end",`url(#${W??""})`),te(()=>{A(Ke,"stroke",p(s)),A(Ke,"stroke-width",p(c)),A(Ke,"opacity",p(_)),A(Ke,"stroke-dasharray",p(u))}),R(ct,Ke)};he(Ae,ct=>{p(Se).length>1&&ct(Le)})}R(_e,Ve)}),te(()=>{A(ee,"x",p(r)),A(ee,"y",p(i)),A(ce,"x",p(r)),A(ce,"y",p(i)),A(J,"stroke-width",2*p(a)-p(c)),A(J,"d",p(C))}),R(t,X),se()}var DF=de('<path class="arrow-line" fill="none"></path>'),kF=de('<mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function GF(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T(),_=T(),v=T(),g=T();let h=U(e,"tool",8),m=U(e,"arrowId",8),C=U(e,"boundingBox",8);const I=Jt(h().toolId,Tt)??md,b="round",w="round",y=crypto.randomUUID(),D=`arrow-mask-${m()}-${y}`,G=`arrow-marker-${m()}-${y}`;k(()=>Z(h()),()=>{S(n,h().shape??I)}),k(()=>Z(C()),()=>{S(r,C().x)}),k(()=>Z(C()),()=>{S(i,C().y)}),k(()=>p(n),()=>{var re;S(a,((re=p(n))==null?void 0:re.r)??.4)}),k(()=>p(n),()=>{var re;S(s,((re=p(n))==null?void 0:re.stroke)??"gray")}),k(()=>p(n),()=>{var re;S(c,((re=p(n))==null?void 0:re.strokeWidth)??.1)}),k(()=>p(n),()=>{var re;S(u,((re=p(n))==null?void 0:re.strokeDasharray)??0)}),k(()=>p(n),()=>{var re;S(_,((re=p(n))==null?void 0:re.opacity)??.8)}),k(()=>(p(a),p(n)),()=>{var re,me,Ce,_e;S(v,{shortenHead:p(a),shortenTail:((me=(re=p(n))==null?void 0:re.linePathOptions)==null?void 0:me.shortenTail)??.2,bezierRounding:((_e=(Ce=p(n))==null?void 0:Ce.linePathOptions)==null?void 0:_e.bezierRounding)??.4})}),k(()=>Z(h()),()=>{S(g,Ca(h().cells))}),Ie(),ge();var F=kF(),B=ue(F);A(B,"id",D);var W=V(B),X=$(W);Y(B);var ee=$(B);Fa(ee,{id:G,l:.2,get strokeWidth(){return p(c)},get stroke(){return p(s)}});var ce=$(ee);A(ce,"mask",`url(#${D??""})`);var J=$(ce);st(J,1,()=>h().lines,yt,(re,me)=>{var Ce=xe(),_e=ue(Ce);{var Se=Ve=>{var Ae=DF();te(()=>A(Ae,"d",Ca(p(me),p(v)))),A(Ae,"stroke-linejoin",b),A(Ae,"stroke-linecap",w),A(Ae,"marker-end",`url(#${G??""})`),te(()=>{A(Ae,"stroke",p(s)),A(Ae,"stroke-width",p(c)),A(Ae,"opacity",p(_)),A(Ae,"stroke-dasharray",p(u))}),R(Ve,Ae)};he(_e,Ve=>{p(me).length>1&&Ve(Se)})}R(re,Ce)}),te(()=>{A(B,"x",p(r)),A(B,"y",p(i)),A(W,"x",p(r)),A(W,"y",p(i)),A(X,"stroke-width",2*p(a)-p(c)),A(X,"d",p(g)),A(ce,"d",p(g)),A(ce,"stroke-width",2*p(a)+p(c)),A(ce,"stroke",p(s))}),R(t,F),se()}var MF=de('<g class="arrow-tool"><!></g>');function UF(t,e){ae(e,!1);const n=T();let r=U(e,"tool",8),i=U(e,"arrowId",8),a=U(e,"boundingBox",8);const s=Jt(r().toolId,Tt)??md;k(()=>Z(r()),()=>{S(n,r().shape??s)}),Ie(),ge();var c=MF(),u=V(c);{var _=g=>{RF(g,{get tool(){return r()},get arrowId(){return i()},get boundingBox(){return a()}})},v=g=>{GF(g,{get tool(){return r()},get arrowId(){return i()},get boundingBox(){return a()}})};he(u,g=>{p(n).type===H.BULBOUS_ARROW?g(_):g(v,!1)})}Y(c),R(t,c),se()}var FF=de("<g></g>"),$F=de('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function HF(t,e){ae(e,!1);const n=it(),r=()=>Ee(OF,"$arrowToolsStore",n),i=T();let a=U(e,"boundingBox",8);k(()=>r(),()=>{S(i,r())}),Ie();var s=$F();st(s,5,()=>p(i),yt,(c,u)=>{let _=()=>p(u).toolId,v=()=>p(u).element;var g=FF();st(g,5,()=>Object.entries(v()),h=>h[0],(h,m)=>{UF(h,{get arrowId(){return p(m)[0]},get tool(){return p(m)[1]},get boundingBox(){return a()}})}),Y(g),te(()=>si(g,`element-group ${_()}`)),R(c,g)}),Y(s),R(t,s),se()}var PF=de('<!><path fill="none"></path>',1);function BF(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T();let c=U(e,"tool",8),u=U(e,"id",8);const _=c().cell,v=Jt(c().toolId,Tt)??UO,g=.3;function h(y,D){const G=rl(D),F=new Me(G.c,G.r).normalise().scale(g),B=Jn(y),W=B.subtract(F),X=B.add(F);return[W,X]}const m=crypto.randomUUID(),C=`single-cell-arrow-marker-${u()}-${m}`;k(()=>Z(c()),()=>{S(n,c().direction)}),k(()=>Z(c()),()=>{S(r,c().shape??v)}),k(()=>p(r),()=>{S(i,p(r).strokeWidth??.1)}),k(()=>p(r),()=>{S(a,p(r).stroke??"black")}),k(()=>p(n),()=>{S(s,Ll(h(_,p(n))))}),Ie(),ge();var I=PF(),b=ue(I);Fa(b,{id:C,l:.15,get stroke(){return p(a)},get strokeWidth(){return p(i)}});var w=$(b);A(w,"marker-end",`url(#${C??""})`),te(()=>{A(w,"d",p(s)),A(w,"stroke",p(a)),A(w,"stroke-width",p(i))}),R(t,I),se()}var WF=de('<path fill="none"></path>'),zF=de("<!><!>",1);function YF(t,e){ae(e,!1);const n=T(),r=T(),i=T();let a=U(e,"tool",8),s=U(e,"id",8);const c=a().cell,u=Jt(a().toolId,Tt)??FO,_=.2;function v(w,y){const D=rl(y),G=new Me(D.c,D.r),B=Jn(w).add(G.scale(.4));return[B.subtract(G.normalise().scale(_)),B]}function g(w){return Ll(v(c,w))}const h=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${s()}-${h}`;k(()=>Z(a()),()=>{S(n,a().shape??u)}),k(()=>p(n),()=>{S(r,p(n).strokeWidth??.08)}),k(()=>p(n),()=>{S(i,p(n).stroke??"black")}),Ie(),ge();var C=zF(),I=ue(C);Fa(I,{id:m,l:.1,get stroke(){return p(i)},get strokeWidth(){return p(r)}});var b=$(I);st(b,1,()=>a().directions,yt,(w,y)=>{var D=WF();te(()=>A(D,"d",g(p(y)))),A(D,"marker-end",`url(#${m??""})`),te(()=>{A(D,"stroke",p(i)),A(D,"stroke-width",p(r))}),R(w,D)}),R(t,C),se()}var jF=de('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function Ia(t,e){ae(e,!1);const n=T();let r=U(e,"value",8,""),i=U(e,"fontSize",8,.2),a=U(e,"x",8),s=U(e,"y",8),c=U(e,"position",8,"TL"),u=U(e,"fontColor",8,"var(--text-primary-color)"),_=U(e,"fontWeight",8,400),v=T(null),g=T(null);function h(y,D,G){const F=["TL","TR"].includes(G),W=["TL","BL"].includes(G)?y+.05:y,X=D;return new Me(W,X)}function m(y){return["TL","BL"].includes(y)?"start":"end"}function C(y){return["TL","TR"].includes(y)?"text-before-edge":""}Kw(()=>{if(!p(v)||!p(g))return;const y=p(v).getBBox();p(g).setAttribute("x",String(y.x)),p(g).setAttribute("y",String(y.y+y.height*.1)),p(g).setAttribute("width",String(y.width)),p(g).setAttribute("height",String(y.height*.8))}),k(()=>(Z(a()),Z(s()),Z(c())),()=>{S(n,h(a(),s(),c()))}),Ie(),ge();var I=xe(),b=ue(I);{var w=y=>{var D=jF(),G=ue(D);Ri(G,W=>S(g,W),()=>p(g));var F=$(G);te(()=>A(F,"text-anchor",m(c()))),te(()=>A(F,"dominant-baseline",C(c())));var B=V(F,!0);Y(F),Ri(F,W=>S(v,W),()=>p(v)),te(()=>{var W,X;A(F,"x",(W=p(n))==null?void 0:W.x),A(F,"y",(X=p(n))==null?void 0:X.y),A(F,"font-size",i()),A(F,"fill",u()),A(F,"font-weight",_()),nt(B,r())}),R(y,D)};he(b,y=>{r().length&&y(w)})}R(t,I),se()}var VF=ie("<!> <!>",1);function pp(t,e){ae(e,!1);const n=T(),r=T();let i=U(e,"cells",8),a=U(e,"shape",8,pd),s=U(e,"value",8,void 0);k(()=>Z(i()),()=>{S(n,i()[0])}),k(()=>p(n),()=>{S(r,new Me(p(n).c,p(n).r))}),Ie(),ge();var c=VF(),u=ue(c);Ea(u,{get cells(){return i()},get shape(){return a()}});var _=$(u,2);{var v=g=>{Ia(g,{get value(){return s()},get x(){return p(r).x},get y(){return p(r).y},position:"TL"})};he(_,g=>{s()&&s().length&&g(v)})}R(t,c),se()}var KF=de("<rect></rect>");function XF(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T(),_=T(),v=T(),g=T(),h=T();let m=U(e,"cx",8),C=U(e,"cy",8),I=U(e,"shape",8);k(()=>Z(I()),()=>{S(n,I().r??.5)}),k(()=>(Z(m()),p(n)),()=>{S(r,m()-p(n))}),k(()=>(Z(C()),p(n)),()=>{S(i,C()-p(n))}),k(()=>p(n),()=>{S(a,2*p(n))}),k(()=>p(n),()=>{S(s,2*p(n))}),k(()=>Z(I()),()=>{S(c,I().stroke??"black")}),k(()=>Z(I()),()=>{S(u,I().strokeWidth??.02)}),k(()=>Z(I()),()=>{S(_,I().fill??"none")}),k(()=>Z(I()),()=>{S(v,I().angle??0)}),k(()=>Z(I()),()=>{S(g,I().strokeDasharray??0)}),k(()=>Z(I()),()=>{S(h,I().opacity??1)}),Ie(),ge();var b=KF();te(()=>{A(b,"x",p(r)),A(b,"y",p(i)),A(b,"width",p(a)),A(b,"height",p(s)),A(b,"stroke",p(c)),A(b,"stroke-width",p(u)),A(b,"fill",p(_)),A(b,"transform",`rotate(${p(v)}, ${m()}, ${C()})`),A(b,"stroke-dasharray",p(g)),A(b,"opacity",p(h))}),R(t,b),se()}var qF=de('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function _h(t,e){ae(e,!1);const n=it(),r=()=>Ee(pF,"$minimumConstraintsStore",n),i=()=>Ee(mF,"$maximumConstraintsStore",n),a=T(),s=T(),c=T();let u=U(e,"coord",8),_=U(e,"minOrMax",8);function v(b,w){const y=[!0,!0,!0,!0];let D=[[0,-1],[1,0],[0,1],[-1,0]];for(let G=0;G<D.length;G++){let F=D[G];const B={r:b.r+F[1],c:b.c+F[0]};y[G]=!Object.values(w).some(W=>Ye(B,W.cell))}return y}function g(b,w){let y=cF(_(),b.r,b.c);const D=v(b,w);return y=y.filter((F,B)=>D[B]),y.map(F=>Go(F,!1)).join("")}function h(b,w){return _()==="max"?w:b}k(()=>Z(u()),()=>{S(a,u().c)}),k(()=>Z(u()),()=>{S(s,u().r)}),k(()=>(r(),i()),()=>{S(c,h(r(),i()))}),Ie(),ge();var m=qF(),C=V(m);A(C,"width",1),A(C,"height",1);var I=$(C);te(()=>A(I,"d",g(u(),p(c)))),Y(m),te(()=>{A(C,"x",p(a)),A(C,"y",p(s))}),R(t,m),se()}var ZF=de("<circle></circle>");function Dr(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T();let u=U(e,"x",8),_=U(e,"y",8),v=U(e,"shape",8);k(()=>Z(v()),()=>{S(n,v().r??.35)}),k(()=>Z(v()),()=>{S(r,v().stroke??"black")}),k(()=>Z(v()),()=>{var h;S(i,(h=v())==null?void 0:h.opacity)}),k(()=>Z(v()),()=>{S(a,v().strokeWidth??.02)}),k(()=>Z(v()),()=>{S(s,v().fill??"none")}),k(()=>Z(v()),()=>{S(c,v().strokeDasharray??0)}),Ie(),ge();var g=ZF();te(()=>{A(g,"cx",u()),A(g,"cy",_()),A(g,"r",p(n)),A(g,"stroke",p(r)),A(g,"stroke-width",p(a)),A(g,"fill",p(s)),A(g,"opacity",p(i)),A(g,"stroke-dasharray",p(c))}),R(t,g),se()}var QF=de("<ellipse></ellipse>");function JF(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T();let _=U(e,"cx",8),v=U(e,"cy",8),g=U(e,"shape",8);k(()=>Z(g()),()=>{S(n,g().width??.5)}),k(()=>Z(g()),()=>{S(r,g().height??.5)}),k(()=>Z(g()),()=>{S(i,g().stroke??"black")}),k(()=>Z(g()),()=>{var m;S(a,(m=g())==null?void 0:m.opacity)}),k(()=>Z(g()),()=>{S(s,g().strokeWidth??.02)}),k(()=>Z(g()),()=>{S(c,g().fill??"none")}),k(()=>Z(g()),()=>{S(u,g().angle??0)}),Ie(),ge();var h=QF();te(()=>{A(h,"cx",_()),A(h,"cy",v()),A(h,"rx",p(n)/2),A(h,"ry",p(r)/2),A(h,"stroke",p(i)),A(h,"stroke-width",p(s)),A(h,"fill",p(c)),A(h,"opacity",p(a)),A(h,"transform",`rotate(${p(u)}, ${_()}, ${v()} )`)}),R(t,h),se()}var e4=de("<polygon></polygon>");function Ks(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T(),_=T();let v=U(e,"cx",8),g=U(e,"cy",8),h=U(e,"shape",8);k(()=>Z(h()),()=>{S(n,h().n??3)}),k(()=>Z(h()),()=>{S(r,h().r??.5)}),k(()=>(p(r),p(n),Z(v()),Z(g())),()=>{S(i,hp(p(r),p(n),new Me(v(),g())))}),k(()=>p(i),()=>{S(a,p(i).map(C=>`${C.x},${C.y}`).join(" "))}),k(()=>Z(h()),()=>{S(s,h().stroke??"black")}),k(()=>Z(h()),()=>{S(c,h().strokeWidth??.02)}),k(()=>Z(h()),()=>{S(u,h().fill??"none")}),k(()=>Z(h()),()=>{S(_,h().angle??0)}),Ie(),ge();var m=e4();te(()=>{A(m,"points",p(a)),A(m,"stroke",p(s)),A(m,"stroke-width",p(c)),A(m,"fill",p(u)),A(m,"transform",`rotate(${p(_)}, ${v()}, ${g()} )`)}),R(t,m),se()}var t4=de("<rect></rect>");function n4(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T();let _=U(e,"cx",8),v=U(e,"cy",8),g=U(e,"shape",8);k(()=>Z(g()),()=>{S(n,g().width??.5)}),k(()=>Z(g()),()=>{S(r,g().height??.5)}),k(()=>(Z(_()),p(n)),()=>{S(i,_()-p(n)/2)}),k(()=>(Z(v()),p(r)),()=>{S(a,v()-p(r)/2)}),k(()=>Z(g()),()=>{S(s,g().stroke||"black")}),k(()=>Z(g()),()=>{S(c,g().strokeWidth||.023)}),k(()=>Z(g()),()=>{S(u,g().fill||"none")}),Ie(),ge();var h=t4();te(()=>{A(h,"x",p(i)),A(h,"y",p(a)),A(h,"width",p(n)),A(h,"height",p(r)),A(h,"stroke",p(s)),A(h,"stroke-width",p(c)),A(h,"fill",p(u))}),R(t,h),se()}function Al(t,e){ae(e,!1);const n=T();let r=U(e,"cx",8),i=U(e,"cy",8),a=U(e,"shape",8);k(()=>(Z(a()),H),()=>{var v;S(n,((v=a())==null?void 0:v.type)??H.CIRCLE)}),Ie(),ge();var s=xe(),c=ue(s);{var u=v=>{Dr(v,{get x(){return r()},get y(){return i()},get shape(){return a()}})},_=v=>{var g=xe(),h=ue(g);{var m=I=>{JF(I,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},C=I=>{var b=xe(),w=ue(b);{var y=G=>{XF(G,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},D=G=>{var F=xe(),B=ue(F);{var W=ee=>{n4(ee,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},X=ee=>{var ce=xe(),J=ue(ce);{var re=Ce=>{Ks(Ce,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},me=Ce=>{Dr(Ce,{get x(){return r()},get y(){return i()},get shape(){return a()}})};he(J,Ce=>{p(n)===H.POLYGON?Ce(re):Ce(me,!1)},!0)}R(ee,ce)};he(B,ee=>{p(n)===H.RECTANGLE?ee(W):ee(X,!1)},!0)}R(G,F)};he(w,G=>{p(n)===H.SQUARE?G(y):G(D,!1)},!0)}R(I,b)};he(h,I=>{p(n)===H.ELLIPSE?I(m):I(C,!1)},!0)}R(v,g)};he(c,v=>{p(n)===H.CIRCLE?v(u):v(_,!1)})}R(t,s),se()}var r4=de("<circle></circle>");function i4(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T();let u=U(e,"x",8),_=U(e,"y",8),v=U(e,"value",8),g=U(e,"shape",8);k(()=>Z(g()),()=>{S(n,g().r??.35)}),k(()=>Z(g()),()=>{S(r,g().stroke??"black")}),k(()=>Z(g()),()=>{var m;S(i,(m=g())==null?void 0:m.opacity)}),k(()=>Z(g()),()=>{S(a,g().strokeWidth??.02)}),k(()=>Z(v()),()=>{S(s,v()==="1"?"var(--constraint-color-red)":v()==="2"?"var(--constraint-color-green)":v()==="3"?"var(--constraint-color-blue)":"none")}),k(()=>Z(g()),()=>{S(c,g().strokeDasharray??0)}),Ie(),ge();var h=r4();te(()=>{A(h,"cx",u()),A(h,"cy",_()),A(h,"r",p(n)),A(h,"stroke",p(r)),A(h,"stroke-width",p(a)),A(h,"fill",p(s)),A(h,"opacity",p(i)),A(h,"stroke-dasharray",p(c))}),R(t,h),se()}var o4=de('<g class="single-cell-tool"><!><!></g>');function a4(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T();let c=U(e,"tool",8),u=U(e,"id",8);const _=c().cell,v=Jt(c().toolId,Tt)??MO;k(()=>Z(c()),()=>{S(n,c().shape??v)}),k(()=>(p(n),H),()=>{var w;S(r,((w=p(n))==null?void 0:w.type)||H.CIRCLE)}),k(()=>{},()=>{S(i,{x:_.c+.5,y:_.r+.5})}),k(()=>Me,()=>{S(a,new Me(_.c,_.r))}),k(()=>Z(c()),()=>{S(s,c().value)}),Ie(),ge();var g=o4(),h=V(g);{var m=w=>{_h(w,{coord:_,minOrMax:"min"})},C=w=>{var y=xe(),D=ue(y);{var G=B=>{_h(B,{coord:_,minOrMax:"max"})},F=B=>{var W=xe(),X=ue(W);{var ee=J=>{i4(J,{get x(){return p(i).x},get y(){return p(i).y},get value(){return p(s)},get shape(){return p(n)}})},ce=J=>{var re=xe(),me=ue(re);{var Ce=Se=>{pp(Se,{cells:[_],get shape(){return p(n)},get value(){return c().value}})},_e=Se=>{Al(Se,{get cx(){return p(i).x},get cy(){return p(i).y},get shape(){return p(n)}})};he(me,Se=>{p(r)===H.CAGE?Se(Ce):Se(_e,!1)},!0)}R(J,re)};he(X,J=>{c().toolId===d.COLORED_COUNTING_CIRCLES?J(ee):J(ce,!1)},!0)}R(B,W)};he(D,B=>{c().toolId===d.MAXIMUM?B(G):B(F,!1)},!0)}R(w,y)};he(h,w=>{c().toolId===d.MINIMUM?w(m):w(C,!1)})}var I=$(h);{var b=w=>{Ia(w,{get value(){return p(s)},get x(){return p(a).x},get y(){return p(a).y},position:"TL"})};he(I,w=>{p(r)!==H.CAGE&&c().toolId!==d.COLORED_COUNTING_CIRCLES&&p(s)&&w(b)})}Y(g),te(()=>A(g,"id",`constraint-${u()}`)),R(t,g),se()}var s4=de("<g></g>"),l4=de('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function c4(t,e){ae(e,!1);const n=it(),r=()=>Ee(Vd,"$singleCellToolsStore",n),i=T();k(()=>r(),()=>{S(i,r())}),Ie();var a=l4();st(a,5,()=>p(i),yt,(s,c)=>{let u=()=>p(c).toolId,_=()=>p(c).element;var v=s4();st(v,5,()=>Object.entries(_()),g=>g[0],(g,h)=>{var m=xe(),C=ue(m);{var I=w=>{BF(w,{get tool(){return p(h)[1]},get id(){return p(h)[0]}})},b=w=>{var y=xe(),D=ue(y);{var G=B=>{YF(B,{get tool(){return p(h)[1]},get id(){return p(h)[0]}})},F=B=>{var W=xe(),X=ue(W);{var ee=ce=>{a4(ce,{get tool(){return p(h)[1]},get id(){return p(h)[0]}})};he(X,ce=>{p(h)[1].type==="SIMPLE"&&ce(ee)},!0)}R(B,W)};he(D,B=>{p(h)[1].type==="MULTIARROW"?B(G):B(F,!1)},!0)}R(w,y)};he(C,w=>{p(h)[1].type==="ARROW"?w(I):w(b,!1)})}R(g,m)}),Y(v),te(()=>si(v,`element-group ${u()}`)),R(s,v)}),Y(a),R(t,a),se()}function u4(t,e){const n=t.getRow(e.r);return new Set(n)}function d4(t,e){const n=t.getCol(e.c);return new Set(n)}function _4(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function f4(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function g4(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function h4(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function v4(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function p4(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function m4(t,e,n){let r=new Set;const a=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),s=a.length,c=[a[0],a[s-1]],u=a.slice(1,s-1),_=c.findIndex(g=>g===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((h,m)=>m!==_);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function C4(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function E4(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function I4(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(d.ANTIKNIGHT)&&(r=r.union(f4(t,i))),e.get(d.ANTIKING)&&(r=r.union(g4(t,i))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(h4(t,i))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(p4(t,i))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(v4(t,i)))),r}function fu(t,e,n,r,i){const a=e.get(r);if(a)for(const s of Object.entries(a)){const c=s[1],u=E4(t,n,c);i=new Set([...i,...u])}return i}function b4(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const a=e.get(d.BETWEEN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=m4(t,i,u);r=new Set([...r,..._])}const s=e.get(d.RENBAN_LINE);if(s)for(const c of Object.entries(s)){const u=c[1],_=C4(t,i,u);r=new Set([...r,..._])}return r=fu(t,e,i,d.KILLER_CAGE,r),r=fu(t,e,i,d.PARITY_BALANCE_CAGE,r),r=fu(t,e,i,d.SPOTLIGHT_CAGE,r),r}function mp(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,a=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...u4(i,e),...d4(i,e),..._4(i,e)])),n=new Set([...n,...I4(i,r,e)]),n=new Set([...n,...b4(i,a,e)]);const s=i.getCell(e.r,e.c);return s&&n.delete(s),n}function w4(t,e){const n=[];if(e.length==0)return[];for(const a of e)n.push(mp(t,a));const r=n.reduce((a,s)=>a.intersection(s)),i=[];for(const a of r)i.push(a.toCoords());return i}var O4=de('<tspan class="svelte-xct9ah"> </tspan>'),L4=de('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function y4(t,e){ae(e,!1);const n=T();let r=U(e,"cell",8),i=U(e,"seen_values",8);const a=.25;function s(v){return i().find(h=>h===v)!==void 0}k(()=>Z(r()),()=>{S(n,Jn({r:r().r,c:r().c}))}),Ie(),ge();var c=xe(),u=ue(c);{var _=v=>{var g=L4(),h=V(g);A(h,"font-size",a),st(h,5,()=>r().centerMarks,yt,(m,C)=>{var I=O4();const b=Ze(()=>s(p(C)));te(()=>Lt(I,"conflict",p(b)));var w=V(I,!0);Y(I),te(()=>nt(w,p(C))),R(m,I)}),Y(h),Y(g),te(()=>{A(h,"x",p(n).x),A(h,"y",p(n).y),A(h,"textLength",r().centerMarks.length>5?"0.9":void 0)}),R(v,g)};he(u,v=>{r().centerMarks.length&&v(_)})}R(t,c),se()}var A4=de('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),S4=de('<g class="corner-marks-group"></g>');function N4(t,e){ae(e,!1);let n=U(e,"cell",8),r=U(e,"seen_values",8);const i=.25,a=.28;function s(g){const h=g.cornerMarks.slice(0,8),m=Jn({r:g.r,c:g.c});return h.map((C,I)=>{const b=sF(I,a);return{pos:m.add(b),value:C,idx:I}})}function c(g){return r().find(m=>m===g)!==void 0}ge();var u=xe(),_=ue(u);{var v=g=>{var h=S4();st(h,5,()=>s(n()),yt,(m,C)=>{let I=()=>p(C).pos,b=()=>p(C).value;var w=A4();A(w,"font-size",i);const y=Ze(()=>c(b()));var D=V(w,!0);Y(w),te(()=>{A(w,"x",I().x),A(w,"y",I().y),Lt(w,"conflict",p(y)),nt(D,b())}),R(m,w)}),Y(h),R(g,h)};he(_,g=>{n().cornerMarks.length&&g(v)})}R(t,u),se()}var x4=de('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),T4=de('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),R4=de('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),D4=de("<!><!>",1),k4=de('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function G4(t,e){ae(e,!1);const n=it(),r=()=>Ee(Yt,"$settingsStore",n),i=()=>Ee(Na,"$puzzleStore",n),a=()=>Ee(Qt,"$toolStore",n),s=T(),c=T(),u=T(),_=T(),v=T(),g=T(),h=T();let m=U(e,"cell",8);const C=.8,I=400;function b(F,B){if(!F)return[];let X=[...mp(p(v),B.toCoords())].map(ee=>ee.value).filter(ee=>ee!==null);return X=[...new Set(X)],X}function w(F){return F?"1":"0"}k(()=>Z(m()),()=>{S(s,m().value)}),k(()=>Z(m()),()=>{S(c,m().given)}),k(()=>Z(m()),()=>{S(u,Jn({r:m().r,c:m().c}))}),k(()=>r(),()=>{S(_,r().highlightPencilmarkConflicts)}),k(()=>i(),()=>{S(v,i())}),k(()=>r(),()=>{S(g,r().showSolution)}),k(()=>(p(_),Z(m())),()=>{S(h,b(p(_),m()))}),Ie(),ge();var y=xe(),D=ue(y);{var G=F=>{var B=k4(),W=V(B);{var X=ce=>{var J=xe(),re=ue(J);{var me=Ce=>{var _e=x4();A(_e,"font-size",C),A(_e,"font-weight",I);var Se=V(_e,!0);Y(_e),te(()=>{A(_e,"x",p(u).x),A(_e,"y",p(u).y),nt(Se,m().region)}),R(Ce,_e)};he(re,Ce=>{m().region!==null&&Ce(me)})}R(ce,J)},ee=ce=>{var J=xe(),re=ue(J);{var me=_e=>{var Se=xe(),Ve=ue(Se);{var Ae=Le=>{var ct=T4();A(ct,"font-size",C),A(ct,"font-weight",I);var Ke=V(ct,!0);te(()=>nt(Ke,w(m().fog))),Y(ct),te(()=>{A(ct,"x",p(u).x),A(ct,"y",p(u).y)}),R(Le,ct)};he(Ve,Le=>{m().fog!==null&&Le(Ae)})}R(_e,Se)},Ce=_e=>{var Se=xe(),Ve=ue(Se);{var Ae=ct=>{var Ke=R4();A(Ke,"font-size",C),A(Ke,"font-weight",I);var An=V(Ke,!0);Y(Ke),te(()=>{A(Ke,"x",p(u).x),A(Ke,"y",p(u).y),Lt(Ke,"given",p(c)),nt(An,p(s))}),R(ct,Ke)},Le=ct=>{var Ke=D4(),An=ue(Ke);N4(An,{get cell(){return m()},get seen_values(){return p(h)}});var Hn=$(An);y4(Hn,{get cell(){return m()},get seen_values(){return p(h)}}),R(ct,Ke)};he(Ve,ct=>{p(s)!==null?ct(Ae):ct(Le,!1)},!0)}R(_e,Se)};he(re,_e=>{a()===d.FOG?_e(me):_e(Ce,!1)},!0)}R(ce,J)};he(W,ce=>{a()===d.REGIONS?ce(X):ce(ee,!1)})}Y(B),te(()=>Lt(B,"hide-given",m().given)),R(F,B)};he(D,F=>{p(g)||F(G)})}R(t,y),se()}var M4=de("<path></path>"),U4=de('<g class="highlights-group"></g>');function F4(t,e){ae(e,!1);const n=it(),r=()=>Ee(Qt,"$toolStore",n);let i=U(e,"cell",8);function a(_){const v=Jn({r:i().r,c:i().c}),g=i().highlights.length;return i().highlights.map((m,C)=>{let I=oF(C,g);I=I.map(w=>w.add(v));const b=Go(I,!0);return{colorId:m,d:b}})}ge();var s=xe(),c=ue(s);{var u=_=>{var v=xe(),g=ue(v);{var h=m=>{var C=U4();st(C,5,()=>a(i()),yt,(I,b)=>{let w=()=>p(b).colorId,y=()=>p(b).d;var D=M4();te(()=>{si(D,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),A(D,"d",y())}),R(I,D)}),Y(C),R(m,C)};he(g,m=>{i().highlights.length&&m(h)})}R(_,v)};he(c,_=>{r()!==d.REGIONS&&_(u)})}R(t,s),se()}var $4=de('<path class="cell-marker" fill="none"></path>'),H4=de('<circle fill="none" opacity="0.9"></circle>');function P4(t,e){ae(e,!1);const n=T(),r=T();let i=U(e,"marker",8);const a=.3,s=.08;k(()=>Z(i()),()=>{S(n,vp(i(),a))}),k(()=>Z(i()),()=>{S(r,yl(i().colorId,"black"))}),Ie(),ge();var c=xe(),u=ue(c);{var _=g=>{var h=$4();A(h,"stroke-width",s),te(()=>{A(h,"d",p(n)),A(h,"stroke",p(r))}),R(g,h)},v=g=>{var h=H4();A(h,"r",a),A(h,"stroke-width",s),te(()=>{si(h,`cell-marker color-${i().colorId??""}`),A(h,"cx",i().c),A(h,"cy",i().r),A(h,"stroke",p(r))}),R(g,h)};he(u,g=>{i().marker==="X"?g(_):g(v,!1)})}R(t,c),se()}var B4=de('<g class="cell-markers"></g>');function W4(t,e){let n=U(e,"markers",8);var r=B4();st(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,a)=>{P4(i,{get marker(){return p(a)}})}),Y(r),R(t,r)}var z4=de('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function Y4(t,e){ae(e,!1);const n=T();let r=U(e,"draftLineMarker",8);const i=.2;function a(u){return u.map(v=>[new Me(v.p1.c,v.p1.r),new Me(v.p2.c,v.p2.r)]).flat()}function s(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?yl(_,"black"):"darkred"}k(()=>Z(r()),()=>{S(n,Go(a(r().draftLine)))}),Ie(),ge();var c=z4();te(()=>A(c,"stroke",s(r()))),A(c,"stroke-width",i),A(c,"opacity",.5),te(()=>A(c,"d",p(n))),R(t,c),se()}var j4=de('<path fill="none" opacity="0.9"></path>');function V4(t,e){ae(e,!1);const n=T(),r=T();let i=U(e,"marker",8);const a=.08,s=.04;k(()=>Z(i()),()=>{S(n,vp(i(),a))}),k(()=>Z(i()),()=>{S(r,yl(i().colorId,"black"))}),Ie(),ge();var c=j4();A(c,"stroke-width",s),te(()=>{A(c,"d",p(n)),si(c,`edge-marker color-${i().colorId??""}`),A(c,"stroke",p(r))}),R(t,c),se()}var K4=de('<g class="edge-markers"></g>');function X4(t,e){let n=U(e,"markers",8);var r=K4();st(r,5,n,i=>`${i.r}, ${i.c}`,(i,a)=>{V4(i,{get marker(){return p(a)}})}),Y(r),R(t,r)}var q4=de('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),Z4=de('<g class="line-markers svelte-yha19m"></g>');function Q4(t,e){ae(e,!1);let n=U(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function a(c){return yl(c,"black")}ge();var s=Z4();st(s,5,n,c=>i(c),(c,u)=>{var _=q4();A(_,"stroke-width",r),te(()=>A(_,"stroke",a(p(u).colorId))),te(()=>{A(_,"x1",p(u).p1.c),A(_,"y1",p(u).p1.r),A(_,"x2",p(u).p2.c),A(_,"y2",p(u).p2.r),si(_,`line-marker color-${p(u).colorId??""} svelte-yha19m`)}),R(c,_)}),Y(s),R(t,s),se()}var J4=de('<g class="pen-tool"><!><!><!><!></g>');function e$(t,e){ae(e,!1);const n=it(),r=()=>Ee(zs,"$penToolStore",n),i=T();k(()=>r(),()=>{S(i,{draftLine:r().draftLine,mode:r().mode})}),Ie(),ge();var a=J4(),s=V(a);Q4(s,{get lineMarkers(){return r().lineMarkers}});var c=$(s);X4(c,{get markers(){return r().edgeMarkers}});var u=$(c);W4(u,{get markers(){return r().cellMarkers}});var _=$(u);Y4(_,{get draftLineMarker(){return p(i)}}),Y(a),R(t,a),se()}var t$=de('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function n$(t,e){ae(e,!1);const n=it(),r=()=>Ee(Di,"$selectionStore",n),i=()=>Ee(Yt,"$settingsStore",n),a=()=>Ee(Na,"$puzzleStore",n),s=()=>Ee(Qt,"$toolStore",n),c=T(),u=T(),_=T(),v=T(),g={type:H.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function h(b,w){return b.length?w4(p(_),b):[]}k(()=>r(),()=>{S(c,r().cells)}),k(()=>i(),()=>{S(u,i().highlightCellsSeenBySelection)}),k(()=>a(),()=>{S(_,a())}),k(()=>s(),()=>{S(v,_d(s()))}),Ie(),ge();var m=xe(),C=ue(m);{var I=b=>{var w=t$(),y=V(w),D=Ze(()=>h(p(c),p(_)));Ea(y,{get cells(){return p(D)},shape:g}),Y(w),R(b,w)};he(C,b=>{p(u)&&p(v)&&b(I)})}R(t,m),se()}function Sl(t){const e=[],n=t.map(a=>a.value).filter(a=>a!==null),i=[...Rv(n).entries()].filter(([,a])=>a>1).map(([a])=>a);return e.push(...t.filter(a=>a.value!==null&&i.includes(a.value))),e}function r$(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Sl(r))}return new Set(e)}function i$(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Sl(r))}return new Set(e)}function o$(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Sl(r))}return new Set(e)}function a$(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getCellsByKnightMove(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function s$(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getNeighboorCells(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function l$(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getOrthogonallyAdjacentCells(r).filter(s=>s.value!==null).filter(s=>s.value!==null&&r.value!==null&&Math.abs(r.value-s.value)===1);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function c$(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),a=Sl(i);a.length&&e.push(...a)}return new Set(e)}function u$(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...r$(t),...i$(t),...o$(t)]);n=n.union(i)}return e.get(d.ANTIKNIGHT)&&(n=n.union(a$(t))),e.get(d.ANTIKING)&&(n=n.union(s$(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(l$(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(c$(t))),n}function d$(t,e){return[...new Set([...u$(t,e)])]}var _$=de('<rect class="conflict svelte-4mp6ok"></rect>'),f$=de('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function g$(t,e){ae(e,!1);const n=it(),r=()=>Ee(Yt,"$settingsStore",n),i=()=>Ee(vn,"$gridStore",n),a=()=>Ee(Mr,"$globalConstraintsStore",n),s=()=>Ee(hn,"$cellsStore",n),c=T(),u=T(),_=T(),v=T();H.CAGE;function g(I){return d$(p(u),p(_)).map(y=>y.toCoords())}k(()=>r(),()=>{S(c,r().checkConflicts)}),k(()=>i(),()=>{S(u,i())}),k(()=>a(),()=>{S(_,a())}),k(()=>s(),()=>{S(v,s())}),Ie(),ge();var h=xe(),m=ue(h);{var C=I=>{var b=f$();st(b,5,()=>g(p(v)),yt,(w,y)=>{var D=_$();A(D,"width",1),A(D,"height",1),te(()=>{A(D,"x",p(y).c),A(D,"y",p(y).r)}),R(w,D)}),Y(b),R(I,b)};he(m,I=>{p(c)&&I(C)})}R(t,h),se()}var h$=de('<line class="diag svelte-ylotlw"></line>'),v$=de('<line class="antidiag svelte-ylotlw"></line>'),p$=de('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),m$=de('<line class="diag svelte-ylotlw"></line>'),C$=de('<line class="antidiag svelte-ylotlw"></line>'),E$=de('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),I$=de('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function b$(t,e){ae(e,!1);const n=it(),r=()=>Ee(Mr,"$globalConstraintsStore",n),i=()=>Ee(vn,"$gridStore",n),a=T(),s=T(),c=T(),u=T(),_=T(),v=T(),g=T(),h=T(),m=T(),C=T(),I=T(),b=T(),w=0,y=0,D=0,G=0;k(()=>r(),()=>{S(a,r())}),k(()=>(p(a),d),()=>{S(s,!!p(a).get(d.POSITIVE_DIAGONAL))}),k(()=>(p(a),d),()=>{S(c,!!p(a).get(d.NEGATIVE_DIAGONAL))}),k(()=>(p(a),d),()=>{S(u,!!p(a).get(d.NEGATIVE_ANTIDIAGONAL))}),k(()=>(p(a),d),()=>{S(_,!!p(a).get(d.POSITIVE_ANTIDIAGONAL))}),k(()=>(p(a),d),()=>{S(v,!!p(a).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),k(()=>(p(a),d),()=>{S(g,!!p(a).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),k(()=>i(),()=>{S(h,i())}),k(()=>p(h),()=>{S(m,p(h).nCols)}),k(()=>p(h),()=>{S(C,p(h).nRows)}),k(()=>p(h),()=>{S(I,p(h).nCols)}),k(()=>p(h),()=>{S(b,p(h).nRows)}),Ie(),ge();var F=I$(),B=V(F);{var W=Ae=>{var Le=h$();A(Le,"x1",w),A(Le,"y1",y),te(()=>{A(Le,"x2",p(I)),A(Le,"y2",p(b))}),R(Ae,Le)};he(B,Ae=>{p(c)&&Ae(W)})}var X=$(B);{var ee=Ae=>{var Le=v$();A(Le,"x1",w),A(Le,"y1",y),te(()=>{A(Le,"x2",p(I)),A(Le,"y2",p(b))}),R(Ae,Le)};he(X,Ae=>{p(u)&&Ae(ee)})}var ce=$(X);{var J=Ae=>{var Le=p$();A(Le,"x1",w),A(Le,"y1",y),te(()=>{A(Le,"x2",p(I)),A(Le,"y2",p(b))}),R(Ae,Le)};he(ce,Ae=>{p(v)&&Ae(J)})}var re=$(ce);{var me=Ae=>{var Le=m$();A(Le,"x2",G),A(Le,"y1",D),te(()=>{A(Le,"x1",p(m)),A(Le,"y2",p(C))}),R(Ae,Le)};he(re,Ae=>{p(s)&&Ae(me)})}var Ce=$(re);{var _e=Ae=>{var Le=C$();A(Le,"x2",G),A(Le,"y1",D),te(()=>{A(Le,"x1",p(m)),A(Le,"y2",p(C))}),R(Ae,Le)};he(Ce,Ae=>{p(_)&&Ae(_e)})}var Se=$(Ce);{var Ve=Ae=>{var Le=E$();A(Le,"x2",G),A(Le,"y1",D),te(()=>{A(Le,"x1",p(m)),A(Le,"y2",p(C))}),R(Ae,Le)};he(Se,Ae=>{p(g)&&Ae(Ve)})}Y(F),R(t,F),se()}var w$=de('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function O$(t,e){ae(e,!1);const n=it(),r=()=>Ee(hn,"$cellsStore",n),i=()=>Ee(Bv,"$showFogStore",n),a=()=>Ee(al,"$solutionStore",n),s=()=>Ee(vn,"$gridStore",n),c=T(),u=T(),_=T(),v=T(),g=T(),h=T();let m=U(e,"boundingBox",8),C=U(e,"gridShape",8);function I(me){const Ce=me.filter(Le=>Le.fog);if(!p(g))return Ce.map(ct=>ct.toCoords());const _e=me.filter(Le=>Le.value===p(g)[Le.r][Le.c]);let Se=new Set;for(const Le of _e){const ct=p(h).getNeighboorCells(Le);Se=new Set([...ct,Le])}return[...new Set(Ce).difference(Se)].map(Le=>Le.toCoords())}k(()=>r(),()=>{S(c,r())}),k(()=>p(c),()=>{S(u,I(p(c)))}),k(()=>p(u),()=>{S(_,vo(p(u),0))}),k(()=>i(),()=>{S(v,i())}),k(()=>a(),()=>{S(g,a())}),k(()=>s(),()=>{S(h,s())}),Ie(),ge();var b=w$(),w=V(b),y=V(w);Y(w);var D=$(w),G=V(D);A(G,"stroke-width",.5);var F=$(G);A(F,"stroke-width",.375);var B=$(F);A(B,"stroke-width",.25);var W=$(B);A(W,"stroke-width",.125),Ti(),Y(D);var X=$(D),ee=V(X);Ti(),Y(X);var ce=$(X),J=V(ce),re=$(J);A(re,"x",0),A(re,"y",0),Y(ce),Y(b),te(()=>{A(y,"d",p(_)),Lt(D,"disabled",!p(v)),Lt(X,"disabled",!p(v)),A(ee,"x",m().x),A(ee,"y",m().y),A(ee,"width",m().width),A(ee,"height",m().height),A(J,"x",m().x),A(J,"y",m().y),A(J,"width",m().width),A(J,"height",m().height),A(re,"width",C().nCols),A(re,"height",C().nRows)}),R(t,b),se()}var L$=de('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function y$(t,e){ae(e,!1);const n=it(),r=()=>Ee(Bv,"$showFogStore",n),i=T();let a=U(e,"gridShape",8);k(()=>r(),()=>{S(i,r())}),Ie(),ge();var s=L$(),c=V(s);A(c,"x",0),A(c,"y",0),Y(s),te(()=>{A(s,"visibility",p(i)?"visible":"hidden"),A(c,"width",a().nCols),A(c,"height",a().nRows)}),R(t,s),se()}var A$=de('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function S$(t,e){ae(e,!1);const n=T();let r=U(e,"r",8),i=U(e,"c",8),a=U(e,"val",8);const s=.8,c=400;k(()=>(Z(r()),Z(i())),()=>{S(n,Jn({r:r(),c:i()}))}),Ie(),ge();var u=xe(),_=ue(u);{var v=g=>{var h=A$();A(h,"font-size",s),A(h,"font-weight",c);var m=V(h,!0);Y(h),te(()=>{A(h,"x",p(n).x),A(h,"y",p(n).y),nt(m,a())}),R(g,h)};he(_,g=>{a()!==null&&g(v)})}R(t,u),se()}var N$=de('<g class="solution-layer"></g>');function x$(t,e){ae(e,!1);const n=it(),r=()=>Ee(al,"$solutionStore",n),i=()=>Ee(Yt,"$settingsStore",n),a=()=>Ee(ol,"$gameModeStore",n),s=T(),c=T(),u=T();k(()=>r(),()=>{S(s,r())}),k(()=>i(),()=>{S(c,i().showSolution)}),k(()=>a(),()=>{S(u,a())}),Ie(),ge();var _=xe(),v=ue(_);{var g=h=>{var m=N$();st(m,5,()=>p(s),yt,(C,I,b)=>{var w=xe(),y=ue(w);st(y,1,()=>p(I),yt,(D,G,F)=>{S$(D,{r:b,c:F,get val(){return p(G)}})}),R(C,w)}),Y(m),R(h,m)};he(v,h=>{p(s)&&p(c)&&p(u)===po.SETTING&&h(g)})}R(t,_),se()}var T$=de("<g></g>"),R$=de('<g mask="url(#fog-mask-fog)"></g>');function ri(t,e){let n=U(e,"elements",8),r=U(e,"g_name",8),i=U(e,"Component",8);var a=R$();st(a,5,n,yt,(s,c)=>{let u=()=>p(c).toolId,_=()=>p(c).element;var v=T$();st(v,5,()=>Object.entries(_()),g=>g[0],(g,h)=>{i()(g,{get tool(){return p(h)[1]}})}),Y(v),te(()=>si(v,`element-group ${u()}`)),R(s,v)}),Y(a),te(()=>si(a,Dh(r()))),R(t,a)}var D$=de('<line class="svelte-yr67cf"></line>');function k$(t,e){ae(e,!1);const n=T(),r=T(),i=T();let a=U(e,"shape",8),s=U(e,"coords",8);const[c,u]=s(),_=u.c,v=c.c===u.c?u.c+1:u.c,g=u.r,h=c.r===u.r?u.r+1:u.r;k(()=>Z(a()),()=>{S(n,a().stroke??"black")}),k(()=>Z(a()),()=>{var C;S(r,(C=a())==null?void 0:C.opacity)}),k(()=>Z(a()),()=>{S(i,a().strokeWidth??.02)}),Ie(),ge();var m=D$();A(m,"x1",_),A(m,"x2",v),A(m,"y1",g),A(m,"y2",h),te(()=>{A(m,"stroke",p(n)),A(m,"stroke-width",p(i)),A(m,"opacity",p(r))}),R(t,m),se()}var G$=de('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function M$(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T();let c=U(e,"tool",8);const u=c().cells,_=Jt(c().toolId,Tt)??sv;function v(I,b){return b===H.TEXT_ONLY?I.value?I.value:"-":I.value??""}function g(){if(c().toolId!==d.EDGE_INEQUALITY&&c().toolId!==d.ONE_WAY_DOOR)return 0;const I=Jn(u[0]);return Jn(u[1]).subtract(I).angle()/(2*Math.PI)*360}k(()=>Z(c()),()=>{S(n,c().shape??_)}),k(()=>Vs,()=>{S(r,By(Vs(u)))}),k(()=>(p(n),H),()=>{var I;S(i,((I=p(n))==null?void 0:I.type)||H.CIRCLE)}),k(()=>p(n),()=>{var I;S(a,((I=p(n))==null?void 0:I.fontSize)??.2)}),k(()=>p(n),()=>{var I;S(s,((I=p(n))==null?void 0:I.fontColor)??"black")}),Ie(),ge();var h=xe(),m=ue(h);{var C=I=>{var b=G$(),w=V(b);{var y=B=>{Dr(B,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},D=B=>{var W=xe(),X=ue(W);{var ee=J=>{Dr(J,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},ce=J=>{var re=xe(),me=ue(re);{var Ce=Se=>{k$(Se,{coords:u,get shape(){return p(n)}})},_e=Se=>{Al(Se,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return p(n)}})};he(me,Se=>{p(i)===H.BORDER_LINE?Se(Ce):Se(_e,!1)},!0)}R(J,re)};he(X,J=>{p(i)===H.TEXT_ONLY?J(ee):J(ce,!1)},!0)}R(B,W)};he(w,B=>{c().toolId===d.EDGE_INEQUALITY||c().toolId===d.ONE_WAY_DOOR?B(y):B(D,!1)})}var G=$(w);te(()=>A(G,"transform",`rotate(${g()}, ${p(r).x}, ${p(r).y} )`));var F=V(G,!0);te(()=>nt(F,v(c(),p(i)))),Y(G),Y(b),te(()=>{A(G,"x",p(r).x),A(G,"y",p(r).y),A(G,"font-size",p(a)),A(G,"fill",p(s))}),R(I,b)};he(m,I=>{u.length===2&&I(C)})}R(t,h),se()}var U$=de('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),F$=de('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),$$=de('<g class="quadruple-text"><!></g>');function H$(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T();let c=U(e,"cornerTool",8);const u=c().cells,_=new Me(u[u.length-1].c,u[u.length-1].r),v=Jt(c().toolId,Tt)??lv;k(()=>Z(c()),()=>{S(n,c().value)}),k(()=>Z(c()),()=>{S(r,c().shape??v)}),k(()=>p(r),()=>{var C;S(i,((C=p(r))==null?void 0:C.fontSize)??.2)}),k(()=>p(r),()=>{var C;S(a,((C=p(r))==null?void 0:C.fontColor)??"black")}),k(()=>p(n),()=>{var C;S(s,p(n)?(C=p(n))==null?void 0:C.split(","):[])}),Ie(),ge();var g=xe(),h=ue(g);{var m=C=>{var I=$$(),b=V(I);{var w=D=>{var G=U$(),F=V(G,!0);te(()=>nt(F,p(s).join(" "))),Y(G),te(()=>{A(G,"x",_.x),A(G,"y",_.y),A(G,"font-size",p(i)),A(G,"fill",p(a))}),R(D,G)},y=D=>{var G=F$(),F=ue(G),B=V(F,!0);te(()=>nt(B,p(s).slice(0,2).join(" "))),Y(F);var W=$(F),X=V(W,!0);te(()=>nt(X,p(s).slice(2).join(" "))),Y(W),te(()=>{A(F,"x",_.x),A(F,"y",_.y),A(F,"dy",-p(i)/2),A(F,"font-size",p(i)),A(F,"fill",p(a)),A(W,"x",_.x),A(W,"y",_.y),A(W,"dy",p(i)/2),A(W,"font-size",p(i)),A(W,"fill",p(a))}),R(D,G)};he(b,D=>{p(s).length<=2?D(w):D(y,!1)})}Y(I),te(()=>A(I,"data-count",p(s).length)),R(C,I)};he(h,C=>{p(n)&&C(m)})}R(t,g),se()}var P$=de('<text text-anchor="middle" dominant-baseline="central"> </text>'),B$=de('<g class="corner-tool"><!><!></g>');function W$(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T();let s=U(e,"tool",8);const c=s().cells,u=Jt(s().toolId,Tt)??lv,_=new Me(c[c.length-1].c,c[c.length-1].r);function v(C,I){return I===H.TEXT_ONLY?C.value?C.value:"-":C.value??""}k(()=>Z(s()),()=>{S(n,s().shape??u)}),k(()=>(p(n),H),()=>{var C;S(r,((C=p(n))==null?void 0:C.type)??H.CIRCLE)}),k(()=>p(n),()=>{var C;S(i,((C=p(n))==null?void 0:C.fontSize)??.2)}),k(()=>p(n),()=>{var C;S(a,((C=p(n))==null?void 0:C.fontColor)??"black")}),Ie(),ge();var g=xe(),h=ue(g);{var m=C=>{var I=B$(),b=V(I);Al(b,{get cx(){return _.x},get cy(){return _.y},get shape(){return p(n)}});var w=$(b);{var y=G=>{H$(G,{get cornerTool(){return s()}})},D=G=>{var F=P$(),B=V(F,!0);te(()=>nt(B,v(s(),p(r)))),Y(F),te(()=>{A(F,"x",_.x),A(F,"y",_.y),A(F,"font-size",p(i)),A(F,"fill",p(a))}),R(G,F)};he(w,G=>{s().toolId===d.QUADRUPLE?G(y):G(D,!1)})}Y(I),R(C,I)};he(h,C=>{c.length===4&&C(m)})}R(t,g),se()}var z$=de('<text text-anchor="middle" dominant-baseline="central"> </text>'),Y$=de('<g class="center-corner-or-edge-tool"><!><!></g>');function j$(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T();let u=U(e,"tool",8);const _=u().cell,v=Jt(u().toolId,Tt)??sv;function g(w,y){return y===H.TEXT_ONLY?w.value?w.value:"-":w.value??""}k(()=>Z(u()),()=>{S(n,u().shape??v)}),k(()=>{},()=>{S(r,_)}),k(()=>(p(n),H),()=>{var w;S(i,((w=p(n))==null?void 0:w.type)||H.CIRCLE)}),k(()=>p(n),()=>{var w;S(a,((w=p(n))==null?void 0:w.fontSize)??.2)}),k(()=>p(n),()=>{var w;S(s,((w=p(n))==null?void 0:w.fontColor)??"black")}),k(()=>p(r),()=>{S(c,p(r).r%1===.5&&p(r).c%1===.5)}),Ie(),ge();var h=Y$(),m=V(h);Al(m,{get cx(){return p(r).c},get cy(){return p(r).r},get shape(){return p(n)}});var C=$(m);{var I=w=>{var y=Ze(()=>g(u(),p(i))),D=Ze(()=>Math.floor(p(r).c)),G=Ze(()=>Math.floor(p(r).r));Ia(w,{get value(){return p(y)},get x(){return p(D)},get y(){return p(G)},position:"TL",get fontColor(){return p(s)}})},b=w=>{var y=z$(),D=V(y,!0);te(()=>nt(D,g(u(),p(i)))),Y(y),te(()=>{A(y,"x",p(r).c),A(y,"y",p(r).r),A(y,"font-size",p(a)),A(y,"fill",p(s))}),R(w,y)};he(C,w=>{p(c)?w(I):w(b,!1)})}Y(h),R(t,h),se()}var V$=de('<path fill="none"></path>');function Gi(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T();let u=U(e,"linePoints",8),_=U(e,"shape",8,void 0);const v="round",g="round";k(()=>Z(_()),()=>{var m;S(n,((m=_())==null?void 0:m.stroke)??"gray")}),k(()=>Z(_()),()=>{var m;S(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),k(()=>Z(_()),()=>{var m;S(i,((m=_())==null?void 0:m.strokeDasharray)??0)}),k(()=>Z(_()),()=>{var m;S(a,((m=_())==null?void 0:m.strokeDashoffset)??0)}),k(()=>Z(_()),()=>{var m,C,I,b,w,y,D,G;S(s,{shortenHead:((C=(m=_())==null?void 0:m.linePathOptions)==null?void 0:C.shortenHead)??.2,shortenTail:((b=(I=_())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((y=(w=_())==null?void 0:w.linePathOptions)==null?void 0:y.bezierRounding)??.2,closeLoops:((G=(D=_())==null?void 0:D.linePathOptions)==null?void 0:G.closeLoops)??!1})}),k(()=>(Z(u()),p(s)),()=>{S(c,Ll(u(),p(s)))}),Ie(),ge();var h=V$();A(h,"stroke-linejoin",v),A(h,"stroke-linecap",g),te(()=>{A(h,"d",p(c)),A(h,"stroke",p(n)),A(h,"stroke-width",p(r)),A(h,"stroke-dasharray",p(i)),A(h,"stroke-dashoffset",p(a))}),R(t,h),se()}var K$=ie("<!> <!> <!>",1);function X$(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T();let s=U(e,"linePoints",8),c=U(e,"shape",8,wa);function u(b){var D;const w=Nt.cloneDeep(b);w.r=w.r||.2;const y=w.r;return w.strokeDasharray=b.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:y,shortenTail:y,bezierRounding:(D=w.linePathOptions)==null?void 0:D.bezierRounding},w}k(()=>Z(s()),()=>{S(n,s().length)}),k(()=>(p(n),Z(s())),()=>{S(r,p(n)>=0?s()[0]:void 0)}),k(()=>(p(n),Z(s())),()=>{S(i,p(n)>=0?s()[p(n)-1]:void 0)}),k(()=>Z(c()),()=>{S(a,u(c()))}),Ie(),ge();var _=K$(),v=ue(_);{var g=b=>{Dr(b,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(a)}})};he(v,b=>{p(r)&&b(g)})}var h=$(v,2);{var m=b=>{Gi(b,{get linePoints(){return s()},get shape(){return p(a)}})};he(h,b=>{p(n)>1&&b(m)})}var C=$(h,2);{var I=b=>{Dr(b,{get x(){return p(i).x},get y(){return p(i).y},get shape(){return p(a)}})};he(C,b=>{p(i)&&b(I)})}R(t,_),se()}var q$=ie("<!> <!> <!>",1);function Z$(t,e){ae(e,!1);const n=T(),r=T(),i=T();let a=U(e,"linePoints",8),s=U(e,"shape",12,wa);const c=4,u=.5;function _(G,F){const B=F.r??u,W=F.n??c,X=F.angle??0,ee=hp(B,W,new Me(0,0),!0,0),ce=(W+(G-X/360)*W%W)%W,J=Math.floor(ce)%W,re=Math.ceil(ce)%W;return ee[J].lerp(ee[re],ce%1).length()}function v(G){if(p(n)<=1)return 0;const F=a()[0],W=a()[1].subtract(F).angle()/(2*Math.PI);return _(W,G)}function g(G){if(p(n)<=1)return 0;const F=a()[p(n)-1],W=a()[p(n)-2].subtract(F).angle()/(2*Math.PI);return _(W,G)}function h(G){var B;const F=Nt.cloneDeep(G);return F.r=F.r||u,F.opacity=1,F.linePathOptions={shortenHead:v(F),shortenTail:g(F),bezierRounding:(B=F.linePathOptions)==null?void 0:B.bezierRounding},F}k(()=>Z(a()),()=>{S(n,a().length)}),k(()=>(p(n),Z(a())),()=>{S(r,p(n)>=0?a()[0]:void 0)}),k(()=>(p(n),Z(a())),()=>{S(i,p(n)>=0?a()[p(n)-1]:void 0)}),k(()=>Z(s()),()=>{s(h(s()))}),Ie(),ge();var m=q$(),C=ue(m);{var I=G=>{Ks(G,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return s()}})};he(C,G=>{p(r)&&G(I)})}var b=$(C,2);{var w=G=>{Gi(G,{get linePoints(){return a()},get shape(){return s()}})};he(b,G=>{p(n)>1&&G(w)})}var y=$(b,2);{var D=G=>{Ks(G,{get cx(){return p(i).x},get cy(){return p(i).y},get shape(){return s()}})};he(y,G=>{p(i)&&G(D)})}R(t,m),se()}var Q$=ie("<!> <!>",1);function fh(t,e){ae(e,!1);const n=T();let r=U(e,"linePoints",8),i=U(e,"shape",8,wa);function a(m){var b,w,y;const C=Nt.cloneDeep(m);C.r=C.r||.3,C.opacity=1;const I=C.r;return C.linePathOptions={shortenHead:((b=C.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(y=C.linePathOptions)==null?void 0:y.bezierRounding},C}function s(m){var b,w,y;const C=Nt.cloneDeep(m);C.r=C.r||.3,C.opacity=1,C.strokeWidth=0;const I=C.r;return C.linePathOptions={shortenHead:((b=C.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(y=C.linePathOptions)==null?void 0:y.bezierRounding},C}k(()=>Z(r()),()=>{S(n,r().length>0?r()[0]:void 0)}),Ie(),ge();var c=Q$(),u=ue(c);{var _=m=>{var C=Ze(()=>a(i()));Gi(m,{get linePoints(){return r()},get shape(){return p(C)}})};he(u,m=>{r().length>1&&m(_)})}var v=$(u,2);{var g=m=>{var C=Ze(()=>a(i()));Dr(m,{get x(){return p(n).x},get y(){return p(n).y},get shape(){return p(C)}})},h=m=>{var C=xe(),I=ue(C);{var b=w=>{var y=Ze(()=>s(i()));Ks(w,{get cx(){return p(n).x},get cy(){return p(n).y},get shape(){return p(y)}})};he(I,w=>{p(n)&&w(b)},!0)}R(m,C)};he(v,m=>{p(n)&&i().type===H.THERMO_WITH_CIRCLE?m(g):m(h,!1)})}R(t,c),se()}var J$=de('<g class="line-tool"><!></g>');function e6(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T();let s=U(e,"tool",8);const c=Jt(s().toolId,Tt)??wa;k(()=>Z(s()),()=>{S(n,Vs(s().cells))}),k(()=>Z(s()),()=>{S(r,s().shape??c)}),k(()=>(p(r),H),()=>{var h;S(i,((h=p(r))==null?void 0:h.type)||H.LINE)}),k(()=>p(r),()=>{var h;S(a,((h=p(r))==null?void 0:h.opacity)??.8)}),Ie(),ge();var u=J$(),_=V(u);{var v=h=>{Gi(h,{get linePoints(){return p(n)},get shape(){return p(r)}})},g=h=>{var m=xe(),C=ue(m);{var I=w=>{X$(w,{get linePoints(){return p(n)},get shape(){return p(r)}})},b=w=>{var y=xe(),D=ue(y);{var G=B=>{Z$(B,{get linePoints(){return p(n)},get shape(){return p(r)}})},F=B=>{var W=xe(),X=ue(W);{var ee=J=>{fh(J,{get linePoints(){return p(n)},get shape(){return p(r)}})},ce=J=>{var re=xe(),me=ue(re);{var Ce=Se=>{fh(Se,{get linePoints(){return p(n)},get shape(){return p(r)}})},_e=Se=>{Gi(Se,{get linePoints(){return p(n)},get shape(){return p(r)}})};he(me,Se=>{p(i)===H.THERMO_WITH_POLYGON?Se(Ce):Se(_e,!1)},!0)}R(J,re)};he(X,J=>{p(i)===H.THERMO_WITH_CIRCLE?J(ee):J(ce,!1)},!0)}R(B,W)};he(D,B=>{p(i)===H.LINE_WITH_POLYGON_ENDS?B(G):B(F,!1)},!0)}R(w,y)};he(C,w=>{p(i)===H.LINE_WITH_CIRCLE_ENDS?w(I):w(b,!1)},!0)}R(h,m)};he(_,h=>{p(i)===H.LINE?h(v):h(g,!1)})}Y(u),te(()=>A(u,"opacity",p(a))),R(t,u),se()}var t6=de('<g class="cage-tool"><!></g>');function n6(t,e){ae(e,!1);const n=T();let r=U(e,"tool",8);const i=Jt(r().toolId,Tt)??pd;k(()=>Z(r()),()=>{S(n,r().shape??i)}),Ie(),ge();var a=t6(),s=V(a);pp(s,{get cells(){return r().cells},get shape(){return p(n)},get value(){return r().value}}),Y(a),R(t,a),se()}var r6=ie("<!> <!> <!> <!>",1);function i6(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T(),_=T();let v=U(e,"tool",8);const g=Jt(v().toolId,Tt)??$O,h=800,m=v().value;k(()=>Z(v()),()=>{S(n,v().shape??g)}),k(()=>p(n),()=>{S(r,p(n).inset??.15)}),k(()=>p(n),()=>{S(i,p(n).strokeWidth??.07)}),k(()=>p(n),()=>{S(a,p(n).fontColor??p(n).stroke??"black")}),k(()=>Z(v()),()=>{S(s,v().cells[v().cells.length-1])}),k(()=>Z(v()),()=>{S(c,v().cells2[v().cells2.length-1])}),k(()=>(p(s),p(r)),()=>{S(u,new Me(p(s).c+1-p(r)-.05,p(s).r+1-p(r)-.05))}),k(()=>(p(c),p(r)),()=>{S(_,new Me(p(c).c+1-p(r)-.05,p(c).r+1-p(r)-.05))}),Ie(),ge();var C=r6(),I=ue(C);Ea(I,{get cells(){return v().cells},get shape(){return p(n)}});var b=$(I,2);Ia(b,{value:m,get x(){return p(_).x},get y(){return p(_).y},position:"BR",get fontColor(){return p(a)},fontWeight:h});var w=$(b,2);Ea(w,{get cells(){return v().cells2},get shape(){return p(n)}});var y=$(w,2);Ia(y,{value:m,get x(){return p(_).x},get y(){return p(_).y},position:"BR",get fontColor(){return p(a)},fontWeight:h}),R(t,C),se()}var o6=de('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function a6(t,e){var B;ae(e,!1);const n=T(),r=T(),i=T();let a=U(e,"tool",8);const s=a().cell,c=a().direction,u=ov(s,c),_=Jn(s),v=Jt(a().toolId,Tt)??HO,g=((B=p(n))==null?void 0:B.fontSize)??.5,h=.03;function m(W){return W.value&&W.value.length?W.value:"-"}function C(){const ee=Jn(u).subtract(_).length(),ce={shortenHead:.3*ee,shortenTail:.55*ee};return Ca([s,u],ce)}const b=`outside-tool-arrow-marker-${crypto.randomUUID()}`;k(()=>Z(a()),()=>{S(n,a().shape??v)}),k(()=>p(n),()=>{var W;S(r,((W=p(n))==null?void 0:W.fontColor)??"var(--text-primary-color)")}),k(()=>p(n),()=>{var W;S(i,((W=p(n))==null?void 0:W.stroke)??"var(--text-primary-color)")}),Ie(),ge();var w=o6(),y=V(w);Fa(y,{id:b,l:.07,strokeWidth:h,get stroke(){return p(i)}});var D=$(y);te(()=>A(D,"d",C())),A(D,"stroke-width",h),A(D,"marker-end",`url(#${b??""})`);var G=$(D);A(G,"font-size",g);var F=V(G,!0);te(()=>nt(F,m(a()))),Y(G),Y(w),te(()=>{A(D,"stroke",p(i)),A(G,"x",_.x),A(G,"y",_.y),A(G,"fill",p(r))}),R(t,w),se()}var s6=ie("<!> <!> <!>",1);function l6(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T();let c=U(e,"linePoints",8),u=U(e,"shape",8);function _(b){const w=Nt.cloneDeep(b);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}k(()=>Z(c()),()=>{S(n,c().length)}),k(()=>(p(n),Z(c())),()=>{S(r,p(n)>1&&c()[0].equals(c()[p(n)-1]))}),k(()=>(p(n),Z(c())),()=>{S(i,p(n)>=0?c()[0]:void 0)}),k(()=>(p(n),Z(c())),()=>{S(a,p(n)>=0?c()[p(n)-1]:void 0)}),k(()=>Z(u()),()=>{S(s,_(u()))}),Ie(),ge();var v=s6(),g=ue(v);Gi(g,{get linePoints(){return c()},get shape(){return u()}});var h=$(g,2);{var m=b=>{Dr(b,{get x(){return p(i).x},get y(){return p(i).y},get shape(){return p(s)}})};he(h,b=>{!p(r)&&p(i)&&b(m)})}var C=$(h,2);{var I=b=>{Dr(b,{get x(){return p(a).x},get y(){return p(a).y},get shape(){return p(s)}})};he(C,b=>{!p(r)&&p(a)&&b(I)})}R(t,v),se()}var c6=de('<g class="corner-line-tool"><!></g>');function u6(t,e){ae(e,!1);const n=T(),r=T(),i=T(),a=T();let s=U(e,"tool",8);const c=Jt(s().toolId,Tt)??wa;k(()=>(Z(s()),Me),()=>{S(n,s().coords.map(h=>new Me(h.c,h.r)))}),k(()=>Z(s()),()=>{S(r,s().shape??c)}),k(()=>(p(r),H),()=>{var h;S(i,((h=p(r))==null?void 0:h.type)||H.LINE)}),k(()=>p(r),()=>{var h;S(a,((h=p(r))==null?void 0:h.opacity)??1)}),Ie(),ge();var u=c6(),_=V(u);{var v=h=>{l6(h,{get linePoints(){return p(n)},get shape(){return p(r)}})},g=h=>{Gi(h,{get linePoints(){return p(n)},get shape(){return p(r)}})};he(_,h=>{p(i)===H.MAZE_WALL?h(v):h(g,!1)})}Y(u),te(()=>A(u,"opacity",p(a))),R(t,u),se()}var d6=de('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function _6(t,e){ae(e,!1);const n=it(),r=()=>Ee(vn,"$gridStore",n),i=()=>Ee(ht,"$localConstraintsStore",n),a=()=>Ee(Qt,"$toolStore",n),s=()=>Ee(hn,"$cellsStore",n),c=()=>Ee(LF,"$cageToolsStore",n),u=()=>Ee(bF,"$lineToolsStore",n),_=()=>Ee(yF,"$cloneToolsStore",n),v=()=>Ee(wF,"$cornerLineToolsStore",n),g=()=>Ee(AF,"$outsideDirectionToolsStore",n),h=()=>Ee(CF,"$edgeToolsStore",n),m=()=>Ee(IF,"$cornerToolsStore",n),C=()=>Ee(EF,"$centerCornerOrEdgeToolsStore",n),I=T(),b=T(),w=T();let y=U(e,"svgRef",12,null);function D(){for(const[kt,De]of i().entries()){if(!va(kt))continue;if(Object.entries(De).some(([ke,Re])=>!Zt(Re.cell,p(b))))return!0}return!1}function G(kt,De){const be=D(),ke=va(De),Re=be||ke?1:.2,At=-Re,Ba=-Re,xl=kt.nCols+2*Re,pi=kt.nRows+2*Re;return{x:At,y:Ba,width:xl,height:pi}}function F(kt){return`${kt.x} ${kt.y} ${kt.width} ${kt.height}`}k(()=>r(),()=>{S(I,r())}),k(()=>p(I),()=>{S(b,{nRows:p(I).nRows,nCols:p(I).nCols})}),k(()=>(p(b),a()),()=>{S(w,G(p(b),a()))}),Ie(),ge();var B=d6();te(()=>A(B,"viewBox",F(p(w))));var W=V(B);O$(W,{get boundingBox(){return p(w)},get gridShape(){return p(b)}});var X=$(W);y$(X,{get gridShape(){return p(b)}});var ee=$(X);vF(ee,{get grid(){return r()}});var ce=$(ee);Z8(ce,{get gridShape(){return p(b)}});var J=$(ce);st(J,5,s,yt,(kt,De)=>{F4(kt,{get cell(){return p(De)}})}),Y(J);var re=$(J);n$(re,{});var me=$(re);c4(me,{});var Ce=$(me);ri(Ce,{get elements(){return c()},g_name:"cage-tools-layer",Component:n6});var _e=$(Ce);ri(_e,{get elements(){return u()},g_name:"line-tools-layer",Component:e6});var Se=$(_e);ri(Se,{get elements(){return _()},g_name:"clone-tools-layer",Component:i6});var Ve=$(Se);eF(Ve,{});var Ae=$(Ve);b$(Ae,{});var Le=$(Ae);_F(Le,{});var ct=$(Le);ri(ct,{get elements(){return v()},g_name:"corner-line-tools-layer",Component:u6});var Ke=$(ct);HF(Ke,{get boundingBox(){return p(w)}});var An=$(Ke);ri(An,{get elements(){return g()},g_name:"outside-direction-tools-layer",Component:a6});var Hn=$(An);gF(Hn,{get boundingBox(){return p(w)}});var zr=$(Hn);X8(zr,{});var tn=$(zr);ri(tn,{get elements(){return h()},g_name:"edge-tools-layer",Component:M$});var Ir=$(tn);ri(Ir,{get elements(){return m()},g_name:"corner-tools-layer",Component:W$});var vi=$(Ir);ri(vi,{get elements(){return C()},g_name:"center-corner-edge-tools-layer",Component:j$});var lr=$(vi);e$(lr,{});var Pn=$(lr);st(Pn,5,s,yt,(kt,De)=>{G4(kt,{get cell(){return p(De)}})}),Y(Pn);var Bi=$(Pn);x$(Bi,{});var Yr=$(Bi);g$(Yr,{}),Y(B),Ri(B,kt=>y(kt),()=>y()),R(t,B),se()}function f6(t){return rA(t)?(uO(),!0):!1}function g6(t){return iA(t)?(Uv(),!0):!1}function h6(t){return oA(t)?(Fv(),!0):!1}function gu(t){(f6(t)||g6(t)||h6(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var v6=ie('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function p6(t,e){ae(e,!1);const n=it(),r=()=>Ee(gp,"$InputHandlerStore",n),i=()=>Ee(fo,"$svgRefStore",n),a=T();let s=T(null);function c(h){return m=>{h&&p(a)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===p(s))&&h(m)}}k(()=>r(),()=>{S(a,r())}),Ie();var u=v6();Ue("keydown",Qc,function(...h){gu==null||gu.apply(this,h)});var _=kg(()=>{var h;return c((h=p(a))==null?void 0:h.keyDown)});Ue("keydown",Qc,function(...h){var m;(m=p(_))==null||m.apply(this,h)});var v=kg(()=>{var h;return c((h=p(a))==null?void 0:h.keyUp)});Ue("keyup",Qc,function(...h){var m;(m=p(v))==null||m.apply(this,h)});var g=V(u);_6(g,{get svgRef(){return Sh(),i()},set svgRef(h){ba(fo,h)},$$legacy:!0}),Y(u),Ri(u,h=>S(s,h),()=>p(s)),Ue("pointerdown",u,nu(Qn(h=>{var m;h.currentTarget.focus(),(m=p(a))==null||m.pointerDown(h)})),!0),Ue("pointermove",u,nu(Qn(h=>{var m;h.currentTarget.focus(),(m=p(a))==null||m.pointerMove(h)})),!0),Ue("pointerup",u,nu(Qn(h=>{var m;h.currentTarget.focus(),(m=p(a))==null||m.pointerUp(h)})),!0),R(t,u),se()}var m6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function C6(t){var e=m6();R(t,e)}var E6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function I6(t){var e=E6();R(t,e)}var b6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function w6(t){var e=b6();R(t,e)}var O6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function L6(t){var e=O6();R(t,e)}var y6=ie('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function A6(t,e){ae(e,!1);const n=it(),r=()=>Ee(Eo,"$commandHistoryStore",n),i=()=>Ee(Nu,"$selectOnStore",n),a=T(),s=T();function c(){Uv()}function u(){Fv()}function _(){console.log("check")}function v(){ba(Nu,!i())}k(()=>r(),()=>{S(a,r()._undoStack.length===0)}),k(()=>r(),()=>{S(s,r()._redoStack.length===0)}),Ie(),ge();var g=y6(),h=V(g),m=V(h);L6(m),Y(h);var C=$(h,2),I=V(C);I6(I),Y(C);var b=$(C,2);b.disabled=!0;var w=V(b);C6(w),Y(b);var y=$(b,2),D=V(y);w6(D),Y(y),Y(g),te(()=>{h.disabled=p(a),C.disabled=p(s),A(y,"aria-checked",i()),Lt(y,"active",i())}),Ue("click",h,c),Ue("click",C,u),Ue("click",b,_),Ue("click",y,v),R(t,g),se()}var S6=ie('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),N6=ie('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),x6=ie('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),T6=ie('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function R6(t,e){ae(e,!1);const n=it(),r=()=>Ee(Yt,"$settingsStore",n),i=()=>Ee(Ys,"$penColorStore",n),a=()=>Ee(gp,"$InputHandlerStore",n),s=T(),c=T(),u=[];let _=U(e,"selectedTool",8);const v=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let h=T(!1);function m(W){return W?g:v}function C(W){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(W)}function I(W){const X=W.currentTarget;if(!X)return;const ee=X.getAttribute("aria-checked");S(h,ee!=="true")}k(()=>r(),()=>{S(s,r().penToolActive)}),k(()=>r(),()=>{S(c,r().letterToolActive)}),Ie(),ge();var b=T6(),w=V(b);{var y=W=>{var X=xe(),ee=ue(X);st(ee,1,()=>v,yt,(ce,J)=>{var re=S6(),me=V(re);qt(me);var Ce;Ti(2),Y(re),te(()=>{A(re,"data-value",p(J)),Lt(re,"active",i()===p(J)),Ce!==(Ce=p(J))&&(me.value=(me.__value=p(J))==null?"":p(J))}),el(u,[],me,()=>(p(J),i()),_e=>ba(Ys,_e)),R(ce,re)}),R(W,X)},D=W=>{var X=xe(),ee=ue(X);st(ee,1,()=>m(p(h)),yt,(ce,J)=>{var re=N6(),me=V(re),Ce=V(me,!0);Y(me),Ti(2),Y(re),te(()=>{eO(re,p(J)),nt(Ce,p(J))}),Ue("click",re,function(..._e){var Se;(Se=a()&&a().padClick)==null||Se.apply(this,_e)}),R(ce,re)}),R(W,X)};he(w,W=>{_()===d.PEN_TOOL&&p(s)?W(y):W(D,!1)})}var G=$(w,2);{var F=W=>{var X=x6();te(()=>{A(X,"aria-checked",p(h)),Lt(X,"letter-checked",p(h)),Lt(X,"num-checked",!p(h))}),Ue("click",X,I),R(W,X)};he(G,W=>{p(c)&&C(_())&&W(F)})}var B=$(G,2);Y(b),te(()=>{Lt(b,"digit",_()===d.DIGIT),Lt(b,"center",_()===d.CENTER_PM),Lt(b,"corner",_()===d.CORNER_PM),Lt(b,"color",_()===d.HIGHLIGHTS),Lt(b,"pen",_()===d.PEN_TOOL),Lt(B,"letter-tool",p(c))}),Ue("click",B,function(...W){var X;(X=a()&&a().padClick)==null||X.apply(this,W)}),R(t,b),se()}var D6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function k6(t){var e=D6();R(t,e)}var G6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function M6(t){var e=G6();R(t,e)}var U6=ie('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function ta(t,e){ae(e,!1);const n=[];let r=U(e,"selectedTool",12),i=U(e,"value",8),a=U(e,"title",8,void 0);function s(){xu(i())}ge();var c=U6(),u=V(c);qt(u);var _,v=$(u,2);dt(v,e,"default",{}),Y(c),te(()=>{A(c,"title",a()),Lt(c,"active",i()===r()),_!==(_=i())&&(u.value=(u.__value=i())==null?"":i())}),el(n,[],u,()=>(i(),r()),r),Ue("change",u,s),R(t,c),se()}var F6=ie('<span aria-hidden="true">1</span>'),$6=ie('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),H6=ie('<span aria-hidden="true" style="font-size: 50%">123</span>'),P6=ie('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),B6=ie('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),W6=ie('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function z6(t,e){ae(e,!1);const n=it(),r=()=>Ee(Yt,"$settingsStore",n);let i=U(e,"selectedTool",12);ge();var a=W6(),s=V(a);ta(s,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var C=F6();R(h,C)},$$slots:{default:!0},$$legacy:!0});var c=$(s,2);ta(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var C=$6();R(h,C)},$$slots:{default:!0},$$legacy:!0});var u=$(c,2);ta(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var C=H6();R(h,C)},$$slots:{default:!0},$$legacy:!0});var _=$(u,2);ta(_,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var C=P6(),I=V(C);k6(I),Y(C),R(h,C)},$$slots:{default:!0},$$legacy:!0});var v=$(_,2);{var g=h=>{ta(h,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,C)=>{var I=B6(),b=V(I);M6(b),Y(I),R(m,I)},$$slots:{default:!0},$$legacy:!0})};he(v,h=>{r().penToolActive&&h(g)})}Y(a),R(t,a),se()}var Y6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function j6(t){var e=Y6();R(t,e)}var V6=ie('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function $a(t,e){let n=U(e,"title",8,void 0),r=U(e,"clickCb",8,void 0);var i=V6(),a=V(i),s=V(a);dt(s,e,"default",{}),Y(a),Y(i),te(()=>A(i,"title",n())),Ue("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),R(t,i)}var K6=ie('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),X6=ie('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function q6(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);function r(){n(!1)}function i(){Pv(),js(),n(!1)}ge(),Br(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=X6(),u=$(V(c),2);pl(u,{children:(_,v)=>{var g=K6(),h=ue(g),m=$(h,2);Ue("click",h,i),Ue("click",m,r),R(_,g)},$$slots:{default:!0}}),Y(c),R(a,c)},$$slots:{default:!0},$$legacy:!0}),se()}var Z6=ie("<!> <!>",1);function Q6(t){let e=T(!1);function n(){S(e,!0)}var r=Z6(),i=ue(r);$a(i,{title:"Restart",clickCb:n,children:(s,c)=>{j6(s)},$$slots:{default:!0}});var a=$(i,2);q6(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),R(t,r)}var J6=ie('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function na(t,e){let n=U(e,"title",8);var r=J6(),i=V(r),a=V(i,!0);Y(i);var s=$(i,2);dt(s,e,"default",{}),Y(r),te(()=>nt(a,n())),R(t,r)}var eH=ie('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function fn(t,e){let n=U(e,"description",8);var r=eH(),i=V(r),a=V(i,!0);Y(i);var s=$(i,2),c=V(s);dt(c,e,"default",{}),Y(s),Y(r),te(()=>nt(a,n())),R(t,r)}var tH=ie('<div class="shortcut svelte-1cgt5u5"> </div>');function on(t,e){let n=U(e,"shortcut",8);var r=tH(),i=V(r,!0);Y(r),te(()=>nt(i,n())),R(t,r)}var nH=ie("<p></p>"),rH=ie("<!> <!> <!> <!>",1),iH=ie("<!> or <!>",1),oH=ie("<!> <!> <!> <!> <!> <!> <!> <!>",1),aH=ie("<!> <!>",1),sH=ie('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function lH(t,e){let n=U(e,"showModal",12,!1);Br(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var a=sH(),s=V(a);na(s,{title:"Setting Instructions",children:(g,h)=>{var m=nH();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",R(g,m)},$$slots:{default:!0}});var c=$(s,2);na(c,{title:"General",children:(g,h)=>{fn(g,{description:"Toggle Darkmode",children:(m,C)=>{on(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=$(c,2);na(u,{title:"Selection",children:(g,h)=>{var m=rH(),C=ue(m);fn(C,{description:"Select cells",children:(y,D)=>{on(y,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=$(C,2);fn(I,{description:"Add to current selection",children:(y,D)=>{on(y,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=$(I,2);fn(b,{description:"Remove from current selection",children:(y,D)=>{on(y,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=$(b,2);fn(w,{description:"Add or remove from current selection",children:(y,D)=>{on(y,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),R(g,m)},$$slots:{default:!0}});var _=$(u,2);na(_,{title:"Change Tool",children:(g,h)=>{var m=oH(),C=ue(m);fn(C,{description:"Cycle Tool",children:(B,W)=>{on(B,{shortcut:"Space"})},$$slots:{default:!0}});var I=$(C,2);fn(I,{description:"Change to Digit Tool",children:(B,W)=>{on(B,{shortcut:"Z"})},$$slots:{default:!0}});var b=$(I,2);fn(b,{description:"Change to Corner Pencilmark Tool",children:(B,W)=>{on(B,{shortcut:"X"})},$$slots:{default:!0}});var w=$(b,2);fn(w,{description:"Change to Center Pencilmark Tool",children:(B,W)=>{on(B,{shortcut:"C"})},$$slots:{default:!0}});var y=$(w,2);fn(y,{description:"Change to Highlights Tool",children:(B,W)=>{on(B,{shortcut:"V"})},$$slots:{default:!0}});var D=$(y,2);fn(D,{description:"Quickshift To Corner Pencilmark Tool",children:(B,W)=>{on(B,{shortcut:"Shift"})},$$slots:{default:!0}});var G=$(D,2);fn(G,{description:"Quickshift To Center Pencilmark Tool",children:(B,W)=>{on(B,{shortcut:"Ctrl"})},$$slots:{default:!0}});var F=$(G,2);fn(F,{description:"Quickshift To Highlights Tool",children:(B,W)=>{var X=iH(),ee=ue(X);on(ee,{shortcut:"Shift + Ctrl"});var ce=$(ee,2);on(ce,{shortcut:"Alt"}),R(B,X)},$$slots:{default:!0}}),R(g,m)},$$slots:{default:!0}});var v=$(_,2);na(v,{title:"Undo/Redo",children:(g,h)=>{var m=aH(),C=ue(m);fn(C,{description:"Undo",children:(b,w)=>{on(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=$(C,2);fn(I,{description:"Redo",children:(b,w)=>{on(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),R(g,m)},$$slots:{default:!0}}),Y(a),R(r,a)},$$slots:{default:!0},$$legacy:!0})}var cH=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function uH(t){var e=cH();R(t,e)}var dH=ie("<!> <!>",1);function _H(t){let e=T(!1);function n(){S(e,!0)}var r=dH(),i=ue(r);$a(i,{title:"Info",clickCb:n,children:(s,c)=>{uH(s)},$$slots:{default:!0}});var a=$(i,2);lH(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),R(t,r)}var fH=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function gH(t){var e=fH();R(t,e)}var hH=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function vH(t){var e=hH();R(t,e)}function pH(t){let e=T(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function a(){n()?i():r(),S(e,!p(e))}$a(t,{title:"Fullscreen",clickCb:a,children:(s,c)=>{var u=xe(),_=ue(u);{var v=h=>{vH(h)},g=h=>{gH(h)};he(_,h=>{p(e)?h(v):h(g,!1)})}R(s,u)},$$slots:{default:!0}})}function Cp(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"renderers",8),i=U(e,"options",8);ge();var a=xe(),s=ue(a);{var c=u=>{var _=xe(),v=ue(_);Ah(v,()=>r()[n().type],(g,h)=>{h(g,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,C)=>{var I=xe(),b=ue(I);{var w=D=>{Xs(D,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},y=D=>{var G=pw();te(()=>nt(G,n().raw)),R(D,G)};he(b,D=>{"tokens"in n()&&n().tokens?D(w):D(y,!1)})}R(m,I)},$$slots:{default:!0}})}),R(u,_)};he(s,u=>{r()[n().type]&&u(c)})}R(t,a),se()}function Xs(t,e){let n=U(e,"tokens",8),r=U(e,"renderers",8),i=U(e,"options",8);var a=xe(),s=ue(a);{var c=u=>{var _=xe(),v=ue(_);st(v,1,n,yt,(g,h)=>{Cp(g,{get token(){return p(h)},get renderers(){return r()},get options(){return i()}})}),R(u,_)};he(s,u=>{n()&&u(c)})}R(t,a)}function Ep(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function Ip(t){return t.startsWith("/")||t.startsWith("#")}function mH(t,e){return e.slug(t).replace(/--+/g,"-")}function CH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;let a=T();k(()=>(Z(n()),Z(r())),()=>{S(a,mH(n().text,r().slugger))}),Ie(),ge();var s=xe(),c=ue(s);return Th(c,()=>`h${n().depth}`,!1,(u,_)=>{let v;te(()=>v=Gh(u,v,{id:p(a)},void 0,u.namespaceURI===Hu,u.nodeName.includes("-")));var g=xe(),h=ue(g);dt(h,e,"default",{}),R(_,g)}),R(t,s),Qe(e,"renderers",i),se({renderers:i})}var EH=ie("<blockquote><!></blockquote>");function IH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var a=EH(),s=V(a);return dt(s,e,"default",{}),Y(a),R(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),se({token:n,options:r,renderers:i})}function bH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8),a=T();k(()=>Z(n()),()=>{S(a,n().ordered?"ol":"ul")}),Ie(),ge();var s=xe(),c=ue(s);Th(c,()=>p(a),!1,(u,_)=>{let v;te(()=>v=Gh(u,v,{start:n().start||1},void 0,u.namespaceURI===Hu,u.nodeName.includes("-")));var g=xe(),h=ue(g);st(h,1,()=>n().items,yt,(m,C)=>{var I=Ze(()=>({...p(C)}));Cp(m,{get token(){return p(I)},get options(){return r()},get renderers(){return i()}})}),R(_,g)}),R(t,s),se()}var wH=ie("<li><!></li>");function OH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var a=wH(),s=V(a);return dt(s,e,"default",{}),Y(a),R(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),se({token:n,options:r,renderers:i})}var LH=ie("<br>");function yH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var a=LH();return R(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),se({token:n,options:r,renderers:i})}var AH=ie("<pre><code> </code></pre>");function SH(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;ge();var a=AH(),s=V(a),c=V(s,!0);return Y(s),Y(a),te(()=>{nO(s,`lang-${n().lang}`),nt(c,n().text)}),R(t,a),Qe(e,"options",r),Qe(e,"renderers",i),se({options:r,renderers:i})}var NH=ie("<code> </code>");function xH(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;ge();var a=NH(),s=V(a,!0);return te(()=>nt(s,n().raw.slice(1,n().raw.length-1))),Y(a),R(t,a),Qe(e,"options",r),Qe(e,"renderers",i),se({options:r,renderers:i})}var TH=ie('<th scope="col"><!></th>'),RH=ie("<td><!></td>"),DH=ie("<tr></tr>"),kH=ie("<table><thead><tr></tr></thead><tbody></tbody></table>");function GH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8);ge();var a=kH(),s=V(a),c=V(s);st(c,5,()=>n().header,yt,(_,v)=>{var g=TH(),h=V(g);Xs(h,{get tokens(){return p(v).tokens},get options(){return r()},get renderers(){return i()}}),Y(g),R(_,g)}),Y(c),Y(s);var u=$(s);st(u,5,()=>n().rows,yt,(_,v)=>{var g=DH();st(g,5,()=>p(v),yt,(h,m)=>{var C=RH(),I=V(C);Xs(I,{get tokens(){return p(m).tokens},get options(){return r()},get renderers(){return i()}}),Y(C),R(h,C)}),Y(g),R(_,g)}),Y(u),Y(a),R(t,a),se()}function MH(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;ge();var a=xe(),s=ue(a);return Qw(s,()=>n().text),R(t,a),Qe(e,"options",r),Qe(e,"renderers",i),se({options:r,renderers:i})}var UH=ie("<p><!></p>");function FH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var a=UH(),s=V(a);return dt(s,e,"default",{}),Y(a),R(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),se({token:n,options:r,renderers:i})}var $H=ie("<a><!></a>");function HH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;ge();var a=$H();te(()=>A(a,"href",Ip(n().href)?Ep(r().baseUrl,n().href):n().href));var s=V(a);return dt(s,e,"default",{}),Y(a),te(()=>A(a,"title",n().title)),R(t,a),Qe(e,"renderers",i),se({renderers:i})}function PH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var a=xe(),s=ue(a);return dt(s,e,"default",{}),R(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),se({token:n,options:r,renderers:i})}var BH=ie("<dfn><!></dfn>");function WH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var a=BH(),s=V(a);return dt(s,e,"default",{}),Y(a),R(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),se({token:n,options:r,renderers:i})}var zH=ie("<del><!></del>");function YH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var a=zH(),s=V(a);return dt(s,e,"default",{}),Y(a),R(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),se({token:n,options:r,renderers:i})}var jH=ie("<em><!></em>");function VH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var a=jH(),s=V(a);return dt(s,e,"default",{}),Y(a),R(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),se({token:n,options:r,renderers:i})}var KH=ie("<hr>");function XH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var a=KH();return R(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),se({token:n,options:r,renderers:i})}var qH=ie("<strong><!></strong>");function ZH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var a=qH(),s=V(a);return dt(s,e,"default",{}),Y(a),R(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),se({token:n,options:r,renderers:i})}var QH=ie('<img class="markdown-image svelte-z38cge">');function JH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;ge();var a=QH();return te(()=>A(a,"src",Ip(n().href)?Ep(r().baseUrl,n().href):n().href)),te(()=>{A(a,"title",n().title),A(a,"alt",n().text)}),R(t,a),Qe(e,"renderers",i),se({renderers:i})}function gh(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var a=xe(),s=ue(a);return dt(s,e,"default",{}),R(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),se({token:n,options:r,renderers:i})}const eP=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,tP=Object.hasOwnProperty;class nP{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=rP(e,n===!0);const a=i;for(;tP.call(r.occurrences,i);)r.occurrences[a]++,i=a+"-"+r.occurrences[a];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function rP(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(eP,"").replace(/ /g,"-"))}function Kd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Pi=Kd();function bp(t){Pi=t}const wp=/[&<>"']/,iP=new RegExp(wp.source,"g"),Op=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,oP=new RegExp(Op.source,"g"),aP={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hh=t=>aP[t];function Gn(t,e){if(e){if(wp.test(t))return t.replace(iP,hh)}else if(Op.test(t))return t.replace(oP,hh);return t}const sP=/(^|[^\[])\^/g;function It(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(sP,"$1"),n=n.replace(i,s),r},getRegex:()=>new RegExp(n,e)};return r}function vh(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ga={exec:()=>null};function ph(t,e){const n=t.replace(/\|/g,(a,s,c)=>{let u=!1,_=s;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function ra(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function lP(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function mh(t,e,n,r){const i=e.href,a=e.title?Gn(e.title):null,s=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:a,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:a,text:Gn(s)}}function cP(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const a=i.match(/^\s+/);if(a===null)return i;const[s]=a;return s.length>=r.length?i.slice(r.length):i}).join(`
`)}class qs{constructor(e){ve(this,"options");ve(this,"rules");ve(this,"lexer");this.options=e||Pi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:ra(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=cP(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=ra(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:ra(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=ra(n[0],`
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
`,e=e.substring(h.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),y=new RegExp(`^ {0,${Math.min(3,C-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),D=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:\`\`\`|~~~)`),G=new RegExp(`^ {0,${Math.min(3,C-1)}}#`),F=new RegExp(`^ {0,${Math.min(3,C-1)}}<[a-z].*>`,"i");for(;e;){const B=e.split(`
`,1)[0];let W;if(h=B,this.options.pedantic?(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),W=h):W=h.replace(/\t/g,"    "),D.test(h)||G.test(h)||F.test(h)||w.test(h)||y.test(h))break;if(W.search(/[^ ]/)>=C||!h.trim())v+=`
`+W.slice(C);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||D.test(g)||G.test(g)||y.test(g))break;v+=`
`+h}!m&&!h.trim()&&(m=!0),_+=B+`
`,e=e.substring(B.length+1),g=W.slice(C)}}a.loose||(c?a.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(v),I&&(b=I[0]!=="[ ] ",v=v.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:_,task:!!I,checked:b,loose:!1,text:v,tokens:[]}),a.raw+=_}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let u=0;u<a.items.length;u++)if(this.lexer.state.top=!1,a.items[u].tokens=this.lexer.blockTokens(a.items[u].text,[]),!a.loose){const _=a.items[u].tokens.filter(g=>g.type==="space"),v=_.length>0&&_.some(g=>/\n.*\n/.test(g.raw));a.loose=v}if(a.loose)for(let u=0;u<a.items.length;u++)a.items[u].loose=!0;return a}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:a}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=ph(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),a=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?s.align.push("right"):/^ *:-+: *$/.test(c)?s.align.push("center"):/^ *:-+ *$/.test(c)?s.align.push("left"):s.align.push(null);for(let c=0;c<r.length;c++)s.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:s.align[c]});for(const c of a)s.rows.push(ph(c,s.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[_]})));return s}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Gn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=ra(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=lP(n[2],"()");if(s>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],a="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],a=s[3])}else a=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),mh(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),a=n[i.toLowerCase()];if(!a){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return mh(r,a,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...i[0]].length-1;let c,u,_=s,v=0;const g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+s);(i=g.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){_+=u;continue}else if((i[5]||i[6])&&s%3&&!((s+u)%3)){v+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+v);const h=[...i[0]][0].length,m=e.slice(0,s+i.index+h+u);if(Math.min(s,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const C=m.slice(2,-2);return{type:"strong",raw:m,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),a=/^ /.test(r)&&/ $/.test(r);return i&&a&&(r=r.substring(1,r.length-1)),r=Gn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Gn(n[1]),i="mailto:"+r):(r=Gn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,a;if(n[2]==="@")i=Gn(n[0]),a="mailto:"+i;else{let s;do s=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(s!==n[0]);i=Gn(n[0]),n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Gn(n[0]),{type:"text",raw:n[0],text:r}}}}const uP=/^(?:[ \t]*(?:\n|$))+/,dP=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,_P=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ha=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,fP=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Lp=/(?:[*+-]|\d{1,9}[.)])/,yp=It(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Lp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Xd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,gP=/^[^\n]+/,qd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,hP=It(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",qd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),vP=It(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Lp).getRegex(),Nl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Zd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,pP=It("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Zd).replace("tag",Nl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ap=It(Xd).replace("hr",Ha).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Nl).getRegex(),mP=It(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ap).getRegex(),Qd={blockquote:mP,code:dP,def:hP,fences:_P,heading:fP,hr:Ha,html:pP,lheading:yp,list:vP,newline:uP,paragraph:Ap,table:ga,text:gP},Ch=It("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ha).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Nl).getRegex(),CP={...Qd,table:Ch,paragraph:It(Xd).replace("hr",Ha).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ch).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Nl).getRegex()},EP={...Qd,html:It(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Zd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ga,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:It(Xd).replace("hr",Ha).replace("heading",` *#{1,6} *[^
]`).replace("lheading",yp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Sp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,IP=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Np=/^( {2,}|\\)\n(?!\s*$)/,bP=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Pa="\\p{P}\\p{S}",wP=It(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Pa).getRegex(),OP=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,LP=It(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Pa).getRegex(),yP=It("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Pa).getRegex(),AP=It("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Pa).getRegex(),SP=It(/\\([punct])/,"gu").replace(/punct/g,Pa).getRegex(),NP=It(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),xP=It(Zd).replace("(?:-->|$)","-->").getRegex(),TP=It("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",xP).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Zs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,RP=It(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Zs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),xp=It(/^!?\[(label)\]\[(ref)\]/).replace("label",Zs).replace("ref",qd).getRegex(),Tp=It(/^!?\[(ref)\](?:\[\])?/).replace("ref",qd).getRegex(),DP=It("reflink|nolink(?!\\()","g").replace("reflink",xp).replace("nolink",Tp).getRegex(),Jd={_backpedal:ga,anyPunctuation:SP,autolink:NP,blockSkip:OP,br:Np,code:IP,del:ga,emStrongLDelim:LP,emStrongRDelimAst:yP,emStrongRDelimUnd:AP,escape:Sp,link:RP,nolink:Tp,punctuation:wP,reflink:xp,reflinkSearch:DP,tag:TP,text:bP,url:ga},kP={...Jd,link:It(/^!?\[(label)\]\((.*?)\)/).replace("label",Zs).getRegex(),reflink:It(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Zs).getRegex()},Du={...Jd,escape:It(Sp).replace("])","~|])").getRegex(),url:It(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},GP={...Du,br:It(Np).replace("{2,}","*").getRegex(),text:It(Du.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Us={normal:Qd,gfm:CP,pedantic:EP},ia={normal:Jd,gfm:Du,breaks:GP,pedantic:kP};class Un{constructor(e){ve(this,"tokens");ve(this,"options");ve(this,"state");ve(this,"tokenizer");ve(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Pi,this.options.tokenizer=this.options.tokenizer||new qs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Us.normal,inline:ia.normal};this.options.pedantic?(n.block=Us.pedantic,n.inline=ia.pedantic):this.options.gfm&&(n.block=Us.gfm,this.options.breaks?n.inline=ia.breaks:n.inline=ia.gfm),this.tokenizer.rules=n}static get rules(){return{block:Us,inline:ia}}static lex(e,n){return new Un(n).lex(e)}static lexInline(e,n){return new Un(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,a,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+i.raw,a.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(v=>{_=v.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){a=n[n.length-1],r&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),a=n[n.length-1],a&&a.type==="text"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,a,s=e,c,u,_;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)v.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,c.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(r=v.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,s,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const g=e.slice(1);let h;this.options.extensions.startInline.forEach(m=>{h=m.call({lexer:this},g),typeof h=="number"&&h>=0&&(v=Math.min(v,h))}),v<1/0&&v>=0&&(a=e.substring(0,v+1))}if(r=this.tokenizer.inlineText(a)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return n}}class Qs{constructor(e){ve(this,"options");ve(this,"parser");this.options=e||Pi}space(e){return""}code({text:e,lang:n,escaped:r}){var s;const i=(s=(n||"").match(/^\S*/))==null?void 0:s[0],a=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+Gn(i)+'">'+(r?a:Gn(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:Gn(a,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),a=vh(e);if(a===null)return i;e=a;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+i+"</a>",s}image({href:e,title:n,text:r}){const i=vh(e);if(i===null)return r;e=i;let a=`<img src="${e}" alt="${r}"`;return n&&(a+=` title="${n}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class e_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Zn{constructor(e){ve(this,"options");ve(this,"renderer");ve(this,"textRenderer");this.options=e||Pi,this.options.renderer=this.options.renderer||new Qs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new e_}static parse(e,n){return new Zn(n).parse(e)}static parseInline(e,n){return new Zn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const a=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const s=a;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let c=s,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const a=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=c||"";continue}}const s=a;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class ha{constructor(e){ve(this,"options");ve(this,"block");this.options=e||Pi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Un.lex:Un.lexInline}provideParser(){return this.block?Zn.parse:Zn.parseInline}}ve(ha,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class MP{constructor(...e){ve(this,"defaults",Kd());ve(this,"options",this.setOptions);ve(this,"parse",this.parseMarkdown(!0));ve(this,"parseInline",this.parseMarkdown(!1));ve(this,"Parser",Zn);ve(this,"Renderer",Qs);ve(this,"TextRenderer",e_);ve(this,"Lexer",Un);ve(this,"Tokenizer",qs);ve(this,"Hooks",ha);this.use(...e)}walkTokens(e,n){var i,a;let r=[];for(const s of e)switch(r=r.concat(n.call(this,s)),s.type){case"table":{const c=s;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=s;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=s;(a=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&a[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const s=n.renderers[a.name];s?n.renderers[a.name]=function(...c){let u=a.renderer.apply(this,c);return u===!1&&(u=s.apply(this,c)),u}:n.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=n[a.level];s?s.unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),i.extensions=n),r.renderer){const a=this.defaults.renderer||new Qs(this.defaults);for(const s in r.renderer){if(!(s in a))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const c=s,u=r.renderer[c],_=a[c];a[c]=(...v)=>{let g=u.apply(a,v);return g===!1&&(g=_.apply(a,v)),g||""}}i.renderer=a}if(r.tokenizer){const a=this.defaults.tokenizer||new qs(this.defaults);for(const s in r.tokenizer){if(!(s in a))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const c=s,u=r.tokenizer[c],_=a[c];a[c]=(...v)=>{let g=u.apply(a,v);return g===!1&&(g=_.apply(a,v)),g}}i.tokenizer=a}if(r.hooks){const a=this.defaults.hooks||new ha;for(const s in r.hooks){if(!(s in a))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const c=s,u=r.hooks[c],_=a[c];ha.passThroughHooks.has(s)?a[c]=v=>{if(this.defaults.async)return Promise.resolve(u.call(a,v)).then(h=>_.call(a,h));const g=u.call(a,v);return _.call(a,g)}:a[c]=(...v)=>{let g=u.apply(a,v);return g===!1&&(g=_.apply(a,v)),g}}i.hooks=a}if(r.walkTokens){const a=this.defaults.walkTokens,s=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(s.call(this,c)),a&&(u=u.concat(a.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Un.lex(e,n??this.defaults)}parser(e,n){return Zn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const a={...i},s={...this.defaults,...a},c=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const u=s.hooks?s.hooks.provideLexer():e?Un.lex:Un.lexInline,_=s.hooks?s.hooks.provideParser():e?Zn.parse:Zn.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(v=>u(v,s)).then(v=>s.hooks?s.hooks.processAllTokens(v):v).then(v=>s.walkTokens?Promise.all(this.walkTokens(v,s.walkTokens)).then(()=>v):v).then(v=>_(v,s)).then(v=>s.hooks?s.hooks.postprocess(v):v).catch(c);try{s.hooks&&(r=s.hooks.preprocess(r));let v=u(r,s);s.hooks&&(v=s.hooks.processAllTokens(v)),s.walkTokens&&this.walkTokens(v,s.walkTokens);let g=_(v,s);return s.hooks&&(g=s.hooks.postprocess(g)),g}catch(v){return c(v)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Gn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Mi=new MP;function Et(t,e){return Mi.parse(t,e)}Et.options=Et.setOptions=function(t){return Mi.setOptions(t),Et.defaults=Mi.defaults,bp(Et.defaults),Et};Et.getDefaults=Kd;Et.defaults=Pi;Et.use=function(...t){return Mi.use(...t),Et.defaults=Mi.defaults,bp(Et.defaults),Et};Et.walkTokens=function(t,e){return Mi.walkTokens(t,e)};Et.parseInline=Mi.parseInline;Et.Parser=Zn;Et.parser=Zn.parse;Et.Renderer=Qs;Et.TextRenderer=e_;Et.Lexer=Un;Et.lexer=Un.lex;Et.Tokenizer=qs;Et.Hooks=ha;Et.parse=Et;Et.options;Et.setOptions;Et.use;Et.walkTokens;Et.parseInline;Zn.parse;Un.lex;function UP(t){return new Un().lex(t)}const FP=()=>({heading:CH,blockquote:IH,list:bH,list_item:OH,br:yH,code:SH,codespan:xH,table:GH,html:MH,paragraph:FH,link:HH,text:PH,def:WH,del:YH,em:VH,hr:XH,strong:ZH,image:JH,space:gh,escape:gh}),$P=()=>({baseUrl:"/",slugger:new nP});function HP(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},Nh(()=>{console.warn=t})}function Rp(t,e){ae(e,!1),HP();let n=U(e,"source",8),r=U(e,"options",24,()=>({})),i=U(e,"renderers",24,()=>({})),a=T(),s=T(),c=T();k(()=>(Z(n()),Z(i()),Z(r())),()=>{S(a,UP(n())),S(s,{...FP(),...i()}),S(c,{...$P(),...r()})}),Ie(),ge(),Xs(t,{get tokens(){return p(a)},get renderers(){return p(s)},get options(){return p(c)}}),se()}var PP=ie('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),BP=ie('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),WP=ie('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function zP(t,e){ae(e,!1);const n=it(),r=()=>Ee(Gr,"$puzzleMetaStore",n),i=T();let a=U(e,"showModal",12,!1);function s(u){return u?Ws(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}k(()=>r(),()=>{S(i,r())}),Ie(),ge(),Br(t,{title:"Rules",get showModal(){return a()},set showModal(u){a(u)},children:(u,_)=>{var v=WP(),g=V(v),h=V(g,!0);Y(g);var m=$(g,2),C=V(m);te(()=>nt(C,`by ${s(p(i).authors)??""}`)),Y(m);var I=$(m,2),b=V(I),w=Ze(()=>c(p(i).ruleset));Rp(b,{get source(){return p(w)}}),Y(I);var y=$(I,2);{var D=B=>{var W=PP(),X=$(ue(W),2);te(()=>A(X,"href",p(i).ctcUrl)),R(B,W)};he(y,B=>{var W,X;(X=(W=p(i))==null?void 0:W.ctcUrl)!=null&&X.length&&B(D)})}var G=$(y,2);{var F=B=>{var W=BP(),X=$(ue(W),2);te(()=>A(X,"href",p(i).ctcYoutubeUrl)),R(B,W)};he(G,B=>{var W,X;(X=(W=p(i))==null?void 0:W.ctcYoutubeUrl)!=null&&X.length&&B(F)})}Y(v),te(()=>{var B;return nt(h,((B=p(i))==null?void 0:B.title)||"Puzzle")}),R(u,v)},$$slots:{default:!0},$$legacy:!0}),se()}var YP=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function jP(t){var e=YP();R(t,e)}var VP=ie("<!> <!>",1);function KP(t){let e=T(!1);function n(){S(e,!0)}var r=VP(),i=ue(r);$a(i,{title:"Rules",clickCb:n,children:(s,c)=>{jP(s)},$$slots:{default:!0}});var a=$(i,2);zP(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),R(t,r)}var XP=ie("<!> <!>",1);function qP(t){let e=T(!1);function n(){S(e,!0)}var r=XP(),i=ue(r);$a(i,{title:"Settings",clickCb:n,children:(s,c)=>{tp(s)},$$slots:{default:!0}});var a=$(i,2);np(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),R(t,r)}var ZP=ie('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function QP(t){var e=ZP(),n=V(e);qP(n);var r=$(n,2);KP(r);var i=$(r,2);pH(i);var a=$(i,2);_H(a);var s=$(a,2);Q6(s),Y(e),R(t,e)}var JP=ie('<div class="entry-panel-wrapper svelte-z8q7hf"><div class="puzzle-info svelte-z8q7hf"><div class="puzzle-header svelte-z8q7hf"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-z8q7hf"><!></div></div>  <div class="entry-panel svelte-z8q7hf"><!> <div class="entry-subpanel1 svelte-z8q7hf"><!> <!></div> <!></div></div>');function e9(t,e){ae(e,!1);const n=it(),r=()=>Ee(fo,"$svgRefStore",n),i=()=>Ee(Gr,"$puzzleMetaStore",n),a=()=>Ee(Qt,"$toolStore",n),s=T(),c=T();function u(){r().focus()}function _(J){return J?Ws(J," & ",", "):"Anonymous"}function v(J){return J&&J.length?J:"Normal sudoku rules apply."}k(()=>i(),()=>{S(s,i().title??"Sudoku")}),k(()=>i(),()=>{S(c,_(i().authors))}),Ie(),ge();var g=JP(),h=V(g),m=V(h),C=V(m),I=V(C,!0);Y(C);var b=$(C,2),w=V(b);Y(b),Y(m);var y=$(m,2),D=V(y),G=Ze(()=>v(i().ruleset));Rp(D,{get source(){return p(G)}}),Y(y),Y(h);var F=$(h,2),B=V(F);QP(B);var W=$(B,2),X=V(W);R6(X,{get selectedTool(){return a()}});var ee=$(X,2);z6(ee,{get selectedTool(){return Sh(),a()},set selectedTool(J){ba(Qt,J)},$$legacy:!0}),Y(W);var ce=$(W,2);A6(ce,{}),Y(F),Y(g),te(()=>{nt(I,p(s)),nt(w,`by ${p(c)??""}`)}),Ue("click",F,Qn(()=>{u()})),R(t,g),se()}var t9=ie('<div class="App svelte-1uvdmnd"><header></header> <main class="svelte-1uvdmnd"><div class="game-wrapper svelte-1uvdmnd"><div class="game svelte-1uvdmnd"><!> <div class="central-panel svelte-1uvdmnd"><!></div> <div class="right-panel svelte-1uvdmnd"><!></div></div></div></main> <footer class="svelte-1uvdmnd"><div class="footer-text svelte-1uvdmnd"></div></footer></div>');function d9(t,e){ae(e,!1);const n=it(),r=()=>Ee(lO,"$darkModeStore",n),i=()=>Ee(ol,"$gameModeStore",n),a=T(),s=T();Nh(async()=>{const w=window.location.href;try{await mO({workerURL:`${w}minizinc-worker.js`,wasmURL:`${w}minizinc.wasm`,dataURL:`${w}minizinc.data`})}catch(y){const D="Failed to initialize MiniZinc: "+y.message;console.log(D)}}),k(()=>r(),()=>{S(a,r()?"dark":"light")}),k(()=>i(),()=>{S(s,i())}),Ie(),ge();var c=t9(),u=$(V(c),2),_=V(u),v=V(_),g=V(v);{var h=w=>{V8(w)};he(g,w=>{p(s)===po.SETTING&&w(h)})}var m=$(g,2),C=V(m);p6(C,{}),Y(m);var I=$(m,2),b=V(I);e9(b,{}),Y(I),Y(v),Y(_),Y(u),Ti(2),Y(c),te(()=>A(c,"data-theme",p(a))),R(t,c),se()}export{d9 as component,u9 as universal};
