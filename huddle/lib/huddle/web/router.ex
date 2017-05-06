defmodule Huddle.Web.Router do
  use Huddle.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    plug Guardian.Plug.LoadResource
  end

  scope "/api", Huddle.Web do
    pipe_through :api
  end
end
