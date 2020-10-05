import React from 'react';
import { Link } from 'react-router-dom';
import ExampleComponentThatReadsDataFromFirebase from './ExampleComponentThatReadsDataFromFirebase';

function Home() {
  return (
    <div className="App">
      SEND IT ON
     
       {/*<Link to='./Components/Pages/HomePage'>Home</Link>
      <Link to='./Components/Pages/Resources'>Resources</Link>
      <Link to='./Components/Pages/Opportunity'>Opportunity</Link>
      <Link to='./Components/Pages/ProfileEdit'>ProfileEdit</Link>
      <Link to='./Components/Pages/Hours'>Hours</Link> */}
      <ExampleComponentThatReadsDataFromFirebase />
    </div>
  );
}

export default Home;