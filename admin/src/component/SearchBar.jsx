// SearchBar.jsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({placeholder}) => {
  return (
    <div className="flex items-center bg-neutral-600 rounded-md shadow-md p-2 max-w-md">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pr-10 py-1 outline-none bg-neutral-600"
      />
    </div>
  );
};

export default SearchBar;
