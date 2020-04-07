class Task < ApplicationRecord
  has_many :accomplishments

  validates :publish_date, presence: true
  validates :title, presence: true
  validates :description, presence: true
end
