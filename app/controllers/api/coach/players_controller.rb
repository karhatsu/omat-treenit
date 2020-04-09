class Api::Coach::PlayersController < Api::Coach::CoachBaseController
  def index
    @players = Player.all.includes(accomplishments: :task).order('name')
    @task_count = Task.count
  end
end
