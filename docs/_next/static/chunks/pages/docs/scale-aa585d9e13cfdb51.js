(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[420],{71407:function(a){a.exports=function(a,b){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!=typeof b)throw new Error("expected a function for second argument");for(var c={},d=0;d<a.length;d++){var e=a[d],f=b(e),g=c[f];Array.isArray(g)?c[f].push(e):c[f]=[e]}return c}},77707:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/scale",function(){return c(89398)}])},89398:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return w}}),c(67294);var d,e=c(3905),f=c(41664),g=c(59533),h=c(5679),i=c(83434),j=c(53339),k=c(74296),l=c(83629),m=c(72621),n=c(86501),o=c(21136),p=c(93819),q=c(23234),r=j.L,s={utilities:{".scale-0":{"--tw-scale-x":"0","--tw-scale-y":"0",transform:"var(--tw-transform)"},".scale-50":{"--tw-scale-x":".5","--tw-scale-y":".5",transform:"var(--tw-transform)"},".scale-75":{"--tw-scale-x":".75","--tw-scale-y":".75",transform:"var(--tw-transform)"},".scale-90":{"--tw-scale-x":".9","--tw-scale-y":".9",transform:"var(--tw-transform)"},".scale-95":{"--tw-scale-x":".95","--tw-scale-y":".95",transform:"var(--tw-transform)"},".scale-100":{"--tw-scale-x":"1","--tw-scale-y":"1",transform:"var(--tw-transform)"},".scale-105":{"--tw-scale-x":"1.05","--tw-scale-y":"1.05",transform:"var(--tw-transform)"},".scale-110":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"var(--tw-transform)"},".scale-125":{"--tw-scale-x":"1.25","--tw-scale-y":"1.25",transform:"var(--tw-transform)"},".scale-150":{"--tw-scale-x":"1.5","--tw-scale-y":"1.5",transform:"var(--tw-transform)"},".scale-x-0":{"--tw-scale-x":"0",transform:"var(--tw-transform)"},".scale-x-50":{"--tw-scale-x":".5",transform:"var(--tw-transform)"},".scale-x-75":{"--tw-scale-x":".75",transform:"var(--tw-transform)"},".scale-x-90":{"--tw-scale-x":".9",transform:"var(--tw-transform)"},".scale-x-95":{"--tw-scale-x":".95",transform:"var(--tw-transform)"},".scale-x-100":{"--tw-scale-x":"1",transform:"var(--tw-transform)"},".scale-x-105":{"--tw-scale-x":"1.05",transform:"var(--tw-transform)"},".scale-x-110":{"--tw-scale-x":"1.1",transform:"var(--tw-transform)"},".scale-x-125":{"--tw-scale-x":"1.25",transform:"var(--tw-transform)"},".scale-x-150":{"--tw-scale-x":"1.5",transform:"var(--tw-transform)"},".scale-y-0":{"--tw-scale-y":"0",transform:"var(--tw-transform)"},".scale-y-50":{"--tw-scale-y":".5",transform:"var(--tw-transform)"},".scale-y-75":{"--tw-scale-y":".75",transform:"var(--tw-transform)"},".scale-y-90":{"--tw-scale-y":".9",transform:"var(--tw-transform)"},".scale-y-95":{"--tw-scale-y":".95",transform:"var(--tw-transform)"},".scale-y-100":{"--tw-scale-y":"1",transform:"var(--tw-transform)"},".scale-y-105":{"--tw-scale-y":"1.05",transform:"var(--tw-transform)"},".scale-y-110":{"--tw-scale-y":"1.1",transform:"var(--tw-transform)"},".scale-y-125":{"--tw-scale-y":"1.25",transform:"var(--tw-transform)"},".scale-y-150":{"--tw-scale-y":"1.5",transform:"var(--tw-transform)"}},sort:l.nR,transformProperties:function(a){var b=a.properties,c=b["--tw-scale-x"],d=b["--tw-scale-y"];return{transform:c&&d?"scale(".concat(c,")"):c?"scaleX(".concat(c,")"):"scaleY(".concat(d,")")}}},t=(d="Heading",function(a){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,e.kt)("div",Object.assign({},a))}),u={Layout:r,classes:s,meta:{title:"Scale",description:"Utilities for scaling elements with transform."},slug:"scale",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Scaling an element",slug:"scaling-an-element",children:[]},{title:"Using negative values",slug:"using-negative-values",children:[]},{title:"Removing transforms",slug:"removing-transforms",children:[]},{title:"Hardware acceleration",slug:"hardware-acceleration",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},v=k.X_;function w(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,e.kt)(v,Object.assign({},u,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)(h.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,e.kt)(h.X,{level:3,id:"scaling-an-element",nextElement:{type:"paragraph"}},"Scaling an element"),(0,e.kt)("p",null,"Use the ",(0,e.kt)("inlineCode",{parentName:"p"},"scale-{percentage}"),", ",(0,e.kt)("inlineCode",{parentName:"p"},"scale-x-{percentage}"),", and ",(0,e.kt)("inlineCode",{parentName:"p"},"scale-y-{percentage}")," utilities to scale an element."),(0,e.kt)(i.e,{p:"none",containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"flex sm:block overflow-scroll sm:overflow-visible scroll-p-8\">\n  <div class=\"flex items-center justify-around gap-12 sm:gap-4 font-mono font-bold p-8 px-12 sm:px-8 pb-10 shrink-0\">\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-9 dark:text-gray-400\">scale-75</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 scale-75\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-9 dark:text-gray-400\">scale-100</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 scale-100\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-9 dark:text-gray-400\">scale-125</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 scale-125\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n"}),(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"scale-75")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"scale-100")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"scale-125")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,e.kt)(h.X,{level:3,id:"using-negative-values",nextElement:{type:"paragraph"}},"Using negative values"),(0,e.kt)("p",null,"To use a negative scale value, prefix the class name with a dash to convert it to a negative value."),(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"-scale-50"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,e.kt)(h.X,{level:3,id:"removing-transforms",nextElement:{type:"jsx"}},"Removing transforms"),(0,e.kt)(q.R,{defaultClass:"scale-75 translate-x-4 skew-y-3",mdxType:"RemovingTransforms"}),(0,e.kt)(h.X,{level:3,id:"hardware-acceleration",nextElement:{type:"jsx"}},"Hardware acceleration"),(0,e.kt)(o.m,{defaultClass:"scale-150",mdxType:"HardwareAcceleration"}),(0,e.kt)("hr",null),(0,e.kt)(t,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,e.kt)(t,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,e.kt)(p.k,{featuredClass:"scale-125",mdxType:"HoverFocusAndOtherStates"}),(0,e.kt)(t,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,e.kt)(n.p,{featuredClass:"scale-125",mdxType:"BreakpointsAndMediaQueries"}),(0,e.kt)("hr",null),(0,e.kt)(h.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,e.kt)(h.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,e.kt)("p",null,"By default, Tailwind includes a handful of general purpose ",(0,e.kt)("inlineCode",{parentName:"p"},"scale")," utilities. You can customize these values by editing ",(0,e.kt)("inlineCode",{parentName:"p"},"theme.scale")," or ",(0,e.kt)("inlineCode",{parentName:"p"},"theme.extend.scale")," in your ",(0,e.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,e.kt)(g.M,{filename:"tailwind.config.js"},(0,e.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  theme"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    extend"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      scale"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'175'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'1.75'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))))),(0,e.kt)("p",null,"Learn more about customizing the default theme in the ",(0,e.kt)(f.default,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,e.kt)("a",null,"theme customization"))," documentation."),(0,e.kt)(h.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,e.kt)(m.k,{property:"scale",featuredClass:"scale-[1.7]",mdxType:"ArbitraryValues"}))}w.isMDXComponent=!0,w.layoutProps=u},83629:function(a,b,c){"use strict";c.d(b,{nR:function(){return f},Pg:function(){return g}});var d=c(71407);function e(a){return(function(a){if(Array.isArray(a)){for(var b=0,c=new Array(a.length);b<a.length;b++)c[b]=a[b];return c}})(a)||(function(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)})(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance")})()}function f(a){return e(a).sort(function(a,b){a=a.endsWith("-px")?a.replace(/-px$/,"-0.25"):a,b=b.endsWith("-px")?b.replace(/-px$/,"-0.25"):b;var c=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);c=null===c?NaN:parseFloat(c[1]);var d=b.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(d=null===d?NaN:parseFloat(d[1]),isNaN(c)&&isNaN(d))?0:isNaN(c)?1:isNaN(d)?-1:c-d})}function g(a){return e(a).sort(function(a,b){a=a.endsWith("-px")?a.replace(/-px$/,"-0.25"):a,b=b.endsWith("-px")?b.replace(/-px$/,"-0.25"):b;var c=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);c=null===c?NaN:parseFloat(c[1]);var d=b.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(d=null===d?NaN:parseFloat(d[1]),isNaN(c)&&isNaN(d))?0:isNaN(c)?-1:isNaN(d)?1:c-d})}c.n(d)}},function(a){a.O(0,[3430,6401,4756,6852,4713,2474,4726,347,9774,2888,179],function(){return a(a.s=77707)}),_N_E=a.O()}])