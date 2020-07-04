import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../Forms/Utils/Title';
import Todo from './Todo';
import { fetchAllTodos } from '../../redux/actions/todo';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    width: 100%;
    flex-grow: 1;
    height: 100%;
    padding: 0 3rem;
`;

const Todos = ({ fetchAllTodos, user, todo: { todos } }) => {
    useEffect(() => {
        fetchAllTodos(user.uid);
    }, [fetchAllTodos]);
    return (
        <Wrapper>
            <Title>Your Todos</Title>
            {todos.map((todo, i) => (
                <Todo completed={todo.completed} id={todo.id} key={todo.id}>
                    {todo.todo}
                </Todo>
            ))}
        </Wrapper>
    );
};

Todos.propTypes = {};

const mapStateToProps = (state) => ({
    todo: state.todo,
});

export default connect(mapStateToProps, { fetchAllTodos })(Todos);
