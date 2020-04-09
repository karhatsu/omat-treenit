class Api::Coach::SummariesController < Api::Coach::CoachBaseController
  def show
    @player_count = Player.count
    @task_count = Task.count
  end
end
