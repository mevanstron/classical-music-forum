class ForumThreadsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @forum_threads = ForumThread.all
    render(
      status: 200,
      json: @forum_threads
    )
  end

  def create
    @forum_thread = ForumThread.new(forum_thread_params)
    @forum_thread.save
    render(
      status: 200,
      json: @forum_thread
    )
  end

  private

  def forum_thread_params
    params.require(:forum_thread).permit(:sub_category_id, :title)
  end
end
