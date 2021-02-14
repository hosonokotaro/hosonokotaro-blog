import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

import axiosInstance from './adapter/axiosInstance';

type Status = 'idle' | 'loading' | 'success' | 'failure';

interface TitleDate {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
}

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
  await axiosInstance
    .get<TitleDate[]>(`/get/titlelist`)
    .then((res) => {
      dispatch(setPostList(res.data));
    })
    .catch((error) => {
      console.log(error.response.status);
    });
};
