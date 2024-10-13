import React, { useState } from 'react';

// import "bootstrap/dist/css/bootstrap.min.css";
import './home-page.css';

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
    </div>
  );
};
