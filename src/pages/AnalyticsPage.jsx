import React from 'react';
import PieChart from '../components/data-visualization/PieChart'; // Example pie chart component
import BarChart from '../components/data-visualization/BarChart'; // Example bar chart component
import LineChart from '../components/data-visualization/LineChart'; // Example line chart component

const AnalyticsPage = () => {
  // Example data, replace with actual data fetching
  const pieData = { labels: ['A', 'B', 'C'], values: [30, 40, 30] };
  const barData = { labels: ['Jan', 'Feb', 'Mar'], values: [50, 60, 70] };
  const lineData = { labels: ['Week 1', 'Week 2', 'Week 3'], values: [100, 200, 300] };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PieChart data={pieData} />
        <BarChart data={barData} />
        <LineChart data={lineData} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
