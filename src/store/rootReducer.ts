import { combineReducers } from '@reduxjs/toolkit';

import postListReducer from './postListSlice';
import postReducer from './postSlice';

const rootReducer = combineReducers({
  postList: postListReducer,
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
