import React from 'react';
import Link from './Link';

const Signin = () => {
        const buttonText = { text: 'Sign in'};
        const labelText = { email: 'Email', password: 'Password'};
    return (
        <div className="sign-in">
                <h1>Sign in</h1>
                <div className="form-field">
                    <label className="label" htmlFor="email">{labelText.email}</label>
                    <input id='email' type='email' placeholder="example@gmail.com"/>
                </div>
                <div className="form-field">    
                    <label className='label' htmlFor='password'>{labelText.password}</label>
                    <input id='password' />
                </div>
                <div className='forgot-password'>
                <Link href='/forgotpassword' className="forgorpassword">Forgot password?</Link>
                </div>
                <div className='create-account'>
                    <Link href='create-account'>Create an account</Link>
                </div>
                <div> 
                    <button>{buttonText.text}</button>
                </div>  
      </div>  
    )
};

export default Signin;