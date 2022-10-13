class Review < ApplicationRecord
    belongs_to :user
    belongs_to :product

    validates :product_id, presence: true
    validates :user_id, presence: true
    validates :description, presence: true
end
