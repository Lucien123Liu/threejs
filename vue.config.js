const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true,
  productionSourceMap: false,
  chainWebpack(config) {
    config.resolve.alias.set("@", resolve("./src")); // 给src的绝对路径起一个别名叫@
  }
}
