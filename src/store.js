import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";

import rootReducer from "./reducers/auth";

const initialState = {
  user: null,
  isAuthenticated: false,
  OTPVerified: false,
  OTP_ERROR: false,
  loginError: false,
};

const persistConfig = {
  key: 'authType',
  storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

// const store = createStore(pReducer, middleware);

const store = createStore(
  pReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);
export { persistor, store };