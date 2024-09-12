// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router';  // Ensure this path is correct based on your project structure
import './index.css';  // Import Tailwind CSS and any other global styles

// Create a root and render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
