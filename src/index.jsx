import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './page/welcome/welcome';
import './index.less';

class Index extends Component {
    render () {
        return (
            <div>
                <Welcome></Welcome>
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('app'));
