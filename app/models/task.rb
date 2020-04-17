class Task < ApplicationRecord
  belongs_to :team
  has_many :accomplishments

  validates :publish_date, presence: true
  validates :title, presence: true
  validates :description, presence: true
end
