class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :product_id, :user_id
end

