import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

import axiosInstance from '../adapter/axiosInstance';

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

const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    setPostList(state, action: PayloadAction<TitleDate[]>) {
      state.status = 'success';
      state.titleDateList = action.payload;
    },
  },
});

export default postListSlice.reducer;

export const { setPostList } = postListSlice.actions;

type PostListState = ReturnType<typeof postListSlice.reducer>;

type PostListThunk = ThunkAction<void, PostListState, unknown, Action<string>>;

export const fetchPostList = (): PostListThunk => async (dispatch) => {
  await axiosInstance
    .get<TitleDate[]>(`/get/titlelist`)
    .then((res) => {
      dispatch(setPostList(res.data));
    })
    .catch((error) => {
      console.log(error.response.status);
    });
};
