(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9126:function(e,t,n){Promise.resolve().then(n.t.bind(n,8877,23)),Promise.resolve().then(n.bind(n,1549)),Promise.resolve().then(n.bind(n,4657)),Promise.resolve().then(n.t.bind(n,4724,23)),Promise.resolve().then(n.t.bind(n,3247,23))},1549:function(e,t,n){"use strict";n.r(t),n.d(t,{Navigation:function(){return v}});var r=n(7437),a=n(2265),s=n(1396),o=n.n(s),l=n(4033),i=n(9311),c=n(3023),d=n(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let m=(0,d.Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),u=(0,d.Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),h=(0,d.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),f=(0,d.Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var y=n(1350);function v(){let[e,t]=(0,a.useState)(!1),[n,s]=(0,a.useState)(!1),d=(0,l.usePathname)(),{theme:v,setTheme:b}=(0,y.F)();(0,a.useEffect)(()=>{let e=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let x=[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}];return(0,r.jsx)("nav",{className:(0,i.cn)("fixed top-0 w-full z-50 transition-all duration-300",e?"bg-background/80 backdrop-blur-md shadow-sm":"bg-background/0"),children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,r.jsx)(o(),{href:"/",className:"font-bold text-xl",children:"Prime"}),(0,r.jsxs)("div",{className:"hidden md:flex items-center space-x-8",children:[x.map(e=>(0,r.jsx)(o(),{href:e.href,className:(0,i.cn)("transition-colors hover:text-primary",d===e.href?"text-primary font-medium":"text-muted-foreground"),children:e.label},e.href)),(0,r.jsxs)(c.z,{variant:"ghost",size:"icon",onClick:()=>b("dark"===v?"light":"dark"),children:[(0,r.jsx)(m,{className:"h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,r.jsx)(u,{className:"absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})]}),(0,r.jsx)("button",{className:"md:hidden",onClick:()=>s(!n),children:n?(0,r.jsx)(h,{className:"h-6 w-6"}):(0,r.jsx)(f,{className:"h-6 w-6"})})]}),n&&(0,r.jsx)("div",{className:"md:hidden py-4",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-4",children:[x.map(e=>(0,r.jsx)(o(),{href:e.href,className:(0,i.cn)("transition-colors hover:text-primary px-4 py-2",d===e.href?"text-primary font-medium":"text-muted-foreground"),onClick:()=>s(!1),children:e.label},e.href)),(0,r.jsxs)(c.z,{variant:"ghost",size:"icon",onClick:()=>b("dark"===v?"light":"dark"),className:"ml-4",children:[(0,r.jsx)(m,{className:"h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,r.jsx)(u,{className:"absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})]})})]})})}},4657:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return s}});var r=n(7437);n(2265);var a=n(1350);function s(e){let{children:t,...n}=e;return(0,r.jsx)(a.f,{...n,children:t})}},3023:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var r=n(7437),a=n(2265),s=n(4949),o=n(9213),l=n(9311);let i=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:n,variant:a,size:o,asChild:c=!1,...d}=e,m=c?s.g7:"button";return(0,r.jsx)(m,{className:(0,l.cn)(i({variant:a,size:o,className:n})),ref:t,...d})});c.displayName="Button"},9311:function(e,t,n){"use strict";n.d(t,{cn:function(){return s}});var r=n(7042),a=n(4769);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,r.W)(t))}},8877:function(){},3247:function(e){e.exports={style:{fontFamily:"'__Inter_6e13dc', '__Inter_Fallback_6e13dc'",fontStyle:"normal"},className:"__className_6e13dc"}},1396:function(e,t,n){e.exports=n(4724)},4033:function(e,t,n){e.exports=n(290)},1350:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return d}});var r=n(2265),a=["light","dark"],s="(prefers-color-scheme: dark)",o="undefined"==typeof window,l=r.createContext(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(l))?e:i},d=e=>r.useContext(l)?e.children:r.createElement(u,{...e}),m=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:i="theme",themes:c=m,defaultTheme:d=n?"system":"light",attribute:u="data-theme",value:b,children:x,nonce:g})=>{let[p,k]=r.useState(()=>f(i,d)),[w,j]=r.useState(()=>f(i)),N=b?Object.values(b):c,$=r.useCallback(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=v());let s=b?b[r]:r,l=t?y():null,i=document.documentElement;if("class"===u?(i.classList.remove(...N),s&&i.classList.add(s)):s?i.setAttribute(u,s):i.removeAttribute(u),o){let e=a.includes(d)?d:null,t=a.includes(r)?r:e;i.style.colorScheme=t}null==l||l()},[]),S=r.useCallback(e=>{let t="function"==typeof e?e(e):e;k(t);try{localStorage.setItem(i,t)}catch(e){}},[e]),C=r.useCallback(t=>{j(v(t)),"system"===p&&n&&!e&&$("system")},[p,e]);r.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),r.useEffect(()=>{let e=e=>{e.key===i&&S(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),r.useEffect(()=>{$(null!=e?e:p)},[e,p]);let E=r.useMemo(()=>({theme:p,setTheme:S,forcedTheme:e,resolvedTheme:"system"===p?w:p,themes:n?[...c,"system"]:c,systemTheme:n?w:void 0}),[p,S,e,w,n,c]);return r.createElement(l.Provider,{value:E},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:o,storageKey:i,themes:c,defaultTheme:d,attribute:u,value:b,children:x,attrs:N,nonce:g}),x)},h=r.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:o,enableColorScheme:l,defaultTheme:i,value:c,attrs:d,nonce:m})=>{let u="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=l?(a.includes(i)?i:null)?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,r=!0)=>{let s=c?c[e]:e,o=t?e+"|| ''":`'${s}'`,i="";return l&&r&&!t&&a.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?t||s?i+=`c.add(${o})`:i+="null":s&&(i+=`d[s](n,${o})`),i},v=e?`!function(){${h}${y(e)}}()`:o?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}${u?"":"else{"+y(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}else{${y(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:v}})}),f=(e,t)=>{let n;if(!o){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")}},function(e){e.O(0,[846,724,971,864,744],function(){return e(e.s=9126)}),_N_E=e.O()}]);