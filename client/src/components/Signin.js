import React from 'react';
import {Link} from 'react-router-dom';

const Signin = () => {
    const buttonText = { text: 'Sign in'};
    const labelText = { email: 'Email', password: 'Password'};
    return (
        <div className="sign-in">
            <h2>Sign in</h2>
        <div className="form-field">
            <label className="label" htmlFor="email">{labelText.email}</label>
            <input id='email' type='email' placeholder="example@gmail.com"/>
        </div>
        <div className="form-field">    
            <label className='label' htmlFor='password'>{labelText.password}</label>
            <input id='password' type='password'/>
        </div>
        <div className="link">
            <Link to='/forgot-password' className="link" >Forgot password?</Link>
        </div>
        <div> 
            <button>{buttonText.text}</button>
        </div>  
        <div id='create-account' className='link'>
            <Link to='create-account' className='link'>Create an account</Link>
        </div>
      </div>  
    )
};


export default Signin;