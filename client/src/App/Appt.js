import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileN from '../components/Profile/ProfileN';
import Hourtable from '../components/Hourtable/Hourtable';
import HomeN from '../components/HomeN';
import Calendar from '../components/Calendar/Calendar';
import Resources from '../components/Resources/Resources';
//import SignupForm from './components/SignupForm';
//import SignupMessage from './components/SignupMessage'
//import PrivateRoute from '../components/PrivateRoute';
//import PublicRoute from './components/PublicRoute';

function App() {
  // State to manage if the user is currently logged in or not.
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Router>    
      <HomeN />
      <div className=" ">
        <Switch>        
          <Route exact path="/">
            <ProfileN />
          </Route>
          <Route path="/Calendar">
            <Calendar />
          </Route>
          <Route path="/Resources">
            <Resources />
          </Route>
          <Route path="/Hourtable">
            <Hourtable />
          </Route>
          {/* <PrivateRoute path="/Calendar" component={Calendar} /> */}
          {/* <Route path="/Profilep/:name">
            <Profilep />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

