import {
    LOG_IN_WITH_GOOGLE,
    SET_LOADING,
    LOG_IN_WITH_FACEBOOK,
    SET_USER,
    SIGN_OUT_USER,
    LOG_IN_WITH_EMAIL_PASS,
    CREATE_ACCOUNT_WITH_EMAIL_PASS,
} from './types';
import { setAlert } from './alert';
import firebase from '../../firebase/firebase';
import { random, picturesFromInitials } from '../../utils/InitialsImageGenerator';

export const setUser = () => async (dispatch) => {
    try {
        dispatch({
            type: SET_LOADING,
        });
        await firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch({
                    type: SET_USER,
                    payload: user,
                });
            } else {
                dispatch({
                    type: SET_LOADING,
                });
            }
        });
    } catch (error) {
        dispatch(setAlert('Something Went Wrong, Try Again Later', 'd'));
        dispatch({ type: SIGN_OUT_USER });
    }
};

export const logInWithGoogle = () => async (dispatch) => {
    const storage = firebase.storage();

    dispatch({
        type: SET_LOADING,
    });

    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = await firebase.auth().signInWithPopup(provider);

        const img = picturesFromInitials(user.user.displayName, random());
        const res = await storage
            .ref()
            .child(`profilePics/${user.user.uid}`)
            .putString(img, 'data_url');

        const imgUrl = await storage.ref().child(res.metadata.fullPath).getDownloadURL();

        await user.user.updateProfile({
            photoURL: imgUrl,
        });

        dispatch({
            type: LOG_IN_WITH_GOOGLE,
            payload: user.user,
        });
        dispatch(setAlert('Logged In Successfully', 'success'));
    } catch (error) {
        console.log(error);
        dispatch(setAlert('Something Went Wrong', 'danger'));
        dispatch({ type: SIGN_OUT_USER });
        dispatch({
            type: SET_LOADING,
        });
    }
};

export const logInWithFacebook = () => async (dispatch) => {
    const storage = firebase.storage();
    dispatch({
        type: SET_LOADING,
    });
    try {
        const provider = new firebase.auth.FacebookAuthProvider();
        const user = await firebase.auth().signInWithPopup(provider);
        const img = picturesFromInitials(user.user.displayName, random());

        const res = await storage
            .ref()
            .child(`profilePics/${user.user.uid}`)
            .putString(img, 'data_url');

        const imgUrl = await storage.ref().child(res.metadata.fullPath).getDownloadURL();
        await user.user.updateProfile({
            photoURL: imgUrl,
        });

        if (!user.user.emailVerified) {
            user.user.sendEmailVerification();
        }

        dispatch({
            type: LOG_IN_WITH_FACEBOOK,
            payload: user.user,
        });
        dispatch(setAlert('Logged In Successfully', 'success'));
    } catch (error) {
        console.log(error);
        if (error.code === 'auth/account-exists-with-different-credential') {
            dispatch({ type: SIGN_OUT_USER });
            dispatch({ type: SET_LOADING });
            return dispatch(setAlert('Already Registered. Please try logging in.', 'd'));
        }

        dispatch({ type: SET_LOADING });
        dispatch({ type: SIGN_OUT_USER });
        dispatch(setAlert('Something Went Wrong', 'danger'));
    }
};

export const createAccountWithDetails = (formData) => async (dispatch) => {
    const { fullName, email, password } = formData;
    const storage = firebase.storage();

    dispatch({ type: SET_LOADING });

    try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password);

        const img = picturesFromInitials(fullName, random());

        const res = await storage
            .ref()
            .child(`profilePics/${user.user.uid}`)
            .putString(img, 'data_url');

        const imgUrl = await storage.ref().child(res.metadata.fullPath).getDownloadURL();

        await user.user.updateProfile({
            displayName: fullName,
            photoURL: imgUrl,
        });
        if (!user.user.emailVerified) {
            user.user.sendEmailVerification();
        }
        dispatch({
            type: CREATE_ACCOUNT_WITH_EMAIL_PASS,
            payload: user.user,
        });
        dispatch(setAlert('Logged In Successfully', 'success'));
    } catch (error) {
        if (error.code === 'auth/invalid-email') {
            dispatch({ type: SIGN_OUT_USER });
            dispatch({ type: SET_LOADING });
            return dispatch(setAlert('Invalid Email', 'd'));
        }
        if (error.code === 'auth/email-already-in-use') {
            dispatch({ type: SIGN_OUT_USER });

            dispatch({ type: SET_LOADING });

            return dispatch(setAlert('Already Registered. Please try logging in.', 'd'));
        }
        dispatch({ type: SIGN_OUT_USER });

        dispatch(setAlert('Something Went Wrong. Try Again Later', 'd'));
    }
};

export const logInUserWithDetails = (formData) => async (dispatch) => {
    const { email, password } = formData;
    dispatch({
        type: SET_LOADING,
    });
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        dispatch({
            type: LOG_IN_WITH_EMAIL_PASS,
            payload: user.user,
        });
        dispatch(setAlert('Logged In Successfully', 'success'));
    } catch (error) {
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
            dispatch({ type: SIGN_OUT_USER });
            return dispatch(setAlert('Invalid Credentials', 'd'));
        }
        dispatch({ type: SIGN_OUT_USER });
        dispatch(setAlert('Something Went Wrong. Try Again Later', 'd'));
    }
};

export const logOutUser = () => async (dispatch) => {
    try {
        await firebase.auth().signOut();
        dispatch({
            type: SIGN_OUT_USER,
        });
        dispatch(setAlert('Logged Out Successfully', 'success'));
    } catch (error) {
        dispatch(setAlert('Something Went Wrong. Try again Later'));
        dispatch({ type: SIGN_OUT_USER });
    }
};
