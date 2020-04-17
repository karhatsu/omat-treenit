class AddTeamIdToPlayers < ActiveRecord::Migration[6.0]
  def up
    add_reference :players, :team, null: false, foreign_key: true, default: 1
    change_column_default :players, :team_id, nil
  end

  def down
    remove_column :players, :team_id
  end
end
