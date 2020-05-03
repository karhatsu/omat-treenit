# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_03_052158) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accomplishments", force: :cascade do |t|
    t.bigint "task_id", null: false
    t.bigint "player_id", null: false
    t.string "comment"
    t.integer "liking"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["player_id"], name: "index_accomplishments_on_player_id"
    t.index ["task_id"], name: "index_accomplishments_on_task_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "access_key", null: false
    t.bigint "team_id", null: false
    t.string "coach_comment"
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.date "publish_date"
    t.string "title"
    t.string "description"
    t.string "youtube_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "team_id", null: false
    t.index ["team_id"], name: "index_tasks_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.string "coach_key"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "accomplishments", "players"
  add_foreign_key "accomplishments", "tasks"
  add_foreign_key "players", "teams"
  add_foreign_key "tasks", "teams"
end
