import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './Dashboardslice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});
