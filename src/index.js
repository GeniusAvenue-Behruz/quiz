import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Nabar';
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div class="container mx-auto mt-8">
      <div class="bg-[#F3FAFA] p-8 rounded shadow">
        <App />
      </div>
    </div>

    <Footer />
  </React.StrictMode>
);

reportWebVitals(console.log());
