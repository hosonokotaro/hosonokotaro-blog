import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import { collectionPosts } from './adapter';
import formatTimestampToDate from './utility/formatTimestampToDate';

interface TitleDate {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
}

// 有限状態マシン
type status = 'idle' | 'loading' | 'success' | 'failure';

export interface InitialStateType {
  status: status;
  titleDateList: TitleDate[];
}

const initialState: InitialStateType = {
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

type PostsState = ReturnType<typeof blogPostSlice.reducer>;

type PostsThunk = ThunkAction<void, PostsState, unknown, Action<string>>;

export const fetchPostList = (): PostsThunk => async (dispatch) => {
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
