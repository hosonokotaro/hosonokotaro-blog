import { combineReducers } from '@reduxjs/toolkit';

import authorizationReducer from './authorizationSlice';
import postListReducer from './postListSlice';
import postReducer from './postSlice';

const rootReducer = combineReducers({
  authorization: authorizationReducer,
  postList: postListReducer,
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
