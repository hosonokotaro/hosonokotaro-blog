import { combineReducers } from '@reduxjs/toolkit';

import blogPostReducer from './blogPostSlice';
import postReducer from './postSlice';

const rootReducer = combineReducers({
  blogPost: blogPostReducer,
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
