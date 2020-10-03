import React from 'react';
import { auth } from '../firebase';

const MyProfile = () => {
    return (
    <div>
        <h1>Profile Page</h1>
         <button 
            type="button" 
            onClick={() => {auth.signOut()}}> Sign Out
        </button> 
    </div>)
};

export default MyProfile;