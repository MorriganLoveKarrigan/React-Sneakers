import axios from "axios";

export const addToCart = (obj) => {
   return axios.post("https://632c0ea31aabd8373991a6db.mockapi.io/Cart",{
        "amount":1,
        "id":obj.id,
        "path":obj.path,
        "name": obj.name,
        "price": obj.price
    }).then((res) => res.data)
}

export const removeFromCart = (item) => {
    return axios.delete(`https://632c0ea31aabd8373991a6db.mockapi.io/Cart/${item.id}`).then()
}

export const getCartItems = () => {
    return axios.get("https://632c0ea31aabd8373991a6db.mockapi.io/Cart").then((res) => res.data)
}
