import axios from "axios";

const wmbAxiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_BASE_URL_LOCAL_PROXY_API || "http://localhost:5173",
});

wmbAxiosInstance.interceptors.request.use((config) => {
  // bisa tambahin conditional kalau login gak perlu authorization header
  config.headers = {
    ...config.headers,
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  };
  return config;
});

export default wmbAxiosInstance;
