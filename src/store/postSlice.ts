import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

import getPost from '~/services/getPost';

type Status = 'idle' | 'loading' | 'success' | 'failure';

export interface Post {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: string;
}

export interface InitialState {
  status: Status;
  post: Post;
}

const initialState: InitialState = {
  status: 'idle',
  post: {
    id: '',
    title: '',
    content: '',
    release: false,
    createDate: '',
  },
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost(state, action: PayloadAction<InitialState>) {
      state.status = action.payload.status;
      state.post = action.payload.post;
    },
  },
});

export default postSlice.reducer;

export const { setPost } = postSlice.actions;

type PostState = ReturnType<typeof postSlice.reducer>;

type PostThunk = ThunkAction<void, PostState, unknown, Action<string>>;

const getTarget = (id: string): { publicOnly: string; all: string } => {
  return {
    publicOnly: `/get/post/${id}`,
    all: `/get/post/${id}?private=enabled`,
  };
};

export type Target = keyof ReturnType<typeof getTarget>;

export const fetchPost = (
  id: Post['id'],
  targetOld?: Target,
  idToken?: string
): PostThunk => async (dispatch) => {
  // NOTE: 本来はやらないが、差し替え対応のためにここで Service を呼ぶ

  // NOTE: slice と互換性を取るため publicOnly → privateEnabled, all → default
  const target = targetOld === 'all' ? 'privateEnabled' : 'default';

  const response = await getPost({ id, target, idToken });
  dispatch(setPost(response));
};
