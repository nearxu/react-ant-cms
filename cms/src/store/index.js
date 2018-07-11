import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "../reducer";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configStore(initialState) {
  let store = createStoreWithMiddleware(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
