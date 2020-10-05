import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Resources.css';

class Resources extends React.Component {
  render(){
    return (
        <div>
        <Navbar />
        <h1 ><em>Resources</em></h1>
        <p><em>Susan True</em></p>
        <p><em>Total Hours:</em></p>
        
        <div className="flex-container">
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
  }
}; 

export default Resources;