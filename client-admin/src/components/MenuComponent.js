import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom'

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
        <ul className="menu">
          <li className="menu"><Link to='/admin/home'>TRANG CHỦ</Link></li>
          <li className="menu"><Link to='/admin/category'>PHÂN LOẠI</Link></li>
          <li className="menu"><Link to='/admin/product'>SẢN PHẦM</Link></li>
          <li className="menu"><Link to='/admin/order'>ĐƠN HÀNG</Link></li>
          <li className="menu"><Link to='/admin/customer'>NGƯỜI DÙNG</Link></li>
          <li className="menu"><Link to='/admin/statistics'>STATISTICS</Link></li>
        </ul>
      </div>
      <div className="float-right">
          <span>Hello  </span>
          <span className='user'>{this.context.username}</span>
          <a href="" onClick={() => this.lnkLogoutClick()}>Logout</a>
          <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link>
        </div>
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
    localStorage.removeItem('admin_token');
  }
}
export default Menu;