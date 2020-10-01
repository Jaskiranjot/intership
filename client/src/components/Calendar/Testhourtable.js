import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetuserNameEmail from '../Calendar/GetuserNameEmail'
import db from "../firebase.js";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
var userkey ='Megan-Xu1601510866653'
class Testhourtable extends React.Component{
  constructor(props){
      super(props);
      this.state = {hours:[{'SNo.':'', Date: '', Computer: '', Mentee: '','Mentor Time':'',"Mentee's Country":'', Description: ''}] }
  }
 
renderTableData() {
    var hours =[]
db.collection('megantestfolder').doc(userkey).collection('Data')
.get().then((Snapshot) => {
  Snapshot.forEach((doc) => {
    hours.push(doc.data())
    console.log(hours)

  })//snap
  this.setState({hours,})
})
           return     this.state.hours.map((hour, index) => {
                  var {Computer,Mentee,MentorTime,MenteeCountry,Description} = hour;

                  return( <tr key={index}>
                     <td>{index}</td>
                      <td>{`${hour.Datetime}`}</td>
                      <td>{hour.Computer}</td>
                      <td>{hour.Mentee}</td>
                      <td>{hour.MentorTime}</td>                   
                      <td>{hour.MenteeCountry}</td>
                      <td>{hour.Description}</td>
                   </tr>)
                })
             
 }

  renderTableHeader() {
   let header = Object.keys(this.state.hours[0])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
 }
render() {
    return (            
      <div>
                   
        <Navbar/>

        <div className="">
            <div className="header">            
                <h3 > Hisory of Volunteering Hours </h3>

            </div>
            <div><GetuserNameEmail>Name: {this.state.name}</GetuserNameEmail><h5>Total Hours: {this.state.totalhour}</h5></div>
            <table id="tableID" className="">                           
                
                <tbody>  
                <tr>{this.renderTableHeader()}</tr>  
                {this.renderTableData()}
                </tbody>
            </table>
        </div>
        <Footer/>
        </div> 
        );
    }
}
export default Testhourtable;