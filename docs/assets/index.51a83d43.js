import{r as y,o as m,c as g,d as _,u as b,a as k,b as q,e as h,f as s,w as d,v,g as l,h as x,t as B,i as L,j as C,k as O}from"./vendor.b8bdab5d.js";const U=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};U();var D=(u,r)=>{const n=u.__vccOpts||u;for(const[t,e]of r)n[t]=e;return n};const A={};function R(u,r){const n=y("router-view");return m(),g(n)}var F=D(A,[["render",R]]);const N=[{username:"test01",pwd:"qwe123"},{username:"test02",pwd:"qwe123"},{username:"test03",pwd:"qwe123"},{username:"test04",pwd:"qwe123"},{username:"test05",pwd:"qwe123"},{username:"test06",pwd:"qwe123"},{username:"test07",pwd:"qwe123"},{username:"test08",pwd:"qwe123"},{username:"test09",pwd:"qwe123"},{username:"test10",pwd:"qwe123"}];var V={UserDB:N};const E={class:"container py-5"},H=s("h1",{class:"text-center"},"\u767B\u5165",-1),M={class:"login-form"},$={class:"mb-3"},j=s("label",{for:"account",class:"form-label"},"\u5E33\u865F",-1),P={class:"mb-3"},T=s("label",{for:"mima",class:"form-label"},"\u5BC6\u78BC",-1),G={class:"mb-3 form-check"},I=s("label",{class:"form-check-label",for:"memberme"},"\u8A18\u4F4F\u6211",-1),K=_({setup(u){const r=b(),n=k(null),t=q({username:"",mima:"",memberme:!1}),e=i=>{i.preventDefault();const{username:a,mima:c,memberme:Q}=B(t),w=V.UserDB.find(f=>f.username==a.value&&f.pwd==c.value),p=Boolean(w);n.value=p,p&&r.push("/home")},o=()=>{t.username="",t.mima="",t.memberme=!1};return(i,a)=>(m(),h("div",E,[H,s("form",M,[s("div",$,[j,d(s("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>l(t).username=c),type:"text",class:"form-control",id:"account","aria-describedby":"emailHelp"},null,512),[[v,l(t).username]])]),s("div",P,[T,d(s("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>l(t).mima=c),type:"password",class:"form-control",id:"mima"},null,512),[[v,l(t).mima]])]),s("div",G,[d(s("input",{"onUpdate:modelValue":a[2]||(a[2]=c=>l(t).memberme=c),type:"checkbox",class:"form-check-input",id:"memberme"},null,512),[[x,l(t).memberme]]),I]),s("button",{type:"button",class:"btn btn-primary",onClick:e},"\u767B\u5165"),s("button",{type:"button",class:"btn btn-text",onReset:o},"\u91CD\u8A2D",32)])]))}}),S={class:"container pt-5"},W=_({setup(u){const r=b(),n=()=>{r.push("/login")};return(t,e)=>(m(),h("div",S,[s("button",{class:"btn btn-primary",onClick:n},"LOGOUT")]))}}),z=[{path:"/",redirect:"/login"},{path:"/login",component:K},{path:"/home",component:W}],J=L({history:C(),routes:z});O(F).use(J).mount("#app");
