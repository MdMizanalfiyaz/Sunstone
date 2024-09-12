import React from 'react';

const Chart = ({ title }) => {
  // This is a placeholder for your chart. You can use libraries like Chart.js, Recharts, etc.
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-64 bg-gray-200 rounded-lg">
        {/* Insert your chart here */}
      </div>
    </div>
  );
};

export default Chart;
