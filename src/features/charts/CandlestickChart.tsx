import React, { useEffect, useState } from 'react';

import { AgCharts } from 'ag-charts-react';

import './candlestick.css';

import 'ag-charts-enterprise';
import { useGetMonthlyStockDataQuery } from '../../services/backend';
import { ISeriesStockItem } from '../../services/query.interface';

interface ICandlestickChartProps {
  symbol: string;
}

export interface IAGSeriesDataItem {
  date: Date;
  volume: number | null;
  open: number;
  close: number;
  low: number;
  high: number;
}

const mapAVSeriesToAGSeriesDataType = (data: ISeriesStockItem[]): IAGSeriesDataItem[] => {
  const agSeriesData: IAGSeriesDataItem[] = data.map((obj: ISeriesStockItem) => ({
    date: new Date(obj.unixTimestamp),
    volume: 1000,
    open: obj.openStockPrice,
    close: obj.closeStockPrice,
    low: obj.lowStockPrice,
    high: obj.highStockPrice,
  }));

  return agSeriesData;
};

export default function CandlestickChart({ symbol }: ICandlestickChartProps) {
  const [seriesData, setSeriesData] = useState<IAGSeriesDataItem[]>([]);

  const pollingInterval = 0;
  //getting unique technical issue number
  const { data, error, isLoading, isFetching } = useGetMonthlyStockDataQuery(symbol, {
    pollingInterval,
  });

  useEffect(() => {
    if (data) {
      setSeriesData(mapAVSeriesToAGSeriesDataType(data.seriesData));
      console.info(data.seriesData);
    }
  }, [data]);

  const options: any = {
    data: seriesData,
    title: {
      text: symbol,
    },
    subtitle: {
      text: 'Candlestick Patterns',
    },
    footnote: {
      text: 'Monthly',
    },
    theme: 'ag-vivid-dark',
    width: 1200,
    height: 700,
    series: [
      {
        type: 'candlestick',
        xKey: 'date',
        xName: 'Month',
        lowKey: 'low',
        highKey: 'high',
        openKey: 'open',
        closeKey: 'close',
        item: {
          up: {
            fill: 'transparent',
            stroke: '#2b5c95',
            wick: {
              strokeWidth: 2,
            },
          },
          down: {
            fill: '#5090dc',
            stroke: '#2b5c95',
            wick: {
              strokeWidth: 2,
            },
          },
        },
        tooltip: {
          renderer: ({ datum, xKey, openKey, highKey, lowKey, closeKey }: any) => {
            return {
              title: `<b>${datum[xKey].toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</b>`,
              content: `<b>O</b> ${datum[openKey].toLocaleString()}</br><b>H</b> ${datum[highKey].toLocaleString()}<br/><b>L</b> ${datum[lowKey].toLocaleString()}
                           <br/><b>C</b> ${datum[closeKey].toLocaleString()}`,
            };
          },
        },
      },
    ],
    axes: [
      {
        type: 'ordinal-time',
        position: 'bottom',
        label: {
          format: '%b %Y',
        },
      },
      {
        type: 'number',
        position: 'right',
        label: {
          formatter: ({ value }: { value: any }) => '£' + Number(value).toLocaleString(),
        },
        crosshair: {
          label: {
            format: ',f',
          },
        },
      },
    ],
  };

  return (
    <div className="candlestick-chart-wrapper">
      <AgCharts options={options} />
    </div>
  );
}
