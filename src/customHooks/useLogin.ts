import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { User } from '~/adapter/firebase';
import { firebaseAuth, googleAuthProvider } from '~/adapter/firebase';
import { setAuthHeader, setBearerToken } from '~/store/authHeaderSlice';
import type { RootState } from '~/store/rootReducer';

export interface Props {
  user: User | undefined;
  login: () => void;
  logout: () => void;
}

const useLogin = (): Props => {
  const [user, setUser] = useState<User>();
  const dispatch = useDispatch();
  const { authHeader } = useSelector((state: RootState) => state.authHeader);

  const login = () => {
    firebaseAuth.signInWithRedirect(googleAuthProvider);
  };

  const logout = () => {
    setUser(undefined);
    dispatch(
      setAuthHeader({ status: 'idle', authHeader: { bearerToken: undefined } })
    );
    firebaseAuth.signOut();
  };

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      user && setUser(user);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  useEffect(() => {
    if (authHeader.bearerToken) return;
    dispatch(setBearerToken());
  });

  return {
    user,
    login,
    logout,
  };
};

export default useLogin;
