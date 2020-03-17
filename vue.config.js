/*
 * @Description: 配置文件
 * @Date: 2019-09-28 19:32:33
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-20 19:15:33
 */
module.exports = {
    /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
     */
  
    publicPath: "/",
    filenameHashing: false, // 是否给生成的静态资源在它们的文件名中加上 hash
    outputDir: "dist",
    lintOnSave: true,
    runtimeCompiler: false,
    transpileDependencies: [],
    productionSourceMap: false,
    chainWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        // const splitOptions = config.optimization.get('splitChunks')
        // splitOptions.cacheGroups.appStyles = {
        //   name: 'styles',
        //   chunks: 'all',
        //   minChunks: 1,
        //   enforce: true
        // }
        // config.optimization.splitChunks(splitOptions)
      }
  
    },
    configureWebpack: config => {},
    css: {
      extract: true,
      sourceMap: false,
      loaderOptions: {},
      modules: false
    },
  
    parallel: require("os").cpus().length > 1,
  
    pwa: {},
    devServer: {
      open: process.platform === "darwin",
      disableHostCheck: false,
      host: "0.0.0.0",
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: null
    },
  
    pluginOptions: {}
  };