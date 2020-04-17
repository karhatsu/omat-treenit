class AddTeamIdToTasks < ActiveRecord::Migration[6.0]
  def up
    add_reference :tasks, :team, null: false, foreign_key: true, default: 1
    change_column_default :tasks, :team_id, nil
  end

  def down
    remove_column :tasks, :team_id
  end
end
