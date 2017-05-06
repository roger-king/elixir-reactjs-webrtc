defmodule Huddle.UserView do
  use Huddle.Web, :view

  def render("user.json", %{user: user}) do
    %{id: user.id,
      username: user.username,
      email: user.email,
    }
  end

end
