Rails.application.routes.draw do
  root to: 'writely#index'

  resources :writing_samples, only: [:index, :create, :new, :show]
end
