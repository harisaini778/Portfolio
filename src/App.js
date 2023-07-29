import './App.css';
import Header from "./components/Header";
import Home from './components/Home';
import Skills from './components/Skills';
import Project from './components/Project';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Project/>
    </div>
  );
}

export default App;
