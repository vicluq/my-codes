const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const uglifyJS = require("uglifyjs-webpack-plugin");
const optimizeCSS = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: "C:\\Users\\Victo\\OneDrive\\Documentos\\WebCurso\\wbepack_\\Build",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),

    new HtmlWebpackPlugin({
      //usado para criar páginas a partir de páginas minhas do source
      title: "WebPack Test",
      minify: true,
      template: "src/index.html",
    }),

    new HtmlWebpackPlugin({
      minify: true,
      filename: "pages/ajax.html",
      template: "src/pages/ajax.html",
      inject: false,
    }),

    new uglifyJS({
      cache: true,
      parallel: true,
      extractComments: true,
    }),

    new optimizeCSS({
      assetNameRegExp: /\.css$/g,
      canPrint: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      //   {
      //     test: /\.html$/,
      //     use: [
      //       "file-loader?name=[name].[ext]",
      //       "extract-loader",
      //       {
      //         loader: "html-loader",
      //         options: {
      //           minimize: true,
      //         },
      //       },
      //     ],
      //   },
    ],
  },
  devServer: {
    port: 8081,
    contentBase:
      "C:\\Users\\Victo\\OneDrive\\Documentos\\WebCurso\\wbepack_\\Build",
    liveReload: true,
    open: true,
    onListening: (server) => {
      console.log("server is on");
    },
  },
};
