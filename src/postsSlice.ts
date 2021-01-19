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

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    pushPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
  },
});

export default postsSlice.reducer;

export const { pushPost } = postsSlice.actions;

type PostsState = ReturnType<typeof postsSlice.reducer>;

type PostsThunk = ThunkAction<void, PostsState, unknown, Action<string>>;

export const fetchPost = (id: Post['id']): PostsThunk => async (dispatch) => {
  try {
    const post = (await axiosInstance.get<Post>(`/posts/${id}`)).data;

    if (!post) return;

    dispatch(pushPost(post));
  } catch (error) {
    console.log(error.message);
  }
};
