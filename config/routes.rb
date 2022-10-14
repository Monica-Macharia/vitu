Rails.application.routes.draw do
  resources :users, only:[:index, :show]
  resources :purchases
  resources :products, only:[:index, :show]
end
