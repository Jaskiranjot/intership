import React from 'react';

import './Calendar.css';
import * as firebase from 'firebase/app';
import 'firebase/firebase-database';
import 'firebase/firebase-firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAuigC_Z7OtT7hUCJPoax_-30B01vx2570",
  authDomain: "send-it-on.firebaseapp.com",
  databaseURL: "https://send-it-on.firebaseio.com",
  projectId: "send-it-on",
  storageBucket: "send-it-on.appspot.com",
  messagingSenderId: "306099219422",
  appId: "1:306099219422:web:57c5c8a6ac525991898b4f"
};
// Initialize Firebase
const fireBase = firebase.initializeApp(firebaseConfig);
class Calendar extends React.Component{
    constructor() {
        super();
        this.state = {user:[]};   
        
      }
    //   toString() {
    //     return this.firstname + ', ' + this.email + ', ' + this.lastname;
    // }


// Firestore data converter
// convertUserinfo () {
//      (snapshot, options)=>{
//         const data = snapshot.data(options);
//         return new User(data.name, data.email)
//     }
// }
async componentDidMount() {
  try {
    var user = [];
    firebase.firestore().collection('users')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach((doc) => {          
          var users = doc.data();
          console.log(users.firstname) 
         if(users.firstname==='Jenna'){
          user.push({email:users.email});         
          user.push({name:`${users.firstname} ${users.lastname}`});
          //console.log("Document data:", doc.data());
         // console.log('to string'+users.firstname)
          console.log(user) 
this.setState({user: this.state.user});  
          }else{console.log('usernothere')}
           console.log(user)
          //this.setState({user,}); 
        });
        console.log(user)
      //  this.setState({user:this.state.user});  
        // }       
      });      
  } catch (error) {
    console.error(error);
  }
}


render() {
  //let items= this.state.user
    return (
      <ul>
       {/* Name: { this.componentDidMount( )} */}
       Email: { this.state.user.name}
  {/* {     items.map((val, index) => {
          return (
            <li key={index}>
              { val }
            </li>
          );
        })} */}
      </ul>
    );
  }

}
export default Calendar;

