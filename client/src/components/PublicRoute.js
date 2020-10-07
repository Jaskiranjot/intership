import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * Component that only renders the given prop "component" if the user is NOT logged in.
 * If the user is logged in (authenticated is true) it redirects to Home.
 */
function PublicRoute({ component: Component, authenticated, ...rest }) {

  return (
    <Route {...rest} render={(props) => !authenticated
        ? <Component {...props} />
        : <Redirect to='/profile' />}
    />
  );
}

export default PublicRoute;