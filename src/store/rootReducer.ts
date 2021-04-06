import { combineReducers } from '@reduxjs/toolkit';

import authHeaderReducer from './authHeaderSlice';
import postListReducer from './postListSlice';
import postReducer from './postSlice';

const rootReducer = combineReducers({
  authHeader: authHeaderReducer,
  postList: postListReducer,
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
