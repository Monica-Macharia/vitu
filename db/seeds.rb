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
       "image": "https://images.unsplash.com/photo-1484327973588-c31f829103fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
       "name": "Mini coat",
       "category": "coat",
       "description": "A white mini coat with a brown belt",
       "price": 30

    },
    {
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "name": "Crochet Designs",
        "category": "shirt",
        "description": "A v-neck crochet shirt",
        "price":  35
 
     },
     {
        "image": "https://images.unsplash.com/photo-1508742345712-0656a285ac27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "name": "Dashiki design",
        "category": "dress",
        "description": " A Casual Red Dress",
        "price": 150
 
     },
     {
        "image": "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=419&q=80",
        "name": "Ankara design",
        "category": "Dress",
        "description": "A Cocktail Dress",
        "price":  205
 
     },
     {
        "image": "https://images.unsplash.com/photo-1581452933479-cd82ee703f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        "name": "Summer Dress",
        "category": "dress",
        "description": "A summer red-flowery dress",
        "price":  200
 
     },
     {
        "image": "https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
        "name": "Slim Dress",
        "category": "dress",
        "description": "An atrist creative dress",
        "price":  70
 
     },
     {
        "image": "https://images.unsplash.com/photo-1484327973588-c31f829103fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
        "name": "Mini coat",
        "category": "coat",
        "description": "A white mini coat with a brown belt",
        "price": 30
 
     },
     {
         "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
         "name": "Crochet Designs",
         "category": "shirt",
         "description": "A v-neck crochet shirt",
         "price":  35
  
      },
      {
         "image": "https://images.unsplash.com/photo-1508742345712-0656a285ac27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
         "name": "Dashiki design",
         "category": "dress",
         "description": " A Casual Red Dress",
         "price": 150
  
      },
      {
         "image": "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=419&q=80",
         "name": "Ankara design",
         "category": "Dress",
         "description": "A Cocktail Dress",
         "price":  205
  
      },
      {
         "image": "https://images.unsplash.com/photo-1581452933479-cd82ee703f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
         "name": "Summer Dress",
         "category": "dress",
         "description": "A summer red-flowery dress",
         "price":  200
  
      },
      {
         "image": "https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
         "name": "Slim Dress",
         "category": "dress",
         "description": "An atrist creative dress",
         "price":  70
  
      }
])

User.create([
    {
        "name": "John Doe",
        "gender": "M",
        "email": "doe@etest.com",
        "password": "doe@123"
     
    },
    {
        "name": "Jane Doe",
        "gender": "F",
        "email": "jane@etest.com",
        "password": "jane@123"
      
    },
    {
        "name": "Yu Wang",
        "gender": "M",
        "email": "wang@etest.com",
        "password": "wang@123"
       
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
     }
    # {
    #     "quantity": 1,
    #     "product_id": 3,
    #     "user_id": 3
    # },
    # {
    #     "quantity": 1 ,
    #     "product_id": 4,
    #     "user_id": 3
    # },
])

puts "Mali safi designs loaded!"