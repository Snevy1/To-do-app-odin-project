const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // The entry point of your application
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  /* added from official documentation */
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Specify the template file
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader
      },

      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
