import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navitem from './Navitem';
import ProfileNavItem from './Utils/ProfileNavItem';
import { connect } from 'react-redux';
import { logOutUser } from '../../redux/actions/auth';

const Navigationbar = styled.nav`
    width: 100%;
    height: 6rem;
    background-color: var(--color-main);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Brand = styled.p`
    margin-left: 5rem;
    font: 600 3rem 'montserrat';
    color: var(--color-secondary);
    @media ${(props) => props.theme.mediaQueries.medium} {
        font-size: 2rem;
        margin-left: 3rem;
    }
    @media ${(props) => props.theme.mediaQueries.small} {
        font-size: 1.4rem;
        margin-left: 1rem;
    }
`;

const Wrapper = styled.div`
    display: flex;
    margin-right: 5rem;
    height: 100%;
    @media ${(props) => props.theme.mediaQueries.medium} {
        margin-right: 3rem;
    }
    @media ${(props) => props.theme.mediaQueries.small} {
        margin-right: 1rem;
    }
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
`;

const Logout = styled.p`
    display: flex;
    align-items: center;
    margin-right: 2rem;
    font: 400 1.6rem 'montserrat';
    color: var(--color-white);
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        color: var(--color-secondary);
    }
    @media ${(props) => props.theme.mediaQueries.medium} {
        margin-right: 1rem;
        font-size: 1.4rem;
    }
    @media ${(props) => props.theme.mediaQueries.small} {
        font-size: 1rem;
    }
`;

const Navbar = ({ logOutUser, auth: { user, loading } }) => {
    return (
        <Navigationbar>
            <Brand>Todo-App</Brand>
            {!loading && user !== null ? (
                <Wrapper>
                    <List>
                        <Navitem to='/'>Home</Navitem>
                    </List>
                    <Logout onClick={() => logOutUser()}>Log Out</Logout>
                    <ProfileNavItem>
                        <p> {user.displayName}</p> <img src={user.photoURL} alt='user' />{' '}
                    </ProfileNavItem>
                </Wrapper>
            ) : (
                ''
            )}
        </Navigationbar>
    );
};

Navbar.propTypes = {
    logOutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logOutUser })(Navbar);
