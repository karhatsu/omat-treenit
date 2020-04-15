class Api::Coach::SummariesController < Api::Coach::CoachBaseController
  def show
    @players = Player.all.includes(:accomplishments).order('name')
    @task_count = Task.count
    @latest_tasks = Task.all.includes(:accomplishments).order('publish_date DESC').limit(5)
    @latest_accomplishments = Accomplishment.all.includes(:task, :player).order('created_at DESC').limit(10)
  end
end
