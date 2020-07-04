import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import deleteImg from '../../assets/img/delete.svg';
import { connect } from 'react-redux';
import { changeCompleted, deleteTodo } from '../../redux/actions/todo';
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    font: 400 1.4rem 'montserrat';
    padding: 1rem;
    border-radius: 5px;
    background-color: var(--color-accent);
    &:not(:last-child) {
        margin: 1rem 0;
    }

    input {
        cursor: pointer;
    }

    img {
        margin: 0 2rem 0 auto;
        cursor: pointer;
    }
`;

const Text = styled.p`
    padding-left: 1rem;
    text-decoration: ${(props) => (props.comp ? 'line-through' : '')};
`;

const Todo = ({ children, completed, id, changeCompleted, deleteTodo, auth: { user } }) => {
    return (
        <Wrapper>
            <div>
                <label htmlFor=''></label>
                <input
                    onChange={() => changeCompleted(id, user.uid, completed)}
                    checked={completed}
                    type='checkbox'
                    name=''
                    id=''
                />
            </div>
            <Text comp={completed}>{children}</Text>
            <img onClick={() => deleteTodo(id, user.uid)} src={deleteImg} />
        </Wrapper>
    );
};

Todo.propTypes = {};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { changeCompleted, deleteTodo })(Todo);
