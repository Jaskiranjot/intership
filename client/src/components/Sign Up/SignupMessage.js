import React, { Component } from 'react';
import './SignupMessage.css';
import { Link } from 'react-router-dom';

import SignHeader from './SignHeader';
import Footer from './Footer';
//add a router to link to the other pages, home and signin
//send a two kinds of email: 
////one for the user to verify email and 
////another one for the admin to confirm the person to join as a quilified memtor - maybe admin just receive the brief info(user) email (using Zapier if new database/user is created) and add it to the firebase athentication herself, it might be easier?


class SignupMessage extends Component {
    
    render() {
        return (
            <div>
            <SignHeader />

                <div className="message">
                    <h2>Thank you, you have signed up successfully!</h2>
                    <h2>Please check your email to verify your email address.</h2>
                </div>
                <div className="link">
                    <Link to="/home"><h3>Go back to home</h3></Link>
                    <Link to="/signin"><h3>Go back to signin</h3></Link>
                </div>

            <Footer />    
            </div>
            
        )
    }
}

export default SignupMessage;