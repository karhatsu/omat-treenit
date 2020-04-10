class Api::Coach::SummariesController < Api::Coach::CoachBaseController
  def show
    @players = Player.all.order('name')
    @task_count = Task.count
  end
end
