import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VerifyEmail from '../Home/Utils/VerifyEmail';
import styled from 'styled-components';
import SideBar from './SideBar';
import Update from './Update';
import Loader from '../utils/Loader';
const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 3rem;
    width: 80rem;
    max-width: 90%;
    height: 50rem;
    box-shadow: 0 5px 10px var(--box-shadow);
    border-radius: 10px;
    display: flex;
    overflow: hidden;

    @media ${(props) => props.theme.mediaQueries.small} {
        flex-direction: column;
    }
`;

const Profile = ({ auth: { user, loading } }) => {
    return (
        <div>
            {!loading && user !== null ? (
                !user.emailVerified ? (
                    <VerifyEmail user={user} />
                ) : (
                    <Wrapper>
                        <SideBar user={user} />
                        <Update user={user} />
                    </Wrapper>
                )
            ) : (
                <Loader />
            )}
        </div>
    );
};

Profile.propTypes = {};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Profile);
