import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        {/* Thêm các route khác nếu cần */}
      </Routes>
    </Router>
  );
};

export default AppRouter;

