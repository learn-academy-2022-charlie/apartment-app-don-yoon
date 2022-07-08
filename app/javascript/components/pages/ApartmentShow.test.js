// Imports React into our test file.
import React from 'react'
import * as reactModule from 'react'
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { mount, shallow } from 'enzyme'
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'
// Imports in the component we are going to be testing.
import ApartmentShow from './ApartmentShow'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", () => {
 
  it("displays one card", () => {
    const apartmentIndexRender = shallow(<ApartmentShow />)
    const apartmentCards = apartmentIndexRender.find('Card')
    expect(apartmentCards.length).toEqual(1)
  })
  
})