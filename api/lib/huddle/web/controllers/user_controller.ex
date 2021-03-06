defmodule Huddle.Web.UserController do
  use Huddle.Web, :controller

  alias Huddle.Accounts
  alias Huddle.Accounts.User

  plug Guardian.Plug.EnsureAuthenticated, [handler: Huddle.SessionController] when action in [:rooms]

  #def rooms(conn, _params)do
    #current_user = Guardian.Plug.current_resource(conn)
    #rooms = Repo.all(assoc(current_user, :rooms))
    #render(conn, Huddle.RoomView, "index.json", %{rooms: rooms})
  #end

  def create(conn, params) do
    IO.puts "Creating Users"
    changeset = User.registration_changeset(%User{}, params)

    case Huddle.Repo.insert(changeset) do
      {:ok, user} ->
        new_conn = Guardian.Plug.api_sign_in(conn, user, :access)
        jwt = Guardian.Plug.current_token(new_conn)

        new_conn
        |> put_status(:created)
        |> render(Huddle.Web.SessionView, "show.json", user: user, jwt: jwt)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Huddle.Web.ChangesetView, "error.json", changeset: changeset)
    end

  end

end
