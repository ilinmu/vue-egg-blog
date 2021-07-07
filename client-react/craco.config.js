module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://rap2api.taobao.org/app/mock/286585',
        secure: false,
        changeOrigin : true,
      },
    },
  },
};