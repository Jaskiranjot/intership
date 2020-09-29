import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import addDays from 'date-fns/addDays';
//import { useState } from "react";
import './Calendar.css';
import * as firebase from 'firebase/app';
import 'firebase/firebase-database';
import 'firebase/firebase-firestore';
//import db from "../firebase.js";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAuigC_Z7OtT7hUCJPoax_-30B01vx2570",
  authDomain: "send-it-on.firebaseapp.com",
  databaseURL: "https://send-it-on.firebaseio.com",
  projectId: "send-it-on",
  storageBucket: "send-it-on.appspot.com",
  messagingSenderId: "306099219422",
  appId: "1:306099219422:web:57c5c8a6ac525991898b4f"
};
 //Initialize Firebase key senstive
const fireBase = firebase.initializeApp(firebaseConfig);
var gapi = window.gapi
 var CLIENT_ID='   '
 var API_KEY ='   '
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"


class Calendar extends React.Component{
 constructor(props){
     super(props);
     this.state = {computer:'Pick Computer', dateTime: new Date(),getuserinfo:''};
     this.pickComputer = this.pickComputer.bind(this); 
     this.pickDatetime = this.pickDatetime.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);   
     this.parseDateTime = this.parseDateTime.bind(this); 
 }
 
parseDateTime(datetime){
  var datetime2 =new Date(Date.parse(datetime)+1800000)
   var date1 = datetime.getUTCFullYear()+'-'+((datetime.getUTCMonth())>8?(datetime.getUTCMonth()):('0'+(datetime.getUTCMonth()+1))+'-' +datetime.getUTCDate())+'T'+datetime.getUTCHours()+':'+datetime.getUTCMinutes()+':00-00:00'
  var date2 = datetime2.getUTCFullYear()+'-'+((datetime2.getUTCMonth())>8?(datetime2.getUTCMonth()):('0'+(datetime2.getUTCMonth()+1))+'-' +datetime2.getUTCDate())+'T'+datetime2.getUTCHours()+':'+datetime2.getUTCMinutes()+':00-00:00'
  return {date1:date1, date2:date2}
  }
  
 


 handleSubmit(event) {
   // alert('Your buttom is working: ' + this.state.computer + this.state.dateTime);
   event.preventDefault();
   //event.persist();
   firebase.firestore().collection('megantestfolder').add({
   Computer:this.state.computer, 
   Datetime:`${this.state.dateTime}`,
   Time:this.state.dateTime,
   Datetimeparse:Date.parse(this.state.dateTime)
   });
   
//start api
   gapi.load('client:auth2', () => {
    console.log('loaded client')

    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })

    gapi.client.load('calendar', 'v3', () => console.log('loaded client!'))

    gapi.auth2.getAuthInstance().signIn()
    .then(() => {

//.orderBy("name").limit(1)
 firebase.firestore().collection('users').limit(1)
.get().then((Snapshot) => {
  Snapshot.forEach((doc) => {
   var user =doc.data();   
   var userEmail =user.email;
   var userName =user.firstname +' '+ user.lastname;
   console.log('this is'+userEmail +userName )
   
var pickeddate1=this.parseDateTime(this.state.dateTime).date1
var pickeddate2=this.parseDateTime(this.state.dateTime).date2

 //  console.log('pickeddate1:'+pickeddate1)
 //  console.log('pickeddate2:'+pickeddate2)
  
      var event = {
        'summary': 'Send It On',
        'location': `nowhere, calgary, T1R1Y1 ${this.userName}`,
        'description': `${userName}You have booked ${this.state.computer} on ${this.state.dateTime}`,
        'start': {
         // 'dateTime': '2020-10-03T04:07:58-13:00',
          'dateTime': pickeddate1,
          'timeZone': 'America/Edmonton'
        },
        'end': {
          //'dateTime': '2020-10-03T04:07:58-13:00',
          'dateTime': pickeddate2,
          'timeZone': 'America/Edmonton'
        // 'timeZone':"Mountain Time (USA and Canada)"
        },
        'recurrence': [
          // 'RRULE:FREQ=DAILY;COUNT=2'
        ],
        'attendees': [
        {'email': userEmail}
          // {'email': 'sbrin@example.com'}
        ],
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 10}
          ]
        }
      } //var event stop
    })
  }) //firebase get stop
      var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event,
      })

      request.execute(event => {
        console.log(event)
       // window.open(event.htmlLink)
      })


    })
  }) //end api


        this.setState({computer: 'Pick Computer'});
        this.setState({dateTime: new Date()});
    }    





pickComputer(event){this.setState({computer: event.target.value})}
pickDatetime(event) {this.setState({dateTime: event})}
  
render() {
    return (            
      <div>
                   
        <Navbar/>
        <div className = "container">          
           <div className = "row">                     
                <form className = "col-12 col-sm-12 col-md-4 form-group" onSubmit = {this.handleSubmit}>
                    <h2>Please select a computer and a time</h2>                
                    <h5 className ='selecttitle'>Pick a Computer:</h5>    
                    <select value = {this.state.value} onChange = {this.pickComputer}> 
                        < option value = "Computer 1" > Pick Computer </option>           
                        < option value = "Computer 1" > Computer 1 </option> 
                        < option value = "Computer 2" > Computer 2 </option> 
                        < option value = "Computer 3" > Computer 3 </option> 
                    </select> 
                 
                    <h5 className ='datetimetitle'>Select a time:</h5>
                    <DatePicker
                        selected={ this.state.dateTime }
                        onChange={ this.pickDatetime }
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={30}
                        timeCaption="time"
                        dateFormat="MMM d, yyyy h:mm aa"
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 777)}
                        timeMin= {(new Date()).toISOString()}
                    />                 
                    <div className = "Calendar-submit" >
                        <input type="submit" value="Submit"/>
                    </div>                
            </form>     
            

            <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FEdmonton&amp;src=bWVnYW54dTc4OUBnbWFpbC5jb20&amp;color=%237986CB&amp;showTitle=0&amp;showDate=1&amp;showPrint=1&amp;showTabs=0&amp;mode=WEEK&amp;showCalendars=1" width="730" height="500" frameBorder="0" scrolling="no"></iframe>

            {/* <iframe className = "col-12 col-sm-12 col-md-8" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FEdmonton&amp;src=ZG1zMTY4MjZjc2h1ZjA4bjNrc3E0cm5iZm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23B39DDB&amp;showDate=0&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=1&amp;showNav=1&amp;mode=WEEK&amp;showTitle=0&amp;title=send-it-on" width="800" height="500" frameBorder="0" scrolling="no"></iframe> */}


            </div> 
        </div>
        <Footer/>
        </div> 
        );
    }
}
export default Calendar;

  
