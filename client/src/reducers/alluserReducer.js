export const alluserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_USER_SUCCESS":
      return {
        loading: false,
        users: action.payload,
      };
    case "GET_USER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
