import axios from 'axios';
import React, { Component } from 'react';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtToken: ''
    };
  }
  render() {
    return (
      <div className='active-container'>
        <div className="align-center-login">
          <h2 className="text-center-sign-up">ACTIVE ACCOUNT</h2>
          <form className='active-value'>
            <table className="align-center">
              <tbody>
                <tr>
                  <td className="sign-up-color">ID</td>
                  <td><input type="text" value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }} /></td>
                </tr>
                <tr>
                  <td className="sign-up-color">Token</td>
                  <td><input type="text" value={this.state.txtToken} onChange={(e) => { this.setState({ txtToken: e.target.value }) }} /></td>
                </tr>
                <div className='btn-login'>
                  <button 
                  className='login-btn'
                  type="submit" 
                  value="ACTIVE" 
                  onClick={(e) => this.btnActiveClick(e)} >ACTIVE</button>
                </div>

              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
  // event-handlers
  btnActiveClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const token = this.state.txtToken;
    if (id && token) {
      this.apiActive(id, token);
    } else {
      alert('Please input id and token');
    }
  }
  // apis
  apiActive(id, token) {
    const body = { id: id, token: token };
    axios.post('/api/customer/active', body).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}
export default Active;