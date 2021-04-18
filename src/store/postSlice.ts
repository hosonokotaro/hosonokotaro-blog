import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

import axiosInstance from '~/adapter/axiosInstance';

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
    setPost(state, action: PayloadAction<Post>) {
      state.status = 'success';
      state.post = action.payload;
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

export type Target = 'publicOnly' | 'all';

export const fetchPost = (
  id: Post['id'],
  target?: Target,
  idToken?: string
): PostThunk => async (dispatch) => {
  await axiosInstance
    .get<Post>(
      target === 'all' ? getTarget(id).all : getTarget(id).publicOnly,
      target === 'all' && idToken
        ? {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          }
        : undefined
    )
    .then((res) => {
      dispatch(setPost(res.data));
    })
    .catch((error) => {
      if (error.response.status === 404) location.replace('/');
    });
};
