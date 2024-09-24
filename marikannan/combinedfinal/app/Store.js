import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../features/NavbarSlice'
import userReducer from '../features/userSlice'
import complianceReducer from '../features/complianceSlice'
import logReducer from '../features/logSlice'
const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    user:userReducer,
    compliance:complianceReducer,
    log:logReducer

  },
});

export default store;
