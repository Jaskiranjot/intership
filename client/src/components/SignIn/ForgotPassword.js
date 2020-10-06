import React,  { useState} from 'react';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase';
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
        // var actionCodeSettings = {
        //     // After password reset, the user will be give the ability to go back
        //     // to this page.
        //     url: 'https://www.send-it-on.com/aboutus.html#',
        //     handleCodeInApp: false
        //   };

        auth.sendPasswordResetEmail(email) //, actionCodeSettings)
        .then(() => {
            setEmailHasBeenSent(true);
           
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
                      alert('An email has been sent to you!')
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
                <div className='link'>
                    <Link to='/signin' className='link'>Back to sign in</Link>
                </div> 
                </div>
                <Footer />
         </div>)}


export default ForgotPassword;