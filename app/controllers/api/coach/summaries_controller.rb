class Api::Coach::SummariesController < Api::Coach::CoachBaseController
  def show
    @players = @team.players.includes(:accomplishments).order('name')
    @task_count = @team.tasks.count
    @latest_tasks = @team.tasks.includes(:accomplishments).order('publish_date DESC').limit(5)
    @latest_accomplishments = @team.accomplishments.includes(:task, :player).order('created_at DESC').limit(20)
  end
end
