import { firebaseAuth } from '~/adapter/firebase';

// FIXME: status を利用側が正しく使っていないので修正したい
const getCurrentUser = async () => {
  const { currentUser } = firebaseAuth;

  if (!currentUser) {
    return {
      status: 'idle' as const,
      authHeader: {
        idToken: '',
      },
    };
  }

  // NOTE: ここで言う idToken とは、Firebase クライアント SDK で取得できる ID トークンを指す
  return await currentUser
    .getIdToken(true)
    .then((idToken) => {
      return {
        status: 'success' as const,
        authHeader: { idToken },
      };
    })
    .catch(() => {
      return {
        status: 'failure' as const,
        authHeader: {
          idToken: '',
        },
      };
    });
};

export default getCurrentUser;

export type CurrentUser = ReturnType<typeof getCurrentUser>;
