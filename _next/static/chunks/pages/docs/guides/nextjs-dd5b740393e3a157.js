(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9092],{36330:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/nextjs",function(){return c(42485)}])},32079:function(a,b,c){"use strict";c.r(b),c.d(b,{FrameworkGuideLayout:function(){return f}});var d=c(85893),e=c(74903);function f(a){var b=a.title,c=a.description,f=a.children;return(0,d.jsxs)(e.i,{children:[(0,d.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,d.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,d.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,d.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200",children:b}),(0,d.jsx)("p",{className:"mt-4 text-lg text-gray-700 dark:text-gray-400",children:c})]})}),(0,d.jsx)("section",{className:"mb-16 relative",children:f})]})}},42485:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=i,b.__N_SSG=void 0;var d=c(85893),e=c(53339),f=c(32079),g=c(62223),h=[{title:"Create your project",body:function(){return d.jsxs("p",{children:["Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use"," ",d.jsx("a",{href:"https://nextjs.org/docs/api-reference/create-next-app",children:"Create Next App"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npx create-next-app my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:function(){return d.jsxs("p",{children:["Install ",d.jsx("code",{children:"tailwindcss"})," and its peer dependencies via npm, and then run the init command to generate both ",d.jsx("code",{children:"tailwind.config.js"})," and ",d.jsx("code",{children:"postcss.config.js"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"}},{title:"Configure your template paths",body:function(){return d.jsxs("p",{children:["Add the paths to all of your template files in your ",d.jsx("code",{children:"tailwind.config.js"})," file."]})},code:{name:"tailwind.config.js",lang:"js",code:"  module.exports = {\n>   content: [\n>     \"./pages/**/*.{js,ts,jsx,tsx}\",\n>     \"./components/**/*.{js,ts,jsx,tsx}\",\n>   ],\n    theme: {\n      extend: {},\n    },\n    plugins: [],\n  }"}},{title:"Add the Tailwind directives to your CSS",body:function(){return d.jsxs("p",{children:["Add the ",d.jsx("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",d.jsx("code",{children:"./styles/globals.css"})," file."]})},code:{name:"globals.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:function(){return d.jsxs("p",{children:["Run your build process with ",d.jsx("code",{children:"npm run dev"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:function(){return d.jsx("p",{children:"Start using Tailwind’s utility classes to style your content."})},code:{name:"index.js",lang:"jsx",code:"  export default function Home() {\n    return (\n>     <h1 className=\"text-3xl font-bold underline\">\n>       Hello world!\n>     </h1>\n    )\n  }"}},];function i(a){var b=a.code;return d.jsxs(f.FrameworkGuideLayout,{title:"Install Tailwind CSS with Next.js",description:"Setting up Tailwind CSS in a Next.js v10+ project.",children:[d.jsx("div",{className:"relative z-10 prose mb-16 max-w-3xl dark:prose-dark",children:d.jsxs("p",{children:["The quickest way to start using Tailwind CSS in your Next.js project is to use the"," ",d.jsx("a",{href:"https://github.com/vercel/next.js/tree/4d4f3093019179b1928ec07c16f38882241c0375/examples/with-tailwindcss",children:"Next.js + Tailwind CSS Example"}),". This will automatically configure your Tailwind setup based on the official Next.js example. If you'd like to configure Tailwind manually, continue with the rest of this guide."]})}),d.jsx(g.Steps,{steps:h,code:b})]})}b.__N_SSG=!0,i.layoutProps={meta:{title:"Installation: Tailwind CSS with Next.js",section:"Getting Started"},Layout:e.DocumentationLayout,allowOverflow:!1}}},function(a){a.O(0,[9774,9840,6852,4713,8055,2888,179],function(){return a(a.s=36330)}),_N_E=a.O()}])