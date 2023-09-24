import { Row, Col, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import genericsimg from "./assets/genericsimg.png";
import mealsimg from "./assets/mealsimg.png";
import projectsimg from "./assets/projects.png";
import reactauthimg from "./assets/ReactAuth_homepage.JPG";
import expenseTracker from "./assets/expenseTracker_light.JPG";
import "./Project.css";


const Project = () => {

    const myProjects = [
        {
            id: 1,
            header: "My Restaurant Website",
            image: mealsimg,
            projectLink: "https://my-restaurant-website-omega.vercel.app/",
            gitHubLink : "https://github.com/harisaini778/My-Restaurant-Website"
    },
    {
        id: 2,
        header: "My Music Website",
        image: genericsimg,
        projectLink: "https://hari-e-commercewebsite.vercel.app/Home",
        gitHubLink : "https://github.com/harisaini778/E-CommerceWebsite"
        },
     {
        id: 3,
        header: "My React Authorization",
         image: reactauthimg,
         projectLink: "https://react-auth-harisaini778.vercel.app/LogIn",
        gitHubLink : "https://github.com/harisaini778/ReactAuth"
        },
      {
        id: 4,
        header: "My Expense Tracker App",
          image: expenseTracker,
          projectLink:"https://expense-tracker-nu-ten.vercel.app/LogIn",
        gitHubLink : "https://github.com/harisaini778/ExpenseTracker",
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
                                  <h2>{project.header}</h2>
                              </Card.Header>
                              <Card.Body className="card-project-body">
                                  <Card.Img src={project.image} variant="top" />
                              </Card.Body>
                              <Card.Footer className="card-project-footer">
                          <div className="d-grid">
  <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info mb-2">
    Check Link
  </a>
  <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info mb-2">
    Check Github
  </a>
</div>

                              </Card.Footer>
                          </Card>
                      </Col>)}
                  </Row>
              </Container>
          </div>)
};
export default Project;
