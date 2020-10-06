import React from 'react';
import { Route, Redirect } from 'react-router-dom';
/* Providers */
import { useAuth } from '../../providers/Auth';

function Private({ children, ...props }) {
  const { authenticated } = useAuth();

  return authenticated ? <Route {...props} /> : <Redirect to="/" />;
}

export default Private;
