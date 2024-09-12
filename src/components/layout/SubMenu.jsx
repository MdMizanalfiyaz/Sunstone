// src/components/layout/SubMenu.jsx
import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { NavLink as RouterNavLink } from 'react-router-dom';

const SubMenu = ({ icon: Icon, label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2">
      <button
        onClick={toggleSubMenu}
        className="flex items-center w-full p-3 rounded-lg text-gray-700 font-medium transition-colors duration-200 hover:bg-indigo-100"
      >
        <Icon className="w-6 h-6 mr-3" />
        {label}
        {isOpen ? (
          <FiChevronDown className="ml-auto" />
        ) : (
          <FiChevronRight className="ml-auto" />
        )}
      </button>
      {isOpen && (
        <div className="pl-10 mt-2">
          {items.map((item, index) => (
            <RouterNavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `block p-2 rounded-lg text-gray-700 transition-colors duration-200 hover:bg-indigo-100 ${
                  isActive ? 'bg-indigo-100 text-indigo-600' : ''
                }`
              }
            >
              {item.label}
            </RouterNavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubMenu;
