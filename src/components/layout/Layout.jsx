// src/components/layout/Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>Header</header>
      <nav>Sidebar</nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

