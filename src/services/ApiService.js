import axios from "axios";

// Create axios object
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

async function postCall(url, params = [], header = [], others = []) {
  return await axiosInstance
    .post(url)
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export default { postCall };
