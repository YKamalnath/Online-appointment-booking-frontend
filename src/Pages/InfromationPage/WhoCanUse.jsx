import React from "react";
import "./WhoCanUse.css";
import WhoCanUseImage from "../../assets/Images/whoUse.png"; 

const WhoCanUse = () => {
  return (
    <div className="WhoCanUse">
      <div className="whocanuse-des-container">
        <div>Patients</div>
        <div>
            Book appointments with healthcare professionals for consultations,
          treatments, and check-ups. You can choose from a variety of specialists
          based on your needs and availability. Additionally, access personalized
          care reminders and follow-up services.
        </div>
        
      </div>
      {/* <div className="whocanuse-img-container"> */}
      <img
        className="whocanuse-image"
        src={WhoCanUseImage} // Updated to use the renamed import
        alt="WhoCanUse-image"
      />
      {/* </div> */}
      <div className="whocanuse-des-container">
        <div>Providers</div>
        <div>
        Help patients manage their health by accepting appointment bookings
          based on your expertise and schedule. You can also offer telehealth
          services, consultations, and medical advice, providing valuable care
          to your patients.
        </div>
        
      </div>
    </div>
  );
};

export default WhoCanUse;
