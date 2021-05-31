import { firebaseAuth } from '~/adapter/firebase';

type Status = 'idle' | 'loading' | 'success' | 'failure';

type AuthHeader = {
  bearerToken: string;
};

export interface Response {
  status: Status;
  authHeader: AuthHeader;
}

const getBearerToken = async (): Promise<Response | undefined> => {
  // NOTE: ログインしていなければ return される
  if (!firebaseAuth.currentUser) return;

  // NOTE: ここで言う Token とは、Firebase クライアント SDK で取得できる ID トークンを指す
  return await firebaseAuth.currentUser
    .getIdToken(true)
    .then((bearerToken) => {
      return {
        status: 'success' as const,
        authHeader: { bearerToken },
      };
    })
    .catch(() => {
      return {
        status: 'failure' as const,
        authHeader: {
          bearerToken: '',
        },
      };
    });
};

export default getBearerToken;
