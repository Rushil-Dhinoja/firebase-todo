import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { connect } from 'react-redux';

const Alertbox = styled.div`
    position: absolute;
    width: 30%;
    background-color: ${(props) =>
        props.variant === 'success' ? 'var(--alert-success)' : 'var(--alert-danger)'};
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 3px 6px var(--alert-shadow);
`;

const Alerttext = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem 2rem;
    text-align: center;
    font-size: 1.4rem;
    font-family: 'montserrat', 'sans-serif';
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--color-tertiary);
`;

const Alert = ({ alert: { msg, variant } }) => {
    return (
        <div>
            {msg !== null ? (
                <Alertbox variant={variant}>
                    <Alerttext>{msg}</Alerttext>
                </Alertbox>
            ) : (
                ''
            )}
        </div>
    );
};

Alert.propTypes = {
    alert: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
