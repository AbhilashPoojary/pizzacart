import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("/api/pizzas/getallpizzas");
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: "GET_PIZZAS_FAILED", payload: err });
  }
};

export const addToCart = (pizza, quant, varients) => (dispatch, getState) => {
  const cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varients: varients,
    prices: pizza.prices,
    price: pizza.prices[0][varients] * quant,
    quant: Number(quant),
  };
  if (cartItem.quant > 10) {
    alert("you cannot add more than 10 items");
  } else {
    if (cartItem.quant < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: item });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteAllItemsCart = () => (dispatch, getState) => {
  dispatch({ type: "DELETE_ALL_ITEMS_CART" });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const response = await axios.post("/api/users/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispatch, getState) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/users/login", user);
    console.log(response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};

export const getAllUser = () => async (dispatch) => {
  dispatch({ type: "GET_USER_REQUEST" });
  try {
    const response = await axios.get("/api/users/getalluser");
    dispatch({ type: "GET_USER_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_USER_FAILED", payload: err });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: "Delete_USER_REQUEST" });
  try {
    console.log(id);
    await axios.post("/api/users/deleteUser", { id });
    dispatch({ type: "Delete_USER_SUCCESS" });
    //dispatch({ type: "GET_USER_REQUEST" });
  } catch (err) {
    dispatch({ type: "Delete_USER_FAILED", payload: err });
  }
};

export const createProducts = (product) => async (dispatch) => {
  dispatch({ type: "CREATE_PRODUCT_REQUEST" });
  try {
    const response = await axios.post("/api/pizzas/newPizza", product);
    dispatch({ type: "CREATE_PRODUCT_SUCCESS" });
    window.location.href = "/";
  } catch (err) {
    dispatch({ type: "CREATE_PRODUCT_FAILED", payload: err });
  }
};
