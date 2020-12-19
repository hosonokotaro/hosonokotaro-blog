import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import { collectionPosts, TPost, TypeTimestamp } from './adapter';

export interface Post {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: TypeTimestamp;
}

const initialState: { loaded: boolean; posts: Post[] } = {
  loaded: false,
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.loaded = true;
      state.posts = action.payload;
    },
  },
});

export default postsSlice.reducer;

export const { setPosts } = postsSlice.actions;

type PostsState = ReturnType<typeof postsSlice.reducer>;

type PostsThunk = ThunkAction<void, PostsState, unknown, Action<string>>;

export const fetchPosts = (): PostsThunk => async (dispatch) => {
  try {
    const allPosts = await collectionPosts
      .where('release', '==', true)
      .orderBy('createDate', 'desc')
      .get()
      .then((postsSnapshot) => {
        const allPosts = postsSnapshot.docs.map<TPost>((doc) => ({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          release: doc.data().release,
          createDate: doc.data().createDate,
        }));

        return allPosts;
      });

    dispatch(setPosts(allPosts));
  } catch (error) {
    console.log(error.message);
  }
};
