import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";
import { Card } from "react-bootstrap";

const Skills = () => {
  const skillsData = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'React', percentage: 70 },
  ];

  const [initialized, setInitialized] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInitialized(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        skillsObserver.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
      <div className="skill-outer-div">
          <Card className="skill-card bg-black border-info">
              <Card.Header className="skill-card-header">
                  Skills
              </Card.Header>
              <Card.Body>
            {skillsData.map((skill, index) => (
        <div key={index} className="skills-title">
          {skill.name}
          <div ref={skillsRef} className="skills-box">
            <div className="fill" style={{ width: initialized ? `${skill.percentage}%` : 0 }}>
              {`${skill.percentage}%`}
            </div>
          </div>
        </div>
      ))}
              </Card.Body>
              <Card.Footer>
                  
              </Card.Footer>     
              
          </Card>


    </div>
  );
};

export default Skills;