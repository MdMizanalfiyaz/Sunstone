import React from 'react';
import Chart from '../components/dashboard/Chart'; // Example chart component
import Table from '../components/dashboard/Table'; // Example table component

const ReportsPage = () => {
  // Example data, replace with actual data fetching
  const reportData = [
    { id: 1, name: 'Report A', status: 'Completed', date: '2024-09-01' },
    { id: 2, name: 'Report B', status: 'In Progress', date: '2024-09-05' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Reports</h1>
      <div className="mb-6">
        <Chart />
      </div>
      <Table data={reportData} />
    </div>
  );
};

export default ReportsPage;
