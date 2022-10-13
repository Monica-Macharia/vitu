class User < ApplicationRecord
    has_many :purchases
    has_many :products, through: :purchases

    validates :email, uniqueness: true
    has_secure_password

end
