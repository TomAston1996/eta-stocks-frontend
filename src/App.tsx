import React, { useEffect } from 'react';

import { useAppDispatch } from './app/hook';
import logo from './logo.svg';
import './App.css';
import { useGetUserStocksQuery } from './services/backend';
import { IStockItem } from './services/query.interface';

function App() {
  const dispatch = useAppDispatch();
  const pollingInterval = 0;

  const { data, error, isLoading, isFetching } = useGetUserStocksQuery(1, {
    pollingInterval,
  });

  useEffect(() => {
    if (data != undefined) console.info(data);
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
