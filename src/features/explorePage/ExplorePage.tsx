import React, { useState } from 'react';

import { USE_DUMMY } from '../../app/config';
import { TickerCard } from '../cards/components/TickerCard';
import DummyData from '../searchBar/files/dummyTickerSearchResults.json';
import SearchBar from '../searchBar/SearchBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './explore-page.css';

type TickerResponseItem = {
  symbol: string;
  name: string;
  region: string;
  currency: string;
  type: string;
};

export const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState({ value: '' });
  const [searchResponse, setSearchResponse] = useState<TickerResponseItem[]>([]);

  return (
    <div className="page-container-explore">
      <h5>Search Bar</h5>
      <SearchBar type="text" onChange={(o) => setSearchTerm(o)} placeholder="Search ticker values..." />
      {USE_DUMMY ? (
        <>
          <div style={{ display: 'flex', maxWidth: 1500, flexWrap: 'wrap', alignItems: 'center' }}>
            {DummyData.bestMatches.map((item: TickerResponseItem, index: number) => {
              return (
                <div key={index}>
                  <TickerCard symbol={item.symbol} name={item.name} region={item.region} currency={item.currency} type={item.type} />
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};
