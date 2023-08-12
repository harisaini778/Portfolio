import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { BsLinkedin, BsGithub, BsArrowRightCircle } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="sm" className='bg-black' variant='dark'>
      <Container fluid>
        <Navbar.Brand className='m-3'><h1>HKS</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="Home" className='navbar-links m-2'>Home</Nav.Link>
            <Nav.Link href="Skills" className='navbar-links m-2'>Skills</Nav.Link>
            <Nav.Link href="Project" className='navbar-links m-2'>Projects</Nav.Link>
            <Nav.Link href="Contact" className='navbar-links m-2'>Contact</Nav.Link>
            <Nav.Link href="Resume" className='navbar-links m-2'>Resume</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Container direction="horizontal">
              <a href='https://github.com/harisaini778' target="_blank" rel="noopener noreferrer">
              <Badge className='bg-black badge-navbar'>
                <BsGithub size={30} />
                </Badge>
                </a>
            
              <a href='https://www.linkedin.com/in/hari-kumar-saini-861677183/' target="_blank" rel="noopener noreferrer">
              <Badge  className='bg-black badge-navbar'>
              <BsLinkedin size={30} />
              </Badge>
              </a>
    
              <Badge className='bg-black badge-navbar'>
                <a href='https://wa.me/qr/ZKFQAHF4P33MI1' target="_blank" rel="noopener noreferrer">
               <Button variant='outline-light'>
                Let's Connect <BsArrowRightCircle />
                  </Button>
                  </a>
              </Badge>
                          
             </Container>
                      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;