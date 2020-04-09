json.players @players do |player|
  json.(player, :id, :name, :access_key)
  json.accomplishments player.accomplishments.joins(:task).order('tasks.publish_date DESC') do |accomplishment|
    json.(accomplishment, :id, :liking, :comment)
    json.task accomplishment.task, :title
  end
end
