class Purchase < ApplicationRecord
    belongs_to :product
    belongs_to :user

    validates :quantity, :product_id, :user_id, presence: true
    validates :quantity, :product_id, :user_id, numericality: { only_integer: true }

end
