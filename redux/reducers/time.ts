const initialState = {
  from: '00:00',
  to: '00:00',
};

const timeReducer = (
  state = initialState,
  action: { type: string; payload: { time: {} } }
) => {
  switch (action.type) {
    case 'SET_TIME':
      return action.payload;
    default:
      return state;
  }
};

export default timeReducer;
