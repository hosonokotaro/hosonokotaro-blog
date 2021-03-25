import { useEffect, useState } from 'react';

import { Auth, GoogleAuthProvider, User } from '../../adapter/firebase';

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
    });

    return () => {
      unsubscribe;
    };
  }, []);

  // TODO: idToken を API へ Request header に含めて渡す？

  // これを使えばいけるか。request 時に headers を設定して問い合わせる
  // axios.get('https://api.example.com/api/v1/foo', {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   }
  // })

  if (Auth.currentUser) {
    Auth.currentUser
      .getIdToken(true)
      .then((idToken) => {
        console.log(idToken);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return {
    user,
    login,
    logout,
  };
};

export default useLogin;
