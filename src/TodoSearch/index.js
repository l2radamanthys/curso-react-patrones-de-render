import React from 'react';
import './TodoSearch.css';


function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <input
      placeholder="Search..."
      className="TodoSearch"
      value={searchValue}
      disabled={loading}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
