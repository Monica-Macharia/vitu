class CartSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :category, :description, :price
end
