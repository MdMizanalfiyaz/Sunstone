import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // If you are using React Router for navigation

const UserList = ({ users }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold">User List</h3>
      </div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50"
          >
            <div className="flex items-center space-x-4">
              <img
                src={user.avatarUrl || 'https://via.placeholder.com/40'}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            <Link
              to={`/users/${user.id}`} // Navigate to the user's detail page
              className="text-blue-600 hover:underline"
            >
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string, // Optional avatar URL
    })
  ).isRequired,
};

export default UserList;
