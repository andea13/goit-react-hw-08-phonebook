import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { ContactsReducer } from './contacts/ContactsSlice';
import { AuthReducer } from './auth/operations';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  // whitelist: ['items'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, AuthReducer);
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  ContactsReducer
);

const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  auth: persistedAuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
