import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute, hashHistory  } from 'react-router-dom'
// main app
import App from './containers/App';

const app = document.getElementById('app')

ReactDOM.render(
    <BrowserRouter history={hashHistory}>
        <Route path="/" component={App} />
    </BrowserRouter>,
     app);
