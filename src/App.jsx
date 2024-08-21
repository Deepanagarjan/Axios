import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Navbar from './Components/Navbar';
import Edit from './Components/Edit';
import Create from './Components/Create';
import Footer from './Components/Footer';


const App = () => {
  const[id,setId]=useState(0)
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products setId={setId} />} />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  );
};

export default App;