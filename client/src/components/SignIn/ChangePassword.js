import React from 'react';
import {Link} from 'react-router-dom';
import SignHeader from './SignHeader';
import Footer from '../Footer';


const ChangePassword = () => {
    const buttonText = { text: 'Change password'};
    const labelText = { create:'Create new password', confirm: 'Confirm new password'};
    return (
        <div>
            <SignHeader />
            <div className="change-password">
                <h2>Change password</h2>
            <div className="form-field">
                <label className="label" htmlFor="create">{labelText.create}</label>
                <input id='pwd' type='password'/> 
            </div>
            <div className="form-field">    
                <label className='label' htmlFor='confirm'>{labelText.confirm}</label>
                <input id='pwd' type='password'/>
            </div>
            <div> 
                <button>{buttonText.text}</button>
            </div> 
                <div className='back-to-sign-in'>        
                    <Link to="/signin">Back to Sign in</Link> 
                </div>
            </div> 
            <Footer />
        </div> 
    )};

export default ChangePassword;