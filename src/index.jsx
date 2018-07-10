import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './page/welcome/welcome';
import AsyncComponent from './common/async-load/async-component';
import './index.less';

const Lazy1 = AsyncComponent(() => import(/* webpackChunkName: "lazy1" */ './page/lazy/lazy1'));
const Lazy2 = AsyncComponent(() => import(/* webpackChunkName: "lazy2" */ './page/lazy/lazy2'));

class App extends Component {
    render () {
        return (
            <div>{ this.props.children }</div>
        )
    }
}

const routes = (
    <BrowserRouter>
        <App>
            <Route path="/" component={Welcome}/>
            <Route path="/lazy/1" component={Lazy1}/>
            <Route path="/lazy/2" component={Lazy2}/>
        </App>
    </BrowserRouter>
);

const app = document.getElementById('app');

ReactDOM.render(routes, app);
