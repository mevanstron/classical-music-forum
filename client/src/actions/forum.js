export function buildCategories() {
  return dispatch => {
    return fetch("/api/categories")
      .then(response => response.json())
      .then(categories => dispatch({type:"BUILD_CATEGORIES", categories}))
  }
}

export function buildSubCategories() {
  return dispatch => {
    return fetch("/api/sub_categories")
      .then(response => response.json())
      .then(subCategories => dispatch({type:"BUILD_SUB_CATEGORIES", subCategories}))
  }
}

export function addPost(post) {
  return {
    type: "ADD_POST",
    post: post
  }
}

export function addThread(thread) {
  return {
    type: "ADD_THREAD",
    thread: thread
  }
}
