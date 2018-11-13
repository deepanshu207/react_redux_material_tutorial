import React , {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white,lightBlueA400} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import {Link, withRouter } from 'react-router-dom';
import muiTheme from '../muiTheme';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
// import { login } from '../reducers/authReducer';


class Login extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

 
 onSubmit (e) {
  e.preventDefault();
  let { email, password } = this.state;
  this.props.login(email, password);
  this.setState({
    email: '',
    password: ''
  });

  console.log("::")
  console.log(this.props.login(email, password));
  console.log("::")
};


render()
{
let {email, password} = this.state;
let {isLoginPending, isLoginSuccess, loginError,auth} = this.props;
console.log("@@@@@")
console.log(this.state.email);
console.log(this.state.password);
console.log(email);
console.log(password);
console.log(this.props);
console.log(this.props.auth.isLoginPending);
console.log(this.props.auth.isLoginSuccess);
console.log(this.props.auth.loginError);
console.log("@@@@@")
  const styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: 'auto',
      position: 'absolute',
      top: '30%',
      left: 0,
      right: 0,
      margin: 'auto'
    },
    paper: {
      padding: 20,
      overflow: 'auto'
    },
    buttonsDiv: {
      textAlign: 'center',
      padding: 10
    },
    flatButton: {
      color: grey500
    },
    checkRemember: {
      style: {
        float: 'left',
        maxWidth: 180,
        paddingTop: 5
      },
      labelStyle: {
        color: grey500
      },
      iconStyle: {
        color: grey500,
        borderColor: grey500,
        fill: grey500
      }
    },
    loginBtn: {
      float: 'right',
    },
    btn: {
      background: '#4f81e9',
      color: white,
      padding: 7,
      borderRadius: 2,
      margin: 2,
      fontSize: 13
    },
    btnFacebook: {
      background: '#4f81e9'
    },
    btnGoogle: {
      background: '#e14441'
    },
    btnSpan: {
      marginLeft: 5
    },
  };


  return (
   
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <div style={styles.loginContainer}>

          <Paper style={styles.paper}>

            <form name="loginForm" onSubmit={this.onSubmit}>
              <TextField
                hintText="E-mail"
                floatingLabelText="E-mail"
                fullWidth={true}
                onChange={e => this.setState({email: e.target.value})} value={email}
              />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                fullWidth={true}
                type="password"
                onChange={e => this.setState({password: e.target.value})} value={password}
              />

          {/* <Link to="/login"> */}
                  <RaisedButton label="Login"
                                primary={true}
                                style={styles.loginBtn}
                                type="submit"/>
                {/* </Link> */}
  {/* { auth && <TextField value="Please wait...">Please wait...</TextField> } */}
  { auth.isLoginPending && <div>Please wait...</div> }
  { auth.isLoginSuccess && <div>Success.</div> }
  { auth.loginError &&   <div>{auth.loginError.message} </div> }

            </form>

              <div>
                <Checkbox
                  label="Remember me"
                  style={styles.checkRemember.style}
                  labelStyle={styles.checkRemember.labelStyle}
                  iconStyle={styles.checkRemember.iconStyle}
                />

               
              </div>


     
          </Paper>


        </div>
      </div>
    </MuiThemeProvider>
  );
}
};


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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

