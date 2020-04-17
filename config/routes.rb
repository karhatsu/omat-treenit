Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    get '/players/:access_key', to: 'players#show'
    put '/players/:access_key/accomplishment', to: 'accomplishments#update'
    resources :players, only: :create
    resources :teams, only: :index

    namespace :coach, path: 'coach/:coach_key' do
      resource :summary, only: :show
      resources :players, only: :index
      resources :tasks, only: [:index, :create, :update]
    end
  end

  root to: 'home#index'
  get '*path', to: "home#index"
end
