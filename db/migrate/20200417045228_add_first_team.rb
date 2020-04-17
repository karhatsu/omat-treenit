class AddFirstTeam < ActiveRecord::Migration[6.0]
  def up
    Team.create! name: 'FC Kontu P2011', coach_key: ENV['COACH_KEY'] || 'local'
  end

  def down
    Team.destroy_all
  end
end
