import { actions } from "../actions/types";

const bookingIsOpenReducer = (
  state = false,
  action: { type: string; payload: { isOpen: boolean } }
) => {
  switch (action.type) {
    case actions.setBookingIsOpen:
      return action.payload;
    default:
      return state;
  }
};

export default bookingIsOpenReducer;
