const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const prodConfig = {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
