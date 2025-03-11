import axiosInstance from "./axiosInstance";

const AuthAPI = {
  // single responsibility principle, kalau misalnya AuthAPI berarti ini untuk handle API aja
  //   untuk ngehit ke backend, layer API
  //    jangan set state disini, jangan misalnya dispatch disini
  login: async (query, params) => {
    return axiosInstance.get("/auth/login");
  },
};

export default AuthAPI;
