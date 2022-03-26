import{T as I,u as q,L as N,r as d,a as J,j as p,F as K,b as n,c as X,G as Y,d as v,s as f,S as Z,Q as ee,M as te,D as ne,l as ie,e as re,I as oe,P as se,n as O,B as ae,R as ce,f as $,g as ue,h as de,i as le}from"./vendor.288fdab7.js";const pe=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerpolicy&&(c.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?c.credentials="include":e.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(e){if(e.ep)return;e.ep=!0;const c=l(e);fetch(e.href,c)}};pe();const fe={colors:{}};I.addDefaultLocale(q);const he=new I("en-US"),B=(o,s)=>he.format(o+(Date.now()-s)),me=o=>N.icon({iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41],iconUrl:"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",className:o}),z=d.exports.forwardRef(({cities:o,loading:s,dateTime:l},a)=>{const e=J(),c=(i,h,g)=>{const y=B(g.date,l),w=`${g.city} ${y}`;h.name=g.city,h.bindTooltip(w)};return d.exports.useEffect(()=>{a.current=e},[]),p(K,{children:[n(X,{attribution:'\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),!s&&o.map(i=>{var h,g;return n(Y,{style:{fillColor:"red",color:"red"},data:(g=(h=i.data)==null?void 0:h[0])==null?void 0:g.geojson,pointToLayer:(y,w)=>{const L=me("blue-icon");return N.marker(w,{icon:L})},onEachFeature:(y,w)=>{c(y,w,i)}},i.city)})]})});z.propTypes={cities:v.arrayOf(v.shape({city:v.string,data:v.arrayOf(v.shape({}))})),loading:v.bool,dateTime:v.number};const ge="modulepreload",_={},xe="/",ye=function(s,l){return!l||l.length===0?s():Promise.all(l.map(a=>{if(a=`${xe}${a}`,a in _)return;_[a]=!0;const e=a.endsWith(".css"),c=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":ge,e||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),e)return new Promise((h,g)=>{i.addEventListener("load",h),i.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>s())},we="https://alert-ukraine.eu-4.evennode.com/alert/",be="wss://alert-ukraine.eu-4.evennode.com",ve=async(o=Date.now())=>{try{return await(await fetch(`${we}${o}`)).json()}catch{return[]}},Ee=()=>{const[o,s]=d.exports.useState(!0),[l,a]=d.exports.useState(!1),e=d.exports.useRef(null);return d.exports.useEffect(()=>{ye(()=>import("./cities.64b1384d.js"),[]).then(i=>{e.current=i.default,s(!1)})},[]),{getAlerts:async i=>{a(!0);const h=await ve(i);return a(!1),h},loading:l,citiesLoading:o,citiesRef:e}},Se=({onNewData:o})=>{const s=d.exports.useRef(null);d.exports.useEffect(()=>{const l=new WebSocket(be);l.onmessage=a=>{let e;try{e=JSON.parse(a.data)}catch{e=null}o(e)},s.current=l},[])},k="#1890ff",ke=f.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid ${k};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`,H=75,Le=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${H}px;
  border: 1px solid ${k};
  border-right: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;f.div`
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
`;const Ce=f.div`
  display: flex;
  width: 300px;
  @media (max-width: 767px) {
    width: auto;
  }
`,Re=f(Z)`
  flex: 1 1 auto;
  @media (max-width: 767px) {
    display: none;
  }
`,Ae=f(ee)`
  cursor: pointer;
  font-size: 2rem;
  color: ${k};
`,Te=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`,De=f.div`
  height: 100%;
  width: 100%;
`,Oe=f(te)`
  height: calc(100% - ${H}px);
  width: 100%;
`,$e=f.div`
  display: flex;
  overflow-y: hidden;
  height: 100%;
  width: 100%;
`,_e=f.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  min-width: 350px;
  overflow-y: auto;
  overflow-x: auto;
  padding-top: 0.5rem;
  gap: 0.5rem;
  margin-right: 0.5rem;
  border-left: 1px solid ${k};
  @media (max-width: 767px) {
    display: none;
  }
`,Fe=f.div`
  width: 30px;
`,je=f.div`
  width: 115px;
  cursor: ${o=>o.isLive?"default":"pointer"};
  @media (max-width: 400px) {
    width: unset;
  }
  display: flex;
  justify-content: space-between;
`,Me=f.div`
  display: flex;
  position: relative;
  width: 35px;
  align-items: center;
  top: 3px;
`,Pe=f.span`
  opacity: ${o=>o.isLive?"1":"0.5"};
  @media (max-width: 400px) {
    display: none;
  }
`,Ie=f.div`
  cursor: pointer;
  margin: 0 0.5rem 0 1rem;
  padding: 0.25rem;
  border: 1px solid red;
  border-radius: 0.5rem;
  &:hover {
    background-color: pink;
  }
`,F=1,j=24,Ne=2e4,Be=()=>{const{getAlerts:o,loading:s,citiesRef:l,citiesLoading:a}=Ee(),[e,c]=d.exports.useState(Date.now()),[i,h]=d.exports.useState(3),[g,y]=d.exports.useState([]),[w,L]=d.exports.useState([]),b=d.exports.useRef(!0),[U,A]=d.exports.useState(""),E=d.exports.useRef(null);Se({onNewData:t=>{if(!b.current)return;const r=t.filter(u=>u.status==="START").map(u=>u.city),m=t.filter(u=>u.status==="END").map(u=>u.city);r.length>0&&O.info({key:r.join(""),message:"\u0422\u0420\u0418\u0412\u041E\u0413\u0410",description:r.join(", ")}),m.length>0&&O.info({key:m.join(""),message:"\u0412\u0406\u0414\u0411\u0406\u0419 \u0422\u0420\u0418\u0412\u041E\u0413\u0418",description:m.join(", ")}),y(u=>{let x=[...u];return t.forEach(({status:C,date:V,city:R,data:G})=>{C==="START"?u.find(Q=>Q.city===R)||x.push({status:C,date:V,city:R,data:G}):C==="END"&&(x=x.filter(D=>D.city!==R))}),x})}}),d.exports.useEffect(()=>{if(a)return;const t=g.filter(r=>e-i*60*60*1e3<r.date);t.forEach(r=>{var m;r.data||(r.data=(m=l.current.find(u=>u.city===r.city))==null?void 0:m.data)}),L(t)},[g,i,a]),d.exports.useEffect(()=>{if(b.current){const t=setInterval(()=>{b.current&&c(Date.now())},Ne);return()=>{clearInterval(t)}}return()=>{}},[b.current]),d.exports.useEffect(()=>{o(Date.now()).then(y)},[]);const T=t=>{var m,u,x;A(t);const r=((x=(u=(m=t==null?void 0:t.toDate)==null?void 0:m.call(t))==null?void 0:u.getTime)==null?void 0:x.call(u))||Date.now();b.current=!t,c(r),o(r).then(y)},W=t=>{var u;if(!E.current)return;const r=Object.values(E.current._layers).find(x=>x.name===t);if(!r)return;const m=(u=r==null?void 0:r.getBounds)==null?void 0:u.call(r);if(!m){const x=r==null?void 0:r.getLatLng();E.current.flyTo(x,10);return}E.current.flyToBounds(m)},S=b.current;return p(Te,{children:[p(ke,{children:[p(je,{onClick:()=>{A("");const t=Date.now();c(t),o(t).then(y),b.current=!0},isLive:S,children:[n(Me,{isLive:S,children:p("div",{className:`video__icon ${S?"":"video__icon_stop"}`,children:[n("div",{className:"circle--outer"}),n("div",{className:"circle--inner"})]})}),n(Pe,{isLive:S,children:"\u041D\u0410\u0416\u0418\u0412\u041E"})]}),n("div",{children:n(ne,{value:U,locale:ie,showTime:!0,onChange:T,onOk:T})}),n(Fe,{children:(s||a)&&n(re,{})})]}),p($e,{children:[p(De,{children:[n(Oe,{center:[49.518,31.278],zoom:6,children:n(z,{ref:E,cities:w,loading:s,dateTime:e})}),p(Le,{children:[p("div",{children:[p("div",{children:["Telegram"," ",n("a",{href:"tg://resolve?domain=vitalikprac",children:"@vitalikprac"})]}),n("div",{children:"\u041A\u0430\u0440\u0442\u0430 \u043F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0438\u0445 \u0442\u0440\u0438\u0432\u043E\u0433 \u0423\u043A\u0440\u0430\u0457\u043D\u0438"}),p("div",{children:["Source:"," ",n("a",{href:"https://github.com/vitalikprac/alert-map",children:"https://github.com/vitalikprac/alert-map"})]})]}),p(Ce,{children:[n(Re,{min:F,max:j,onChange:t=>{t&&h(t)},value:i}),n(oe,{min:F,max:j,style:{margin:"0 8px"},value:i,onChange:h}),n(se,{content:p("div",{children:["\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u0442\u0440\u0438\u0432\u043E\u0433\u0438 \u0437\u0430 \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u0447\u0430\u0441 (",p("b",{children:[i," \u0433\u043E\u0434."]}),")"]}),title:"\u0414\u043E\u0432\u0456\u0434\u043A\u0430",children:n(Ae,{})})]})]})]}),n(_e,{children:!s&&w.sort((t,r)=>r.date-t.date).map(({city:t,date:r})=>p(Ie,{onClick:()=>W(t),children:[t," - ",n("b",{children:B(r,e)})]},t))})]})]})},M="/Home",P=[{id:M,path:M,element:n(Be,{}),title:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 \u0440\u043E\u0431\u043E\u0442\u0430 \u21161"}],ze=()=>n(ae,{children:p(ce,{children:[P.map(({id:o,path:s,element:l})=>n($,{path:s,element:l},o)),n($,{path:"*",element:P[0].element})]})});const He=()=>n(ue,{theme:fe,children:n(ze,{})});de.render(n(le.StrictMode,{children:n(He,{})}),document.getElementById("root"));
