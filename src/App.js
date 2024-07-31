import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Profile/Home";
import About from "./Components/Profile/About";
import Skills from "./Components/Profile/Skills";
import Projects from "./Components/Profile/Projects";
import "boxicons/css/boxicons.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Skills />} path="/skills" />
      </Routes>
    </div>
  );
}

export default App;
