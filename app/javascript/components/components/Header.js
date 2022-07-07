import React from 'react'
import { Container, Col, Row, Nav, Navbar, NavDropdown, Card } from 'react-bootstrap'
import { useState } from 'react'
import { Offcanvas, Button } from 'react-bootstrap'

export default function Header(props) {
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
    apartments
  } = props
  
  // console.log("logged_in:", logged_in)
  // console.log("current_user:", current_user)
  // console.log("new_user_route:", new_user_route)
  // console.log("sign_in_route:", sign_in_route)
  // console.log("sign_out_route:", sign_out_route)
  
  // create custom hooks to keep track of whether the offcanvas is visible or not
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Row className="justify-content-left"> */}
            {/* <Col> */}
              <Navbar.Brand href="/"> Apartment App </Navbar.Brand>
              <NavDropdown id="nav-drop" title="Pages">
                <NavDropdown.Item href="/apartmentindex"> Index </NavDropdown.Item>
                <NavDropdown.Item href="/apartmentnew"> New </NavDropdown.Item>
              </NavDropdown>
            {/* </Col> */}
            {/* <Col> */}
            {/* </Col> */}
          {/* </Row> */}
        {/* </Container> */}
        {/* <Container> */}
          {/* <Row className="justify-content-right"> */}
            {/* <Col> */}
              <Button variant="outline-light" onClick={handleShow}>
                    Listings
              </Button>
            {/* </Col>   */}
            {/* <Col> */}
              <NavDropdown id="nav-drop" title="Account">
                  {logged_in &&  
                      <NavDropdown.Item id="logout" href={sign_out_route}> Sign Out </NavDropdown.Item>
                  }
            
                  {!logged_in &&
                      <NavDropdown.Item href={sign_in_route}> Sign In </NavDropdown.Item>
                  }
              
                  {!logged_in &&
                      <NavDropdown.Item href={new_user_route}> Sign Up </NavDropdown.Item>
                  }
                </NavDropdown>
            {/* </Col>   */}
          {/* </Row> */}
        </Container>
      </Navbar>

      {logged_in &&
            <>
              
                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title> {current_user.email} Listings </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {
                    apartments.filter(apartmentObj => apartmentObj.user_id === current_user.id).map((apartmentObj, index) => {
                        return(
                        <Card id="indexCard" key={index} style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={apartmentObj.image} />
                          <Card.Body>
                            <Card.Title> {apartmentObj.street}, {apartmentObj.city}, {apartmentObj.state} </Card.Title>
                            <Card.Text>
                            </Card.Text>
                              <Button href={`/apartmentshow/${apartmentObj.id}`} variant="primary">More Info</Button>
                              <Button variant="primary">Edit</Button>
                              <Button variant="primary">Delete</Button>
                          </Card.Body>
                        </Card>
                      )
                      }) 
                    }
                    
                  </Offcanvas.Body>
                </Offcanvas>
          </>
        }
    </>
  )
}