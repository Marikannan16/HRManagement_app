// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import complianceReducer from './complianceSlice';

const store = configureStore({
  reducer: {
    compliance: complianceReducer,
  },
});

export default store;
