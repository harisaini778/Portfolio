import './App.css';
import Header from "./components/Header";
import Home from './components/Home';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Resume from './components/Resume';



function App() {
  return (
    <div className="App">
      <Router>
       <Header />
        <Routes>
          <Route path='/' element={<Navigate to="Home" />} />
          <Route path='Home' element={<Home />} />
          <Route path='Skills' element={<Skills />} />
          <Route path='Project' element={<Project />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Resume' element={<Resume />} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
