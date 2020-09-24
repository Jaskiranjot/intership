import React from 'react';
import {FaFacebook, FaInstagram} from "react-icons/fa"
import './Footer.css';

//import {FaFacebook, FaInstagram} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>     
      <div className='footer-links'>       
        
           <div className='social-icons'>
               <p>Opportunties</p>
               <div className="break"></div>
                <p>Contact Us</p>
                <FaInstagram></FaInstagram>
                <FaFacebook></FaFacebook>
            </div>           
          </div>
        </div>
 );
}

export default Footer;
