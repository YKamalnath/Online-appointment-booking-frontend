
import React, { useState } from "react";
import "./Footer.css";
import footerLogo from "../../../assets/medical-logo.avif";
import facebookIcon from "../../../assets/Images/facebookIcon.svg";
import linkdinIcon from "../../../assets/Images/linkdinIcon.svg";
import instaIcon from "../../../assets/Images/instaIcon.svg";
import youtubeIcon from "../../../assets/Images/youtubeIcon.svg";
import twiterIcon from "../../../assets/Images/twiterIcon.svg";


const Footer = () => {
  const scrollToSection = (id) => {
    
    const element = document.getElementById(id);
    if (element) {
      
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer>
      <div class="footer-container">
        <section class="footer-about">
          <img className="company-icon" src={footerLogo} alt="company-icon" />
          <p>
          Providing quality healthcare and making it easier for patients to
          book appointments with trusted healthcare professionals.
          </p>
          <div className="contact-social-container">
            <section class="footer-social">
              <h6>Follow Us</h6>
              <ul className="contact-social-media-container">
                <a href="" target="_blank">
                  <img className="contact-social-media" src={facebookIcon} />
                </a>
                <a href="" target="_blank">
                  <img className="contact-social-media" src={linkdinIcon} />
                </a>
                <a href="" target="_blank">
                  <img className="contact-social-media" src={instaIcon} />
                </a>
                <a target="_blank">
                  <img className="contact-social-media" src={youtubeIcon} />
                </a>
                <a target="_blank">
                  <img className="contact-social-media" src={twiterIcon} />
                </a>
              </ul>
            </section>
          </div>
        </section>
        <section class="footer-links">
          <h6>Sanji Medical Care</h6>
          <ul>
            <li>
              <a href="/ourServices">Our Services</a>
            </li>
            <li>
              <a href="/ourServices">Book an Appointment</a>
            </li>
            <li>
              <a href="/ourServices">Our Goal</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/questions">Help</a>
            </li>
          </ul>
        </section>

        <section class="footer-links">
          <h6>Our Services</h6>
          <ul>
            <li>
              <a href="/ourServices">General Consultation</a>
            </li>
            <li>
              <a href="/ourServices">Specialist Consultations</a>
            </li>
            
            <li>
              <a href="/ourServices">
              Diagnostic Services
              </a>
            </li>
            
          </ul>
        </section>

        <section class="footer-links learnig-hub-footer-column">
          <h6>Emergency Services</h6>
          <ul>
            <li>
              <a href="/ourServices">Health Webinars</a>
            </li>
            <li>
              <a href="/ourServices">Health Articles</a>
            </li>
            <li>
              <a href="/ourServices">Medical Tips & Guides</a>
            </li>
          </ul>
        </section>

        <section class="footer-links">
          <h6>Help</h6>
          <ul>
            <li>
              <a href="/questions">FAQs</a>
            </li>
            <li>
              <a href="/contactForm">Contact Form</a>
            </li>
            <li>
              <a href="/provideFeedback">Provide Feedback</a>
            </li>
          </ul>
        </section>
      </div>
      <hr class="centered-hr"></hr>
      <div class="footer-bottom">
        <div>Sanji Medical Care © 2025 Hospital Pvt Ltd. All Rights Reserved.</div>
        <div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
          <div>Terms & Conditions</div>
          <div>Accessibility Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;