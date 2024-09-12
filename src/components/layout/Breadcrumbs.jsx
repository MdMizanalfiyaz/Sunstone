// src/components/layout/Breadcrumbs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className="text-gray-600 text-sm">
      {crumbs.map((crumb, index) => (
        <span key={index}>
          <Link to={crumb.path} className="hover:text-indigo-600">
            {crumb.label}
          </Link>
          {index < crumbs.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
