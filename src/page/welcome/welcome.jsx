import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../../../assets/svg/logo.svg';
import './welcome.less';

export default class Welcome extends Component {
    constructor (props) {
        super(props);
        this.ref = React.createRef();
        this.textRef = React.createRef();
    }
    componentDidMount () {
        console.log('Ref', this.ref.current);
        console.log('textRef', this.textRef);
    }
    render () {
        return (
            <div className="welcome">
                <h1>WECLOME</h1>
                <img src={logo} />
                <ul>
                    <li><Link to="/welcome/text/0">description</Link></li>
                    <li><Link to="/welcome/text/1">author</Link></li>
                </ul>
                <Route path="/welcome/text/:id" component={Text}></Route>
                <Example ref={this.ref}></Example>
                <textarea ref={this.textRef}></textarea>
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

class Example extends React.Component {
    constructor() {
      super();
      this.state = {
        val: {
            v: 1
        }
      };
    }
    
    componentWillMount() {
        console.log('componentWillMount', this.state.val);
        setTimeout(() => {
            this.setState({val: {v: 22}});
            console.log('sync0', this.state.val.v)
        }, 1000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate', this.state.val);
    }

    componentWillUpdate() {
        console.log('componentWillUpdate', this.state.val);
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate', this.state.val);
        return true;
    }
  
    render() {
        console.log('render', this.state.val);
        const val = { v: 11 };
      return (
          <div>
            <button onClick={() => { this.setState({val: val});console.log('sync1', this.state.val.v) }}>改变state</button>
            <div>{ this.state.val.v }</div>
          </div>
      )
    }
  };