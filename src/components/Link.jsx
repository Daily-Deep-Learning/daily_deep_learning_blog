import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from './Utils';

const Link = ({ link }) => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    window.open(link.link_url, '_blank');  // Opens the link in a new tab
  };

  return (
    <div className="mt-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {link.link_title}
        </h5>
        <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        {formatDate(link.link_date)}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <a href={link.link_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Visit link
          </a>
        </p>
      </div>
    </div>
  );
};

export default Link;
