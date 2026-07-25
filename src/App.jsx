import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KisLandingPage from './pages/HomePage';
import { KisAboutPage } from './pages/AboutPage';
import { LifeAtKisPage } from './pages/LifeAtKisPage';
import { KisEnrollPage } from './pages/EnrollPage';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<KisLandingPage />} />
        <Route path="/about" element={<KisAboutPage />} />
        <Route path="/life-at-kis" element={<LifeAtKisPage />} />
        <Route path="/enroll" element={<KisEnrollPage />} />
      </Routes>
    </div>
  );
};

export default App;
