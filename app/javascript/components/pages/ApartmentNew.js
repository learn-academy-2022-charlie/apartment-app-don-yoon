import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'

export default function ApartmentNew(props) {
  
  let {createListing, current_user } = props
  
  //Better method would be to have one hook for the new Car
  const [submit, setSubmit] = useState(false)
  const [listNew, setListingNew] = useState({
    bathrooms: 0,
    bedrooms: 0,
    city: "",
    email: "",
    image: "",
    manager: "",
    pets: "",
    price: 0,
    state: "",
    street: "",
    user_id:current_user.id
  })

  const handleSubmit = (e) => {
    console.log(listNew)
    e.preventDefault()
    createListing(listNew)
    setSubmit(true)
  }
    
  return (
    <>
    <div className="form-new-listing">
      <h2>Make a new listing</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Label> Street </Form.Label>
            <Form.Control
            type="text" placeholder="Street Address"
            onChange={(e) => setListingNew({...listNew, street: e.target.value})}
            />
            <Form.Group>
            <Form.Label> City </Form.Label>
            <Form.Control
            type="text" placeholder="City"
            onChange={(e) => setListingNew({...listNew, city: e.target.value})}
            />
            </Form.Group>
            </Form.Group>
            <Form.Group>
            <Form.Label> State </Form.Label>
            <Form.Control
            type="text" placeholder="State"
            onChange={(e) => setListingNew({...listNew, state: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> Manager </Form.Label>
            <Form.Control
            type="text" placeholder="Manager"
            onChange={(e) => setListingNew({...listNew, manager: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> E-mail </Form.Label>
            <Form.Control
            type="email" placeholder="something@example.com"
            onChange={(e) => setListingNew({...listNew, email: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> price </Form.Label>
            <Form.Control
            type="number" placeholder="price"
            onChange={(e) => setListingNew({...listNew, price: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> bedrooms </Form.Label>
            <Form.Control
            type="number" placeholder="bedrooms"
            onChange={(e) => setListingNew({...listNew, bedrooms: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> bathrooms </Form.Label>
            <Form.Control
            type="number" placeholder="bathrooms"
            onChange={(e) => setListingNew({...listNew, bathrooms: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> pets </Form.Label>
            <Form.Control
            type="text" placeholder="pets"
            onChange={(e) => setListingNew({...listNew, pets: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> image </Form.Label>
            <Form.Control
            type="text" placeholder="image"
            onChange={(e) => setListingNew({...listNew, image: e.target.value})}
            />
            </Form.Group>
          
          
          <Button type="submit" > Submit </Button>
        </Form>
    </div>
      {submit && <Navigate replace to="/apartmentindex"/>}
  </>
  )
}
