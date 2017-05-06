defmodule Huddle.Web.Router do
  use Huddle.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Huddle.Web do
    pipe_through :api
  end
end
