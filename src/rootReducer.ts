import { combineReducers } from '@reduxjs/toolkit';

import blogPostReducer from './postListSlice';

const rootReducer = combineReducers({
  blogPost: blogPostReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
