import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VerifyEmail from './Utils/VerifyEmail';
import Loader from '../utils/Loader';
import TodoContainer from './TodoContainer';
const Home = ({ auth: { user, loading } }) => {
    return (
        <div>
            {!loading && user !== null ? (
                !user.emailVerified ? (
                    <VerifyEmail user={user} />
                ) : (
                    <TodoContainer user={user} />
                )
            ) : (
                <Loader />
            )}
        </div>
    );
};

Home.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {})(Home);
