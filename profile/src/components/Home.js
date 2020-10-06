import React from 'react';
import ExampleComponentThatReadsDataFromFirebase from './ExampleComponentThatReadsDataFromFirebase';

function Home() {
  return (
    <div className="App">
      SEND IT ON
      <ExampleComponentThatReadsDataFromFirebase />
    </div>
  );
}

export default Home;