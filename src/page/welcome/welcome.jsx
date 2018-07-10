import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../../../assets/svg/logo.svg';
import './welcome.less';

export default class Welcome extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="welcome">
                <h1>WECLOME</h1>
                <img src={logo} />
                <ul>
                    <li><Link to="/text/0">description</Link></li>
                    <li><Link to="/text/1">author</Link></li>
                </ul>
                <Route path="/text/:id" component={Text}></Route>
            </div>
        )
    }
}

export class Text extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const id = this.props.match.params.id;
        return (
            <p>{ id == 0 ?'react项目脚手架，主要用于学习':'CAaRrLl' }</p>
        )
    }
}