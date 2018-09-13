Rails.application.routes.draw do
  resources :posts
  resources :forum_threads
  resources :sub_categories
  resources :categories

  scope '/api' do
    get :categories, to: 'categories#index'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end