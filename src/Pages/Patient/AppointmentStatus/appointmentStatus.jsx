import React, { useEffect, useState } from "react";
import "./appointmentStatus.css";
import { getAuth } from "firebase/auth";

function AppointmentStatus() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          alert("User not authenticated. Please log in.");
          return;
        }

        const token = await user.getIdToken(true);
        const response = await fetch("http://localhost:5000/user-appointments", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setAppointments(data);
        } else {
          console.error("Error fetching appointments:", data.message);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="appointment-status-container">
      <h2>Your Appointments</h2>

      {loading ? (
        <p>Loading appointments...</p>
      ) : appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Appointment Date</th>
              <th>Time Slot</th>
              <th>Contact</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.contact}</td>
                <td className={`status ${(appointment.status || "Pending").toLowerCase()}`}>
                {appointment.status || "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AppointmentStatus;
