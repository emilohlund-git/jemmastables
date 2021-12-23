const userReducer = (state = false, action: { type: string; payload: {} }) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
