import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../Utils/Title';
import Button from '../Utils/Button';
import google from '../../../assets/img/Google.svg';
import facebook from '../../../assets/img/facebook.svg';
import { Link, Redirect } from 'react-router-dom';
import Input from '../Utils/Input';
import {
    logInWithGoogle,
    logInWithFacebook,
    createAccountWithDetails,
} from '../../../redux/actions/auth';
import { connect } from 'react-redux';
import Loader from '../../utils/Loader';
import { setAlert } from '../../../redux/actions/alert';
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

const Signup = ({
    logInWithGoogle,
    logInWithFacebook,
    setAlert,
    createAccountWithDetails,
    auth: { authenticated, loading },
}) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (formData.fullName.length === 0) {
            setFormData({ ...formData, password: '', confirmPassword: '' });
            return setAlert('Full Name Required', 'd');
        }

        if (!formData.fullName.match(/^[A-Za-z ]+$/)) {
            setFormData({ ...formData, password: '', confirmPassword: '' });
            return setAlert('Name should contain only alphabets');
        }

        if (formData.email.length === 0) {
            setFormData({ ...formData, password: '', confirmPassword: '' });
            return setAlert('Email Required', 'd');
        }
        if (formData.password.length === 0) {
            setFormData({ ...formData, password: '', confirmPassword: '' });

            return setAlert('Password Required', 'd');
        }
        if (formData.password.length < 8) {
            setFormData({ ...formData, password: '', confirmPassword: '' });

            return setAlert('Password should have 8 characters', 'd');
        }
        if (formData.password !== formData.confirmPassword) {
            setFormData({ ...formData, password: '', confirmPassword: '' });

            return setAlert("Password don't match", 'd');
        }
        setFormData({ ...formData, fullName: '', email: '', password: '', confirmPassword: '' });
        createAccountWithDetails(formData);
    };

    return (
        <div>
            {!loading ? (
                !authenticated ? (
                    <Wrapper>
                        <Title>Create Your Account</Title>
                        <ButtonWrapper>
                            <Button
                                onClick={logInWithGoogle}
                                color={'var(--color-main)'}
                                bg={'var(--color-white)'}
                                type={'button'}>
                                {' '}
                                <img src={google} alt='' />
                                Log in With Google
                            </Button>
                            <Button
                                onClick={logInWithFacebook}
                                bg={'var(--color-white)'}
                                color={'var(--color-main)'}
                                type={'button'}>
                                {' '}
                                <img src={facebook} alt='' />
                                Log in with Facebook
                            </Button>
                        </ButtonWrapper>
                        <Seprator>OR</Seprator>
                        <Form onSubmit={(e) => onSubmit(e)}>
                            <Input
                                value={formData.fullName}
                                name={'fullName'}
                                type={'text'}
                                onChange={onChange}
                                placeholder={'Full Name'}></Input>
                            <Input
                                value={formData.email}
                                name={'email'}
                                type={'email'}
                                onChange={onChange}
                                placeholder={'Email'}></Input>
                            <Input
                                value={formData.password}
                                name={'password'}
                                type={'password'}
                                onChange={onChange}
                                placeholder={'Password'}></Input>
                            <Input
                                value={formData.confirmPassword}
                                name={'confirmPassword'}
                                type={'password'}
                                onChange={onChange}
                                placeholder={'Confirm Password'}></Input>
                            <Button
                                type={'submit'}
                                bg={'var(--color-secondary)'}
                                width={50}
                                uppercase={true}
                                color={'var(--color-white)'}>
                                Sign Up
                            </Button>
                            <DisabledLinks color={'var(--color-main)'} margin={1}>
                                Already Registered ?
                            </DisabledLinks>
                            <Links
                                link={'true'}
                                color={'var(--color-secondary)'}
                                to='/login'
                                margin={0}>
                                Login
                            </Links>
                        </Form>
                    </Wrapper>
                ) : (
                    <Redirect to='/' />
                )
            ) : (
                <Loader />
            )}
        </div>
    );
};

Signup.propTypes = {
    logInWithGoogle: PropTypes.func.isRequired,
    logInWithFacebook: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    createAccountWithDetails: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {
    logInWithGoogle,
    logInWithFacebook,
    setAlert,
    createAccountWithDetails,
})(Signup);
