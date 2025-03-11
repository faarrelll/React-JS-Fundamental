import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import { ProductsAPI } from "./ProductsAPI";

vi.mock("axios");

describe("ProductsAPI", () => {
  it("should fetch products successfully", async () => {
    // console.log("axios", axios);

    const mockProducts = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];

    const mockAxiosGetResponse = { data: mockProducts };

    axios.get.mockResolvedValueOnce(mockAxiosGetResponse);

    const result = await ProductsAPI.getAllProducts();

    // expect(result).toEqual(mockProducts);
    expect(result).toEqual(mockAxiosGetResponse.data);
    expect(axios.get).toHaveBeenCalledWith("https://api.example.com/products");
  });

  it("should return empty array when products not found", async () => {
    axios.get.mockRejectedValueOnce({
      response: { status: 404 },
    });

    const result = await ProductsAPI.getAllProducts();

    expect(result).toEqual([]);
  });

  it("should throw error on network failure", async () => {
    axios.get.mockRejectedValueOnce(new Error("Network Error"));
    await expect(ProductsAPI.getAllProducts()).rejects.toThrow(
      "Failed to fetch products"
    );
  });
});
