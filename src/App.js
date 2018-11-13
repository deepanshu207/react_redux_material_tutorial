import React, { Component } from 'react';
import { BrowserRouter , Route , Switch , Redirect } from 'react-router-dom';
import history from './history';

import Layout from './components/layout/Layout';
import Login from './auth/Login';
import Register from './auth/Register';
import FormPage from './components/layout/FormPage';
import Dashboard from './components/layout/Dashboard';
import ErrorPage from './components/layout/ErrorPage';
import LoginErrorPage from './components/layout/LoginErrorPage';
import { Provider } from "react-redux";
import store from "./store.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './muiTheme';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import Protected from './Protected';

// class Protected extends Component {
//   render() {
//   return (
//  <Layout>
//   <Switch>
//   {/* <Route exact path="/login" component={Login} /> */}
//   <Route exact path="/login" component={Login} /> 
//   <Route exact path="/dashboard" component={Dashboard} />
//   <Route exact path="/existing" component={FormPage} />
//   </Switch>
//   </Layout>
//     );
//   } 
// }

  
class App extends Component {
  constructor(props) {
    super(props);
}

// componentDidMount()
// {
// if (history.location.pathname!="/")
// {
//   history.push("/")
// }
// }

  render() {
    console.log("*")
    console.log(history);
    console.log("*")
    console.log("**")
    console.log(history.location.pathname);
    console.log("**")
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter basename="/">
        <div>
        {/* <Redirect from="/login" to='/'/> */}
        <Route component={Protected} />
        {/* <Redirect to={{ pathname: '/', state: { from: "/1" } }} /> */}
        <Switch>       
        {/* <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />   
        <Route exact={true} path='*' component={LoginErrorPage} />  */}
        {/* <Route exact={true} path='*' component={LoginErrorPage} /> */}
        {/* <Redirect to={{ pathname: '/', state: { from: history.location.pathname } }} /> */}
        {/* <Redirect from="/" to="*" /> */}
        </Switch>
        {/* <Redirect from="/login" to='/'/>  */}
        {/* <PrivateRoute  path="dashboard" component={Dashboard} /> */}
        </div>
        </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}


export default App;
