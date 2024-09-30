import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
