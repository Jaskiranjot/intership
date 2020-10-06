import React from 'react';
import ExampleComponentThatReadsDataFromFirebase from './ExampleComponentThatReadsDataFromFirebase';

import SignupForm from '../components/Sign Up/SignupForm';
import SignupMessage from '../components/Sign Up/SignupMessage';

function Home() {
  return (
    <div className="App">

      <SignupForm />
      {/* <SignupMessage /> */}
      {/* SEND IT ON
      <ExampleComponentThatReadsDataFromFirebase /> */}
    </div>
  );
}

export default Home;