import React,  { useState} from 'react';
import {Link} from 'react-router-dom';
import { auth } from '../firebase';
import SignHeader from './SignHeader';
import Footer from './Footer';


const ForgotPassword = () => {

    const buttonText = { text: 'Send email'};
    const labelText = { email: 'Email'};

    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);

    const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

        if (name === "userEmail") {
            setEmail(value);
          }
        };

    const sendResetEmail = event => {
        event.preventDefault();
        auth
        .sendPasswordResetEmail(email)
        .then(() => {
            setEmailHasBeenSent(true);
            setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
            })
            .catch(() => {
                setError("Error resetting password");
            });
    };    
    return (
        <div>
            <SignHeader /> 
            <div className="forgot-password">
                <h2>Forgot password?</h2>
                <h4>Enter your email and we will send you a link to reset your password</h4>
                <div className="form-field">
                {emailHasBeenSent && (
                    <div>
                    An email has been sent to you!
                    </div>
                )}
                {error !== null && (
                    <div>
                    {error}
                    </div>
                )}
                    <label id='email' type='email' className="label" htmlFor="email">{labelText.email}</label>
                    <input 
                    type= 'email'
                    name="userEmail"
                    value={email} 
                    placeholder="example@gmail.com" 
                    onChange={onChangeHandler} />
                </div>
                <div> 
                    <button onClick={event => {sendResetEmail(event)}}>{buttonText.text}</button>
                </div> 
                    <Link to='/signin'>Back to sign in</Link>
                </div>
                <Footer />
         </div>)}


export default ForgotPassword;