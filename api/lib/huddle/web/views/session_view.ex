defmodule Huddle.Web.SessionView do
  use Huddle.Web, :view

  def render("show.json", %{user: user, jwt: jwt}) do
    %{
        data: render_one(user, Huddle.Web.UserView, "user.json"),
        meta: %{token: jwt}
    }
  end

  def render("error.json", _) do
    %{
        error: "Invalid email or password"
    }
  end

  def render("delete.json", _) do
    %{
        ok: true
    }
  end

  def render("forbidden.json", %{error: error}) do
    %{
        erorr: error
    }
  end
end