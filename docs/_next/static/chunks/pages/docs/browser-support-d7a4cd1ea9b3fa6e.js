(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5410],{57874:function(a,b){"use strict";b.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},53815:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/browser-support",function(){return c(58373)}])},58373:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return j}}),c(67294);var d=c(3905);c(41664);var e=c(5679),f=c(53339),g=c(74296),h={Layout:f.L,meta:{title:"Browser Support",description:"Understanding which browsers Tailwind supports and how to manage vendor prefixes."},slug:"browser-support",tableOfContents:[{title:"Vendor Prefixes",slug:"vendor-prefixes",children:[]}]},i=g.X_;function j(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(i,Object.assign({},h,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"In general, Tailwind CSS v3.0 is designed for and tested on the latest stable versions of Chrome, Firefox, Edge, and Safari. It does not support any version of IE, including IE 11."),(0,d.kt)("p",null,"While most of the features in Tailwind CSS will work in all modern browsers, Tailwind also includes APIs for several bleeding-edge features that aren’t yet supported by all browsers, for example the ",(0,d.kt)("inlineCode",{parentName:"p"},":focus-visible")," pseudo-class and ",(0,d.kt)("inlineCode",{parentName:"p"},"backdrop-filter")," utilities."),(0,d.kt)("p",null,"Since Tailwind is such a low-level framework, it’s easy to avoid these features if you can’t use them by simply not using the utility or modifier that’s not supported, much like how you just wouldn’t use those CSS features in your CSS."),(0,d.kt)("p",null,"The ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://caniuse.com/?search=focus-visible"}),"Can I Use")," database is a great resource when you’re unsure about the support for an unfamiliar CSS feature."),(0,d.kt)("hr",null),(0,d.kt)(e.X,{level:2,id:"vendor-prefixes",nextElement:{type:"paragraph"}},"Vendor Prefixes"),(0,d.kt)("p",null,"Many CSS properties require vendor prefixes to be understood by browsers, for example ",(0,d.kt)("inlineCode",{parentName:"p"},"background-clip: text")," needs the ",(0,d.kt)("inlineCode",{parentName:"p"},"-webkit")," prefix to work in most browsers:"),(0,d.kt)("pre",Object.assign({},{className:"language-css"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-css"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token selector"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class"}),".bg-clip-text"))," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"background-clip"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," text",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"-webkit-background-clip"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," text",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))),(0,d.kt)("p",null,"If you’re using the Tailwind CLI tool, vendor prefixes like this will be added automatically."),(0,d.kt)("p",null,"If not, we recommend that you use ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/postcss/autoprefixer"}),"Autoprefixer"),", which is a PostCSS plugin that automatically adds any necessary vendor prefixes based on the browsers you tell it you need to support."),(0,d.kt)("p",null,"To use it, install it via npm:"),(0,d.kt)("pre",Object.assign({},{className:"language-shell"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")," autoprefixer")),(0,d.kt)("p",null,"Then add it to the very end of your plugin list in your PostCSS configuration:"),(0,d.kt)("pre",Object.assign({},{className:"language-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  plugins",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'tailwindcss'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'autoprefixer'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))),(0,d.kt)("p",null,"To learn more about specifying which browsers you need to support, check out ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/browserslist/browserslist"}),"Browserslist")," which is the standard way to define target browsers in front-end tooling."))}j.isMDXComponent=!0,j.layoutProps=h},53339:function(a,b,c){"use strict";c.d(b,{L:function(){return l}});var d=c(85893),e=c(21744),f=c(9008),g=c(11163),h=c(57874),i=c(68224),j=c(54713);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a){var b=(0,g.useRouter)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.D,{suffix:"/"===b.pathname?void 0:"Tailwind CSS",children:a.layoutProps.meta.metaTitle||a.layoutProps.meta.title}),(0,d.jsxs)(f.default,{children:[(0,d.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,d.jsx)("meta",{name:"twitter:image",content:"https://tailwindcss.com".concat(h.Z)},"twitter:image")]}),(0,d.jsx)(e.C,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}({nav:j.u},a))]})}l.nav=j.u}},function(a){a.O(0,[6401,6852,4713,2474,9774,2888,179],function(){return a(a.s=53815)}),_N_E=a.O()}])