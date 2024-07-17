import React, { Component } from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { // global state
      // variables
      token: '',
      customer: null,
      mycart: [],
      // functions
      setToken: this.setToken,
      setCustomer: this.setCustomer,
      setMycart: this.setMycart
    };
  }// cart
  setMycart = (value) => {
    this.setState({ mycart: value });
  }///token
  setToken = (value) => {
    this.setState({ token: value });
  }///customer
  setCustomer = (value) => {
    this.setState({ customer: value });
  }
  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;