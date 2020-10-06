import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {MenuItems} from './MenuItems';
import './Navbar.css';
import {image} from './../../components/sendItOn.jpg'

class Navbar extends Component {
    state = { clicked: false }

    handleclick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav className="NavbarItems">
                <p className="navbar-logo">
                <img src ='{image}'></img><i className="logo"></i></p>
                <p>Send It On</p>                  
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className= {MenuItems.cName} href = {item.url}>
                                {item.title}
                                </a>
                            </li>
                        )   
                    })}                    
                </ul>
                <Link to="/Signin.js">
                <p color="white" className="primary-btn">
                  <span>Logout</span>
                </p>
              </Link>
            </nav >
        )
    }
}

export default Navbar;