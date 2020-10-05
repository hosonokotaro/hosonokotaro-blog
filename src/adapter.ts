import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';

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

export default firebase;

export const collectionPosts = firebase
  .firestore()
  .collection('posts') as firebase.firestore.CollectionReference<TPost>;

export const Timestamp = firebase.firestore.Timestamp;
export type TypeTimestamp = firebase.firestore.Timestamp;

export type TypeUser = firebase.User;

export const Auth = firebase.auth();

export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export type TPost = {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: TypeTimestamp;
};

export type TPostTitle = {
  id: string;
  title: string;
  release: boolean;
  createDate: TypeTimestamp;
};
