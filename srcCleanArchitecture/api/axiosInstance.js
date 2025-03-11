import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/v2",
  timeout: 5000,
});

// ini akan mencegat dari semua request
// axiosInstance.interceptors.request.use
// tujuan untuk memberikam Authorization headers ke semua request (secara global), gak individual di setiap axios instance
axiosInstance.interceptors.request.use(
  async (config) => {
    // kita kasih pengecualian
    if (config.url.includes("login") || config.url.includes("refresh")) {
      return config; // langsung hit ke backend
    }
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${access_token}`, // ditambahin dulu Authorization header sebelum hit ke backend beneran
      };
    }
    return config;
  },
  (error) => {
    console.log("axiosInstance.interceptors.request Error:", error.message);

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshResp = await AuthApi.refresh();
        console.log("refreshResp", refreshResp);

        axios.defaults.headers.common["Authorization"] =
          "Bearer " + refreshResp.access_token;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error(refreshError);

        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
  }
);

// if backend not yet ready
// const axiosInstance = {
//   post: (url, body) => {
//     console.log({ url, body });

//     return {
//       data: {
//         access_token:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imhhc2hjb2RlIiwidXNlcm5hbWUiOiJzdXBlcmFkbWluMSIsImVtYWlsIjoic3VwZXJhZG1pbjFAZW1haWwuY29tIiwibmFtZSI6IlN1cGVyIEFkbWluIDEiLCJyb2xlIjoiU1VQRVJfQURNSU4iLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaS5waW5pbWcuY29tLzczNngvMjIvOGMvYTQvMjI4Y2E0ZTlkMDk0NGMxODM4Yzk5OTcyYmRmNGU0MjguanBnIn0.st3AQlg_L4oi_0oNSzxLXwfaHi5dw_tXP5YKTW5_jM8",
//         refresh_token:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imhhc2hjb2RlIiwidXNlcm5hbWUiOiJzdXBlcmFkbWluMSIsImVtYWlsIjoic3VwZXJhZG1pbjFAZW1haWwuY29tIiwibmFtZSI6IlN1cGVyIEFkbWluIDEiLCJyb2xlIjoiU1VQRVJfQURNSU4iLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaS5waW5pbWcuY29tLzczNngvMjIvOGMvYTQvMjI4Y2E0ZTlkMDk0NGMxODM4Yzk5OTcyYmRmNGU0MjguanBnIn0.st3AQlg_L4oi_0oNSzxLXwfaHi5dw_tXP5YKTW5_jM8",
//       },
//     };
//   },
// };

export default axiosInstance;
