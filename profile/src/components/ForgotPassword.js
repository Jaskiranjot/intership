import React from 'react';
import {Link} from 'react-router-dom';


const ForgotPassword = () => {
    const buttonText = { text: 'Send email'};
    const labelText = { email: 'Email'};
    return (
        <div>
            <div className="forgot-password">
                <h2>Forgot password?</h2>
                <p>Enter your email and we will send you a link to reset your password</p>
                <div className="form-field">
                    <label className="label" htmlFor="email">{labelText.email}</label>
                    <input id='email' type='email' placeholder="example@gmail.com"/>
                </div>
                <div> 
                    <button>{buttonText.text}</button>
                </div> 
                    <Link to='/change-password'>Change Password</Link>
                </div>
            </div>);
            };
    

export default ForgotPassword;