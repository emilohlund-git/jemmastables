import { actions } from '../actions/types';

const adminReducer = (
  state = false,
  action: { type: string; payload: { admin: boolean } }
) => {
  switch (action.type) {
    case actions.setAdmin:
      return action.payload;
    default:
      return state;
  }
};

export default adminReducer;
