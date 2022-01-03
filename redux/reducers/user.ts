import { User } from '../../generated/graphql';
import { actions } from '../actions/types';

const userReducer = (
  state = null,
  action: { type: string; payload: User | null }
) => {
  switch (action.type) {
    case actions.setUser:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
