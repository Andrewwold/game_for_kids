Rails.application.routes.draw do

  post "first"   => "games#first"
  get "first"   => "games#first"

  get 'games/second'

  get 'games/third'

  get 'games/fourth'

  root 'pages#home'

  get 'pages/stuff'

  get 'pages/timer'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
