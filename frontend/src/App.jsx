import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Pages/NavBar';
import ImageSlider from './Pages/ImageSlider';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<ImageSlider />} />
      </Routes>
    </Router>
  );
};

export default App;
