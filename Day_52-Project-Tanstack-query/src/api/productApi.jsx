import { axiosInstance } from "../config/axiosInstance";

export let getProductDataApi = async () => {
  try {
    let res = await axiosInstance.get("/products");
    console.log("api is calling");
    return res.data.products;
  } catch (error) {
    console.log(error);
  }
};
