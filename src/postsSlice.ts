import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

import { collectionPosts, Timestamp } from './adapter';
import formatTimestampToDate from './utility/formatTimestampToDate';

type Status = 'idle' | 'loading' | 'success' | 'failure';

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
    const post = await collectionPosts
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data();

        const post = {
          id: doc.id,
          title: data?.title ? data.title : '',
          content: data?.content ? data.content : '',
          release: data?.release ? data.release : false,
          createDate: data?.createDate
            ? formatTimestampToDate(data.createDate)
            : formatTimestampToDate(Timestamp.now()),
        };

        return post;
      });

    dispatch(pushPost(post));
  } catch (error) {
    console.log(error.message);
  }
};
