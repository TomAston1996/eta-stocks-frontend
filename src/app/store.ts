import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { etaStocksApi } from '../services/backend';

export const store = configureStore({
  reducer: {
    [etaStocksApi.reducerPath]: etaStocksApi.reducer,
  },
  middleware: (gDM) => gDM().concat(etaStocksApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
