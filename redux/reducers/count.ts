import { actions } from '../actions/types';

const countReducer = (
  state = 0,
  action: { type: string; payload: { count: number } }
) => {
  switch (action.type) {
    case actions.setCount:
      return action.payload;
    default:
      return state;
  }
};

export default countReducer;
