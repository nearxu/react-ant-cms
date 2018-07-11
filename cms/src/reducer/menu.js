import {
  GET_ALL_MENU,
  GET_ALL_MENU_SUCCESS,
  UPDATE_NAVPATH
} from "../actions/menu";

const initialState = {
  items: [],
  navpath: []
};

function menu(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MENU_SUCCESS:
      return Object.assign({}, initialState, {
        items: action.payload.data.menus
      });

    default:
      return state;
  }
}

export default menu;
