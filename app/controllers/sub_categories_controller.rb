class SubCategoriesController < ApplicationController
  def index
    @sub_categories = SubCategory.all
    render(
      status: 200,
      json: @sub_categories
    )
  end
end
