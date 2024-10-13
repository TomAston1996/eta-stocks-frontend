import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { NavState } from './nav.interface';

const initialState: NavState = {};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    history: (state: Draft<NavState>, action: PayloadAction<string>) => {
      state.previousPage = state.currentPage;
      state.currentPage = action.payload;
    },
  },
});
export const { history } = navSlice.actions;
export default navSlice.reducer;
