const isAuthenticatedReducer = (state = false, action: any) => {
  switch (action.type) {
    case "SIGN_IN":
      return true;
    default:
      return state;
  }
};

export default isAuthenticatedReducer;
