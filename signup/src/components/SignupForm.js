import React, { Component } from 'react'
import './SignupForm.css'


class SignupForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            cpassword: "",
            position: "",
            country: "",
            city: "",
            timezone: "",

        }
        //  this.handleSubmit=this.handleSubmit.bind(this) //to run in the call back function
        //  this.handleCancel=this.handleCancel.bind(this)
    }

//handle fields change

    firstNamehandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    lastNamehandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    cpasswordhandler = (event) => {
        // if (event.target.value  !== this.state.password) {
        //     alert(`Your password doesn't match.`);
            this.setState({
                cpassword: event.target.value
            })
        }
    // } //add "alert", when password is not the same with the confirm password

    positionhandler = (event) => {
        this.setState({
            position: event.target.value
        })
    }

    countryhandler = (event) => {
        this.setState({
            country: event.target.value
        })
    }

    cityhandler = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    timeZonehandler = (event) => {
        this.setState({
            timezone: event.target.value
        })
    }

    handleSubmit = (event) => {
        const { password, cpassword } = this.state;
        if (password === cpassword) {
            alert(`${this.state.firstName} ${this.state.lastName}, you have registered successfully!!`)
            console.log(this.state);  
            
            this.setState({  //clear the form input
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                cpassword: "",
                position: "",
                country: "",
                city: "",
                timezone: "",
            })
        } else {
            alert("Your passwords don't match. Please match your passwords and confirm passwords");
        } 
    event.preventDefault()
                 
    }


    handleCancel = (event) => {
        // window.location.href = "./SignupMessage.js";
        alert(`Go back to the login page.`)
        // console.log(this.state);
        this.setState({  //clear the form input
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            cpassword: "",
            position: "",
            country: "",
            city: "",
            timezone: "",
        })
     event.preventDefault()
        
    }


    render() {
        return (
            <div class="main">

                <form onSubmit={this.handleSubmit}>
                    <h1>Create an account</h1>
                    <div id="bothname">
                        <label class="firstname">First name</label><br />
                        <input class="firstnamebox" type="text" value={this.state.firstName} onChange={this.firstNamehandler} required /><br />
                        <label class="lastname">Last name</label><br />
                        <input class="lastnamebox" type="text" value={this.state.lastName} onChange={this.lastNamehandler} required /><br />
                    </div>
                    <label class="name">Email address</label><br />
                    {/* <i class="far fa-envelope icon" style={{color:"grey"}} aria-hidden="true"></i> */}
                    <input type="text" value={this.state.email} onChange={this.emailhandler} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="abc123@gmail.com" /><br />
                    <label class="name">Password</label><br />
                    <input type="password" value={this.state.password} onChange={this.passwordhandler} required pattern=".{6,}" title="six or more characters" /><br />
                    <label class="name">Confirm password</label><br />
                    <input type="password" value={this.state.cpassword} onChange={this.cpasswordhandler} required pattern=".{6,}" title="six or more characters" /><br />

                    <label class="name">Position you are applying for:</label><br />
                    <select onChange={this.positionhandler} value={this.state.position} required>
                        <option defaultValue></option>
                        <option value="Mentor">Mentor</option>
                        <option value="Representative">Representative</option>
                        <option value="Executive">Executive</option>
                    </select><br />
                    
                    <div id="threeselect">
                        <label class="countryname">Country</label><br />
                        <select class="countrybox" onChange={this.countryhandler} value={this.state.country} required>
                            <option defaultValue></option>
                            <option value="Canada">Canada</option>
                            <option value="United States">United States</option>
                            <option value="Korea">Korea</option>
                        </select><br />
                        <label class="cityname">City</label><br />
                        <select class="citybox" onChange={this.cityhandler} value={this.state.city} required>
                            <option defaultValue></option>
                            <option value="Calgary">Calgary</option>
                            <option value="New York">New York</option>
                            <option value="Seoul">Seoul</option>
                        </select><br />
                        <label class="timezonename">Timezone</label><br />
                        <select class="timezonebox" onChange={this.timeZonehandler} value={this.state.timezone}required>
                            <option defaultValue></option>
                            <option value="Calgary">MDT(UTC -6) 3:00pm</option>
                            <option value="New York">EDT(UTC -4) 5:00pm</option>
                            <option value="Seoul">KST(UTC +9) 6:00am</option>
                        </select><br /><br />
                    </div>

                    <input class="btnsignup" type="submit" value="Sign up" />
                    <input class="btncancel" type="submit" value="Cancel" onClick={this.handleCancel} />
                </form>

            </div>
            
        )
    }
}

export default SignupForm