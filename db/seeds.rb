# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

apartments_array = [
    {
        street: "Test Street 1",
        city: "Test City",
        state: "CA",
        manager: "Test Manager1",
        email: "test1email@email.com", 
        price: 100000, 
        bedrooms: 3, 
        bathrooms: 2, 
        pets: "Allowed",
        image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
        street: "Test Street 2",
        city: "Test City",
        state: "CA",
        manager: "Test Manager2",
        email: "test2email@email.com", 
        price: 100000, 
        bedrooms: 3, 
        bathrooms: 2, 
        pets: "Allowed",
        image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
]

apartments_array.each do |apartment_obj|
    user.apartments.create apartment_obj
end