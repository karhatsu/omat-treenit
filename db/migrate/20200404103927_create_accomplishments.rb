class CreateAccomplishments < ActiveRecord::Migration[6.0]
  def change
    create_table :accomplishments do |t|
      t.references :task, null: false, foreign_key: true
      t.references :player, null: false, foreign_key: true
      t.string :comment
      t.integer :liking

      t.timestamps
    end
  end
end
