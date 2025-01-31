import React from 'react';
import './ourGoal.css';

function OurGoal() {
  return (
    <div className="our-goal-container">
      <h1 className="title">Our Goal</h1>
      <div className="content">
        <section className="goal-section">
          <h2>Our Mission</h2>
          <p>
            We strive to make healthcare accessible and efficient for everyone. By
            leveraging technology, we aim to improve the patient experience while
            providing doctors with the tools they need to manage appointments seamlessly.
          </p>
        </section>
        <section className="goal-section">
          <h2>What Drives Us</h2>
          <p>
            Our goal is to bridge the gap between patients and healthcare professionals
            by offering an easy-to-use platform that supports both booking and managing
            appointments. We’re passionate about improving healthcare services through
            technology.
          </p>
        </section>
        <section className="goal-section">
          <h2>Key Goals</h2>
          <ul>
            <li>Provide a hassle-free appointment booking experience</li>
            <li>Empower doctors to manage their schedules with ease</li>
            <li>Ensure secure and seamless payment processing</li>
            <li>Offer a user-friendly platform for both patients and doctors</li>
          </ul>
        </section>
        <section className="goal-section">
          <h2>Future Vision</h2>
          <p>
            We aim to continuously enhance our platform with new features that
            simplify healthcare management for both patients and doctors. In the
            future, we envision a world where all healthcare appointments are managed
            digitally, increasing efficiency and improving care.
          </p>
        </section>
      </div>
    </div>
  );
}

export default OurGoal;
