class Product < ApplicationRecord
    has_many :purchases
    has_many :users, through: :purchases

    validates :category, presence: true
    validates :description, length: 50, presence: true
    validates :price, numericality: { greater_than: 0 }, presence: true
end
