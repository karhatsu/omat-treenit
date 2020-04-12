class Api::Coach::SummariesController < Api::Coach::CoachBaseController
  def show
    @players = Player.all.order('name')
    @task_count = Task.count
    @latest_accomplishments = Accomplishment.all.includes(:task, :player).order('created_at DESC').limit(5)
  end
end
