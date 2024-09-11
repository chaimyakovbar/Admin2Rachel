import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './Components/MainPage';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/new-arrivals" element={<NewArrivals />} /> */}
      </Routes>
    </Router>

  );
};

export default App;
