const webpack=require("webpack")
module.exports = {
    publicPath:'./',
    outputDir:'dist',
    assetsDir:'assets',
    lintOnSave:false,
	productionSourceMap: false,
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
			    jquery: 'jquery',
			    jQuery: 'jquery',
			    'windows.jQuery': 'jquery'
			})
	    ]
	}
}
