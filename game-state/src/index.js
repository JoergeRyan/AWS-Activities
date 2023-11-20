import ReactDOM from 'react-dom/client';
import Button from './button';
import App from './App';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Note the change here
import Menu from './Menu';
import './Menu.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <div>
      <Menu />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/button" element={<Button />} />
        <Route path="/App" element={<App />} />
      </Routes>
    </div>
  </Router>
);
