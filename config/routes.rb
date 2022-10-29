Rails.application.routes.draw do
  resources :users, only:[:index, :show]
  resources :purchases
  resources :products, only:[:index, :show]
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/logout', to: 'sessions#destroy'

end
