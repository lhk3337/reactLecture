const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", //실서비스는 production으로 바꾸면 됨 -> mode : "production"
  devtool: "eval", //개발용은 eval, 실제배포용은 hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"], //파일명 뒤의 확장자를 자동적으로 찾아줌.
  },

  entry: {
    //webapck에 넣을 파일들을 설정 (입력)
    app: ["./client"], //이미 client.jsx에서 WordRelay.jsx를 불러왔기 때문에 WordRelay.jsx를 써주지 않아도 webpack에서 자동적으로 불러와 입력한다.
  }, //입력

  module: {
    //entry에 있는 파일을 읽고 ,파일에서 요구하는 모듈을 적용, 아웃픗으로 이동시킴
    rules: [
      //여러개의 규칙들을 적용, 배열형태
      {
        test: /\.jsx?/, //규칙 적용할 파일들(js파일과 jsx파일을 규칙을 적용)
        loader: "babel-loader", //babel 규칙을 적용
        options: {
          //babel 옵션
          presets: [
            [
              "@babel/preset-env",
              {
                //@babel/preset-env의 설정을 적용할때 배열형태로씀 preset:[["@babel/preset-env",{target:{ browsers: ["last 2 chrome versions"],},}], "@babel/preset-react"]
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"],
                },
              },
            ],
            "@babel/preset-react",
          ], //presets는 plugin의 모임
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  plugins: [
    //여기에 사용할 플러그인을 나열한다.
    new webpack.LoaderOptionsPlugin({ debug: true }), //로더 옵션을 debug로 모두 설정
    new RefreshWebpackPlugin(),
  ],
  output: {
    //entry에서 설정된 파일을 webpack으로 통해 통합된 파일 출력 (출력)
    path: path.join(__dirname, "dist"), //__dirname : 현재폴더,
    filename: "app.js",
    publicPath: "/dist/",
  }, //출력
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};
