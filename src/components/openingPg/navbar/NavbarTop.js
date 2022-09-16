import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import logo from './navlogo.png'
import './NavbarTop.css'
import { FaSearch } from "react-icons/fa";
import Offer from '../offer/Offer';

function NavbarTop() {
  return (
    <div className='bg'>
      
    <Navbar collapseOnSelect expand="sm"  className='nav'>
      <Container className='.text-dark mr-auto'>
      <span class="navbar-text" >
        <Nav className="mr-auto">
        
        <Navbar.Brand href="#home" className="mr-auto"> 
          <img alt="logo" src={logo} height={'60px'} width={'160px'} ></img> ANALYTICS VALLEY
        </Navbar.Brand>
        </Nav>
        </span>
        
        
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <NavDropdown title="Solutions" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="collasible-nav-dropdown">

            </NavDropdown>
            <Nav.Link href="#pricing">Connect</Nav.Link>
          </Nav>
          <FaSearch/>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Offer/>
    
    </div>
  )
}

export default NavbarTop;
