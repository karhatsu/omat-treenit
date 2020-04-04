class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.date :publish_date
      t.string :title
      t.string :description
      t.string :youtube_url

      t.timestamps
    end
  end
end
