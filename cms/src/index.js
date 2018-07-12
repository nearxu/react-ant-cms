import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";

// babel本身只能转换ES6语法，但ES6新增的Map、Set、Generator等新功能不会转换，所以需要此插件
// import "babel-polyfill";
import { Provider } from "react-redux";
import configStore from "./store/index";
import route from "./router/index";
// 公共样式
import "./style/common.scss";

const store = configStore();

ReactDOM.render(
  <Provider store={store}>{route}</Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
