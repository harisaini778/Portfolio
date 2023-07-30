import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {Button } from "react-bootstrap";
import "./Project.css"; // Import the CSS file with your custom styles
import genericsimg from "./assets/genericsimg.png";
import mealsimg from "./assets/mealsimg.png";

const Project = () => {

     const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    };
    
    return (
        <div style={{ backgroundColor: "black" }}>
            
        <div className="project-container"> {/* Step 1: Wrap the content with a container */}
                <Carousel className="carousel-container" activeIndex={index} onSelect={handleSelect}>
                    
                    <Carousel.Item className="carousel-items-project">
                        
                        <Card style={{ width: "100vw" }}>
                            
                            <Card.Img variant="top" src={genericsimg} />
                            
                            <Card.Body className="bg-black card-body-project">
                                
                        <Card.Title className="card-title-project">The Generics</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                       </Card.Text>
                       <Button variant="outline-info" as="a" href="https://hari-e-commercewebsite.vercel.app/Home" target="_blank">Check Link</Button>
                                
                       </Card.Body>
                        </Card>
                        </Carousel.Item>
                    
                    <Carousel.Item className="carousel-items-project">
                        
                        <Card style={{ width: "100vw" }}>
                            
                            <Card.Img variant="top" src={mealsimg} />
                            
            <Card.Body className="bg-black card-body-project">
              <Card.Title className="card-title-project">My Restaurant Website</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="outline-info" as="a" href="https://my-restaurant-website-omega.vercel.app/" target="_blank">Check Link</Button>
                                
            </Card.Body>
          </Card>
        </Carousel.Item>
                    
      </Carousel>
            </div>
            </div>
  );
};

export default Project;
