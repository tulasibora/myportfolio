import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Profile/Home";
import About from "./Components/Profile/About";
import Skills from "./Components/Profile/Skills";
import "boxicons/css/boxicons.min.css";
import LoderComponent from "./Components/StylingComponents/Loder";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateIsloadValue } from "./Redux/action";
import Contact from "./Components/Profile/Contact";

function App() {
  const dispatch = useDispatch();
  const isLoad = useSelector((state) => state.isLoad);
  useEffect(() => {
    setTimeout(() => {
      dispatch(updateIsloadValue());
    }, 5000);
  }, []);
  return (
    <div>
      {isLoad ? (
        <LoderComponent />
      ) : (
        <div className="AppMainDiv">
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Skills />} path="/skills" />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
