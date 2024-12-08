import React from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export function HomeButton() {
  return (
    <Link 
      to="/" 
      className="fixed top-4 left-4 p-2 bg-white hover:bg-gray-100 rounded-full transition-colors shadow-md"
      aria-label="Go to home page"
    >
      <HomeIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
    </Link>
  );
} 