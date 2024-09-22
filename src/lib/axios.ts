import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENV_VARIABLE,
});
instance.interceptors.request.use(
  async function (config) {
    config.headers.Authorization = `Bearer sdsdlakjhdlahsdl`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
export default instance;
