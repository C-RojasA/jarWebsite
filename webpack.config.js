const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

const extractCSS = new MiniCssExtractPlugin({
  filename: "stylesheets/[name]-one.css"
});

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"]
  },

  entry: ["./src/index.jsx"],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /(\.js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "src/components")],
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { modules: true } }
        ]
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "src/assets/css")],
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { modules: true } }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.jsx$/,
        enforce: "pre",
        use: ["source-map-loader"]
      }
    ]
  },

  devServer: {
    host: "0.0.0.0",
    port: 5001,
    inline: true,
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./src/assets/index.html" }),
    extractCSS
  ]
};
