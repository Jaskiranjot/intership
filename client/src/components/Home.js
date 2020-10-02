import React from 'react';
import ExampleComponentThatReadsDataFromFirebase from './ExampleComponentThatReadsDataFromFirebase';

import SignupForm from './SignupForm';

function Home() {
  return (
    <div className="App">

      <SignupForm />
      {/* SEND IT ON
      <ExampleComponentThatReadsDataFromFirebase /> */}
    </div>
  );
}

export default Home;