import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Forms/Utils/Input';
import Button from '../Forms/Utils/Button';
import { setAlert } from '../../redux/actions/alert';
import { connect } from 'react-redux';
import { addNewTodo } from '../../redux/actions/todo';
const TodoForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
`;

const AddTodo = ({ setAlert, addNewTodo, user }) => {
    const [todo, setTodo] = useState('');

    const onChange = (e) => {
        setTodo(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (todo.length === 0) {
            setAlert("Todo can't be empty", 'd');
        }
        addNewTodo(todo, user.uid);
        setTodo('');
    };

    return (
        <TodoForm onSubmit={(e) => onSubmit(e)}>
            <Input value={todo} onChange={onChange} placeholder={'Add New Todo...'} type={'text'} />
            <Button
                bg={'var(--color-secondary)'}
                color={'var(--color-white)'}
                width={30}
                uppercase={true}
                type={'submit'}>
                Add Todo
            </Button>
        </TodoForm>
    );
};

AddTodo.propTypes = {
    setAlert: PropTypes.func.isRequired,
    addNewTodo: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

export default connect(null, { setAlert, addNewTodo })(AddTodo);
