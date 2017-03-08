import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Root from './components/Root';

import blogStore from '../js/store/blogStore';


ReactDOM.render(<Provider store={blogStore}>
                    <Router history={browserHistory}>
                        <Route path={"/"} component={Root}/>
                        <Route path={"app"} component={App}/>
                        <Route path={"home"} component={Home}/>
                    </Router>
                </Provider>,document.getElementById('app'));