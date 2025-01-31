import React from "react";
import "./JoinCommunity.css";

const JoinCommunity = () => {
  return (
    <div className="main-joincommunity-container">
      <div>
        
        <div className="JoinCommunity-details-container">
          <h2 className="joincommunity-heading">
            Stay Updated with{" "}
            <span className="heading-different-color-resume">Sanji Medical Care</span>
          </h2>
          <p>
          Subscribe to Our Newsletter for the Latest Updates on Hospital Services
          </p>
          <p>
          Join our community and be the first to know about new appointments,
            healthcare tips, success stories, and exclusive offers. Our newsletter
            delivers important health-related updates directly to your inbox.
          </p>
          {/* <div className="input-button-container"> */}
          <div className="input-container">
            <input className="email-input" placeholder="Type your email here" />
            <button
              className="submit community-button"
              onClick={() => console.log("Button clicked!")}
            >
              Subscribe
            </button>
          </div>

          
        </div>
        
      </div>
    </div>
  );
};

export default JoinCommunity;
