import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../Utils/Title';
import Input from '../Utils/Input';
import Button from '../Utils/Button';
import { connect } from 'react-redux';
import { setAlert } from '../../../redux/actions/alert';
import { sendRecoveryEmail } from '../../../redux/actions/recovery';

const Wrapper = styled.div`
    position: absolute;
    top: ${(props) => (props.open ? '50%' : '-100%')};
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60rem;
    max-width: 90%;
    box-shadow: 0 5px 10px var(--box-shadow);
    border-radius: 10px;
    background-color: var(--color-white);
    z-index: 110;
    transition: all 0.2s;
`;

const Text = styled.p`
    padding: 1rem 8rem;
    text-align: center;
    font: 400 1.6rem 'montserrat';
    line-height: 1.8;

    @media ${(props) => props.theme.mediaQueries.small} {
        font-size: 1.4rem;
        padding: 0 2rem;
        line-height: 1.6;
    }
`;

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 2rem 0;
    padding: 0 2rem;
`;

const ForgotPassword = ({
    setAlert,
    sendRecoveryEmail,
    showForgotPasswordPopup,
    setShowForgotPasswordPopup,
}) => {
    const [email, setEmail] = useState('');

    const onChange = (e) => {
        setEmail(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (email.length === 0) {
            setAlert('Email Required', 'd');
        }

        sendRecoveryEmail(email, () => setShowForgotPasswordPopup(false));
        setEmail('');
    };

    return (
        <Wrapper open={showForgotPasswordPopup}>
            <Title>Forgot Your Password ?</Title>
            <Text>Enter your email and we will send you instructions to reset your password</Text>
            <Form onSubmit={(e) => onSubmit(e)}>
                <Input
                    placeholder={'Email'}
                    type={'email'}
                    onChange={onChange}
                    value={email}
                    name={'email'}
                />
                <Button
                    type={'submit'}
                    width={50}
                    bg={'var(--color-secondary)'}
                    color={'var(--color-white)'}
                    uppercase={true}>
                    {' '}
                    Send Email{' '}
                </Button>
            </Form>
        </Wrapper>
    );
};

ForgotPassword.propTypes = {
    setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, sendRecoveryEmail })(ForgotPassword);
