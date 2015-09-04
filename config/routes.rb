Rails.application.routes.draw do
  resources :calculator
  root 'calculator#index'
end
