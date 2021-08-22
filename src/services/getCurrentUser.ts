import { firebaseAuth } from '~/adapter/firebase';

const getCurrentUser = async () => {
  const { currentUser } = firebaseAuth;

  if (!currentUser) {
    return {
      authHeader: {
        idToken: '',
      },
    };
  }

  // NOTE: ここで言う idToken とは、Firebase クライアント SDK で取得できる ID トークンを指す
  return await currentUser.getIdToken(true).then((idToken) => {
    return {
      authHeader: { idToken },
    };
  });
};

export default getCurrentUser;

export type CurrentUser = ReturnType<typeof getCurrentUser>;
