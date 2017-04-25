defmodule Huddle.Router do
  use Huddle.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    plug Guardian.Plug.LoadResource
  end

  scope "/api", Huddle do
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

    scope "/rooms" do
      resources "/", RoomController, only: [:index, :create]
      post "/:id/join", RoomController, :join
    end

  end
end
