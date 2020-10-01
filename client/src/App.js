import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import SignupMessage from './components/SignupMessage'
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

// Note: this is an example of a function component, and if you're not familiar with these you can always turn this into a class.
// The reverse is true as well, if you want to use function components instead of classes, that's totally fine.

function App() {
  // State to manage if the user is currently logged in or not.
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {/* Uncomment these when you get a signup and login component in */}
        <PublicRoute path="/signupform" authenticated={authenticated} component={SignupForm}></PublicRoute>
        <PublicRoute path="/signupmessage" authenticated={authenticated} component={SignupMessage}></PublicRoute>
        {/* <PublicRoute path="/login" authenticated={authenticated} component={Login}></PublicRoute> */}
        {/* This is an example of how to have your dashboard or profile or whatever only show if you're logged in */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </Router>
  );
}

export default App;
