import { createStore, applyMiddleware } from "redux";

import reducer from "../reducer/index";
const initState = {
  menuName: ""
};

const store = () =>
  createStore(
    reducer,
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
