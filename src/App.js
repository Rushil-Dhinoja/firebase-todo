import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Forms/Signup/Signup';
import Login from './components/Forms/Login/Login';
import Alert from './components/utils/Alert';
import Routes from './components/utils/Routes';

function App() {
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

export default App;
