const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", //실서비스는 production으로 바꾸면 됨 -> mode : "production"
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"], //파일명 뒤의 확장자를 찾아줌.
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
    app: ["./client"], //이미 client.jsx에서 WordRelay.jsx를 불러왔기 때문에 WordRelay.jsx를 써주지 않아도 webpack에서 자동적으로 불러와 입력한다.
  }, //입력

  output: {
    path: path.join(__dirname, "dist"), //__dirname : 현재폴더,
    filename: "app.js",
  }, //출력
};
