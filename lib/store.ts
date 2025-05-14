'use client';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cart from '@/lib/features/cartSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cart
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }).concat(logger),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
