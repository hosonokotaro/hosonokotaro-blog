import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

import getCurrentUser from '~/services/getCurrentUser';

type Status = 'idle' | 'loading' | 'success' | 'failure';

interface AuthHeader {
  idToken: string | undefined;
}

export interface InitialState {
  status: Status;
  authHeader: AuthHeader;
}

const initialState: InitialState = {
  status: 'idle',
  authHeader: {
    idToken: undefined,
  },
};

const authHeaderSlice = createSlice({
  name: 'authHeader',
  initialState,
  reducers: {
    setAuthHeader(state, action: PayloadAction<InitialState>) {
      state.status = action.payload.status;
      state.authHeader = action.payload.authHeader;
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

export const setIdToken = (): AuthHeaderThunk => async (dispatch) => {
  // NOTE: 本来はやらないが、差し替え対応のためにここで Service を呼ぶ
  const response = await getCurrentUser();

  if (!response) return;

  dispatch(setAuthHeader(response));
};
