// http://rap2api.taobao.org/app/mock/267660
module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    port: 8812,
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: { // 重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/api': ''
        }
      }
    }
  }

}
