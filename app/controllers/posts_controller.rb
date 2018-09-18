class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @posts = Post.all
    render(
      status: 200,
      json: @posts
    )
  end

  def create
    @post = Post.new(post_params)
    @post.save
    render(
      status: 200,
      json: @post
    )
  end

  private

  def post_params
    params.require(:post).permit(:thread_id, :content)
  end
end
