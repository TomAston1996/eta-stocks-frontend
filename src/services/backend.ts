/**
 * @file 	    backend.ts
 * @brief	    backend api's pointing to Spring Boot app
 * @author      Tom Aston
 * @version     1.0
 * @copyright   tomaston.dev
 */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// eslint-disable-next-line import/no-cycle
// import { RootState } from '../app/store';

import { IEtfProfileData, ISeriesStockData, IStockItem } from './query.interface';

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
    GetMonthlyStockData: builder.query<ISeriesStockData, string>({
      query: (symbol: string) => ({
        method: 'GET',
        url: `avStocks/series?symbol=${symbol}&function=monthly`,
      }),
      providesTags: (result) => (result ? ['AlphaVantage'] : ['AlphaVantage']),
    }),
    GetEtfProfileData: builder.query<IEtfProfileData, string>({
      query: (symbol: string) => ({
        method: 'GET',
        url: `avStocks/etf?symbol=${symbol}&function=etfProfile`,
      }),
      providesTags: (result) => (result ? ['AlphaVantage'] : ['AlphaVantage']),
    }),
  }),
});

export const { useGetUserStocksQuery, useGetMonthlyStockDataQuery, useGetEtfProfileDataQuery } = etaStocksApi;
