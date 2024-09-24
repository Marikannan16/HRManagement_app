import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isSideNavOpen: false,
  },
  reducers: {
    toggleSideNav: (state) => {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
  },
});

export const { toggleSideNav } = navbarSlice.actions;
export default navbarSlice.reducer;
