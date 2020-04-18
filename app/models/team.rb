class Team < ApplicationRecord
  has_many :players
  has_many :tasks
  has_many :accomplishments, through: :players

  before_validation :generate_coach_key, on: :create

  validates :name, presence: true, uniqueness: true
  validates :coach_key, presence: true, uniqueness: true

  private

  def generate_coach_key
    self.coach_key = SecureRandom.hex[0...16]
  end
end
