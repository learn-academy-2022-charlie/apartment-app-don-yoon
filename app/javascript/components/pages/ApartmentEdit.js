import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Navigate, useParams } from 'react-router-dom'

export default function ApartmentNew(props) {
  let { id } = useParams();
  let {editApartment, current_user, apartment } = props
  const [submit, setSubmit] = useState(false)
  const [listEdit, setListEdit] = useState([])
 
  let apartmentObj = apartment.find(aptObj => aptObj.id == id)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    editApartment(listEdit, id)
    setSubmit(true)
  }
    
  return (
    <>
    {apartmentObj && apartmentObj.user_id == current_user.id &&
    <div className="form-edit-listing">
      <h2>Edit a listing</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Label> Street </Form.Label>
            <Form.Control
            type="text" placeholder={apartmentObj.street}
            onChange={(e) => setListEdit({...listEdit, street: e.target.value})}
            />
            <Form.Group>
            <Form.Label> City </Form.Label>
            <Form.Control
            type="text" placeholder={apartmentObj.city}
            onChange={(e) => setListEdit({...listEdit, city: e.target.value})}
            />
            </Form.Group>
            </Form.Group>
            <Form.Group>
            <Form.Label> State </Form.Label>
            <Form.Control
            type="text" placeholder={apartmentObj.state}
            onChange={(e) => setListEdit({...listEdit, state: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> Manager </Form.Label>
            <Form.Control
            type="text" placeholder={apartmentObj.manager}
            onChange={(e) => setListEdit({...listEdit, manager: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> E-mail </Form.Label>
            <Form.Control
            type="email" placeholder={apartmentObj.email}
            onChange={(e) => setListEdit({...listEdit, email: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> price </Form.Label>
            <Form.Control
            type="number" placeholder={`${apartmentObj.price}`}
            onChange={(e) => setListEdit({...listEdit, price: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> bedrooms </Form.Label>
            <Form.Control
            type="number" placeholder={`${apartmentObj.bedrooms}`}
            onChange={(e) => setListEdit({...listEdit, bedrooms: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> bathrooms </Form.Label>
            <Form.Control
            type="number" placeholder={`${apartmentObj.bathrooms}`}
            onChange={(e) => setListEdit({...listEdit, bathrooms: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> pets </Form.Label>
            <Form.Control
            type="text" placeholder={apartmentObj.pets}
            onChange={(e) => setListEdit({...listEdit, pets: e.target.value})}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label> image </Form.Label>
            <Form.Control
            type="text" placeholder={apartmentObj.image}
            onChange={(e) => setListEdit({...listEdit, image: e.target.value})}
            />
            </Form.Group>
          
          
          <Button type="submit" > Submit </Button>
        </Form>
    </div>
  }
      {submit && <Navigate replace to="/"/>}
  </>
  )
}
