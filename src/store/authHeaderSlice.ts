import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

type Status = 'idle' | 'loading' | 'success' | 'failure';

interface AuthHeader {
  bearerToken: string | undefined;
}

export interface InitialState {
  status: Status;
  authHeader: AuthHeader;
}

const initialState: InitialState = {
  status: 'idle',
  authHeader: {
    bearerToken: undefined,
  },
};

const authHeaderSlice = createSlice({
  name: 'authHeader',
  initialState,
  reducers: {
    setAuthHeader(state, action: PayloadAction<AuthHeader>) {
      state.status = 'success';
      state.authHeader = action.payload;
    },
  },
});

export default authHeaderSlice.reducer;

export const { setAuthHeader } = authHeaderSlice.actions;

type authHeaderState = ReturnType<typeof authHeaderSlice.reducer>;

type authHeaderThunk = ThunkAction<
  void,
  authHeaderState,
  unknown,
  Action<string>
>;

// TODO: 認証後に Bearer token をセットする処理を書く

// if (!Auth.currentUser) return;

//       Auth.currentUser
//         .getIdToken(true)
//         .then((idToken) => {
//           axiosInstance.defaults.headers.common[
//             'Authorization'
//           ] = `Bearer ${idToken}`;
//         })
//         .catch((error) => {
//           console.log(error);
//         });
