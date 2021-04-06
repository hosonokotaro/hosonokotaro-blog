import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

import { firebaseAuth } from '~/adapter/firebase';

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

type AuthHeaderState = ReturnType<typeof authHeaderSlice.reducer>;

type AuthHeaderThunk = ThunkAction<
  void,
  AuthHeaderState,
  unknown,
  Action<string>
>;

export const setBearerToken = (): AuthHeaderThunk => (dispatch) => {
  if (!firebaseAuth.currentUser) return;

  firebaseAuth.currentUser
    .getIdToken(true)
    .then((bearerToken) => {
      dispatch(setAuthHeader({ bearerToken }));
    })
    .catch((error) => {
      console.log(error);
    });
};
