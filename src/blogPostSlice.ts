import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

import { collectionPosts } from './adapter';
import formatTimestampToDate from './utility/formatTimestampToDate';

interface TitleDate {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
}

type Status = 'idle' | 'loading' | 'success' | 'failure';

export interface InitialState {
  status: Status;
  titleDateList: TitleDate[];
}

const initialState: InitialState = {
  status: 'idle',
  titleDateList: [],
};

const blogPostSlice = createSlice({
  name: 'blogPost',
  initialState,
  reducers: {
    setPostList(state, action: PayloadAction<TitleDate[]>) {
      state.status = 'success';
      state.titleDateList = action.payload;
    },
  },
});

export default blogPostSlice.reducer;

export const { setPostList } = blogPostSlice.actions;

type BlogPostState = ReturnType<typeof blogPostSlice.reducer>;

type BlogPostThunk = ThunkAction<void, BlogPostState, unknown, Action<string>>;

export const fetchPostList = (): BlogPostThunk => async (dispatch) => {
  try {
    const allPosts = await collectionPosts
      .where('release', '==', true)
      .orderBy('createDate', 'desc')
      .get()
      .then((postsSnapshot) => {
        const allPosts = postsSnapshot.docs.map<TitleDate>((doc) => ({
          id: doc.id,
          title: doc.data().title,
          release: doc.data().release,
          createDate: formatTimestampToDate(doc.data().createDate),
        }));

        return allPosts;
      });

    dispatch(setPostList(allPosts));
  } catch (error) {
    console.log(error.message);
  }
};
