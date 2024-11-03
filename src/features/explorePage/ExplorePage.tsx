import React, { useState } from 'react';

import { TickerCard } from '../cards/components/TickerCard';
import SearchBar from '../searchBar/SearchBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './explore-page.css';

export const ExplorePage = () => {
  const [serchTerm, setSearchTerm] = useState({ value: '' });
  return (
    <div className="page-container-explore">
      <h5>Search Bar</h5>
      <SearchBar type="text" onChange={(o) => setSearchTerm(o)} placeholder="Search ticker values..." />
      <TickerCard symbol="QQQ" name="" region="UK" currency="GDP" type="ETD" />
    </div>
  );
};
