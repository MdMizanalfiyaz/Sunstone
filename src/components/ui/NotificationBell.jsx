import React from 'react';

const NotificationBell = () => {
  return (
    <div className="relative">
      <button className="p-2 rounded-full hover:bg-gray-200 focus:outline-none">
        <svg
          className="w-6 h-6 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.403-2.807A2.992 2.992 0 0016 14V9a4 4 0 00-4-4V4a2 2 0 00-4 0v1a4 4 0 00-4 4v5a2.992 2.992 0 00-.597 1.193L3 17h5m6 0a3 3 0 01-6 0" />
        </svg>
      </button>
      <span className="absolute top-0 right-0 block w-3 h-3 bg-red-600 rounded-full"></span>
    </div>
  );
};

export default NotificationBell;
