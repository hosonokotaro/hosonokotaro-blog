import 'firebase/firestore';
import 'firebase/auth';

import dayjs from 'dayjs';
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

firebase.firestore();

export default firebase;

export const collectionPosts = firebase
  .firestore()
  .collection('posts') as firebase.firestore.CollectionReference<TPost>;

export type TPost = {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: firebase.firestore.Timestamp;
};

export type TPostTitle = {
  id: string;
  title: string;
  release: boolean;
  createDate: firebase.firestore.Timestamp;
};

// firebase の Timestamp を日本語の表記に変換する
export const formatTimestampToDate = (
  timestamp: firebase.firestore.Timestamp
): string => dayjs(timestamp.toDate()).format('YYYY年M月D日 HH:mm');
