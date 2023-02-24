import axios from "axios";

const url = "http://localhost:5000";

export const getAllData = async (filters) => {
  return await axios.post(`${url}/api/v1/data`, { filters });
};
