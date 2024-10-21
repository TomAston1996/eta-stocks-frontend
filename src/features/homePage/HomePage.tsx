import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './home-page.css';
import CandlestickChart from '../charts/CandlestickChart';
import Table, { TableType } from '../table/components/Table';

export const HomePage = () => {
  return (
    <div className="page-container-home">
      <div className="header-container-home">
        <h2>Welcome to ETA Stocks</h2>
      </div>
      <ul style={{ color: 'white', fontSize: '22px' }}>
        <li>Ticker search functionality</li>
        <li>Stock candlestick graphs</li>
        <li>ETF profile breakdown</li>
        <li>Description</li>
      </ul>
      <div style={{ width: 1000 }}>
        <div>
          <CandlestickChart symbol="QQQ" />
        </div>
        <Table symbol="QQQ" type={TableType.SECTOR} />
        <Table symbol="QQQ" type={TableType.HOLDING} />
      </div>
    </div>
  );
};
