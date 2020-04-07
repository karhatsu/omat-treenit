json.tasks @tasks do |task|
  json.(task, :id, :publish_date, :title, :description, :youtube_url)
  json.accomplishments task.accomplishments do |accomplishment|
    json.(accomplishment, :id, :liking, :comment)
    json.player accomplishment.player, :name
  end
end
