json.players @players do |player|
  json.(player, :id, :name, :access_key, :coach_comment)
  json.accomplishments player.accomplishments.includes(:task).order('created_at DESC') do |accomplishment|
    json.(accomplishment, :id, :liking, :comment, :created_at)
    json.task accomplishment.task, :title
  end
end
json.task_count @task_count
