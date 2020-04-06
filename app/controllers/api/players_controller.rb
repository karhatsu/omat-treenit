class Api::PlayersController < Api::ApiBaseController
  def create
    @player = Player.new player_params
    unless @player.save
      render status: 400, json: { errors: @player.errors.full_messages }
    end
  end

  private

  def player_params
    params.require(:player).permit(:name)
  end
end
