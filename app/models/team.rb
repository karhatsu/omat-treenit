class Team < ApplicationRecord
  has_many :players
  has_many :tasks
  has_many :accomplishments, through: :players

  validates :name, presence: true, uniqueness: true
  validates :coach_key, presence: true, uniqueness: true

  before_create :generate_coach_key

  private

  def generate_coach_key
    self.coach_key = SecureRandom.hex[0...16]
  end
end
