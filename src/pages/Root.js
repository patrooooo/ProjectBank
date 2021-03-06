import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'


import Home from './Home/Home'
import Login from './Login/Login'

const PagesRoot = () => (

    <Router>
        <Switch>
            <Route id="root" path="/Login" component={Login} />
            <Route path="/" component={Home} />
        </Switch>
    </Router>

);

export default PagesRoot;