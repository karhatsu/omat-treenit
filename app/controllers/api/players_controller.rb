class Api::PlayersController < Api::ApiBaseController
  def show
    @player = Player.find_by_access_key params[:access_key]
    unless @player
      render status: 404, json: { errors: ['Pelaajaa ei löytynyt, tarkasta sivun osoite'] }
    end
  end

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
