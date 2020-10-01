import React, { Component } from 'react'
import  { auth, db }  from '../firebase';
import './SignupForm.css'
// import { MdStar } from "react-icons/md";
import SignHeader from './SignHeader';
import Footer from './Footer';

// import { signupAuth } from '../auth';
// import { Link } from 'react-router-dom';


class SignupForm extends Component {
    constructor() {
        super()
        
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
            position: "",
            country: "",
            city: "",
            timezone: ""
        }
        //  this.handleSubmit=this.handleSubmit.bind(this) //to run in the call back function
        //  this.handleCancel=this.handleCancel.bind(this)
    }


//handle input fields change
updateInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
}


//hadle submit button
handleSubmit = (event) => {
    const { password, confirmpassword } = this.state;
    if (password === confirmpassword) {
        alert(`${this.state.firstname} ${this.state.lastname}, you have registered successfully!!`)
        //should change the page to the SignupMessage page
        console.log(this.state);  
                    
        this.setState({  //clear the form input
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
            position: "",
            country: "",
            city: "",
            timezone: ""
        })

        event.preventDefault();
        //add to firebase authentication
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u);
          }).catch((err) => {
            console.log(err);
          })
        
        // const signupAuth = auth().createUserWithEmailAndPassword(email, password);
        // const { email, password } = this.state;   
        // auth().createUserWithEmailAndPassword(this.state.email, this.state.password); 
        // alert(1);
        // const { email, password } = this.state;
        // auth.createUserWithEmailAndPassword(email, password);
        // alert(2);

        //store the data(user input) to firebase firestore
        db.settings({
            timestampsInSnapshots: true
        });
        //const userRef = db.collection("users").add({
        const userRef = db.collection("users").doc((this.state.firstname)+`-`+(this.state.lastname)+Date.now()).set({    
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            confirmpassword: this.state.confirmpassword,
            position: this.state.position,
            country: this.state.country,
            city: this.state.city,
            timezone: this.state.timezone,
            datesignup: new Date(),
            datenow: Date.now(),
            calendar: {
                computer: "",
                datetime: ""
            },
            history: {
                    number: "",
                    date: "",
                    mentortime: "",
                    mentee: "",
                    menteecountry: "",
                    discription: ""
            },
            voluteerhour: {
                week: "",
                year: "",
                lifetime: ""
            } 
        });

    } else {
        alert("Your passwords don't match. Please match your passwords and confirm passwords.");
    } 
}


//handle cancel button
handleCancel = (event) => {
    // window.location.href = "./SignupMessage.js";
    alert(`Delete the form that you have entered.`)
    // console.log(this.state);
    this.setState({  //clear the form input
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        position: "",
        country: "",
        city: "",
        timezone: "",
    })
    
    event.preventDefault()
}


    render() {
        return (
            <div>
            <SignHeader />
            <div class="main">

                <form onSubmit={this.handleSubmit}>
                    <h1>Create an account</h1>
                    <div id="bothname">
                        <label class="firstname">First name</label><br />
                        <input class="firstnamebox" type="text" name="firstname" onChange={this.updateInput} value={this.state.firstname} required /><br />
                        <label class="lastname">Last name</label><br />
                        <input class="lastnamebox" type="text" name="lastname" onChange={this.updateInput} value={this.state.lastname} required /><br />
                    </div>
                    <label class="name">Email address</label><br />
                    {/* <i class="far fa-envelope icon" style={{color:"grey"}} aria-hidden="true"></i> */}
                    <input type="text" name="email" onChange={this.updateInput} value={this.state.email} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="abc123@gmail.com" /><br />
                    <label class="name">Password</label><br />
                    <input type="password" name="password" onChange={this.updateInput} value={this.state.password} required pattern=".{6,}" title="six or more characters" /><br />
                    <label class="name">Confirm password</label><br />
                    <input type="password" name="confirmpassword" onChange={this.updateInput} value={this.state.confirmpassword} required pattern=".{6,}" title="six or more characters" /><br />

                    <label class="name">Position you are applying for:</label><br />
                    <select name="position" onChange={this.updateInput} value={this.state.position} required>
                        <option defaultValue></option>
                        <option>Mentor</option>
                        <option>Representative</option>
                        <option>Executive</option>
                    </select><br />
                    
                    <div id="threeselect">
                        <label class="countryname">Country</label><br />
                        <select class="countrybox" name="country" onChange={this.updateInput} value={this.state.country} required>
                            <option defaultValue></option>
                            <option>Canada</option>
                            <option>United States</option>
                            <option>Korea</option>
                        </select><br />
                        <label class="cityname">City</label><br />
                        <select class="citybox" name="city" onChange={this.updateInput} value={this.state.city} required>
                            <option defaultValue></option>
                            <option>Calgary</option>
                            <option>New York</option>
                            <option>Seoul</option>
                        </select><br />
                        <label class="timezonename">Timezone</label><br />
                        <select class="timezonebox" name="timezone" onChange={this.updateInput} value={this.state.timezone}required>
                            <option defaultValue></option>
                            <option>MDT(UTC -6) 3:00pm</option>
                            <option>EDT(UTC -4) 5:00pm</option>
                            <option>KST(UTC +9) 6:00am</option>
                        </select><br /><br />
                    </div>

                    <button class="btnsignup">Sign up</button>
                    <button class="btncancel" onClick={this.handleCancel}>Cancel</button>

                </form>

            </div>
            <Footer />
            </div>
            
        )
    }
}

export default SignupForm