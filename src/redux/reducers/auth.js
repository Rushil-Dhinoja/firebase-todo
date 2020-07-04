import {
    SET_LOADING,
    LOG_IN_WITH_GOOGLE,
    LOG_IN_WITH_FACEBOOK,
    SET_USER,
    SIGN_OUT_USER,
    LOG_IN_WITH_EMAIL_PASS,
    CREATE_ACCOUNT_WITH_EMAIL_PASS,
} from '../actions/types';

const initialState = {
    authenticated: false,
    loading: false,
    user: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_LOADING:
            return { ...state, loading: !state.loading };
        case LOG_IN_WITH_GOOGLE:
        case LOG_IN_WITH_FACEBOOK:
        case CREATE_ACCOUNT_WITH_EMAIL_PASS:
        case LOG_IN_WITH_EMAIL_PASS:
        case SET_USER:
            return { ...state, authenticated: true, loading: false, user: payload };
        case SIGN_OUT_USER:
            return initialState;
        default:
            return state;
    }
}
