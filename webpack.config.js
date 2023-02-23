const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  // entry: "./src/index.js",
  // output: {
  //   filename: "[name].bundle.js",
  //   path: path.resolve(__dirname, "dist"),
  // },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.(png|jpe?g|svg|gif|mp4)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.GOOGLE_CLIENT_KEY": JSON.stringify(
        process.env.GOOGLE_CLIENT_KEY
      ),
    }),
  ],
};
