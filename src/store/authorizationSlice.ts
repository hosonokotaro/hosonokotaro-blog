import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

type Status = 'idle' | 'loading' | 'success' | 'failure';

interface Authorization {
  bearerToken: string | undefined;
}

export interface InitialState {
  status: Status;
  authorization: Authorization;
}

const initialState: InitialState = {
  status: 'idle',
  authorization: {
    bearerToken: undefined,
  },
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setAuthorization(state, action: PayloadAction<Authorization>) {
      state.status = 'success';
      state.authorization = action.payload;
    },
  },
});

export default authorizationSlice.reducer;

export const { setAuthorization } = authorizationSlice.actions;

type authorizationState = ReturnType<typeof authorizationSlice.reducer>;

type authorizationThunk = ThunkAction<
  void,
  authorizationState,
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
