import { combineReducers } from 'redux';
import dateReducer from './date';
import isOpenReducer from './isOpen';
import typeReducer from './type';
import adminReducer from './admin';
import bookingIsOpenReducer from './bookingIsOpen';
import timeReducer from './time';
import userReducer from './user';
import categoryReducer from './category';
import horseReducer from './horse';
import { actions } from '../actions/types';
import countReducer from './count';

const appReducer = combineReducers({
  date: dateReducer,
  isOpen: isOpenReducer,
  type: typeReducer,
  admin: adminReducer,
  bookingIsOpen: bookingIsOpenReducer,
  time: timeReducer,
  user: userReducer,
  category: categoryReducer,
  horse: horseReducer,
  count: countReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === actions.resetStore) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
