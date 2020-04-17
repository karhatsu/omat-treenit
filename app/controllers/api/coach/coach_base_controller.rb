class Api::Coach::CoachBaseController < Api::ApiBaseController
  before_action :verify_coach_key

  private

  def verify_coach_key
    @team = Team.where('coach_key=?', params[:coach_key]).first or render status: 401, json: { errors: ['Pääsy kielletty! 😠'] }
  end
end
