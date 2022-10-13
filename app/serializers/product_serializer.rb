class ProductSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :description, :price
  has_many :purchases
end
