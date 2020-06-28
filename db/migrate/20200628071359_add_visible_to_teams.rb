class AddVisibleToTeams < ActiveRecord::Migration[6.0]
  def change
    add_column :teams, :visible, :boolean, default: true, null: false
  end
end
