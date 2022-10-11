import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
//import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
