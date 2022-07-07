// Imports React into our test file.
import React from 'react'
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'
// Imports in the component we are going to be testing.
import Header from './Header'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When Header renders", () => {
let props = {
  logged_in:true,
  current_user: "test@example.com",
  new_user_route: "/users/sign_up",
  sign_in_route: "users/sign_in",
  sign_out_route: "users/sign-out"
}

  it("displays a navbar", () => {
    const header = shallow(<Header {...props} />)
    const headerHeading = header.find("Navbar")
    expect(headerHeading.length).toEqual(1)
  })
})