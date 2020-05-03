class Api::Coach::CoachCommentsController < Api::Coach::CoachBaseController
  def update
    @player = @team.players.find(params[:player_id])
    @player.coach_comment = params[:coach_comment]
    @player.coach_commented_at = Time.now
    @player.save!
  end
end
