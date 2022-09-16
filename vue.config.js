const {
	defineConfig
} = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
	outputDir: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, "../node/dist") : "dist",
	transpileDependencies: false,
	// css: {
	// 	loaderOptions: {
	// 		"scss": {
	// 			additionalData: `
	// 			@import "@/assets/temp.scss" ;
	// 			@import "@/assets/temp1.scss" ;

	// 			`
	// 		}
	// 	}
	// }
	chainWebpack: config => {
		config.module
			.rule("scss")
			.test(/\.scss$/)
			.use(["style-loader", "css-loader", 'saas-loader'])
			.end()

	}

});