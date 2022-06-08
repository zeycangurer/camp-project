import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get("https://northwind.vercel.app/api/products")
  }

  getProductById(id) {
    return axios.get("https://northwind.vercel.app/api/products/" + id)
  }

}
