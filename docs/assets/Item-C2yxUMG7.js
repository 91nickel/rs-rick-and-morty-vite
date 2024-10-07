function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as t,r as n,z as i,_ as x,A as f,w as j,B as o,t as p,D as g}from"./index-CRr02VuG.js";import{E as h}from"./ErrorBoundary-D2Ihcbsg.js";import{s as E,n as _}from"./normalizeEntity-Cr1V-o7h.js";function y(e){return n.lazy(()=>x(()=>import(`./../${e}`),__vite__mapDeps([])))}const L=({element:e,...s})=>{const a=y(e);return t.jsx(n.Suspense,{fallback:t.jsx(i.Loading,{}),children:t.jsx(a,{...s})})},v=L;function F({type:e}){const{id:s}=f(),[a,r]=n.useState(!0),[c,m]=n.useState({}),l=j();return n.useEffect(()=>{s&&(r(!0),E.get(`${e}/${s}`).then(u=>{const d=u.data;m(_(e,d))}).catch(()=>{l("/notFound")}).finally(()=>{r(!1)}))},[e]),a?t.jsx(i.Loading,{}):t.jsxs(t.Fragment,{children:[t.jsx(o,{children:t.jsx(p,{variant:"filled",children:t.jsx(g,{className:"btn btn-primary",to:"..",style:{color:"#FFF"},children:"< Back"})})}),t.jsx(o,{children:t.jsx(h,{children:t.jsx(v,{element:"ItemCard",...c})})})]})}export{F as default};
