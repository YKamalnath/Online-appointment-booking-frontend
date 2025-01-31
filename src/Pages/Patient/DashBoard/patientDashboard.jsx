import React from "react";
import "./patientDashboard.css";

function PatientDashboard() {
  return (
    <div className="dashboard-container-x">
      <header className="dashboard-header">
        <h1>Patient Dashboard</h1>
      </header>
      <div className="dashboard-content-x">
        <section className="card profile">
          <h2>Welcome, John Doe</h2>
          <p>Age: 29 | Blood Group: O+</p>
          <button className="view-btn">View Profile</button>
        </section>
        <section className="card appointments">
          <h2>Upcoming Appointments</h2>
          <ul>
            <li>Dr. Smith - Jan 30, 2025 @ 10:00 AM</li>
            <li>Dr. Emily - Feb 5, 2025 @ 1:00 PM</li>
          </ul>
          <button className="view-btn">View All</button>
        </section>
        <section className="card medical-history">
          <h2>Medical History</h2>
          <p>Last Visit: Dec 20, 2024</p>
          <p>Prescriptions: Painkillers, Vitamin D</p>
          <button className="view-btn">View Full History</button>
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

