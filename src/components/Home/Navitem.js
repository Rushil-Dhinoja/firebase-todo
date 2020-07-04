import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Item = styled(NavLink)`
    font: 400 1.6rem 'montserrat';
    color: var(--color-white);
    margin-right: 2rem;
    border-bottom: 1px solid transparent;
    transition: all 0.2s;

    &:hover {
        color: var(--color-secondary);
        border-bottom: 1px solid var(--color-secondary);
        padding-bottom: 0.5rem;
    }

    &.active {
        color: var(--color-secondary);
        border-bottom: 1px solid var(--color-secondary);
        padding-bottom: 0.5rem;
    }
    @media ${(props) => props.theme.mediaQueries.medium} {
        font-size: 1.2rem;
    }
    @media ${(props) => props.theme.mediaQueries.small} {
        font-size: 1rem;
    }
`;
const Navitem = ({ children, to }) => {
    return (
        <Item exact to={to} activeClassName='active'>
            {children}
        </Item>
    );
};

export default Navitem;
