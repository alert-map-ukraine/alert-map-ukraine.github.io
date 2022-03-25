import{T as I,u as q,L as N,r as d,a as J,j as f,F as K,b as n,c as X,G as Y,d as E,s as l,I as Z,S as ee,Q as te,M as ne,f as ie,D as re,l as oe,e as se,P as ae,n as O,B as ce,R as ue,g as $,h as de,i as le,k as pe,m as fe,o as he}from"./vendor.9b43304c.js";const me=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function p(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(t){if(t.ep)return;t.ep=!0;const c=p(t);fetch(t.href,c)}};me();const ge={colors:{}};I.addDefaultLocale(q);const xe=new I("en-US"),B=(o,s)=>xe.format(o+(Date.now()-s)),we=o=>N.icon({iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41],iconUrl:"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",className:o}),z=d.exports.forwardRef(({cities:o,loading:s,dateTime:p},a)=>{const t=J(),c=(i,h,g)=>{const w=B(g.date,p),y=`${g.city} ${w}`;h.name=g.city,h.bindTooltip(y)};return d.exports.useEffect(()=>{a.current=t},[]),f(K,{children:[n(X,{attribution:'\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),!s&&o.map(i=>{var h,g;return n(Y,{style:{fillColor:"red",color:"red"},data:(g=(h=i.data)==null?void 0:h[0])==null?void 0:g.geojson,pointToLayer:(w,y)=>{const S=we("blue-icon");return N.marker(y,{icon:S})},onEachFeature:(w,y)=>{c(w,y,i)}},i.city)})]})});z.propTypes={cities:E.arrayOf(E.shape({city:E.string,data:E.arrayOf(E.shape({}))})),loading:E.bool,dateTime:E.number};const ye="modulepreload",_={},ve="/",Ee=function(s,p){return!p||p.length===0?s():Promise.all(p.map(a=>{if(a=`${ve}${a}`,a in _)return;_[a]=!0;const t=a.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":ye,t||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),t)return new Promise((h,g)=>{i.addEventListener("load",h),i.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>s())},be="https://alert-ukraine.eu-4.evennode.com/alert/",Le="wss://alert-ukraine.eu-4.evennode.com",Ce=async(o=Date.now())=>{try{return await(await fetch(`${be}${o}`)).json()}catch{return[]}},Se=()=>{const[o,s]=d.exports.useState(!0),[p,a]=d.exports.useState(!1),t=d.exports.useRef(null);return d.exports.useEffect(()=>{Ee(()=>import("./cities.64b1384d.js"),[]).then(i=>{t.current=i.default,s(!1)})},[]),{getAlerts:async i=>{a(!0);const h=await Ce(i);return a(!1),h},loading:p,citiesLoading:o,citiesRef:t}},ke=({onNewData:o})=>{const s=d.exports.useRef(null);d.exports.useEffect(()=>{const p=new WebSocket(Le);p.onmessage=a=>{let t;try{t=JSON.parse(a.data)}catch{t=null}o(t)},s.current=p},[])},C="#1890ff",Re=l.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid ${C};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`,H=75,Ae=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${H}px;
  border: 1px solid ${C};
  border-right: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`,Te=l.div`
  @media (max-width: 400px) {
    display: none;
  }
`;l.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 20px;
  height: 20px;

  &:before {
    content: '';
    position: relative;
    display: block;
    width: 250%;
    height: 250%;
    box-sizing: border-box;
    margin-left: -75%;
    margin-top: -75%;
    border-radius: 45px;
    background-color: #75daad;
    animation: pulse 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #75daad;
    border-radius: 50px;
    animation: circle 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
  }
`;const De=l.div`
  display: flex;
  width: 300px;
  @media (max-width: 767px) {
    width: auto;
  }
`,Oe=l(Z)`
  @media (max-width: 767px) {
    width: 50px;
  }
`,$e=l(ee)`
  flex: 1 1 auto;
  @media (max-width: 767px) {
    display: none;
  }
`,_e=l(te)`
  cursor: pointer;
  font-size: 2rem;
  color: ${C};
`,Fe=l.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`,Me=l.div`
  height: 100%;
  width: 100%;
`,Pe=l(ne)`
  height: calc(100% - ${H}px);
  width: 100%;
`,je=l.div`
  display: flex;
  overflow-y: hidden;
  height: 100%;
  width: 100%;
`,Ie=l.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  min-width: 350px;
  overflow-y: auto;
  overflow-x: auto;
  padding-top: 0.5rem;
  gap: 0.5rem;
  margin-right: 0.5rem;
  border-left: 1px solid ${C};
  @media (max-width: 767px) {
    display: none;
  }
`,Ne=l.div`
  width: 30px;
`,Be=l.div`
  width: 115px;
  cursor: ${o=>o.isLive?"default":"pointer"};
  @media (max-width: 400px) {
    width: unset;
  }
  display: flex;
  justify-content: space-between;
`,ze=l.div`
  display: flex;
  position: relative;
  width: 35px;
  align-items: center;
  top: 3px;
`,He=l.span`
  opacity: ${o=>o.isLive?"1":"0.5"};
  @media (max-width: 400px) {
    display: none;
  }
`,Ue=l.div`
  cursor: pointer;
  margin: 0 0.5rem 0 1rem;
  padding: 0.25rem;
  border: 1px solid red;
  border-radius: 0.5rem;
  &:hover {
    background-color: pink;
  }
`,F=1,M=24,We=2e4,Ve=()=>{const{getAlerts:o,loading:s,citiesRef:p,citiesLoading:a}=Se(),[t,c]=d.exports.useState(Date.now()),[i,h]=d.exports.useState(3),[g,w]=d.exports.useState([]),[y,S]=d.exports.useState([]),v=d.exports.useRef(!0),[U,A]=d.exports.useState(""),b=d.exports.useRef(null);d.exports.useEffect(()=>{ie.setEventListener(()=>{const e=()=>{v.current&&o(Date.now()).then(w)};return typeof window!="undefined"&&window.addEventListener&&(window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1)),()=>{window.removeEventListener("visibilitychange",e),window.removeEventListener("focus",e)}})},[]),ke({onNewData:e=>{if(!v.current)return;const r=e.filter(u=>u.status==="START").map(u=>u.city),m=e.filter(u=>u.status==="END").map(u=>u.city);r.length>0&&O.info({key:r.join(""),message:"\u0422\u0420\u0418\u0412\u041E\u0413\u0410",description:r.join(", ")}),m.length>0&&O.info({key:m.join(""),message:"\u0412\u0406\u0414\u0411\u0406\u0419 \u0422\u0420\u0418\u0412\u041E\u0413\u0418",description:m.join(", ")}),w(u=>{let x=[...u];return e.forEach(({status:k,date:V,city:R,data:Q})=>{k==="START"?u.find(G=>G.city===R)||x.push({status:k,date:V,city:R,data:Q}):k==="END"&&(x=x.filter(D=>D.city!==R))}),x})}}),d.exports.useEffect(()=>{if(a)return;const e=g.filter(r=>t-i*60*60*1e3<r.date);e.forEach(r=>{var m;r.data||(r.data=(m=p.current.find(u=>u.city===r.city))==null?void 0:m.data)}),S(e)},[g,i,a]),d.exports.useEffect(()=>{if(v.current){const e=setInterval(()=>{v.current&&c(Date.now())},We);return()=>{clearInterval(e)}}return()=>{}},[v.current]),d.exports.useEffect(()=>{o(Date.now()).then(w)},[]);const T=e=>{var m,u,x;A(e);const r=((x=(u=(m=e==null?void 0:e.toDate)==null?void 0:m.call(e))==null?void 0:u.getTime)==null?void 0:x.call(u))||Date.now();v.current=!e,c(r),o(r).then(w)},W=e=>{var u;if(!b.current)return;const r=Object.values(b.current._layers).find(x=>x.name===e);if(!r)return;const m=(u=r==null?void 0:r.getBounds)==null?void 0:u.call(r);if(!m){const x=r==null?void 0:r.getLatLng();b.current.flyTo(x,10);return}b.current.flyToBounds(m)},L=v.current;return f(Fe,{children:[f(Re,{children:[f(Be,{onClick:()=>{A("");const e=Date.now();c(e),o(e).then(w),v.current=!0},isLive:L,children:[n(ze,{isLive:L,children:f("div",{className:`video__icon ${L?"":"video__icon_stop"}`,children:[n("div",{className:"circle--outer"}),n("div",{className:"circle--inner"})]})}),n(He,{isLive:L,children:"\u041D\u0410\u0416\u0418\u0412\u041E"})]}),n("div",{children:n(re,{value:U,locale:oe,showTime:!0,onChange:T,onOk:T})}),n(Ne,{children:(s||a)&&n(se,{})})]}),f(je,{children:[f(Me,{children:[n(Pe,{center:[49.518,31.278],zoom:6,children:n(z,{ref:b,cities:y,loading:s,dateTime:t})}),f(Ae,{children:[n("div",{children:n(Te,{children:"\u041A\u0430\u0440\u0442\u0430 \u043F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0438\u0445 \u0442\u0440\u0438\u0432\u043E\u0433 \u0423\u043A\u0440\u0430\u0457\u043D\u0438"})}),f(De,{children:[n($e,{min:F,max:M,onChange:e=>{e&&h(e)},value:i}),n(Oe,{min:F,max:M,style:{margin:"0 8px"},value:i,onChange:h}),n(ae,{content:f("div",{children:["\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u0442\u0440\u0438\u0432\u043E\u0433\u0438 \u0437\u0430 \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u0447\u0430\u0441 (",f("b",{children:[i," \u0433\u043E\u0434."]}),")"]}),title:"\u0414\u043E\u0432\u0456\u0434\u043A\u0430",children:n(_e,{})})]})]})]}),n(Ie,{children:!s&&y.sort((e,r)=>r.date-e.date).map(({city:e,date:r})=>f(Ue,{onClick:()=>W(e),children:[e," - ",n("b",{children:B(r,t)})]},e))})]})]})},P="/Home",j=[{id:P,path:P,element:n(Ve,{}),title:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 \u0440\u043E\u0431\u043E\u0442\u0430 \u21161"}],Qe=()=>n(ce,{children:f(ue,{children:[j.map(({id:o,path:s,element:p})=>n($,{path:s,element:p},o)),n($,{path:"*",element:j[0].element})]})});const Ge=new de,qe=()=>n(le,{theme:ge,children:n(pe,{client:Ge,children:n(Qe,{})})});fe.render(n(he.StrictMode,{children:n(qe,{})}),document.getElementById("root"));
