import React, { useState } from "react";
import contactimg from "./assets/contact2.png";
import { Container, Form, Card, Button } from "react-bootstrap";
import "./Contact.css";
import { BsMapFill, BsCardText, BsPhoneFlip, BsCircleFill, BsFillSendFill } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const emailParams = {
      from_name: `${formValues.firstName} ${formValues.lastName}`,
      to_name: "Hari Kumar Saini",
      email: formValues.email,
      phone: formValues.phoneNumber,
      message: formValues.message,
    };

    emailjs
      .send("service_n26knlr", "template_1p7ry3c", emailParams, "uPZlUBw-tprQkeXfX")
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Thank you for contacting me. Your message sent successfully!");
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="main-container-contact">
      <Container className="contact-heading-container">
        <h>Contact</h>
      </Container>
      <Container>
        <img src={contactimg} alt="contactimg" className="img1-contact" />
      </Container>
      <Container className="contact-details-container">
        <Card className="contact-details-card">
          <Card.Body>
            <h3 className="card-body-heading">
              <span className="m-4" style={{ color: "aqua" }}>
                <BsCircleFill />
              </span>
              Hari Kumar Saini
            </h3>
            <h3 className="card-body-heading">
              <span className="m-4" style={{ color: "aqua" }}>
                <BsCardText />
              </span>
              harikumarsaini778@gmail.com
            </h3>
            <h3 className="card-body-heading">
              <span className="m-4" style={{ color: "aqua" }}>
                <BsPhoneFlip />
              </span>
              +91- 798 5027 344
            </h3>
            <h3 className="card-body-heading">
              {" "}
              <span className="m-4" style={{ color: "aqua" }}>
                <BsMapFill />
              </span>
              Balrampur, Uttar Pradesh, India
            </h3>
          </Card.Body>
        </Card>
      </Container>
      <Container className="contact-form-container">
        <Container className="mt-2">
          <h>Connect with me.</h>
        </Container>
        <Form className="mt-4" onSubmit={sendEmail}>
          <Form.Group className="mb-3 contact-form">
            <Form.Label className="mb-2">First Name -</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your First Name"
              className="mb-2 form-control"
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
              required
            />
            <Form.Label className="mb-2">Last Name -</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Last Name"
              className="mb-2 form-control"
              name="lastName"
              value={formValues.lastName}
              onChange={handleInputChange}
              required
            />
            <Form.Label className="mb-2">Email Address -</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your Email"
              className="mb-2 form-control"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <Form.Label className="mb-2">Enter Phone Number -</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Phone Number"
              className="mb-2 form-control"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <Form.Label className="mb-2">Message -</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your Message"
              className="mb-2 form-control"
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-center mb-3">
            <Button type="submit" variant="outline-info" size="lg">
              <Container>
                <span className="m-1">
                  <BsFillSendFill />
                </span>
                <span className="m-1">Send Message</span>
              </Container>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
