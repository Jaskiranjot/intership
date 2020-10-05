import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/HomePage';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Home />
      <Footer />
    </div>
  );
}

export default App;
