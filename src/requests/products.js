import axios from "axios";

export const getProducts = () => {
  return axios.get("https://632c0ea31aabd8373991a6db.mockapi.io/items")
        .then((res) => res.data)
}
