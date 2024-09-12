import React from 'react';
import Checkbox from '../ui/Checkbox';

const TaskList = () => {
  const tasks = [
    { id: 1, title: 'Complete dashboard layout', completed: true },
    { id: 2, title: 'Update user settings page', completed: false },
    { id: 3, title: 'Fix bugs in the authentication flow', completed: false },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Tasks</h3>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center space-x-4">
            <Checkbox checked={task.completed} />
            <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
