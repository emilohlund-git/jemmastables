import { actions } from '../actions/types';

const typeReducer = (
  state = 'Träning',
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case actions.setType:
      return action.payload;
    default:
      return state;
  }
};

export default typeReducer;
