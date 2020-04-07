class Api::Coach::TasksController < Api::Coach::CoachBaseController
  def index
    @tasks = Task.all.order('publish_date DESC')
  end
end
