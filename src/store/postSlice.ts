import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

import axiosInstance from '~/adapter/axiosInstance';

export interface Post {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: string;
}

export interface InitialState {
  posts: Post[];
}

// FIXME: posts → postList にしたい
// 既存の postList → titleList にしたい
const initialState: InitialState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    pushPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
  },
});

export default postSlice.reducer;

export const { pushPost } = postSlice.actions;

type PostsState = ReturnType<typeof postSlice.reducer>;

type PostsThunk = ThunkAction<void, PostsState, unknown, Action<string>>;

const getPost = (id: string): { publicOnly: string; all: string } => {
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
): PostsThunk => async (dispatch) => {
  await axiosInstance
    .get<Post>(
      target === 'all' ? getPost(id).all : getPost(id).publicOnly,
      target === 'all' && idToken
        ? {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          }
        : undefined
    )
    .then((res) => {
      dispatch(pushPost(res.data));
    })
    .catch((error) => {
      if (error.response.status === 404) location.replace('/');
    });
};
