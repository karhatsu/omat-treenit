class Api::PlayersController < Api::ApiBaseController
  before_action :find_player, only: :show

  def show
    return render status: 404, json: { errors: ['Pelaajaa ei löytynyt, tarkasta sivun osoite'] } unless @player
    @tasks = Task.all.order('publish_date DESC')
  end

  def create
    @player = Player.new player_params
    unless @player.save
      render status: 400, json: { errors: @player.errors.full_messages }
    end
  end

  private

  def player_params
    params.require(:player).permit(:team_id, :name)
  end
end
