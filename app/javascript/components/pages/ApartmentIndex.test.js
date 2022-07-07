// Imports React into our test file.
import React from 'react'
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'
// Imports in the component we are going to be testing.
import ApartmentIndex from './ApartmentIndex'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", () => {
  let props = {
    apartments: [
      {
        id: 1,                                                         
        street: "Test Street 1",                                       
        city: "Test City",                                             
        state: "CA",                                                   
        manager: "Test Manager1",                                      
        email: "test1email@email.com",                                 
        price: "100000",                                               
        bedrooms: 3,                                                   
        bathrooms: 2,                                                  
        pets: "Allowed",                                               
        image:                                                         
         "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        user_id: 1
      },

      {
        id: 2,
        street: "Test Street 2",
        city: "Test City",
        state: "CA",
        manager: "Test Manager2",
        email: "test2email@email.com",
        price: "100000",
        bedrooms: 3,
        bathrooms: 2,
        pets: "Allowed",
        image:
         "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        user_id: 1 
      }
    ]
  }
  let apartmentIndexRender;
  beforeEach(() => {
    apartmentIndexRender = shallow(<ApartmentIndex apartments={props}/>)
  }
  )
  it("displays a heading", () => {
    const apartmentIndexHeading = apartmentIndexRender.find("h3")
    expect(apartmentIndexHeading.text()).toEqual("Apartment Index")
  })
  it("displays the same number of cards as apartments in the database", () => {
    const apartmentCards = apartmentIndexRender.find('[id="indexCard"]')
    expect(apartmentCards.length).toEqual(2)
  })
})