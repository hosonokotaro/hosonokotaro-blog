import { useEffect, useState } from 'react';

import {
  firebaseAuth,
  login as loginFromService,
  logout as logoutFromService,
} from '~/services/authentication';

const useSession = () => {
  const [userId, setUserId] = useState<string>('');

  const login = () => {
    loginFromService();
  };

  const logout = () => {
    logoutFromService();
    // NOTE: logout が firebase でリダイレクト処理されるため、副作用となる
    window.location.href = '/edit';
  };

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      user && setUserId(user.uid);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  return {
    userId,
    login,
    logout,
  };
};

export default useSession;
