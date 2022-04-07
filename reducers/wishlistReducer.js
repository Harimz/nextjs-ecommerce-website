import {
  LOAD_WISHLIST_FAIL,
  LOAD_WISHLIST_REQUEST,
  LOAD_WISHLIST_SUCCESS,
  WISHLIST_ADD_FAIL,
  WISHLIST_ADD_REQUEST,
  WISHLIST_ADD_SUCCESS,
} from "../constants/wishlistConstants";

export const addToWishlistReducer = (state = {}, action) => {
  switch (action.type) {
    case WISHLIST_ADD_REQUEST:
      return {
        loading: true,
      };
    case WISHLIST_ADD_SUCCESS:
      return {
        loading: false,
        successMessage: action.payload,
      };
    case WISHLIST_ADD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loadWishlistReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_WISHLIST_REQUEST:
      return {
        loading: true,
      };
    case LOAD_WISHLIST_SUCCESS:
      return {
        loading: false,
        wishlist: action.payload,
      };
    case LOAD_WISHLIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
