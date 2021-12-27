const horseReducer = (
  state = null,
  action: { type: string; payload: { horse: string } }
) => {
  switch (action.type) {
    case 'SET_HORSE':
      return action.payload;
    default:
      return state;
  }
};

export default horseReducer;
