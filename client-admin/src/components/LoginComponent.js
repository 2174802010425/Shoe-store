import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';

class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };
  }
  render() {
    if (this.context.token === '') {
      return (
        <div className='login-container'>
          <div className="align-valign-center">
            <h2 className="text-center">ADMIN LOGIN</h2>
           <form className="form-container">
              <label>Username</label>
              <input
                type="text"
                value={this.state.txtUsername}
                onChange={(e) => {
                  this.setState({ txtUsername: e.target.value });
                }}
              />

              <label>Password</label>
              <input
                type="password"
                value={this.state.txtPassword}
                onChange={(e) => {
                  this.setState({ txtPassword: e.target.value });
                }}
              />

              <button
                type="submit"
                className="login-btn"
                value="LOGIN"
                onClick={(e) => this.btnLoginClick(e)}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
    }
    return (<div />);
  }
  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      this.apiLogin(account);
    } else {
      alert('Please input username and password');
    }
  }
  // apis
  apiLogin(account) {
    axios.post('/api/admin/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setUsername(account.username);
      } else {
        alert(result.message);
      }
    });
  }
}
export default Login;
