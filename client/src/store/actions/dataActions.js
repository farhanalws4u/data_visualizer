import * as api from "../../api/dataApi";
import { SET_ALL_DATA } from "../../constants/dataActions";
import { toast } from "react-toastify";

export const getAllData = (filters) => async (dispatch) => {
  try {
    const { data } = await api.getAllData(filters);
    if (data.data.length === 0) {
      toast.error("No data found on these filters !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    dispatch({
      type: SET_ALL_DATA,
      payload: data.data,
    });
  } catch (error) {
    console.log("error getting all data", error);
  }
};
