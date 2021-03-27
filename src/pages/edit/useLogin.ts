import { useEffect, useState } from 'react';

import axiosInstance from '~/adapter/axiosInstance';
import { Auth, GoogleAuthProvider, User } from '~/adapter/firebase';
export interface Props {
  user: User | undefined;
  login: () => void;
  logout: () => void;
}

const useLogin = (): Props => {
  const [user, setUser] = useState<User>();

  const login = () => {
    Auth.signInWithRedirect(GoogleAuthProvider);
  };

  const logout = () => {
    Auth.signOut();
    setUser(undefined);
  };

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged((user) => {
      user && setUser(user);

      if (!Auth.currentUser) return;

      Auth.currentUser
        .getIdToken(true)
        .then((idToken) => {
          axiosInstance.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${idToken}`;
        })
        .catch((error) => {
          console.log(error);
        });
    });

    return () => {
      unsubscribe;
    };
  }, []);

  return {
    user,
    login,
    logout,
  };
};

export default useLogin;
