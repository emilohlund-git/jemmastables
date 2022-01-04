import { actions } from '../actions/types';

const facilityReducer = (
  state = null,
  action: { type: string; payload: { facility: string } }
) => {
  switch (action.type) {
    case actions.setFacility:
      return action.payload;
    default:
      return state;
  }
};

export default facilityReducer;
