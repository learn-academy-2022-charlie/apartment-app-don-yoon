import React from 'react'
import { Card, Button } from 'react-bootstrap'
export default function ApartmentIndex(props) {
  
  let { apartments } = props.apartments
  // because apartments is in another object, i think due to belonging to user, we have to destructure more
  console.log("apartments:", apartments)
  return (
    <>
      <h3>Apartment Index</h3>
      {
      apartments && apartments.map((apartmentObj, index) => {
        return(
        <Card id="indexCard" key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={apartmentObj.image} />
          <Card.Body>
            <Card.Title> {apartmentObj.street}, {apartmentObj.city}, {apartmentObj.state} </Card.Title>
            <Card.Text>
              <p>Price: {apartmentObj.price }</p>
              <p>Bedrooms: {apartmentObj.bedrooms }</p>
              <p>Bathrooms: {apartmentObj.bathrooms}</p>
              <p>Pets: {apartmentObj.pets}</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
      )
      })
      }
    </>
  )
}
