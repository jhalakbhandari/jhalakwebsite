import React from "react";
import { Route, Routes } from "react-router";
<<<<<<< HEAD
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
          <Route path="/Glimpseweb/" element={<Home />} exact />
=======
import Contact from "./Pages/ContactPage/Contact";
//import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Pages/ProjectsPage/Projects";
import { Navigate } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to={"./home"} />} />
          <Route path="/home" element={<Home />} exact />
>>>>>>> 010ea49b03c45289d6a76b2c49c20f7726b3fad2

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
        </Routes>
      </div>
      <Footer />
=======
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
>>>>>>> 010ea49b03c45289d6a76b2c49c20f7726b3fad2
    </>
  );
}

export default App;
