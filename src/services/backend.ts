import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// eslint-disable-next-line import/no-cycle
// import { RootState } from '../app/store';

import { IStockItem } from './query.interface';

export const etaStocksApi = createApi({
  reducerPath: 'etaStocksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/',
    mode: 'cors',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),
  tagTypes: ['AlphaVantage', 'User', 'Stocks'],
  endpoints: (builder) => ({
    GetUserStocks: builder.query<IStockItem[], number>({
      query: (userId: number) => ({
        method: 'GET',
        url: `user/myStocks/${userId}`,
      }),
      providesTags: (result) => (result ? ['User'] : ['User']),
    }),
  }),
});

export const { useGetUserStocksQuery } = etaStocksApi;
