Rails.application.routes.draw do
  resources :users, only:[:index, :show]
  resources :purchases
  resources :products, only:[:index, :show]

  #login
  post '/login', to: 'sessions#create'

  #signup

  post '/signup', to: 'users#create'

  #logout
  delete '/logout', to: 'sessions#destroy'
end
