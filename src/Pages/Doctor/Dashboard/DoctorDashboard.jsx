import React from 'react';
import './DoctorDashboard.css'; // CSS file for styling
import OnlineImange from '../../../assets/Images/adminLayout/medicine-doctor-using-digital.webp';

const DoctorDashboard = () => {
  const appointments = [
    { id: 1, patientName: 'John Doe', date: '2025-01-28', time: '10:00 AM' },
    { id: 2, patientName: 'Jane Smith', date: '2025-01-29', time: '2:00 PM' },
  ];

  const stats = [
    { label: 'Total Patients', value: 150 },
    { label: 'Pending Appointments', value: 5 },
    { label: 'Completed Appointments', value: 120 },
  ];

  return (
    <div className="dashboard-container-z">
      <h1>Doctor Dashboard</h1>

      {/* Stats Section */}
      <div className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Appointment Requests */}
      <div className="appointments-section">
        <h2>Appointment Requests</h2>
        <div className="appointment-list-z">
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <div key={appointment.id} className="appointment-card-z">
                <p>
                  <strong>Patient:</strong> {appointment.patientName}
                </p>
                <p>
                  <strong>Date:</strong> {appointment.date}
                </p>
                <p>
                  <strong>Time:</strong> {appointment.time}
                </p>
                <button className="approve-button">Approve</button>
                <button className="decline-button">Decline</button>
              </div>
              
            ))
          ) : (
            <p>No appointment requests at the moment.</p>
          )}

        {/* <div className='continer-image-class'>
          <img className='online-image-class' src={OnlineImange}></img>
        </div> */}
        </div>
        
      </div>
    </div>
  );
};

export default DoctorDashboard;
