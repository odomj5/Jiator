Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] 
    resource :session, only: [:destroy, :create]
    resources :tours, only: [:index, :show] do 
      resources :reviews, only: [:index, :create]
    end
    resources :reviews, only: [:show, :update, :destroy]


  end

end
