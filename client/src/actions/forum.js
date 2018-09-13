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
