import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../../../assets/svg/logo.svg';
import './welcome.less';

export default class Welcome extends Component {
    render () {
        return (
            <div className="welcome">
                <h1>WECLOME</h1>
                <img src={logo} />
            </div>
        )
    }
}