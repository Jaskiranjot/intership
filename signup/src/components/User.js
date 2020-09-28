//this is the test file to store the input to the firestore database
//nice tutorial: https://medium.com/get-it-working/get-googles-firestore-working-with-react-c78f198d2364 

import React, { Component } from 'react';
import  { db }  from '../firebase';

class User extends Component {

    constructor() {
        super();
        //create our initial 'empty' state
        this.state = {
            fullname: "",
            email: "",
         
        };
      }

    //set our component state, when a user enters data into the form for both input fields
    //it is connected to onChange={this.updateInput}
    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    //send data to our Firestore database. We’ll use an arrow function to avoid having to 'bind' this to the function in the constructor / if that doesn’t make sense, read this (https://reactjs.org/docs/faq-functions.html#why-is-binding-necessary-at-all)
    addUser = e => {
        e.preventDefault(); 
        // const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });

        const userRef = db.collection("test-jiyoung").add({
          fullname: this.state.fullname,
          email: this.state.email,
          booking: {
              number: {
                computer: "",
                datetime: ""
              }
            }
        });  
        
        //create collection within the one ID's of collection/documents
        // const userRef = db.collection("test-jiyoung/0jLkY02G6KkKc4PauKdc/sub01").add({
        //    });  

        this.setState({
          fullname: "",
          email: ""
        });
      };
      //1. preventDefault() method stops the page from refreshing (it’s default behaviour)
      //With firebase.firestore() we’re initialising Firestore through firebase and saving to a variable
      //timestampsinSnapshots: true without this, we get a warning in the console, which tells us the timestamps stored in Firestore will be read back as timestamp objects, as opposed to system date objects
      //db.collection(“users”) is simply pointing to our database; the collection we created called users
      //.add() method is submitting our data object with the users full name and email taken from our updated state
      //2. After the user submits the form, the state is updated to an empty string to remove the user input across both fields

    render() {
        return (
            //call a function which does the magic when the form is submitted: onSubmit={this.addUser}
            <form onSubmit={this.addUser}> 
            <input
                type="text"
                name="fullname"
                placeholder="Full name"
                onChange={this.updateInput}
                value={this.state.fullname} //assign the data (in state) to our object value which get’s passed into Firestore
            />
            <input
                type="email"
                name="email"
                placeholder="Email address"
                onChange={this.updateInput}
                value={this.state.email}
            />
            <button type="submit">Submit</button>
            </form>
            );
        }
    }

export default User;