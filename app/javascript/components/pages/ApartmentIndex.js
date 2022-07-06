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
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={apartmentObj.image} />
          <Card.Body>
            <Card.Title> {apartmentObj.street}, {apartmentObj.city}, {apartmentObj.state} </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
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
