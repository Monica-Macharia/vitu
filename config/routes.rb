Rails.application.routes.draw do
  resources :users, only:[:show]
  resources :purchases
  resources :products, only:[:index, :show]
end
