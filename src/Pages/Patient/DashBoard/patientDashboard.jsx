import React from "react";
import "./patientDashboard.css";
import { useNavigate } from 'react-router-dom';

function PatientDashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container-x">
      <header className="dashboard-header">
        <h1>Patient Dashboard</h1>
      </header>
      <div className="dashboard-content-x">
        <section className="card profile">
          <h2>Welcome, John Doe</h2>
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

