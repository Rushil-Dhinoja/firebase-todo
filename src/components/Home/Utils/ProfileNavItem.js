import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Profile = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 1rem;
    font: 400 1.6rem 'montserrat';
    cursor: pointer;
    color: var(--color-secondary);
    transition: all 0.2s;

    &:hover {
        background-color: var(--color-secondary);
        color: var(--color-white);
    }

    &.active {
        background-color: var(--color-secondary);
        color: var(--color-white);
    }

    p {
        @media ${(props) => props.theme.mediaQueries.medium} {
            font-size: 1.2rem;
        }
        @media ${(props) => props.theme.mediaQueries.small} {
            display: none;
        }
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 1rem;

        @media ${(props) => props.theme.mediaQueries.small} {
            margin: 0;
        }
    }
`;

const ProfileNavItem = ({ children }) => {
    return (
        <Profile to='/me' activeClassName='active'>
            {children}
        </Profile>
    );
};

export default ProfileNavItem;
