import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TypeTimestamp } from './adapter';

interface Post {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: TypeTimestamp | null;
}

const initialState: Post[] = [
  {
    id: 'init',
    title: 'title',
    content: 'content',
    release: false,
    createDate: null,
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state = action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
