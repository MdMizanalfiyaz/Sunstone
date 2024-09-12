import React from 'react';
import StatCard from './StatCard';
import Chart from './Chart';
import ActivityFeed from './ActivityFeed';

const DashboardOverview = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Revenue" value="$12,345" />
        <StatCard title="Users" value="1,234" />
        <StatCard title="Tasks" value="56" />
        <StatCard title="Invoices" value="789" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart title="Monthly Sales" />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardOverview;




// import React from 'react';
// import StatCard from '../components/dashboard/StatCard';
// import { FaUsers, FaDollarSign, FaChartLine } from 'react-icons/fa';

// const DashboardPage = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       <StatCard title="Total Users" value="1,234" icon={<FaUsers />} />
//       <StatCard title="Revenue" value="$45,678" icon={<FaDollarSign />} />
//       <StatCard title="Growth Rate" value="12%" icon={<FaChartLine />} />
//     </div>
//   );
// };

// export default DashboardPage;

