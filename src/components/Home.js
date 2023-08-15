import React, { useEffect, useRef } from "react";
import "./Home.css";
import img2 from "./assets/img2.png";
import { Stack } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import { BsPhoneFlip } from "react-icons/bs";

const Home = () => {
  const words = ["Hi, I am Hari Kumar Saini. ", "I am a Frontend Developer. ", "I love React, Js & Css. "];
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

      const typingSpeed = isDeleting ? 150 : 200;
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
              <h1>Welcome To Hari's Profile</h1>
            </div>
            <div>
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
           Guided by trust and strong development principles, I blend innovation and creativity into every project. Proficient in ReactJS, Javascript, CSS, and HTML.
            </p>
            </div>
           
            {/* <div className="d-grid gap-2 stack-btn">
              <Button variant="outline-info" size="lg">
                <span className="p-2"><BsWhatsapp/></span>What's App
              </Button>
             
          <Button variant="outline-info" size="lg" onClick={()=>window.location.href="https://www.truecaller.com/search/in/7985027344"}>
          <span className="p-2"><BsPhoneFlip/></span>Phone Call
          </Button>
            </div> */}
            <div className="d-grid gap-2 stack-btn">
  <a href="https://wa.me/qr/ZKFQAHF4P33MI1" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-lg">
    <span className="p-2"><BsWhatsapp/></span>What's App
  </a>
  
  <a href="https://www.truecaller.com/search/in/7985027344" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-lg">
    <span className="p-2"><BsPhoneFlip/></span>Phone Call
  </a>
</div>

            </Stack>
            </Col>
      </Row>
    </div>
  );
};

export default Home;