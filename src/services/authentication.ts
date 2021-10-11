import {
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';

import firebaseApp from '~/adapter/firebase';

const auth = getAuth(firebaseApp);

const login = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  signInWithRedirect(auth, googleAuthProvider);
};

const logout = () => {
  signOut(auth);
};

const getCurrentUser = async () => {
  if (!auth.currentUser) {
    return {
      authHeader: {
        idToken: '',
      },
    };
  }

  // NOTE: ここで言う idToken とは、Firebase クライアント SDK で取得できる ID トークンを指す
  const idToken = await getIdToken(auth.currentUser);

  return {
    authHeader: { idToken },
  };
};

const getUid = () => {
  if (auth.currentUser && auth.currentUser.uid) {
    return auth.currentUser.uid;
  }
};

const stateChanged = (event: VoidFunction) => {
  onAuthStateChanged(auth, () => event());
};

export { getCurrentUser, getUid, login, logout, stateChanged };
