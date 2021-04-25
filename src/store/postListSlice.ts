import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

import axiosInstance from '~/adapter/axiosInstance';

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
    setPostList(state, action: PayloadAction<InitialState>) {
      state.status = 'success';
      state.titleDateList = action.payload.titleDateList;
    },
  },
});

export default postListSlice.reducer;

export const { setPostList } = postListSlice.actions;

type PostListState = ReturnType<typeof postListSlice.reducer>;

type PostListThunk = ThunkAction<void, PostListState, unknown, Action<string>>;

export const getTitleList = {
  publicOnly: '/get/titlelist',
  all: '/get/titlelist?private=enabled',
} as const;

export type getTitleListTarget = keyof typeof getTitleList;

export const fetchPostList = (
  target: getTitleListTarget,
  idToken?: string
): PostListThunk => async (dispatch) => {
  await axiosInstance
    .get<TitleDate[]>(
      getTitleList[target],
      target === 'all' && idToken
        ? {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          }
        : undefined
    )
    .then((res) => {
      dispatch(setPostList({ status: 'success', titleDateList: res.data }));
    })
    .catch((error) => {
      console.log(error.response.status);
    });
};
