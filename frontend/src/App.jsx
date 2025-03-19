import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Pages/NavBar';
import ImageSlider from './Pages/ImageSlider';
import Footer from './Pages/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/home' element={<ImageSlider/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
