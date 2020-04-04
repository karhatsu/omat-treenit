class Task < ApplicationRecord
  validates :publish_date, presence: true
  validates :title, presence: true
  validates :description, presence: true
end
