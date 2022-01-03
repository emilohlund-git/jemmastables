import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import storage from '../syncStorage';

// BINDING MIDDLEWARE
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }: { isServer: any }) => {
  if (isServer) {
    return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
  } else {
    const { persistStore, persistReducer } = require('redux-persist');
    const persistConfig = {
      key: 'nextjs',
      whitelist: ['user', 'category', 'horse'],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    ) as any;

    store.__persistor = persistStore(store);

    return store;
  }
};
/* @ts-ignore */
export const wrapper = createWrapper(makeStore);
