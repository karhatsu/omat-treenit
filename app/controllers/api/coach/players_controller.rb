class Api::Coach::PlayersController < Api::Coach::CoachBaseController
  def index
    @players = @team.players.includes(accomplishments: :task).order('name')
    @task_count = @team.tasks.count
  end
end
