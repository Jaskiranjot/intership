import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  { auth, db }  from '../../firebase';
import './SignupForm.css';
// import { MdStar } from "react-icons/md";
import SignHeader from './SignHeader';
import Footer from './Footer';
import './SignupMessage.js';




class SignupForm extends Component {
    constructor() {
        super()
        
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
            position: "",
            country: "",
            state: "",
            city: "",
            timezone: ""
        }
        //  this.handleSubmit=this.handleSubmit.bind(this) //to run in the call back function
        //  this.handleCancel=this.handleCancel.bind(this)
    }


//handle input fields change
updateInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
}


//hadle submit button
handleSubmit = (event) => {
    const { password, confirmpassword } = this.state;
    if (password === confirmpassword) {
        alert(`${this.state.firstname} ${this.state.lastname}, you have registered successfully!!`)
        // window.location.href = "./SignupMessage.js";
        // window.location.replace("./SignupMessage.js");
        //should change the page to the SignupMessage page
        console.log(this.state);  
                          
        this.setState({  //clear the form input
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
            position: "",
            country: "",
            state: "",
            city: "",
            timezone: ""
        })

        event.preventDefault();
        //add the user's email and password to firebase authentication
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u);
          }).catch((err) => {
            console.log(err);
          })
 
        //store the user's all data(user input) to firebase firestore
        db.settings({
            timestampsInSnapshots: true
        });
        //const userRef = db.collection("users").add({
        const userRef = db.collection("users").doc((this.state.firstname)+`-`+(this.state.lastname)+Date.now()).set({    
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password, //delete this for confidential
            confirmpassword: this.state.confirmpassword, //delete this for confidential
            position: this.state.position,
            country: this.state.country,
            state: this.state.state,
            city: this.state.city,
            timezone: this.state.timezone,
            datesignup: new Date(),
            datenow: Date.now()
        });

    } else {
        alert("Your passwords don't match. Please match your passwords and confirm passwords.");
    } 
}


//handle cancel button
handleCancel = (event) => {
    // window.location.href = "./SignupMessage.js";
    alert(`Delete the form that you have entered.`)
    // console.log(this.state);
    this.setState({  //clear the form input
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        position: "",
        country: "",
        state: "",
        city: "",
        timezone: "",
    })
    
    event.preventDefault()
}


    render() {
        return (
            <div>
            <SignHeader />
              <div className="main">

                <form onSubmit={this.handleSubmit}>
                    <h1>Create an account</h1>
                    <div id="bothname">
                        <label className="firstname">First name</label><br />
                        <input className="firstnamebox" type="text" name="firstname" onChange={this.updateInput} value={this.state.firstname} required /><br />
                        <label className="lastname">Last name</label><br />
                        <input className="lastnamebox" type="text" name="lastname" onChange={this.updateInput} value={this.state.lastname} required /><br />
                    </div>
                    <label className="name">Email address</label><br />
                    {/* <i class="far fa-envelope icon" style={{color:"grey"}} aria-hidden="true"></i> */}
                    <input type="text" name="email" onChange={this.updateInput} value={this.state.email} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="abc123@gmail.com" /><br />
                    <label className="name">Password</label><br />
                    <input type="password" name="password" onChange={this.updateInput} value={this.state.password} required pattern=".{6,}" title="six or more characters" /><br />
                    <label className="name">Confirm password</label><br />
                    <input type="password" name="confirmpassword" onChange={this.updateInput} value={this.state.confirmpassword} required pattern=".{6,}" title="six or more characters" /><br />

                    <label className="name">Position you are applying for:</label><br />
                    <select name="position" className="positions" onChange={this.updateInput} value={this.state.position} required>
                        <option defaultValue></option>
                        <option>Mentor</option>
                        <option>Representative</option>
                        <option>Executive</option>
                    </select><br />
                    
                    <div id="threedropdowns">
                        <label className="countryname">Country</label><br />
                        <select name="country" className="countries" id="countryId" onChange={this.updateInput} value={this.state.country} required>
                            <option value="">Select Country</option>
                        </select><br />
                        <label className="statename">State</label><br />
                        <select name="state" className="states" id="stateId" onChange={this.updateInput} value={this.state.state} required>
                            <option value="">Select State</option>
                        </select><br />
                        <label className="cityname">City</label><br />
                        <select name="city" className="cities" id="cityId" onChange={this.updateInput} value={this.state.city} required>
                            <option value="">Select City</option>
                        </select><br />
                                           
                    </div>

                    <label className="timezonename">Timezone</label><br />
                        <select className="timezonebox" name="timezone" onChange={this.updateInput} value={this.state.timezone}required>
                            <option value="">Select Timezone</option>
                            <option timezoneid="1" gmtadjustment="GMT-12:00" usedaylighttime="0" value="-12">(GMT-12:00) International Date Line West</option>
                            <option timezoneid="2" gmtadjustment="GMT-11:00" usedaylighttime="0" value="-11">(GMT-11:00) Midway Island, Samoa</option>
                            <option timezoneid="3" gmtadjustment="GMT-10:00" usedaylighttime="0" value="-10">(GMT-10:00) Hawaii</option>
                            <option timezoneid="4" gmtadjustment="GMT-09:00" usedaylighttime="1" value="-9">(GMT-09:00) Alaska</option>
                            <option timezoneid="5" gmtadjustment="GMT-08:00" usedaylighttime="1" value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
                            <option timezoneid="6" gmtadjustment="GMT-08:00" usedaylighttime="1" value="-8">(GMT-08:00) Tijuana, Baja California</option>
                            <option timezoneid="7" gmtadjustment="GMT-07:00" usedaylighttime="0" value="-7">(GMT-07:00) Arizona</option>
                            <option timezoneid="8" gmtadjustment="GMT-07:00" usedaylighttime="1" value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                            <option timezoneid="9" gmtadjustment="GMT-07:00" usedaylighttime="1" value="-7">(GMT-07:00) Mountain Time (US & Canada)</option>
                            <option timezoneid="10" gmtadjustment="GMT-06:00" usedaylighttime="0" value="-6">(GMT-06:00) Central America</option>
                            <option timezoneid="11" gmtadjustment="GMT-06:00" usedaylighttime="1" value="-6">(GMT-06:00) Central Time (US & Canada)</option>
                            <option timezoneid="12" gmtadjustment="GMT-06:00" usedaylighttime="1" value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                            <option timezoneid="13" gmtadjustment="GMT-06:00" usedaylighttime="0" value="-6">(GMT-06:00) Saskatchewan</option>
                            <option timezoneid="14" gmtadjustment="GMT-05:00" usedaylighttime="0" value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                            <option timezoneid="15" gmtadjustment="GMT-05:00" usedaylighttime="1" value="-5">(GMT-05:00) Eastern Time (US & Canada)</option>
                            <option timezoneid="16" gmtadjustment="GMT-05:00" usedaylighttime="1" value="-5">(GMT-05:00) Indiana (East)</option>
                            <option timezoneid="17" gmtadjustment="GMT-04:00" usedaylighttime="1" value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                            <option timezoneid="18" gmtadjustment="GMT-04:00" usedaylighttime="0" value="-4">(GMT-04:00) Caracas, La Paz</option>
                            <option timezoneid="19" gmtadjustment="GMT-04:00" usedaylighttime="0" value="-4">(GMT-04:00) Manaus</option>
                            <option timezoneid="20" gmtadjustment="GMT-04:00" usedaylighttime="1" value="-4">(GMT-04:00) Santiago</option>
                            <option timezoneid="21" gmtadjustment="GMT-03:30" usedaylighttime="1" value="-3.5">(GMT-03:30) Newfoundland</option>
                            <option timezoneid="22" gmtadjustment="GMT-03:00" usedaylighttime="1" value="-3">(GMT-03:00) Brasilia</option>
                            <option timezoneid="23" gmtadjustment="GMT-03:00" usedaylighttime="0" value="-3">(GMT-03:00) Buenos Aires, Georgetown</option>
                            <option timezoneid="24" gmtadjustment="GMT-03:00" usedaylighttime="1" value="-3">(GMT-03:00) Greenland</option>
                            <option timezoneid="25" gmtadjustment="GMT-03:00" usedaylighttime="1" value="-3">(GMT-03:00) Montevideo</option>
                            <option timezoneid="26" gmtadjustment="GMT-02:00" usedaylighttime="1" value="-2">(GMT-02:00) Mid-Atlantic</option>
                            <option timezoneid="27" gmtadjustment="GMT-01:00" usedaylighttime="0" value="-1">(GMT-01:00) Cape Verde Is.</option>
                            <option timezoneid="28" gmtadjustment="GMT-01:00" usedaylighttime="1" value="-1">(GMT-01:00) Azores</option>
                            <option timezoneid="29" gmtadjustment="GMT+00:00" usedaylighttime="0" value="0">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
                            <option timezoneid="30" gmtadjustment="GMT+00:00" usedaylighttime="1" value="0">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
                            <option timezoneid="31" gmtadjustment="GMT+01:00" usedaylighttime="1" value="1">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                            <option timezoneid="32" gmtadjustment="GMT+01:00" usedaylighttime="1" value="1">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                            <option timezoneid="33" gmtadjustment="GMT+01:00" usedaylighttime="1" value="1">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
                            <option timezoneid="34" gmtadjustment="GMT+01:00" usedaylighttime="1" value="1">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                            <option timezoneid="35" gmtadjustment="GMT+01:00" usedaylighttime="1" value="1">(GMT+01:00) West Central Africa</option>
                            <option timezoneid="36" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Amman</option>
                            <option timezoneid="37" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Athens, Bucharest, Istanbul</option>
                            <option timezoneid="38" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Beirut</option>
                            <option timezoneid="39" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Cairo</option>
                            <option timezoneid="40" gmtadjustment="GMT+02:00" usedaylighttime="0" value="2">(GMT+02:00) Harare, Pretoria</option>
                            <option timezoneid="41" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
                            <option timezoneid="42" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Jerusalem</option>
                            <option timezoneid="43" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Minsk</option>
                            <option timezoneid="44" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Windhoek</option>
                            <option timezoneid="45" gmtadjustment="GMT+03:00" usedaylighttime="0" value="3">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
                            <option timezoneid="46" gmtadjustment="GMT+03:00" usedaylighttime="1" value="3">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
                            <option timezoneid="47" gmtadjustment="GMT+03:00" usedaylighttime="0" value="3">(GMT+03:00) Nairobi</option>
                            <option timezoneid="48" gmtadjustment="GMT+03:00" usedaylighttime="0" value="3">(GMT+03:00) Tbilisi</option>
                            <option timezoneid="49" gmtadjustment="GMT+03:30" usedaylighttime="1" value="3.5">(GMT+03:30) Tehran</option>
                            <option timezoneid="50" gmtadjustment="GMT+04:00" usedaylighttime="0" value="4">(GMT+04:00) Abu Dhabi, Muscat</option>
                            <option timezoneid="51" gmtadjustment="GMT+04:00" usedaylighttime="1" value="4">(GMT+04:00) Baku</option>
                            <option timezoneid="52" gmtadjustment="GMT+04:00" usedaylighttime="1" value="4">(GMT+04:00) Yerevan</option>
                            <option timezoneid="53" gmtadjustment="GMT+04:30" usedaylighttime="0" value="4.5">(GMT+04:30) Kabul</option>
                            <option timezoneid="54" gmtadjustment="GMT+05:00" usedaylighttime="1" value="5">(GMT+05:00) Yekaterinburg</option>
                            <option timezoneid="55" gmtadjustment="GMT+05:00" usedaylighttime="0" value="5">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
                            <option timezoneid="56" gmtadjustment="GMT+05:30" usedaylighttime="0" value="5.5">(GMT+05:30) Sri Jayawardenapura</option>
                            <option timezoneid="57" gmtadjustment="GMT+05:30" usedaylighttime="0" value="5.5">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                            <option timezoneid="58" gmtadjustment="GMT+05:45" usedaylighttime="0" value="5.75">(GMT+05:45) Kathmandu</option>
                            <option timezoneid="59" gmtadjustment="GMT+06:00" usedaylighttime="1" value="6">(GMT+06:00) Almaty, Novosibirsk</option>
                            <option timezoneid="60" gmtadjustment="GMT+06:00" usedaylighttime="0" value="6">(GMT+06:00) Astana, Dhaka</option>
                            <option timezoneid="61" gmtadjustment="GMT+06:30" usedaylighttime="0" value="6.5">(GMT+06:30) Yangon (Rangoon)</option>
                            <option timezoneid="62" gmtadjustment="GMT+07:00" usedaylighttime="0" value="7">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
                            <option timezoneid="63" gmtadjustment="GMT+07:00" usedaylighttime="1" value="7">(GMT+07:00) Krasnoyarsk</option>
                            <option timezoneid="64" gmtadjustment="GMT+08:00" usedaylighttime="0" value="8">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                            <option timezoneid="65" gmtadjustment="GMT+08:00" usedaylighttime="0" value="8">(GMT+08:00) Kuala Lumpur, Singapore</option>
                            <option timezoneid="66" gmtadjustment="GMT+08:00" usedaylighttime="0" value="8">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
                            <option timezoneid="67" gmtadjustment="GMT+08:00" usedaylighttime="0" value="8">(GMT+08:00) Perth</option>
                            <option timezoneid="68" gmtadjustment="GMT+08:00" usedaylighttime="0" value="8">(GMT+08:00) Taipei</option>
                            <option timezoneid="69" gmtadjustment="GMT+09:00" usedaylighttime="0" value="9">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
                            <option timezoneid="70" gmtadjustment="GMT+09:00" usedaylighttime="0" value="9">(GMT+09:00) Seoul</option>
                            <option timezoneid="71" gmtadjustment="GMT+09:00" usedaylighttime="1" value="9">(GMT+09:00) Yakutsk</option>
                            <option timezoneid="72" gmtadjustment="GMT+09:30" usedaylighttime="0" value="9.5">(GMT+09:30) Adelaide</option>
                            <option timezoneid="73" gmtadjustment="GMT+09:30" usedaylighttime="0" value="9.5">(GMT+09:30) Darwin</option>
                            <option timezoneid="74" gmtadjustment="GMT+10:00" usedaylighttime="0" value="10">(GMT+10:00) Brisbane</option>
                            <option timezoneid="75" gmtadjustment="GMT+10:00" usedaylighttime="1" value="10">(GMT+10:00) Canberra, Melbourne, Sydney</option>
                            <option timezoneid="76" gmtadjustment="GMT+10:00" usedaylighttime="1" value="10">(GMT+10:00) Hobart</option>
                            <option timezoneid="77" gmtadjustment="GMT+10:00" usedaylighttime="0" value="10">(GMT+10:00) Guam, Port Moresby</option>
                            <option timezoneid="78" gmtadjustment="GMT+10:00" usedaylighttime="1" value="10">(GMT+10:00) Vladivostok</option>
                            <option timezoneid="79" gmtadjustment="GMT+11:00" usedaylighttime="1" value="11">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
                            <option timezoneid="80" gmtadjustment="GMT+12:00" usedaylighttime="1" value="12">(GMT+12:00) Auckland, Wellington</option>
                            <option timezoneid="81" gmtadjustment="GMT+12:00" usedaylighttime="0" value="12">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
                            <option timezoneid="82" gmtadjustment="GMT+13:00" usedaylighttime="0" value="13">(GMT+13:00) Nuku'alofa</option>                  
                        </select><br />
                    
                    {/* <button class="btnsignup"><Link to="/SignupMessage">Sign up</Link></button> */}
                    <button className="btnsignup">Sign up</button>
                    <button className="btncancel" onClick={this.handleCancel}>Cancel</button>
                </form>

              </div>
            <Footer />
            </div>
            
        )
    }
}

export default SignupForm;