import React from 'react';

const EmptyState = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-gray-500">
      <svg
        className="w-16 h-16 mb-4 text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01m-6 1a9 9 0 0118 0H6z" />
      </svg>
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default EmptyState;
