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
            <Nav.Link href="Home" className='navbar-links m-3'>Home</Nav.Link>
            <Nav.Link href="Skills" className='navbar-links m-3'>Skills</Nav.Link>
            <Nav.Link href="Project" className='navbar-links m-3'>Projects</Nav.Link>
            <Nav.Link href="Contact" className='navbar-links m-3'>Contact</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Container direction="horizontal">
              <Badge className='bg-black badge-navbar'>
                <BsGithub size={30} />
              </Badge>
            
       
              <Badge  className='bg-black badge-navbar'>
                <BsLinkedin size={30} />
              </Badge>
    
                <Badge className='bg-black badge-navbar'>
               <Button variant='outline-light'>
                Let's Connect <BsArrowRightCircle />
              </Button>
              </Badge>
                          
             </Container>
                      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;