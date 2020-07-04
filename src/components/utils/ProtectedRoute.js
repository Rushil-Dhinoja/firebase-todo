import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, auth: { authenticated, loading }, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                !authenticated && !loading ? <Redirect to='/login' /> : <Component {...props} />
            }
        />
    );
};

ProtectedRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(ProtectedRoute);
