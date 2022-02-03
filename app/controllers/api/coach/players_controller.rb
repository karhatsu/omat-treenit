class Api::Coach::PlayersController < Api::Coach::CoachBaseController
  def index
    @players = @team.players.includes(accomplishments: :task).order('name')
    @task_count = @team.tasks.count
  end

  def destroy
    @team.players.find(params[:id]).destroy
    render status: 201, body: nil
  end
end
