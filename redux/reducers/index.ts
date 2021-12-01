import { combineReducers } from "redux";
import dateReducer from "./date";
import isAuthenticatedReducer from "./isAuthenticated";

const appReducer = combineReducers({
  authenticated: isAuthenticatedReducer,
  date: dateReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_STORE") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
