json.player @player, :name
json.team @player.team, :name
json.accomplishments @player.accomplishments, :task_id, :comment, :liking
json.tasks @tasks, :id, :publish_date, :title, :description, :youtube_url
