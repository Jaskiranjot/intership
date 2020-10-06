import React from 'react';
//import {FaFacebook, FaInstagram} from '@fortawesome/react-fontawesome';

import './Footer.css';

class Footer extends React.Component {

render(){
  return (
    <div className='footer-container'>               
        
           <div className='bottom-text'>
                <p className="contact">Contact Us</p>
                </div> 
            <div className="social-icons">
  <a href="https://www.instagram.com/senditon.international/?fbclid=IwAR1VaYUQ7m8Jh1P09vnLxdFF8XKHCJ-X8kBPS6dSLVIbFG4E6aDMNh4tuzk"><i class="fa fa-instagram"></i></a>  
                <a href="https://www.facebook.com/int.senditon/?modal=admin_todo_tour"><i class="fa fa-facebook"></i></a> 
            </div>          
          </div>
       )
  }
};

export default Footer;