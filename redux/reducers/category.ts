const categoryReducer = (
  state = null,
  action: { type: string; payload: { category: string } }
) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;
