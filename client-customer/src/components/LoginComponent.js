import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import { Link } from 'react-router-dom';

class Login extends Component {
  static contextType = MyContext; // using this.context to access global state

  constructor(props) {
    super(props);
    this.state = {
      txtUsername: 'customer1',
      txtPassword: '12345'
    };
  }

  render() {
    return (
      <div className='login-container'>
        <div className="align-center-login">
        <h2 className="text-center">ĐĂNG NHẬP</h2>
        <form className='form-container' onSubmit={(e) => this.btnLoginClick(e)}>
          <label>Username</label>
              <input
                type="text"
                value={this.state.txtUsername}
                  onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}
                  />
              <label>Password</label>
                  <input
                    type="password"
                    value={this.state.txtPassword}
                    onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}
                  />
              <div className='btn-login'>
                  <button 
                  className="login-btn"
                  type="submit"
                  value="LOGIN" >LOGIN
                </button>  
              </div>
              <div className='resetuser'>
                  <Link to='/resetpwd'>Forgot password</Link>
              </div> 
        </form>
      </div>
      </div>
    );
  }

  // event-handlers login click
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

  // apis login 
  apiLogin(account) {
    axios.post('/api/customer/login', account)
      .then((res) => {
        const result = res.data;
        if (result.success == ) {
          this.context.setToken(result.token);
          this.context.setCustomer(result.customer);
          this.props.navigate('/home');
          ///localStorage.setItem('customer_token', result.token);
        } else {
          alert(result.message);
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        alert('An error occurred while logging in.');
      });
  }
}

export default withRouter(Login);
