import React, { useEffect, useState } from 'react';

import firebase from '../adapter';
import EditPosts from '../components/EditPosts';
import NewPost from '../components/NewPost';

const Edit: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
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
        <button onClick={login}>login</button>
        <button onClick={logout}>logout</button>
      </div>
      {user ? (
        <>
          <NewPost />
          <EditPosts />
          <div>uid: {user ? user.uid : null}</div>
        </>
      ) : null}
    </article>
  );
};

export default Edit;
