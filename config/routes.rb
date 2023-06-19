Rails.application.routes.draw do
  resources :carts
  resources :users, only:[:index, :show]
  resources :purchases
  resources :products
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/logout', to: 'sessions#destroy'

end
