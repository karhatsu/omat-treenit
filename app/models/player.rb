class Player < ApplicationRecord
  belongs_to :team
  has_many :accomplishments

  validates :name, presence: true, uniqueness: {
      case_sensitive: false, message: 'on jo varattu. Jos olet aloittanut käytön jo aiemmin, käytä saamaasi linkkiä tai pyydä se Henriltä.'
  }

  before_create :generate_access_key

  private

  def generate_access_key
    self.access_key = SecureRandom.hex[0...16]
  end
end
