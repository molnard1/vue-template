const esbuild = require("esbuild")
const vuePlugin = require("esbuild-plugin-vue3")

esbuild.build({
    entryPoints: ["src/js/index.js"],
    bundle: true,
	minify: true,
    outfile: "public/dist/bundle.js",
    plugins: [vuePlugin()]
})

esbuild.build({
    entryPoints: ["src/css/style.css"],
    bundle: true,
	minify: true,
    outfile: "public/dist/bundle.css"
})