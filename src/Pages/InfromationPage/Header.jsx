import React, { useState } from "react";
import "./Header.css";
import headerImage from "../../assets/Images/back- image-home.png";

import { useNavigate } from "react-router-dom";


function Header() {
    
    return (
      <div className="main-landing-header-container">
        <div className="landing-header-container">
          <div className="landing-header-detail-container">
            <div>
              <h1>Sanji Medical Care</h1>
              <h1>
                <span className="heading-different-color">Your Trusted Medical </span>{" "}
                Reimbursement &{" "}
                <span className="heading-different-color">Booking System</span>
              </h1>
            </div>
            <div className="landing-header-des">
            Don't just book, get the right care! Our platform connects you with trusted medical professionals, 
            while expert guidance helps you choose the best healthcare options for your needs
            </div>
            <div className="landing-header-button-container">


            <button className="button get-started">Get Started</button>
            <button className="button learn-more">Learn More</button>
              
            </div>
          </div>
          
          <img
            className="landing-header-image"
            src={headerImage}
            alt="landing-header-image"
          />
         
        </div>
      </div>
    );
  };

export default Header
