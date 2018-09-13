import { posts } from '../data';

function forumReducer(state = {categories: [], subCategories: [], threads: [], posts}, action) {
  switch(action.type) {
    case "BUILD_CATEGORIES":
      return {...state, categories: action.categories};

    case "BUILD_SUB_CATEGORIES":
      return {...state, subCategories: action.subCategories};

    case "BUILD_THREADS":
      console.log(action.threads);
      return {...state, threads: action.threads};

    case "ADD_THREAD":
      return {...state, threads: [...state.threads, action.thread]};

    case "ADD_POST":
      return {...state, posts: [...state.posts, action.post]};

    default:
      return state;
  }
}
export default forumReducer;
