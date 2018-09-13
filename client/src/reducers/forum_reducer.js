import { posts, threads } from '../data';

function forumReducer(state = {posts, threads}, action) {
  switch(action.type) {
    case "ADD_THREAD":
      return {...state, threads: [...state.threads, action.thread]};
    case "ADD_POST":
      return {...state, posts: [...state.posts, action.post]};
    default:
      return state;
  }
}
export default forumReducer;
