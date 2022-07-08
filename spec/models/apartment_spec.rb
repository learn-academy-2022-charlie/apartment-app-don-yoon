require 'rails_helper'

RSpec.describe Apartment, type: :model do
  user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
  it 'can create an apartment with valid attributes' do
    user.apartments.create(
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
      }
    )
    apartment = Apartment.all
    p apartment
    expect(apartment.length).to eq 1
  end
  it 'cannot create an apartment with empty street' do
    apartment = user.apartments.create(
      {
        city: "Test City",
        state: "CA",
        manager: "Test Manager1",
        email: "test1email@email.com", 
        price: 100000, 
        bedrooms: 3, 
        bathrooms: 2, 
        pets: "Allowed",
        image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      }
    )
    expect(apartment.errors[:street]).to_not be_empty
  end
  it 'cannot create an apartment with empty street' do
    apartment = user.apartments.create(
      {
        street: "Test Street 1",
        state: "CA",
        manager: "Test Manager1",
        email: "test1email@email.com", 
        price: 100000, 
        bedrooms: 3, 
        bathrooms: 2, 
        pets: "Allowed",
        image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      }
    )
    expect(apartment.errors[:city]).to_not be_empty
  end
  it 'cannot create an apartment with empty attributes' do
    apartment = user.apartments.create(
      {}
    )
    expect(apartment.errors).to_not be_empty
  end
end

