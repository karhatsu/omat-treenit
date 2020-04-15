json.players @players do |player|
  json.(player, :id, :name)
end
json.latest_tasks @latest_tasks do |task|
  json.(task, :id, :title, :publish_date)
  json.accomplishment_count task.accomplishments.count
end
json.latest_accomplishments @latest_accomplishments do |accomplishment|
  json.(accomplishment, :id, :liking, :comment, :created_at)
  json.player accomplishment.player, :name
  json.task accomplishment.task, :publish_date, :title
end
