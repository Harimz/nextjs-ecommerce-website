import axios from "axios";
import { server } from "../config";
import { CART_ADD_ITEM } from "../constants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${server}/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.images[0],
      price: data.price,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
