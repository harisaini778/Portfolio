import { Row, Col, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import genericsimg from "./assets/genericsimg.png";
import mealsimg from "./assets/mealsimg.png";
import chatcircle from "./assets/chatcricleapp.png";
import expensetrackerfulstack from "./assets/expensetrackerfullstackapp.png";
import meetupapp from "./assets/nextjsmeetupapp.png";
import mailboxclient from "./assets/mailboxclientapp.png"
import projectsimg from "./assets/projects.png";
import reactauthimg from "./assets/ReactAuth_homepage.JPG";
import expenseTracker from "./assets/expenseTracker_light.JPG";
import reduxCounter from "./assets/ReduxCounter.JPG";
import reduxCart from "./assets/ReduxCart.JPG";
import "./Project.css";


const Project = () => {

    const myProjects = [

      {
        id: 1,
        header: "ChatCircle - Real Time Chat App (Full Stack)",
        image: chatcircle,
        projectLink: "https://drive.google.com/file/d/1E_4HuIl196EDFw3CytQIzcT8HaTbBg4K/view",
        gitHubLink : "https://github.com/harisaini778/harigroupchatapp"
},
{
  id: 2,
  header: "Expense Tracker App (Backend)",
  image: expensetrackerfulstack,
  projectLink: "https://drive.google.com/file/d/1K-x42Y3DrECLEoWVG4mcJ_zLQ29hmA0-/view",
  gitHubLink : "https://github.com/harisaini778/hariexpensetrackerfullstackapp"
},
{
  id: 3,
  header: "Hemrix Mail - Mail Box Client App (Frontend)",
  image: mailboxclient,
  projectLink: "https://mail-box-client-inky.vercel.app/LogIn",
  gitHubLink : "https://github.com/harisaini778/MailBox-Client"
},
{
  id: 4,
  header: "Meetup - Next.js App (Frontend)",
  image: meetupapp,
  projectLink: "https://next-js-meet-up-two.vercel.app/",
  gitHubLink : "https://github.com/harisaini778/NextJsMeetUp"
},
        {
            id: 5,
            header: "React Meal (Frontend)",
            image: mealsimg,
            projectLink: "https://my-restaurant-website-omega.vercel.app/",
            gitHubLink : "https://github.com/harisaini778/My-Restaurant-Website"
    },
    {
        id: 6,
        header: "Music Website (Frontend)",
        image: genericsimg,
        projectLink: "https://hari-e-commercewebsite.vercel.app/Home",
        gitHubLink : "https://github.com/harisaini778/E-CommerceWebsite"
        },
    //  {
    //     id: 3,
    //     header: "My React Authorization",
    //      image: reactauthimg,
    //      projectLink: "https://react-auth-harisaini778.vercel.app/LogIn",
    //     gitHubLink : "https://github.com/harisaini778/ReactAuth"
    //     },
      {
        id: 7,
        header: "Expense Tracker - (Frontend)",
          image: expenseTracker,
          projectLink:"https://expense-tracker-nu-ten.vercel.app/LogIn",
        gitHubLink : "https://github.com/harisaini778/ExpenseTracker",
        },
        //  {
        // id: 5,
        // header: "My Redux-Cart App",
        //   image: reduxCart,
        //   projectLink:"https://shopping-app-redux-o98v.vercel.app/",
        // gitHubLink : "https://github.com/harisaini778/ShoppingApp_Redux",
        // },
    //         {
    //     id: 6,
    //     header: "My Redux-Counter App",
    //       image: reduxCounter,
    //       projectLink:"https://my-redux-project2.vercel.app/",
    //     gitHubLink : "https://github.com/harisaini778/My-Redux-Project2",
    // }
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
                                  <Card.Img src={project.image}  />
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
