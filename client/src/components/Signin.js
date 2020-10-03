import React from 'react';
import {Link} from 'react-router-dom';
import SignHeader from './SignHeader';
import Footer from './Footer';
import { auth, db } from "../firebase";

class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: ''
        };
    }

    updateInput = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const buttonText = { text: 'Sign in'};
        const labelText = { email: 'Email', password: 'Password'};

        const setError = (error) => {
            this.setState({'error': error});
        }

        const signInWithEmailAndPasswordHandler = (event) => {
            const email = this.state.email
            const password = this.state.password;
            event.preventDefault();
            auth.signInWithEmailAndPassword(email, password).then((a, b, c) => {
                debugger;
            }).catch(error => {
            setError("Error signing in with password and email!");
              console.error("Error signing in with password and email", error);
              setError(error.message)
            });
            // this.setState({'email': ''});
            // this.setState({'password': ''});
        };

        return ( 
            <div>
                <SignHeader />      
                <div className="sign-in">
                        <h2>Sign in</h2>
                    <div className="form-field">
                        <label className="label" htmlFor="email">{labelText.email}</label>
                        <input 
                            id='email' 
                            type='email' 
                            name='email' 
                            placeholder="example@gmail.com" 
                            onChange={this.updateInput}
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-field">    
                        <label className='label' htmlFor='password'>{labelText.password}</label>
                        <input 
                            id='password' 
                            type='password' 
                            name='password' 
                            onChange={this.updateInput}
                            value={this.state.password}
                        />
                    </div>
                    <div className="link">
                        <Link to='/forgot-password' className="link" >Forgot password?</Link>
                    </div>
                    <div className="user-not-found">
                        <h5>{this.state.error}</h5>
                    </div>
                    <div> 
                        <button onClick = {(event) => {signInWithEmailAndPasswordHandler(event)}}>{buttonText.text}</button>
                    </div>  
                    <div id='create-account' className='link'>
                        <Link to='create-account' className='link'>Create an account</Link>
                    </div> 
                </div>
                <Footer />  
            </div>     
        )
    }
};


export default Signin;