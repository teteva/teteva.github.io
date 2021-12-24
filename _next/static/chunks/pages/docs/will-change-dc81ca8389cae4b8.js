(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6407],{59350:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/will-change",function(){return c(92459)}])},92459:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return q}}),c(67294);var d=c(3905),e=c(41664),f=c(59533),g=c(5679),h=c(53339),i=c(74296),j=c(80293),k=c(5903),l=c(66059),m=h.DocumentationLayout,n=function(a){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))},o={Layout:m,classes:{utilities:{".will-change-auto":{"will-change":"auto"},".will-change-scroll":{"will-change":"scroll-position"},".will-change-contents":{"will-change":"contents"},".will-change-transform":{"will-change":"transform"}}},meta:{title:"Will Change",description:"Utilities for optimizing upcoming animations of elements that are expected to change."},slug:"will-change",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Optimizing with will change",slug:"optimizing-with-will-change",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},p=i.X_;function q(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(p,Object.assign({},o,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)(g.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,d.kt)(g.X,{level:3,id:"optimizing-with-will-change",nextElement:{type:"paragraph"}},"Optimizing with will change"),(0,d.kt)("p",null,"Use ",(0,d.kt)("inlineCode",{parentName:"p"},"will-change-scroll"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"will-change-contents")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"will-change-transform")," to optimize an element that’s expected to change in the near future by instructing the browser to prepare the necessary animation before it actually begins."),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"overflow-auto ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"will-change-scroll"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"It’s recommended that you apply these utilities just before an element changes, and then remove it shortly after it finishes using ",(0,d.kt)("inlineCode",{parentName:"p"},"will-change-auto"),"."),(0,d.kt)("p",null,"The will-change property is intended to be used as a last resort when dealing with ",(0,d.kt)("strong",{parentName:"p"},"known performance problems"),". Avoid using these utilities too much, or simply in anticipation of performance issues, as it could actually cause the page to be less performant."),(0,d.kt)("hr",null),(0,d.kt)(n,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,d.kt)(n,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,d.kt)(l.k,{defaultClass:"will-change-auto",featuredClass:"will-change-scroll",mdxType:"HoverFocusAndOtherStates"}),(0,d.kt)(n,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,d.kt)(k.p,{defaultClass:"will-change-auto",featuredClass:"will-change-scroll",mdxType:"BreakpointsAndMediaQueries"}),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,d.kt)(g.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,d.kt)("p",null,"By default, Tailwind provides four ",(0,d.kt)("inlineCode",{parentName:"p"},"will-change")," utilities. You can customize these values by editing ",(0,d.kt)("inlineCode",{parentName:"p"},"theme.willChange")," or ",(0,d.kt)("inlineCode",{parentName:"p"},"theme.extend.willChange")," in your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,d.kt)(f.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  theme"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    extend"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      willChange"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        left"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"-"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"top"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'left, top'"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))))),(0,d.kt)("p",null,"Learn more about customizing the default theme in the ",(0,d.kt)(e.default,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,d.kt)("a",null,"theme customization"))," documentation."),(0,d.kt)(g.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,d.kt)(j.k,{property:"will-change",featuredClass:"will-change-[top,left]",mdxType:"ArbitraryValues"}))}q.isMDXComponent=!0,q.layoutProps=o},59533:function(a,b,c){"use strict";c.d(b,{M:function(){return f}});var d=c(85893),e=c(6774);function f(a){var b=a.filename,c=a.children;return(0,d.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-gray-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,d.jsx)(e.n,{primary:{name:b},showTabMarkers:!1}),(0,d.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:c})]})}},6774:function(a,b,c){"use strict";c.d(b,{n:function(){return f}});var d=c(85893),e=c(86010);function f(a){var b=a.primary,c=a.secondary,f=a.showTabMarkers,g=a.side,h=a.translucent,i=a.children;return(0,d.jsxs)("div",{className:"flex text-gray-400 text-xs leading-6",children:[(0,d.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[b.name,(void 0===f||f)&&(b.saved?(0,d.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-gray-500 overflow-visible",children:(0,d.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,d.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,d.jsxs)("div",{className:(0,e.Z)("flex-auto flex items-center bg-gray-700/50 border border-gray-500/30","left"===g?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==h&&h&&"dark:bg-gray-800/50"),children:[(void 0===c?[]:c).map(function(a){var b=a.name,c=a.open,f=a.className;return(0,d.jsx)("div",{className:(0,e.Z)("px-4 py-1 border-r border-gray-200/5",f,{italic:!(void 0===c||c)}),children:b},b)}),i&&(0,d.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:i})]})]})}}},function(a){a.O(0,[9774,6401,6852,2474,4713,8497,2888,179],function(){return a(a.s=59350)}),_N_E=a.O()}])