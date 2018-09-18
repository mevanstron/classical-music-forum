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

export function buildThreads() {
  return dispatch => {
    return fetch("/api/forum_threads")
      .then(response => response.json())
      .then(threads => dispatch({type:"BUILD_THREADS", threads}))
  }
}

export function buildPosts() {
  return dispatch => {
    return fetch("/api/posts")
      .then(response => response.json())
      .then(posts => dispatch({type:"BUILD_POSTS", posts}))
  }
}

export function addThread(thread) {
  return dispatch => {
    return fetch("/api/forum_threads", {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({forum_thread: thread})})
      .then(response => response.json())
      .then(thread => dispatch({type: "ADD_THREAD", thread}))
  }
}

export function addPost(post) {
  return dispatch => {
    return fetch("/api/posts", {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({post: post})})
      .then(response => response.json())
      .then(post => dispatch({type: "ADD_POST", post}))
  }
}
