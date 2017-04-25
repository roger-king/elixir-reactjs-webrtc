# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :huddle,
  ecto_repos: [Huddle.Repo]

# Configures the endpoint
config :huddle, Huddle.Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "XBPkGZpPI4uZhHOyZjusRahvt11lV+6+41Rz5XACQHITd85yLNZM1rSWO0vTLGSr",
  render_errors: [view: Huddle.Web.ErrorView, accepts: ~w(json)],
  pubsub: [name: Huddle.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
