// src/components/layout/Sidebar.jsx
import React from 'react';
import { FiHome, FiBarChart2, FiFileText, FiSettings } from 'react-icons/fi';
import NavLink from './NavLink';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col">
      <div className="p-6 text-center text-indigo-600 text-2xl font-bold">
        Sunstone App
      </div>
      <nav className="flex-1 p-4">
        <NavLink to="/" icon={FiHome} label="Dashboard" />
        <NavLink to="/analytics" icon={FiBarChart2} label="Analytics" />
        <NavLink to="/reports" icon={FiFileText} label="Reports" />
        <NavLink to="/settings" icon={FiSettings} label="Settings" />
      </nav>
    </aside>
  );
};

export default Sidebar;
