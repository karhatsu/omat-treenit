class Api::Coach::TasksController < Api::Coach::CoachBaseController
  def index
    @tasks = @team.tasks.includes(accomplishments: :player).order('publish_date DESC')
  end

  def create
    @task = @team.tasks.new task_params
    unless @task.save
      render status: 400, json: { errors: @task.errors.full_messages }
    end
  end

  def update
    @task = @team.tasks.find params[:id]
    unless @task.update task_params
      render status: 400, json: { errors: @task.errors.full_messages }
    end
  end

  private

  def task_params
    params.require(:task).permit(:publish_date, :title, :description, :youtube_url)
  end
end
