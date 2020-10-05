import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import ProfileEdit from './ProfileEdit';
import './HomePage.css'
import { db, auth } from './../../firebase';


class Homepage extends React.Component {
    
    state = {
        mentor : null
           };     
   
    componentDidMount() {
        console.log('mounted') 
        db.collection('mentor')
        .get()
        .then( snapshot => {
         const mentor =[]
         snapshot.forEach( doc => {
             const data = doc.data()
             mentor.push(data)
         })
         this.setState({ mentor:mentor })
         console.log(snapshot)
        })
        .catch( error => console.log(error))
    }
    render(){   
         return (
        <div>
            <Navbar /> 
        <div className="flex-container" >
            <div className="photo">
                <img src="./../../../public/sendItOn.jpg" ></img>
                <p>Profile </p> <li><Link to={ProfileEdit}>Edit</Link></li>
            </div>

            <div className="homepage">
                <h1 style={{color:'blue'}}><em>Welcome</em></h1>              
                <p>{this.state.name}</p>
                <p>{this.state.category}</p>
                <p>{this.state.city},{this.state.country}</p>
            </div>

            <div>
                <h2>Volunteer Hours</h2>
                <Link to='/forgot-password' className="link" >Forgot password?</Link>
         <p>This week:{this.state.this_week}</p>
         <p>This Year:{this.state.this_year}</p>
         <p>Lifetime:{this.state.lifetime}</p>
            </div>
            
            </div>
            <Footer />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>  
        </div>
    )
    }
};
export default Homepage;