import AuthAPI from "../api/AuthAPI";

const store = {}; // redux store ceritanya

const AuthServices = {
  login: async (username, password) => {
    try {
      // AuthAPI.login kan untuk pure perantara FE dgn BE
      //   AuthServices lebih boleh ada logic
      //    di custom hooks logicnya sebenernya bisa aja
      //    malah recomendnya di custom hooks aja, useDispatch bisa dipakai disana
      const loginResponse = await AuthAPI.login(username, password);
      return loginResponse.data;
    } catch (error) {
      store.dispatch({
        type: "global/error",
        payload: error,
      });
      return {};
    }
  },
};

export default AuthServices;
