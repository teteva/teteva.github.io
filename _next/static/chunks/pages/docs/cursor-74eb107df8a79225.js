(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8678],{62508:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/cursor",function(){return c(42682)}])},42682:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return r}}),c(67294);var d=c(3905),e=c(41664),f=c(59533),g=c(5679),h=c(83434),i=c(53339),j=c(74296),k=c(45669),l=c(9460),m=c(14188),n=i.DocumentationLayout,o=function(a){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))},p={Layout:n,classes:{utilities:{".cursor-auto":{cursor:"auto"},".cursor-default":{cursor:"default"},".cursor-pointer":{cursor:"pointer"},".cursor-wait":{cursor:"wait"},".cursor-text":{cursor:"text"},".cursor-move":{cursor:"move"},".cursor-help":{cursor:"help"},".cursor-not-allowed":{cursor:"not-allowed"},".cursor-none":{cursor:"none"},".cursor-context-menu":{cursor:"context-menu"},".cursor-progress":{cursor:"progress"},".cursor-cell":{cursor:"cell"},".cursor-crosshair":{cursor:"crosshair"},".cursor-vertical-text":{cursor:"vertical-text"},".cursor-alias":{cursor:"alias"},".cursor-copy":{cursor:"copy"},".cursor-no-drop":{cursor:"no-drop"},".cursor-grab":{cursor:"grab"},".cursor-grabbing":{cursor:"grabbing"},".cursor-all-scroll":{cursor:"all-scroll"},".cursor-col-resize":{cursor:"col-resize"},".cursor-row-resize":{cursor:"row-resize"},".cursor-n-resize":{cursor:"n-resize"},".cursor-e-resize":{cursor:"e-resize"},".cursor-s-resize":{cursor:"s-resize"},".cursor-w-resize":{cursor:"w-resize"},".cursor-ne-resize":{cursor:"ne-resize"},".cursor-nw-resize":{cursor:"nw-resize"},".cursor-se-resize":{cursor:"se-resize"},".cursor-sw-resize":{cursor:"sw-resize"},".cursor-ew-resize":{cursor:"ew-resize"},".cursor-ns-resize":{cursor:"ns-resize"},".cursor-nesw-resize":{cursor:"nesw-resize"},".cursor-nwse-resize":{cursor:"nwse-resize"},".cursor-zoom-in":{cursor:"zoom-in"},".cursor-zoom-out":{cursor:"zoom-out"}},rowStyle:function(a){return a.css},preview:function(a,b){var c=b.className,e=b.utility;return(0,d.kt)("td",{className:"align-middle ".concat(c)},(0,d.kt)("img",{className:"w-6 h-6 mx-auto drop-shadow",src:"/img/cursors/".concat(e.substr(1),".svg")}))}},meta:{title:"Cursor",description:"Utilities for controlling the cursor style when hovering over an element."},slug:"cursor",tableOfContents:[{title:"Basic Usage",slug:"basic-usage",children:[{title:"Setting the cursor style",slug:"setting-the-cursor-style",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},q=j.X_;function r(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(q,Object.assign({},p,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)(g.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic Usage"),(0,d.kt)(g.X,{level:3,id:"setting-the-cursor-style",nextElement:{type:"paragraph"}},"Setting the cursor style"),(0,d.kt)("p",null,"Use the ",(0,d.kt)("inlineCode",{parentName:"p"},"cursor-{style}")," to control which cursor is displayed when hovering over an element."),(0,d.kt)(h.e,{hint:"Hover over each button to see the cursor change",containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-around\">\n    <button type=\"button\" class=\"w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer\" tabindex=\"-1\">\n      Submit\n    </button>\n    <button type=\"button\" class=\"w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-progress\" tabindex=\"-1\">\n      Saving...\n    </button>\n    <button type=\"button\" class=\"w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-not-allowed\" tabindex=\"-1\" disabled>\n      Confirm\n    </button>\n  </div>\n"}),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"type"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"button",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"cursor-pointer")," ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Submit\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"type"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"button",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"cursor-progress")," ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Saving...\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"type"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"button",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"disabled")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"cursor-not-allowed")," ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Confirm\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("hr",null),(0,d.kt)(o,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,d.kt)(o,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,d.kt)(m.k,{defaultClass:"cursor-not-allowed",featuredClass:"cursor-auto",variant:"focus",mdxType:"HoverFocusAndOtherStates"}),(0,d.kt)(o,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,d.kt)(l.p,{defaultClass:"cursor-not-allowed",featuredClass:"cursor-auto",mdxType:"BreakpointsAndMediaQueries"}),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,d.kt)(g.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,d.kt)("p",null,"By default, Tailwind includes ",(0,d.kt)("inlineCode",{parentName:"p"},"cursor")," utilities for many built in options. You can customize these values by editing ",(0,d.kt)("inlineCode",{parentName:"p"},"theme.cursor")," or ",(0,d.kt)("inlineCode",{parentName:"p"},"theme.extend.cursor")," in your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,d.kt)(f.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  theme"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    extend"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      cursor"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'fancy'"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'url(hand.cur), pointer'"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))))),(0,d.kt)("p",null,"Learn more about customizing the default theme in the ",(0,d.kt)(e.default,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,d.kt)("a",null,"theme customization"))," documentation."),(0,d.kt)(g.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,d.kt)(k.k,{property:"cursor",featuredClass:"cursor-[url(hand.cur),_pointer]",mdxType:"ArbitraryValues"}))}r.isMDXComponent=!0,r.layoutProps=p},59533:function(a,b,c){"use strict";c.d(b,{M:function(){return f}});var d=c(85893),e=c(6774);function f(a){var b=a.filename,c=a.children;return(0,d.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-gray-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,d.jsx)(e.n,{primary:{name:b},showTabMarkers:!1}),(0,d.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:c})]})}},83434:function(a,b,c){"use strict";c.d(b,{e:function(){return l}});var d=c(85893),e=c(86010),f=c(50582),g=c(67294);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){h(a,b,c[b])})}return a}var j={none:"",md:"p-8"};function k(a){var b=a.as,c=a.style,f=a.padding,g=a.p,h=a.className,k=a.containerClassName,l=a.html,m=a.children,n=a.hint,o=a.lightOnly,p=void 0!==o&&o,q=null!=f?f:void 0===g?"md":g,r=j[q];if(void 0===r)throw Error("Invalid padding value: ".concat(JSON.stringify(q)));return(0,d.jsxs)("div",{className:k,children:[void 0!==n&&(0,d.jsxs)("div",{className:"not-prose mb-4 flex space-x-2",children:[(0,d.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,d.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-gray-400 dark:stroke-gray-300"}),(0,d.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-gray-400 dark:stroke-sky-400"})]}),(0,d.jsx)("p",{className:"text-gray-700 text-sm font-medium dark:text-gray-200",children:n})]}),(0,d.jsxs)(void 0===b?"div":b,{style:c,className:(0,e.Z)("not-prose relative bg-gray-50 rounded-xl overflow-hidden",!p&&"dark:bg-gray-800/25"),children:[(0,d.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,e.Z)("absolute inset-0 bg-grid-gray-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!p&&"dark:bg-grid-gray-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,d.jsx)("div",i({className:(0,e.Z)("relative rounded-xl overflow-auto",r,h)},l?{dangerouslySetInnerHTML:{__html:l}}:{children:m})),(0,d.jsx)("div",{className:(0,e.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!p&&"dark:border-white/5")})]})]})}function l(a){return a.resizable?(0,d.jsx)(m,i({},a)):(0,d.jsx)(k,i({},a))}function m(a){var b=(0,g.useRef)(),c=(0,f.c$)(0),e=(0,g.useRef)(),h=(0,g.useRef)();return(0,g.useEffect)(function(){var a=new window.ResizeObserver(function(){c.set(0)});return a.observe(b.current),function(){a.disconnect()}},[]),(0,g.useEffect)(function(){h.current.onselectstart=function(){return!1}},[]),(0,d.jsxs)("div",{ref:b,className:"relative",children:[(0,d.jsx)(k,i({as:f.ww.div,style:{marginRight:(0,f.Hm)(c,function(a){return-a})}},a)),(0,d.jsx)("div",{ref:e,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,d.jsx)(f.ww.div,{ref:h,drag:"x",_dragX:c,dragMomentum:!1,dragElastic:0,dragConstraints:e,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:c},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,d.jsx)("div",{className:"w-1.5 h-8 bg-gray-500/60 rounded-full"})})})]})}},6774:function(a,b,c){"use strict";c.d(b,{n:function(){return f}});var d=c(85893),e=c(86010);function f(a){var b=a.primary,c=a.secondary,f=a.showTabMarkers,g=a.side,h=a.translucent,i=a.children;return(0,d.jsxs)("div",{className:"flex text-gray-400 text-xs leading-6",children:[(0,d.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[b.name,(void 0===f||f)&&(b.saved?(0,d.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-gray-500 overflow-visible",children:(0,d.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,d.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,d.jsxs)("div",{className:(0,e.Z)("flex-auto flex items-center bg-gray-700/50 border border-gray-500/30","left"===g?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==h&&h&&"dark:bg-gray-800/50"),children:[(void 0===c?[]:c).map(function(a){var b=a.name,c=a.open,f=a.className;return(0,d.jsx)("div",{className:(0,e.Z)("px-4 py-1 border-r border-gray-200/5",f,{italic:!(void 0===c||c)}),children:b},b)}),i&&(0,d.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:i})]})]})}}},function(a){a.O(0,[9774,3430,6401,4756,6852,2474,4713,4337,2888,179],function(){return a(a.s=62508)}),_N_E=a.O()}])