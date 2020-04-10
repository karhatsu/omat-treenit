json.players @players do |player|
  json.(player, :id, :name)
end
json.task_count @task_count
