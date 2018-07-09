import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome, { Text } from './page/welcome/welcome';
import './index.less';

const routes = (
    <BrowserRouter>
        <Route path="/" component={Welcome}/>
    </BrowserRouter>
);

const app = document.getElementById('app');

ReactDOM.render(routes, app);
