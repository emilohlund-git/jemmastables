const adminReducer = (
  state = false,
  action: { type: string; payload: { admin: boolean } }
) => {
  switch (action.type) {
    case 'SET_ADMIN':
      return action.payload;
    default:
      return state;
  }
};

export default adminReducer;
