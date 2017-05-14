defmodule Huddle.Web.Router do
  use Huddle.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    plug Guardian.Plug.LoadResource
  end

  scope "/api", Huddle.Web do
    pipe_through :api

    scope "/sessions" do
      post "/", SessionController, :create
      delete "/", SessionController, :delete
      post "/refresh", SessionController, :refresh
    end
    scope "/users" do
      resources "/", UserController, only: [:create]
      get "/:id/rooms", UserController, :rooms
    end
  end
end
