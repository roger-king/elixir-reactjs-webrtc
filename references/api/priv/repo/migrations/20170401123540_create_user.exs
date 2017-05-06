defmodule Huddle.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :username, :string
      add :email, :string
      add :password_hash, :string, null: false

      timestamps()
    end

    create unique_index(:users, [:username])
    create unique_index(:users, [:email])

  end
end
