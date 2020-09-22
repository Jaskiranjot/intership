import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import addDays from 'date-fns/addDays'
import './Calendar.css';
import * as firebase from 'firebase/app';
import 'firebase/firebase-database';
import 'firebase/firebase-firestore';
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
// Initialize Firebase
const fireBase = firebase.initializeApp(firebaseConfig);

class Calendar extends React.Component{
 constructor(props){
     super(props);
     this.state = {computer:'Pick Computer', dateTime: new Date()};
     this.pickComputer = this.pickComputer.bind(this);
      this.pickDatetime = this.pickDatetime.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);   
 }
 handleSubmit(event) {
    alert('Your buttom is working: ' + this.state.computer + this.state.dateTime);
    event.preventDefault();
        firebase.firestore().collection('megantestfolder').add({
        Computer:this.state.computer, 
        Datetime:`${this.state.dateTime}`,
        Time:'test',
        Test:'123'
        })
        this.setState({computer: 'Pick Computer'});
        this.setState({dateTime: new Date()});
    }    

pickComputer(event){
    this.setState({computer: event.target.value})
}

pickDatetime(date) {this.setState({dateTime: date})}

render() {
    return (             
        <div className = "container">          
           <div className = "row">                     
                <form className = "col-4 form-group" onSubmit = {this.handleSubmit}>
                    <h2>Please select a computer and a time</h2>                
                    <h5>Pick a Computer:</h5>    
                    <select value = {this.state.value} onChange = {this.pickComputer}> 
                        < option value = "Computer 1" > Pick Computer </option>           
                        < option value = "Computer 1" > Computer 1 </option> 
                        < option value = "Computer 2" > Computer 2 </option> 
                        < option value = "Computer 3" > Computer 3 </option> 
                    </select> 
                 
                    <h5>Select a time:</h5>
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
            
            <iframe className = "col-8" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FEdmonton&amp;showTitle=0&amp;showCalendars=1&amp;showTabs=1&amp;showPrint=0&amp;showDate=1&amp;mode=WEEK&amp;title=send%20it%20on&amp;src=bWVnYW54dTc4OUBnbWFpbC5jb20&amp;color=%237986CB" width="800" height="500" frameBorder="0" scrolling="no"></iframe>                       
            </div> 
        </div>

        );
    }
}
export default Calendar;

  
