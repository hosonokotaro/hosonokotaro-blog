import { useCallback, useEffect, useState } from 'react';

import {
  getUid,
  login as loginFromService,
  logout as logoutFromService,
  stateChanged,
} from '~/services/authentication';

const useSession = () => {
  const [userId, setUserId] = useState<string>('');

  const login = useCallback(() => {
    loginFromService();
  }, []);

  const logout = useCallback(() => {
    logoutFromService();
    // NOTE: logout が firebase でリダイレクト処理されるため、副作用となる
    window.location.href = '/edit';
  }, []);

  const getCurrentUser = useCallback(() => {
    const uid = getUid();
    uid && setUserId(uid);
  }, []);

  useEffect(() => {
    const unsubscribe = stateChanged(getCurrentUser);

    return () => {
      unsubscribe;
    };
  }, [getCurrentUser]);

  return {
    userId,
    login,
    logout,
  };
};

export default useSession;
