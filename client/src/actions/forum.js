export function buildCategories() {
  return dispatch => {
    return fetch("/api/categories")
      .then(response => response.json())
      .then(categories => dispatch({type:"BUILD_CATEGORIES", categories}))
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
