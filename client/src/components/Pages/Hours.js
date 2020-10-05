import React, { createElement } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
//import { db } from './../../firebase';
//Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuigC_Z7OtT7hUCJPoax_-30B01vx2570',
  authDomain: 'send-it-on.firebaseapp.com',
  databaseURL: 'https://send-it-on.firebaseio.com',
  projectId: 'send-it-on',
  storageBucket: 'send-it-on.appspot.com',
  messagingSenderId: '306099219422',
  appId: '1:306099219422:web:57c5c8a6ac525991898b4f'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
database = firebase.database();

// Refernece contactInfo collections
var ref = firebase.database().ref("users");

// get value of data
function gotData(data) {

  console.log(data.val());
  var users = data.val();
  var keys = object.keys(users);
  console.log(keys);
// for entries 
for(var i=0; i< keys.length; i++) {
  var k = keys[i];
  // code to retrieve data 
  
}

}
function errData(err) {
  console.log('Error!');
  console.log(err);
}


// Hourhistory table class
class Hourtable extends React.Component{
  constructor(){
  
    this.state = {fname: '',
                  lname: '',
                  city: '',
                  country: '',
                  mentee: '',
                  mcountry: '',
                  date: '',
                  time: '',
                  description: '',
                week: '',
              year:'',
            lifetime:''}] }
}



// table content
render() {
  return (
    <div>
      <Navbar/>
      <div className="">
         {/*// mentor name is diplayed*/}
        <h5>Mentor: {this.state.lname}-{this.state.fname}</h5>
        <div className="header">
          <h3> History of Volunteering Hours </h3>
        </div>
         {/*// volunteer hours are displayed*/}
        <div>        
          <h5>This week: {this.state.week}</h5>
          <h5>This Year: {this.state.year}</h5>
          <h5>Lifetime: {this.state.lifetime}</h5>
          </div>
           {/*// table is created*/}
         <table className="table table-hover table-bordered">
                                <thead>
                                   {/*// header has following options*/}
                                <tr>
                                    <th scope="col"><center>SNo.</center></th>
                                    <th scope="col"><center>Date</center></th>
                                    <th scope="col"><center>Time</center></th>
                                    <th scope="col">Mentee</th>
                                    <th scope="col">Mentee's country</th>
                                    <th scope="col">Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                   {/*Rendering data into columns*/}
                                    {this.state.data.map(function(item, key) {
                                        return (
                                            <tr key = {key} >
                                                <td>{i+1}</td>
                                                <td><center>{this.state.date}</center></td>
                                                <td><center>{this.state.time}</center></td>
                                                <td>{this.state.mentee}</td>
                                                <td>{this.state.mcountry}</td>
                                                <td>{this.state.description}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table> 
      
          
        </div>
        <Footer/>
        </div> 
        );
    }
}
export default Hourtable;
