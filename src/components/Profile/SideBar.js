import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    width: 30%;
    background-color: var(--color-secondary);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${(props) => props.theme.mediaQueries.small} {
        width: 100%;
        height: 50%;
        flex-direction: row;
        justify-content: space-around;
        padding: 0 5rem;
    }
    @media ${(props) => props.theme.mediaQueries.smallest} {
        padding: 0 1rem;
    }

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        @media ${(props) => props.theme.mediaQueries.medium} {
            width: 150px;
            height: 150px;
        }

        @media ${(props) => props.theme.mediaQueries.small} {
            width: 150px;
            height: 150px;
            margin-right: 1rem;
        }
        @media ${(props) => props.theme.mediaQueries.smallest} {
            width: 100px;
            height: 100px;
        }
    }

    p {
        font: 400 1.6rem 'montserrat';
        color: var(--color-white);
        text-align: center;

        &:not(:last-child) {
            margin: 1rem 0;
        }

        @media ${(props) => props.theme.mediaQueries.medium} {
            font-size: 1.2rem;
        }

        @media ${(props) => props.theme.mediaQueries.small} {
            font-size: 1.4rem;
            text-align: left;
        }
        @media ${(props) => props.theme.mediaQueries.smallest} {
            font-size: 1.2rem;
        }
    }
`;

const SideBar = ({ user }) => {
    return (
        <Wrapper>
            <img src={user.photoURL} />
            <div>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
            </div>
        </Wrapper>
    );
};

SideBar.propTypes = {};

export default SideBar;
