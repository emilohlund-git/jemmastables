const darkmodeReducer = (
  state = false,
  action: { type: string; payload: { darkmode: boolean } }
) => {
  switch (action.type) {
    case "SET_DARKMODE":
      return action.payload;
    default:
      return state;
  }
};

export default darkmodeReducer;
