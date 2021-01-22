import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

import axiosInstance from './adapter/axiosInstance';

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

export const fetchPost = (id: Post['id']): PostsThunk => async (dispatch) => {
  await axiosInstance
    .get<Post>(`/post/${id}`)
    .then((res) => {
      dispatch(pushPost(res.data));
    })
    .catch((error) => {
      console.log(error.response.status);
    });
};
