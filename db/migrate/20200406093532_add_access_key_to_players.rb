class AddAccessKeyToPlayers < ActiveRecord::Migration[6.0]
  def change
    add_column :players, :access_key, :string, null: false
  end
end
