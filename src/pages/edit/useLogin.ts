import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Auth, GoogleAuthProvider, User } from '~/adapter/firebase';
import { setAuthHeader, setBearerToken } from '~/store/authHeaderSlice';
import { RootState } from '~/store/rootReducer';

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
    Auth.signInWithRedirect(GoogleAuthProvider);
  };

  const logout = () => {
    setUser(undefined);
    dispatch(setAuthHeader({ bearerToken: undefined }));
    Auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged((user) => {
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
