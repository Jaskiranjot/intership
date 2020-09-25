import React, {Component} from 'react';

import './Maincontent.css';

class Maincontent extends Component {
    
    render() {
        return(
            <div className = "Fetch-data">
                <div className="Picture-icon">
                    <img src=""></img>
                </div>               
                <div className="Welcome-name"> 
                 <h1>Welcome</h1>
                 <p>name</p>
                 <p>Basic Info</p>
                 </div>
                <div className="Volunteer-data">
                    <h1>Volunteer Hours</h1>      
                    <ul>
                        <li>This Week:</li>
                        <li>This Year:</li>
                        <li>Lifetime:</li>
                    </ul>            
                    </div>
            </div>
        )
    }
}

export default 'Maincontent';