json.players @players do |player|
  json.(player, :id, :name)
end
json.task_count @task_count
json.latest_accomplishments @latest_accomplishments do |accomplishment|
  json.(accomplishment, :id, :liking, :comment, :created_at)
  json.player accomplishment.player, :name
  json.task accomplishment.task, :publish_date, :title
end
