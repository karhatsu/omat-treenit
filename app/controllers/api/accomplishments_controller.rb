class Api::AccomplishmentsController < Api::ApiBaseController
  before_action :find_player, only: :update

  def update
    @accomplishment = @player.accomplishments.where(task_id: params[:task_id]).first
    @accomplishment = @player.accomplishments.build(task_id: params[:task_id]) unless @accomplishment
    @accomplishment.liking = params[:liking]
    @accomplishment.comment = params[:comment]
    render status: 400, json: { errors: @accomplishment.errors.full_messages } unless @accomplishment.save
  end
end
