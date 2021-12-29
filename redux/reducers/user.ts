import { User } from '../../generated/graphql';

const userReducer = (
  state = null,
  action: { type: string; payload: User | null }
) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload != null ? {
        name: action.payload?.name,
        phonenumber: action.payload?.phonenumber,
        email: action.payload?.email,
        timeslots: action.payload?.timeslots,
      } : null;
    default:
      return state;
  }
};

export default userReducer;
