class Accomplishment < ApplicationRecord
  belongs_to :task
  belongs_to :player
end
