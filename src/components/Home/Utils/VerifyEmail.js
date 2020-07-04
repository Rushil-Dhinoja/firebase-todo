import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../Forms/Utils/Title';
import Button from '../../Forms/Utils/Button';
import { connect } from 'react-redux';
import { resendVerificationEamil } from '../../../redux/actions/recovery';

const Wrapper = styled.div`
    width: 60rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 6rem;
    max-width: 90%;
    box-shadow: 0 5px 10px var(--box-shadow);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 4rem 0;
`;

const Welcome = styled.p`
    text-align: center;
    font: 600 2rem 'montserrat';
    margin: 1rem 0;
    span {
        font-weight: 400;
        color: var(--color-secondary);
    }
`;

const WelcomeText = styled.p`
    text-align: center;
    font: 400 1.4rem 'montserrat';
    margin: 2rem 2rem;

    span {
        font-weight: 600;
        color: var(--color-secondary);
    }
`;

const ActionText = styled.p`
    text-align: center;
    font: 600 2rem 'montserrat';
    margin: 0 0 2rem 0;
`;

const VerifyEmail = ({ user, resendVerificationEamil }) => {
    return (
        <Wrapper>
            <Title>Verify Your Email</Title>
            <Welcome>
                {' '}
                Welcome,{' '}
                <span>
                    {' '}
                    {user !== null && user.displayName ? user.displayName.split(' ')[0] : ''}{' '}
                </span>
            </Welcome>
            <WelcomeText>
                Almost there we've sent a verification email to <span> {user.email}</span>, You need
                to verify your email to continue.
            </WelcomeText>
            <ActionText>Don't see it ?</ActionText>
            <Button
                width={60}
                bg={'var(--color-secondary)'}
                color={'var(--color-white)'}
                uppercase={true}
                type={'button'}
                onClick={resendVerificationEamil}>
                Send Again
            </Button>
        </Wrapper>
    );
};

VerifyEmail.propTypes = {
    user: PropTypes.object.isRequired,
    resendVerificationEamil: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { resendVerificationEamil })(VerifyEmail);
