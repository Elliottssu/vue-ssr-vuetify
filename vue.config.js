
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'; // this can use aliyun oss cdn

module.exports = {
  publicPath: BASE_URL,
  pluginOptions: {
    ssr: {
      nodeExternalsWhitelist: [/^vuetify/, /^register-service-worker/],
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
