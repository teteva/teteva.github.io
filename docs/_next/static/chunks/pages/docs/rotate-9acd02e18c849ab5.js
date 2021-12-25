(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4010],{8236:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/rotate",function(){return c(15898)}])},15898:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return u}}),c(67294);var d,e=c(3905),f=c(41664),g=c(59533),h=c(5679),i=c(83434),j=c(53339),k=c(74296),l=c(72621),m=c(86501),n=c(21136),o=c(93819),p=c(23234),q=j.L,r=(d="Heading",function(a){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,e.kt)("div",Object.assign({},a))}),s={Layout:q,classes:{utilities:{".rotate-0":{"--tw-rotate":"0deg",transform:"var(--tw-transform)"},".rotate-1":{"--tw-rotate":"1deg",transform:"var(--tw-transform)"},".rotate-2":{"--tw-rotate":"2deg",transform:"var(--tw-transform)"},".rotate-3":{"--tw-rotate":"3deg",transform:"var(--tw-transform)"},".rotate-6":{"--tw-rotate":"6deg",transform:"var(--tw-transform)"},".rotate-12":{"--tw-rotate":"12deg",transform:"var(--tw-transform)"},".rotate-45":{"--tw-rotate":"45deg",transform:"var(--tw-transform)"},".rotate-90":{"--tw-rotate":"90deg",transform:"var(--tw-transform)"},".rotate-180":{"--tw-rotate":"180deg",transform:"var(--tw-transform)"}},transformProperties:function(a){var b=a.properties;return{transform:"rotate(".concat(b["--tw-rotate"],")")}}},meta:{title:"Rotate",description:"Utilities for rotating elements with transform."},slug:"rotate",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Rotating an element",slug:"rotating-an-element",children:[]},{title:"Using negative values",slug:"using-negative-values",children:[]},{title:"Removing transforms",slug:"removing-transforms",children:[]},{title:"Hardware acceleration",slug:"hardware-acceleration",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},t=k.X_;function u(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,e.kt)(t,Object.assign({},s,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)(h.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,e.kt)(h.X,{level:3,id:"rotating-an-element",nextElement:{type:"paragraph"}},"Rotating an element"),(0,e.kt)("p",null,"Use the ",(0,e.kt)("inlineCode",{parentName:"p"},"rotate-{angle}")," utilities to rotate an element."),(0,e.kt)(i.e,{p:"none",containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"flex sm:block overflow-scroll sm:overflow-visible scroll-p-8\">\n  <div class=\"flex items-center justify-around gap-12 sm:gap-4 font-mono font-bold p-8 shrink-0\">\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-9 dark:text-gray-400\">rotate-0</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 rotate-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-9 dark:text-gray-400\">rotate-45</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 rotate-45\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-9 dark:text-gray-400\">rotate-90</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 rotate-90\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-9 dark:text-gray-400\">rotate-180</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 rotate-180\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n"}),(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"rotate-0")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"rotate-45")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"rotate-90")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"rotate-180")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,e.kt)(h.X,{level:3,id:"using-negative-values",nextElement:{type:"paragraph"}},"Using negative values"),(0,e.kt)("p",null,"To use a negative rotate value, prefix the class name with a dash to convert it to a negative value."),(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"-rotate-45")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,e.kt)(h.X,{level:3,id:"removing-transforms",nextElement:{type:"jsx"}},"Removing transforms"),(0,e.kt)(p.R,{defaultClass:"scale-75 translate-x-4 skew-y-3",mdxType:"RemovingTransforms"}),(0,e.kt)(h.X,{level:3,id:"hardware-acceleration",nextElement:{type:"jsx"}},"Hardware acceleration"),(0,e.kt)(n.m,{defaultClass:"rotate-45",mdxType:"HardwareAcceleration"}),(0,e.kt)("hr",null),(0,e.kt)(r,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,e.kt)(r,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,e.kt)(o.k,{featuredClass:"rotate-45",mdxType:"HoverFocusAndOtherStates"}),(0,e.kt)(r,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,e.kt)(m.p,{featuredClass:"rotate-45",mdxType:"BreakpointsAndMediaQueries"}),(0,e.kt)("hr",null),(0,e.kt)(h.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,e.kt)(h.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,e.kt)("p",null,"By default, Tailwind includes a handful of general purpose ",(0,e.kt)("inlineCode",{parentName:"p"},"rotate")," utilities. You can customize these values by editing ",(0,e.kt)("inlineCode",{parentName:"p"},"theme.rotate")," or ",(0,e.kt)("inlineCode",{parentName:"p"},"theme.extend.rotate")," in your ",(0,e.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,e.kt)(g.M,{filename:"tailwind.config.js"},(0,e.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  theme"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    extend"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      rotate"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'17'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'17deg'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))))),(0,e.kt)("p",null,"Learn more about customizing the default theme in the ",(0,e.kt)(f.default,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,e.kt)("a",null,"theme customization"))," documentation."),(0,e.kt)(h.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,e.kt)(l.k,{property:"rotate",featuredClass:"rotate-[17deg]",mdxType:"ArbitraryValues"}))}u.isMDXComponent=!0,u.layoutProps=s}},function(a){a.O(0,[3430,6401,4756,6852,4713,2474,4726,347,9774,2888,179],function(){return a(a.s=8236)}),_N_E=a.O()}])