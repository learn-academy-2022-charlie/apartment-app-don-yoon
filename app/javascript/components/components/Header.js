import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Header(props) {
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
  } = props
  console.log("logged_in:", logged_in)
  console.log("current_user:", current_user)
  console.log("new_user_route:", new_user_route)
  console.log("sign_in_route:", sign_in_route)
  console.log("sign_out_route:", sign_out_route)
  return (
    <>
      
      <Navbar bg="light">
        <Container>
          <NavDropdown>
            <NavDropdown.Item href="/apartmentindex"> Index </NavDropdown.Item>
            <NavDropdown.Item href="/apartmentshow"> Show </NavDropdown.Item>
            <NavDropdown.Item href="/apartmentnew"> New </NavDropdown.Item>
            <NavDropdown.Item href="/apartmentedit"> Edit </NavDropdown.Item>
          </NavDropdown>
          <Navbar.Brand href="/"> Apartment App </Navbar.Brand>
          <Nav>
            {logged_in &&
              <Nav.Item>
                <a href={sign_out_route} className="nav-link">Sign Out</a>
              </Nav.Item>
            }
            {!logged_in &&
              <Nav.Item>
                <a href={sign_in_route} className="nav-link">Sign In</a>
              </Nav.Item>
            }
            {!logged_in &&
              <Nav.Item>
                <a href={new_user_route} className="nav-link">Sign Up</a>
              </Nav.Item>
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}