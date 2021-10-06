import 'firebase/compat/auth';
import 'firebase/compat/storage';

import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBsC6ZAinkt3n3fB0B-Yo1UMqwqaoCzi4s',
  authDomain: 'hosonokotaro-blog.firebaseapp.com',
  databaseURL: 'https://hosonokotaro-blog.firebaseio.com',
  projectId: 'hosonokotaro-blog',
  storageBucket: 'hosonokotaro-blog.appspot.com',
  messagingSenderId: '23911354523',
  appId: '1:23911354523:web:56bec2eb2bf7d1b712f63e',
};

firebase.initializeApp(firebaseConfig);

// NOTE: firebase auth を利用する場合の設定
export const firebaseAuth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export type User = firebase.User;

// NOTE: firebase storage を利用する場合の設定
const storage = firebase.storage();
const storageRef = storage.ref();

export const publicImages = storageRef.child('public/images');
export type PublicImages = typeof publicImages;

export default firebase;
