import React from 'react';
import Table from './Table';

const InvoiceList = () => {
  const columns = ['Invoice ID', 'Client', 'Amount', 'Status', 'Date'];
  const data = [
    { id: 1, client: 'John Doe', amount: '$500', status: 'Paid', date: '2024-09-10' },
    { id: 2, client: 'Jane Smith', amount: '$300', status: 'Pending', date: '2024-09-09' },
    { id: 3, client: 'Michael Brown', amount: '$450', status: 'Paid', date: '2024-09-08' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Invoices</h3>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default InvoiceList;
