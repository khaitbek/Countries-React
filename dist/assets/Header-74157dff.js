import{u as s,j as e,a as t,L as c}from"./index-0d8f2245.js";import{B as d}from"./Button-18fa5754.js";function u({theme:n,setTheme:r}){const{t:a,i18n:i}=s();function o(l){l.target.value!==""&&i.changeLanguage(l.target.value)}return e("header",{className:n==="light"?"site-header":"site-header dark",children:e("div",{className:"container",children:t("div",{className:"header-wrapper",children:[e(c,{className:"site-logo",to:"/",children:a("logo")}),t("select",{onChange:o,name:"page_language",children:[e("option",{value:"",children:"Change Language"}),e("option",{value:"uz",children:a("uz")}),e("option",{value:"en",children:a("en")})]}),e(d,{className:"theme-toggler","aria-label":"change theme",onClick:()=>{r(n==="dark"?"light":"dark")},text:"Dark Mode"})]})})})}export{u as default};