import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Profile from '../Pofile/Profile';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
    return (
        <>
            <Switch>
                <ProtectedRoute exact path='/' component={Home} />
                <ProtectedRoute exact path='/me' component={Profile} />
            </Switch>
        </>
    );
};

export default Routes;
