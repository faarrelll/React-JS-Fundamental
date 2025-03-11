import { toast } from "sonner";
import wmbAxiosInstance from "./wmbAxiosInstance";

const WmbMenuAPI = {
  getAllMenu: async function () {
    try {
      // parameter kedua dari wmbAxiosInstance.post adalah request body
      const menuResponse = await wmbAxiosInstance.get("/api/v1/menus", {
        //   headers: {
        //     Authorization: "Bearer " + localStorage.getItem("access_token"),
        //   },
      });

      console.log("menuResponse", menuResponse);
      const { data } = menuResponse;
      return data?.data;
    } catch (error) {
      console.error("error", error);
      toast.error("Failed to fetch all menu");
      // import dari redux storenya
      // store.dispatch({
      //   type: "error/set_error",
      //   payload: error,
      // });
      return [];
    }
  },
};

export default WmbMenuAPI;
