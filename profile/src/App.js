import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Maincontent from './components/Maincontent/Maincontent';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
