import { useEffect, useState } from 'react';

import { Auth, GoogleAuthProvider, User } from '../../adapter/firebase';

export interface Props {
  user: User | undefined;
  login: () => void;
  logout: () => void;
}

const useEdit = (): Props => {
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

export default useEdit;
