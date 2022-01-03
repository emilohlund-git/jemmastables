import { actions } from '../actions/types';

const initialState = {
  from: '00:00',
  to: '00:00',
};

const timeReducer = (
  state = initialState,
  action: {
    type: string;
    payload: {
      time: {
        from: string;
        to: string;
      };
    };
  }
) => {
  switch (action.type) {
    case actions.setTime:
      return action.payload;
    default:
      return state;
  }
};

export default timeReducer;
