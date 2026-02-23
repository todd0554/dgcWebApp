import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className="brand">
          <img
            src="/image/web_icon.png"
            alt="logo"
            className="brand-logo"
          />
          DoncasterGardenClub
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto navbar-links">

            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/becomeamember">Member</Nav.Link>
            <Nav.Link href="/newsletters">Newsletters</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>

            <Dropdown>
              <Dropdown.Toggle as="a" className="dropdown-toggle-custom">
                Gallery
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/gallery">Plants</Dropdown.Item>
                <Dropdown.Item href="/eventgallery">Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link href="/PrivacyPolicy">Privacy Policy</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar