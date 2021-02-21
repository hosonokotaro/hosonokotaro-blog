import { useEffect, useState } from 'react';

import { Auth, GoogleAuthProvider, User } from '../../adapter/firebase';

const useAuth = (): {
  user: User | null | undefined;
  login: () => void;
  logout: () => void;
} => {
  const [user, setUser] = useState<User | null>();

  const login = () => {
    Auth.signInWithRedirect(GoogleAuthProvider);
  };

  const logout = () => {
    Auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged((user) => {
      setUser(user);
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

export default useAuth;
