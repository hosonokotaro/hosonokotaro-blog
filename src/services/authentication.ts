import { firebaseAuth, googleAuthProvider, User } from '~/adapter/firebase';

const login = () => {
  // NOTE: 画面遷移するので、async の意味がなくなってしまう
  firebaseAuth.signInWithRedirect(googleAuthProvider);
};

const logout = () => {
  // NOTE: 画面遷移するので、async の意味がなくなってしまう
  firebaseAuth.signOut();
};

export type { User };

export { firebaseAuth, login, logout };
