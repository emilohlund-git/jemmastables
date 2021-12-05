const isOpenReducer = (
  state = false,
  action: { type: string; payload: { isOpen: boolean } }
) => {
  switch (action.type) {
    case "SET_IS_OPEN":
      return action.payload;
    default:
      return state;
  }
};

export default isOpenReducer;
