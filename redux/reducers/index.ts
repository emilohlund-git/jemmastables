import { combineReducers } from 'redux';
import dateReducer from './date';
import isAuthenticatedReducer from './isAuthenticated';
import isOpenReducer from './isOpen';
import typeReducer from './type';
import adminReducer from './admin';
import bookingIsOpenReducer from './bookingIsOpen';
import timeReducer from './time';
import userReducer from './user';

const appReducer = combineReducers({
  authenticated: isAuthenticatedReducer,
  date: dateReducer,
  isOpen: isOpenReducer,
  type: typeReducer,
  admin: adminReducer,
  bookingIsOpen: bookingIsOpenReducer,
  time: timeReducer,
  user: userReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET_STORE') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
