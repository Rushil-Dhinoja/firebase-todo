import * as firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDurKp6V6xX1sAMavrdoVE-HU_nbgt9E2Q',
    authDomain: 'todo-fc6ed.firebaseapp.com',
    databaseURL: 'https://todo-fc6ed.firebaseio.com',
    projectId: 'todo-fc6ed',
    storageBucket: 'todo-fc6ed.appspot.com',
    messagingSenderId: '722831891017',
    appId: '1:722831891017:web:c12a07027ebee6267f7d98',
};

firebase.initializeApp(config);

export default firebase;
