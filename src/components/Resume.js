import React from "react";
import "./Resume.css";
import resumeimg from "./assets/resume8_img.png";
import { Container, Badge,Row,Col,Stack} from "react-bootstrap";
import {BsDownload} from "react-icons/bs";

const Resume = () => {

    return (
        <div className="outer-div-resume">
            <Container>
            <h className="resume-heading">Resume</h>
            </Container>
            <img src={resumeimg} className="img-resume" />
            <Container>
                <a>
                    <Badge variant="outline-info" className="badge-resume">
                        <Container>
                            <Stack direction="horizontal">
                                <div>
                                    <Container className="m-1">
                                        <a href="https://drive.google.com/file/d/1pKXsF2Wu1PzB1My75hS-hmcnLRC5RF8W/view?usp=sharing"
                                              target="_blank"
                                            rel="noopener noreferrer" className="link-resume">
                                            <h2>Download Hari's Resume</h2>
                                            </a>
                                    </Container>
                                </div> 
                                <div>
                                <h2><BsDownload/></h2>    
                                </div>
                            </Stack>
                       </Container>
               </Badge>
                </a>
            </Container>
        </div>
    )
}
export default Resume;