import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import navReducer from '../features/navBar/navSlice';
import { etaStocksApi } from '../services/backend';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    [etaStocksApi.reducerPath]: etaStocksApi.reducer,
  },
  middleware: (gDM) => gDM().concat(etaStocksApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
