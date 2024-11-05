/**
 * @file 	    query.interface.ts
 * @brief	    interfaces used for querying backend / responses
 * @author      Tom Aston
 * @version     1.0
 * @copyright   tomaston.dev
 */

export interface IStockItem {
  stockId: number;
  symbol: string;
  name: string;
  type: string;
  region: string;
  currency: string;
}

export interface ISeriesStockData {
  metaData: any;
  seriesData: ISeriesStockItem[];
}

export interface ISeriesStockItem {
  unixTimestamp: number;
  openStockPrice: number;
  closeStockPrice: number;
  lowStockPrice: number;
  highStockPrice: number;
}

export interface ITickerData {
  bestMatches: ITickerItem[];
}

export interface ITickerItem {
  symbol: string;
  name: string;
  type: string;
  region: string;
  currency: string;
}

export interface IUserItem {
  userId: number;
  email: string;
  createdOn: number;
}

export interface ISectorItem {
  sector: string;
  weight: string;
}

export interface IHoldingItem {
  symbol: string;
  description: string;
  weight: string;
}

export interface IEtfProfileData {
  sectorsData: ISectorItem[];
  topTenHoldings: IHoldingItem[];
}
