import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contacts from './slices/contact';
import filter from './slices/filter';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
};

const contactReducer = combineReducers({
  contacts,
  filter,
});

const persisteContactReducer = persistReducer(persistConfig, contactReducer);


export const store = configureStore({
  reducer: persisteContactReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});


export const persistor = persistStore(store);