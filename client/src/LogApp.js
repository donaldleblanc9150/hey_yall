import React from 'react';
import axios from 'axios';
import './LogApp.css';
import { Redirect, Router, Link, navigate } from '@reach/router';

import Login from './views/Login';

axios.interceptors.response.use(response => response, () => navigate('/login'));


function LogApp() {
  return (
    <div className="LogApp">
      {/* <Link to="/cities">All Cities</Link>{' '}
      <Link to="/cities/new">Create a City</Link> */}
      <Router>
        <Login path="login" />
        {/* <AllCities path="cities" />
        <NewCity path="cities/new" />
        <EditCity path="cities/:id/edit" />
        <SingleCity path="cities/:id" /> */}
        <Redirect
          from="/"
          to="/inside"
          noThrow
          />
      </Router>
    </div>
  );
}

export default LogApp;