const bookingIsOpenReducer = (
  state = false,
  action: { type: string; payload: { isOpen: boolean } }
) => {
  switch (action.type) {
    case 'SET_BOOKING_IS_OPEN':
      return action.payload;
    default:
      return state;
  }
};

export default bookingIsOpenReducer;
