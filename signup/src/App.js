import React from 'react';
import logo from './logo.svg';
// import './App.css';
import SignupForm from './components/SignupForm'
import SignupMessage from './components/SignupMessage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/Navbar.css';
import './components/Footer.css';


function App() {
  return (

    <div className="App">

      <Navbar />
      <SignupForm />
      {/* <SignupMessage /> */}
      <Footer />
     
    </div>

  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
