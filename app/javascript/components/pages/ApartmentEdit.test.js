// Imports React into our test file.
import React from 'react'
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { mount, shallow } from 'enzyme'
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'
// Imports in the component we are going to be testing.
import ApartmentEdit from './ApartmentEdit'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

//Can't get mock useParams() hook data
describe("When ApartmentEdit renders", () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      id: '1',
    }),
    useRouteMatch: ()=> ({ url: "/apartmentedit/1"})
  }));
  let props = {
    current_user :{ id: 1 },
    apartment:[{
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
    image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    user_id: 1
  }]
}
  it("displays a heading", () => {
    const apartmentEdit = shallow(<ApartmentEdit />)
    const apartmentEditHeading = apartmentEdit.find("h2")
    expect(apartmentEditHeading.length).toEqual(1)
  })
  it("displays a form", () => {
    const apartmentEdit = shallow(<ApartmentEdit {...props}/>)
    const apartmentEditForm = apartmentEdit.find("Form")
    console.log(apartmentEdit.debug())
    expect(apartmentEditForm.length).toEqual(1)
  })
  
})