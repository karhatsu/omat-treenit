class Api::TeamsController < Api::ApiBaseController
  def index
    @teams = Team.visible.order(:name)
  end
end
