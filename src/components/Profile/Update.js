import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from '../Forms/Utils/Input';
import Button from '../Forms/Utils/Button';
import { setAlert } from '../../redux/actions/alert';
import { connect } from 'react-redux';
import { initials } from '../../utils/InitialsImageGenerator';
import { updateName, setNewPassword } from '../../redux/actions/recovery';
const Wrapper = styled.div`
    height: 100%;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
        margin: 3rem 0;
    }
`;

const Update = ({ user, setAlert, updateName, setNewPassword }) => {
    const [name, setName] = useState(user.displayName);
    const [passwords, setPasswords] = useState({
        password: '',
        confirmPassword: '',
    });

    const nameChange = (e) => {
        setName(e.target.value);
    };

    const passwordChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    const nameSubmit = (e) => {
        e.preventDefault();
        if (!name.match(/^[A-Za-z ]+$/)) {
            return setAlert('Name should contain only alphabets', 'd');
        }
        if (name.length === 0) {
            return setAlert('New Name Required', 'd');
        }
        if (name === user.displayName) {
            return setAlert("New Name can't be same as old Name", 'd');
        }

        const oldInitials = initials(user.displayName);
        const newInitials = initials(name);

        updateName(name, newInitials, oldInitials);
    };

    const passwordSubmit = (e) => {
        e.preventDefault();
        if (passwords.password.length === 0) {
            setPasswords({ ...passwords, password: '', confirmPassword: '' });
            return setAlert('New Password Required', 'd');
        }
        if (passwords.password.length < 8) {
            setPasswords({ ...passwords, password: '', confirmPassword: '' });
            return setAlert('New Password must Have 8 Characters', 'd');
        }

        if (passwords.password !== passwords.confirmPassword) {
            setPasswords({ ...passwords, password: '', confirmPassword: '' });
            return setAlert("Password doesn't match", 'd');
        }

        setNewPassword(passwords);
        setPasswords({ ...passwords, password: '', confirmPassword: '' });
    };

    return (
        <Wrapper>
            <Form onSubmit={(e) => nameSubmit(e)}>
                <Input value={name} onChange={nameChange} type={'text'} />
                <Button
                    bg={'var(--color-secondary)'}
                    color={'var(--color-white)'}
                    uppercase={true}
                    type={'submit'}
                    width={50}>
                    Update Name
                </Button>
            </Form>
            <Form onSubmit={(e) => passwordSubmit(e)}>
                <Input
                    value={passwords.password}
                    onChange={passwordChange}
                    name={'password'}
                    type={'password'}
                    placeholder={'New Password'}
                />
                <Input
                    value={passwords.confirmPassword}
                    onChange={passwordChange}
                    name={'confirmPassword'}
                    type={'password'}
                    placeholder={'Confirm New Password'}
                />
                <Button
                    bg={'var(--color-secondary)'}
                    color={'var(--color-white)'}
                    uppercase={true}
                    type={'submit'}
                    width={60}>
                    Update Password
                </Button>
            </Form>
        </Wrapper>
    );
};

Update.propTypes = {};

export default connect(null, { setAlert, updateName, setNewPassword })(Update);
