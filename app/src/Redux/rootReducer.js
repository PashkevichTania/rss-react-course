import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
  app: appReducer,
});

export default rootReducer;
