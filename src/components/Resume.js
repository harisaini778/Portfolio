import React from "react";
import "./Resume.css";
import resumeimg from "./assets/resume8_img.png";
import { Container, Badge,Row,Col } from "react-bootstrap";
import {BsDownload} from "react-icons/bs";

const Resume = () => {

    return (
        <div className="bg-black">
            <Container>
            <h className="resume-heading">Resume</h>
            </Container>
            <img src={resumeimg} className="img-resume" />
            <Container>
                <a>
                    <Badge variant="outline-info" className="badge-resume">
                        <Container>
                            <Row>
                                <Col>
                                  <h2>Download Hari's Resume</h2>
                                </Col> 
                                <Col>
                                    <h2><BsDownload/></h2>
                                </Col>
                            </Row>
                       </Container>
               </Badge>
                </a>
            </Container>
        </div>
    )
}
export default Resume;
