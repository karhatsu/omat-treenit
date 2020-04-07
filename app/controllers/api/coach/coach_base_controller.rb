class Api::Coach::CoachBaseController < Api::ApiBaseController
  before_action :verify_coach_key

  private

  def verify_coach_key
    if (Rails.env.development? && params[:coach_key] != 'local') || (Rails.env.production? && params[:coach_key] != ENV['COACH_KEY'])
      render status: 401, json: { errors: ['Pääsy kielletty! 😠'] }
    end
  end
end
