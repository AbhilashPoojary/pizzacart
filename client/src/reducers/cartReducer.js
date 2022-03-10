export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existedItems = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (existedItems) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case "DELETE_ALL_ITEMS_CART":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
