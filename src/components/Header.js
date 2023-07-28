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
            <Nav.Link href="#home" className='navbar-links m-3'>Home</Nav.Link>
            <Nav.Link href="#skills" className='navbar-links m-3'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='navbar-links m-3'>Projects</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Stack direction="horizontal" gap={3}>
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
                          
             </Stack>
                      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;