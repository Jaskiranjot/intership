import React from 'react';
import {FaFacebook, FaInstagram} from "react-icons/fa"
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>     
      <div className='footer-links'>       
        
           <div className='bottom-text'>
               <p>Opportunties</p>
               <div className="break"></div>
                <p>Contact Us</p>
                </div>
                <div className="social-icons">
                <li><a href="https://wwww.intsagram.com"><FaInstagram></FaInstagram></a></li>
                <li><a href="https://www.facebook.com"><FaFacebook></FaFacebook></a></li>
            </div>           
          </div>
        </div>
 );
}

export default Footer;
