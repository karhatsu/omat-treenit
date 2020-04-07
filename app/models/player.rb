class Player < ApplicationRecord
  has_many :accomplishments

  validates :name, presence: true, uniqueness: { message: 'on jo varattu. Jos olet aloittanut käytön jo aiemmin, käytä saamaasi linkkiä tai pyydä se Henriltä.' }

  before_create :generate_access_key

  private

  def generate_access_key
    self.access_key = SecureRandom.hex[0...16]
  end
end
