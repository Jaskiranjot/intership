import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import addDays from 'date-fns/addDays';
import './Calendar.css';
import {db} from "../firebase.js";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Pickcountry from './Pickcountry';

var gapi = window.gapi
 var CLIENT_ID=''
 var API_KEY =''
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"
 
  var userkey ='Jaskiran-Dhillon1601683758187'

//var userkey ='Megan-Xu1601510866653'
class Calendar extends Component{
 constructor(props){
     super(props);
     this.state = {computer:'Pick Computer', dateTime: new Date(),email: [],name:[],menteename:'',menteecountry:''};
     this.pickComputer = this.pickComputer.bind(this); 
     this.pickDatetime = this.pickDatetime.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);   
     this.parseDateTime = this.parseDateTime.bind(this); 
     this.updateInput = this.updateInput.bind(this);
 }
        
pickComputer(event) {this.setState({computer: event.target.value})}
pickDatetime(event) {this.setState({dateTime: event})}
updateInput (event) {
  this.setState({[event.target.name]: event.target.value});
  }  
  

  
parseDateTime(datetime){
   var datetime1 = new Date(Date.parse(datetime))
  var datetime2 =new Date(Date.parse(datetime)+1800000)
   var date1 = datetime1.getUTCFullYear()+'-'+(datetime1.getUTCMonth()+1)+'-' +datetime1.getUTCDate()+'T'+datetime1.getUTCHours()+':'+datetime1.getUTCMinutes()+':00-00:00'
  var date2 = datetime2.getUTCFullYear()+'-'+(datetime2.getUTCMonth()+1)+'-' +datetime2.getUTCDate()+'T'+datetime2.getUTCHours()+':'+datetime2.getUTCMinutes()+':00-00:00'
  return {date1:date1, date2:date2}
  }

  async componentDidMount() {
    try {
      const email = [];
      const name=[];
        db.collection('megantestfolder').doc(userkey)
        .get().then((doc) => {
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

 handleSubmit(event) {
    //this.setState({computer: "",dateTime: "", test: "",}) cannot set empty, why?
    event.preventDefault();
   db.collection('megantestfolder').doc(userkey).collection('VolunteerHours')
   .doc(`${Date.now()}`)
   .set({
    SNo:'',
    Datetime:`${this.state.dateTime}`,
    Computer:this.state.computer, 
    Mentee: this.state.menteename,
    MentorTime:'30 mins',
    MenteeCountry:this.state.menteecountry,
    Description:`You have booked ${this.state.computer} on ${this.state.dateTime}`
   });
//start api
   gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    gapi.client.load('calendar', 'v3', () => console.log('loaded client!'))
    gapi.auth2.getAuthInstance().signIn()
    .then(() => {

      var pickeddate1=this.parseDateTime(this.state.dateTime).date1
      var pickeddate2=this.parseDateTime(this.state.dateTime).date2

      console.log('pickeddate1:'+pickeddate1)
      console.log('pickeddate2:'+pickeddate2)
  
      var event = {
        'summary': 'Send It On',
        'location': `nowhere, calgary, T1R1Y1 `,
        'description': `${this.state.name} you have booked ${this.state.computer} on ${this.state.dateTime}`,
        'start': {
         //  '2020-10-03T04:07:58-13:00',
          'dateTime': pickeddate1,
          'timeZone': 'America/Edmonton'
        },
        'end': {
          'dateTime': pickeddate2,
          'timeZone': 'America/Edmonton'
        },
        'recurrence': [
          // 'RRULE:FREQ=DAILY;COUNT=2'
        ],
        'attendees': [
        {'email': `${this.state.email}`},
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
               var request = gapi.client.calendar.events.insert({
                 'calendarId': 'primary',
                 'resource': event,     
                 })
             request.execute(event => { console.log(event)})  // window.open(event.htmlLink)     
            })//then stop
        }) //end api 
    }    

render() {
    return (            
      <div>                  
        <Navbar/>
        <div className = "container">          
           <div className = "row">                     
                <form className = "col-12 col-sm-12 col-md-4 form-group" onSubmit = {this.handleSubmit}>
                    <h2>Please select a computer and a time</h2> 
                    <div id="bothname">                        
                        <input class="lastnamebox" type="text" name="lastname" onChange={this.updateInput} value={this.state.menteename} placeholder="Mentee's Name" required /><br />
                        <Pickcountry class="lastnamebox" type="text" name="lastname" onChange={this.updateInput} value={this.state.menteecountry} placeholder="Mentee's Country" required /><br />
                    </div>               
                    <h5 className ='selecttitle'>Pick a Computer:</h5>    
                    <select value = {this.state.value} name='computer' onChange = {this.pickComputer} > 
                        < option value = "Computer 1" > Pick Computer </option>           
                        < option value = "Computer 1" > Computer 1 </option> 
                        < option value = "Computer 2" > Computer 2 </option> 
                        < option value = "Computer 3" > Computer 3 </option> 
                    </select> 
                 
                    <h5 className ='datetimetitle'>Select a time:</h5>
                    <DatePicker
                        onChange={ this.pickDatetime }
                        selected={ this.state.dateTime }                        
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
            
            <iframe className = "col-12 col-sm-12 col-md-8" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FEdmonton&amp;src=bWVnYW54dTc4OUBnbWFpbC5jb20&amp;color=%237986CB&amp;showTitle=0&amp;showDate=1&amp;showPrint=1&amp;showTabs=0&amp;mode=WEEK&amp;showCalendars=1" width="730" height="500" frameBorder="0" scrolling="no"></iframe>
            </div> 
        </div>
        <Footer/>
        </div> 
        );
    }
}
export default Calendar;

  
// var ref = new Firebase("https://bu1691k7rvt.firebaseio-demo.com/");

// ref.createUserWithEmail("johndoe@gmail.com", "thisismypassword", function(error, userData){        //creates a user
//     if(error){
//         console.log("Account creation failed: " + error);     //user creation unsuccessful
//     } else{
//         console.log("Account creation succeeded!");     //user creation successful

//         ref.child('user').child(userData.uid).set({     //creates a child with the users firebase simplelogin
//             user: true,                                 //ID and stores the user's information
//             username: username,
//             email: email,
//             likes: {                //NOTE: It is highly reccomended that that user's password is not stored
//                 1: "dogs",          //in the JSON tree as Firebase does this already
//                 2: "pizza"
//             }
//         });

//     }
// });

// ref.loginWithEmail("johndoe@gmail.com", "thisismypassword", true, function(authData){      //logs in a user
//     var userRef = ref.child('user').child(authData.uid);      //access the users information from JSON tree
//     userRef.once('value', function(snapshot){
//         console.log(snapshot.val().username.val);      //prints out the users email which was stored in the JSON tree
//     });

// });


//ref.logout();      //logs user out