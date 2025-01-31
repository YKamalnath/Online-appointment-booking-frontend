import React, { useState } from "react";
import "./Services.css";
import ServicesIcon from "../../assets/Images/cv-png.svg";



const Services = () => {

  const ServicesData = [
   
    {
      heading: "Book a Health Consultation",
      des: "Schedule an appointment with healthcare professionals for personalized medical advice, check-ups, and treatment options. Our platform connects you with trusted doctors and specialists for all your health needs.",
    },
  ];
  return (
    <div className="main-services-container">
      
      <h1 className="services-heading">
        Get Your Free
        <span className="heading-different-color-resume"> Health Consultation</span>
      </h1>
      <div className="services-heading-des">
      Discover how our platform can help you connect with healthcare professionals and manage your appointments with ease
      </div>
      <div className="services-container">
        {ServicesData.map((data) => (
          <div className="sub-services-container">
            <div>
              <img
                className="services-icon-image"
                src={ServicesIcon}
                alt="services-icon-image"
              />

              <div className="services-sub-heading">{data.heading}</div>
              <div className="services-des">{data.des}</div>
              

              <button className="custombtn" > Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
