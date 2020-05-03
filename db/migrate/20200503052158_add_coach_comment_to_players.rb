class AddCoachCommentToPlayers < ActiveRecord::Migration[6.0]
  def change
    add_column :players, :coach_comment, :string
  end
end
