import React from "react";
import { Route, Routes } from "react-router";
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

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
