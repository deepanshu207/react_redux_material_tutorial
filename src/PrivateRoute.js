import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch , Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/layout/Dashboard';
import FormPage from './components/layout/FormPage';
import Login from './auth/Login';
import { connect } from 'react-redux';
import { login } from './actions/authActions';
import {Link, withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) =>
{
return(

      <Route 
      {...rest}
      render=
      {props =>
        auth.isLoginSuccess === true ? (
            <Layout>
            <Component {...props} />
            </Layout>
        ) : (
            <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        )
      }
    />
  );
}
  
  const mapStateToProps = (state) => {
    const { auth } = state;
    return {
      auth:auth
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (email, password) =>  { dispatch(login(email, password))
      },
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRoute));

  

