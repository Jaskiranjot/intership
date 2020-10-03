import React from 'react';

import './Calendar.css';
import db from "../firebase.js";

class GetuserNameEmail extends React.Component{
constructor() {
  super();
  this.state = {
    email: [],name:[]
  };
}
async componentDidMount() {
  try {
    const email = [];
    const name=[];
    var userkey ='Megan-Xu1601510866653'
         db.collection('megantestfolder').doc(userkey)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          email.push(data.email);
          name.push(data.firstname+' '+data.lastname)
        };
        this.setState({email,name});
      });      
  } catch (error) {
    console.error(error);
  }
}
render() {
  return (
    <div>
      <h5>Name: { this.state.name }</h5>
     <h5>Email: { this.state.email }</h5>
    </div>
  );
}
}
export default GetuserNameEmail;

