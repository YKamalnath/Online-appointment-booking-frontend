import React, { useEffect, useState } from "react";
import "./patientDashboard.css";
import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";

function PatientDashboard() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // Assuming the user's name is stored in the Firebase user profile
      setUserName(user.displayName || "John Doe");  // Default to "John Doe" if no displayName
    } else {
      console.log("No user is logged in.");
    }
  }, []);
  return (
    <div className="dashboard-container-x">
      <header className="dashboard-header">
        <h1>Patient Dashboard</h1>
      </header>
      <div className="dashboard-content-x">
        <section className="card profile">
          {/* <h2>Welcome, John Doe</h2> */}
          <h2>Welcome, {userName}</h2>
          <p>Age: 29 | Blood Group: O+</p>
          <button className="view-btn" onClick={() => navigate('/patient/User_profile')}>View Profile</button>
        </section>
        <section className="card appointments">
          <h2>Verification status</h2>
          <ul>
            <li>Check your verfication satus here</li>
            <li>All your information is protected</li>
          </ul>
          <button className="view-btn" onClick={() => navigate('/patient/User_verification')}>Status</button>
        </section>
        <section className="card medical-history">
          <h2>Appointment History</h2>
          <p>Check Appointment Status here.</p>
          <p>Accept - Pending - Cancle</p>
          <button className="view-btn" onClick={() => navigate('/patient/Appointment_status')}>Check Status</button>
        </section>
        <section className="card notifications">
          <h2>Notifications</h2>
          <ul>
            <li>Reminder: Upcoming appointment tomorrow</li>
            <li>Lab reports available for download</li>
          </ul>
          <button className="view-btn">View All</button>
        </section>
      </div>
    </div>
  );
}

export default PatientDashboard;

