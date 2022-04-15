import {
  CLEAR_ADD_REQUEST,
  LOAD_WISHLIST_FAIL,
  LOAD_WISHLIST_REQUEST,
  LOAD_WISHLIST_SUCCESS,
  REMOVE_WISHLIST_ITEM_FAIL,
  REMOVE_WISHLIST_ITEM_REQUEST,
  REMOVE_WISHLIST_ITEM_SUCCESS,
  WISHLIST_ADD_FAIL,
  WISHLIST_ADD_REQUEST,
  WISHLIST_ADD_SUCCESS,
} from "../constants/wishlistConstants";

export const wishlistReducer = (state = {}, action) => {
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
    case LOAD_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        wishlistItems: action.payload,
      };
    case LOAD_WISHLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REMOVE_WISHLIST_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_WISHLIST_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        wishlistItems: action.payload,
      };
    case REMOVE_WISHLIST_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ADD_REQUEST:
      return {
        loading: false,
        error: "",
        successMessage: {
          message: "",
        },
      };
    default:
      return state;
  }
};
