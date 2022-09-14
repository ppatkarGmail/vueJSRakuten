const {
	defineConfig
} = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
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
			.use(["style-loader", "css-loader", "sass-loader"])
			.end()

	}
});