import React from 'react';

const ActivityFeed = () => {
  const activities = [
    { id: 1, text: 'User John Doe added a new task', time: '2 hours ago' },
    { id: 2, text: 'Invoice #1234 was paid', time: '3 hours ago' },
    { id: 3, text: 'New user registered', time: '5 hours ago' },
    // Add more activities as needed
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Activity Feed</h3>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-center">
            <div className="flex-shrink-0 w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
            <div className="ml-3 text-gray-700">
              <p className="text-sm">{activity.text}</p>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
