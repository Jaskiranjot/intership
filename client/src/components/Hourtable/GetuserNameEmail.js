import React, { Component } from 'react';
import dbref from '../Firebaseref.js'

class GetuserNameEmail extends Component{
constructor() {
  super();
  this.state = {
    email:[],name:[],position:[]
  };
}
async componentDidMount() {
  try {
    const email = [];
    const name=[];
    const position=[];

    dbref().get().then((doc) => {      
        if (doc.exists) {
          const data = doc.data();
          email.push(data.email);
          name.push(data.firstname+' '+data.lastname);
          position.push(data.position);
        };
        this.setState({email,name,position});
      });      
  } catch (error) {
    console.error(error);
  }
}
render() {
  return (
    <div>
      <h6>Name: { this.state.name }</h6>
      <h6>Position: { this.state.position }</h6>
     <h6>Email: { this.state.email }</h6>
    </div>
  );
}
}
export default GetuserNameEmail;

