import React, { useEffect, useRef } from "react";
import "./Home.css";
import img2 from "./assets/img2.png";
import { Stack } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import { BsPhoneFlip } from "react-icons/bs";

const Home = () => {
  const words = ["Hi, I am Hari Kumar Saini. ", "I am a Frontend developer. ", "I love React, Js & Css. "];
  const wordRef = useRef(null);
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const typingEffect = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        letterIndex--;
      } else {
        letterIndex++;
      }

      const displayedText = currentWord.substring(0, letterIndex);

      wordRef.current.textContent = displayedText;

      if (isDeleting) {
        if (displayedText === "") {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      } else {
        if (displayedText === currentWord) {
          isDeleting = true;
        }
      }

      const typingSpeed = isDeleting ? 200 : 200;
      setTimeout(typingEffect, typingSpeed);
    };

    typingEffect();
  }, []);

  return (
    <div className="home-container">
      <Row>
        <Col xs={12} md={12} lg={6}>
          <div className="img1-home">
            <img src={img2} alt="img1" />
          </div>
        </Col>
        <Col xs={12} md={12} lg={5} className="intro-des">
          <Stack gap={3}>
            <div className="modal-home">
              <h2>Welcome To Hari's Profile</h2>
            </div>
            <div className="flex header-home-div">
              <p
                className="header-sub-title"
                ref={wordRef}
                white-space="pre-wrap"
                overflow-wrap="break-word"
              >
                {words[wordIndex]}
                {isDeleting ? "|" : ""}
              </p>
            </div>
            <div className="self-des">
           <p>
              Keenly focussed on good principals of developing 
              optimized and efficient UI application.
              Highly skilled in ReactJs,Javascript,CSS & HTML.
            </p>
            </div>
           
            <div className="d-grid gap-2 stack-btn">
              <Button variant="outline-info" size="lg">
                <span className="p-2"><BsWhatsapp/></span>What's App
            </Button>
          <Button variant="outline-info" size="lg">
          <span className="p-2"><BsPhoneFlip/></span>Phone Call
          </Button>
            </div>
            </Stack>
            </Col>
      </Row>
    </div>
  );
};

export default Home;