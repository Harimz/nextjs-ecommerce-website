import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "../reducers/cartReducer";

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
};

const reducer = combineReducers({
  cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
