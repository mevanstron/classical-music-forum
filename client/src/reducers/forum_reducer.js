import { posts, threads } from '../data';

function forumReducer(state = {categories: [], subCategories: [],posts, threads}, action) {
  switch(action.type) {
    case "BUILD_CATEGORIES":
      return {...state, categories: action.categories};

    case "BUILD_SUB_CATEGORIES":
      console.log(action.subCategories);
      return {...state, subCategories: action.subCategories};

    case "ADD_THREAD":
      return {...state, threads: [...state.threads, action.thread]};

    case "ADD_POST":
      return {...state, posts: [...state.posts, action.post]};

    default:
      return state;
  }
}
export default forumReducer;
