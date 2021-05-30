import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

import getPostList from '~/services/getPostList';

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
      state.status = action.payload.status;
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
  targetOld: getTitleListTarget,
  idToken?: string
): PostListThunk => async (dispatch) => {
  // NOTE: 本来はやらないが、差し替え対応のためにここで Service を呼ぶ

  // NOTE: slice と互換性を取るため publicOnly → privateEnabled, all → default
  const target = targetOld === 'all' ? 'privateEnabled' : 'default';

  const response = await getPostList({ target, idToken });
  dispatch(setPostList(response));
};
