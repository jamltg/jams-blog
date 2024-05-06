/* eslint-disable no-undef */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';
import themeReducer from './theme/themeSlice.js';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

//installed redux-persist so data wont disappear when page is reloaded 

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

//keyword root goes to localstorage so it wont disappear in reload
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck:false}),
});

export const persistor = persistStore(store);