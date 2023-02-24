import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { SET_FILTER_LIST } from "../constants/dataActions";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (options) => options,
});

export default function Filter({ title, options, name }) {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleChange = (e, val) => {
    if (!val) {
      if (Object.keys(filters).length > 0) {
        delete filters[name];
        dispatch({
          type: SET_FILTER_LIST,
          payload: filters,
        });
      }
    } else {
      dispatch({
        type: SET_FILTER_LIST,
        payload: { [name]: val },
      });
    }
  };

  return (
    <Autocomplete
      id="filter-demo"
      onChange={handleChange}
      options={options}
      getOptionLabel={(options) => options}
      filterOptions={filterOptions}
      sx={{ width: 280, ":hover": { borderColor: "#000" } }}
      renderInput={(params) => <TextField {...params} label={title} />}
    />
  );
}
