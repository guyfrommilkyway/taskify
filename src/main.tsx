// packages
import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App.tsx';

// assets
import '@/assets/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
