import React from 'react'
import { Card, Button, Row } from 'react-bootstrap'

export default function ApartmentIndex(props) {
  let { apartments } = props
  // because apartments is in another object, i think due to belonging to user, we have to destructure more
  console.log("apartments:", apartments)
  return (
    <>
      <h3>Apartment Index</h3>
      <Row xd={1} md={3}>
      {
      apartments && apartments.map((apartmentObj, index) => {
        return(
        <Card id="indexCard" key={index} style={{ width: '18rem' }}>
          <Card.Img src={apartmentObj.image} />
          <Card.Body>
            <Card.Title> {apartmentObj.street}, {apartmentObj.city}, {apartmentObj.state} </Card.Title>
            <Card.Text>
            </Card.Text>
            <Button href={`/apartmentshow/${apartmentObj.id}`} variant="primary">More Info</Button>
          </Card.Body>
        </Card>
      )
      })
      }
      </Row>
    </>
  )
}
