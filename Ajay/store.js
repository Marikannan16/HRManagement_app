import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/userSclice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
