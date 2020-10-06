import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetuserNameEmail from './GetuserNameEmail'
import Navbar from '../Navbarinner/Navbarinner';
import Footer from '../Footer/Footer';
import './Hourtable.css';
import dbref from '../Firebaseref.js'

//var userkey ='Megan-Xu1601510866653'
class Hourtable extends React.Component{
  constructor(props){
    super(props);
    this.state = {hours:[],totalhours:'' }
  }
  renderTableHeader() {
    let header = ['SNo.','Date','Computer_Use','Mentee','Mentor_Time','Mentee_Country','Description']
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }
  renderTableData() {
    var hours =[]
    //db.collection('megantestfolder').doc(userkey)'asc' or 'desc'.
    dbref().collection('VolunteerHours').get().then((Snapshot) => {
      if (!Snapshot.empty) {
        var totalhours =Snapshot.size/2
        Snapshot.forEach((doc) => {
          hours.push(doc.data())
        })//snap
      }else{
          hours =[0]
    }
    this.setState({hours,totalhours,})
  })
  return this.state.hours.map((hour, index) => {
    var {Datetime,Computer,Mentee,MentorTime,MenteeCountry,Description} = hour;

    return( 
      <tr key={index}>
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

  render() {
    return (            
      <div class='hourtable'>                   
        <Navbar/>
        <div className="table">
            <div className="header">            
                <h2 > Hisory of Volunteering Hours </h2>
            </div>
            <div><GetuserNameEmail className="userinfo"/>
            <h5>Total Hours: {this.state.totalhours} </h5></div>
            <table className="" id="tableID">                
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
export default Hourtable;