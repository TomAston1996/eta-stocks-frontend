import React from 'react';
import { textFilter } from 'react-bootstrap-table2-filter';

export const sectorTableColumns = [
  {
    dataField: 'sector',
    text: 'Sector',
    filter: textFilter(),
  },
  {
    dataField: 'weight',
    text: 'Weight',
    filter: textFilter(),
    formatter: (cellContent: any) => {
      return <p>{Number(parseFloat(cellContent) * 100).toFixed(2)}%</p>;
    },
  },
];

export const holdingTableColumns = [
  {
    dataField: 'symbol',
    text: 'Ticker',
    filter: textFilter(),
  },
  {
    dataField: 'description',
    text: 'Name',
    filter: textFilter(),
  },
  {
    dataField: 'weight',
    text: 'Weight',
    filter: textFilter(),
    formatter: (cellContent: any) => {
      return <p>{Number(parseFloat(cellContent) * 100).toFixed(2)}%</p>;
    },
  },
];
