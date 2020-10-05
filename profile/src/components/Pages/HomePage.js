/* import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default () => {
    return (
        <div>
             <Navbar /> 
        <div className="flex-container" style="display: flex; align-items: stretch; justify-content: space-around;">
            <div className="photo">
                <img src="./../public/sendItOn.jpg" style= " height: 50px; width= 35px"></img>
                <p>Profile </p><a href="#">Edit</a>
            </div>

            <div className="homepage">
                <h1 style="color:blue;"><em>Welcome</em></h1>              
                <p>Susan True</p>
                <p>Environmentalist</p>
                <p>Calgary</p>
            </div>

            <div>
                <h2>Volunter Hours</h2>
                <p>This week:</p>
                <p>This Year:</p>
                <p>Lifetime:</p>
            </div>
            </div>
            <Footer />
           </div>
    )
};