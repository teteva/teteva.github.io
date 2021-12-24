(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5657],{93201:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/just-in-time-the-next-generation-of-tailwind-css",function(){return c(92317)}])},92317:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return j},"default":function(){return k}}),c(67294);var d=c(3905);c(41664),c(5679);var e=c(85225),f=c(24541),g=c(99158),h={meta:{title:"Just-In-Time: The Next Generation of Tailwind CSS",description:"One of the hardest constraints we've had to deal with as we've improved Tailwind CSS over the years is the generated file size in development. Today I'm super excited to share a new project that makes this constraint a thing of the past: a just-in-time compiler for Tailwind CSS.",date:"2021-03-15T16:30:00.000Z",authors:[f.Oq],image:g.Z},slug:"just-in-time-the-next-generation-of-tailwind-css",tableOfContents:[]},i=e.B,j=!0;function k(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(i,Object.assign({},h,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,(0,d.kt)("em",{parentName:"p"},(0,d.kt)("strong",{parentName:"em"},"Update"),": As of Tailwind CSS v2.1, the new Just-in-Time engine is included right in Tailwind CSS itself, so you don’t need the ",(0,d.kt)("inlineCode",{parentName:"em"},"@tailwindcss/jit")," package anymore. ",(0,d.kt)("a",Object.assign({parentName:"em"},{href:"https://tailwindcss.com/docs/just-in-time-mode"}),"Learn more in the documentation"),".")),(0,d.kt)("p",null,"One of the hardest constraints we’ve had to deal with as we’ve improved Tailwind CSS over the years is the generated file size in development. With enough customizations to your config file, the generated CSS can reach 10mb or more, and there’s only so much CSS that build tools and even the browser itself will comfortably tolerate."),(0,d.kt)("p",null,"For that reason, you’ve always had to be careful about expensive changes to your config file like adding too many extra breakpoints or enabling extra variants like ",(0,d.kt)("inlineCode",{parentName:"p"},"disabled")," or ",(0,d.kt)("inlineCode",{parentName:"p"},"focus-visible"),"."),(0,d.kt)("p",null,"Today I’m super excited to share a new project we’ve been working on that makes these considerations a thing of the past: ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss-jit"}),(0,d.kt)("strong",{parentName:"a"},"a just-in-time compiler for Tailwind CSS")),"."),(0,d.kt)("div",{className:"aspect-w-16 aspect-h-9 my-12"},(0,d.kt)("iframe",{src:"https://www.youtube.com/embed/3O_3X7InOw8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,d.kt)("p",null,(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss-jit"}),(0,d.kt)("strong",{parentName:"a"},"@tailwindcss/jit"))," is a new experimental library that compiles all of your CSS ",(0,d.kt)("em",{parentName:"p"},"on-demand")," as you author your template files, instead of generating your entire stylesheet up front."),(0,d.kt)("p",null,"This comes with a lot of advantages:"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("strong",{parentName:"li"},"Lightning fast build times"),". Tailwind can take 3–8s to initially compile using our CLI, and upwards of 30–45s in webpack projects because webpack struggles with large CSS files. This library can compile even the biggest projects in about 800ms ",(0,d.kt)("em",{parentName:"li"},"(with incremental rebuilds as fast as 3ms)"),", no matter what build tool you’re using."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("strong",{parentName:"li"},"Every variant is enabled out of the box"),". Variants like ",(0,d.kt)("inlineCode",{parentName:"li"},"focus-visible"),", ",(0,d.kt)("inlineCode",{parentName:"li"},"active"),", ",(0,d.kt)("inlineCode",{parentName:"li"},"disabled"),", and others are not normally enabled by default due to file-size considerations. Since this library generates styles on demand, you can use any variant you want, whenever you want. You can even stack them like ",(0,d.kt)("inlineCode",{parentName:"li"},"sm:hover:active:disabled:opacity-75"),". Never configure your variants again."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("strong",{parentName:"li"},"Generate arbitrary styles without writing custom CSS.")," Ever needed some ultra-specific value that wasn’t part of your design system, like ",(0,d.kt)("inlineCode",{parentName:"li"},"top: -113px")," for a quirky background image? Since styles are generated on demand, you can just generate a utility for this as needed using square bracket notation like ",(0,d.kt)("inlineCode",{parentName:"li"},"top-[-113px]"),". Works with variants too, like ",(0,d.kt)("inlineCode",{parentName:"li"},"md:top-[-113px]"),"."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("strong",{parentName:"li"},"Your CSS is identical in development and production"),". Since styles are generated as they are needed, you don’t need to purge unused styles for production, which means you see the exact same CSS in all environments. Never worry about accidentally purging an important style in production again."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("strong",{parentName:"li"},"Better browser performance in development"),". Since development builds are as small as production builds, the browser doesn’t have to parse and manage multiple megabytes of pre-generated CSS. In projects with heavily extended configurations this makes dev tools a lot more responsive.")),(0,d.kt)("p",null,"Try it today by installing ",(0,d.kt)("inlineCode",{parentName:"p"},"@tailwindcss/jit")," and swapping it into your PostCSS configuration:"),(0,d.kt)("pre",Object.assign({},{className:"language-shell"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")," -D @tailwindcss/jit tailwindcss postcss autoprefixer")),(0,d.kt)("pre",Object.assign({},{className:"language-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// postcss.config.js"),"\nmodule",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  plugins",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@tailwindcss/jit'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    autoprefixer",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))),(0,d.kt)("p",null,"We’re shipping it as a separate library for now, but once we’ve worked out all the kinks we’re going to roll it right back into ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwindcss")," behind a configuration option, and we’re aiming to make it the default in Tailwind CSS v3.0 later this year."),(0,d.kt)("p",null,(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss-jit"}),"Learn more about the project on GitHub"),", then install it, play with it, bend it, break it, and let us know what you think!"),(0,d.kt)(function(a){return console.warn("Component Footer was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))},{mdxType:"Footer"},"Ready to try it out? ",(0,d.kt)("a",{href:"https://github.com/tailwindlabs/tailwindcss-jit"},"Get started →")))}k.isMDXComponent=!0,k.layoutProps=h}},function(a){a.O(0,[9774,3430,6401,4756,6259,6852,2474,3942,5225,2888,179],function(){return a(a.s=93201)}),_N_E=a.O()}])