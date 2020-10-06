import { useEffect, useState } from 'react';

import { Auth, GoogleAuthProvider, TypeUser } from '../../../adapter';

const useAuth = (): {
  user: TypeUser | null | undefined;
  login: () => void;
  logout: () => void;
} => {
  const [user, setUser] = useState<TypeUser | null>();

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const login = () => {
    Auth.signInWithRedirect(GoogleAuthProvider);
  };

  const logout = () => {
    Auth.signOut();
  };

  return {
    user,
    login,
    logout,
  };
};

export default useAuth;
