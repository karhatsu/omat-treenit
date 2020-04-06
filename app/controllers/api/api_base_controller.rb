class Api::ApiBaseController < ApplicationController
  protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }

  private

  def find_player
    @player = Player.find_by_access_key params[:access_key]
  end
end
