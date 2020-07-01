import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, variant, timeout = 3000) => (dispatch) => {
    dispatch({
        type: SET_ALERT,
        payload: { msg, variant },
    });

    setTimeout(() => {
        dispatch({
            type: REMOVE_ALERT,
        });
    }, timeout);
};
