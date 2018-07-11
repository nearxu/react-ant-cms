import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";

// babel本身只能转换ES6语法，但ES6新增的Map、Set、Generator等新功能不会转换，所以需要此插件
// import "babel-polyfill";
import { Provider } from "react-redux";
import route from "./router/index";

// 公共样式
import "./style/common.scss";

import configStore from "./store/index";
const store = configStore();
console.log(store, "store");
ReactDOM.render(
  <Provider store={store}>{route}</Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
