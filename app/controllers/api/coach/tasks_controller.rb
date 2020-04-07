class Api::Coach::TasksController < Api::Coach::CoachBaseController
  def index
    @tasks = Task.all.includes(accomplishments: :player).order('publish_date DESC')
  end
end
