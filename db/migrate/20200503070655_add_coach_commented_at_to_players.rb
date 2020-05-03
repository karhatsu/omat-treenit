class AddCoachCommentedAtToPlayers < ActiveRecord::Migration[6.0]
  def up
    add_column :players, :coach_commented_at, :datetime
    execute 'update players set coach_commented_at=updated_at where coach_comment is not null'
  end

  def down
    remove_column :players, :coach_commented_at
  end
end
