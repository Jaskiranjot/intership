import React, { Component } from 'react'
// import './SignupForm.css'


class SignupForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            cpassword: "",
            position: "",
            country: "",
            city: "",
            timezone: "",

        }
         this.handleSubmit=this.handleSubmit.bind(this) //to run in the call back function
         this.handleCancel=this.handleCancel.bind(this)
    }

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
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    cpasswordhandler = (event) => {
        this.setState({
            cpassword: event.target.value
        })
    } //add "alert", when password is not the same with the confirm password

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
        alert(`${this.state.firstName} ${this.state.lastName}, you have registered successfully!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: "",
            cpassword: "",
            position: "",
            country: "",
            city: "",
            timezone: "",
        })
     event.preventDefault()
        
    }

    handleCancel = (event) => {
        alert(`Go back to the login page.`)
        // console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
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
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Create an account</h1>
                    <label>First name</label><br />
                    <input type="text" value={this.state.firstName} onChange={this.firstNamehandler} placeholder="" /><br />
                    <label>Last name</label><br />
                    <input type="text" value={this.state.lastName} onChange={this.lastNamehandler} placeholder="" /><br />
                    <label>Password</label><br />
                    <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="" /><br />
                    <label>Confirm password</label><br />
                    <input type="password" value={this.state.cpassword} onChange={this.cpasswordhandler} placeholder="" /><br />

                    <label>Position you are applying for:</label><br />
                    <select onChange={this.positionhandler} defaultValue="Select position">
                        <option defaultValue>Select position</option>
                        <option value="Mentor">Mentor</option>
                        <option value="Representative">Representative</option>
                        <option value="Executive">Executive</option>
                    </select><br />
                    
                    <label>Country</label><br />
                    <select onChange={this.countryhandler} defaultValue="Select country">
                        <option defaultValue>Select country</option>
                        <option value="Canada">Canada</option>
                        <option value="United States">United States</option>
                        <option value="Korea">Korea</option>
                    </select><br />
                    <label>City</label><br />
                    <select onChange={this.cityhandler} defaultValue="Select city">
                        <option defaultValue>Select city</option>
                        <option value="Calgary">Calgary</option>
                        <option value="New York">New York</option>
                        <option value="Seoul">Seoul</option>
                    </select><br />
                    <label>Timezone</label><br />
                    <select onChange={this.timeZonehandler} defaultValue="Select timezone">
                        <option defaultValue>Select timezone</option>
                        <option value="Calgary">MDT (UTC -6) 3:00pm</option>
                        <option value="New York">EDT (UTC -4) 5:00pm</option>
                        <option value="Seoul">KST (UTC +9) 6:00am</option>
                    </select><br /><br />


                    <input type="submit" value="Submit" />
                    <input type="submit" value="Cancel" onClick={this.handleCancel} />
                </form>

            </div>
            
        )
    }
}

export default SignupForm