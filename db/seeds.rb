# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# User.create(name: "kuti", gender:"male" , email: "kuti4@gmail.com")
# User.create(name: "fela", gender:"male" , email: "fela4@gmail.com")
# User.create(name: "todu", gender:"female" , email: "todu4@gmail.com")
puts "Seeding mali safi!"
Product.create!([
    {
       "image": "https://cdn.shopify.com/s/files/1/1400/5987/products/black-coffee-mug-with-seahorse-design-deep-etched-integrity-bottles-2540705316980_2000x.png?v=1571303305",
       "name": "Premium Coffee Mug",
       "category": "mugs",
       "description": "pretty mug",
       "price": 30

    },
    {
        "image": "https://shopiranart.com/wp-content/uploads/2021/03/Enamel-on-pottery-mug-Garden-Design-1.jpg",
        "name": "Enamel on pottery mug",
        "category": "mugs",
        "description": "enamel mug",
        "price":  35
 
     },
     {
        "image": "https://i.pinimg.com/originals/3c/52/ad/3c52ad3337cef040cbb0abc3442416c2.jpg",
        "name": "Dashiki design",
        "category": "hoodies",
        "description": "warm designer hoodie",
        "price": 150
 
     },
     {
        "image": "https://i.pinimg.com/736x/99/c2/f8/99c2f8f2fc4f29cdb09cb587dbb0b1e6--patchwork-designs-cool-hoodies.jpg",
        "name": "Ankara design hoodie",
        "category": "hoodies",
        "description": "ankara desig hoodie warm",
        "price":  205
 
     },
     {
        "image": "http://bigxmarket.com/wp-content/uploads/2018/11/SWENEARO-2018-Simple-creative-design-line-cross-Print-cotton-T-Shirts-Men-s-New-Arrival-Summer-5.jpg",
        "name": "Swenearo 2018",
        "category": "t-shirts",
        "description": "men's new arrival summer",
        "price":  200
 
     },
     {
        "image": "https://ae01.alicdn.com/kf/HTB1WqwzPFXXXXX5XXXXq6xXFXXXY/New-Design-Fashion-Men-s-T-Shirts-2017-Summer-Flower-Patchwork-Short-Sleeve-T-Shirt-Mens.jpg",
        "name": "Summer Flower Patchwork",
        "category": "t-shirts",
        "description": "summer short sleeved t-shirt",
        "price":  70
 
     }
])

User.create([
    {
        "name": "John Doe",
        "gender": "M",
        "email": "doe@etest.com",
        "password": "doe@123",
        "password_confirmation": "doe@123"
    },
    {
        "name": "Jane Doe",
        "gender": "F",
        "email": "jane@etest.com",
        "password": "jane@123",
        "password_confirmation": "jane@123"
    },
    {
        "name": "Yu Wang",
        "gender": "M",
        "email": "wang@etest.com",
        "password": "wang@123",
        "password_confirmation": "wang@123"
    }
])

Purchase.create([
    {
        "quantity": 1,
        "product_id":1 ,
        "user_id":1
    },
    {
        "quantity":1 ,
        "product_id": 2,
        "user_id":1
    },
    {
        "quantity": 1,
        "product_id": 3,
        "user_id": 3
    },
    {
        "quantity": 1 ,
        "product_id": 4,
        "user_id": 3
    },
])

puts "Mali safi designs loaded!"