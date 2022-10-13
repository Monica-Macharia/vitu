class ProductsSerializer < ActiveModel::Serializer
  attributes :image, :name, :category, :description, :price, :reviews

  has_many :reviews
end
