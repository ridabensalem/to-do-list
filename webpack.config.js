/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "./src/index.js"),
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "To do List",
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: "./assets/img/[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
     
    ],
  },
};