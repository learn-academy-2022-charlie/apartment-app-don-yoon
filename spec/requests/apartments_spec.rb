require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/apartments", type: :request do
  # This should return the minimal set of attributes required to create a valid
  # Apartment. As you add validations to Apartment, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    # skip("Add a hash of attributes valid for your model")
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
      image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      user_id:1
    }
  }

  let(:invalid_attributes) {
    # skip("Add a hash of attributes invalid for your model")
    {
      street: nil,
      city: nil,
      state: nil,
      manager: nil,
      email: nil, 
      price: nil, 
      bedrooms: nil, 
      bathrooms: nil, 
      pets: nil,
      image: nil,
      user_id:nil
    }
  }

  # This should return the minimal set of values that should be in the headers
  # in order to pass any filters (e.g. authentication) defined in
  # ApartmentsController, or in your router and rack
  # middleware. Be sure to keep this updated too.
  let(:valid_headers) {
    {}
  }
  
  User.create(email: 'test@example.com', password: '12345678', password_confirmation: '12345678')

  describe "GET /index" do
    it "renders a successful response" do
      Apartment.create! valid_attributes
      get apartments_url, headers: valid_headers, as: :json
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      apartment = Apartment.create! valid_attributes
      get apartment_url(apartment), as: :json
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Apartment" do
        expect {
          post apartments_url,
               params: { apartment: valid_attributes }, headers: valid_headers, as: :json
        }.to change(Apartment, :count).by(1)
      end

      it "renders a JSON response with the new apartment" do
        post apartments_url,
             params: { apartment: valid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:created)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Apartment" do
        expect {
          post apartments_url,
               params: { apartment: invalid_attributes }, as: :json
        }.to change(Apartment, :count).by(0)
      end

      it "renders a JSON response with errors for the new apartment" do
        post apartments_url,
             params: { apartment: invalid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        {
          street: "Test Street 11",
          city: "Test City",
          state: "CA",
          manager: "Test Manager1",
          email: "test1email@email.com", 
          price: 100000, 
          bedrooms: 3, 
          bathrooms: 2, 
          pets: "Allowed",
          image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          user_id:1
        }
      }

      it "updates the requested apartment" do
        apartment = Apartment.create! valid_attributes
        patch apartment_url(apartment),
              params: { apartment: new_attributes }, headers: valid_headers, as: :json
        apartment.reload
        skip("Add assertions for updated state")
      end

      it "renders a JSON response with the apartment" do
        apartment = Apartment.create! valid_attributes
        patch apartment_url(apartment),
              params: { apartment: new_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "renders a JSON response with errors for the apartment" do
        apartment = Apartment.create! valid_attributes
        patch apartment_url(apartment),
              params: { apartment: invalid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested apartment" do
      apartment = Apartment.create! valid_attributes
      expect {
        delete apartment_url(apartment), headers: valid_headers, as: :json
      }.to change(Apartment, :count).by(-1)
    end
  end
end
