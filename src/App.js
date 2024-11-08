import React from 'react';
// { useState, useEffect }
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import NoPage from './pages/NoPage.js'
import Ratings from './components/Ratings.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/ratings' element={<Ratings />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>);
}

export default App;
