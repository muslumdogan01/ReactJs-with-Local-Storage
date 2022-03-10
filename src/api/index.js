import axios from "axios";

let BASE_URL = "https://5fc9346b2af77700165ae514.mockapi.io";

const client = axios.create({
  baseURL: BASE_URL,
});

export default client;