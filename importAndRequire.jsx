//3 - 1 import와 Require 비교
//=============require : node문법, webpack에서는 require사용해야함===============
const React = require("react");
const ReactDOM = require("react-dom");
const { home } = require("./aaa");
const home = require("./aaa");

class App extends Component {}

exports.hello = "hello"; // === module.exports = {hello:'hello'}
module.exports = App;

//============================import : ES2015문법=============================
import React from "react";
import ReactDom from "react-dom";
import { home } from "react-hot-loader/root"; // export const home = "home" ,변수
import home from "aaa"; //export default home, 한 컴포넌트에서 한번만 사용

class App extends Component {}

export const hello = "hello"; // import {hello}
export const bye = "hello"; // import {hello, bye}
export default App; //import home from "path", 다른컴포넌트에서 App 컴포넌트를 불러올때
