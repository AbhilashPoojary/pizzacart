import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { getAllPizzasReducer } from "./getAllPizzasReducer";
import { loginReducer } from "./loginReducer";
import { userReducer } from "./userReducer";
import { alluserReducer } from "./alluserReducer";

export default combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  alluserReducer: alluserReducer,
  cartReducer: cartReducer,
  userReducer: userReducer,
  loginReducer: loginReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
console.log(currentUser);
export const initialState = {
  cartReducer: { cartItems: cartItems },
  loginReducer: { currentUser },
};
