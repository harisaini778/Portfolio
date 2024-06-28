import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";
import { Card } from "react-bootstrap";
import { Container,Row,Col } from "react-bootstrap";
import skillsimg from "./assets/skills.png";
import htmlimg from "./assets/html.png";
import cssimg from "./assets/css.png";
import jsimg from "./assets/JavaScript.png";
import jqimg from "./assets/jq.png";
import bsimg from "./assets/bootstrap.png";
import reactbs from "./assets/reactbs.png";
import reactimg from "./assets/react.png";
import reduxpng from "./assets/redux.png";
import nextimg from "./assets/next.png"
import monngodbimg from "./assets/mongodb.png";
import firebaseimg from "./assets/firebase.png"
import mysqlpng from "./assets/mysqlimg.png"
import awsimg from "./assets/awspng.png";
import nodejsimg from "./assets/nodejs.png";
import expressimg from "./assets/expressjs.png";
import sequelizeimg from "./assets/sequelizeimg.png";
import javaimg from "./assets/java.png";
import { Stack } from "react-bootstrap/esm";

const Skills = () => {
  const skillsData = [
    { name: 'HTML', percentage: 99, image : htmlimg },
    { name: 'CSS', percentage: 98,image : cssimg },
    { name: 'Java Script', percentage: 95,image : jsimg },
    {name: 'jQuery',percentage:98, image : jqimg},
    {name: 'Bootstrap',percentage:98, image : bsimg},
    {name: 'React Js', percentage: 90, image : reactimg },
    { name: 'React-Bootstrap', percentage: 98 , image : reactbs},
    {name: 'Redux',percentage:98, image : reduxpng},]


   const skillsData2 = [{ name: 'Next Js', percentage: 98, image:nextimg },
    { name: 'MongoDb', percentage: 98, image : monngodbimg },
    { name: 'Firebase', percentage: 98, image : firebaseimg },
    { name: 'MySql', percentage: 98, image : mysqlpng },
    {name : "AWS",percentage:90, image : awsimg},
    {name : "NodeJs", percentage : 96, image : nodejsimg},
    {name : "Express", percentage : 95, image : expressimg},
    {name : "Sequelize", percentage : 95, image : sequelizeimg},
    // {name: 'Java',percentage:98, image :  javaimg}
  ];

  const [initialized, setInitialized] = useState(false);
  const [initialized2, setInitialized2] = useState(false);
  const skillsRef = useRef(null);
  const skillsRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = skillsRef.current?.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (offsetTop && scrollY > 1.8*offsetTop - windowHeight && !initialized) {
        setInitialized(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialized]);

  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = skillsRef2.current?.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (offsetTop && scrollY > 1.8*offsetTop - windowHeight && !initialized2) {
        setInitialized2(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialized2]);

  // const [initialized, setInitialized] = useState(false);
  // const [initialized2, setInitialized2] = useState(false);
  // const skillsRef = useRef(null);
  // const skillsRef2 = useRef(null);

  // useEffect(() => {
  //   const skillsObserver = new IntersectionObserver(
  //     (entries) => {
  //       const [entry] = entries;
  //       setInitialized(entry.isIntersecting);
  //     },
  //     { threshold: 0.9 }
  //   );

  //   if (skillsRef.current) {
  //     skillsObserver.observe(skillsRef.current);
  //   }

  //   return () => {
  //     if (skillsRef.current) {
  //       skillsObserver.unobserve(skillsRef.current);
  //     }
  //   };
  // });

  // useEffect(() => {
  //   const skillsObserver2 = new IntersectionObserver(
  //     (entries) => {
  //       const [entry] = entries;
  //       setInitialized2(entry.isIntersecting);
  //     },
  //     { threshold: 0.9 }
  //   );

  //   if (skillsRef2.current) {
  //     skillsObserver2.observe(skillsRef2.current);
  //   }

  //   return () => {
  //     if (skillsRef2.current) {
  //       skillsObserver2.unobserve(skillsRef2.current);
  //     }
  //   };
  // },);

//  


return (
  <div className="bg-black">

    <h className="skill-card-header">Skills</h>
    <Container>
      <img src={skillsimg} alt="skills" className="img1-skill"/>
    </Container>
      
  <Container>
    
    <Row>
      <Col sm={12} lg={6}
      >
          
          <div className="skill-outer-div">
   
   <Card className="skill-card bg-black border-info">
       <Card.Body>
     {skillsData.map((skill, index) => (
 <div key={index} className="skills-title">

   <Stack direction="horizontal" gap={2} className="stack-container">
    <div className="skill-name"> {skill.name}</div>
    <div>
    <img src={skill.image} alt={skill.name} className="skill-image" />
    </div>
   </Stack>

  
   <div ref={skillsRef} className="skills-box">
     <div className="fill" style={{ width: initialized ? `${skill.percentage}%` : 0 }}>
       {/* {`${skill.percentage}%`} */}
     </div>
   </div>
 </div>
))}
       </Card.Body>
       <Card.Footer>
           
       </Card.Footer>     
       
   </Card>


</div>

      </Col>

      <Col sm={12} lg={6}>


      <div className="skill-outer-div">
   
   <Card className="skill-card bg-black border-info">
       <Card.Body>
     {skillsData2.map((skill, index) => (
 <div key={index} className="skills-title">

   <Stack direction="horizontal" gap={2} className="stack-container">
    <div className="skill-name"> {skill.name}</div>
    <div>
    <img src={skill.image} alt={skill.name} className="skill-image" />
    </div>
   </Stack>

  
   <div ref={skillsRef} className="skills-box">
     <div className="fill" style={{ width: initialized ? `${skill.percentage}%` : 0 }}>
       {/* {`${skill.percentage}%`} */}
     </div>
   </div>
 </div>
))}
       </Card.Body>
       <Card.Footer>
           
       </Card.Footer>     
       
   </Card>


</div>
        
      </Col>
    </Row>
    
    </Container> 
 
    </div>
);
};

export default Skills;