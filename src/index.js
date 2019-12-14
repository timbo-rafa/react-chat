import React from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet';

import {BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App';

ReactDOM.render(
    
    <Router>
        <Helmet>
            <title>Chat</title>
        </Helmet>
        <Route exact path="/" component={App}>
        </Route>
    </Router>
    
    , document.getElementById('root'));