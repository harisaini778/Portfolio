import { Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import genericsimg from "./assets/genericsimg.png";
import mealsimg from "./assets/mealsimg.png";
import projectsimg from "./assets/projects.png";
import "./Project.css";


const Project = () => {

    const myProjects = [
        {
        id: 1,
        header :"My Restaurant Website",
        image: mealsimg
    },
    {
        id: 2,
        header: "My Music Website",
        image : genericsimg
        },
     {
        id: 2,
        header: "My Music Website",
        image : genericsimg
        },
      {
        id: 2,
        header: "My Music Website",
        image : genericsimg
    },
]
  return (
      <div className="bg-black">
          <h>Projects</h>
          <Container>
              <img src={projectsimg} alt="projectsimg" className="img1-projects" />
          </Container>
              <Container>
                  <Row>
                  { myProjects.map((project, index) =>
                      <Col sm={6} md={4} lg={3} key={index}>
                          <Card className="card-project mb-1" >
                              <Card.Header className="card-project-header">
                                  <h5>{project.header}</h5>
                              </Card.Header>
                              <Card.Body className="card-project-body">
                                  <Card.Img src={project.image} variant="top" />
                              </Card.Body>
                              <Card.Footer className="card-project-footer">
                                <div className="d-grid">
                                  <Button variant="outline-info mb-2">
                                      Check Link
                                  </Button>
                                  <Button variant="outline-info mb-2">
                                      Check Github
                                      </Button>
                                      </div>
                              </Card.Footer>
                          </Card>
                      </Col>)}
                  </Row>
              </Container>
          </div>)
};
export default Project;
