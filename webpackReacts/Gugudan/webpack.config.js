const path = require("path");
module.exports = {
  name: "Gugudan",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  entry: {
    app: ["./client"],
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
