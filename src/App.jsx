import { Routes, Route } from "react-router-dom";

import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar/Navbar";
import StarsBackground from "./components/StarsBackground/StarsBackground";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

function App() {
  return (
    <LanguageProvider>
      <StarsBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
