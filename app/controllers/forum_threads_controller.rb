class ForumThreadsController < ApplicationController
  def index
    @forum_threads = ForumThread.all
    render(
      status: 200,
      json: @forum_threads
    )
  end
end
