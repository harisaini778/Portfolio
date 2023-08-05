import React from "react";
import contactimg from "./assets/contact2.png";
import { Container,Form,Card,Button } from "react-bootstrap";
import "./Contact.css";
import {BsMapFill,BsCardText,BsPhoneFlip,BsCircleFill,BsFillSendFill, BsSendFill} from "react-icons/bs";


const Contact = () => {

    return (
        <div className="main-container-contact">
            <Container className="contact-heading-container">
                <h>Contact</h>
            </Container>
            <Container > 
            <img src={contactimg} alt="contactimg" className="img1-contact"/>       
            </Container>
            <Container className="contact-details-container">
                <Card className="contact-details-card">
                            <Card.Body>
                                <h4 className="card-body-heading" ><span className="m-4" style={{color:"aqua"}}><BsCircleFill/></span>Hari Kumar Saini</h4>
                                <h4 className="card-body-heading"><span className="m-4" style={{color:"aqua"}}><BsCardText/></span>harikumarsaini608@gmail.com</h4>
                                <h4 className="card-body-heading"><span className="m-4" style={{color:"aqua"}}><BsPhoneFlip/></span>+91-7985027344</h4>
                                <h4 className="card-body-heading"> <span className="m-4" style={{color:"aqua"}}><BsMapFill/></span>Balrampur,Uttar Pradesh,India</h4>
                            </Card.Body>
                            </Card>        
            </Container>
            <Container className="contact-form-container">
                <Container className="mt-2"><h>Connect with me.</h></Container>
                <Form className="mt-4">
                    <Form.Group className="mb-3 contact-form">
                        <Form.Label className="mb-2">
                           First Name -
                        </Form.Label>
                        <Form.Control type="text" placeholder="Your Fisrt Name" className="mb-2" />
                        <Form.Label className="mb-2">
                            Last Name -
                        </Form.Label>
                        <Form.Control type="text" placeholder="Your Last Name" className="mb-2"/>
                        <Form.Label className="mb-2">
                            Email Address -
                        </Form.Label>
                        <Form.Control type="email" placeholder="Your Email" className="mb-2" />
                        <Form.Label className="mb-2">
                            Enter Phone Number -
                        </Form.Label>
                        <Form.Control type="text" placeholder="Your Phone Number" className="mb-2"/>
                    </Form.Group>
                    <div className="d-flex justify-content-center mb-3">
                        <Button variant="outline-info" size="lg">
                            <Container>
                                <span className="m-1"><BsFillSendFill/></span>
                                <span className="m-1">Send Message</span>
                           </Container>
                        </Button>
                    </div>
                </Form>
       </Container>
        </div>
    );
}
export default Contact;