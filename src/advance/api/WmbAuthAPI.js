import wmbAxiosInstance from "./wmbAxiosInstance";

const WmbAuthAPI = {
  login: async function (username, password) {
    // parameter kedua dari wmbAxiosInstance.post adalah request body
    const loginResponse = await wmbAxiosInstance.post("/api/v1/auth/login", {
      username,
      password,
    });
    console.log("loginResponse", loginResponse);
    const { data } = loginResponse;

    return data?.data;
  },
};

export default WmbAuthAPI;
