import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = {
    msg: null,
    variant: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            return {
                ...state,
                msg: payload.msg,
                variant: payload.variant,
            };
        case REMOVE_ALERT:
            return initialState;
        default:
            return state;
    }
}
