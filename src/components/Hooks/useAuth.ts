import { useEffect, useState } from 'react';

import firebase from '../../adapter';

const useAuth = (): {
  user: firebase.User | null | undefined;
  login: () => void;
  logout: () => void;
} => {
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

  return {
    user,
    login,
    logout,
  };
};

export default useAuth;
