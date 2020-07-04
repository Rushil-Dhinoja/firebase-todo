import { SET_LOADING, DECREMENT, SET_COUNTDOWN, SIGN_OUT_USER } from './types';
import firebase from '../../firebase/firebase';
import { setAlert } from './alert';
import { picturesFromInitials, random } from '../../utils/InitialsImageGenerator';

export const sendRecoveryEmail = (email, cb) => async (dispatch) => {
    dispatch({ type: SET_LOADING });
    try {
        await firebase.auth().sendPasswordResetEmail(email);

        dispatch(setAlert('Email Send Succesfully', 'success'));
        dispatch({ type: SET_LOADING });
        cb();
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            dispatch(setAlert('Email is not Registered', 'd'));
        } else {
            dispatch(setAlert('Something went wrong, Try again later', 'd'));
        }
        dispatch({ type: SET_LOADING });
    }
};

export const resendVerificationEamil = () => async (dispatch) => {
    try {
        await firebase.auth().currentUser.sendEmailVerification();
        dispatch(setAlert('Verification Email Send Again', 'success'));
    } catch (error) {
        console.log(error);
        dispatch(setAlert('Something Went Wrong. Try again later', 'd'));
    }
};

export const updateName = (name, newInitials, oldInitials) => async (dispatch) => {
    const storage = firebase.storage();
    dispatch({ type: SET_LOADING });
    try {
        if (newInitials === oldInitials) {
            await firebase.auth().currentUser.updateProfile({
                displayName: name,
            });

            return dispatch({ type: SET_LOADING });
        }

        const user = await firebase.auth().currentUser.uid;
        const img = picturesFromInitials(name, random());
        const res = await storage.ref().child(`profilePics/${user}`).putString(img, 'data_url');
        const imgUrl = await storage.ref().child(res.metadata.fullPath).getDownloadURL();

        await firebase.auth().currentUser.updateProfile({
            displayName: name,
            photoURL: imgUrl,
        });

        dispatch({ type: SET_LOADING });
    } catch (error) {
        console.log(error);
        dispatch({ type: SET_LOADING });
        dispatch(setAlert('Something Went Wrong. Try Again Later', 'd'));
    }
};

export const setNewPassword = (passwords) => async (dispatch) => {
    const { password } = passwords;
    dispatch({ type: SET_LOADING });
    try {
        await firebase.auth().currentUser.updatePassword(password);
        await firebase.auth().signOut();
        dispatch(setAlert('Password Changed Succesfully. Login With New Password', 'success'));
        dispatch({ type: SET_LOADING });
        dispatch({ type: SIGN_OUT_USER });
    } catch (error) {
        if (error.code === 'auth/requires-recent-login') {
            dispatch({ type: SET_LOADING });
            return dispatch(setAlert('Login Again To Change Password', 'd'));
        }
        dispatch({ type: SET_LOADING });
        dispatch(setAlert('Something Went Wrong. Try Again Later'));
    }
};
