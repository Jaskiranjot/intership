import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import addDays from 'date-fns/addDays';
//import { useState } from "react";
import './Calendar.css';
//import * as firebase from 'firebase/app';
import 'firebase/firebase-database';
import 'firebase/firebase-firestore';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

class Calendar extends React.Component{
 constructor(props){
     super(props);
     this.state = {dateTime: new Date()};
      this.pickDatetime = this.pickDatetime.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);   
     
 }
 handleSubmit(event) {
   // alert('Your buttom is working: ' + this.state.computer + this.state.dateTime);
    //name:senditon
        var gapi = window.gapi
        var CLIENT_ID='675877687488-1vdgcqq4rfb54ij3e0h77k2ekvea4u7n.apps.googleusercontent.com'
        var API_KEY ='AIzaSyBDtELwvjbq8Rr3FNKKIprFOgjeksYF_UU'
        var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
        //var SCOPES = 'https://www.googleapis.com/auth/calendar.events'
        var SCOPES = 'https://www.googleapis.com/auth/calendar'
        
        gapi.load('client:auth2',()=>{
               console.log('loaded client')
            gapi.client.init({
              apiKey: API_KEY,
              clientId: CLIENT_ID,
              discoveryDocs: DISCOVERY_DOCS,
              scope: SCOPES
               })
               gapi.client.load('calendar', 'v3', () => console.log('bam!' +this.state.dateTime) )
               gapi.auth2.getAuthInstance().signIn()
               console.log('here')
               //Promise.resolve(gapi.auth2.getAuthInstance().signIn())
               //gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse()
               .then(()=>{
                 console.log('tehre')
                 var event = {
                  'summary': 'Google I/O 2015',
                  'location': '800 Howard St., San Francisco, CA 94103',
                  'description': 'A chance to hear more about Google\'s developer products.',
                  'start': {
                    'dateTime': '2020-09-28T09:00:00-07:00',
                    'timeZone': 'America/Los_Angeles'
                  },
                  'end': {
                    'dateTime': '2020-09-28T17:00:00-07:00',
                    'timeZone': 'America/Los_Angeles'
                  },
                  'recurrence': [
                    'RRULE:FREQ=DAILY;COUNT=2'
                  ],
                  'attendees': [
                    {'email': 'lpage@example.com'},
                    {'email': 'sbrin@example.com'}
                  ],
                  'reminders': {
                    'useDefault': false,
                    'overrides': [
                      {'method': 'email', 'minutes': 24 * 60},
                      {'method': 'popup', 'minutes': 10}
                    ]
                  }
                };
                
                var request = gapi.client.calendar.events.insert({
                  'calendarId': 'primary',
                  'resource': event
                });
                  //  var event = {
                  //      'summary': 'Send it On App',
                  //      'location': 'nowhere, Calgary, T2D2S4',
                  //      'description': 'volunteer hours' + this.state.computer,
                  //      'start': {
                  //        'dateTime': `${this.state.dateTime}`,
                  //        'timeZone': 'America/Edmonton'
                  //      },
                  //      'end': {
                  //        'dateTime': `${this.state.dateTime} + 30`,
                  //        'timeZone': "America/Edmonton"
                  //      },
                  //      'recurrence': [
                  //        //'RRULE:FREQ=DAILY;COUNT=2'
                  //      ],
                  //      'attendees': [
                  //       {'email': 'lpage@example.com'},
                  //       {'email': 'sbrin@example.com'}
                  //      ],
                  //      'reminders': {
                  //        'useDefault': false,
                  //        'overrides': [
                  //          {'method': 'email', 'minutes': 24 * 60},
                  //          {'method': 'popup', 'minutes': 10}
                  //        ]
                  //      }
                  //    };
                  //    var request = window.gapi.client.calendar.events.insert({
                  //      'calendarId': 'meganxu789@gmail.com',
                  //      'resource': event
                  //    });
                     
                     request.execute(function(event) {
                       //appendPre('Event created: ' + event.htmlLink);
                       window.open(event.htmlLink)
                     });
               })
           })

        this.setState({dateTime: new Date()});
    }    

pickDatetime(date) {this.setState({dateTime: date})}


render() {
    return (            
      <div>
                   
        <Navbar/>
        <div className = "container">          
           <div className = "row">                     
                <form className = "col-12 col-sm-12 col-md-4 form-group" onSubmit = {this.handleSubmit}>
                    <h2>Please select a computer and a time</h2>                
                    <h5 className ='selecttitle'>Pick a Computer:</h5>    
                 
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
        
                    />
                 
                    <div className = "Calendar-submit" >
                        <input type="submit" value="Submit"/>
                    </div> 
               
            </form>     
            
            {/* <iframe className = "col-12 col-sm-12 col-md-8" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FEdmonton&amp;showTitle=0&amp;showCalendars=1&amp;showTabs=1&amp;showPrint=0&amp;showDate=1&amp;mode=WEEK&amp;title=send%20it%20on&amp;src=bWVnYW54dTc4OUBnbWFpbC5jb20&amp;color=%235229A3" width="800" height="500" frameBorder="0" scrolling="no"></iframe>  */}


            {/* <iframe className = "col-12 col-sm-12 col-md-8" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FEdmonton&amp;src=ZG1zMTY4MjZjc2h1ZjA4bjNrc3E0cm5iZm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23B39DDB&amp;showDate=0&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=1&amp;showNav=1&amp;mode=WEEK&amp;showTitle=0&amp;title=send-it-on" width="800" height="500" frameBorder="0" scrolling="no"></iframe> */}




            </div> 
        </div>
        <Footer/>
        </div> 
        );
    }
}
export default Calendar;

  
