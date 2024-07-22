import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Inform extends Component {
    static contextType = MyContext; // using this.context to access global state
    render() {
        return (
            <div className="border-bottom">
                <div className="float-left">
                    {this.context.token === '' ?
                        <div><Link to='/login'>ĐĂNG NHẬP</Link> | <Link to='/signup'>ĐĂNG KÝ</Link> | <Link to='/active'>Active</Link></div>
                        :
                        <div>Hello <b>{this.context.customer.name}</b> | <Link to='/home' onClick={() => this.lnkLogoutClick()}>ĐĂNG XUẤT</Link> | <Link to='/myprofile'>TÔI</Link> | <Link to='/myorders'>ĐƠN HÀNG CỦA TÔI</Link></div>
                    }
                </div>
                <div className="float-right">
                    <Link to='/mycart'>GIỎ HÀNG</Link> have <b>{this.context.mycart.length}</b> items
                </div>
                <div className="float-clear" />
            </div>
        );
    }
    // event-handlers logout 
    lnkLogoutClick() {
        this.context.setToken('');
        this.context.setCustomer(null);
        this.context.setMycart([]);
        localStorage.removeItem('customer_token');
    }
}
export default Inform;