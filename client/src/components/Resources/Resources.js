import React from 'react';
import Navbar from '../Navbarinner/Navbarinner';
import Footer from '../Footer/Footer';
import './Resources.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Resources = () => {
    return (
        <div className="resources">
        <Navbar />
         <h1><em>Resources</em></h1>
        <h1><em>Susan True</em></h1>
        <h1><em>Total Hours:</em></h1>
        
        <div className="flex-container" >
        <table id="resources" >
            <tr>
              <th>Topic</th>
              <th>Pdf</th>
              <th>Videoes</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </table>
          </div>
          <Footer />
           </div>
    )
}; 

export default Resources