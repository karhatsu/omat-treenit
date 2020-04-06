class Api::AccomplishmentsController < Api::ApiBaseController
  before_action :find_player, only: :update

  def update
    @accomplishment = @player.accomplishments.find_or_create_by! task_id: params[:task_id] do |accomplishment|
      accomplishment.liking = params[:liking]
      accomplishment.comment = params[:comment]
    end
  end
end
