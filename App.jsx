import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Components/Home";
import About from "./Components/About";
import Architecture from "./Components/Architecture";
import Contact from "./Components/Contact";
import ProblemStatement from "./Components/ProblemStatement";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ProblemStatement" element={<ProblemStatement/>} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
