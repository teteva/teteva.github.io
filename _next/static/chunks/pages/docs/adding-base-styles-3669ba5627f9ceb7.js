(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{21370:function(a,b){"use strict";b.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},38886:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/adding-base-styles",function(){return c(29621)}])},29621:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return l}}),c(67294);var d=c(3905),e=c(41664),f=c(59533),g=c(5679),h=c(53339),i=c(74296),j={Layout:h.DocumentationLayout,meta:{title:"Adding Base Styles",description:"Best practices for adding your own global base styles on top of Tailwind."},slug:"adding-base-styles",tableOfContents:[{title:"Using classes in your HTML",slug:"using-classes-in-your-html",children:[]},{title:"Using CSS",slug:"using-css",children:[{title:"@font-face rules",slug:"font-face-rules",children:[]}]},{title:"Using a plugin",slug:"using-a-plugin",children:[]}]},k=i.X_;function l(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(k,Object.assign({},j,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Base (or global) styles are the styles at the beginning of a stylesheet that set useful defaults for basic HTML elements like ",(0,d.kt)("inlineCode",{parentName:"p"},"<a>")," tags, headings, etc. or apply opinionated resets like the popular ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://www.paulirish.com/2012/box-sizing-border-box-ftw/"}),"box-sizing reset"),"."),(0,d.kt)("p",null,"Tailwind includes a useful set of base styles out of the box that we call ",(0,d.kt)(e.default,{href:"/docs/preflight",passHref:!0},(0,d.kt)("a",null,"Preflight")),", which is really just ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/sindresorhus/modern-normalize"}),"modern-normalize")," plus a thin layer of additional more opinionated styles."),(0,d.kt)("p",null,"Preflight is a great starting point for most projects, but if you’d ever like to add your own additional base styles, here are some recommendations for doing it idiomatically."),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"using-classes-in-your-html",nextElement:{type:"paragraph"}},"Using classes in your HTML"),(0,d.kt)("p",null,"If you just want to apply some global styling to the ",(0,d.kt)("inlineCode",{parentName:"p"},"html")," or ",(0,d.kt)("inlineCode",{parentName:"p"},"body")," elements, consider just adding existing classes to those elements in your HTML instead of writing new CSS:"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token doctype"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<!"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token doctype-tag"}),"doctype")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token name"}),"html"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"html")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"lang"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"en",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"text-gray-900 leading-tight",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"body")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"min-h-screen bg-gray-100",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"body"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"html"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"using-css",nextElement:{type:"paragraph"}},"Using CSS"),(0,d.kt)("p",null,"If you want to apply some base styles to specific elements, the easiest way is to simply add them in your CSS."),(0,d.kt)("pre",Object.assign({},{className:"language-css"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-css"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," base",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," components",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@layer")," base")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token selector"}),"h1")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule atapply"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@apply")," text-2",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token unit"}),"xl"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token selector"}),"h2")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule atapply"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@apply")," text-xl",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))),(0,d.kt)("p",null,"By using the ",(0,d.kt)("inlineCode",{parentName:"p"},"@layer")," directive, Tailwind will automatically move those styles to the same place as ",(0,d.kt)("inlineCode",{parentName:"p"},"@tailwind base")," to avoid unintended specificity issues."),(0,d.kt)("p",null,"Using the ",(0,d.kt)("inlineCode",{parentName:"p"},"@layer")," directive will also instruct Tailwind to consider those styles for purging when purging the ",(0,d.kt)("inlineCode",{parentName:"p"},"base")," layer. Read our ",(0,d.kt)(e.default,{href:"/docs/optimizing-for-production",passHref:!0},(0,d.kt)("a",null,"documentation on optimizing for production"))," for more details."),(0,d.kt)("p",null,"It’s a good idea to use ",(0,d.kt)(e.default,{href:"/docs/functions-and-directives#apply",passHref:!0},(0,d.kt)("a",null,"@apply"))," or ",(0,d.kt)(e.default,{href:"/docs/functions-and-directives#theme",passHref:!0},(0,d.kt)("a",null,"theme()"))," to define these styles to avoid accidentally deviating from your design system."),(0,d.kt)(g.X,{level:3,id:"font-face-rules",nextElement:{type:"paragraph"}},"@font-face rules"),(0,d.kt)("p",null,"You can use the same approach to add your ",(0,d.kt)("inlineCode",{parentName:"p"},"@font-face")," rules for any custom fonts you’re using:"),(0,d.kt)("pre",Object.assign({},{className:"language-css"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-css"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," base",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," components",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@layer")," base")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@font-face"))," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"font-family"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," Proxima Nova",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"font-weight"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"400"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"src"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token url"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token function"}),"url"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),"/fonts/proxima-nova/400-regular.woff",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"))," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"format"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"\"woff\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@font-face"))," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"font-family"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," Proxima Nova",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"font-weight"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"500"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"src"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token url"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token function"}),"url"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),"/fonts/proxima-nova/500-medium.woff",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"))," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"format"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"\"woff\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"using-a-plugin",nextElement:{type:"paragraph"}},"Using a plugin"),(0,d.kt)("p",null,"You can also add base styles by ",(0,d.kt)(e.default,{href:"/docs/plugins#adding-base-styles",passHref:!0},(0,d.kt)("a",null,"writing a plugin"))," and using the ",(0,d.kt)("inlineCode",{parentName:"p"},"addBase")," function:"),(0,d.kt)(f.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," plugin ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'tailwindcss/plugin'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n\nmodule",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  plugins",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"plugin"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token parameter"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," addBase",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," theme ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"addBase"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'h1'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," fontSize",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"theme"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'fontSize.2xl'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'h2'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," fontSize",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"theme"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'fontSize.xl'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'h3'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," fontSize",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"theme"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'fontSize.lg'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.kt)("p",null,"Any styles added using ",(0,d.kt)("inlineCode",{parentName:"p"},"addBase")," will be inserted into the ",(0,d.kt)("inlineCode",{parentName:"p"},"base")," layer alongside Tailwind’s other base styles."))}l.isMDXComponent=!0,l.layoutProps=j},59533:function(a,b,c){"use strict";c.d(b,{M:function(){return f}});var d=c(85893),e=c(6774);function f(a){var b=a.filename,c=a.children;return(0,d.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-gray-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,d.jsx)(e.n,{primary:{name:b},showTabMarkers:!1}),(0,d.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:c})]})}},6774:function(a,b,c){"use strict";c.d(b,{n:function(){return f}});var d=c(85893),e=c(86010);function f(a){var b=a.primary,c=a.secondary,f=a.showTabMarkers,g=a.side,h=a.translucent,i=a.children;return(0,d.jsxs)("div",{className:"flex text-gray-400 text-xs leading-6",children:[(0,d.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[b.name,(void 0===f||f)&&(b.saved?(0,d.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-gray-500 overflow-visible",children:(0,d.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,d.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,d.jsxs)("div",{className:(0,e.Z)("flex-auto flex items-center bg-gray-700/50 border border-gray-500/30","left"===g?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==h&&h&&"dark:bg-gray-800/50"),children:[(void 0===c?[]:c).map(function(a){var b=a.name,c=a.open,f=a.className;return(0,d.jsx)("div",{className:(0,e.Z)("px-4 py-1 border-r border-gray-200/5",f,{italic:!(void 0===c||c)}),children:b},b)}),i&&(0,d.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:i})]})]})}},53339:function(a,b,c){"use strict";c.r(b),c.d(b,{DocumentationLayout:function(){return l}});var d=c(85893),e=c(21744),f=c(9008),g=c(11163),h=c(21370),i=c(68224),j=c(54713);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a){var b=(0,g.useRouter)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.D,{suffix:"/"===b.pathname?void 0:"Tailwind CSS",children:a.layoutProps.meta.metaTitle||a.layoutProps.meta.title}),(0,d.jsxs)(f.default,{children:[(0,d.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,d.jsx)("meta",{name:"twitter:image",content:"https://tailwindcss.com".concat(h.Z)},"twitter:image")]}),(0,d.jsx)(e.C,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}({nav:j.u},a))]})}l.nav=j.u}},function(a){a.O(0,[9774,6401,6852,4713,2474,2888,179],function(){return a(a.s=38886)}),_N_E=a.O()}])