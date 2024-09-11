import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Shop from './Components/pages/Shop';
// import NewArrivals from './NewArrivals';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import MainPage from './Components/MainPage';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/new-arrivals" element={<NewArrivals />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

  );
};

export default App;
