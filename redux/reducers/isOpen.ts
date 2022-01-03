import { actions } from "../actions/types";

const isOpenReducer = (
  state = false,
  action: { type: string; payload: { isOpen: boolean } }
) => {
  switch (action.type) {
    case actions.setIsOpen:
      return action.payload;
    default:
      return state;
  }
};

export default isOpenReducer;
