(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{50704:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/multi-line-truncation-with-tailwindcss-line-clamp",function(){return c(9683)}])},9683:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return k},"default":function(){return l}}),c(67294);var d=c(3905);c(41664);var e=c(59533);c(5679);var f=c(85225),g=c(24541),h=c(81553),i={meta:{title:"Multi-line truncation with @tailwindcss/line-clamp",description:"A few weeks back we released @tailwindcss/line-clamp, an official Tailwind CSS plugin for truncating text to a specific number of lines.",date:"2021-01-24T20:00:00Z",authors:[g.Oq],image:h.Z},slug:"multi-line-truncation-with-tailwindcss-line-clamp",tableOfContents:[]},j=f.B,k=!0;function l(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(j,Object.assign({},i,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",{className:"lead"},"A few weeks back we released"," ",(0,d.kt)("a",{href:"https://github.com/tailwindlabs/tailwindcss-line-clamp"},(0,d.kt)("code",null,"@tailwindcss/line-clamp")),", an official Tailwind CSS plugin for truncating text to a specific number of lines."),(0,d.kt)("p",null,"Imagine you’re implementing a beautiful design you or someone on your team carefully crafted in Figma. You’ve nailed all the different layouts at each breakpoint, perfected the whitespace and typography, and the photography you’re using is really bringing the design to life."),(0,d.kt)("p",null,"It looks totally amazing — until you connect it your actual production content and realize that your beautiful grid of blog cards falls apart because, of course, ",(0,d.kt)("em",{parentName:"p"},"real")," article excerpts aren’t all magically exactly three lines long, and now each card is a different height."),(0,d.kt)("p",null,"Sound familiar? If so, the line-clamp plugin is here to save your bacon."),(0,d.kt)("div",{className:"relative",style:{paddingBottom:"56.25%"}},(0,d.kt)("iframe",{className:"absolute inset-0 h-full w-full",src:"https://www.youtube.com/embed/klh-jMTm5PU",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,d.kt)("p",null,"First, install the plugin and add it to your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),(0,d.kt)("pre",Object.assign({},{className:"language-shell"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")," @tailwindcss/line-clamp")),(0,d.kt)(e.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// ..."),"\n  plugins",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// ..."),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@tailwindcss/line-clamp'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.kt)("p",null,"Then all you need to do is add a ",(0,d.kt)("inlineCode",{parentName:"p"},"line-clamp-{n}")," utility to any block of text to automatically truncate to ",(0,d.kt)("em",{parentName:"p"},"n")," lines with a trailing ellipsis:"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"line-clamp-3",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Here's a block of text from a blog post that isn't conveniently three lines long like you designed\n  for originally. It's probably like 6 lines on mobile or even on desktop depending on how you have\n  things laid out. Truly a big pain in the derriere, and not the sort of thing you expected to be\n  wasting your time trying to deal with at 4:45pm on a Friday am I right? You've got tickets to\n  SmackDown and you heard there's gonna be a dark match with that local guy from two towns over that\n  your cousin went to high school with before the show starts, and you're gonna miss it if you're\n  not there early.\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"For more details, ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss-line-clamp/"}),"check out the documentation")," over on the GitHub repository."))}l.isMDXComponent=!0,l.layoutProps=i}},function(a){a.O(0,[9774,3430,6401,4756,6259,6852,2474,3942,5225,2888,179],function(){return a(a.s=50704)}),_N_E=a.O()}])