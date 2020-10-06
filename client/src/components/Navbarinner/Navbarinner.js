import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import './Navbarinner.css';

class Navbarinner extends React.Component {  
     state = { clicked: false }  
    handleclick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <div>
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">Send It On<i className="fab fa-react"></i></h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/" exact>Profile</NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/Calendar">Opportunity</NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/Resources">Resources</NavLink>             
                        <NavLink className="navbar-item" activeClassName="is-active" to="/Hourtable">Hours</NavLink>    
                    </ul>                
                </nav>
            </div>
        )
    }
}

export default Navbarinner;