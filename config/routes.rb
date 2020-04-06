Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    get '/players/:access_key', to: 'players#show'
    put '/players/:access_key/accomplishment', to: 'accomplishments#update'
    resources :players, only: :create
  end

  root to: 'home#index'
  get '*path', to: "home#index"
end
