class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :product_id
      t.string :description

      t.timestamps
    end
  end
end
