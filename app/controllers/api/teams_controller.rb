class Api::TeamsController < Api::ApiBaseController
  def index
    @teams = Team.all.order(:name)
  end
end
