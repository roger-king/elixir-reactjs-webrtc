defmodule Huddle.UserRoom do
  use Huddle.Web, :model

  schema "user_rooms" do
    belongs_to :user, Huddle.User
    belongs_to :room, Huddle.Room

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [])
    |> validate_required([])
    |> unique_constraint(:user_id_room_id)
  end
end
