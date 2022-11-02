import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navs.css';
import logo from './../../assets/logo.png';

const Navs = () => {
    return (
        <Navbar  expand="lg fixed-top">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} width="60%" alt="FOOD"/>  
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto left">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
                <Nav.Link href="#home">Explore Food</Nav.Link>
                <Nav.Link href="#link">Review</Nav.Link>
                <Nav.Link href="#link">Faq</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link className="number">993 295 877</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );

}

export default Navs;