import firebase from 'firebase';
import React, { useEffect, useState } from 'react';

import EditPosts from '../components/EditPosts';
import NewPost from '../components/NewPost';

const Edit: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <article>
      <div>
        <div>{user ? user.uid : null}</div>
        <button onClick={login}>login</button>
        <button onClick={logout}>logout</button>
      </div>
      {user ? (
        <>
          <NewPost />
          <EditPosts />
        </>
      ) : null}
    </article>
  );
};

export default Edit;
