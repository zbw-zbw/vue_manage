module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://kumanxuan1.f3322.net:8084",
        pathRewrite: {
          "^/api": ''
        }
      },
    }
  }
}