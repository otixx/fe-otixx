import axios from "axios";

const publicApi = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
});
const privateApi = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
});
privateApi.interceptors.request.use(
  async function (config) {
    config.headers.Authorization = `Bearer sdsdlakjhdlahsdl`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

privateApi.interceptors.response.use(
  async function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
export { privateApi, publicApi };
