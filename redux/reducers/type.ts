const typeReducer = (state = "Träning", action: any) => {
  switch (action.type) {
    case 'SET_TYPE':
      return action.payload;
    default:
      return state;
  }
};

export default typeReducer;
