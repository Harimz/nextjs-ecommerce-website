import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "../reducers/cartReducer";
import { wishlistReducer } from "../reducers/wishlistReducer";

let cartItemsFromStorage;

if (typeof window !== "undefined") {
  cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
}

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
  wishlist: {
    wishlistItems: [],
  },
};

const reducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
