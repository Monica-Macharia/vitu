class ProductsSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :description, :price
  has_many :purchases
end
