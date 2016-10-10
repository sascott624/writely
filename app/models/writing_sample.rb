class WritingSample < ApplicationRecord
  validates :content, :genre, :author, presence: true
end
