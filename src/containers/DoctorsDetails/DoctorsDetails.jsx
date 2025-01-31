import React from 'react';
import './DoctorsDetails.css';

function DoctorsDetails() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialization: 'Cardiologist',
      experience: '10 years',
      contact: 'sarah.johnson@healthcare.com',
      profilePic: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg' // Replace with real image URL
    },
    {
      id: 2,
      name: 'Dr. Michael Lee',
      specialization: 'Dermatologist',
      experience: '8 years',
      contact: 'michael.lee@healthcare.com',
      profilePic: 'https://www.shutterstock.com/image-photo/portrait-happy-friendly-male-indian-260nw-2033522228.jpg' // Replace with real image URL
    },
    {
      id: 3,
      name: 'Dr. Emily Brown',
      specialization: 'Pediatrician',
      experience: '12 years',
      contact: 'emily.brown@healthcare.com',
      profilePic: 'https://www.aucmed.edu/sites/g/files/krcnkv361/files/styles/atge_3_2_crop_md/public/2021-11/large-Smile-Guy-web.jpg?h=6b55786a&itok=Wy7cQpYS' // Replace with real image URL
    }
  ];

  return (
    <div className="doctors-container">
      <h1 className="title">Meet Our Doctors</h1>
      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="profile-pic" style={{ backgroundImage: `url(${doctor.profilePic})` }}></div>
            <h2 className="doctor-name">{doctor.name}</h2>
            <p className="specialization">{doctor.specialization}</p>
            <p className="experience">Experience: {doctor.experience}</p>
            <p className="contact">Contact: {doctor.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsDetails;
