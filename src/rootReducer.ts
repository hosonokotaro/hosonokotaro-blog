import { combineReducers } from '@reduxjs/toolkit';

import blogPostReducer from './blogPostSlice';

const rootReducer = combineReducers({
  blogPost: blogPostReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
