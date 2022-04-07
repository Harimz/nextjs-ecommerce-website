import axios from "axios";
import { server } from "../config";
import {
  LOAD_WISHLIST_FAIL,
  LOAD_WISHLIST_REQUEST,
  LOAD_WISHLIST_SUCCESS,
  WISHLIST_ADD_FAIL,
  WISHLIST_ADD_REQUEST,
  WISHLIST_ADD_SUCCESS,
} from "../constants/wishlistConstants";

export const addToWishlist = (productDetails) => async (dispatch, getState) => {
  try {
    dispatch({
      type: WISHLIST_ADD_REQUEST,
    });

    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.post(
      `${server}/api/wishlist`,
      productDetails,
      config
    );

    dispatch({
      type: WISHLIST_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WISHLIST_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const loadWishList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOAD_WISHLIST_REQUEST,
    });

    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.get("/api/wishlist", config);

    dispatch({
      type: LOAD_WISHLIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_WISHLIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
