import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { articlesReducer } from './articlesReducer';

export const rootReducer = combineReducers({
  articles: articlesReducer,
  app: appReducer,
});
