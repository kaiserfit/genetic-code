import React from 'react';
import logo from './kwhite.webp';

import Row from "react-bootstrap/Row";
import {BsFillGrid3X3GapFill} from "react-icons/bs"
function Header(){
    return (
        <div className="container-fluid bg-dark bg-gradient" id="top-banner">
      
        <Row className="row">
          
            <div className="col-6 col-sm-6 col-md-6 col-lg-6" id="logoContainer">
                <img src={logo} alt="KaizerFit" className="logo-bw" />
            </div>
      
          
      
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 text-end">
          
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  float-end">
         
          <li className="nav-item dropdown">
            <a className="nav-link text-white fs-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <BsFillGrid3X3GapFill />
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a href="/pages/privacy-policy.html" target="_blank" className="dropdown-item">Privacy Policy</a>
              </li>
      
              <li>
                <a href="/pages/terms-and-conditions.htmll" target="_blank" className="dropdown-item">Terms & Conditions</a>
              </li>
      
              <li>
                <a href="/pages/contact-us.html" target="_blank" className="dropdown-item">Support</a>
              </li>
      
              <li>
                <a href="/pages/disclaimer.html" target="_blank" className="dropdown-item">Disclaimer</a>
              </li>
             
            </ul>
          </li>
         
        </ul>
               
            </div>
        </Row>
      
      </div>
    );
}

export default Header