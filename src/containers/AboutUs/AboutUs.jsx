import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="title">About Us</h1>
      <div className="content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are a healthcare technology company dedicated to simplifying the
            interaction between patients and healthcare providers. With a focus
            on innovation, accessibility, and security, we aim to revolutionize
            the way healthcare is managed and delivered.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make healthcare accessible and hassle-free by
            bridging the gap between patients and doctors. We are committed to
            providing cutting-edge solutions that empower users to manage their
            healthcare journey effectively.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a future where healthcare is universally accessible,
            seamlessly integrated, and driven by technology. Our goal is to be a
            global leader in digital healthcare innovation.
          </p>
        </section>
        <section className="about-section values">
          <h2>Core Values</h2>
          <ul>
            <li>Innovation: Driving change through technology.</li>
            <li>Empathy: Putting patients and doctors first.</li>
            <li>Accessibility: Making healthcare easy for everyone.</li>
            <li>Integrity: Building trust through transparency.</li>
            <li>Excellence: Delivering outstanding experiences.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
