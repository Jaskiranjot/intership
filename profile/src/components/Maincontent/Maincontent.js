import React, {Component} from 'react';

import './Maincontent.css';

class Maincontent extends Component {
    
    render() {
        return(
            <row className = "Fetch-data">
                <col className="Picture-icon">
                    <img src=""></img>
                </col>               
                 <col className="Welcome-name"></col>
                <col className="Volunteer-data"></col>                  
            </row>
        )
    }
}

export default 'Maincontent';