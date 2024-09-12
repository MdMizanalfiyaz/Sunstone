// src/components/layout/NavLink.jsx
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

const NavLink = ({ to, icon: Icon, label }) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-3 my-2 rounded-lg text-gray-700 font-medium transition-colors duration-200 hover:bg-indigo-100 ${
          isActive ? 'bg-indigo-100 text-indigo-600' : ''
        }`
      }
    >
      <Icon className="w-6 h-6 mr-3" />
      {label}
    </RouterNavLink>
  );
};

export default NavLink;
