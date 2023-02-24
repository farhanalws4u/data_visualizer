import { SET_ALL_DATA } from "../../constants/dataActions";

const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_DATA:
      return [...action.payload];

    default:
      return state;
  }
};
export default dataReducer;
