import { actions } from "../actions/types";

const horseReducer = (
  state = null,
  action: { type: string; payload: { horse: string } }
) => {
  switch (action.type) {
    case actions.setHorse:
      return action.payload;
    default:
      return state;
  }
};

export default horseReducer;
