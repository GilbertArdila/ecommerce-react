import React from 'react';
import './index.css';

const Searcher = ({ handleSearch, searchInput, search }) => {
    return (
      <input
        type="text"
        className="Searcher"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        placeholder={'buscar...'}
      />
    );
  };
export  {Searcher}