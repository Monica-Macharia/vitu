class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :product_id, :user_id
  belongs_to :product, :user
end

