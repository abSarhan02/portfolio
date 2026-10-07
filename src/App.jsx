import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import StarsBackground from "./components/StarsBackground/StarsBackground";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

function App() {
  return (
    <>
      <StarsBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;
