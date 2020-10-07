import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * This component renders the prop "component" only if "authenticated" is true.
 * Otherwise, it redirects to the login page.
 */
function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />}
    />
  );
}

export default PrivateRoute;