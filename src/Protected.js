import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch , Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/layout/Dashboard';
import FormPage from './components/layout/FormPage';
import Login from './auth/Login';
import Register from './auth/Register';
import { connect } from 'react-redux';
import { login , clearCurrentProfile } from './actions/authActions';
import {Link, withRouter } from 'react-router-dom';
import ErrorPage from './components/layout/ErrorPage';
import LoginErrorPage from './components/layout/LoginErrorPage';

class Auth extends React.Component {
    static getUser() {
        return localStorage.getItem("user");
    }
}


class Protected extends Component { 

componentDidMount()
{

    //  if (this.props.location.pathname=='/register')
    //     {
    //         this.props.history.push("/dashboard")
    //     }

}


    render() {
    let {isLoginPending, isLoginSuccess, loginError,auth} = this.props;
    console.log("!!!!");
    console.log(this.props);
    console.log("!!!!");
    if (this.props.auth.isLoginSuccess)
    {
    localStorage.setItem('user', "admin");
    }

    if (Auth.getUser())
    {
    return (
    <Layout>
    {
    (this.props.auth.isLoginSuccess==true)?(
     <div>
     <Redirect to={{pathname: '/dashboard'}}/>
     </div>
    ):
    null
    } 
    
    {
    (this.props.location.pathname=='/register')?(
     <div>
     <Redirect to={{pathname: '/dashboard'}}/>
     </div>
    ):
    null
    } 

    <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/login" component={LoginErrorPage} />
    <Route exact path="/existing" component={FormPage} />
    <Route exact={true} path='*' component={ErrorPage} />
    </Switch>
    </Layout>
      );
    }
    else{
    return (
    <div>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
    <Redirect to={{ pathname: '/', state: { from: "*" } }} /> 
    {/* <Redirect from="*" to="/" /> */}  
    </Switch>
    </div>   
    );
       
    }
    } 
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Protected));

  

//   export default Protected;