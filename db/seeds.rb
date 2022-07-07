# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
user2 = User.create(email: 'test2@example.com',password:'12345678', password_confirmation:'12345678')
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
apartments_array2 = [
    {
        street: "Test Street 3",
        city: "Test City",
        state: "CA",
        manager: "Test Manager3",
        email: "test3email@email.com", 
        price: 100000, 
        bedrooms: 3, 
        bathrooms: 2, 
        pets: "Not Allowed",
        image: "https://images.unsplash.com/photo-1597047084993-bf337e09ede0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
        street: "Test Street 4",
        city: "Test City",
        state: "CA",
        manager: "Test Manager4",
        email: "test4email@email.com", 
        price: 100000, 
        bedrooms: 3, 
        bathrooms: 2, 
        pets: "Not Allowed",
        image: "https://images.unsplash.com/photo-1525438160292-a4a860951216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
]

apartments_array.each do |apartment_obj|
    user.apartments.create apartment_obj
end
apartments_array2.each do |apartment_obj|
    user2.apartments.create apartment_obj
end