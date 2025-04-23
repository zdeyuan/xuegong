module.exports = {
	publicPath:'./',
	runtimeCompiler: true,
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				 args[0].title = process.env.VUE_APP_SYSTEM_WEB_TABEL_NAME || '';
				//args[0].title = '教学综合信息服务平台'
				// args[0].title = '招生系统演示环境'
				return args
			})
	}
}
