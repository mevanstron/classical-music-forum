class CategoriesController < ApplicationController

  def index
    @categories = Category.all
    render(
      status: 200,
      json: @categories
    )
  end
end
