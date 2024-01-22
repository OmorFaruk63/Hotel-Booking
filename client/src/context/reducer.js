export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.data,
      };
    case "EDITE":
      return {
        ...state,
        user: action.payload.data,
      };
    default:
      return state;
  }
};

export const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  loading: false,
  error: "",
};
