import { DateTime } from "luxon";
import { actions } from "../actions/types";

const dateReducer = (
  state = DateTime.local(),
  action: { type: string; payload: { day: DateTime } }
) => {
  switch (action.type) {
    case actions.setDate:
      return action.payload;
    default:
      return state;
  }
};

export default dateReducer;
