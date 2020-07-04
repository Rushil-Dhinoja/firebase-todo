import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Forms/Signup/Signup';
import Login from './components/Forms/Login/Login';
import Alert from './components/utils/Alert';
import Routes from './components/utils/Routes';
import { setUser } from './redux/actions/auth';
import { connect } from 'react-redux';

function App({ setUser }) {
    useEffect(() => {
        setUser();
    }, [setUser]);

    return (
        <Router>
            <Alert />

            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route component={Routes} />
            </Switch>
        </Router>
    );
}

export default connect(null, { setUser })(App);
