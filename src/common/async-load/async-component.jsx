/*
 *  将普通组件转换为动态组件，用于懒加载   
 */
import React, { Component } from 'react';

const AsyncComponent = (asyncLoad) => (
    class AsyncComponent extends Component {
        constructor (props) {
            super(props);
            this.state = {
                Component: null
            }
        }

        hasLoadComponent() {
            return this.state.Component !== null;
        }

        componentWillMount () {
            if(this.hasLoadComponent()) return;

            asyncLoad()
            .then(Component => Component.default)
            .then(Component => {
                this.setState({
                    Component: Component
                })
            })
            .catch(err => {
                console.error('Cannot load component in AsyncComponent!', err);
            });
        }

        render () {
            const { Component }  = this.state;

            return Component? <Component {...this.props}/>:null;
        }
    }
)

export default AsyncComponent;