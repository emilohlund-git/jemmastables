import { actions } from "../actions/types";

const categoryReducer = (
  state = null,
  action: { type: string; payload: { category: string } }
) => {
  switch (action.type) {
    case actions.setCategory:
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;
