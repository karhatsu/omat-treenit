class Api::Coach::TasksController < Api::Coach::CoachBaseController
  def index
    @tasks = Task.all.includes(accomplishments: :player).order('publish_date DESC')
  end

  def create
    @task = Task.new params.require(:task).permit(:publish_date, :title, :description, :youtube_url)
    unless @task.save
      render status: 400, json: { errors: @task.errors.full_messages }
    end
  end
end
