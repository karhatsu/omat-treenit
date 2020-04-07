Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    get '/players/:access_key', to: 'players#show'
    put '/players/:access_key/accomplishment', to: 'accomplishments#update'
    resources :players, only: :create

    namespace :coach, path: 'coach/:coach_key' do
      resources :tasks, only: :index
    end
  end

  root to: 'home#index'
  get '*path', to: "home#index"
end
