import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

export default function ApartmentShow(props) {
  let [apartment, setApartment] =React.useState([])
  let { id } = useParams()

  let {
    logged_in,
    current_user,
    deleteListing
  } = props

  console.log("show:", logged_in)
  function showApartment (id) {
    fetch(`/apartments/${id}`)
    .then(request => request.json())
    .then(payload => setApartment(payload))
    .catch(err => console.log(err))
  }

  const handleClick = (id) => {
    deleteListing(id)
    location.reload()
  }
  useEffect(() => {
    showApartment(id)
  },[])
   console.log(apartment)
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
              <Button id="edit" href={`/apartmentedit/${apartment.id}`} variant="primary">Edit</Button>
              <Button id="delete" onClick={()=> handleClick(apartment.id)}variant="primary">Delete</Button>
              </>
              }
            
          </Card.Body>
        </Card>
      </div>
      
    </>
  )
}
