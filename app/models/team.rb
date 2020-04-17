class Team < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :coach_key, presence: true, uniqueness: true

  before_create :generate_coach_key

  private

  def generate_coach_key
    self.coach_key = SecureRandom.hex[0...16]
  end
end
