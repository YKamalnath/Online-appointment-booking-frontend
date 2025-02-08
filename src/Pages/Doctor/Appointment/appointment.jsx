// import React, { useState, useEffect } from 'react';
// import './appointment.css'; // CSS file for styling
// import { db } from '../../../firebase/firebaseConfig'; // Import your Firebase DB instance
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Firebase Firestore methods

// function Appointment() {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch appointments from Firebase
//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'appointments'));
//         const fetchedAppointments = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setAppointments(fetchedAppointments);
//       } catch (error) {
//         console.error("Error fetching appointments:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   // Handle appointment cancellation
//   const handleCancelAppointment = async (id) => {
//     try {
//       await deleteDoc(doc(db, 'appointments', id)); // Delete appointment from Firestore
//       setAppointments(appointments.filter((appointment) => appointment.id !== id)); // Remove from state
//     } catch (error) {
//       console.error("Error cancelling appointment:", error);
//     }
//   };

//   return (
//     <div className="appointment-container-doctor">
//       <h2>Appointment Page</h2>
//       {loading ? (
//         <p>Loading appointments...</p>
//       ) : (
//         <div className="appointment-list">
//           {appointments.length > 0 ? (
//             appointments.map((appointment) => (
//               <div key={appointment.id} className="appointment-card-zz">
//                 <div className="appointment-info">
//                   <h4>{appointment.name}</h4>
//                   <p><strong>Date:</strong> {appointment.date}</p>
//                   <p><strong>Time:</strong> {appointment.time}</p>
//                   <p><strong>Contact:</strong> {appointment.contact}</p>
//                 </div>
//                 <button
//                   className="cancel-button"
                  
//                   onClick={() => handleCancelAppointment(appointment.id)}
//                 >
//                   Cancel Appointment
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="no-appointments">No appointments available.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Appointment;
import React, { useState, useEffect } from 'react';
import './appointment.css'; // CSS file for styling
import { db } from '../../../firebase/firebaseConfig'; // Import Firebase DB instance
import { collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'; // Firestore methods

function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'appointments'));
        const fetchedAppointments = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(fetchedAppointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Handle appointment acceptance
  const handleAcceptAppointment = async (id) => {
    try {
      await updateDoc(doc(db, 'appointments', id), { status: 'Accepted' });
      setAppointments(prevAppointments => prevAppointments.map(app =>
        app.id === id ? { ...app, status: 'Accepted' } : app
      ));
    } catch (error) {
      console.error("Error accepting appointment:", error);
    }
  };

  // Handle rescheduling appointment
  const handleAnotherDay = async (id) => {
    try {
      await updateDoc(doc(db, 'appointments', id), { status: 'declined' });
      setAppointments(prevAppointments => prevAppointments.map(app =>
        app.id === id ? { ...app, status: 'declined' } : app
      ));
    } catch (error) {
      console.error("Error requesting another day:", error);
    }
  };

  // Handle appointment cancellation
  const handleCancelAppointment = async (id) => {
    try {
      await deleteDoc(doc(db, 'appointments', id));
      setAppointments(appointments.filter((appointment) => appointment.id !== id));
    } catch (error) {
      console.error("Error cancelling appointment:", error);
    }
  };

  return (
    <div className="appointment-container-doctor">
      <h2>Appointment Page</h2>
      {loading ? (
        <p>Loading appointments...</p>
      ) : (
        <div className="appointment-list">
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <div key={appointment.id} className="appointment-card-zz">
                <div className="appointment-info">
                  <h4>{appointment.name}</h4>
                  <p><strong>Date:</strong> {appointment.date}</p>
                  <p><strong>Time:</strong> {appointment.time}</p>
                  <p><strong>Contact:</strong> {appointment.contact}</p>
                  <p><strong>Status:</strong> {appointment.status || 'Pending'}</p>
                </div>
                <button className="accept-button" onClick={() => handleAcceptAppointment(appointment.id)}>
                  Accept
                </button>
                <button className="reschedule-button" onClick={() => handleAnotherDay(appointment.id)}>
                reschedule
                </button>
                <button className="cancel-button" onClick={() => handleCancelAppointment(appointment.id)}>
                  delete
                </button>
              </div>
            ))
          ) : (
            <p className="no-appointments">No appointments available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Appointment;
