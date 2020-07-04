import { SET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/types';
const initialState = {
    todos: [],
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [payload, ...state.todos],
            };
        case SET_TODOS:
            return { ...state, todos: payload };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === payload.id) {
                        return { ...todo, completed: !payload.completed };
                    }
                    return { ...todo };
                }),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== payload),
            };
        default:
            return initialState;
    }
}
