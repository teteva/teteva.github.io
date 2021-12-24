(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6317],{21370:function(a,b){"use strict";b.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},38204:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/customizing-spacing",function(){return c(97669)}])},97669:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return p}}),c(67294);var d=c(3905),e=c(41664),f=c(59533),g=c(5679),h=c(53339),i=c(74296),j=c(85893),k=c(55634),l=Object.keys(k.Z.theme.spacing).map(function(a){return{name:a,size:k.Z.theme.spacing[a],pixels:parseFloat(k.Z.theme.spacing[a])*(String(k.Z.theme.spacing[a]).endsWith("rem")?16:1)}}).sort(function(a,b){return a.pixels-b.pixels});function m(){return(0,j.jsx)("div",{className:"prose dark:prose-dark",children:(0,j.jsxs)("table",{children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"Name"}),(0,j.jsx)("th",{children:"Size"}),(0,j.jsx)("th",{children:"Pixels"}),(0,j.jsx)("th",{className:"hidden sm:table-cell",children:(0,j.jsx)("span",{className:"sr-only",children:"Preview"})})]})}),(0,j.jsx)("tbody",{children:l.map(function(a){var b=a.name,c=a.size,d=a.pixels;return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:b}),(0,j.jsx)("td",{children:c}),(0,j.jsxs)("td",{children:[d,"px"]}),(0,j.jsx)("td",{className:"hidden sm:table-cell",children:(0,j.jsx)("div",{className:"h-4 bg-cyan-400",style:{width:c}})})]},b)})})]})})}var n={Layout:h.DocumentationLayout,meta:{title:"Customizing Spacing",shortTitle:"Spacing",description:"Customizing the default spacing and sizing scale for your project."},slug:"customizing-spacing",tableOfContents:[{title:"Extending the default spacing scale",slug:"extending-the-default-spacing-scale",children:[]},{title:"Overriding the default spacing scale",slug:"overriding-the-default-spacing-scale",children:[]},{title:"Default spacing scale",slug:"default-spacing-scale",children:[]}]},o=i.X_;function p(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(o,Object.assign({},n,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Use the ",(0,d.kt)("inlineCode",{parentName:"p"},"spacing")," key in the ",(0,d.kt)("inlineCode",{parentName:"p"},"theme")," section of your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file to customize Tailwind’s ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"#default-spacing-scale"}),"default spacing/sizing scale"),"."),(0,d.kt)(f.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    spacing",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'1'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'8px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'2'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'12px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'3'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'16px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'4'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'24px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'5'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'32px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'6'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'48px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.kt)("p",null,"By default the spacing scale is inherited by the ",(0,d.kt)("inlineCode",{parentName:"p"},"padding"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"margin"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"height"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"maxHeight"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"gap"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"inset"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"space"),", and ",(0,d.kt)("inlineCode",{parentName:"p"},"translate")," core plugins."),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"extending-the-default-spacing-scale",nextElement:{type:"paragraph"}},"Extending the default spacing scale"),(0,d.kt)("p",null,"As described in the ",(0,d.kt)(e.default,{href:"/docs/theme#extending-the-default-theme",passHref:!0},(0,d.kt)("a",null,"theme documentation")),", if you’d like to extend the default spacing scale, you can do so using the ",(0,d.kt)("inlineCode",{parentName:"p"},"theme.extend.spacing")," section of your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),(0,d.kt)(f.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      spacing",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'13'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'3.25rem'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'15'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'3.75rem'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'128'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'32rem'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'144'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'36rem'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.kt)("p",null,"This will generate classes like ",(0,d.kt)("inlineCode",{parentName:"p"},"p-13"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"m-15"),", and ",(0,d.kt)("inlineCode",{parentName:"p"},"h-128")," in addition to all of Tailwind’s default spacing/sizing utilities."),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"overriding-the-default-spacing-scale",nextElement:{type:"paragraph"}},"Overriding the default spacing scale"),(0,d.kt)("p",null,"As described in the ",(0,d.kt)(e.default,{href:"/docs/theme#overriding-the-default-theme",passHref:!0},(0,d.kt)("a",null,"theme documentation")),", if you’d like to override the default spacing scale, you can do so using the ",(0,d.kt)("inlineCode",{parentName:"p"},"theme.spacing")," section of your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),(0,d.kt)(f.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    spacing",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      sm",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'8px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      md",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'12px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      lg",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'16px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      xl",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'24px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.kt)("p",null,"This will disable Tailwind’s default spacing scale and generate classes like ",(0,d.kt)("inlineCode",{parentName:"p"},"p-sm"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"m-md"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"w-lg"),", and ",(0,d.kt)("inlineCode",{parentName:"p"},"h-xl")," instead."),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"default-spacing-scale",nextElement:{type:"paragraph"}},"Default spacing scale"),(0,d.kt)("p",null,"By default, Tailwind includes a generous and comprehensive numeric spacing scale. The values are proportional, so ",(0,d.kt)("inlineCode",{parentName:"p"},"16")," is twice as much spacing as ",(0,d.kt)("inlineCode",{parentName:"p"},"8")," for example. One spacing unit is equal to ",(0,d.kt)("inlineCode",{parentName:"p"},"0.25rem"),", which translates to ",(0,d.kt)("inlineCode",{parentName:"p"},"4px")," by default in common browsers."),(0,d.kt)(m,{mdxType:"SpacingScale"}))}p.isMDXComponent=!0,p.layoutProps=n},59533:function(a,b,c){"use strict";c.d(b,{M:function(){return f}});var d=c(85893),e=c(6774);function f(a){var b=a.filename,c=a.children;return(0,d.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-gray-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,d.jsx)(e.n,{primary:{name:b},showTabMarkers:!1}),(0,d.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:c})]})}},6774:function(a,b,c){"use strict";c.d(b,{n:function(){return f}});var d=c(85893),e=c(86010);function f(a){var b=a.primary,c=a.secondary,f=a.showTabMarkers,g=a.side,h=a.translucent,i=a.children;return(0,d.jsxs)("div",{className:"flex text-gray-400 text-xs leading-6",children:[(0,d.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[b.name,(void 0===f||f)&&(b.saved?(0,d.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-gray-500 overflow-visible",children:(0,d.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,d.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,d.jsxs)("div",{className:(0,e.Z)("flex-auto flex items-center bg-gray-700/50 border border-gray-500/30","left"===g?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==h&&h&&"dark:bg-gray-800/50"),children:[(void 0===c?[]:c).map(function(a){var b=a.name,c=a.open,f=a.className;return(0,d.jsx)("div",{className:(0,e.Z)("px-4 py-1 border-r border-gray-200/5",f,{italic:!(void 0===c||c)}),children:b},b)}),i&&(0,d.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:i})]})]})}},53339:function(a,b,c){"use strict";c.r(b),c.d(b,{DocumentationLayout:function(){return l}});var d=c(85893),e=c(21744),f=c(9008),g=c(11163),h=c(21370),i=c(68224),j=c(54713);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a){var b=(0,g.useRouter)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.D,{suffix:"/"===b.pathname?void 0:"Tailwind CSS",children:a.layoutProps.meta.metaTitle||a.layoutProps.meta.title}),(0,d.jsxs)(f.default,{children:[(0,d.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,d.jsx)("meta",{name:"twitter:image",content:"https://tailwindcss.com".concat(h.Z)},"twitter:image")]}),(0,d.jsx)(e.C,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}({nav:j.u},a))]})}l.nav=j.u}},function(a){a.O(0,[9774,6401,5634,6852,2474,4713,2888,179],function(){return a(a.s=38204)}),_N_E=a.O()}])