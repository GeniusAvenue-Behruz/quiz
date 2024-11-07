import React from 'react';
// { useState, useEffect }
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import NoPage from './pages/NoPage.js'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>);
}

export default App;
