import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import ProtectedRoute from './ProtectedRoute';
import Navbar from '../Home/Navbar';

const Routes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <ProtectedRoute exact path='/' component={Home} />
                <ProtectedRoute exact path='/me' component={Profile} />
                <Route exact path='/about' component={Profile} />
            </Switch>
        </>
    );
};

export default Routes;
