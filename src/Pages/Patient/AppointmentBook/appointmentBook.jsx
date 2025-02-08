// import React,{useState, useEffect} from "react";
// import "./appointmentBook.css";
// import { useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// function AppointmentBook() {

//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();


//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);  // Set user state when the user is logged in
//       } else {
//         setUser(null);  // Set user to null when logged out
//       }
//     });
  
//     return () => unsubscribe();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const appointmentData = {
//       name: document.getElementById("name").value,
//       date: document.getElementById("date").value,
//       time: document.getElementById("time").value,
//       contact: document.getElementById("contact").value,
//     };
  
//     // Get the user's token
//     const token = await user.getIdToken(true);  // `true` forces a refresh

//     try {
//       const response = await fetch("http://localhost:5000/appointments", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(appointmentData),
//       });
  
//       const result = await response.json();
//       if (response.ok) {
//         alert("Appointment booked successfully!");
//         navigate("/patient/payment-and-bill"); // Redirect after success
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error("Error booking appointment:", error);
//       alert("An error occurred while booking the appointment. Please try again.");
//     }
//   };
  
//   return (
//     <div className="appointment-container">
//       <div className="appointment-card">
//         <h1 className="appointment-title">Book Your Appointment</h1>
//         <form className="appointment-form">
//           {/* Name Field */}
//           <div className="form-group">
//             <label className="form-label" htmlFor="name">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your full name"
//               className="form-input"
//             />
//           </div>

//           {/* Date Field */}
//           <div className="form-group">
//             <label className="form-label" htmlFor="date">
//               Appointment Date
//             </label>
//             <input
//               type="date"
//               id="date"
//               className="form-input"
//             />
//           </div>

//           {/* Time Slot Field */}
//           <div className="form-group">
//             <label className="form-label" htmlFor="time">
//               Select Time Slot
//             </label>
//             <select
//               id="time"
//               className="form-input"
//             >
//               <option value="">-- Choose a time slot --</option>
//               <option value="9am-10am">9:00 AM - 10:00 AM</option>
//               <option value="10am-11am">10:00 AM - 11:00 AM</option>
//               <option value="11am-12pm">11:00 AM - 12:00 PM</option>
//               <option value="2pm-3pm">2:00 PM - 3:00 PM</option>
//               <option value="3pm-4pm">3:00 PM - 4:00 PM</option>
//             </select>
//           </div>

//           {/* Contact Field */}
//           <div className="form-group">
//             <label className="form-label" htmlFor="contact">
//               Contact Number
//             </label>
//             <input
//               type="tel"
//               id="contact"
//               placeholder="Enter your contact number"
//               className="form-input"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="form-button"
//             onClick={handleSubmit}
//           >
//             Confirm Appointment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AppointmentBook;

import React, { useState, useEffect } from "react"; 
import "./appointmentBook.css";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function AppointmentBook() {
  const [user, setUser] = useState(null);
  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    contact: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set user state when logged in
      } else {
        setUser(null); // Reset user state when logged out
      }
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("User not authenticated. Please log in.");
      return;
    }

    const appointmentData = {
      name: user.displayName || "Unknown", // Get the registered user's name
      email: user.email, // Get user's email
      date: appointment.date,
      time: appointment.time,
      contact: appointment.contact,
    };

    try {
      const token = await user.getIdToken(true);
      const response = await fetch("http://localhost:5000/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Appointment booked successfully!");
        navigate("/patient/payment-and-bill"); // Redirect after success
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("An error occurred while booking the appointment. Please try again.");
    }
  };

  return (
    <div className="appointment-container">
      <div className="appointment-card">
        <h1 className="appointment-title">Book Your Appointment</h1>
        <form className="appointment-form" onSubmit={handleSubmit}>
          
          {/* Name Field (Auto-Filled) */}
          {/* <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              value={user ? user.displayName : "Loading..."}
              className="form-input"
              disabled
            />
          </div> */}

          {/* Date Field */}
          <div className="form-group">
            <label className="form-label">Appointment Date</label>
            <input
              type="date"
              name="date"
              value={appointment.date}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          {/* Time Slot Field */}
          <div className="form-group">
            <label className="form-label">Select Time Slot</label>
            <select
              name="time"
              value={appointment.time}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="">-- Choose a time slot --</option>
              <option value="9am-10am">9:00 AM - 10:00 AM</option>
              <option value="10am-11am">10:00 AM - 11:00 AM</option>
              <option value="11am-12pm">11:00 AM - 12:00 PM</option>
              <option value="2pm-3pm">2:00 PM - 3:00 PM</option>
              <option value="3pm-4pm">3:00 PM - 4:00 PM</option>
            </select>
          </div>

          {/* Contact Field */}
          <div className="form-group">
            <label className="form-label">Contact Number</label>
            <input
              type="tel"
              name="contact"
              placeholder="Enter your contact number"
              value={appointment.contact}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="form-button">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentBook;
