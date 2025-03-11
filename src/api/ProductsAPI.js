import axios from "axios";

export const BASE_URL = "https://api.example.com";

export class ProductsAPI {
  static async getAllProducts() {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return [];
      }
      throw new Error("Failed to fetch products");
    }
  }
}
