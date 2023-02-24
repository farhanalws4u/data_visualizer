import { SET_FILTER_LIST } from "../../constants/dataActions";

const initialState = {};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_LIST:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default filterReducer;
