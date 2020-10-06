import React, { Component } from 'react';
import { db } from '../firebase';

class ExampleComponentThatReadsDataFromFirebase extends Component {
  constructor() {
    super();
    this.state = {
      exampleData: []
    };
  }
  async componentDidMount() {
    // See https://firebase.google.com/docs/firestore/query-data/get-data
    try {
      const exampleData = [];
      db.collection('test-collection')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            exampleData.push(data.name);
          });
          this.setState({
            /* sets this.state.exampleData to the exampleData local variable
                it's equivalent to exampleData: exampleData
                but both of our variables have the same name so we can use this shorthand */
            exampleData,
          });
        });      
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        { this.state.exampleData }
      </div>
    );
  }
}

// below, I have provided another implementation as a function component that does the same thing

export default ExampleComponentThatReadsDataFromFirebase;