defmodule Huddle.Router do
  use Huddle.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Huddle do
    pipe_through :api

    post "/sessions", SessionController, :create
    delete "/sessions", SessionController, :delete
    post "/sessions/refresh", SessionController, :refresh
    resources "/users", UserController, only: [:create]
  end
end
