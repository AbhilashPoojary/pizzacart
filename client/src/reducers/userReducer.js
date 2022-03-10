export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    case "Delete_USER_REQUEST":
      return {
        loading: true,
      };
    case "Delete_USER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "Delete_USER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
