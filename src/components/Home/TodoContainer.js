import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddTodo from './AddTodo';
import Todos from './Todos';

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50rem;
    max-width: 90%;
    height: 50rem;
    box-shadow: 0 5px 10px var(--box-shadow);
    border-radius: 10px;
    margin-top: 3rem;
    overflow-y: scroll;
    z-index: 999;

    &::-webkit-scrollbar {
        appearance: none;
        width: 12px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        border: 4px solid var(--color-white);
        background-color: var(--color-secondary);
    }
`;

const TodoContainer = ({ user }) => {
    return (
        <Wrapper>
            <AddTodo user={user} />
            <Todos user={user} />
        </Wrapper>
    );
};

TodoContainer.propTypes = {
    user: PropTypes.object.isRequired,
};

export default TodoContainer;
