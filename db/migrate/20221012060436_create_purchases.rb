class CreatePurchases < ActiveRecord::Migration[7.0]
  def change
    create_table :purchases do |t|
      t.integer :quantity
      t.integer :product_id
      t.integer :user_id

      t.timestamps
    end
  end
end
