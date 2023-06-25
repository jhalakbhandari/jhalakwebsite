import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 p-2 mt-auto bg-body-tertiary  fixed-bottom">
      <h5 className="text-center">All Right Reserved &copy; Jhalak Bhandari</h5>
      <p className="text-center mt-3">
        <Link to="/">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </footer>
  );
};
export default Footer;
