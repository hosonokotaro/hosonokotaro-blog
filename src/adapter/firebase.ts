import 'firebase/compat/auth';
import 'firebase/compat/storage';

import { initializeApp } from 'firebase/app';
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

export const firebaseApp = initializeApp(firebaseConfig);
