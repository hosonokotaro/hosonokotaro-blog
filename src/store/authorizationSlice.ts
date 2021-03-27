import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
