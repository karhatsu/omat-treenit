class Player < ApplicationRecord
  belongs_to :team
  has_many :accomplishments

  before_validation :generate_access_key, on: :create

  validates :name, presence: true, uniqueness: {
      scope: :team_id, case_sensitive: false,
      message: 'on jo varattu. Jos olet aloittanut käytön jo aiemmin, käytä saamaasi linkkiä tai pyydä se valmentajalta.'
  }
  validates :access_key, presence: true, uniqueness: true

  private

  def generate_access_key
    self.access_key = SecureRandom.hex[0...16]
  end
end
