import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'

export default function ApartmentShow(props) {
  let [apartment, setApartment] =useState([])
  let { id } = useParams()

  let {
    logged_in,
    current_user
  } = props

  console.log("show:", logged_in)
  function showApartment (id) {
    fetch(`/apartments/${id}`)
    .then(request => request.json())
    .then(payload => setApartment(payload))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    showApartment(id)
  },[])
  // console.log(logged_in)
  return (
    <>
      <div className="show-container">
        <Card id="showCard">
          <Card.Img src={apartment.image} />
          <Card.Body>
            <Card.Title> {apartment.street}, {apartment.city}, {apartment.state} </Card.Title>
            <Card.Text>
              <span>{apartment.price}</span>
              <br/>
              <span>{apartment.bedrooms}</span>
              <br/>
              <span>{apartment.bathrooms}</span>
              <br/>
              <span>{apartment.pets}</span>
            </Card.Text>
            
              <Button href="/" variant="primary">Home</Button>
              {logged_in && current_user.id === apartment.user_id &&
              <>
              <Button href={`/apartmentedit/${apartment.id}`} variant="primary">Edit</Button>
              <Button variant="primary">Delete</Button>
              </>
              }
            
          </Card.Body>
        </Card>
      </div>
      
    </>
  )
}
