// import React from 'react';
// import DashboardOverview from '../components/dashboard/DashboardOverview';
// import StatCard from '../components/dashboard/StatCard';
// import Chart from '../components/dashboard/Chart';
// import ActivityFeed from '../components/dashboard/ActivityFeed';
// import CalendarWidget from '../components/dashboard/CalendarWidget';

// const DashboardPage = () => {
//   // Example data, replace with actual data fetching
//   const stats = [
//     { label: 'Total Sales', value: '$12,345' },
//     { label: 'New Users', value: '123' },
//     { label: 'Revenue', value: '$1,234' },
//   ];

//   return (
//     <div className="p-6">
//       <DashboardOverview />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//         {stats.map((stat, index) => (
//           <StatCard key={index} label={stat.label} value={stat.value} />
//         ))}
//       </div>
//       <div className="mt-6">
//         <Chart />
//       </div>
//       <div className="mt-6">
//         <ActivityFeed />
//       </div>
//       <div className="mt-6">
//         <CalendarWidget />
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;



import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import { FaUsers, FaDollarSign, FaChartLine } from 'react-icons/fa';

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard title="Total Users" value="1,234" icon={<FaUsers />} />
      <StatCard title="Revenue" value="$45,678" icon={<FaDollarSign />} />
      <StatCard title="Growth Rate" value="12%" icon={<FaChartLine />} />
    </div>
  );
};

export default DashboardPage;
