import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ posts, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const fuse = new Fuse(posts, {
    keys: ['post_name', 'post_desc'],
    includeScore: true,
    threshold: 0.4,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const results = fuse.search(searchTerm).map(result => result.item);
      onSearch(results, searchTerm);
    } else {
      // If search term is empty, reset to all posts
      onSearch(null, '');
    }
    navigate('/all-posts');
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search posts..."
      />
      <button type="submit" className="absolute right-2 top-2 text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;