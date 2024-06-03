import React from 'react';
import { Link } from "react-router-dom";
import './styles/Footer.css';

import Logo from "../img/logo.png";

const Footer = () => {

  return (
    <footer>
      <div className="container-footer">
        <div className="row-footer">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Our History</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="https://danielbeling.vercel.app" target="_blank">Developer</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>YonderGroup</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/">Marketing Consultancy</Link></li>
              <li><Link to="/">Social Media Management</Link></li>
              <li><Link to="/">Brand Development</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="form-sub">
              <Link to="/"><img src={Logo} alt="" className="footer_logo" /></Link>
              <div className="footer-frase">
                <p>© 2024 YonderGroup. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
