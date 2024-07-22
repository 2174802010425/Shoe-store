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
      <div className="align-center">
        <h2 className="text-center">ĐĂNG NHẬP</h2>
        <form onSubmit={(e) => this.btnLoginClick(e)}>
          <table className="align-center">
            <tbody>
              <tr>
                <td>Username</td>
                <td>
                  <input
                    type="text"
                    value={this.state.txtUsername}
                    onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    value={this.state.txtPassword}
                    onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" value="LOGIN" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Link to='/resetpwd'>Forgot password</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
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
        if (result.success) {
          this.context.setToken(result.token);
          this.context.setCustomer(result.customer);
          this.props.navigate('/home');
          localStorage.setItem('customer_token', result.token);
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
