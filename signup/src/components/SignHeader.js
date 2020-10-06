import React, {Component} from 'react';
// import {MenuItems} from './MenuItems';
import logo from './sendItOn.jpg'; 
import './SignHeader.css';

class SignHeader extends Component {
    state = { clicked: false }

    handleclick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav className="NavbarItems">
                <img src={logo} />
                <h1 className="navbar-logo">Send It On<i className="fab fa-react"></i>
                </h1>
            <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                {/* <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className= {MenuItems.cName} href = {item.url}>
                                {item.title}
                                </a>
                            </li>
                        )   
                    })}                    
                </ul> */}
            </nav>
        )
    }
}

export default SignHeader;