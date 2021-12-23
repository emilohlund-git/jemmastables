import { DateTime } from "luxon";

const dateReducer = (
  state = DateTime.local(),
  action: { type: string; payload: { day: DateTime } }
) => {
  switch (action.type) {
    case "SET_DATE":
      return action.payload;
    default:
      return state;
  }
};

export default dateReducer;
