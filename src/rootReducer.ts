import { combineReducers } from '@reduxjs/toolkit';

import blogPostReducer from './blogPostSlice';
import postsReducer from './postsSlice';

const rootReducer = combineReducers({
  blogPost: blogPostReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
