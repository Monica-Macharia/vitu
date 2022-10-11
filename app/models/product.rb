class Product < ApplicationRecord
    has_many :purchases
    has_many :users, through: :purchases

    validates :name, presence: true
    validates :image_url, presence: true
    validates :category, presence: true
    validates :description, presence: true
    validates :price, numericality: { greater_than: 0 }, presence: true
end
