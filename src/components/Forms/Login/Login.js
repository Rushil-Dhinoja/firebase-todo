import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../Utils/Title';
import Button from '../Utils/Button';
import google from '../../../assets/img/Google.svg';
import facebook from '../../../assets/img/facebook.svg';
import {
    logInWithGoogle,
    logInWithFacebook,
    logInWithDetails,
} from '../../../controller/FormsController';
import { Link } from 'react-router-dom';
import Input from '../Utils/Input';

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 52rem;
    max-width: 90%;
    box-shadow: 0 5px 10px var(--box-shadow);
    border-radius: 10px;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    margin: 1rem 0;
    padding: 0 2rem;
    display: flex;
    justify-content: center;

    @media ${(props) => props.theme.mediaQueries.small} {
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
`;

const Seprator = styled.p`
    width: 100%;
    text-align: center;
    font: 300 1.5rem 'montserrat';
    margin: 1rem 0 2rem 0;
    position: relative;

    &::before,
    &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 40%;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--color-main);
        backface-visibility: hidden;
        @media ${(props) => props.theme.mediaQueries.small} {
            width: 38%;
        }
    }
    &::before {
        left: 2rem;
    }
    &::after {
        right: 2rem;
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

const Links = styled(Link)`
    margin: ${(props) => (props.margin ? props.margin + 'rem 0 0 0' : '0.5rem 0')};
    color: ${(props) => props.color};
    font: 300 ${(props) => (props.size ? props.size + 'rem' : '1.2rem')} 'montserrat';

    &:hover {
        text-decoration: ${(props) => (props.link ? 'underline' : '')};
    }

    @media ${(props) => props.theme.mediaQueries.small} {
        margin: ${(props) => (props.margin !== 0 ? props.margin + 'rem 0 0 0' : '0 0')};
    }
`;

const DisabledLinks = styled.p`
    margin: ${(props) => (props.margin ? props.margin + 'rem 0 0 0' : '0.5rem 0')};
    color: ${(props) => props.color};
    font: 300 ${(props) => (props.size ? props.size + 'rem' : '1.2rem')} 'montserrat';

    &:hover {
        text-decoration: ${(props) => (props.link ? 'underline' : '')};
    }

    @media ${(props) => props.theme.mediaQueries.small} {
        margin: ${(props) => (props.margin !== 0 ? props.margin + 'rem 0 0 0' : '0 0')};
    }
`;

const Login = () => {
    return (
        <Wrapper>
            <Title>Login to your account</Title>
            <ButtonWrapper>
                <Button
                    color={'var(--color-main)'}
                    bg={'var(--color-white)'}
                    type={'button'}
                    onClick={logInWithGoogle}>
                    {' '}
                    <img src={google} alt='G' />
                    Log in With Google
                </Button>

                <Button
                    color={'var(--color-main)'}
                    bg={'var(--color-white)'}
                    type={'button'}
                    onClick={logInWithFacebook}>
                    {' '}
                    <img src={facebook} alt='F' />
                    Log in with Facebook
                </Button>
            </ButtonWrapper>
            <Seprator>OR</Seprator>
            <Form onSubmit={(e) => logInWithDetails(e)}>
                <Input name={'email'} type={'email'} placeholder={'Email'} />
                <Input name={'password'} type={'password'} placeholder={'Password'} />
                <Button
                    uppercase={true}
                    color={'var(--color-white)'}
                    width={'50'}
                    bg={'var(--color-secondary)'}
                    type={'submit'}>
                    Log in
                </Button>
                <DisabledLinks link={'true'} color={'var(--color-secondary)'}>
                    Forgot Password ?
                </DisabledLinks>
                <DisabledLinks color={'var(--color-main)'} size={1.4} margin={1.5}>
                    {' '}
                    Don't have an Account ?
                </DisabledLinks>
                <Links to='/signup' link={'true'} color={'var(--color-secondary)'} margin={0}>
                    Create Account
                </Links>
            </Form>
        </Wrapper>
    );
};

Login.propTypes = {};

export default Login;
