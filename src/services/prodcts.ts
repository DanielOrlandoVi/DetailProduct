import axios from "axios";

  export async function getProducts(): Promise<any> {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response;
  }

  export async function getProduct(id: any): Promise<any> {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response;
  }