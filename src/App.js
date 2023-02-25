import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Nav from '././components/Nav'

function App() {
  return (
    <div className="bg-black h-full md:h-[100vh] px-[2rem] md:px-[10rem] ">
        <BrowserRouter>
        <Nav/>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              </Routes>
        </BrowserRouter>{" "}
      </div>
  );
}

export default App;