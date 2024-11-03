/**
 * @file 	    SearchBar.tsx
 * @brief	    search bar component
 * @author      Tom Aston
 * @version     1.0
 * @copyright   tomaston.dev
 */

import React, { useEffect, useRef, useState } from 'react';
import './search-bar.css';

export type SearchBoxOption = {
  value: string;
};

export type SearchBoxProps = {
  type: string;
  onChange: (value: SearchBoxOption) => void;
  placeholder?: string;
};

export default function SearchBar({ type, onChange, placeholder }: SearchBoxProps) {
  const [searchInput, setSearchInput] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const clearSearch = () => {
    setSearchInput('');
  };

  useEffect(() => {
    onChange({ value: searchInput });
  }, [searchInput]);

  return (
    <div ref={containerRef} id="searchbox-container">
      <span className="dropdown-value">
        <input id="searchbox-input" type={type} placeholder={placeholder} onChange={handleChange} value={searchInput} />
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearSearch();
        }}
        id="searchbox-clear-button"
      >
        &times;
      </button>
    </div>
  );
}
