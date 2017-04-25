defmodule Huddle.Web.RoomController do
    use Huddle.Web, :controller
    alias Huddle.Room

      plug Guardian.Plug.EnsureAuthenticated, handler: Huddle.SessionController

      def index(conn, _params) do
        rooms = Repo.all(Room)
        render(conn, "index.json", rooms: rooms)
      end

      def create(conn, %{"room" => room_params}) do
        changeset = Room.changeset(%Room{}, room_params)

        case Repo.insert(changeset) do
          {:ok, room} ->
            conn
            |> put_status(:created)
            |> render("show.json", room: room)
          {:error, changeset} ->
            conn
            |> put_status(:unprocessable_entity)
            |> render(Huddle.ChangesetView, "error.json", changeset: changeset)
        end
      end

      def join(conn, %{"id" => room_id})do
        current_user = Guardian.Plug.current_resource(conn)
        room = Repo.get(Room, room_id)

        changeset = Huddle.UserRoom.changeset(
            %Huddle.UserRoom{},
            %{room_id: room.id, user_id: current_user.id}
        )

        case Repo.insert(changeset) do
          {:ok, _user_room} ->
            conn
            |> put_status(:created)
            |> render("show.json", %{room: room})
          %{:error, changeset} ->
            conn
            |> put_status(:unprocessable_entity)
            |> render(Huddle.ChangesetView, "error.json", changeset: changeset)
        end
      end

      def update(conn, %{"id" => id, "room" => room_params}) do
        room = Repo.get!(Room, id)
        changeset = Room.changeset(room, room_params)

        case Repo.update(changeset) do
          {:ok, room} ->
            render(conn, "show.json", room: room)
          {:error, changeset} ->
            conn
            |> put_status(:unprocessable_entity)
            |> render(Huddle.ChangesetView, "error.json", changeset: changeset)
        end
      end

      def delete(conn, %{"id" => id}) do
        room = Repo.get!(Room, id)

        # Here we use delete! (with a bang) because we expect
        # it to always work (and if it does not, it will raise).
        Repo.delete!(room)

        send_resp(conn, :no_content, "")
      end
end