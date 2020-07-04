import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: var(--color-secondary);
    z-index: 100;
    opacity: 0.5;
    cursor: pointer;
`;

const Backdrop = ({ setShowForgotPasswordPopup }) => {
    return <Background onClick={() => setShowForgotPasswordPopup(false)}></Background>;
};

Backdrop.propTypes = {
    setShowForgotPasswordPopup: PropTypes.func,
};

export default Backdrop;
