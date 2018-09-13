import { combineReducers } from 'redux';
import forumReducer from './forum_reducer';

const rootReducer = combineReducers({
  forum: forumReducer
})

export default rootReducer;
