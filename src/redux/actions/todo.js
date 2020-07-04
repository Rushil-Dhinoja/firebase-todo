import firebase from '../../firebase/firebase';
import { SET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from './types';
import { setAlert } from './alert';

export const addNewTodo = (todo, userid) => async (dispatch) => {
    const db = firebase.firestore();
    try {
        const newTodo = await db.collection(userid).add({
            todo: todo,
            completed: false,
            createdAt: Date.now(),
        });

        const newT = await db.collection(userid).doc(newTodo.id).get();
        const newTodoObj = {
            id: newTodo.id,
            todo: newT.data().todo,
            completed: newT.data().completed,
        };

        dispatch({
            type: ADD_TODO,
            payload: newTodoObj,
        });
    } catch (error) {
        console.log(error);
    }
};

export const fetchAllTodos = (userid) => async (dispatch) => {
    const db = firebase.firestore();
    const todosArr = [];
    try {
        const todos = await db.collection(userid).get();
        todos.forEach((todo) => {
            const todoObj = {
                id: todo.id,
                todo: todo.data().todo,
                completed: todo.data().completed,
            };
            todosArr.push(todoObj);
        });

        dispatch({
            type: SET_TODOS,
            payload: todosArr,
        });
    } catch (error) {}
};

export const changeCompleted = (docid, userid, completed) => async (dispatch) => {
    const db = firebase.firestore();
    try {
        const load = {
            id: docid,
            completed: completed,
        };
        await db.collection(userid).doc(docid).update({
            completed: !completed,
        });
        dispatch({
            type: UPDATE_TODO,
            payload: load,
        });
    } catch (error) {
        setAlert('Something Went Wrong. Try Again Later', 'd');
    }
};

export const deleteTodo = (docid, userid) => async (dispatch) => {
    const db = firebase.firestore();
    try {
        await db.collection(userid).doc(docid).delete();
        dispatch({
            type: DELETE_TODO,
            payload: docid,
        });
    } catch (error) {
        console.log(error);
    }
};
